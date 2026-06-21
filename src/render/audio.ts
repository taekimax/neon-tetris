// Asset-free WebAudio synthesis for SFX + a synthwave BGM loop.
type SfxName =
  | 'move'
  | 'rotate'
  | 'hold'
  | 'drop'
  | 'line'
  | 'tetris'
  | 'combo'
  | 'garbage'
  | 'over'
  | 'start';

export class AudioEngine {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private musicGain: GainNode | null = null;
  private muted = false;
  private bgmTimer: number | null = null;
  private step = 0;
  private nextNoteTime = 0;

  resume() {
    if (!this.ctx) {
      const Ctor =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      this.ctx = new Ctor();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.muted ? 0 : 0.9;
      this.master.connect(this.ctx.destination);
      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.value = 0.35;
      this.musicGain.connect(this.master);
    }
    if (this.ctx.state === 'suspended') void this.ctx.resume();
  }

  setMuted(m: boolean) {
    this.muted = m;
    if (this.master) this.master.gain.value = m ? 0 : 0.9;
  }
  isMuted() {
    return this.muted;
  }

  private blip(
    freq: number,
    dur: number,
    type: OscillatorType = 'square',
    gain = 0.2,
    slideTo?: number,
    dest?: AudioNode,
  ) {
    if (!this.ctx || !this.master) return;
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(Math.max(1, slideTo), t + dur);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(dest ?? this.master);
    o.start(t);
    o.stop(t + dur + 0.03);
  }

  private noise(dur: number, gain: number, filterFreq: number) {
    if (!this.ctx || !this.master) return;
    const t = this.ctx.currentTime;
    const len = Math.floor(this.ctx.sampleRate * dur);
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = filterFreq;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(filter).connect(g).connect(this.master);
    src.start(t);
    src.stop(t + dur);
  }

  sfx(name: SfxName) {
    if (!this.ctx) return;
    switch (name) {
      case 'move':
        this.blip(170, 0.04, 'square', 0.06);
        break;
      case 'rotate':
        this.blip(300, 0.05, 'triangle', 0.09);
        break;
      case 'hold':
        this.blip(520, 0.08, 'triangle', 0.12, 700);
        break;
      case 'drop':
        this.noise(0.1, 0.22, 1400);
        this.blip(120, 0.12, 'square', 0.16, 60);
        break;
      case 'line':
        this.blip(660, 0.16, 'sine', 0.18, 990);
        break;
      case 'tetris':
        [523, 659, 784, 1046].forEach((f, i) =>
          setTimeout(() => this.blip(f, 0.4, 'sine', 0.16), i * 50),
        );
        break;
      case 'combo':
        [440, 554, 659, 880].forEach((f, i) =>
          setTimeout(() => this.blip(f, 0.1, 'triangle', 0.13), i * 45),
        );
        break;
      case 'garbage':
        this.blip(90, 0.25, 'square', 0.22, 50);
        this.noise(0.18, 0.18, 600);
        break;
      case 'start':
        [392, 523, 659].forEach((f, i) =>
          setTimeout(() => this.blip(f, 0.2, 'triangle', 0.14), i * 80),
        );
        break;
      case 'over':
        [440, 349, 261, 174].forEach((f, i) =>
          setTimeout(() => this.blip(f, 0.3, 'sawtooth', 0.16), i * 140),
        );
        break;
    }
  }

  // --- BGM: simple synthwave bassline + arp scheduler ---
  startBgm() {
    if (!this.ctx || !this.musicGain || this.bgmTimer !== null) return;
    this.step = 0;
    this.nextNoteTime = this.ctx.currentTime + 0.1;
    this.bgmTimer = window.setInterval(() => this.scheduler(), 25);
  }
  stopBgm() {
    if (this.bgmTimer !== null) {
      clearInterval(this.bgmTimer);
      this.bgmTimer = null;
    }
  }

  // A minor-ish synthwave palette (Hz)
  private bass = [110, 110, 146.83, 110, 130.81, 130.81, 98, 98];
  private arp = [440, 523.25, 659.25, 783.99, 659.25, 523.25, 440, 587.33];

  private scheduler() {
    if (!this.ctx || !this.musicGain) return;
    const stepDur = 0.16; // 16th at ~94bpm feel
    while (this.nextNoteTime < this.ctx.currentTime + 0.12) {
      const s = this.step % 8;
      // bass on quarters
      if (s % 2 === 0) {
        this.scheduleNote(this.bass[s], this.nextNoteTime, stepDur * 1.8, 'sawtooth', 0.16);
      }
      // arp every step
      this.scheduleNote(this.arp[s], this.nextNoteTime, stepDur * 0.9, 'square', 0.05);
      // hat on offbeats
      if (s % 2 === 1) this.scheduleHat(this.nextNoteTime);
      this.nextNoteTime += stepDur;
      this.step++;
    }
  }

  private scheduleNote(
    freq: number,
    time: number,
    dur: number,
    type: OscillatorType,
    gain: number,
  ) {
    if (!this.ctx || !this.musicGain) return;
    const o = this.ctx.createOscillator();
    o.type = type;
    o.frequency.value = freq;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, time);
    g.gain.linearRampToValueAtTime(gain, time + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, time + dur);
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 1600;
    o.connect(filter).connect(g).connect(this.musicGain);
    o.start(time);
    o.stop(time + dur + 0.02);
  }

  private scheduleHat(time: number) {
    if (!this.ctx || !this.musicGain) return;
    const len = Math.floor(this.ctx.sampleRate * 0.03);
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    const hp = this.ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 7000;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.06, time);
    g.gain.exponentialRampToValueAtTime(0.0001, time + 0.03);
    src.connect(hp).connect(g).connect(this.musicGain);
    src.start(time);
    src.stop(time + 0.04);
  }
}
