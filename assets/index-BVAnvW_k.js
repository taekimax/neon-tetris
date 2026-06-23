var Zl=Object.defineProperty;var jl=(i,t,e)=>t in i?Zl(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var V=(i,t,e)=>jl(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gr="164",Jl=0,da=1,Ql=2,el=1,tc=2,on=3,Tn=0,we=1,ln=2,un=0,pi=1,Pr=2,fa=3,pa=4,ec=5,Bn=100,nc=101,ic=102,sc=103,rc=104,ac=200,oc=201,lc=202,cc=203,Lr=204,Dr=205,hc=206,uc=207,dc=208,fc=209,pc=210,mc=211,gc=212,_c=213,vc=214,xc=0,Mc=1,Sc=2,As=3,yc=4,Ec=5,Tc=6,bc=7,Is=0,Ac=1,wc=2,En=0,nl=1,il=2,sl=3,rl=4,Rc=5,al=6,ol=7,ll=300,_i=301,vi=302,Ir=303,Ur=304,Us=306,Nr=1e3,kn=1001,Fr=1002,Ae=1003,Cc=1004,Zi=1005,Ge=1006,Gs=1007,Hn=1008,bn=1009,Pc=1010,Lc=1011,cl=1012,hl=1013,xi=1014,cn=1015,Wi=1016,ul=1017,dl=1018,Xi=1020,Dc=35902,Ic=1021,Uc=1022,$e=1023,Nc=1024,Fc=1025,mi=1026,ki=1027,fl=1028,pl=1029,Oc=1030,ml=1031,gl=1033,Vs=33776,Ws=33777,Xs=33778,qs=33779,ma=35840,ga=35841,_a=35842,va=35843,xa=36196,Ma=37492,Sa=37496,ya=37808,Ea=37809,Ta=37810,ba=37811,Aa=37812,wa=37813,Ra=37814,Ca=37815,Pa=37816,La=37817,Da=37818,Ia=37819,Ua=37820,Na=37821,Ys=36492,Fa=36494,Oa=36495,Bc=36283,Ba=36284,za=36285,ka=36286,zc=3200,kc=3201,Vr=0,Hc=1,yn="",ke="srgb",wn="srgb-linear",Wr="display-p3",Ns="display-p3-linear",ws="linear",Kt="srgb",Rs="rec709",Cs="p3",qn=7680,Ha=519,Gc=512,Vc=513,Wc=514,_l=515,Xc=516,qc=517,Yc=518,Kc=519,Ga=35044,Va=35048,Wa="300 es",hn=2e3,Ps=2001;class yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xa=1234567;const Bi=Math.PI/180,Hi=180/Math.PI;function Ei(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ge[i&255]+ge[i>>8&255]+ge[i>>16&255]+ge[i>>24&255]+"-"+ge[t&255]+ge[t>>8&255]+"-"+ge[t>>16&15|64]+ge[t>>24&255]+"-"+ge[e&63|128]+ge[e>>8&255]+"-"+ge[e>>16&255]+ge[e>>24&255]+ge[n&255]+ge[n>>8&255]+ge[n>>16&255]+ge[n>>24&255]).toLowerCase()}function ye(i,t,e){return Math.max(t,Math.min(e,i))}function Xr(i,t){return(i%t+t)%t}function $c(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Zc(i,t,e){return i!==t?(e-i)/(t-i):0}function zi(i,t,e){return(1-e)*i+e*t}function jc(i,t,e,n){return zi(i,t,1-Math.exp(-e*n))}function Jc(i,t=1){return t-Math.abs(Xr(i,t*2)-t)}function Qc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function th(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function eh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function nh(i,t){return i+Math.random()*(t-i)}function ih(i){return i*(.5-Math.random())}function sh(i){i!==void 0&&(Xa=i);let t=Xa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rh(i){return i*Bi}function ah(i){return i*Hi}function oh(i){return(i&i-1)===0&&i!==0}function lh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ch(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hh(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),p=r((t-n)/2),d=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*p,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*p,o*c);break;case"ZXZ":i.set(l*p,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ui(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ks={DEG2RAD:Bi,RAD2DEG:Hi,generateUUID:Ei,clamp:ye,euclideanModulo:Xr,mapLinear:$c,inverseLerp:Zc,lerp:zi,damp:jc,pingpong:Jc,smoothstep:Qc,smootherstep:th,randInt:eh,randFloat:nh,randFloatSpread:ih,seededRandom:sh,degToRad:rh,radToDeg:ah,isPowerOfTwo:oh,ceilPowerOfTwo:lh,floorPowerOfTwo:ch,setQuaternionFromProperEuler:hh,normalize:Me,denormalize:ui};class Dt{constructor(t=0,e=0){Dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bt{constructor(t,e,n,s,r,a,o,l,c){bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],p=n[7],d=n[2],m=n[5],g=n[8],M=s[0],f=s[3],u=s[6],T=s[1],y=s[4],b=s[7],O=s[2],w=s[5],A=s[8];return r[0]=a*M+o*T+l*O,r[3]=a*f+o*y+l*w,r[6]=a*u+o*b+l*A,r[1]=c*M+h*T+p*O,r[4]=c*f+h*y+p*w,r[7]=c*u+h*b+p*A,r[2]=d*M+m*T+g*O,r[5]=d*f+m*y+g*w,r[8]=d*u+m*b+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*a-o*c,d=o*l-h*r,m=c*r-a*l,g=e*p+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=p*M,t[1]=(s*c-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=d*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=m*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply($s.makeScale(t,e)),this}rotate(t){return this.premultiply($s.makeRotation(-t)),this}translate(t,e){return this.premultiply($s.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $s=new bt;function vl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uh(){const i=Ls("canvas");return i.style.display="block",i}const qa={};function dh(i){i in qa||(qa[i]=!0,console.warn(i))}const Ya=new bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ka=new bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ji={[wn]:{transfer:ws,primaries:Rs,toReference:i=>i,fromReference:i=>i},[ke]:{transfer:Kt,primaries:Rs,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ns]:{transfer:ws,primaries:Cs,toReference:i=>i.applyMatrix3(Ka),fromReference:i=>i.applyMatrix3(Ya)},[Wr]:{transfer:Kt,primaries:Cs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ka),fromReference:i=>i.applyMatrix3(Ya).convertLinearToSRGB()}},fh=new Set([wn,Ns]),Xt={enabled:!0,_workingColorSpace:wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!fh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ji[t].toReference,s=ji[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ji[i].primaries},getTransfer:function(i){return i===yn?ws:ji[i].transfer}};function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yn;class ph{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yn===void 0&&(Yn=Ls("canvas")),Yn.width=t.width,Yn.height=t.height;const n=Yn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ls("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=gi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mh=0;class xl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=Ei(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(js(s[a].image)):r.push(js(s[a]))}else r=js(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function js(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ph.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gh=0;class ve extends yi{constructor(t=ve.DEFAULT_IMAGE,e=ve.DEFAULT_MAPPING,n=kn,s=kn,r=Ge,a=Hn,o=$e,l=bn,c=ve.DEFAULT_ANISOTROPY,h=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=Ei(),this.name="",this.source=new xl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ll)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nr:t.x=t.x-Math.floor(t.x);break;case kn:t.x=t.x<0?0:1;break;case Fr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nr:t.y=t.y-Math.floor(t.y);break;case kn:t.y=t.y<0?0:1;break;case Fr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ve.DEFAULT_IMAGE=null;ve.DEFAULT_MAPPING=ll;ve.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],p=l[8],d=l[1],m=l[5],g=l[9],M=l[2],f=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-M)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+M)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,b=(m+1)/2,O=(u+1)/2,w=(h+d)/4,A=(p+M)/4,k=(g+f)/4;return y>b&&y>O?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=A/n):b>O?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=w/s,r=k/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=A/r,s=k/r),this.set(n,s,r,e),this}let T=Math.sqrt((f-g)*(f-g)+(p-M)*(p-M)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(f-g)/T,this.y=(p-M)/T,this.z=(d-h)/T,this.w=Math.acos((c+m+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _h extends yi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ve(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new xl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends _h{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ml extends ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vh extends ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3];const d=r[a+0],m=r[a+1],g=r[a+2],M=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=M;return}if(p!==M||l!==d||c!==m||h!==g){let f=1-o;const u=l*d+c*m+h*g+p*M,T=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){const O=Math.sqrt(y),w=Math.atan2(O,u*T);f=Math.sin(f*w)/O,o=Math.sin(o*w)/O}const b=o*T;if(l=l*f+d*b,c=c*f+m*b,h=h*f+g*b,p=p*f+M*b,f===1-o){const O=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=O,c*=O,h*=O,p*=O}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*p+l*m-c*d,t[e+1]=l*g+h*d+c*p-o*m,t[e+2]=c*g+h*m+o*d-l*p,t[e+3]=h*g-o*p-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),p=o(r/2),d=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*p+c*m*g,this._y=c*m*p-d*h*g,this._z=c*h*g+d*m*p,this._w=c*h*p-d*m*g;break;case"YXZ":this._x=d*h*p+c*m*g,this._y=c*m*p-d*h*g,this._z=c*h*g-d*m*p,this._w=c*h*p+d*m*g;break;case"ZXY":this._x=d*h*p-c*m*g,this._y=c*m*p+d*h*g,this._z=c*h*g+d*m*p,this._w=c*h*p-d*m*g;break;case"ZYX":this._x=d*h*p-c*m*g,this._y=c*m*p+d*h*g,this._z=c*h*g-d*m*p,this._w=c*h*p+d*m*g;break;case"YZX":this._x=d*h*p+c*m*g,this._y=c*m*p+d*h*g,this._z=c*h*g-d*m*p,this._w=c*h*p-d*m*g;break;case"XZY":this._x=d*h*p-c*m*g,this._y=c*m*p-d*h*g,this._z=c*h*g+d*m*p,this._w=c*h*p+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],p=e[10],d=n+o+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>p){const m=2*Math.sqrt(1+n-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-n-p);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),p=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*p+this._w*d,this._x=n*p+this._x*d,this._y=s*p+this._y*d,this._z=r*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($a.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($a.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*c+a*p-o*h,this.y=n+l*h+o*c-r*p,this.z=s+l*p+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Js.copy(this).projectOnVector(t),this.sub(Js)}reflect(t){return this.sub(Js.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Js=new D,$a=new qi;class Vn{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Oe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Oe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Oe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Oe):Oe.fromBufferAttribute(r,a),Oe.applyMatrix4(t.matrixWorld),this.expandByPoint(Oe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ji.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ji.copy(n.boundingBox)),Ji.applyMatrix4(t.matrixWorld),this.union(Ji)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Oe),Oe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ri),Qi.subVectors(this.max,Ri),Kn.subVectors(t.a,Ri),$n.subVectors(t.b,Ri),Zn.subVectors(t.c,Ri),mn.subVectors($n,Kn),gn.subVectors(Zn,$n),Cn.subVectors(Kn,Zn);let e=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-Cn.z,Cn.y,mn.z,0,-mn.x,gn.z,0,-gn.x,Cn.z,0,-Cn.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-Cn.y,Cn.x,0];return!Qs(e,Kn,$n,Zn,Qi)||(e=[1,0,0,0,1,0,0,0,1],!Qs(e,Kn,$n,Zn,Qi))?!1:(ts.crossVectors(mn,gn),e=[ts.x,ts.y,ts.z],Qs(e,Kn,$n,Zn,Qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const tn=[new D,new D,new D,new D,new D,new D,new D,new D],Oe=new D,Ji=new Vn,Kn=new D,$n=new D,Zn=new D,mn=new D,gn=new D,Cn=new D,Ri=new D,Qi=new D,ts=new D,Pn=new D;function Qs(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Pn.fromArray(i,r);const o=s.x*Math.abs(Pn.x)+s.y*Math.abs(Pn.y)+s.z*Math.abs(Pn.z),l=t.dot(Pn),c=e.dot(Pn),h=n.dot(Pn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const xh=new Vn,Ci=new D,tr=new D;class Ti{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):xh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ci.subVectors(t,this.center);const e=Ci.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ci,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ci.copy(t.center).add(tr)),this.expandByPoint(Ci.copy(t.center).sub(tr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const en=new D,er=new D,es=new D,_n=new D,nr=new D,ns=new D,ir=new D;class Sl{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,en)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=en.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(en.copy(this.origin).addScaledVector(this.direction,e),en.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){er.copy(t).add(e).multiplyScalar(.5),es.copy(e).sub(t).normalize(),_n.copy(this.origin).sub(er);const r=t.distanceTo(e)*.5,a=-this.direction.dot(es),o=_n.dot(this.direction),l=-_n.dot(es),c=_n.lengthSq(),h=Math.abs(1-a*a);let p,d,m,g;if(h>0)if(p=a*l-o,d=a*o-l,g=r*h,p>=0)if(d>=-g)if(d<=g){const M=1/h;p*=M,d*=M,m=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=r,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;else d=-r,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;else d<=-g?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+d*(d+2*l)+c):d<=g?(p=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+d*(d+2*l)+c);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(er).addScaledVector(es,d),m}intersectSphere(t,e){en.subVectors(t.center,this.origin);const n=en.dot(this.direction),s=en.dot(en)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-d.z)*p,l=(t.max.z-d.z)*p):(o=(t.max.z-d.z)*p,l=(t.min.z-d.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,en)!==null}intersectTriangle(t,e,n,s,r){nr.subVectors(e,t),ns.subVectors(n,t),ir.crossVectors(nr,ns);let a=this.direction.dot(ir),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_n.subVectors(this.origin,t);const l=o*this.direction.dot(ns.crossVectors(_n,ns));if(l<0)return null;const c=o*this.direction.dot(nr.cross(_n));if(c<0||l+c>a)return null;const h=-o*_n.dot(ir);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,n,s,r,a,o,l,c,h,p,d,m,g,M,f){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,p,d,m,g,M,f)}set(t,e,n,s,r,a,o,l,c,h,p,d,m,g,M,f){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=p,u[14]=d,u[3]=m,u[7]=g,u[11]=M,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/jn.setFromMatrixColumn(t,0).length(),r=1/jn.setFromMatrixColumn(t,1).length(),a=1/jn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){const d=a*h,m=a*p,g=o*h,M=o*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=m+g*c,e[5]=d-M*c,e[9]=-o*l,e[2]=M-d*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,m=l*p,g=c*h,M=c*p;e[0]=d+M*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*p,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=M+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,m=l*p,g=c*h,M=c*p;e[0]=d-M*o,e[4]=-a*p,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=M-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,m=a*p,g=o*h,M=o*p;e[0]=l*h,e[4]=g*c-m,e[8]=d*c+M,e[1]=l*p,e[5]=M*c+d,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=M-d*p,e[8]=g*p+m,e[1]=p,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*p+g,e[10]=d-M*p}else if(t.order==="XZY"){const d=a*l,m=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=d*p+M,e[5]=a*h,e[9]=m*p-g,e[2]=g*p-m,e[6]=o*h,e[10]=M*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mh,t,Sh)}lookAt(t,e,n){const s=this.elements;return Ce.subVectors(t,e),Ce.lengthSq()===0&&(Ce.z=1),Ce.normalize(),vn.crossVectors(n,Ce),vn.lengthSq()===0&&(Math.abs(n.z)===1?Ce.x+=1e-4:Ce.z+=1e-4,Ce.normalize(),vn.crossVectors(n,Ce)),vn.normalize(),is.crossVectors(Ce,vn),s[0]=vn.x,s[4]=is.x,s[8]=Ce.x,s[1]=vn.y,s[5]=is.y,s[9]=Ce.y,s[2]=vn.z,s[6]=is.z,s[10]=Ce.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],p=n[5],d=n[9],m=n[13],g=n[2],M=n[6],f=n[10],u=n[14],T=n[3],y=n[7],b=n[11],O=n[15],w=s[0],A=s[4],k=s[8],S=s[12],v=s[1],N=s[5],W=s[9],C=s[13],Y=s[2],X=s[6],Q=s[10],j=s[14],z=s[3],tt=s[7],J=s[11],pt=s[15];return r[0]=a*w+o*v+l*Y+c*z,r[4]=a*A+o*N+l*X+c*tt,r[8]=a*k+o*W+l*Q+c*J,r[12]=a*S+o*C+l*j+c*pt,r[1]=h*w+p*v+d*Y+m*z,r[5]=h*A+p*N+d*X+m*tt,r[9]=h*k+p*W+d*Q+m*J,r[13]=h*S+p*C+d*j+m*pt,r[2]=g*w+M*v+f*Y+u*z,r[6]=g*A+M*N+f*X+u*tt,r[10]=g*k+M*W+f*Q+u*J,r[14]=g*S+M*C+f*j+u*pt,r[3]=T*w+y*v+b*Y+O*z,r[7]=T*A+y*N+b*X+O*tt,r[11]=T*k+y*W+b*Q+O*J,r[15]=T*S+y*C+b*j+O*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],d=t[10],m=t[14],g=t[3],M=t[7],f=t[11],u=t[15];return g*(+r*l*p-s*c*p-r*o*d+n*c*d+s*o*m-n*l*m)+M*(+e*l*m-e*c*d+r*a*d-s*a*m+s*c*h-r*l*h)+f*(+e*c*p-e*o*m-r*a*p+n*a*m+r*o*h-n*c*h)+u*(-s*o*h-e*l*p+e*o*d+s*a*p-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],d=t[10],m=t[11],g=t[12],M=t[13],f=t[14],u=t[15],T=p*f*c-M*d*c+M*l*m-o*f*m-p*l*u+o*d*u,y=g*d*c-h*f*c-g*l*m+a*f*m+h*l*u-a*d*u,b=h*M*c-g*p*c+g*o*m-a*M*m-h*o*u+a*p*u,O=g*p*l-h*M*l-g*o*d+a*M*d+h*o*f-a*p*f,w=e*T+n*y+s*b+r*O;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=T*A,t[1]=(M*d*r-p*f*r-M*s*m+n*f*m+p*s*u-n*d*u)*A,t[2]=(o*f*r-M*l*r+M*s*c-n*f*c-o*s*u+n*l*u)*A,t[3]=(p*l*r-o*d*r-p*s*c+n*d*c+o*s*m-n*l*m)*A,t[4]=y*A,t[5]=(h*f*r-g*d*r+g*s*m-e*f*m-h*s*u+e*d*u)*A,t[6]=(g*l*r-a*f*r-g*s*c+e*f*c+a*s*u-e*l*u)*A,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*m+e*l*m)*A,t[8]=b*A,t[9]=(g*p*r-h*M*r-g*n*m+e*M*m+h*n*u-e*p*u)*A,t[10]=(a*M*r-g*o*r+g*n*c-e*M*c-a*n*u+e*o*u)*A,t[11]=(h*o*r-a*p*r-h*n*c+e*p*c+a*n*m-e*o*m)*A,t[12]=O*A,t[13]=(h*M*s-g*p*s+g*n*d-e*M*d-h*n*f+e*p*f)*A,t[14]=(g*o*s-a*M*s-g*n*l+e*M*l+a*n*f-e*o*f)*A,t[15]=(a*p*s-h*o*s+h*n*l-e*p*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,p=o+o,d=r*c,m=r*h,g=r*p,M=a*h,f=a*p,u=o*p,T=l*c,y=l*h,b=l*p,O=n.x,w=n.y,A=n.z;return s[0]=(1-(M+u))*O,s[1]=(m+b)*O,s[2]=(g-y)*O,s[3]=0,s[4]=(m-b)*w,s[5]=(1-(d+u))*w,s[6]=(f+T)*w,s[7]=0,s[8]=(g+y)*A,s[9]=(f-T)*A,s[10]=(1-(d+M))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=jn.set(s[0],s[1],s[2]).length();const a=jn.set(s[4],s[5],s[6]).length(),o=jn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Be.copy(this);const c=1/r,h=1/a,p=1/o;return Be.elements[0]*=c,Be.elements[1]*=c,Be.elements[2]*=c,Be.elements[4]*=h,Be.elements[5]*=h,Be.elements[6]*=h,Be.elements[8]*=p,Be.elements[9]*=p,Be.elements[10]*=p,e.setFromRotationMatrix(Be),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=hn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),p=(e+t)/(e-t),d=(n+s)/(n-s);let m,g;if(o===hn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ps)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=hn){const l=this.elements,c=1/(e-t),h=1/(n-s),p=1/(a-r),d=(e+t)*c,m=(n+s)*h;let g,M;if(o===hn)g=(a+r)*p,M=-2*p;else if(o===Ps)g=r*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const jn=new D,Be=new Jt,Mh=new D(0,0,0),Sh=new D(1,1,1),vn=new D,is=new D,Ce=new D,Za=new Jt,ja=new qi;class Ve{constructor(t=0,e=0,n=0,s=Ve.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ye(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Za.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Za,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ja.setFromEuler(this),this.setFromQuaternion(ja,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ve.DEFAULT_ORDER="XYZ";class yl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yh=0;const Ja=new D,Jn=new qi,nn=new Jt,ss=new D,Pi=new D,Eh=new D,Th=new qi,Qa=new D(1,0,0),to=new D(0,1,0),eo=new D(0,0,1),no={type:"added"},bh={type:"removed"},Qn={type:"childadded",child:null},sr={type:"childremoved",child:null};class ae extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ae.DEFAULT_UP.clone();const t=new D,e=new Ve,n=new qi,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new bt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.premultiply(Jn),this}rotateX(t){return this.rotateOnAxis(Qa,t)}rotateY(t){return this.rotateOnAxis(to,t)}rotateZ(t){return this.rotateOnAxis(eo,t)}translateOnAxis(t,e){return Ja.copy(t).applyQuaternion(this.quaternion),this.position.add(Ja.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qa,t)}translateY(t){return this.translateOnAxis(to,t)}translateZ(t){return this.translateOnAxis(eo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ss.copy(t):ss.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(Pi,ss,this.up):nn.lookAt(ss,Pi,this.up),this.quaternion.setFromRotationMatrix(nn),s&&(nn.extractRotation(s.matrixWorld),Jn.setFromRotationMatrix(nn),this.quaternion.premultiply(Jn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(no),Qn.child=t,this.dispatchEvent(Qn),Qn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bh),sr.child=t,this.dispatchEvent(sr),sr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(no),Qn.child=t,this.dispatchEvent(Qn),Qn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,t,Eh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,Th,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),p=a(t.shapes),d=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ae.DEFAULT_UP=new D(0,1,0);ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ze=new D,sn=new D,rr=new D,rn=new D,ti=new D,ei=new D,io=new D,ar=new D,or=new D,lr=new D;class Ke{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ze.subVectors(t,e),s.cross(ze);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ze.subVectors(s,e),sn.subVectors(n,e),rr.subVectors(t,e);const a=ze.dot(ze),o=ze.dot(sn),l=ze.dot(rr),c=sn.dot(sn),h=sn.dot(rr),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;const d=1/p,m=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,rn.x),l.addScaledVector(a,rn.y),l.addScaledVector(o,rn.z),l)}static isFrontFacing(t,e,n,s){return ze.subVectors(n,e),sn.subVectors(t,e),ze.cross(sn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ze.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),ze.cross(sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ke.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ti.subVectors(s,n),ei.subVectors(r,n),ar.subVectors(t,n);const l=ti.dot(ar),c=ei.dot(ar);if(l<=0&&c<=0)return e.copy(n);or.subVectors(t,s);const h=ti.dot(or),p=ei.dot(or);if(h>=0&&p<=h)return e.copy(s);const d=l*p-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ti,a);lr.subVectors(t,r);const m=ti.dot(lr),g=ei.dot(lr);if(g>=0&&m<=g)return e.copy(r);const M=m*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ei,o);const f=h*g-m*p;if(f<=0&&p-h>=0&&m-g>=0)return io.subVectors(r,s),o=(p-h)/(p-h+(m-g)),e.copy(s).addScaledVector(io,o);const u=1/(f+M+d);return a=M*u,o=d*u,e.copy(n).addScaledVector(ti,a).addScaledVector(ei,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const El={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},rs={h:0,s:0,l:0};function cr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class At{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Xt.workingColorSpace){if(t=Xr(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=cr(a,r,t+1/3),this.g=cr(a,r,t),this.b=cr(a,r,t-1/3)}return Xt.toWorkingColorSpace(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const n=El[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return Xt.fromWorkingColorSpace(_e.copy(this),t),Math.round(ye(_e.r*255,0,255))*65536+Math.round(ye(_e.g*255,0,255))*256+Math.round(ye(_e.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(_e.copy(this),e);const n=_e.r,s=_e.g,r=_e.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(_e.copy(this),e),t.r=_e.r,t.g=_e.g,t.b=_e.b,t}getStyle(t=ke){Xt.fromWorkingColorSpace(_e.copy(this),t);const e=_e.r,n=_e.g,s=_e.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xn),this.setHSL(xn.h+t,xn.s+e,xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xn),t.getHSL(rs);const n=zi(xn.h,rs.h,e),s=zi(xn.s,rs.s,e),r=zi(xn.l,rs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _e=new At;At.NAMES=El;let Ah=0;class Wn extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=pi,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lr,this.blendDst=Dr,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ha,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qn,this.stencilZFail=qn,this.stencilZPass=qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Lr&&(n.blendSrc=this.blendSrc),this.blendDst!==Dr&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ha&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Tl extends Wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ve,this.combine=Is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const re=new D,as=new Dt;class De{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ga,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return dh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)as.fromBufferAttribute(this,e),as.applyMatrix3(t),this.setXY(e,as.x,as.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyMatrix3(t),this.setXYZ(e,re.x,re.y,re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyMatrix4(t),this.setXYZ(e,re.x,re.y,re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyNormalMatrix(t),this.setXYZ(e,re.x,re.y,re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.transformDirection(t),this.setXYZ(e,re.x,re.y,re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ui(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ui(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ui(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ui(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ui(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ga&&(t.usage=this.usage),t}}class bl extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Al extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class dn extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}}let wh=0;const Ue=new Jt,hr=new ae,ni=new D,Pe=new Vn,Li=new Vn,ce=new D;class Je extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vl(t)?Al:bl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,n){return Ue.makeTranslation(t,e,n),this.applyMatrix4(Ue),this}scale(t,e,n){return Ue.makeScale(t,e,n),this.applyMatrix4(Ue),this}lookAt(t){return hr.lookAt(t),hr.updateMatrix(),this.applyMatrix4(hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ni).negate(),this.translate(ni.x,ni.y,ni.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new dn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Pe.setFromBufferAttribute(r),this.morphTargetsRelative?(ce.addVectors(this.boundingBox.min,Pe.min),this.boundingBox.expandByPoint(ce),ce.addVectors(this.boundingBox.max,Pe.max),this.boundingBox.expandByPoint(ce)):(this.boundingBox.expandByPoint(Pe.min),this.boundingBox.expandByPoint(Pe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Pe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Li.setFromBufferAttribute(o),this.morphTargetsRelative?(ce.addVectors(Pe.min,Li.min),Pe.expandByPoint(ce),ce.addVectors(Pe.max,Li.max),Pe.expandByPoint(ce)):(Pe.expandByPoint(Li.min),Pe.expandByPoint(Li.max))}Pe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ce));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ce.fromBufferAttribute(o,c),l&&(ni.fromBufferAttribute(t,c),ce.add(ni)),s=Math.max(s,n.distanceToSquared(ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let k=0;k<n.count;k++)o[k]=new D,l[k]=new D;const c=new D,h=new D,p=new D,d=new Dt,m=new Dt,g=new Dt,M=new D,f=new D;function u(k,S,v){c.fromBufferAttribute(n,k),h.fromBufferAttribute(n,S),p.fromBufferAttribute(n,v),d.fromBufferAttribute(r,k),m.fromBufferAttribute(r,S),g.fromBufferAttribute(r,v),h.sub(c),p.sub(c),m.sub(d),g.sub(d);const N=1/(m.x*g.y-g.x*m.y);isFinite(N)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(N),f.copy(p).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(N),o[k].add(M),o[S].add(M),o[v].add(M),l[k].add(f),l[S].add(f),l[v].add(f))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let k=0,S=T.length;k<S;++k){const v=T[k],N=v.start,W=v.count;for(let C=N,Y=N+W;C<Y;C+=3)u(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const y=new D,b=new D,O=new D,w=new D;function A(k){O.fromBufferAttribute(s,k),w.copy(O);const S=o[k];y.copy(S),y.sub(O.multiplyScalar(O.dot(S))).normalize(),b.crossVectors(w,S);const N=b.dot(l[k])<0?-1:1;a.setXYZW(k,y.x,y.y,y.z,N)}for(let k=0,S=T.length;k<S;++k){const v=T[k],N=v.start,W=v.count;for(let C=N,Y=N+W;C<Y;C+=3)A(t.getX(C+0)),A(t.getX(C+1)),A(t.getX(C+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,p=new D;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),M=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,f),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ce.fromBufferAttribute(t,e),ce.normalize(),t.setXYZ(e,ce.x,ce.y,ce.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,p=o.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let M=0,f=l.length;M<f;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*h;for(let u=0;u<h;u++)d[g++]=c[m++]}return new De(d,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){const d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,d=c.length;p<d;p++){const m=c[p];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],p=r[c];for(let d=0,m=p.length;d<m;d++)h.push(p[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const so=new Jt,Ln=new Sl,os=new Ti,ro=new D,ii=new D,si=new D,ri=new D,ur=new D,ls=new D,cs=new Dt,hs=new Dt,us=new Dt,ao=new D,oo=new D,lo=new D,ds=new D,fs=new D;class Te extends ae{constructor(t=new Je,e=new Tl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ls.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],p=r[l];h!==0&&(ur.fromBufferAttribute(p,t),a?ls.addScaledVector(ur,h):ls.addScaledVector(ur.sub(e),h))}e.add(ls)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(r),Ln.copy(t.ray).recast(t.near),!(os.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(os,ro)===null||Ln.origin.distanceToSquared(ro)>(t.far-t.near)**2))&&(so.copy(r).invert(),Ln.copy(t.ray).applyMatrix4(so),!(n.boundingBox!==null&&Ln.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ln)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){const f=d[g],u=a[f.materialIndex],T=Math.max(f.start,m.start),y=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let b=T,O=y;b<O;b+=3){const w=o.getX(b),A=o.getX(b+1),k=o.getX(b+2);s=ps(this,u,t,n,c,h,p,w,A,k),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let f=g,u=M;f<u;f+=3){const T=o.getX(f),y=o.getX(f+1),b=o.getX(f+2);s=ps(this,a,t,n,c,h,p,T,y,b),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){const f=d[g],u=a[f.materialIndex],T=Math.max(f.start,m.start),y=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let b=T,O=y;b<O;b+=3){const w=b,A=b+1,k=b+2;s=ps(this,u,t,n,c,h,p,w,A,k),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let f=g,u=M;f<u;f+=3){const T=f,y=f+1,b=f+2;s=ps(this,a,t,n,c,h,p,T,y,b),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function Rh(i,t,e,n,s,r,a,o){let l;if(t.side===we?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Tn,o),l===null)return null;fs.copy(o),fs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(fs);return c<e.near||c>e.far?null:{distance:c,point:fs.clone(),object:i}}function ps(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ii),i.getVertexPosition(l,si),i.getVertexPosition(c,ri);const h=Rh(i,t,e,n,ii,si,ri,ds);if(h){s&&(cs.fromBufferAttribute(s,o),hs.fromBufferAttribute(s,l),us.fromBufferAttribute(s,c),h.uv=Ke.getInterpolation(ds,ii,si,ri,cs,hs,us,new Dt)),r&&(cs.fromBufferAttribute(r,o),hs.fromBufferAttribute(r,l),us.fromBufferAttribute(r,c),h.uv1=Ke.getInterpolation(ds,ii,si,ri,cs,hs,us,new Dt)),a&&(ao.fromBufferAttribute(a,o),oo.fromBufferAttribute(a,l),lo.fromBufferAttribute(a,c),h.normal=Ke.getInterpolation(ds,ii,si,ri,ao,oo,lo,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new D,materialIndex:0};Ke.getNormal(ii,si,ri,p.normal),h.face=p}return h}class Xn extends Je{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],p=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(h,3)),this.setAttribute("uv",new dn(p,2));function g(M,f,u,T,y,b,O,w,A,k,S){const v=b/A,N=O/k,W=b/2,C=O/2,Y=w/2,X=A+1,Q=k+1;let j=0,z=0;const tt=new D;for(let J=0;J<Q;J++){const pt=J*N-C;for(let It=0;It<X;It++){const qt=It*v-W;tt[M]=qt*T,tt[f]=pt*y,tt[u]=Y,c.push(tt.x,tt.y,tt.z),tt[M]=0,tt[f]=0,tt[u]=w>0?1:-1,h.push(tt.x,tt.y,tt.z),p.push(It/A),p.push(1-J/k),j+=1}}for(let J=0;J<k;J++)for(let pt=0;pt<A;pt++){const It=d+pt+X*J,qt=d+pt+X*(J+1),H=d+(pt+1)+X*(J+1),et=d+(pt+1)+X*J;l.push(It,qt,et),l.push(qt,H,et),z+=6}o.addGroup(m,z,S),m+=z,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Mi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Se(i){const t={};for(let e=0;e<i.length;e++){const n=Mi(i[e]);for(const s in n)t[s]=n[s]}return t}function Ch(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const qr={clone:Mi,merge:Se};var Ph=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class We extends Wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ph,this.fragmentShader=Lh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mi(t.uniforms),this.uniformsGroups=Ch(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Rl extends ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mn=new D,co=new Dt,ho=new Dt;class Fe extends Rl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Hi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hi*2*Math.atan(Math.tan(Bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mn.x,Mn.y).multiplyScalar(-t/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mn.x,Mn.y).multiplyScalar(-t/Mn.z)}getViewSize(t,e){return this.getViewBounds(t,co,ho),e.subVectors(ho,co)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Bi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ai=-90,oi=1;class Dh extends ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Fe(ai,oi,t,e);s.layers=this.layers,this.add(s);const r=new Fe(ai,oi,t,e);r.layers=this.layers,this.add(r);const a=new Fe(ai,oi,t,e);a.layers=this.layers,this.add(a);const o=new Fe(ai,oi,t,e);o.layers=this.layers,this.add(o);const l=new Fe(ai,oi,t,e);l.layers=this.layers,this.add(l);const c=new Fe(ai,oi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(p,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Cl extends ve{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:_i,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ih extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Cl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ge}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Xn(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:we,blending:un});r.uniforms.tEquirect.value=e;const a=new Te(s,r),o=e.minFilter;return e.minFilter===Hn&&(e.minFilter=Ge),new Dh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const dr=new D,Uh=new D,Nh=new bt;class Nn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=dr.subVectors(n,e).cross(Uh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(dr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Nh.getNormalMatrix(t),s=this.coplanarPoint(dr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dn=new Ti,ms=new D;class Yr{constructor(t=new Nn,e=new Nn,n=new Nn,s=new Nn,r=new Nn,a=new Nn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],p=s[6],d=s[7],m=s[8],g=s[9],M=s[10],f=s[11],u=s[12],T=s[13],y=s[14],b=s[15];if(n[0].setComponents(l-r,d-c,f-m,b-u).normalize(),n[1].setComponents(l+r,d+c,f+m,b+u).normalize(),n[2].setComponents(l+a,d+h,f+g,b+T).normalize(),n[3].setComponents(l-a,d-h,f-g,b-T).normalize(),n[4].setComponents(l-o,d-p,f-M,b-y).normalize(),e===hn)n[5].setComponents(l+o,d+p,f+M,b+y).normalize();else if(e===Ps)n[5].setComponents(o,p,M,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(t){return Dn.center.set(0,0,0),Dn.radius=.7071067811865476,Dn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ms.x=s.normal.x>0?t.max.x:t.min.x,ms.y=s.normal.y>0?t.max.y:t.min.y,ms.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ms)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Fh(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,p=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){const h=l.array,p=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,o),p.count===-1&&d.length===0&&i.bufferSubData(c,0,h),d.length!==0){for(let m=0,g=d.length;m<g;m++){const M=d[m];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}p.count!==-1&&(i.bufferSubData(c,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count),p.count=-1),l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Fs extends Je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,p=t/o,d=e/l,m=[],g=[],M=[],f=[];for(let u=0;u<h;u++){const T=u*d-a;for(let y=0;y<c;y++){const b=y*p-r;g.push(b,-T,0),M.push(0,0,1),f.push(y/o),f.push(1-u/l)}}for(let u=0;u<l;u++)for(let T=0;T<o;T++){const y=T+c*u,b=T+c*(u+1),O=T+1+c*(u+1),w=T+1+c*u;m.push(y,b,w),m.push(b,O,w)}this.setIndex(m),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(M,3)),this.setAttribute("uv",new dn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fs(t.width,t.height,t.widthSegments,t.heightSegments)}}var Oh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Yh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$h=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,au=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ou=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,du=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fu="gl_FragColor = linearToOutputTexel( gl_FragColor );",pu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,mu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_u=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Su=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Au=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ru=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Du=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Nu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ou=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ku=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ku=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$u=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ju=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ju=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Qu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,td=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ed=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ad=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,od=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ld=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ud=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,md=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_d=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,xd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Md=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ed=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Td=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ad=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ld=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Nd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Od=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$d=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ef=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,af=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,of=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,df=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ff=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tt={alphahash_fragment:Oh,alphahash_pars_fragment:Bh,alphamap_fragment:zh,alphamap_pars_fragment:kh,alphatest_fragment:Hh,alphatest_pars_fragment:Gh,aomap_fragment:Vh,aomap_pars_fragment:Wh,batching_pars_vertex:Xh,batching_vertex:qh,begin_vertex:Yh,beginnormal_vertex:Kh,bsdfs:$h,iridescence_fragment:Zh,bumpmap_pars_fragment:jh,clipping_planes_fragment:Jh,clipping_planes_pars_fragment:Qh,clipping_planes_pars_vertex:tu,clipping_planes_vertex:eu,color_fragment:nu,color_pars_fragment:iu,color_pars_vertex:su,color_vertex:ru,common:au,cube_uv_reflection_fragment:ou,defaultnormal_vertex:lu,displacementmap_pars_vertex:cu,displacementmap_vertex:hu,emissivemap_fragment:uu,emissivemap_pars_fragment:du,colorspace_fragment:fu,colorspace_pars_fragment:pu,envmap_fragment:mu,envmap_common_pars_fragment:gu,envmap_pars_fragment:_u,envmap_pars_vertex:vu,envmap_physical_pars_fragment:Cu,envmap_vertex:xu,fog_vertex:Mu,fog_pars_vertex:Su,fog_fragment:yu,fog_pars_fragment:Eu,gradientmap_pars_fragment:Tu,lightmap_pars_fragment:bu,lights_lambert_fragment:Au,lights_lambert_pars_fragment:wu,lights_pars_begin:Ru,lights_toon_fragment:Pu,lights_toon_pars_fragment:Lu,lights_phong_fragment:Du,lights_phong_pars_fragment:Iu,lights_physical_fragment:Uu,lights_physical_pars_fragment:Nu,lights_fragment_begin:Fu,lights_fragment_maps:Ou,lights_fragment_end:Bu,logdepthbuf_fragment:zu,logdepthbuf_pars_fragment:ku,logdepthbuf_pars_vertex:Hu,logdepthbuf_vertex:Gu,map_fragment:Vu,map_pars_fragment:Wu,map_particle_fragment:Xu,map_particle_pars_fragment:qu,metalnessmap_fragment:Yu,metalnessmap_pars_fragment:Ku,morphinstance_vertex:$u,morphcolor_vertex:Zu,morphnormal_vertex:ju,morphtarget_pars_vertex:Ju,morphtarget_vertex:Qu,normal_fragment_begin:td,normal_fragment_maps:ed,normal_pars_fragment:nd,normal_pars_vertex:id,normal_vertex:sd,normalmap_pars_fragment:rd,clearcoat_normal_fragment_begin:ad,clearcoat_normal_fragment_maps:od,clearcoat_pars_fragment:ld,iridescence_pars_fragment:cd,opaque_fragment:hd,packing:ud,premultiplied_alpha_fragment:dd,project_vertex:fd,dithering_fragment:pd,dithering_pars_fragment:md,roughnessmap_fragment:gd,roughnessmap_pars_fragment:_d,shadowmap_pars_fragment:vd,shadowmap_pars_vertex:xd,shadowmap_vertex:Md,shadowmask_pars_fragment:Sd,skinbase_vertex:yd,skinning_pars_vertex:Ed,skinning_vertex:Td,skinnormal_vertex:bd,specularmap_fragment:Ad,specularmap_pars_fragment:wd,tonemapping_fragment:Rd,tonemapping_pars_fragment:Cd,transmission_fragment:Pd,transmission_pars_fragment:Ld,uv_pars_fragment:Dd,uv_pars_vertex:Id,uv_vertex:Ud,worldpos_vertex:Nd,background_vert:Fd,background_frag:Od,backgroundCube_vert:Bd,backgroundCube_frag:zd,cube_vert:kd,cube_frag:Hd,depth_vert:Gd,depth_frag:Vd,distanceRGBA_vert:Wd,distanceRGBA_frag:Xd,equirect_vert:qd,equirect_frag:Yd,linedashed_vert:Kd,linedashed_frag:$d,meshbasic_vert:Zd,meshbasic_frag:jd,meshlambert_vert:Jd,meshlambert_frag:Qd,meshmatcap_vert:tf,meshmatcap_frag:ef,meshnormal_vert:nf,meshnormal_frag:sf,meshphong_vert:rf,meshphong_frag:af,meshphysical_vert:of,meshphysical_frag:lf,meshtoon_vert:cf,meshtoon_frag:hf,points_vert:uf,points_frag:df,shadow_vert:ff,shadow_frag:pf,sprite_vert:mf,sprite_frag:gf},it={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bt}},envmap:{envMap:{value:null},envMapRotation:{value:new bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}}},Ye={basic:{uniforms:Se([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Se([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new At(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Se([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Se([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Se([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new At(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Se([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Se([it.points,it.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Se([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Se([it.common,it.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Se([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Se([it.sprite,it.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new bt}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:Se([it.common,it.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:Se([it.lights,it.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Ye.physical={uniforms:Se([Ye.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bt}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const gs={r:0,b:0,g:0},In=new Ve,_f=new Jt;function vf(i,t,e,n,s,r,a){const o=new At(0);let l=r===!0?0:1,c,h,p=null,d=0,m=null;function g(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?e:t).get(y)),y}function M(T){let y=!1;const b=g(T);b===null?u(o,l):b&&b.isColor&&(u(b,1),y=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil)}function f(T,y){const b=g(y);b&&(b.isCubeTexture||b.mapping===Us)?(h===void 0&&(h=new Te(new Xn(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:Mi(Ye.backgroundCube.uniforms),vertexShader:Ye.backgroundCube.vertexShader,fragmentShader:Ye.backgroundCube.fragmentShader,side:we,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),In.copy(y.backgroundRotation),In.x*=-1,In.y*=-1,In.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_f.makeRotationFromEuler(In)),h.material.toneMapped=Xt.getTransfer(b.colorSpace)!==Kt,(p!==b||d!==b.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,p=b,d=b.version,m=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Te(new Fs(2,2),new We({name:"BackgroundMaterial",uniforms:Mi(Ye.background.uniforms),vertexShader:Ye.background.vertexShader,fragmentShader:Ye.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(b.colorSpace)!==Kt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(p!==b||d!==b.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,p=b,d=b.version,m=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function u(T,y){T.getRGB(gs,wl(i)),n.buffers.color.setClear(gs.r,gs.g,gs.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(T,y=1){o.set(T),l=y,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,u(o,l)},render:M,addToRenderList:f}}function xf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(v,N,W,C,Y){let X=!1;const Q=p(C,W,N);r!==Q&&(r=Q,c(r.object)),X=m(v,C,W,Y),X&&g(v,C,W,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,b(v,N,W,C),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function p(v,N,W){const C=W.wireframe===!0;let Y=n[v.id];Y===void 0&&(Y={},n[v.id]=Y);let X=Y[N.id];X===void 0&&(X={},Y[N.id]=X);let Q=X[C];return Q===void 0&&(Q=d(l()),X[C]=Q),Q}function d(v){const N=[],W=[],C=[];for(let Y=0;Y<e;Y++)N[Y]=0,W[Y]=0,C[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:C,object:v,attributes:{},index:null}}function m(v,N,W,C){const Y=r.attributes,X=N.attributes;let Q=0;const j=W.getAttributes();for(const z in j)if(j[z].location>=0){const J=Y[z];let pt=X[z];if(pt===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(pt=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(pt=v.instanceColor)),J===void 0||J.attribute!==pt||pt&&J.data!==pt.data)return!0;Q++}return r.attributesNum!==Q||r.index!==C}function g(v,N,W,C){const Y={},X=N.attributes;let Q=0;const j=W.getAttributes();for(const z in j)if(j[z].location>=0){let J=X[z];J===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(J=v.instanceColor));const pt={};pt.attribute=J,J&&J.data&&(pt.data=J.data),Y[z]=pt,Q++}r.attributes=Y,r.attributesNum=Q,r.index=C}function M(){const v=r.newAttributes;for(let N=0,W=v.length;N<W;N++)v[N]=0}function f(v){u(v,0)}function u(v,N){const W=r.newAttributes,C=r.enabledAttributes,Y=r.attributeDivisors;W[v]=1,C[v]===0&&(i.enableVertexAttribArray(v),C[v]=1),Y[v]!==N&&(i.vertexAttribDivisor(v,N),Y[v]=N)}function T(){const v=r.newAttributes,N=r.enabledAttributes;for(let W=0,C=N.length;W<C;W++)N[W]!==v[W]&&(i.disableVertexAttribArray(W),N[W]=0)}function y(v,N,W,C,Y,X,Q){Q===!0?i.vertexAttribIPointer(v,N,W,Y,X):i.vertexAttribPointer(v,N,W,C,Y,X)}function b(v,N,W,C){M();const Y=C.attributes,X=W.getAttributes(),Q=N.defaultAttributeValues;for(const j in X){const z=X[j];if(z.location>=0){let tt=Y[j];if(tt===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(tt=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(tt=v.instanceColor)),tt!==void 0){const J=tt.normalized,pt=tt.itemSize,It=t.get(tt);if(It===void 0)continue;const qt=It.buffer,H=It.type,et=It.bytesPerElement,ut=H===i.INT||H===i.UNSIGNED_INT||tt.gpuType===hl;if(tt.isInterleavedBufferAttribute){const st=tt.data,Ut=st.stride,Nt=tt.offset;if(st.isInstancedInterleavedBuffer){for(let L=0;L<z.locationSize;L++)u(z.location+L,st.meshPerAttribute);v.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let L=0;L<z.locationSize;L++)f(z.location+L);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let L=0;L<z.locationSize;L++)y(z.location+L,pt/z.locationSize,H,J,Ut*et,(Nt+pt/z.locationSize*L)*et,ut)}else{if(tt.isInstancedBufferAttribute){for(let st=0;st<z.locationSize;st++)u(z.location+st,tt.meshPerAttribute);v.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let st=0;st<z.locationSize;st++)f(z.location+st);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let st=0;st<z.locationSize;st++)y(z.location+st,pt/z.locationSize,H,J,pt*et,pt/z.locationSize*st*et,ut)}}else if(Q!==void 0){const J=Q[j];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(z.location,J);break;case 3:i.vertexAttrib3fv(z.location,J);break;case 4:i.vertexAttrib4fv(z.location,J);break;default:i.vertexAttrib1fv(z.location,J)}}}}T()}function O(){k();for(const v in n){const N=n[v];for(const W in N){const C=N[W];for(const Y in C)h(C[Y].object),delete C[Y];delete N[W]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const N=n[v.id];for(const W in N){const C=N[W];for(const Y in C)h(C[Y].object),delete C[Y];delete N[W]}delete n[v.id]}function A(v){for(const N in n){const W=n[N];if(W[v.id]===void 0)continue;const C=W[v.id];for(const Y in C)h(C[Y].object),delete C[Y];delete W[v.id]}}function k(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:k,resetDefaultState:S,dispose:O,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:f,disableUnusedAttributes:T}}function Mf(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,p){p!==0&&(i.drawArraysInstanced(n,c,h,p),e.update(h,n,p))}function o(c,h,p){if(p===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<p;m++)this.render(c[m],h[m]);else{d.multiDrawArraysWEBGL(n,c,0,h,0,p);let m=0;for(let g=0;g<p;g++)m+=h[g];e.update(m,n,1)}}function l(c,h,p,d){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,p);let g=0;for(let M=0;M<p;M++)g+=h[M];for(let M=0;M<d.length;M++)e.update(g,n,d[M])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Sf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==$e&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const A=w===Wi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==bn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==cn&&!A)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),M=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),u=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=m>0,O=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:M,maxAttributes:f,maxVertexUniforms:u,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:b,maxSamples:O}}function yf(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Nn,o=new bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||n!==0||s;return s=d,n=p.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){e=h(p,d,0)},this.setState=function(p,d,m){const g=p.clippingPlanes,M=p.clipIntersection,f=p.clipShadows,u=i.get(p);if(!s||g===null||g.length===0||r&&!f)r?h(null):c();else{const T=r?0:n,y=T*4;let b=u.clippingState||null;l.value=b,b=h(g,d,y,m);for(let O=0;O!==y;++O)b[O]=e[O];u.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,d,m,g){const M=p!==null?p.length:0;let f=null;if(M!==0){if(f=l.value,g!==!0||f===null){const u=m+M*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(f===null||f.length<u)&&(f=new Float32Array(u));for(let y=0,b=m;y!==M;++y,b+=4)a.copy(p[y]).applyMatrix4(T,o),a.normal.toArray(f,b),f[b+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,f}}function Ef(i){let t=new WeakMap;function e(a,o){return o===Ir?a.mapping=_i:o===Ur&&(a.mapping=vi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ir||o===Ur)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ih(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Kr extends Rl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const di=4,uo=[.125,.215,.35,.446,.526,.582],zn=20,fr=new Kr,fo=new At;let pr=null,mr=0,gr=0,_r=!1;const Fn=(1+Math.sqrt(5))/2,li=1/Fn,po=[new D(-Fn,li,0),new D(Fn,li,0),new D(-li,0,Fn),new D(li,0,Fn),new D(0,Fn,-li),new D(0,Fn,li),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class mo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){pr=this._renderer.getRenderTarget(),mr=this._renderer.getActiveCubeFace(),gr=this._renderer.getActiveMipmapLevel(),_r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_o(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pr,mr,gr),this._renderer.xr.enabled=_r,t.scissorTest=!1,_s(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pr=this._renderer.getRenderTarget(),mr=this._renderer.getActiveCubeFace(),gr=this._renderer.getActiveMipmapLevel(),_r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:Wi,format:$e,colorSpace:wn,depthBuffer:!1},s=go(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=go(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tf(r)),this._blurMaterial=bf(r,t,e)}return s}_compileMaterial(t){const e=new Te(this._lodPlanes[0],t);this._renderer.compile(e,fr)}_sceneToCubeUV(t,e,n,s){const o=new Fe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,d=h.toneMapping;h.getClearColor(fo),h.toneMapping=En,h.autoClear=!1;const m=new Tl({name:"PMREM.Background",side:we,depthWrite:!1,depthTest:!1}),g=new Te(new Xn,m);let M=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,M=!0):(m.color.copy(fo),M=!0);for(let u=0;u<6;u++){const T=u%3;T===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):T===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const y=this._cubeSize;_s(s,T*y,u>2?y:0,y,y),h.setRenderTarget(s),M&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=p,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===_i||t.mapping===vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_o());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Te(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;_s(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,fr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=po[(s-r-1)%po.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new Te(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*zn-1),M=r/g,f=isFinite(r)?1+Math.floor(h*M):zn;f>zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${zn}`);const u=[];let T=0;for(let A=0;A<zn;++A){const k=A/M,S=Math.exp(-k*k/2);u.push(S),A===0?T+=S:A<f&&(T+=2*S)}for(let A=0;A<u.length;A++)u[A]=u[A]/T;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const b=this._sizeLods[s],O=3*b*(s>y-di?s-y+di:0),w=4*(this._cubeSize-b);_s(e,O,w,3*b,2*b),l.setRenderTarget(e),l.render(p,fr)}}function Tf(i){const t=[],e=[],n=[];let s=i;const r=i-di+1+uo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-di?l=uo[a-i+di-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,p=1+c,d=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,g=6,M=3,f=2,u=1,T=new Float32Array(M*g*m),y=new Float32Array(f*g*m),b=new Float32Array(u*g*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,k=w>2?0:-1,S=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];T.set(S,M*g*w),y.set(d,f*g*w);const v=[w,w,w,w,w,w];b.set(v,u*g*w)}const O=new Je;O.setAttribute("position",new De(T,M)),O.setAttribute("uv",new De(y,f)),O.setAttribute("faceIndex",new De(b,u)),t.push(O),s>di&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function go(i,t,e){const n=new An(i,t,e);return n.texture.mapping=Us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _s(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function bf(i,t,e){const n=new Float32Array(zn),s=new D(0,1,0);return new We({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$r(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function _o(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$r(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function vo(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$r(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function $r(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Af(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ir||l===Ur,h=l===_i||l===vi;if(c||h){let p=t.get(o);const d=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new mo(i)),p=c?e.fromEquirectangular(o,p):e.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new mo(i)),p=c?e.fromEquirectangular(o):e.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),o.addEventListener("dispose",r),p.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function wf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Rf(i,t,e,n){const s={},r=new WeakMap;function a(p){const d=p.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const M=d.morphAttributes[g];for(let f=0,u=M.length;f<u;f++)t.remove(M[f])}d.removeEventListener("dispose",a),delete s[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(p,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(p){const d=p.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const m=p.morphAttributes;for(const g in m){const M=m[g];for(let f=0,u=M.length;f<u;f++)t.update(M[f],i.ARRAY_BUFFER)}}function c(p){const d=[],m=p.index,g=p.attributes.position;let M=0;if(m!==null){const T=m.array;M=m.version;for(let y=0,b=T.length;y<b;y+=3){const O=T[y+0],w=T[y+1],A=T[y+2];d.push(O,w,w,A,A,O)}}else if(g!==void 0){const T=g.array;M=g.version;for(let y=0,b=T.length/3-1;y<b;y+=3){const O=y+0,w=y+1,A=y+2;d.push(O,w,w,A,A,O)}}else return;const f=new(vl(d)?Al:bl)(d,1);f.version=M;const u=r.get(p);u&&t.remove(u),r.set(p,f)}function h(p){const d=r.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function Cf(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,m){i.drawElements(n,m,r,d*a),e.update(m,n,1)}function c(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,d*a,g),e.update(m,n,g))}function h(d,m,g){if(g===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let f=0;f<g;f++)this.render(d[f]/a,m[f]);else{M.multiDrawElementsWEBGL(n,m,0,r,d,0,g);let f=0;for(let u=0;u<g;u++)f+=m[u];e.update(f,n,1)}}function p(d,m,g,M){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<d.length;u++)c(d[u]/a,m[u],M[u]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,M,0,g);let u=0;for(let T=0;T<g;T++)u+=m[T];for(let T=0;T<M.length;T++)e.update(u,n,M[T])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function Pf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Lf(i,t,e){const n=new WeakMap,s=new ue;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==p){let v=function(){k.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var m=v;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),M===!0&&(b=2),f===!0&&(b=3);let O=o.attributes.position.count*b,w=1;O>t.maxTextureSize&&(w=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const A=new Float32Array(O*w*4*p),k=new Ml(A,O,w,p);k.type=cn,k.needsUpdate=!0;const S=b*4;for(let N=0;N<p;N++){const W=u[N],C=T[N],Y=y[N],X=O*w*4*N;for(let Q=0;Q<W.count;Q++){const j=Q*S;g===!0&&(s.fromBufferAttribute(W,Q),A[X+j+0]=s.x,A[X+j+1]=s.y,A[X+j+2]=s.z,A[X+j+3]=0),M===!0&&(s.fromBufferAttribute(C,Q),A[X+j+4]=s.x,A[X+j+5]=s.y,A[X+j+6]=s.z,A[X+j+7]=0),f===!0&&(s.fromBufferAttribute(Y,Q),A[X+j+8]=s.x,A[X+j+9]=s.y,A[X+j+10]=s.z,A[X+j+11]=Y.itemSize===4?s.w:1)}}d={count:p,texture:k,size:new Dt(O,w)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const M=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",M),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Df(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,p=t.get(l,h);if(s.get(p)!==c&&(t.update(p),s.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return p}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Ll extends ve{constructor(t,e,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:mi,h!==mi&&h!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===mi&&(n=xi),n===void 0&&h===ki&&(n=Xi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ae,this.minFilter=l!==void 0?l:Ae,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Dl=new ve,Il=new Ll(1,1);Il.compareFunction=_l;const Ul=new Ml,Nl=new vh,Fl=new Cl,xo=[],Mo=[],So=new Float32Array(16),yo=new Float32Array(9),Eo=new Float32Array(4);function bi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=xo[s];if(r===void 0&&(r=new Float32Array(s),xo[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Os(i,t){let e=Mo[t];e===void 0&&(e=new Int32Array(t),Mo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function If(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Uf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;i.uniform2fv(this.addr,t),le(e,t)}}function Nf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(oe(e,t))return;i.uniform3fv(this.addr,t),le(e,t)}}function Ff(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;i.uniform4fv(this.addr,t),le(e,t)}}function Of(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),le(e,t)}else{if(oe(e,n))return;Eo.set(n),i.uniformMatrix2fv(this.addr,!1,Eo),le(e,n)}}function Bf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),le(e,t)}else{if(oe(e,n))return;yo.set(n),i.uniformMatrix3fv(this.addr,!1,yo),le(e,n)}}function zf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),le(e,t)}else{if(oe(e,n))return;So.set(n),i.uniformMatrix4fv(this.addr,!1,So),le(e,n)}}function kf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Hf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;i.uniform2iv(this.addr,t),le(e,t)}}function Gf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(oe(e,t))return;i.uniform3iv(this.addr,t),le(e,t)}}function Vf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;i.uniform4iv(this.addr,t),le(e,t)}}function Wf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Xf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;i.uniform2uiv(this.addr,t),le(e,t)}}function qf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(oe(e,t))return;i.uniform3uiv(this.addr,t),le(e,t)}}function Yf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;i.uniform4uiv(this.addr,t),le(e,t)}}function Kf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Il:Dl;e.setTexture2D(t||r,s)}function $f(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Nl,s)}function Zf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Fl,s)}function jf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ul,s)}function Jf(i){switch(i){case 5126:return If;case 35664:return Uf;case 35665:return Nf;case 35666:return Ff;case 35674:return Of;case 35675:return Bf;case 35676:return zf;case 5124:case 35670:return kf;case 35667:case 35671:return Hf;case 35668:case 35672:return Gf;case 35669:case 35673:return Vf;case 5125:return Wf;case 36294:return Xf;case 36295:return qf;case 36296:return Yf;case 35678:case 36198:case 36298:case 36306:case 35682:return Kf;case 35679:case 36299:case 36307:return $f;case 35680:case 36300:case 36308:case 36293:return Zf;case 36289:case 36303:case 36311:case 36292:return jf}}function Qf(i,t){i.uniform1fv(this.addr,t)}function tp(i,t){const e=bi(t,this.size,2);i.uniform2fv(this.addr,e)}function ep(i,t){const e=bi(t,this.size,3);i.uniform3fv(this.addr,e)}function np(i,t){const e=bi(t,this.size,4);i.uniform4fv(this.addr,e)}function ip(i,t){const e=bi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function sp(i,t){const e=bi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function rp(i,t){const e=bi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ap(i,t){i.uniform1iv(this.addr,t)}function op(i,t){i.uniform2iv(this.addr,t)}function lp(i,t){i.uniform3iv(this.addr,t)}function cp(i,t){i.uniform4iv(this.addr,t)}function hp(i,t){i.uniform1uiv(this.addr,t)}function up(i,t){i.uniform2uiv(this.addr,t)}function dp(i,t){i.uniform3uiv(this.addr,t)}function fp(i,t){i.uniform4uiv(this.addr,t)}function pp(i,t,e){const n=this.cache,s=t.length,r=Os(e,s);oe(n,r)||(i.uniform1iv(this.addr,r),le(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Dl,r[a])}function mp(i,t,e){const n=this.cache,s=t.length,r=Os(e,s);oe(n,r)||(i.uniform1iv(this.addr,r),le(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Nl,r[a])}function gp(i,t,e){const n=this.cache,s=t.length,r=Os(e,s);oe(n,r)||(i.uniform1iv(this.addr,r),le(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Fl,r[a])}function _p(i,t,e){const n=this.cache,s=t.length,r=Os(e,s);oe(n,r)||(i.uniform1iv(this.addr,r),le(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ul,r[a])}function vp(i){switch(i){case 5126:return Qf;case 35664:return tp;case 35665:return ep;case 35666:return np;case 35674:return ip;case 35675:return sp;case 35676:return rp;case 5124:case 35670:return ap;case 35667:case 35671:return op;case 35668:case 35672:return lp;case 35669:case 35673:return cp;case 5125:return hp;case 36294:return up;case 36295:return dp;case 36296:return fp;case 35678:case 36198:case 36298:case 36306:case 35682:return pp;case 35679:case 36299:case 36307:return mp;case 35680:case 36300:case 36308:case 36293:return gp;case 36289:case 36303:case 36311:case 36292:return _p}}class xp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Jf(e.type)}}class Mp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vp(e.type)}}class Sp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const vr=/(\w+)(\])?(\[|\.)?/g;function To(i,t){i.seq.push(t),i.map[t.id]=t}function yp(i,t,e){const n=i.name,s=n.length;for(vr.lastIndex=0;;){const r=vr.exec(n),a=vr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){To(e,c===void 0?new xp(o,i,t):new Mp(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new Sp(o),To(e,p)),e=p}}}class bs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);yp(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function bo(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Ep=37297;let Tp=0;function bp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Ap(i){const t=Xt.getPrimaries(Xt.workingColorSpace),e=Xt.getPrimaries(i);let n;switch(t===e?n="":t===Cs&&e===Rs?n="LinearDisplayP3ToLinearSRGB":t===Rs&&e===Cs&&(n="LinearSRGBToLinearDisplayP3"),i){case wn:case Ns:return[n,"LinearTransferOETF"];case ke:case Wr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ao(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+bp(i.getShaderSource(t),a)}else return s}function wp(i,t){const e=Ap(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Rp(i,t){let e;switch(t){case nl:e="Linear";break;case il:e="Reinhard";break;case sl:e="OptimizedCineon";break;case rl:e="ACESFilmic";break;case al:e="AgX";break;case ol:e="Neutral";break;case Rc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Cp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oi).join(`
`)}function Pp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Lp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Oi(i){return i!==""}function wo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ro(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Dp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Or(i){return i.replace(Dp,Up)}const Ip=new Map;function Up(i,t){let e=Tt[t];if(e===void 0){const n=Ip.get(t);if(n!==void 0)e=Tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Or(e)}const Np=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Co(i){return i.replace(Np,Fp)}function Fp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Po(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Op(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===el?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===tc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===on&&(t="SHADOWMAP_TYPE_VSM"),t}function Bp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _i:case vi:t="ENVMAP_TYPE_CUBE";break;case Us:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vi:t="ENVMAP_MODE_REFRACTION";break}return t}function kp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Is:t="ENVMAP_BLENDING_MULTIPLY";break;case Ac:t="ENVMAP_BLENDING_MIX";break;case wc:t="ENVMAP_BLENDING_ADD";break}return t}function Hp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Gp(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Op(e),c=Bp(e),h=zp(e),p=kp(e),d=Hp(e),m=Cp(e),g=Pp(r),M=s.createProgram();let f,u,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Oi).join(`
`),f.length>0&&(f+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Oi).join(`
`),u.length>0&&(u+=`
`)):(f=[Po(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),u=[Po(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?Tt.tonemapping_pars_fragment:"",e.toneMapping!==En?Rp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,wp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Oi).join(`
`)),a=Or(a),a=wo(a,e),a=Ro(a,e),o=Or(o),o=wo(o,e),o=Ro(o,e),a=Co(a),o=Co(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,u=["#define varying in",e.glslVersion===Wa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=T+f+a,b=T+u+o,O=bo(s,s.VERTEX_SHADER,y),w=bo(s,s.FRAGMENT_SHADER,b);s.attachShader(M,O),s.attachShader(M,w),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function A(N){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(M).trim(),C=s.getShaderInfoLog(O).trim(),Y=s.getShaderInfoLog(w).trim();let X=!0,Q=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,O,w);else{const j=Ao(s,O,"vertex"),z=Ao(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+W+`
`+j+`
`+z)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(C===""||Y==="")&&(Q=!1);Q&&(N.diagnostics={runnable:X,programLog:W,vertexShader:{log:C,prefix:f},fragmentShader:{log:Y,prefix:u}})}s.deleteShader(O),s.deleteShader(w),k=new bs(s,M),S=Lp(s,M)}let k;this.getUniforms=function(){return k===void 0&&A(this),k};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(M,Ep)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tp++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=O,this.fragmentShader=w,this}let Vp=0;class Wp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Xp(t),e.set(t,n)),n}}class Xp{constructor(t){this.id=Vp++,this.code=t,this.usedTimes=0}}function qp(i,t,e,n,s,r,a){const o=new yl,l=new Wp,c=new Set,h=[],p=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(S){return c.add(S),S===0?"uv":`uv${S}`}function f(S,v,N,W,C){const Y=W.fog,X=C.geometry,Q=S.isMeshStandardMaterial?W.environment:null,j=(S.isMeshStandardMaterial?e:t).get(S.envMap||Q),z=j&&j.mapping===Us?j.image.height:null,tt=g[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const J=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,pt=J!==void 0?J.length:0;let It=0;X.morphAttributes.position!==void 0&&(It=1),X.morphAttributes.normal!==void 0&&(It=2),X.morphAttributes.color!==void 0&&(It=3);let qt,H,et,ut;if(tt){const Wt=Ye[tt];qt=Wt.vertexShader,H=Wt.fragmentShader}else qt=S.vertexShader,H=S.fragmentShader,l.update(S),et=l.getVertexShaderID(S),ut=l.getFragmentShaderID(S);const st=i.getRenderTarget(),Ut=C.isInstancedMesh===!0,Nt=C.isBatchedMesh===!0,L=!!S.map,$t=!!S.matcap,_t=!!j,Yt=!!S.aoMap,Mt=!!S.lightMap,Ot=!!S.bumpMap,Pt=!!S.normalMap,Bt=!!S.displacementMap,ee=!!S.emissiveMap,E=!!S.metalnessMap,_=!!S.roughnessMap,B=S.anisotropy>0,q=S.clearcoat>0,$=S.dispersion>0,Z=S.iridescence>0,gt=S.sheen>0,lt=S.transmission>0,ot=B&&!!S.anisotropyMap,wt=q&&!!S.clearcoatMap,nt=q&&!!S.clearcoatNormalMap,mt=q&&!!S.clearcoatRoughnessMap,zt=Z&&!!S.iridescenceMap,vt=Z&&!!S.iridescenceThicknessMap,ht=gt&&!!S.sheenColorMap,Rt=gt&&!!S.sheenRoughnessMap,Ft=!!S.specularMap,ie=!!S.specularColorMap,Ct=!!S.specularIntensityMap,R=lt&&!!S.transmissionMap,K=lt&&!!S.thicknessMap,G=!!S.gradientMap,rt=!!S.alphaMap,ct=S.alphaTest>0,kt=!!S.alphaHash,Zt=!!S.extensions;let ne=En;S.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ne=i.toneMapping);const fe={shaderID:tt,shaderType:S.type,shaderName:S.name,vertexShader:qt,fragmentShader:H,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:ut,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Nt,instancing:Ut,instancingColor:Ut&&C.instanceColor!==null,instancingMorph:Ut&&C.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:wn,alphaToCoverage:!!S.alphaToCoverage,map:L,matcap:$t,envMap:_t,envMapMode:_t&&j.mapping,envMapCubeUVHeight:z,aoMap:Yt,lightMap:Mt,bumpMap:Ot,normalMap:Pt,displacementMap:d&&Bt,emissiveMap:ee,normalMapObjectSpace:Pt&&S.normalMapType===Hc,normalMapTangentSpace:Pt&&S.normalMapType===Vr,metalnessMap:E,roughnessMap:_,anisotropy:B,anisotropyMap:ot,clearcoat:q,clearcoatMap:wt,clearcoatNormalMap:nt,clearcoatRoughnessMap:mt,dispersion:$,iridescence:Z,iridescenceMap:zt,iridescenceThicknessMap:vt,sheen:gt,sheenColorMap:ht,sheenRoughnessMap:Rt,specularMap:Ft,specularColorMap:ie,specularIntensityMap:Ct,transmission:lt,transmissionMap:R,thicknessMap:K,gradientMap:G,opaque:S.transparent===!1&&S.blending===pi&&S.alphaToCoverage===!1,alphaMap:rt,alphaTest:ct,alphaHash:kt,combine:S.combine,mapUv:L&&M(S.map.channel),aoMapUv:Yt&&M(S.aoMap.channel),lightMapUv:Mt&&M(S.lightMap.channel),bumpMapUv:Ot&&M(S.bumpMap.channel),normalMapUv:Pt&&M(S.normalMap.channel),displacementMapUv:Bt&&M(S.displacementMap.channel),emissiveMapUv:ee&&M(S.emissiveMap.channel),metalnessMapUv:E&&M(S.metalnessMap.channel),roughnessMapUv:_&&M(S.roughnessMap.channel),anisotropyMapUv:ot&&M(S.anisotropyMap.channel),clearcoatMapUv:wt&&M(S.clearcoatMap.channel),clearcoatNormalMapUv:nt&&M(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&M(S.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&M(S.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&M(S.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&M(S.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&M(S.sheenRoughnessMap.channel),specularMapUv:Ft&&M(S.specularMap.channel),specularColorMapUv:ie&&M(S.specularColorMap.channel),specularIntensityMapUv:Ct&&M(S.specularIntensityMap.channel),transmissionMapUv:R&&M(S.transmissionMap.channel),thicknessMapUv:K&&M(S.thicknessMap.channel),alphaMapUv:rt&&M(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Pt||B),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!X.attributes.uv&&(L||rt),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:C.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:It,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,useLegacyLights:i._useLegacyLights,decodeVideoTexture:L&&S.map.isVideoTexture===!0&&Xt.getTransfer(S.map.colorSpace)===Kt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ln,flipSided:S.side===we,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Zt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Zt&&S.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function u(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)v.push(N),v.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(T(v,S),y(v,S),v.push(i.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function T(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function y(S,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),S.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.useLegacyLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.alphaToCoverage&&o.enable(20),S.push(o.mask)}function b(S){const v=g[S.type];let N;if(v){const W=Ye[v];N=qr.clone(W.uniforms)}else N=S.uniforms;return N}function O(S,v){let N;for(let W=0,C=h.length;W<C;W++){const Y=h[W];if(Y.cacheKey===v){N=Y,++N.usedTimes;break}}return N===void 0&&(N=new Gp(i,v,S,r),h.push(N)),N}function w(S){if(--S.usedTimes===0){const v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function A(S){l.remove(S)}function k(){l.dispose()}return{getParameters:f,getProgramCacheKey:u,getUniforms:b,acquireProgram:O,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:k}}function Yp(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Kp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Lo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Do(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(p,d,m,g,M,f){let u=i[t];return u===void 0?(u={id:p.id,object:p,geometry:d,material:m,groupOrder:g,renderOrder:p.renderOrder,z:M,group:f},i[t]=u):(u.id=p.id,u.object=p,u.geometry=d,u.material=m,u.groupOrder=g,u.renderOrder=p.renderOrder,u.z=M,u.group=f),t++,u}function o(p,d,m,g,M,f){const u=a(p,d,m,g,M,f);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(p,d,m,g,M,f){const u=a(p,d,m,g,M,f);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(p,d){e.length>1&&e.sort(p||Kp),n.length>1&&n.sort(d||Lo),s.length>1&&s.sort(d||Lo)}function h(){for(let p=t,d=i.length;p<d;p++){const m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function $p(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Do,i.set(n,[a])):s>=r.length?(a=new Do,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Zp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new At};break;case"SpotLight":e={position:new D,direction:new D,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function jp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Jp=0;function Qp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tm(i){const t=new Zp,e=jp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new Jt,a=new Jt;function o(c,h){let p=0,d=0,m=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let g=0,M=0,f=0,u=0,T=0,y=0,b=0,O=0,w=0,A=0,k=0;c.sort(Qp);const S=h===!0?Math.PI:1;for(let N=0,W=c.length;N<W;N++){const C=c[N],Y=C.color,X=C.intensity,Q=C.distance,j=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)p+=Y.r*X*S,d+=Y.g*X*S,m+=Y.b*X*S;else if(C.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(C.sh.coefficients[z],X);k++}else if(C.isDirectionalLight){const z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity*S),C.castShadow){const tt=C.shadow,J=e.get(C);J.shadowBias=tt.bias,J.shadowNormalBias=tt.normalBias,J.shadowRadius=tt.radius,J.shadowMapSize=tt.mapSize,n.directionalShadow[g]=J,n.directionalShadowMap[g]=j,n.directionalShadowMatrix[g]=C.shadow.matrix,y++}n.directional[g]=z,g++}else if(C.isSpotLight){const z=t.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(Y).multiplyScalar(X*S),z.distance=Q,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,n.spot[f]=z;const tt=C.shadow;if(C.map&&(n.spotLightMap[w]=C.map,w++,tt.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[f]=tt.matrix,C.castShadow){const J=e.get(C);J.shadowBias=tt.bias,J.shadowNormalBias=tt.normalBias,J.shadowRadius=tt.radius,J.shadowMapSize=tt.mapSize,n.spotShadow[f]=J,n.spotShadowMap[f]=j,O++}f++}else if(C.isRectAreaLight){const z=t.get(C);z.color.copy(Y).multiplyScalar(X),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),n.rectArea[u]=z,u++}else if(C.isPointLight){const z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity*S),z.distance=C.distance,z.decay=C.decay,C.castShadow){const tt=C.shadow,J=e.get(C);J.shadowBias=tt.bias,J.shadowNormalBias=tt.normalBias,J.shadowRadius=tt.radius,J.shadowMapSize=tt.mapSize,J.shadowCameraNear=tt.camera.near,J.shadowCameraFar=tt.camera.far,n.pointShadow[M]=J,n.pointShadowMap[M]=j,n.pointShadowMatrix[M]=C.shadow.matrix,b++}n.point[M]=z,M++}else if(C.isHemisphereLight){const z=t.get(C);z.skyColor.copy(C.color).multiplyScalar(X*S),z.groundColor.copy(C.groundColor).multiplyScalar(X*S),n.hemi[T]=z,T++}}u>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=d,n.ambient[2]=m;const v=n.hash;(v.directionalLength!==g||v.pointLength!==M||v.spotLength!==f||v.rectAreaLength!==u||v.hemiLength!==T||v.numDirectionalShadows!==y||v.numPointShadows!==b||v.numSpotShadows!==O||v.numSpotMaps!==w||v.numLightProbes!==k)&&(n.directional.length=g,n.spot.length=f,n.rectArea.length=u,n.point.length=M,n.hemi.length=T,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=O,n.spotShadowMap.length=O,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=O+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=k,v.directionalLength=g,v.pointLength=M,v.spotLength=f,v.rectAreaLength=u,v.hemiLength=T,v.numDirectionalShadows=y,v.numPointShadows=b,v.numSpotShadows=O,v.numSpotMaps=w,v.numLightProbes=k,n.version=Jp++)}function l(c,h){let p=0,d=0,m=0,g=0,M=0;const f=h.matrixWorldInverse;for(let u=0,T=c.length;u<T;u++){const y=c[u];if(y.isDirectionalLight){const b=n.directional[p];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),p++}else if(y.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),m++}else if(y.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),a.identity(),r.copy(y.matrixWorld),r.premultiply(f),a.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),d++}else if(y.isHemisphereLight){const b=n.hemi[M];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(f),M++}}}return{setup:o,setupView:l,state:n}}function Io(i){const t=new tm(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(h){t.setup(e,h)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function em(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Io(i),t.set(s,[o])):r>=a.length?(o=new Io(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class nm extends Wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class im extends Wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const sm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function am(i,t,e){let n=new Yr;const s=new Dt,r=new Dt,a=new ue,o=new nm({depthPacking:kc}),l=new im,c={},h=e.maxTextureSize,p={[Tn]:we,[we]:Tn,[ln]:ln},d=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:sm,fragmentShader:rm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Je;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Te(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=el;let u=this.type;this.render=function(w,A,k){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),v=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),W=i.state;W.setBlending(un),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const C=u!==on&&this.type===on,Y=u===on&&this.type!==on;for(let X=0,Q=w.length;X<Q;X++){const j=w[X],z=j.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const tt=z.getFrameExtents();if(s.multiply(tt),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,z.mapSize.y=r.y)),z.map===null||C===!0||Y===!0){const pt=this.type!==on?{minFilter:Ae,magFilter:Ae}:{};z.map!==null&&z.map.dispose(),z.map=new An(s.x,s.y,pt),z.map.texture.name=j.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const J=z.getViewportCount();for(let pt=0;pt<J;pt++){const It=z.getViewport(pt);a.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),W.viewport(a),z.updateMatrices(j,pt),n=z.getFrustum(),b(A,k,z.camera,j,this.type)}z.isPointLightShadow!==!0&&this.type===on&&T(z,k),z.needsUpdate=!1}u=this.type,f.needsUpdate=!1,i.setRenderTarget(S,v,N)};function T(w,A){const k=t.update(M);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new An(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,k,d,M,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,k,m,M,null)}function y(w,A,k,S){let v=null;const N=k.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)v=N;else if(v=k.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=v.uuid,C=A.uuid;let Y=c[W];Y===void 0&&(Y={},c[W]=Y);let X=Y[C];X===void 0&&(X=v.clone(),Y[C]=X,A.addEventListener("dispose",O)),v=X}if(v.visible=A.visible,v.wireframe=A.wireframe,S===on?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:p[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,k.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const W=i.properties.get(v);W.light=k}return v}function b(w,A,k,S,v){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===on)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld);const C=t.update(w),Y=w.material;if(Array.isArray(Y)){const X=C.groups;for(let Q=0,j=X.length;Q<j;Q++){const z=X[Q],tt=Y[z.materialIndex];if(tt&&tt.visible){const J=y(w,tt,S,v);w.onBeforeShadow(i,w,A,k,C,J,z),i.renderBufferDirect(k,null,C,J,w,z),w.onAfterShadow(i,w,A,k,C,J,z)}}}else if(Y.visible){const X=y(w,Y,S,v);w.onBeforeShadow(i,w,A,k,C,X,null),i.renderBufferDirect(k,null,C,X,w,null),w.onAfterShadow(i,w,A,k,C,X,null)}}const W=w.children;for(let C=0,Y=W.length;C<Y;C++)b(W[C],A,k,S,v)}function O(w){w.target.removeEventListener("dispose",O);for(const k in c){const S=c[k],v=w.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}function om(i){function t(){let R=!1;const K=new ue;let G=null;const rt=new ue(0,0,0,0);return{setMask:function(ct){G!==ct&&!R&&(i.colorMask(ct,ct,ct,ct),G=ct)},setLocked:function(ct){R=ct},setClear:function(ct,kt,Zt,ne,fe){fe===!0&&(ct*=ne,kt*=ne,Zt*=ne),K.set(ct,kt,Zt,ne),rt.equals(K)===!1&&(i.clearColor(ct,kt,Zt,ne),rt.copy(K))},reset:function(){R=!1,G=null,rt.set(-1,0,0,0)}}}function e(){let R=!1,K=null,G=null,rt=null;return{setTest:function(ct){ct?ut(i.DEPTH_TEST):st(i.DEPTH_TEST)},setMask:function(ct){K!==ct&&!R&&(i.depthMask(ct),K=ct)},setFunc:function(ct){if(G!==ct){switch(ct){case xc:i.depthFunc(i.NEVER);break;case Mc:i.depthFunc(i.ALWAYS);break;case Sc:i.depthFunc(i.LESS);break;case As:i.depthFunc(i.LEQUAL);break;case yc:i.depthFunc(i.EQUAL);break;case Ec:i.depthFunc(i.GEQUAL);break;case Tc:i.depthFunc(i.GREATER);break;case bc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}G=ct}},setLocked:function(ct){R=ct},setClear:function(ct){rt!==ct&&(i.clearDepth(ct),rt=ct)},reset:function(){R=!1,K=null,G=null,rt=null}}}function n(){let R=!1,K=null,G=null,rt=null,ct=null,kt=null,Zt=null,ne=null,fe=null;return{setTest:function(Wt){R||(Wt?ut(i.STENCIL_TEST):st(i.STENCIL_TEST))},setMask:function(Wt){K!==Wt&&!R&&(i.stencilMask(Wt),K=Wt)},setFunc:function(Wt,Xe,xe){(G!==Wt||rt!==Xe||ct!==xe)&&(i.stencilFunc(Wt,Xe,xe),G=Wt,rt=Xe,ct=xe)},setOp:function(Wt,Xe,xe){(kt!==Wt||Zt!==Xe||ne!==xe)&&(i.stencilOp(Wt,Xe,xe),kt=Wt,Zt=Xe,ne=xe)},setLocked:function(Wt){R=Wt},setClear:function(Wt){fe!==Wt&&(i.clearStencil(Wt),fe=Wt)},reset:function(){R=!1,K=null,G=null,rt=null,ct=null,kt=null,Zt=null,ne=null,fe=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},p=new WeakMap,d=[],m=null,g=!1,M=null,f=null,u=null,T=null,y=null,b=null,O=null,w=new At(0,0,0),A=0,k=!1,S=null,v=null,N=null,W=null,C=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Q=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=Q>=1):j.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=Q>=2);let z=null,tt={};const J=i.getParameter(i.SCISSOR_BOX),pt=i.getParameter(i.VIEWPORT),It=new ue().fromArray(J),qt=new ue().fromArray(pt);function H(R,K,G,rt){const ct=new Uint8Array(4),kt=i.createTexture();i.bindTexture(R,kt),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<G;Zt++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,rt,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(K+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return kt}const et={};et[i.TEXTURE_2D]=H(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=H(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=H(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=H(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ut(i.DEPTH_TEST),r.setFunc(As),Ot(!1),Pt(da),ut(i.CULL_FACE),Yt(un);function ut(R){c[R]!==!0&&(i.enable(R),c[R]=!0)}function st(R){c[R]!==!1&&(i.disable(R),c[R]=!1)}function Ut(R,K){return h[R]!==K?(i.bindFramebuffer(R,K),h[R]=K,R===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=K),R===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=K),!0):!1}function Nt(R,K){let G=d,rt=!1;if(R){G=p.get(K),G===void 0&&(G=[],p.set(K,G));const ct=R.textures;if(G.length!==ct.length||G[0]!==i.COLOR_ATTACHMENT0){for(let kt=0,Zt=ct.length;kt<Zt;kt++)G[kt]=i.COLOR_ATTACHMENT0+kt;G.length=ct.length,rt=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,rt=!0);rt&&i.drawBuffers(G)}function L(R){return m!==R?(i.useProgram(R),m=R,!0):!1}const $t={[Bn]:i.FUNC_ADD,[nc]:i.FUNC_SUBTRACT,[ic]:i.FUNC_REVERSE_SUBTRACT};$t[sc]=i.MIN,$t[rc]=i.MAX;const _t={[ac]:i.ZERO,[oc]:i.ONE,[lc]:i.SRC_COLOR,[Lr]:i.SRC_ALPHA,[pc]:i.SRC_ALPHA_SATURATE,[dc]:i.DST_COLOR,[hc]:i.DST_ALPHA,[cc]:i.ONE_MINUS_SRC_COLOR,[Dr]:i.ONE_MINUS_SRC_ALPHA,[fc]:i.ONE_MINUS_DST_COLOR,[uc]:i.ONE_MINUS_DST_ALPHA,[mc]:i.CONSTANT_COLOR,[gc]:i.ONE_MINUS_CONSTANT_COLOR,[_c]:i.CONSTANT_ALPHA,[vc]:i.ONE_MINUS_CONSTANT_ALPHA};function Yt(R,K,G,rt,ct,kt,Zt,ne,fe,Wt){if(R===un){g===!0&&(st(i.BLEND),g=!1);return}if(g===!1&&(ut(i.BLEND),g=!0),R!==ec){if(R!==M||Wt!==k){if((f!==Bn||y!==Bn)&&(i.blendEquation(i.FUNC_ADD),f=Bn,y=Bn),Wt)switch(R){case pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pr:i.blendFunc(i.ONE,i.ONE);break;case fa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}u=null,T=null,b=null,O=null,w.set(0,0,0),A=0,M=R,k=Wt}return}ct=ct||K,kt=kt||G,Zt=Zt||rt,(K!==f||ct!==y)&&(i.blendEquationSeparate($t[K],$t[ct]),f=K,y=ct),(G!==u||rt!==T||kt!==b||Zt!==O)&&(i.blendFuncSeparate(_t[G],_t[rt],_t[kt],_t[Zt]),u=G,T=rt,b=kt,O=Zt),(ne.equals(w)===!1||fe!==A)&&(i.blendColor(ne.r,ne.g,ne.b,fe),w.copy(ne),A=fe),M=R,k=!1}function Mt(R,K){R.side===ln?st(i.CULL_FACE):ut(i.CULL_FACE);let G=R.side===we;K&&(G=!G),Ot(G),R.blending===pi&&R.transparent===!1?Yt(un):Yt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),r.setFunc(R.depthFunc),r.setTest(R.depthTest),r.setMask(R.depthWrite),s.setMask(R.colorWrite);const rt=R.stencilWrite;a.setTest(rt),rt&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ee(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):st(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(R){S!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),S=R)}function Pt(R){R!==Jl?(ut(i.CULL_FACE),R!==v&&(R===da?i.cullFace(i.BACK):R===Ql?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):st(i.CULL_FACE),v=R}function Bt(R){R!==N&&(X&&i.lineWidth(R),N=R)}function ee(R,K,G){R?(ut(i.POLYGON_OFFSET_FILL),(W!==K||C!==G)&&(i.polygonOffset(K,G),W=K,C=G)):st(i.POLYGON_OFFSET_FILL)}function E(R){R?ut(i.SCISSOR_TEST):st(i.SCISSOR_TEST)}function _(R){R===void 0&&(R=i.TEXTURE0+Y-1),z!==R&&(i.activeTexture(R),z=R)}function B(R,K,G){G===void 0&&(z===null?G=i.TEXTURE0+Y-1:G=z);let rt=tt[G];rt===void 0&&(rt={type:void 0,texture:void 0},tt[G]=rt),(rt.type!==R||rt.texture!==K)&&(z!==G&&(i.activeTexture(G),z=G),i.bindTexture(R,K||et[R]),rt.type=R,rt.texture=K)}function q(){const R=tt[z];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function gt(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function lt(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function wt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function nt(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function mt(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function zt(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function vt(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ht(R){It.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),It.copy(R))}function Rt(R){qt.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),qt.copy(R))}function Ft(R,K){let G=l.get(K);G===void 0&&(G=new WeakMap,l.set(K,G));let rt=G.get(R);rt===void 0&&(rt=i.getUniformBlockIndex(K,R.name),G.set(R,rt))}function ie(R,K){const rt=l.get(K).get(R);o.get(K)!==rt&&(i.uniformBlockBinding(K,rt,R.__bindingPointIndex),o.set(K,rt))}function Ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},z=null,tt={},h={},p=new WeakMap,d=[],m=null,g=!1,M=null,f=null,u=null,T=null,y=null,b=null,O=null,w=new At(0,0,0),A=0,k=!1,S=null,v=null,N=null,W=null,C=null,It.set(0,0,i.canvas.width,i.canvas.height),qt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:ut,disable:st,bindFramebuffer:Ut,drawBuffers:Nt,useProgram:L,setBlending:Yt,setMaterial:Mt,setFlipSided:Ot,setCullFace:Pt,setLineWidth:Bt,setPolygonOffset:ee,setScissorTest:E,activeTexture:_,bindTexture:B,unbindTexture:q,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:zt,texImage3D:vt,updateUBOMapping:Ft,uniformBlockBinding:ie,texStorage2D:nt,texStorage3D:mt,texSubImage2D:gt,texSubImage3D:lt,compressedTexSubImage2D:ot,compressedTexSubImage3D:wt,scissor:ht,viewport:Rt,reset:Ct}}function lm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,h=new WeakMap;let p;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return m?new OffscreenCanvas(E,_):Ls("canvas")}function M(E,_,B){let q=1;const $=ee(E);if(($.width>B||$.height>B)&&(q=B/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Z=Math.floor(q*$.width),gt=Math.floor(q*$.height);p===void 0&&(p=g(Z,gt));const lt=_?g(Z,gt):p;return lt.width=Z,lt.height=gt,lt.getContext("2d").drawImage(E,0,0,Z,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Z+"x"+gt+")."),lt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),E;return E}function f(E){return E.generateMipmaps&&E.minFilter!==Ae&&E.minFilter!==Ge}function u(E){i.generateMipmap(E)}function T(E,_,B,q,$=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Z=_;if(_===i.RED&&(B===i.FLOAT&&(Z=i.R32F),B===i.HALF_FLOAT&&(Z=i.R16F),B===i.UNSIGNED_BYTE&&(Z=i.R8)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.R8UI),B===i.UNSIGNED_SHORT&&(Z=i.R16UI),B===i.UNSIGNED_INT&&(Z=i.R32UI),B===i.BYTE&&(Z=i.R8I),B===i.SHORT&&(Z=i.R16I),B===i.INT&&(Z=i.R32I)),_===i.RG&&(B===i.FLOAT&&(Z=i.RG32F),B===i.HALF_FLOAT&&(Z=i.RG16F),B===i.UNSIGNED_BYTE&&(Z=i.RG8)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RG8UI),B===i.UNSIGNED_SHORT&&(Z=i.RG16UI),B===i.UNSIGNED_INT&&(Z=i.RG32UI),B===i.BYTE&&(Z=i.RG8I),B===i.SHORT&&(Z=i.RG16I),B===i.INT&&(Z=i.RG32I)),_===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),_===i.RGBA){const gt=$?ws:Xt.getTransfer(q);B===i.FLOAT&&(Z=i.RGBA32F),B===i.HALF_FLOAT&&(Z=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Z=gt===Kt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function y(E,_){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ae&&E.minFilter!==Ge?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function b(E){const _=E.target;_.removeEventListener("dispose",b),w(_),_.isVideoTexture&&h.delete(_)}function O(E){const _=E.target;_.removeEventListener("dispose",O),k(_)}function w(E){const _=n.get(E);if(_.__webglInit===void 0)return;const B=E.source,q=d.get(B);if(q){const $=q[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&A(E),Object.keys(q).length===0&&d.delete(B)}n.remove(E)}function A(E){const _=n.get(E);i.deleteTexture(_.__webglTexture);const B=E.source,q=d.get(B);delete q[_.__cacheKey],a.memory.textures--}function k(E){const _=n.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let $=0;$<_.__webglFramebuffer[q].length;$++)i.deleteFramebuffer(_.__webglFramebuffer[q][$]);else i.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)i.deleteFramebuffer(_.__webglFramebuffer[q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=E.textures;for(let q=0,$=B.length;q<$;q++){const Z=n.get(B[q]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(B[q])}n.remove(E)}let S=0;function v(){S=0}function N(){const E=S;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),S+=1,E}function W(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function C(E,_){const B=n.get(E);if(E.isVideoTexture&&Pt(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){const q=E.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{It(B,E,_);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function Y(E,_){const B=n.get(E);if(E.version>0&&B.__version!==E.version){It(B,E,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function X(E,_){const B=n.get(E);if(E.version>0&&B.__version!==E.version){It(B,E,_);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function Q(E,_){const B=n.get(E);if(E.version>0&&B.__version!==E.version){qt(B,E,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}const j={[Nr]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[Fr]:i.MIRRORED_REPEAT},z={[Ae]:i.NEAREST,[Cc]:i.NEAREST_MIPMAP_NEAREST,[Zi]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[Gs]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},tt={[Gc]:i.NEVER,[Kc]:i.ALWAYS,[Vc]:i.LESS,[_l]:i.LEQUAL,[Wc]:i.EQUAL,[Yc]:i.GEQUAL,[Xc]:i.GREATER,[qc]:i.NOTEQUAL};function J(E,_){if(_.type===cn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ge||_.magFilter===Gs||_.magFilter===Zi||_.magFilter===Hn||_.minFilter===Ge||_.minFilter===Gs||_.minFilter===Zi||_.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,j[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,j[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,j[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,z[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,z[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,tt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ae||_.minFilter!==Zi&&_.minFilter!==Hn||_.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function pt(E,_){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",b));const q=_.source;let $=d.get(q);$===void 0&&($={},d.set(q,$));const Z=W(_);if(Z!==E.__cacheKey){$[Z]===void 0&&($[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),$[Z].usedTimes++;const gt=$[E.__cacheKey];gt!==void 0&&($[E.__cacheKey].usedTimes--,gt.usedTimes===0&&A(_)),E.__cacheKey=Z,E.__webglTexture=$[Z].texture}return B}function It(E,_,B){let q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=i.TEXTURE_3D);const $=pt(E,_),Z=_.source;e.bindTexture(q,E.__webglTexture,i.TEXTURE0+B);const gt=n.get(Z);if(Z.version!==gt.__version||$===!0){e.activeTexture(i.TEXTURE0+B);const lt=Xt.getPrimaries(Xt.workingColorSpace),ot=_.colorSpace===yn?null:Xt.getPrimaries(_.colorSpace),wt=_.colorSpace===yn||lt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let nt=M(_.image,!1,s.maxTextureSize);nt=Bt(_,nt);const mt=r.convert(_.format,_.colorSpace),zt=r.convert(_.type);let vt=T(_.internalFormat,mt,zt,_.colorSpace,_.isVideoTexture);J(q,_);let ht;const Rt=_.mipmaps,Ft=_.isVideoTexture!==!0,ie=gt.__version===void 0||$===!0,Ct=Z.dataReady,R=y(_,nt);if(_.isDepthTexture)vt=i.DEPTH_COMPONENT16,_.type===cn?vt=i.DEPTH_COMPONENT32F:_.type===xi?vt=i.DEPTH_COMPONENT24:_.type===Xi&&(vt=i.DEPTH24_STENCIL8),ie&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,vt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,vt,nt.width,nt.height,0,mt,zt,null));else if(_.isDataTexture)if(Rt.length>0){Ft&&ie&&e.texStorage2D(i.TEXTURE_2D,R,vt,Rt[0].width,Rt[0].height);for(let K=0,G=Rt.length;K<G;K++)ht=Rt[K],Ft?Ct&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,ht.width,ht.height,mt,zt,ht.data):e.texImage2D(i.TEXTURE_2D,K,vt,ht.width,ht.height,0,mt,zt,ht.data);_.generateMipmaps=!1}else Ft?(ie&&e.texStorage2D(i.TEXTURE_2D,R,vt,nt.width,nt.height),Ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,mt,zt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,vt,nt.width,nt.height,0,mt,zt,nt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ft&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,R,vt,Rt[0].width,Rt[0].height,nt.depth);for(let K=0,G=Rt.length;K<G;K++)ht=Rt[K],_.format!==$e?mt!==null?Ft?Ct&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ht.width,ht.height,nt.depth,mt,ht.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,vt,ht.width,ht.height,nt.depth,0,ht.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?Ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ht.width,ht.height,nt.depth,mt,zt,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,vt,ht.width,ht.height,nt.depth,0,mt,zt,ht.data)}else{Ft&&ie&&e.texStorage2D(i.TEXTURE_2D,R,vt,Rt[0].width,Rt[0].height);for(let K=0,G=Rt.length;K<G;K++)ht=Rt[K],_.format!==$e?mt!==null?Ft?Ct&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,ht.width,ht.height,mt,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,K,vt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?Ct&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,ht.width,ht.height,mt,zt,ht.data):e.texImage2D(i.TEXTURE_2D,K,vt,ht.width,ht.height,0,mt,zt,ht.data)}else if(_.isDataArrayTexture)Ft?(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,R,vt,nt.width,nt.height,nt.depth),Ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,mt,zt,nt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,vt,nt.width,nt.height,nt.depth,0,mt,zt,nt.data);else if(_.isData3DTexture)Ft?(ie&&e.texStorage3D(i.TEXTURE_3D,R,vt,nt.width,nt.height,nt.depth),Ct&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,mt,zt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,vt,nt.width,nt.height,nt.depth,0,mt,zt,nt.data);else if(_.isFramebufferTexture){if(ie)if(Ft)e.texStorage2D(i.TEXTURE_2D,R,vt,nt.width,nt.height);else{let K=nt.width,G=nt.height;for(let rt=0;rt<R;rt++)e.texImage2D(i.TEXTURE_2D,rt,vt,K,G,0,mt,zt,null),K>>=1,G>>=1}}else if(Rt.length>0){if(Ft&&ie){const K=ee(Rt[0]);e.texStorage2D(i.TEXTURE_2D,R,vt,K.width,K.height)}for(let K=0,G=Rt.length;K<G;K++)ht=Rt[K],Ft?Ct&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,mt,zt,ht):e.texImage2D(i.TEXTURE_2D,K,vt,mt,zt,ht);_.generateMipmaps=!1}else if(Ft){if(ie){const K=ee(nt);e.texStorage2D(i.TEXTURE_2D,R,vt,K.width,K.height)}Ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,zt,nt)}else e.texImage2D(i.TEXTURE_2D,0,vt,mt,zt,nt);f(_)&&u(q),gt.__version=Z.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function qt(E,_,B){if(_.image.length!==6)return;const q=pt(E,_),$=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+B);const Z=n.get($);if($.version!==Z.__version||q===!0){e.activeTexture(i.TEXTURE0+B);const gt=Xt.getPrimaries(Xt.workingColorSpace),lt=_.colorSpace===yn?null:Xt.getPrimaries(_.colorSpace),ot=_.colorSpace===yn||gt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);const wt=_.isCompressedTexture||_.image[0].isCompressedTexture,nt=_.image[0]&&_.image[0].isDataTexture,mt=[];for(let G=0;G<6;G++)!wt&&!nt?mt[G]=M(_.image[G],!0,s.maxCubemapSize):mt[G]=nt?_.image[G].image:_.image[G],mt[G]=Bt(_,mt[G]);const zt=mt[0],vt=r.convert(_.format,_.colorSpace),ht=r.convert(_.type),Rt=T(_.internalFormat,vt,ht,_.colorSpace),Ft=_.isVideoTexture!==!0,ie=Z.__version===void 0||q===!0,Ct=$.dataReady;let R=y(_,zt);J(i.TEXTURE_CUBE_MAP,_);let K;if(wt){Ft&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,R,Rt,zt.width,zt.height);for(let G=0;G<6;G++){K=mt[G].mipmaps;for(let rt=0;rt<K.length;rt++){const ct=K[rt];_.format!==$e?vt!==null?Ft?Ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt,0,0,ct.width,ct.height,vt,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt,Rt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?Ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt,0,0,ct.width,ct.height,vt,ht,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt,Rt,ct.width,ct.height,0,vt,ht,ct.data)}}}else{if(K=_.mipmaps,Ft&&ie){K.length>0&&R++;const G=ee(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,R,Rt,G.width,G.height)}for(let G=0;G<6;G++)if(nt){Ft?Ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,mt[G].width,mt[G].height,vt,ht,mt[G].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Rt,mt[G].width,mt[G].height,0,vt,ht,mt[G].data);for(let rt=0;rt<K.length;rt++){const kt=K[rt].image[G].image;Ft?Ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt+1,0,0,kt.width,kt.height,vt,ht,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt+1,Rt,kt.width,kt.height,0,vt,ht,kt.data)}}else{Ft?Ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,vt,ht,mt[G]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Rt,vt,ht,mt[G]);for(let rt=0;rt<K.length;rt++){const ct=K[rt];Ft?Ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt+1,0,0,vt,ht,ct.image[G]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt+1,Rt,vt,ht,ct.image[G])}}}f(_)&&u(i.TEXTURE_CUBE_MAP),Z.__version=$.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function H(E,_,B,q,$,Z){const gt=r.convert(B.format,B.colorSpace),lt=r.convert(B.type),ot=T(B.internalFormat,gt,lt,B.colorSpace);if(!n.get(_).__hasExternalTextures){const nt=Math.max(1,_.width>>Z),mt=Math.max(1,_.height>>Z);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,Z,ot,nt,mt,_.depth,0,gt,lt,null):e.texImage2D($,Z,ot,nt,mt,0,gt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Ot(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,$,n.get(B).__webglTexture,0,Mt(_)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,$,n.get(B).__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(E,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer&&!_.stencilBuffer){let q=i.DEPTH_COMPONENT24;if(B||Ot(_)){const $=_.depthTexture;$&&$.isDepthTexture&&($.type===cn?q=i.DEPTH_COMPONENT32F:$.type===xi&&(q=i.DEPTH_COMPONENT24));const Z=Mt(_);Ot(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,q,_.width,_.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,q,_.width,_.height)}else i.renderbufferStorage(i.RENDERBUFFER,q,_.width,_.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(_.depthBuffer&&_.stencilBuffer){const q=Mt(_);B&&Ot(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,q,i.DEPTH24_STENCIL8,_.width,_.height):Ot(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,q,i.DEPTH24_STENCIL8,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{const q=_.textures;for(let $=0;$<q.length;$++){const Z=q[$],gt=r.convert(Z.format,Z.colorSpace),lt=r.convert(Z.type),ot=T(Z.internalFormat,gt,lt,Z.colorSpace),wt=Mt(_);B&&Ot(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,ot,_.width,_.height):Ot(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt,ot,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ot,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),C(_.depthTexture,0);const q=n.get(_.depthTexture).__webglTexture,$=Mt(_);if(_.depthTexture.format===mi)Ot(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(_.depthTexture.format===ki)Ot(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function st(E){const _=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ut(_.__webglFramebuffer,E)}else if(B){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]=i.createRenderbuffer(),et(_.__webglDepthbuffer[q],E,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),et(_.__webglDepthbuffer,E,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(E,_,B){const q=n.get(E);_!==void 0&&H(q.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&st(E)}function Nt(E){const _=E.texture,B=n.get(E),q=n.get(_);E.addEventListener("dispose",O);const $=E.textures,Z=E.isWebGLCubeRenderTarget===!0,gt=$.length>1;if(gt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=_.version,a.memory.textures++),Z){B.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[lt]=[];for(let ot=0;ot<_.mipmaps.length;ot++)B.__webglFramebuffer[lt][ot]=i.createFramebuffer()}else B.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let lt=0;lt<_.mipmaps.length;lt++)B.__webglFramebuffer[lt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(gt)for(let lt=0,ot=$.length;lt<ot;lt++){const wt=n.get($[lt]);wt.__webglTexture===void 0&&(wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Ot(E)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let lt=0;lt<$.length;lt++){const ot=$[lt];B.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[lt]);const wt=r.convert(ot.format,ot.colorSpace),nt=r.convert(ot.type),mt=T(ot.internalFormat,wt,nt,ot.colorSpace,E.isXRRenderTarget===!0),zt=Mt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,mt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,B.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),et(B.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),J(i.TEXTURE_CUBE_MAP,_);for(let lt=0;lt<6;lt++)if(_.mipmaps&&_.mipmaps.length>0)for(let ot=0;ot<_.mipmaps.length;ot++)H(B.__webglFramebuffer[lt][ot],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ot);else H(B.__webglFramebuffer[lt],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);f(_)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let lt=0,ot=$.length;lt<ot;lt++){const wt=$[lt],nt=n.get(wt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),J(i.TEXTURE_2D,wt),H(B.__webglFramebuffer,E,wt,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),f(wt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(lt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,q.__webglTexture),J(lt,_),_.mipmaps&&_.mipmaps.length>0)for(let ot=0;ot<_.mipmaps.length;ot++)H(B.__webglFramebuffer[ot],E,_,i.COLOR_ATTACHMENT0,lt,ot);else H(B.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,lt,0);f(_)&&u(lt),e.unbindTexture()}E.depthBuffer&&st(E)}function L(E){const _=E.textures;for(let B=0,q=_.length;B<q;B++){const $=_[B];if(f($)){const Z=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,gt=n.get($).__webglTexture;e.bindTexture(Z,gt),u(Z),e.unbindTexture()}}}const $t=[],_t=[];function Yt(E){if(E.samples>0){if(Ot(E)===!1){const _=E.textures,B=E.width,q=E.height;let $=i.COLOR_BUFFER_BIT;const Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(E),lt=_.length>1;if(lt)for(let ot=0;ot<_.length;ot++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ot=0;ot<_.length;ot++){if(E.resolveDepthBuffer&&(E.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[ot]);const wt=n.get(_[ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,wt,0)}i.blitFramebuffer(0,0,B,q,0,0,B,q,$,i.NEAREST),l===!0&&($t.length=0,_t.length=0,$t.push(i.COLOR_ATTACHMENT0+ot),E.depthBuffer&&E.resolveDepthBuffer===!1&&($t.push(Z),_t.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_t)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$t))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let ot=0;ot<_.length;ot++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,gt.__webglColorRenderbuffer[ot]);const wt=n.get(_[ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Mt(E){return Math.min(s.maxSamples,E.samples)}function Ot(E){const _=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Pt(E){const _=a.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function Bt(E,_){const B=E.colorSpace,q=E.format,$=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==wn&&B!==yn&&(Xt.getTransfer(B)===Kt?(q!==$e||$!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}function ee(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=v,this.setTexture2D=C,this.setTexture2DArray=Y,this.setTexture3D=X,this.setTextureCube=Q,this.rebindTextures=Ut,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=H,this.useMultisampledRTT=Ot}function cm(i,t){function e(n,s=yn){let r;const a=Xt.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===ul)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pc)return i.BYTE;if(n===Lc)return i.SHORT;if(n===cl)return i.UNSIGNED_SHORT;if(n===hl)return i.INT;if(n===xi)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===Wi)return i.HALF_FLOAT;if(n===Ic)return i.ALPHA;if(n===Uc)return i.RGB;if(n===$e)return i.RGBA;if(n===Nc)return i.LUMINANCE;if(n===Fc)return i.LUMINANCE_ALPHA;if(n===mi)return i.DEPTH_COMPONENT;if(n===ki)return i.DEPTH_STENCIL;if(n===fl)return i.RED;if(n===pl)return i.RED_INTEGER;if(n===Oc)return i.RG;if(n===ml)return i.RG_INTEGER;if(n===gl)return i.RGBA_INTEGER;if(n===Vs||n===Ws||n===Xs||n===qs)if(a===Kt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ma||n===ga||n===_a||n===va)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xa||n===Ma||n===Sa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xa||n===Ma)return a===Kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ya||n===Ea||n===Ta||n===ba||n===Aa||n===wa||n===Ra||n===Ca||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ya)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ea)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ta)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ba)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Aa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ra)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ca)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===La)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Da)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ia)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ua)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Na)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ys||n===Fa||n===Oa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ys)return a===Kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bc||n===Ba||n===za||n===ka)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ys)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class hm extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class fi extends ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const um={type:"move"};class xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const M of t.hand.values()){const f=e.getJointPose(M,n),u=this._getHandJoint(c,M);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=h.position.distanceTo(p.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(um)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const dm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ve,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,s=new We({vertexShader:dm,fragmentShader:fm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Te(new Fs(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class mm extends yi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,d=null,m=null,g=null;const M=new pm,f=e.getContextAttributes();let u=null,T=null;const y=[],b=[],O=new Dt;let w=null;const A=new Fe;A.layers.enable(1),A.viewport=new ue;const k=new Fe;k.layers.enable(2),k.viewport=new ue;const S=[A,k],v=new hm;v.layers.enable(1),v.layers.enable(2);let N=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let et=y[H];return et===void 0&&(et=new xr,y[H]=et),et.getTargetRaySpace()},this.getControllerGrip=function(H){let et=y[H];return et===void 0&&(et=new xr,y[H]=et),et.getGripSpace()},this.getHand=function(H){let et=y[H];return et===void 0&&(et=new xr,y[H]=et),et.getHandSpace()};function C(H){const et=b.indexOf(H.inputSource);if(et===-1)return;const ut=y[et];ut!==void 0&&(ut.update(H.inputSource,H.frame,c||a),ut.dispatchEvent({type:H.type,data:H.inputSource}))}function Y(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",X);for(let H=0;H<y.length;H++){const et=b[H];et!==null&&(b[H]=null,y[H].disconnect(et))}N=null,W=null,M.reset(),t.setRenderTarget(u),m=null,d=null,p=null,s=null,T=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",X),f.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){const et={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new An(m.framebufferWidth,m.framebufferHeight,{format:$e,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let et=null,ut=null,st=null;f.depth&&(st=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=f.stencil?ki:mi,ut=f.stencil?Xi:xi);const Ut={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};p=new XRWebGLBinding(s,e),d=p.createProjectionLayer(Ut),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new An(d.textureWidth,d.textureHeight,{format:$e,type:bn,depthTexture:new Ll(d.textureWidth,d.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function X(H){for(let et=0;et<H.removed.length;et++){const ut=H.removed[et],st=b.indexOf(ut);st>=0&&(b[st]=null,y[st].disconnect(ut))}for(let et=0;et<H.added.length;et++){const ut=H.added[et];let st=b.indexOf(ut);if(st===-1){for(let Nt=0;Nt<y.length;Nt++)if(Nt>=b.length){b.push(ut),st=Nt;break}else if(b[Nt]===null){b[Nt]=ut,st=Nt;break}if(st===-1)break}const Ut=y[st];Ut&&Ut.connect(ut)}}const Q=new D,j=new D;function z(H,et,ut){Q.setFromMatrixPosition(et.matrixWorld),j.setFromMatrixPosition(ut.matrixWorld);const st=Q.distanceTo(j),Ut=et.projectionMatrix.elements,Nt=ut.projectionMatrix.elements,L=Ut[14]/(Ut[10]-1),$t=Ut[14]/(Ut[10]+1),_t=(Ut[9]+1)/Ut[5],Yt=(Ut[9]-1)/Ut[5],Mt=(Ut[8]-1)/Ut[0],Ot=(Nt[8]+1)/Nt[0],Pt=L*Mt,Bt=L*Ot,ee=st/(-Mt+Ot),E=ee*-Mt;et.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(E),H.translateZ(ee),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const _=L+ee,B=$t+ee,q=Pt-E,$=Bt+(st-E),Z=_t*$t/B*_,gt=Yt*$t/B*_;H.projectionMatrix.makePerspective(q,$,Z,gt,_,B),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function tt(H,et){et===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(et.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;M.texture!==null&&(H.near=M.depthNear,H.far=M.depthFar),v.near=k.near=A.near=H.near,v.far=k.far=A.far=H.far,(N!==v.near||W!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),N=v.near,W=v.far,A.near=N,A.far=W,k.near=N,k.far=W,A.updateProjectionMatrix(),k.updateProjectionMatrix(),H.updateProjectionMatrix());const et=H.parent,ut=v.cameras;tt(v,et);for(let st=0;st<ut.length;st++)tt(ut[st],et);ut.length===2?z(v,A,k):v.projectionMatrix.copy(A.projectionMatrix),J(H,v,et)};function J(H,et,ut){ut===null?H.matrix.copy(et.matrixWorld):(H.matrix.copy(ut.matrixWorld),H.matrix.invert(),H.matrix.multiply(et.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(et.projectionMatrix),H.projectionMatrixInverse.copy(et.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Hi*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return M.texture!==null};let pt=null;function It(H,et){if(h=et.getViewerPose(c||a),g=et,h!==null){const ut=h.views;m!==null&&(t.setRenderTargetFramebuffer(T,m.framebuffer),t.setRenderTarget(T));let st=!1;ut.length!==v.cameras.length&&(v.cameras.length=0,st=!0);for(let Nt=0;Nt<ut.length;Nt++){const L=ut[Nt];let $t=null;if(m!==null)$t=m.getViewport(L);else{const Yt=p.getViewSubImage(d,L);$t=Yt.viewport,Nt===0&&(t.setRenderTargetTextures(T,Yt.colorTexture,d.ignoreDepthValues?void 0:Yt.depthStencilTexture),t.setRenderTarget(T))}let _t=S[Nt];_t===void 0&&(_t=new Fe,_t.layers.enable(Nt),_t.viewport=new ue,S[Nt]=_t),_t.matrix.fromArray(L.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(L.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set($t.x,$t.y,$t.width,$t.height),Nt===0&&(v.matrix.copy(_t.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),st===!0&&v.cameras.push(_t)}const Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const Nt=p.getDepthInformation(ut[0]);Nt&&Nt.isValid&&Nt.texture&&M.init(t,Nt,s.renderState)}}for(let ut=0;ut<y.length;ut++){const st=b[ut],Ut=y[ut];st!==null&&Ut!==void 0&&Ut.update(st,et,c||a)}M.render(t,v),pt&&pt(H,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const qt=new Pl;qt.setAnimationLoop(It),this.setAnimationLoop=function(H){pt=H},this.dispose=function(){}}}const Un=new Ve,gm=new Jt;function _m(i,t){function e(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function n(f,u){u.color.getRGB(f.fogColor.value,wl(i)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function s(f,u,T,y,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(f,u):u.isMeshToonMaterial?(r(f,u),p(f,u)):u.isMeshPhongMaterial?(r(f,u),h(f,u)):u.isMeshStandardMaterial?(r(f,u),d(f,u),u.isMeshPhysicalMaterial&&m(f,u,b)):u.isMeshMatcapMaterial?(r(f,u),g(f,u)):u.isMeshDepthMaterial?r(f,u):u.isMeshDistanceMaterial?(r(f,u),M(f,u)):u.isMeshNormalMaterial?r(f,u):u.isLineBasicMaterial?(a(f,u),u.isLineDashedMaterial&&o(f,u)):u.isPointsMaterial?l(f,u,T,y):u.isSpriteMaterial?c(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,e(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,e(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===we&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,e(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===we&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,e(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,e(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const T=t.get(u),y=T.envMap,b=T.envMapRotation;if(y&&(f.envMap.value=y,Un.copy(b),Un.x*=-1,Un.y*=-1,Un.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),f.envMapRotation.value.setFromMatrix4(gm.makeRotationFromEuler(Un)),f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap){f.lightMap.value=u.lightMap;const O=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=u.lightMapIntensity*O,e(u.lightMap,f.lightMapTransform)}u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,f.aoMapTransform))}function a(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,e(u.map,f.mapTransform))}function o(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function l(f,u,T,y){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*T,f.scale.value=y*.5,u.map&&(f.map.value=u.map,e(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function c(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,e(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function h(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function p(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function d(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,f.roughnessMapTransform)),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function m(f,u,T){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===we&&f.clearcoatNormalScale.value.negate())),u.dispersion>0&&(f.dispersion.value=u.dispersion),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=T.texture,f.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,u){u.matcap&&(f.matcap.value=u.matcap)}function M(f,u){const T=t.get(u).light;f.referencePosition.value.setFromMatrixPosition(T.matrixWorld),f.nearDistance.value=T.shadow.camera.near,f.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vm(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,y){const b=y.program;n.uniformBlockBinding(T,b)}function c(T,y){let b=s[T.id];b===void 0&&(g(T),b=h(T),s[T.id]=b,T.addEventListener("dispose",f));const O=y.program;n.updateUBOMapping(T,O);const w=t.render.frame;r[T.id]!==w&&(d(T),r[T.id]=w)}function h(T){const y=p();T.__bindingPointIndex=y;const b=i.createBuffer(),O=T.__size,w=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,O,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function p(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const y=s[T.id],b=T.uniforms,O=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,A=b.length;w<A;w++){const k=Array.isArray(b[w])?b[w]:[b[w]];for(let S=0,v=k.length;S<v;S++){const N=k[S];if(m(N,w,S,O)===!0){const W=N.__offset,C=Array.isArray(N.value)?N.value:[N.value];let Y=0;for(let X=0;X<C.length;X++){const Q=C[X],j=M(Q);typeof Q=="number"||typeof Q=="boolean"?(N.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,W+Y,N.__data)):Q.isMatrix3?(N.__data[0]=Q.elements[0],N.__data[1]=Q.elements[1],N.__data[2]=Q.elements[2],N.__data[3]=0,N.__data[4]=Q.elements[3],N.__data[5]=Q.elements[4],N.__data[6]=Q.elements[5],N.__data[7]=0,N.__data[8]=Q.elements[6],N.__data[9]=Q.elements[7],N.__data[10]=Q.elements[8],N.__data[11]=0):(Q.toArray(N.__data,Y),Y+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,y,b,O){const w=T.value,A=y+"_"+b;if(O[A]===void 0)return typeof w=="number"||typeof w=="boolean"?O[A]=w:O[A]=w.clone(),!0;{const k=O[A];if(typeof w=="number"||typeof w=="boolean"){if(k!==w)return O[A]=w,!0}else if(k.equals(w)===!1)return k.copy(w),!0}return!1}function g(T){const y=T.uniforms;let b=0;const O=16;for(let A=0,k=y.length;A<k;A++){const S=Array.isArray(y[A])?y[A]:[y[A]];for(let v=0,N=S.length;v<N;v++){const W=S[v],C=Array.isArray(W.value)?W.value:[W.value];for(let Y=0,X=C.length;Y<X;Y++){const Q=C[Y],j=M(Q),z=b%O;z!==0&&O-z<j.boundary&&(b+=O-z),W.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=b,b+=j.storage}}}const w=b%O;return w>0&&(b+=O-w),T.__size=b,T.__cache={},this}function M(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function f(T){const y=T.target;y.removeEventListener("dispose",f);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function u(){for(const T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}class xm{constructor(t={}){const{canvas:e=uh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),g=new Int32Array(4);let M=null,f=null;const u=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this._useLegacyLights=!1,this.toneMapping=En,this.toneMappingExposure=1;const y=this;let b=!1,O=0,w=0,A=null,k=-1,S=null;const v=new ue,N=new ue;let W=null;const C=new At(0);let Y=0,X=e.width,Q=e.height,j=1,z=null,tt=null;const J=new ue(0,0,X,Q),pt=new ue(0,0,X,Q);let It=!1;const qt=new Yr;let H=!1,et=!1;const ut=new Jt,st=new D,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Nt(){return A===null?j:1}let L=n;function $t(x,P){return e.getContext(x,P)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gr}`),e.addEventListener("webglcontextlost",R,!1),e.addEventListener("webglcontextrestored",K,!1),e.addEventListener("webglcontextcreationerror",G,!1),L===null){const P="webgl2";if(L=$t(P,x),L===null)throw $t(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let _t,Yt,Mt,Ot,Pt,Bt,ee,E,_,B,q,$,Z,gt,lt,ot,wt,nt,mt,zt,vt,ht,Rt,Ft;function ie(){_t=new wf(L),_t.init(),ht=new cm(L,_t),Yt=new Sf(L,_t,t,ht),Mt=new om(L),Ot=new Pf(L),Pt=new Yp,Bt=new lm(L,_t,Mt,Pt,Yt,ht,Ot),ee=new Ef(y),E=new Af(y),_=new Fh(L),Rt=new xf(L,_),B=new Rf(L,_,Ot,Rt),q=new Df(L,B,_,Ot),mt=new Lf(L,Yt,Bt),ot=new yf(Pt),$=new qp(y,ee,E,_t,Yt,Rt,ot),Z=new _m(y,Pt),gt=new $p,lt=new em(_t),nt=new vf(y,ee,E,Mt,q,d,l),wt=new am(y,q,Yt),Ft=new vm(L,Ot,Yt,Mt),zt=new Mf(L,_t,Ot),vt=new Cf(L,_t,Ot),Ot.programs=$.programs,y.capabilities=Yt,y.extensions=_t,y.properties=Pt,y.renderLists=gt,y.shadowMap=wt,y.state=Mt,y.info=Ot}ie();const Ct=new mm(y,L);this.xr=Ct,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const x=_t.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=_t.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(x){x!==void 0&&(j=x,this.setSize(X,Q,!1))},this.getSize=function(x){return x.set(X,Q)},this.setSize=function(x,P,F=!0){if(Ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=x,Q=P,e.width=Math.floor(x*j),e.height=Math.floor(P*j),F===!0&&(e.style.width=x+"px",e.style.height=P+"px"),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(X*j,Q*j).floor()},this.setDrawingBufferSize=function(x,P,F){X=x,Q=P,j=F,e.width=Math.floor(x*F),e.height=Math.floor(P*F),this.setViewport(0,0,x,P)},this.getCurrentViewport=function(x){return x.copy(v)},this.getViewport=function(x){return x.copy(J)},this.setViewport=function(x,P,F,I){x.isVector4?J.set(x.x,x.y,x.z,x.w):J.set(x,P,F,I),Mt.viewport(v.copy(J).multiplyScalar(j).round())},this.getScissor=function(x){return x.copy(pt)},this.setScissor=function(x,P,F,I){x.isVector4?pt.set(x.x,x.y,x.z,x.w):pt.set(x,P,F,I),Mt.scissor(N.copy(pt).multiplyScalar(j).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(x){Mt.setScissorTest(It=x)},this.setOpaqueSort=function(x){z=x},this.setTransparentSort=function(x){tt=x},this.getClearColor=function(x){return x.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(x=!0,P=!0,F=!0){let I=0;if(x){let U=!1;if(A!==null){const at=A.texture.format;U=at===gl||at===ml||at===pl}if(U){const at=A.texture.type,dt=at===bn||at===xi||at===cl||at===Xi||at===ul||at===dl,ft=nt.getClearColor(),xt=nt.getClearAlpha(),St=ft.r,Et=ft.g,Lt=ft.b;dt?(m[0]=St,m[1]=Et,m[2]=Lt,m[3]=xt,L.clearBufferuiv(L.COLOR,0,m)):(g[0]=St,g[1]=Et,g[2]=Lt,g[3]=xt,L.clearBufferiv(L.COLOR,0,g))}else I|=L.COLOR_BUFFER_BIT}P&&(I|=L.DEPTH_BUFFER_BIT),F&&(I|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",R,!1),e.removeEventListener("webglcontextrestored",K,!1),e.removeEventListener("webglcontextcreationerror",G,!1),gt.dispose(),lt.dispose(),Pt.dispose(),ee.dispose(),E.dispose(),q.dispose(),Rt.dispose(),Ft.dispose(),$.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Wt),Ct.removeEventListener("sessionend",Xe),xe.stop()};function R(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const x=Ot.autoReset,P=wt.enabled,F=wt.autoUpdate,I=wt.needsUpdate,U=wt.type;ie(),Ot.autoReset=x,wt.enabled=P,wt.autoUpdate=F,wt.needsUpdate=I,wt.type=U}function G(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function rt(x){const P=x.target;P.removeEventListener("dispose",rt),ct(P)}function ct(x){kt(x),Pt.remove(x)}function kt(x){const P=Pt.get(x).programs;P!==void 0&&(P.forEach(function(F){$.releaseProgram(F)}),x.isShaderMaterial&&$.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,F,I,U,at){P===null&&(P=Ut);const dt=U.isMesh&&U.matrixWorld.determinant()<0,ft=ql(x,P,F,I,U);Mt.setMaterial(I,dt);let xt=F.index,St=1;if(I.wireframe===!0){if(xt=B.getWireframeAttribute(F),xt===void 0)return;St=2}const Et=F.drawRange,Lt=F.attributes.position;let se=Et.start*St,pe=(Et.start+Et.count)*St;at!==null&&(se=Math.max(se,at.start*St),pe=Math.min(pe,(at.start+at.count)*St)),xt!==null?(se=Math.max(se,0),pe=Math.min(pe,xt.count)):Lt!=null&&(se=Math.max(se,0),pe=Math.min(pe,Lt.count));const Re=pe-se;if(Re<0||Re===1/0)return;Rt.setup(U,I,ft,F,xt);let Qe,Gt=zt;if(xt!==null&&(Qe=_.get(xt),Gt=vt,Gt.setIndex(Qe)),U.isMesh)I.wireframe===!0?(Mt.setLineWidth(I.wireframeLinewidth*Nt()),Gt.setMode(L.LINES)):Gt.setMode(L.TRIANGLES);else if(U.isLine){let yt=I.linewidth;yt===void 0&&(yt=1),Mt.setLineWidth(yt*Nt()),U.isLineSegments?Gt.setMode(L.LINES):U.isLineLoop?Gt.setMode(L.LINE_LOOP):Gt.setMode(L.LINE_STRIP)}else U.isPoints?Gt.setMode(L.POINTS):U.isSprite&&Gt.setMode(L.TRIANGLES);if(U.isBatchedMesh)U._multiDrawInstances!==null?Gt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances):Gt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)Gt.renderInstances(se,Re,U.count);else if(F.isInstancedBufferGeometry){const yt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Ai=Math.min(F.instanceCount,yt);Gt.renderInstances(se,Re,Ai)}else Gt.render(se,Re)};function Zt(x,P,F){x.transparent===!0&&x.side===ln&&x.forceSinglePass===!1?(x.side=we,x.needsUpdate=!0,$i(x,P,F),x.side=Tn,x.needsUpdate=!0,$i(x,P,F),x.side=ln):$i(x,P,F)}this.compile=function(x,P,F=null){F===null&&(F=x),f=lt.get(F),f.init(P),T.push(f),F.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),x!==F&&x.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(y._useLegacyLights);const I=new Set;return x.traverse(function(U){const at=U.material;if(at)if(Array.isArray(at))for(let dt=0;dt<at.length;dt++){const ft=at[dt];Zt(ft,F,U),I.add(ft)}else Zt(at,F,U),I.add(at)}),T.pop(),f=null,I},this.compileAsync=function(x,P,F=null){const I=this.compile(x,P,F);return new Promise(U=>{function at(){if(I.forEach(function(dt){Pt.get(dt).currentProgram.isReady()&&I.delete(dt)}),I.size===0){U(x);return}setTimeout(at,10)}_t.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let ne=null;function fe(x){ne&&ne(x)}function Wt(){xe.stop()}function Xe(){xe.start()}const xe=new Pl;xe.setAnimationLoop(fe),typeof self<"u"&&xe.setContext(self),this.setAnimationLoop=function(x){ne=x,Ct.setAnimationLoop(x),x===null?xe.stop():xe.start()},Ct.addEventListener("sessionstart",Wt),Ct.addEventListener("sessionend",Xe),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(P),P=Ct.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,P,A),f=lt.get(x,T.length),f.init(P),T.push(f),ut.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),qt.setFromProjectionMatrix(ut),et=this.localClippingEnabled,H=ot.init(this.clippingPlanes,et),M=gt.get(x,u.length),M.init(),u.push(M),sa(x,P,0,y.sortObjects),M.finish(),y.sortObjects===!0&&M.sort(z,tt);const F=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1;F&&nt.addToRenderList(M,x),this.info.render.frame++,H===!0&&ot.beginShadows();const I=f.state.shadowsArray;wt.render(I,x,P),H===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const U=M.opaque,at=M.transmissive;if(f.setupLights(y._useLegacyLights),P.isArrayCamera){const dt=P.cameras;if(at.length>0)for(let ft=0,xt=dt.length;ft<xt;ft++){const St=dt[ft];aa(U,at,x,St)}F&&nt.render(x);for(let ft=0,xt=dt.length;ft<xt;ft++){const St=dt[ft];ra(M,x,St,St.viewport)}}else at.length>0&&aa(U,at,x,P),F&&nt.render(x),ra(M,x,P);A!==null&&(Bt.updateMultisampleRenderTarget(A),Bt.updateRenderTargetMipmap(A)),x.isScene===!0&&x.onAfterRender(y,x,P),Rt.resetDefaultState(),k=-1,S=null,T.pop(),T.length>0?(f=T[T.length-1],H===!0&&ot.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,u.pop(),u.length>0?M=u[u.length-1]:M=null};function sa(x,P,F,I){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||qt.intersectsSprite(x)){I&&st.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ut);const dt=q.update(x),ft=x.material;ft.visible&&M.push(x,dt,ft,F,st.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||qt.intersectsObject(x))){const dt=q.update(x),ft=x.material;if(I&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),st.copy(x.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),st.copy(dt.boundingSphere.center)),st.applyMatrix4(x.matrixWorld).applyMatrix4(ut)),Array.isArray(ft)){const xt=dt.groups;for(let St=0,Et=xt.length;St<Et;St++){const Lt=xt[St],se=ft[Lt.materialIndex];se&&se.visible&&M.push(x,dt,se,F,st.z,Lt)}}else ft.visible&&M.push(x,dt,ft,F,st.z,null)}}const at=x.children;for(let dt=0,ft=at.length;dt<ft;dt++)sa(at[dt],P,F,I)}function ra(x,P,F,I){const U=x.opaque,at=x.transmissive,dt=x.transparent;f.setupLightsView(F),H===!0&&ot.setGlobalState(y.clippingPlanes,F),I&&Mt.viewport(v.copy(I)),U.length>0&&Ki(U,P,F),at.length>0&&Ki(at,P,F),dt.length>0&&Ki(dt,P,F),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function aa(x,P,F,I){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[I.id]===void 0&&(f.state.transmissionRenderTarget[I.id]=new An(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?Wi:bn,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const at=f.state.transmissionRenderTarget[I.id],dt=I.viewport||v;at.setSize(dt.z,dt.w);const ft=y.getRenderTarget();y.setRenderTarget(at),y.getClearColor(C),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear();const xt=y.toneMapping;y.toneMapping=En;const St=I.viewport;if(I.viewport!==void 0&&(I.viewport=void 0),f.setupLightsView(I),H===!0&&ot.setGlobalState(y.clippingPlanes,I),Ki(x,F,I),Bt.updateMultisampleRenderTarget(at),Bt.updateRenderTargetMipmap(at),_t.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let Lt=0,se=P.length;Lt<se;Lt++){const pe=P[Lt],Re=pe.object,Qe=pe.geometry,Gt=pe.material,yt=pe.group;if(Gt.side===ln&&Re.layers.test(I.layers)){const Ai=Gt.side;Gt.side=we,Gt.needsUpdate=!0,oa(Re,F,I,Qe,Gt,yt),Gt.side=Ai,Gt.needsUpdate=!0,Et=!0}}Et===!0&&(Bt.updateMultisampleRenderTarget(at),Bt.updateRenderTargetMipmap(at))}y.setRenderTarget(ft),y.setClearColor(C,Y),St!==void 0&&(I.viewport=St),y.toneMapping=xt}function Ki(x,P,F){const I=P.isScene===!0?P.overrideMaterial:null;for(let U=0,at=x.length;U<at;U++){const dt=x[U],ft=dt.object,xt=dt.geometry,St=I===null?dt.material:I,Et=dt.group;ft.layers.test(F.layers)&&oa(ft,P,F,xt,St,Et)}}function oa(x,P,F,I,U,at){x.onBeforeRender(y,P,F,I,U,at),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),U.onBeforeRender(y,P,F,I,x,at),U.transparent===!0&&U.side===ln&&U.forceSinglePass===!1?(U.side=we,U.needsUpdate=!0,y.renderBufferDirect(F,P,I,U,x,at),U.side=Tn,U.needsUpdate=!0,y.renderBufferDirect(F,P,I,U,x,at),U.side=ln):y.renderBufferDirect(F,P,I,U,x,at),x.onAfterRender(y,P,F,I,U,at)}function $i(x,P,F){P.isScene!==!0&&(P=Ut);const I=Pt.get(x),U=f.state.lights,at=f.state.shadowsArray,dt=U.state.version,ft=$.getParameters(x,U.state,at,P,F),xt=$.getProgramCacheKey(ft);let St=I.programs;I.environment=x.isMeshStandardMaterial?P.environment:null,I.fog=P.fog,I.envMap=(x.isMeshStandardMaterial?E:ee).get(x.envMap||I.environment),I.envMapRotation=I.environment!==null&&x.envMap===null?P.environmentRotation:x.envMapRotation,St===void 0&&(x.addEventListener("dispose",rt),St=new Map,I.programs=St);let Et=St.get(xt);if(Et!==void 0){if(I.currentProgram===Et&&I.lightsStateVersion===dt)return ca(x,ft),Et}else ft.uniforms=$.getUniforms(x),x.onBuild(F,ft,y),x.onBeforeCompile(ft,y),Et=$.acquireProgram(ft,xt),St.set(xt,Et),I.uniforms=ft.uniforms;const Lt=I.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Lt.clippingPlanes=ot.uniform),ca(x,ft),I.needsLights=Kl(x),I.lightsStateVersion=dt,I.needsLights&&(Lt.ambientLightColor.value=U.state.ambient,Lt.lightProbe.value=U.state.probe,Lt.directionalLights.value=U.state.directional,Lt.directionalLightShadows.value=U.state.directionalShadow,Lt.spotLights.value=U.state.spot,Lt.spotLightShadows.value=U.state.spotShadow,Lt.rectAreaLights.value=U.state.rectArea,Lt.ltc_1.value=U.state.rectAreaLTC1,Lt.ltc_2.value=U.state.rectAreaLTC2,Lt.pointLights.value=U.state.point,Lt.pointLightShadows.value=U.state.pointShadow,Lt.hemisphereLights.value=U.state.hemi,Lt.directionalShadowMap.value=U.state.directionalShadowMap,Lt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Lt.spotShadowMap.value=U.state.spotShadowMap,Lt.spotLightMatrix.value=U.state.spotLightMatrix,Lt.spotLightMap.value=U.state.spotLightMap,Lt.pointShadowMap.value=U.state.pointShadowMap,Lt.pointShadowMatrix.value=U.state.pointShadowMatrix),I.currentProgram=Et,I.uniformsList=null,Et}function la(x){if(x.uniformsList===null){const P=x.currentProgram.getUniforms();x.uniformsList=bs.seqWithValue(P.seq,x.uniforms)}return x.uniformsList}function ca(x,P){const F=Pt.get(x);F.outputColorSpace=P.outputColorSpace,F.batching=P.batching,F.instancing=P.instancing,F.instancingColor=P.instancingColor,F.instancingMorph=P.instancingMorph,F.skinning=P.skinning,F.morphTargets=P.morphTargets,F.morphNormals=P.morphNormals,F.morphColors=P.morphColors,F.morphTargetsCount=P.morphTargetsCount,F.numClippingPlanes=P.numClippingPlanes,F.numIntersection=P.numClipIntersection,F.vertexAlphas=P.vertexAlphas,F.vertexTangents=P.vertexTangents,F.toneMapping=P.toneMapping}function ql(x,P,F,I,U){P.isScene!==!0&&(P=Ut),Bt.resetTextureUnits();const at=P.fog,dt=I.isMeshStandardMaterial?P.environment:null,ft=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:wn,xt=(I.isMeshStandardMaterial?E:ee).get(I.envMap||dt),St=I.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Et=!!F.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),Lt=!!F.morphAttributes.position,se=!!F.morphAttributes.normal,pe=!!F.morphAttributes.color;let Re=En;I.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Re=y.toneMapping);const Qe=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Gt=Qe!==void 0?Qe.length:0,yt=Pt.get(I),Ai=f.state.lights;if(H===!0&&(et===!0||x!==S)){const Ie=x===S&&I.id===k;ot.setState(I,x,Ie)}let Qt=!1;I.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Ai.state.version||yt.outputColorSpace!==ft||U.isBatchedMesh&&yt.batching===!1||!U.isBatchedMesh&&yt.batching===!0||U.isInstancedMesh&&yt.instancing===!1||!U.isInstancedMesh&&yt.instancing===!0||U.isSkinnedMesh&&yt.skinning===!1||!U.isSkinnedMesh&&yt.skinning===!0||U.isInstancedMesh&&yt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&yt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&yt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&yt.instancingMorph===!1&&U.morphTexture!==null||yt.envMap!==xt||I.fog===!0&&yt.fog!==at||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==ot.numPlanes||yt.numIntersection!==ot.numIntersection)||yt.vertexAlphas!==St||yt.vertexTangents!==Et||yt.morphTargets!==Lt||yt.morphNormals!==se||yt.morphColors!==pe||yt.toneMapping!==Re||yt.morphTargetsCount!==Gt)&&(Qt=!0):(Qt=!0,yt.__version=I.version);let Rn=yt.currentProgram;Qt===!0&&(Rn=$i(I,P,U));let ha=!1,wi=!1,zs=!1;const me=Rn.getUniforms(),pn=yt.uniforms;if(Mt.useProgram(Rn.program)&&(ha=!0,wi=!0,zs=!0),I.id!==k&&(k=I.id,wi=!0),ha||S!==x){me.setValue(L,"projectionMatrix",x.projectionMatrix),me.setValue(L,"viewMatrix",x.matrixWorldInverse);const Ie=me.map.cameraPosition;Ie!==void 0&&Ie.setValue(L,st.setFromMatrixPosition(x.matrixWorld)),Yt.logarithmicDepthBuffer&&me.setValue(L,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&me.setValue(L,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,wi=!0,zs=!0)}if(U.isSkinnedMesh){me.setOptional(L,U,"bindMatrix"),me.setOptional(L,U,"bindMatrixInverse");const Ie=U.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),me.setValue(L,"boneTexture",Ie.boneTexture,Bt))}U.isBatchedMesh&&(me.setOptional(L,U,"batchingTexture"),me.setValue(L,"batchingTexture",U._matricesTexture,Bt));const ks=F.morphAttributes;if((ks.position!==void 0||ks.normal!==void 0||ks.color!==void 0)&&mt.update(U,F,Rn),(wi||yt.receiveShadow!==U.receiveShadow)&&(yt.receiveShadow=U.receiveShadow,me.setValue(L,"receiveShadow",U.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(pn.envMap.value=xt,pn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),I.isMeshStandardMaterial&&I.envMap===null&&P.environment!==null&&(pn.envMapIntensity.value=P.environmentIntensity),wi&&(me.setValue(L,"toneMappingExposure",y.toneMappingExposure),yt.needsLights&&Yl(pn,zs),at&&I.fog===!0&&Z.refreshFogUniforms(pn,at),Z.refreshMaterialUniforms(pn,I,j,Q,f.state.transmissionRenderTarget[x.id]),bs.upload(L,la(yt),pn,Bt)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(bs.upload(L,la(yt),pn,Bt),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&me.setValue(L,"center",U.center),me.setValue(L,"modelViewMatrix",U.modelViewMatrix),me.setValue(L,"normalMatrix",U.normalMatrix),me.setValue(L,"modelMatrix",U.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const Ie=I.uniformsGroups;for(let Hs=0,$l=Ie.length;Hs<$l;Hs++){const ua=Ie[Hs];Ft.update(ua,Rn),Ft.bind(ua,Rn)}}return Rn}function Yl(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function Kl(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(x,P,F){Pt.get(x.texture).__webglTexture=P,Pt.get(x.depthTexture).__webglTexture=F;const I=Pt.get(x);I.__hasExternalTextures=!0,I.__autoAllocateDepthBuffer=F===void 0,I.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,P){const F=Pt.get(x);F.__webglFramebuffer=P,F.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(x,P=0,F=0){A=x,O=P,w=F;let I=!0,U=null,at=!1,dt=!1;if(x){const xt=Pt.get(x);xt.__useDefaultFramebuffer!==void 0?(Mt.bindFramebuffer(L.FRAMEBUFFER,null),I=!1):xt.__webglFramebuffer===void 0?Bt.setupRenderTarget(x):xt.__hasExternalTextures&&Bt.rebindTextures(x,Pt.get(x.texture).__webglTexture,Pt.get(x.depthTexture).__webglTexture);const St=x.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(dt=!0);const Et=Pt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Et[P])?U=Et[P][F]:U=Et[P],at=!0):x.samples>0&&Bt.useMultisampledRTT(x)===!1?U=Pt.get(x).__webglMultisampledFramebuffer:Array.isArray(Et)?U=Et[F]:U=Et,v.copy(x.viewport),N.copy(x.scissor),W=x.scissorTest}else v.copy(J).multiplyScalar(j).floor(),N.copy(pt).multiplyScalar(j).floor(),W=It;if(Mt.bindFramebuffer(L.FRAMEBUFFER,U)&&I&&Mt.drawBuffers(x,U),Mt.viewport(v),Mt.scissor(N),Mt.setScissorTest(W),at){const xt=Pt.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+P,xt.__webglTexture,F)}else if(dt){const xt=Pt.get(x.texture),St=P||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,xt.__webglTexture,F||0,St)}k=-1},this.readRenderTargetPixels=function(x,P,F,I,U,at,dt){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=Pt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&dt!==void 0&&(ft=ft[dt]),ft){Mt.bindFramebuffer(L.FRAMEBUFFER,ft);try{const xt=x.texture,St=xt.format,Et=xt.type;if(!Yt.textureFormatReadable(St)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-I&&F>=0&&F<=x.height-U&&L.readPixels(P,F,I,U,ht.convert(St),ht.convert(Et),at)}finally{const xt=A!==null?Pt.get(A).__webglFramebuffer:null;Mt.bindFramebuffer(L.FRAMEBUFFER,xt)}}},this.copyFramebufferToTexture=function(x,P,F=0){const I=Math.pow(2,-F),U=Math.floor(P.image.width*I),at=Math.floor(P.image.height*I);Bt.setTexture2D(P,0),L.copyTexSubImage2D(L.TEXTURE_2D,F,0,0,x.x,x.y,U,at),Mt.unbindTexture()},this.copyTextureToTexture=function(x,P,F,I=0){const U=P.image.width,at=P.image.height,dt=ht.convert(F.format),ft=ht.convert(F.type);Bt.setTexture2D(F,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment),P.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,I,x.x,x.y,U,at,dt,ft,P.image.data):P.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,I,x.x,x.y,P.mipmaps[0].width,P.mipmaps[0].height,dt,P.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,I,x.x,x.y,dt,ft,P.image),I===0&&F.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Mt.unbindTexture()},this.copyTextureToTexture3D=function(x,P,F,I,U=0){const at=x.max.x-x.min.x,dt=x.max.y-x.min.y,ft=x.max.z-x.min.z,xt=ht.convert(I.format),St=ht.convert(I.type);let Et;if(I.isData3DTexture)Bt.setTexture3D(I,0),Et=L.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Bt.setTexture2DArray(I,0),Et=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const Lt=L.getParameter(L.UNPACK_ROW_LENGTH),se=L.getParameter(L.UNPACK_IMAGE_HEIGHT),pe=L.getParameter(L.UNPACK_SKIP_PIXELS),Re=L.getParameter(L.UNPACK_SKIP_ROWS),Qe=L.getParameter(L.UNPACK_SKIP_IMAGES),Gt=F.isCompressedTexture?F.mipmaps[U]:F.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Gt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Gt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,x.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,x.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,x.min.z),F.isDataTexture||F.isData3DTexture?L.texSubImage3D(Et,U,P.x,P.y,P.z,at,dt,ft,xt,St,Gt.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(Et,U,P.x,P.y,P.z,at,dt,ft,xt,Gt.data):L.texSubImage3D(Et,U,P.x,P.y,P.z,at,dt,ft,xt,St,Gt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Lt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,se),L.pixelStorei(L.UNPACK_SKIP_PIXELS,pe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Re),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Qe),U===0&&I.generateMipmaps&&L.generateMipmap(Et),Mt.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?Bt.setTextureCube(x,0):x.isData3DTexture?Bt.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Bt.setTexture2DArray(x,0):Bt.setTexture2D(x,0),Mt.unbindTexture()},this.resetState=function(){O=0,w=0,A=null,Mt.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Wr?"display-p3":"srgb",e.unpackColorSpace=Xt.workingColorSpace===Ns?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Zr{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new At(t),this.near=e,this.far=n}clone(){return new Zr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let Mm=class extends ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ve,this.environmentIntensity=1,this.environmentRotation=new Ve,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};class Sm extends ve{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ae,h=Ae,p,d){super(null,a,o,l,c,h,s,r,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uo extends De{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ci=new Jt,No=new Jt,vs=[],Fo=new Vn,ym=new Jt,Di=new Te,Ii=new Ti;class Mr extends Te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Uo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ym)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ci),Fo.copy(t.boundingBox).applyMatrix4(ci),this.boundingBox.union(Fo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ci),Ii.copy(t.boundingSphere).applyMatrix4(ci),this.boundingSphere.union(Ii)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Di.geometry=this.geometry,Di.material=this.material,Di.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ii.copy(this.boundingSphere),Ii.applyMatrix4(n),t.ray.intersectsSphere(Ii)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ci),No.multiplyMatrices(n,ci),Di.matrixWorld=No,Di.raycast(t,vs);for(let a=0,o=vs.length;a<o;a++){const l=vs[a];l.instanceId=r,l.object=this,e.push(l)}vs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Uo(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sm(new Float32Array(s*this.count),s,this.count,fl,cn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ol extends Wn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Oo=new Jt,Br=new Sl,xs=new Ti,Ms=new D;class Em extends ae{constructor(t=new Je,e=new Ol){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(s),xs.radius+=r,t.ray.intersectsSphere(xs)===!1)return;Oo.copy(s).invert(),Br.copy(t.ray).applyMatrix4(Oo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=d,M=m;g<M;g++){const f=c.getX(g);Ms.fromBufferAttribute(p,f),Bo(Ms,f,l,s,t,e,this)}}else{const d=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let g=d,M=m;g<M;g++)Ms.fromBufferAttribute(p,g),Bo(Ms,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Bo(i,t,e,n,s,r,a){const o=Br.distanceSqToPoint(i);if(o<e){const l=new D;Br.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class Tm extends ve{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bm extends We{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ui extends Wn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new At(16777215),this.specular=new At(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ve,this.combine=Is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Am extends Wn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ve,this.combine=Is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bl extends ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class wm extends Bl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Sr=new Jt,zo=new D,ko=new D;class Rm{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yr,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;zo.setFromMatrixPosition(t.matrixWorld),e.position.copy(zo),ko.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ko),e.updateMatrixWorld(),Sr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Cm extends Rm{constructor(){super(new Kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pm extends Bl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.shadow=new Cm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Lm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ho(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ho();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ho(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gr);const Dm={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Yi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Im=new Kr(-1,1,1,-1,0,1);class Um extends Je{constructor(){super(),this.setAttribute("position",new dn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dn([0,2,0,0,2,0],2))}}const Nm=new Um;class zl{constructor(t){this._mesh=new Te(Nm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Im)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Fm extends Yi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof We?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=qr.clone(t.uniforms),this.material=new We({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new zl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Go extends Yi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Om extends Yi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Bm{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Dt);this._width=n.width,this._height=n.height,e=new An(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fm(Dm),this.copyPass.material.blending=un,this.clock=new Lm}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Go!==void 0&&(a instanceof Go?n=!0:a instanceof Om&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Dt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class zm extends Yi{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new At}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const km={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Hm extends Yi{constructor(){super();const t=km;this.uniforms=qr.clone(t.uniforms),this.material=new bm({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new zl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Xt.getTransfer(this._outputColorSpace)===Kt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===nl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===il?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===sl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===rl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===al?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ol&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const zr=["I","J","L","O","S","T","Z"],Ze={I:3407871,O:16769357,T:16731647,S:5111688,Z:16731501,J:5081855,L:16751421,G:3817301},jr={I:["....","XXXX","....","...."],O:["XX","XX"],J:["X..","XXX","..."],L:["..X","XXX","..."],S:[".XX","XX.","..."],T:[".X.","XXX","..."],Z:["XX.",".XX","..."]};function Gm(i){const t=i.length,e=i[0].length,n=[];for(let s=0;s<e;s++){let r="";for(let a=0;a<t;a++)r+=i[t-1-a][s];n.push(r)}return n}function Vm(i){return jr[i].length}function Wm(i){return jr[i][0].length}function Jr(i,t){let e=jr[i];for(let n=0;n<t;n++)e=Gm(e);return e}function Sn(i,t){const e=Jr(i,t),n=e.length,s=[];for(let r=0;r<n;r++)for(let a=0;a<e[r].length;a++)e[r][a]==="X"&&s.push([a,n-1-r]);return s}const Xm={"0>1":[[0,0],[-1,0],[-1,1],[0,-2],[-1,-2]],"1>0":[[0,0],[1,0],[1,-1],[0,2],[1,2]],"1>2":[[0,0],[1,0],[1,-1],[0,2],[1,2]],"2>1":[[0,0],[-1,0],[-1,1],[0,-2],[-1,-2]],"2>3":[[0,0],[1,0],[1,1],[0,-2],[1,-2]],"3>2":[[0,0],[-1,0],[-1,-1],[0,2],[-1,2]],"3>0":[[0,0],[-1,0],[-1,-1],[0,2],[-1,2]],"0>3":[[0,0],[1,0],[1,1],[0,-2],[1,-2]]},qm={"0>1":[[0,0],[-2,0],[1,0],[-2,-1],[1,2]],"1>0":[[0,0],[2,0],[-1,0],[2,1],[-1,-2]],"1>2":[[0,0],[-1,0],[2,0],[-1,2],[2,-1]],"2>1":[[0,0],[1,0],[-2,0],[1,-2],[-2,1]],"2>3":[[0,0],[2,0],[-1,0],[2,1],[-1,-2]],"3>2":[[0,0],[-2,0],[1,0],[-2,-1],[1,2]],"3>0":[[0,0],[1,0],[-2,0],[1,-2],[-2,1]],"0>3":[[0,0],[-1,0],[2,0],[-1,2],[2,-1]]};function Ym(i,t,e){const n=`${t}>${e}`;return(i==="I"?qm:Xm)[n]??[[0,0]]}function qe(i,t){const e=Math.min(255,Math.floor((i>>16&255)*t)),n=Math.min(255,Math.floor((i>>8&255)*t)),s=Math.min(255,Math.floor((i&255)*t));return e<<16|n<<8|s}const Vo=-70,Wo=70,Xo=-6,qo=46,Yo=-96,Ko=-14,hi=6,yr=2.2;function Er(i,t,e){const n=e-t;return((i-t)%n+n)%n+t}class Km{constructor(t){V(this,"renderer");V(this,"scene");V(this,"camera");V(this,"composer");V(this,"camBase",new D(0,11,40));V(this,"camTarget",new D(0,9.5,0));V(this,"cubeGeo",new Xn(1,1,1));V(this,"matCache",{});V(this,"floaters",[]);V(this,"shakeOffset",new D);V(this,"punch",0);const e=t.canvas;this.renderer=new xm({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const n=this.skyTexture();this.scene=new Mm,this.scene.background=n,this.scene.fog=new Zr(12376565,55,130),this.camera=new Fe(52,1,.1,600),this.camera.position.copy(this.camBase),this.camera.lookAt(this.camTarget);const s=new wm(14479359,6977696,1.2);this.scene.add(s);const r=new Pm(16774880,1);r.position.set(6,24,20),this.scene.add(r),this.buildFloaters(),this.composer=new Bm(this.renderer),this.composer.addPass(new zm(this.scene,this.camera)),this.composer.addPass(new Hm)}skyTexture(){const t=document.createElement("canvas");t.width=4,t.height=256;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"#86baff"),n.addColorStop(1,"#dcefff"),e.fillStyle=n,e.fillRect(0,0,4,256);const s=new Tm(t);return s.colorSpace=ke,s}mat(t){return this.matCache[t]||(this.matCache[t]=new Am({color:t})),this.matCache[t]}cube(t,e,n,s,r){const a=new Te(this.cubeGeo,this.mat(s));a.position.set(t,e,n),r.add(a)}buildBlock(t){const e=new fi,n=zr[Math.floor(Math.random()*zr.length)],s=Jr(n,0),r=s.length,a=s[0].length;for(let o=0;o<r;o++)for(let l=0;l<a;l++)s[o][l]==="X"&&this.cube(l-(a-1)/2,r-1-o,0,t,e);return e}buildFloaters(){const t=[3407871,16769357,16731647,5111688,16731501,5081855,16751421,3841338,14256938,16751536,12160240,4638463],e=(n,s)=>n+Math.random()*(s-n);for(let n=0;n<42;n++){const s=this.buildBlock(qe(t[Math.floor(Math.random()*t.length)],.4)),r=e(Vo,Wo),a=e(Xo,qo),o=e(Yo,Ko);s.position.set(r,a,o),s.scale.setScalar(e(.8,2.6)),s.rotation.set(e(0,Math.PI*2),e(0,Math.PI*2),e(0,Math.PI*2)),this.floaters.push({obj:s,x:r,y:a,z:o,vx:e(-3,3),vy:e(-2.5,2.5),vz:e(-1.2,1.2),rotX:e(-1.4,1.4),rotY:e(-1.4,1.4),rotZ:e(-1.4,1.4)}),this.scene.add(s)}}add(t){this.scene.add(t)}remove(t){this.scene.remove(t)}resize(t,e){const n=t<820||t/e<.75;this.camBase.set(0,n?13:11,n?52:40),this.camTarget.set(0,n?10:9.5,0),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1),this.composer.setSize(t,e)}applyShake(t){this.shakeOffset.copy(t)}applyPunch(t){this.punch=Math.max(this.punch,t)}render(t){const e=Math.min(t,50)/1e3,n=e*60;for(const s of this.floaters)s.vx=Ks.clamp(s.vx+(Math.random()-.5)*yr*n,-hi,hi),s.vy=Ks.clamp(s.vy+(Math.random()-.5)*yr*n,-hi,hi),s.vz=Ks.clamp(s.vz+(Math.random()-.5)*yr*n,-hi,hi),s.x=Er(s.x+s.vx*e,Vo,Wo),s.y=Er(s.y+s.vy*e,Xo,qo),s.z=Er(s.z+s.vz*e,Yo,Ko),s.obj.position.set(s.x,s.y,s.z),s.obj.rotation.x+=s.rotX*e,s.obj.rotation.y+=s.rotY*e,s.obj.rotation.z+=s.rotZ*e;this.camera.position.set(this.camBase.x+this.shakeOffset.x,this.camBase.y+this.shakeOffset.y,this.camBase.z+this.shakeOffset.z-this.punch*2.4),this.camera.lookAt(this.camTarget.x+this.shakeOffset.x*.5,this.camTarget.y+this.shakeOffset.y*.5,this.camTarget.z),this.shakeOffset.multiplyScalar(.85),this.punch*=.86,this.composer.render()}}const Ni=new D;function Ne(i,t,e,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Ni.copy(t),Ni[n]=0,Ni.normalize();const c=.5*a/(a+o),h=1-Ni.angleTo(i)/l;return Math.sign(Ni[e])===1?h*c:o/(a+o)+c+c*(1-h)}class Fi extends Xn{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new D,l=new D,c=new D(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,p=this.attributes.normal.array,d=this.attributes.uv.array,m=h.length/6,g=new D,M=.5/s;for(let f=0,u=0;f<h.length;f+=3,u+=2)switch(o.fromArray(h,f),l.copy(o),l.x-=Math.sign(l.x)*M,l.y-=Math.sign(l.y)*M,l.z-=Math.sign(l.z)*M,l.normalize(),h[f+0]=c.x*Math.sign(o.x)+l.x*r,h[f+1]=c.y*Math.sign(o.y)+l.y*r,h[f+2]=c.z*Math.sign(o.z)+l.z*r,p[f+0]=l.x,p[f+1]=l.y,p[f+2]=l.z,Math.floor(f/m)){case 0:g.set(1,0,0),d[u+0]=Ne(g,l,"z","y",r,n),d[u+1]=1-Ne(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[u+0]=1-Ne(g,l,"z","y",r,n),d[u+1]=1-Ne(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[u+0]=1-Ne(g,l,"x","z",r,t),d[u+1]=Ne(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[u+0]=1-Ne(g,l,"x","z",r,t),d[u+1]=1-Ne(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[u+0]=1-Ne(g,l,"x","y",r,t),d[u+1]=1-Ne(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[u+0]=Ne(g,l,"x","y",r,t),d[u+1]=1-Ne(g,l,"y","x",r,e);break}}}const Ht=10,he=22;class $m{constructor(){V(this,"grid");this.grid=Array.from({length:he},()=>Array.from({length:Ht},()=>null))}inBounds(t,e){return t>=0&&t<Ht&&e>=0&&e<he}getCell(t,e){return this.inBounds(t,e)?this.grid[e][t]:null}setCell(t,e,n){this.inBounds(t,e)&&(this.grid[e][t]={kind:n})}collides(t,e,n){for(const[s,r]of t){const a=e+s,o=n+r;if(a<0||a>=Ht||o<0)return!0;if(!(o>=he)&&this.grid[o][a])return!0}return!1}place(t,e,n,s){for(const[r,a]of t){const o=e+r,l=n+a;this.inBounds(o,l)&&(this.grid[l][o]={kind:s})}}clearLines(){const t=[];for(let n=0;n<he;n++)this.grid[n].every(s=>s!==null)&&t.push(n);if(t.length===0)return{rows:t,count:0};const e=this.grid.filter((n,s)=>!t.includes(s));for(;e.length<he;)e.push(Array.from({length:Ht},()=>null));return this.grid=e,{rows:t,count:t.length}}}const Tr=20,an=.92,br={};function Ss(i){const t=i.toString();return br[t]||(br[t]=new At(i)),br[t]}class $o{constructor(t,e,n){V(this,"group");V(this,"engine");V(this,"blocks");V(this,"garbage");V(this,"ghost");V(this,"dummy",new ae);V(this,"rise",{active:!1,n:0,t:0,dur:.35});this.engine=t,this.group=new fi,this.group.position.set(e-(Ht-1)/2,0,0);const s=new Fi(Ht+.8,Tr+.8,.5,4,.7),r=new Ui({color:16777215,shininess:40,specular:10066329}),a=new Te(s,r);a.position.set((Ht-1)/2,(Tr-1)/2,-.6),this.group.add(a);const o=new Fi(Ht+.4,.7,.45,3,.3),l=new Ui({color:n,shininess:90,specular:16777215}),c=new Te(o,l);c.position.set((Ht-1)/2,Tr-.1,-.3),this.group.add(c);const h=new Fi(an,an,an,3,.16),p=new Ui({shininess:80,specular:16777215});this.blocks=new Mr(h,p,Ht*he+8),this.blocks.instanceMatrix.setUsage(Va),this.group.add(this.blocks);const d=new Fi(an,an,an,2,.16),m=new Ui({shininess:50,specular:6710886});this.garbage=new Mr(d,m,Ht*he),this.garbage.instanceMatrix.setUsage(Va),this.group.add(this.garbage);const g=new Fi(an,an,an,2,.16),M=new Ui({transparent:!0,opacity:.32,shininess:10,depthWrite:!1});this.ghost=new Mr(g,M,8),this.group.add(this.ghost)}startGarbageRise(t){t<=0||(this.rise={active:!0,n:t,t:0,dur:.35})}update(t){this.rise.active&&(this.rise.t+=t/1e3,this.rise.t>=this.rise.dur&&(this.rise.active=!1))}sync(){const t=this.engine;let e=0,n=0;const s=this.rise.active?(1-this.rise.t/this.rise.dur)*this.rise.n:0;for(let o=0;o<he;o++)for(let l=0;l<Ht;l++){const c=t.cellAt(l,o);if(!c)continue;const h=c.kind==="G",p=h&&this.rise.active&&o<this.rise.n?-s:0;this.dummy.position.set(l,o+p,0),this.dummy.rotation.set(0,0,0),this.dummy.scale.setScalar(1),this.dummy.updateMatrix(),h?(this.garbage.setMatrixAt(n,this.dummy.matrix),this.garbage.setColorAt(n,Ss(c.tint??Ze.G)),n++):(this.blocks.setMatrixAt(e,this.dummy.matrix),this.blocks.setColorAt(e,Ss(Ze[c.kind]??8947848)),e++)}const r=t.current;if(r&&t.alive)for(const[o,l]of t.absCells)this.dummy.position.set(o,l,0),this.dummy.scale.setScalar(1.05),this.dummy.updateMatrix(),this.blocks.setMatrixAt(e,this.dummy.matrix),this.blocks.setColorAt(e,Ss(Ze[r.kind]??8947848)),e++;this.blocks.count=e,this.blocks.instanceMatrix.needsUpdate=!0,this.blocks.instanceColor&&(this.blocks.instanceColor.needsUpdate=!0),this.garbage.count=n,this.garbage.instanceMatrix.needsUpdate=!0,this.garbage.instanceColor&&(this.garbage.instanceColor.needsUpdate=!0);let a=0;if(r&&t.alive){const o=Ss(qe(Ze[r.kind]??8947848,.55));for(const[l,c]of t.ghostCells)this.dummy.position.set(l,c,0),this.dummy.scale.setScalar(1),this.dummy.updateMatrix(),this.ghost.setMatrixAt(a,this.dummy.matrix),this.ghost.setColorAt(a,o),a++}this.ghost.count=a,this.ghost.instanceMatrix.needsUpdate=!0,this.ghost.instanceColor&&(this.ghost.instanceColor.needsUpdate=!0)}setAccent(t){}get originX(){return this.group.position.x}}const Zm=-26;class ys{constructor(t,e,n,s=1,r=!0){V(this,"points");V(this,"positions");V(this,"colors");V(this,"base");V(this,"vel");V(this,"life");V(this,"max");V(this,"cursor",0);V(this,"drag");V(this,"gravity");this.drag=s,this.gravity=r,this.positions=new Float32Array(n*3),this.colors=new Float32Array(n*3),this.base=new Float32Array(n*3),this.vel=new Float32Array(n*3),this.life=new Float32Array(n),this.max=new Float32Array(n);const a=new Je;a.setAttribute("position",new De(this.positions,3)),a.setAttribute("color",new De(this.colors,3));const o=new Ol({size:e,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Pr,sizeAttenuation:!0});this.points=new Em(a,o),this.points.frustumCulled=!1;for(let l=0;l<n;l++)this.positions[l*3+1]=-9999;t.add(this.points)}plant(t,e,n,s,r,a,o,l){const c=this.cursor;this.cursor=(this.cursor+1)%this.life.length;const h=c*3;this.positions[h]=t,this.positions[h+1]=e,this.positions[h+2]=n;const p=new At(s);this.base[h]=p.r,this.base[h+1]=p.g,this.base[h+2]=p.b,this.colors[h]=p.r,this.colors[h+1]=p.g,this.colors[h+2]=p.b,this.vel[h]=r,this.vel[h+1]=a,this.vel[h+2]=o,this.life[c]=l,this.max[c]=l}spawn(t,e,n,s,r,a,o){const l=Math.random()*Math.PI*2,c=r*(.4+Math.random()*.9);this.plant(t,e,n,s,Math.cos(l)*c,a+Math.random()*r,Math.sin(l)*c*.4,o)}vec(t,e,n,s,r,a,o,l){this.plant(t,e,n,s,r,a,o,l)}update(t){const e=Math.pow(this.drag,t*60);for(let n=0;n<this.life.length;n++){if(this.life[n]<=0)continue;this.life[n]-=t;const s=n*3;if(this.life[n]<=0){this.colors[s]=this.colors[s+1]=this.colors[s+2]=0,this.positions[s+1]=-9999;continue}if(this.gravity&&(this.vel[s+1]+=Zm*t),this.vel[s]*=e,this.vel[s+1]*=e,this.vel[s+2]*=e,this.positions[s]+=this.vel[s]*t,this.positions[s+1]+=this.vel[s+1]*t,this.positions[s+2]+=this.vel[s+2]*t,this.gravity&&this.positions[s+1]<0){this.life[n]=0,this.colors[s]=this.colors[s+1]=this.colors[s+2]=0,this.positions[s+1]=-9999;continue}const r=this.life[n]/this.max[n];this.colors[s]=this.base[s]*r,this.colors[s+1]=this.base[s+1]*r,this.colors[s+2]=this.base[s+2]*r}this.points.geometry.getAttribute("position").needsUpdate=!0,this.points.geometry.getAttribute("color").needsUpdate=!0}}class jm{constructor(t){V(this,"sparks");V(this,"embers");V(this,"glints");V(this,"ring");V(this,"shakeMag",0);V(this,"punchMag",0);this.scene=t,this.sparks=new ys(t,.5,1700,.92),this.embers=new ys(t,1.3,420,.97),this.glints=new ys(t,.3,800,.9),this.ring=new ys(t,.5,700,.94,!0)}palette(t){return[t,qe(t,1.5),qe(t,.5),16777215,qe(t,.8)]}explode(t,e,n,s=1){if(e.length===0)return;const r=this.palette(n),a=[16777215,qe(n,1.6),n],o=()=>r[Math.floor(Math.random()*r.length)],l=()=>a[Math.floor(Math.random()*a.length)],c=t+(Ht-1)/2;for(const h of e){const p=h+.5,d=Math.floor(22+s*5),m=5+2.5*s;for(let u=0;u<d;u++){const T=u/d*Math.PI*2+(Math.random()-.5)*.05;this.ring.vec(c,p,.5,o(),Math.cos(T)*m,Math.sin(T)*m,0,.5+Math.random()*.25)}const g=Math.floor(26*s);for(let u=0;u<g;u++)this.sparks.spawn(t+Math.random()*(Ht-1),h+(Math.random()-.5),.5,o(),11*s,6,.45+Math.random()*.5);const M=Math.floor(7*s);for(let u=0;u<M;u++)this.embers.spawn(t+Math.random()*(Ht-1),h+(Math.random()-.5),.5,o(),5*s,3.5,.8+Math.random()*.7);const f=Math.floor(14*s);for(let u=0;u<f;u++)this.glints.spawn(t+Math.random()*(Ht-1),h+(Math.random()-.5),.5,l(),13*s,5,.3+Math.random()*.35)}}garbageSlam(t,e,n=7304328){const s=[n,qe(n,1.2),qe(n,.6)],r=()=>s[Math.floor(Math.random()*s.length)];for(let a=0;a<34;a++){const o=t+Math.random()*(Ht-1);this.sparks.spawn(o,e*.5+Math.random()*2,.4,r(),5,10,.6)}}lockDust(t,e,n){const s=[n,qe(n,1.3),16777215],r=()=>s[Math.floor(Math.random()*s.length)];for(const[a,o]of e)for(let l=0;l<4;l++)this.sparks.spawn(t+a,o,.4,r(),1.6,1.2,.4)}shake(t){this.shakeMag=Math.max(this.shakeMag,t)}punch(t){this.punchMag=Math.max(this.punchMag,t)}update(t){const e=Math.min(t,50)/1e3;this.sparks.update(e),this.embers.update(e),this.glints.update(e),this.ring.update(e),this.shakeMag>.001&&(this.scene.applyShake(new D((Math.random()-.5)*this.shakeMag,(Math.random()-.5)*this.shakeMag,(Math.random()-.5)*this.shakeMag*.5)),this.shakeMag*=.86),this.punchMag>.001&&(this.scene.applyPunch(this.punchMag),this.punchMag*=.88)}}const Jm=500,Qm=15,tg=1e3,eg=8,ng=170,Zo=50;function ig(i){const t=Math.pow(.8-(i-1)*.007,i-1);return Math.max(t,.001)}const sg={none:0,single:100,double:300,triple:500,tetris:800,"tspin-mini":100,"tspin-single":400,"tspin-double":800,"tspin-triple":1200};function rg(i,t,e=!1){const n=sg[i]??0,s=i==="tetris"||i.startsWith("tspin"),r=e&&s?1.5:1;return Math.floor(n*t*r)}const ag={none:0,single:1,double:2,triple:3,tetris:4,"tspin-mini":0,"tspin-single":1,"tspin-double":2,"tspin-triple":3};function og(i){return Math.max(0,(ag[i]??0)-1)}function lg(i,t){if(t)switch(i){case 0:return"tspin-mini";case 1:return"tspin-single";case 2:return"tspin-double";case 3:return"tspin-triple"}switch(i){case 1:return"single";case 2:return"double";case 3:return"triple";case 4:return"tetris";default:return"none"}}function cg(i){return i==="tetris"||i.startsWith("tspin")}const jo={ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right",ArrowDown:"soft",KeyS:"soft",Space:"hard",ArrowUp:"cw",KeyX:"cw",KeyZ:"ccw",ControlLeft:"ccw",KeyC:"hold",ShiftLeft:"hold",KeyP:"pause",Escape:"pause",KeyR:"restart"},hg=new Set(["left","right","soft"]);class ug{constructor(t){V(this,"held",new Set);V(this,"das",{left:0,right:0});V(this,"armed",{left:!1,right:!1});V(this,"arr",{left:0,right:0});V(this,"softTimer",0);V(this,"onKeyDown");V(this,"onKeyUp");this.cb=t,this.onKeyDown=e=>{const n=jo[e.code];n&&((e.code.startsWith("Arrow")||e.code==="Space"||e.code==="Tab")&&e.preventDefault(),!e.repeat&&(hg.has(n)&&(n==="left"||n==="right"?(this.das[n]=0,this.armed[n]=!1,this.arr[n]=0):n==="soft"&&(this.softTimer=0),this.held.add(n)),this.cb(n)))},this.onKeyUp=e=>{const n=jo[e.code];n&&(this.held.delete(n),(n==="left"||n==="right")&&(this.armed[n]=!1))}}bind(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}unbind(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}update(t){for(const e of["left","right"])this.held.has(e)&&(this.armed[e]?(this.arr[e]+=t,this.arr[e]>=Zo&&(this.arr[e]=0,this.cb(e))):(this.das[e]+=t,this.das[e]>=ng&&(this.armed[e]=!0)));this.held.has("soft")&&(this.softTimer+=t,this.softTimer>=Zo&&(this.softTimer=0,this.cb("soft")))}}const dg={tapMaxDistancePx:14,horizontalActivationPx:20,horizontalStepPx:28,rotateActivationYPx:46,rotateCenterBandPx:24,upwardBias:.7};class fg{constructor(t={}){V(this,"cfg");V(this,"startPoint",null);V(this,"lastStepX",0);V(this,"mode","pending");this.cfg={...dg,...t}}start(t,e){this.startPoint={x:t,y:e},this.lastStepX=t,this.mode="pending"}move(t,e){if(!this.startPoint)return[];const n=t-this.startPoint.x,s=e-this.startPoint.y;if(this.mode==="pending"){if(this.isRotation(n,s))return this.mode="rotate",[];if(this.isHorizontal(n,s))this.mode="horizontal";else return[]}return this.mode==="rotate"?[]:this.horizontalCommands(t)}end(t,e){if(!this.startPoint)return[];const n=t-this.startPoint.x,s=e-this.startPoint.y,r=Math.hypot(n,s),a=this.mode;let o=[];return a==="rotate"||this.isRotation(n,s)?o=[this.rotationCommand(n)]:a==="horizontal"||this.isHorizontal(n,s)?o=this.horizontalCommands(t):r<=this.cfg.tapMaxDistancePx&&(o=["hard"]),this.cancel(),o}cancel(){this.startPoint=null,this.lastStepX=0,this.mode="pending"}isHorizontal(t,e){return Math.abs(t)>=this.cfg.horizontalActivationPx&&Math.abs(t)>=Math.abs(e)}isRotation(t,e){return e<=-this.cfg.rotateActivationYPx&&Math.abs(e)>=Math.abs(t)*this.cfg.upwardBias}rotationCommand(t){return t<-this.cfg.rotateCenterBandPx?"ccw":"cw"}horizontalCommands(t){const e=t-this.lastStepX,n=Math.trunc(Math.abs(e)/this.cfg.horizontalStepPx);if(n<=0)return[];const s=e>0?"right":"left";return this.lastStepX+=n*this.cfg.horizontalStepPx*Math.sign(e),Array.from({length:n},()=>s)}}class pg{constructor(t){V(this,"layer");V(this,"menuButton");V(this,"tracker",new fg);V(this,"activePointer",null);V(this,"active",!1);V(this,"onPointerDown",t=>{!this.active||this.activePointer!==null||(t.preventDefault(),this.activePointer=t.pointerId,this.layer.setPointerCapture(t.pointerId),this.tracker.start(t.clientX,t.clientY))});V(this,"onPointerMove",t=>{if(!(!this.active||t.pointerId!==this.activePointer)){t.preventDefault();for(const e of this.tracker.move(t.clientX,t.clientY))this.opts.onCommand(e)}});V(this,"onPointerUp",t=>{if(!(!this.active||t.pointerId!==this.activePointer)){t.preventDefault();for(const e of this.tracker.end(t.clientX,t.clientY))this.opts.onCommand(e);this.releasePointer(t.pointerId)}});V(this,"onPointerCancel",t=>{t.pointerId===this.activePointer&&this.cancelPointer()});V(this,"onMenuClick",t=>{t.preventDefault(),t.stopPropagation(),this.opts.onMenu()});this.opts=t,this.layer=document.createElement("div"),this.layer.className="mobile-touch-layer",this.layer.setAttribute("aria-hidden","true");const e=document.createElement("div");e.className="mobile-control-bubble",this.layer.appendChild(e),this.menuButton=document.createElement("button"),this.menuButton.type="button",this.menuButton.className="mobile-menu-button",this.menuButton.textContent="MENU",this.menuButton.setAttribute("aria-label","Pause and open menu"),this.opts.root.appendChild(this.layer),this.opts.root.appendChild(this.menuButton)}bind(){this.layer.addEventListener("pointerdown",this.onPointerDown),this.layer.addEventListener("pointermove",this.onPointerMove),this.layer.addEventListener("pointerup",this.onPointerUp),this.layer.addEventListener("pointercancel",this.onPointerCancel),this.menuButton.addEventListener("click",this.onMenuClick)}unbind(){this.layer.removeEventListener("pointerdown",this.onPointerDown),this.layer.removeEventListener("pointermove",this.onPointerMove),this.layer.removeEventListener("pointerup",this.onPointerUp),this.layer.removeEventListener("pointercancel",this.onPointerCancel),this.menuButton.removeEventListener("click",this.onMenuClick)}setActive(t){this.active=t,this.layer.classList.toggle("active",t),this.menuButton.classList.toggle("active",t),t||this.cancelPointer()}cancelPointer(){this.activePointer!==null&&this.releasePointer(this.activePointer),this.tracker.cancel()}releasePointer(t){this.layer.hasPointerCapture(t)&&this.layer.releasePointerCapture(t),this.activePointer=null,this.tracker.cancel()}}class mg{constructor(){V(this,"ctx",null);V(this,"master",null);V(this,"musicGain",null);V(this,"muted",!1);V(this,"bgmTimer",null);V(this,"step",0);V(this,"nextNoteTime",0);V(this,"bass",[110,110,146.83,110,130.81,130.81,98,98]);V(this,"arp",[440,523.25,659.25,783.99,659.25,523.25,440,587.33])}resume(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.9,this.master.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.35,this.musicGain.connect(this.master)}this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:.9)}isMuted(){return this.muted}blip(t,e,n="square",s=.2,r,a){if(!this.ctx||!this.master)return;const o=this.ctx.currentTime,l=this.ctx.createOscillator();l.type=n,l.frequency.setValueAtTime(t,o),r&&l.frequency.exponentialRampToValueAtTime(Math.max(1,r),o+e);const c=this.ctx.createGain();c.gain.setValueAtTime(1e-4,o),c.gain.linearRampToValueAtTime(s,o+.006),c.gain.exponentialRampToValueAtTime(1e-4,o+e),l.connect(c).connect(a??this.master),l.start(o),l.stop(o+e+.03)}noise(t,e,n){if(!this.ctx||!this.master)return;const s=this.ctx.currentTime,r=Math.floor(this.ctx.sampleRate*t),a=this.ctx.createBuffer(1,r,this.ctx.sampleRate),o=a.getChannelData(0);for(let p=0;p<r;p++)o[p]=Math.random()*2-1;const l=this.ctx.createBufferSource();l.buffer=a;const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.value=n;const h=this.ctx.createGain();h.gain.setValueAtTime(e,s),h.gain.exponentialRampToValueAtTime(1e-4,s+t),l.connect(c).connect(h).connect(this.master),l.start(s),l.stop(s+t)}sfx(t){if(this.ctx)switch(t){case"move":this.blip(170,.04,"square",.06);break;case"rotate":this.blip(300,.05,"triangle",.09);break;case"hold":this.blip(520,.08,"triangle",.12,700);break;case"drop":this.noise(.1,.22,1400),this.blip(120,.12,"square",.16,60);break;case"line":this.blip(660,.16,"sine",.18,990);break;case"tetris":[523,659,784,1046].forEach((e,n)=>setTimeout(()=>this.blip(e,.4,"sine",.16),n*50));break;case"combo":[440,554,659,880].forEach((e,n)=>setTimeout(()=>this.blip(e,.1,"triangle",.13),n*45));break;case"garbage":this.blip(90,.25,"square",.22,50),this.noise(.18,.18,600);break;case"start":[392,523,659].forEach((e,n)=>setTimeout(()=>this.blip(e,.2,"triangle",.14),n*80));break;case"over":[440,349,261,174].forEach((e,n)=>setTimeout(()=>this.blip(e,.3,"sawtooth",.16),n*140));break}}startBgm(){!this.ctx||!this.musicGain||this.bgmTimer!==null||(this.step=0,this.nextNoteTime=this.ctx.currentTime+.1,this.bgmTimer=window.setInterval(()=>this.scheduler(),25))}stopBgm(){this.bgmTimer!==null&&(clearInterval(this.bgmTimer),this.bgmTimer=null)}scheduler(){if(!this.ctx||!this.musicGain)return;const t=.16;for(;this.nextNoteTime<this.ctx.currentTime+.12;){const e=this.step%8;e%2===0&&this.scheduleNote(this.bass[e],this.nextNoteTime,t*1.8,"sawtooth",.16),this.scheduleNote(this.arp[e],this.nextNoteTime,t*.9,"square",.05),e%2===1&&this.scheduleHat(this.nextNoteTime),this.nextNoteTime+=t,this.step++}}scheduleNote(t,e,n,s,r){if(!this.ctx||!this.musicGain)return;const a=this.ctx.createOscillator();a.type=s,a.frequency.value=t;const o=this.ctx.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(r,e+.01),o.gain.exponentialRampToValueAtTime(1e-4,e+n);const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=1600,a.connect(l).connect(o).connect(this.musicGain),a.start(e),a.stop(e+n+.02)}scheduleHat(t){if(!this.ctx||!this.musicGain)return;const e=Math.floor(this.ctx.sampleRate*.03),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=n.getChannelData(0);for(let l=0;l<e;l++)s[l]=Math.random()*2-1;const r=this.ctx.createBufferSource();r.buffer=n;const a=this.ctx.createBiquadFilter();a.type="highpass",a.frequency.value=7e3;const o=this.ctx.createGain();o.gain.setValueAtTime(.06,t),o.gain.exponentialRampToValueAtTime(1e-4,t+.03),r.connect(a).connect(o).connect(this.musicGain),r.start(t),r.stop(t+.04)}}const Jo=`#${Ze.G.toString(16).padStart(6,"0")}`;function te(i,t,e){const n=document.createElement(i);return t&&(n.className=t),e!==void 0&&(n.textContent=e),n}function Qo(i){const t=Jr(i,0),e=te("div","minipiece");e.style.gridTemplateColumns=`repeat(${t[0].length}, 12px)`;const n=`#${(Ze[i]??8947848).toString(16).padStart(6,"0")}`;for(let s=0;s<t.length;s++)for(let r=0;r<t[s].length;r++){const a=te("div","cell"+(t[s][r]==="X"?" on":""));t[s][r]==="X"&&(a.style.color=a.style.background=n),e.appendChild(a)}return e}class gg{constructor(t){V(this,"root");V(this,"panels",{});V(this,"garbageBoxes",{});V(this,"nextBoxes",{});V(this,"holdBoxes",{});V(this,"comboBadges",{});V(this,"popupLayer");V(this,"flashEl");V(this,"sig",{player:"",ai:""});this.root=t;const e=te("div","topbar");e.appendChild(te("h1","","NEON  TETRIS")),e.appendChild(te("div","sub","VS · AI")),t.appendChild(e),this.panels.player=this.buildPanel({side:"left",title:"YOU"}),this.panels.ai=this.buildPanel({side:"right",title:"AI"}),t.appendChild(this.panels.player),t.appendChild(this.panels.ai),this.popupLayer=te("div","popup-layer"),t.appendChild(this.popupLayer),this.flashEl=te("div"),this.flashEl.id="flash",t.appendChild(this.flashEl)}buildPanel(t){const e=te("div","panel "+t.side);e.appendChild(te("h2","",t.title)),e.appendChild(this.stat("SCORE","score","0")),e.appendChild(this.stat("LINES","lines","0")),e.appendChild(this.stat("LEVEL","level","1")),e.appendChild(te("div","combo-badge")),e.appendChild(te("div","mini-label","NEXT"));const n=te("div","next-box");e.appendChild(n),e.appendChild(te("div","mini-label","HOLD"));const s=te("div","hold-box");e.appendChild(s),e.appendChild(te("div","mini-label","INCOMING GARBAGE"));const r=te("div","gviz");e.appendChild(r);const a=t.side==="left"?"player":"ai";return this.nextBoxes[a]=n,this.holdBoxes[a]=s,this.comboBadges[a]=e.querySelector(".combo-badge"),this.garbageBoxes[a]=r,e}stat(t,e,n){const s=te("div","stat");return s.appendChild(te("span","label",t)),s.appendChild(te("span","value "+e,n)),s}setDifficulty(t){this.panels.ai.querySelector("h2").textContent=`AI · LV ${t}`}setMode(t){const e=this.panels.ai,n=this.panels.player;t==="single"?(e.style.display="none",n.style.left="auto",n.style.right="calc(50% + 150px)"):(e.style.display="",n.style.left="",n.style.right=""),n.style.transform="",this.sig={player:"",ai:""}}update(t,e){const n=e.peekNext(3),s=`${e.score}|${e.lines}|${e.level}|${e.combo}|${e.hold}|${n.join(",")}|${e.inboundPending}|${e.inboundHole}`;if(s===this.sig[t])return;this.sig[t]=s;const r=this.panels[t];r.querySelector(".score").textContent=String(e.score),r.querySelector(".lines").textContent=String(e.lines),r.querySelector(".level").textContent=String(e.level),this.comboBadges[t].textContent=e.combo>0?`COMBO x${e.combo+1}`:"",this.nextBoxes[t].innerHTML="",n.forEach(a=>this.nextBoxes[t].appendChild(Qo(a))),this.holdBoxes[t].innerHTML="",e.hold&&this.holdBoxes[t].appendChild(Qo(e.hold)),this.renderGarbage(this.garbageBoxes[t],e.inboundPending,e.inboundHole)}renderGarbage(t,e,n){t.innerHTML="";const s=Math.min(8,Math.max(0,e));if(s===0){const r=te("div","gviz-empty","—");t.appendChild(r);return}for(let r=0;r<s;r++){const a=te("div","grow");for(let o=0;o<Ht;o++){const l=te("div","gcell");o!==n&&(l.classList.add("on"),l.style.background=Jo,l.style.boxShadow=`0 0 4px ${Jo}`),a.appendChild(l)}t.appendChild(a)}}popup(t,e){const n=te("div","popup "+e,t);e==="ai"?n.style.left="62%":n.style.left="38%",this.popupLayer.appendChild(n),setTimeout(()=>n.remove(),950)}flash(t,e){this.flashEl.style.background=t,this.flashEl.style.transition="none",this.flashEl.style.opacity=String(e),this.flashEl.offsetWidth,this.flashEl.style.transition="opacity 0.5s ease-out",this.flashEl.style.opacity="0"}}function jt(i,t,e){const n=document.createElement(i);return t&&(n.className=t),e!==void 0&&(n.textContent=e),n}const _g=[{d:1,label:"EASY"},{d:2,label:"NORMAL"},{d:3,label:"HARD"}];class vg{constructor(t){V(this,"root");V(this,"current",null);this.root=t}clear(){this.current&&this.current.remove(),this.current=null}showStart(t,e){this.clear();const n=jt("div","screen");n.appendChild(jt("div","big","NEON TETRIS")),n.appendChild(jt("div","tag","혼자 즐기는 싱글플레이 또는 AI와 대전하는 VS 모드. 라인을 클리어하고 기록을 세우세요.")),n.appendChild(jt("div","mini-label","MODE"));const s=jt("button","btn primary mode-btn","SINGLE PLAY");s.addEventListener("click",t),n.appendChild(s);const r=jt("div","diff-row");for(const{d:a,label:o}of _g){const l=jt("button","diff-btn");l.dataset.d=String(a),l.appendChild(jt("span","n",String(a))),l.appendChild(jt("span","t",o)),l.addEventListener("click",()=>e(a)),r.appendChild(l)}n.appendChild(jt("div","mini-label","VS AI · 난이도 선택")),n.appendChild(r),n.appendChild(jt("div","controls-hint","← → 이동 · ↓ 소프트드롭 · SPACE 하드드롭 · ↑/X 회전 · Z 반대회전 · C 홀드 · P 일시정지")),this.root.appendChild(n),this.current=n}showPause(t,e){this.clear();const n=jt("div","screen");n.appendChild(jt("div","big","PAUSED"));const s=jt("button","btn primary","계속 (P)");s.addEventListener("click",t);const r=jt("button","btn ghost","메인으로");r.addEventListener("click",e),n.appendChild(s),n.appendChild(r),this.root.appendChild(n),this.current=n}showGameOver(t,e,n){this.clear();const s=jt("div","screen"),r=jt("div","big",t==="player"?"YOU WIN":"YOU LOSE");r.style.color=t==="player"?"var(--g)":"var(--player)",s.appendChild(r),s.appendChild(jt("div","tag",t==="player"?"AI를 탑아웃시켰습니다!":"아쉽게도 패배..."));const a=jt("button","btn primary","한 판 더 (R)");a.addEventListener("click",e);const o=jt("button","btn ghost","메인으로");o.addEventListener("click",n),s.appendChild(a),s.appendChild(o),this.root.appendChild(s),this.current=s}showSingleOver(t,e,n,s){this.clear();const r=jt("div","screen"),a=jt("div","big","GAME OVER");a.style.color="var(--coin)",r.appendChild(a),r.appendChild(jt("div","tag",`LINES ${t}  ·  SCORE ${e}`));const o=jt("button","btn primary","한 판 더 (R)");o.addEventListener("click",n);const l=jt("button","btn ghost","메인으로");l.addEventListener("click",s),r.appendChild(o),r.appendChild(l),this.root.appendChild(r),this.current=r}hide(){this.clear()}}function xg(i,t){for(let e=i.length-1;e>0;e--){const n=Math.floor(t()*(e+1));[i[e],i[n]]=[i[n],i[e]]}return i}class Mg{constructor(t=Math.random){V(this,"queue",[]);this.rng=t}refill(){const t=xg([...zr],this.rng);this.queue.push(...t)}next(){return this.queue.length===0&&this.refill(),this.queue.shift()}peek(t){for(;this.queue.length<t;)this.refill();return this.queue.slice(0,t)}}const Sg=5;class Es{constructor(t=Math.random){V(this,"board",new $m);V(this,"rng");V(this,"bag");V(this,"current",null);V(this,"hold",null);V(this,"canHold",!0);V(this,"nextQueue",[]);V(this,"level",1);V(this,"lines",0);V(this,"score",0);V(this,"combo",-1);V(this,"b2b",!1);V(this,"alive",!0);V(this,"gravityEnabled",!0);V(this,"inboundPending",0);V(this,"inboundTimer",0);V(this,"inboundHole",-1);V(this,"inboundTint",3817301);V(this,"dropTimer",0);V(this,"lockTimer",0);V(this,"resetCount",0);V(this,"dropScore",0);V(this,"lastActionWasRotate",!1);this.rng=t,this.bag=new Mg(t);for(let e=0;e<Sg;e++)this.nextQueue.push(this.bag.next());this.spawn()}get cells(){return this.current?Sn(this.current.kind,this.current.state):[]}get absCells(){if(!this.current)return[];const[t,e]=[this.current.x,this.current.y];return Sn(this.current.kind,this.current.state).map(([n,s])=>[t+n,e+s])}ghostY(){if(!this.current)return 0;let t=this.current.y;const e=Sn(this.current.kind,this.current.state);for(;!this.board.collides(e,this.current.x,t-1);)t--;return t}get ghostCells(){const t=this.current;if(!t)return[];const e=this.ghostY();return Sn(t.kind,t.state).map(([s,r])=>[t.x+s,e+r])}peekNext(t){for(;this.nextQueue.length<t;)this.nextQueue.push(this.bag.next());return this.nextQueue.slice(0,t)}spawnX(t){return Math.floor((Ht-Wm(t))/2)}spawnY(t){return he-Vm(t)}spawn(t){const e=t??this.nextQueue.shift();this.nextQueue.push(this.bag.next());const n=[];if(this.inboundTimer<=0&&this.inboundPending>0){const r=this.inboundPending;this.applyGarbage(r),this.inboundPending=0,r>0&&n.push({type:"garbage-applied",garbageIn:r})}const s={kind:e,state:0,x:this.spawnX(e),y:this.spawnY(e)};return this.current=s,this.canHold=!0,this.dropTimer=0,this.lockTimer=0,this.resetCount=0,this.dropScore=0,this.lastActionWasRotate=!1,this.board.collides(this.cells,s.x,s.y)?(this.alive=!1,n.push({type:"topout"}),n):(n.push({type:"spawn"}),n)}move(t){const e=this.current;if(!e||!this.alive)return[];const n=Sn(e.kind,e.state);return this.board.collides(n,e.x+t,e.y)?[]:(e.x+=t,this.lastActionWasRotate=!1,this.touch(),[{type:"move"}])}rotate(t){const e=this.current;if(!e||!this.alive||e.kind==="O")return[];const n=e.state,s=((n+t)%4+4)%4,r=Sn(e.kind,s);for(const[a,o]of Ym(e.kind,n,s)){const l=e.x+a,c=e.y+o;if(!this.board.collides(r,l,c))return e.state=s,e.x=l,e.y=c,this.lastActionWasRotate=!0,this.touch(),[{type:"rotate"}]}return[]}softDrop(){return!this.current||!this.alive?[]:this.tryStepDown()?(this.dropScore+=1,this.lastActionWasRotate=!1,[{type:"move"}]):[]}hardDrop(){const t=this.current;if(!t||!this.alive)return[];const e=this.ghostY(),n=t.y-e;return this.dropScore+=n*2,t.y=e,this.lock()}holdSwap(){if(!this.current||!this.alive||!this.canHold)return[];const t=this.current.kind,e=this.hold;if(this.hold=t,this.canHold=!1,e){if(this.current={kind:e,state:0,x:this.spawnX(e),y:this.spawnY(e)},this.dropTimer=0,this.lockTimer=0,this.resetCount=0,this.lastActionWasRotate=!1,this.board.collides(this.cells,this.current.x,this.current.y))return this.alive=!1,[{type:"hold"},{type:"topout"}]}else{const n=this.spawn();return this.canHold=!1,[{type:"hold"},...n]}return[{type:"hold"}]}tick(t){if(!this.alive)return[];const e=[],n=ig(this.level)*1e3;this.dropTimer+=t;let s=!1;if(this.gravityEnabled)for(;this.dropTimer>=n;)if(this.dropTimer-=n,this.tryStepDown())s=!0;else{this.dropTimer=0;break}else this.dropTimer=0;if(s&&(this.lockTimer=0,this.lastActionWasRotate=!1),this.isResting()){if(this.lockTimer+=t,this.lockTimer>=Jm){const r=this.lock();e.push(...r)}}else this.lockTimer=0,this.resetCount=0;return this.inboundPending>0&&(this.inboundTimer-=t),e}queueInbound(t,e){t<=0||(this.inboundPending===0&&(this.inboundHole=Math.floor(this.rng()*Ht)),e!==void 0&&(this.inboundTint=e),this.inboundPending+=t,this.inboundTimer<=0&&(this.inboundTimer=tg))}cancelInbound(t){const e=Math.min(t,this.inboundPending);return this.inboundPending-=e,this.inboundPending===0&&(this.inboundTimer=0,this.inboundHole=-1),e}tryStepDown(){if(!this.current)return!1;const t=this.cells;return this.board.collides(t,this.current.x,this.current.y-1)?!1:(this.current.y-=1,!0)}isResting(){return this.current?this.board.collides(this.cells,this.current.x,this.current.y-1):!1}touch(){if(this.current)if(this.isResting()){if(this.resetCount>=Qm){this.lock();return}this.lockTimer=0,this.resetCount++}else this.lockTimer=0,this.resetCount=0}detectTSpin(){if(!this.current||this.current.kind!=="T"||!this.lastActionWasRotate)return!1;const t=this.current.x+1,e=this.current.y+1;return[[t-1,e+1],[t+1,e+1],[t-1,e-1],[t+1,e-1]].filter(([r,a])=>r<0||r>=Ht||a<0?!0:this.board.getCell(r,a)!==null).length>=3}lock(){if(!this.current)return[];const t=[],e=this.current,n=this.detectTSpin(),s=this.cells.map(([c,h])=>[e.x+c,e.y+h]);this.board.place(this.cells,e.x,e.y,e.kind);const{rows:r,count:a}=this.board.clearLines(),o=lg(a,n);if(a>0){this.combo+=1;const c=cg(o),h=c&&this.b2b,p=rg(o,this.level,h),d=Math.max(0,this.combo)*50*this.level;this.score+=p+d+this.dropScore,this.lines+=a,this.level=Math.floor(this.lines/10)+1,this.b2b=c,t.push({type:"clear",clearType:o,linesCleared:a,clearedRows:r,cells:s,kind:e.kind,attack:og(o),tspin:n,b2b:h})}else this.combo=-1,this.score+=this.dropScore,t.push({type:"lock",cells:s,kind:e.kind});if(this.dropScore=0,!this.alive)return t;const l=this.spawn();return t.push(...l),t}applyGarbage(t){if(t<=0)return;const e=this.inboundHole>=0?this.inboundHole:Math.floor(this.rng()*Ht);if(this.inboundHole=-1,this.board.grid[he-1].some(s=>s!==null)){this.alive=!1;return}const n=()=>Array.from({length:Ht},(s,r)=>r===e?null:{kind:"G",tint:this.inboundTint});for(let s=0;s<t;s++)this.board.grid.pop(),this.board.grid.unshift(n())}get grid(){return this.board.grid}cellAt(t,e){return this.board.getCell(t,e)}}const yg={1:{interval:900,noise:.3,topk:3,lookahead:0,holeBias:.2},2:{interval:500,noise:.1,topk:1,lookahead:0,holeBias:0},3:{interval:250,noise:0,topk:1,lookahead:1,holeBias:0}},Ts={agg:-.51,lines:.76,holes:-.45,bump:-.18};function kl(i,t,e,n){for(const[s,r]of t){const a=e+s,o=n+r;if(a<0||a>=Ht||o<0)return!0;if(!(o>=he)&&i[o][a])return!0}return!1}function Hl(i,t,e){let n=he;for(;!kl(i,t,e,n-1);)n--;return n}function Eg(i){const t=new Array(Ht).fill(0);for(let e=0;e<Ht;e++)for(let n=he-1;n>=0;n--)if(i[n][e]){t[e]=n+1;break}return t}function Tg(i){const t=Eg(i),e=t.reduce((a,o)=>a+o,0);let n=0;for(let a=0;a<Ht;a++)for(let o=0;o<t[a];o++)i[o][a]||n++;let s=0;for(let a=0;a<Ht-1;a++)s+=Math.abs(t[a]-t[a+1]);let r=0;for(let a=0;a<he;a++)i[a].every(o=>o!==null)&&r++;return Ts.agg*e+Ts.lines*r+Ts.holes*n+Ts.bump*s}function bg(i){return i.map(t=>t.slice())}function Gl(i,t,e,n,s){const r=bg(i);for(const[a,o]of t){const l=e+a,c=n+o;c>=0&&c<he&&l>=0&&l<Ht&&(r[c][l]={kind:s})}return r.filter(a=>!a.every(o=>o!==null)).length===he?r:(()=>{const a=r.filter(o=>!o.every(l=>l!==null));for(;a.length<he;)a.push(new Array(Ht).fill(null));return a})()}function Ag(i,t){const e=[];for(let n=0;n<4;n=n+1){const s=Sn(t,n);for(let r=-2;r<=Ht;r++){const a=Hl(i,s,r);if(!s.some(([c,h])=>a+h>=0&&a+h<he)||kl(i,s,r,a))continue;const l=Gl(i,s,r,a,t);e.push({state:n,x:r,score:Tg(l)})}}return e.sort((n,s)=>s.score-n.score),e}function Ar(i,t,e,n){const s=Ag(i,t);if(s.length===0)return null;if(e.noise>0&&n()<e.noise){const r=s.slice(0,Math.max(1,e.topk));return r[Math.floor(n()*r.length)]}return s[0]}function wg(i,t,e,n,s,r){const a=Ar(i,t,s,r);if(s.lookahead>0&&n&&a){const o=Sn(t,a.state),l=Hl(i,o,a.x),c=Gl(i,o,a.x,l,t),h=Ar(c,n,{...s},r);h&&(a.score+=h.score*.5)}if(e){const o=Ar(i,e,s,r);if(o&&(!a||o.score>a.score+2))return{useHold:!0,target:o}}return a?{useHold:!1,target:a}:null}function Rg(i,t,e){const n=[];let s=(e.state-i+4)%4;if(s===3)n.push("rotCCW");else for(let a=0;a<s;a++)n.push("rotCW");const r=e.x-t;if(r>0)for(let a=0;a<r;a++)n.push("right");else for(let a=0;a<-r;a++)n.push("left");return n.push("drop"),n}class Cg{constructor(t,e="vs",n=Math.random){V(this,"player");V(this,"ai");V(this,"difficulty");V(this,"mode");V(this,"winner",null);V(this,"state","playing");V(this,"aiRng");V(this,"aiPlan",[]);V(this,"aiHoldPending",!1);V(this,"aiTimer",0);V(this,"handler",null);this.difficulty=t,this.mode=e,this.aiRng=n,this.player=new Es(n),this.ai=new Es(n),this.ai.gravityEnabled=!1}onEvents(t){this.handler=t}sink(t,e){if(e.length===0)return;const n=[];for(const s of e)this.route(t,s),n.push({who:t,event:s});this.handler&&this.handler(n)}playerMove(t){this.sink("player",this.player.move(t))}playerRotate(t){this.sink("player",this.player.rotate(t))}playerSoftDrop(){this.sink("player",this.player.softDrop())}playerHardDrop(){this.sink("player",this.player.hardDrop())}playerHold(){this.sink("player",this.player.holdSwap())}update(t){this.state==="playing"&&(this.sink("player",this.player.tick(t)),this.mode==="vs"&&(this.sink("ai",this.ai.tick(t)),this.driveAI(t)),this.checkWinner())}driveAI(t){if(!this.ai.alive||!this.ai.current)return;const e=yg[this.difficulty];if(this.aiTimer+=t,this.aiTimer<e.interval)return;if(this.aiTimer-=e.interval,this.aiHoldPending){this.sink("ai",this.ai.holdSwap()),this.aiHoldPending=!1,this.aiPlan=[];return}if(this.aiPlan.length===0){const s=this.ai.peekNext(1)[0],r=wg(this.ai.grid,this.ai.current.kind,this.ai.hold,s,e,this.aiRng);if(!r)return;if(r.useHold){this.aiHoldPending=!0;return}this.aiPlan=Rg(this.ai.current.state,this.ai.current.x,r.target)}const n=this.aiPlan.shift();n&&this.sink("ai",this.execAI(n))}execAI(t){switch(t){case"left":return this.ai.move(-1);case"right":return this.ai.move(1);case"rotCW":return this.ai.rotate(1);case"rotCCW":return this.ai.rotate(-1);case"drop":return this.ai.hardDrop()}}route(t,e){if(this.mode==="single"||e.type!=="clear"||!e.attack)return;const n=t==="player"?this.player:this.ai,s=t==="player"?this.ai:this.player,r=Math.max(0,n.combo),a=e.b2b?1:0;let o=e.attack+r+a;if(o=Math.min(o,eg),o<=0)return;const l=n.cancelInbound(o),c=o-l;if(c>0){const h=qe(Ze[e.kind??"I"]??5595258,.5);s.queueInbound(c,h)}}checkWinner(){if(this.state==="playing"){if(this.mode==="single"){this.player.alive||(this.winner=null,this.state="over");return}!this.player.alive&&this.ai.alive?(this.winner="ai",this.state="over"):this.ai.alive||(this.winner="player",this.state="over")}}rematch(){const t=new Es(this.aiRng);Object.assign(this.player,new Es(this.aiRng)),Object.assign(this.ai,t),this.ai.gravityEnabled=!1,this.winner=null,this.state="playing",this.aiPlan=[],this.aiHoldPending=!1,this.aiTimer=0}}const Pg=document.getElementById("game"),Lg=document.getElementById("hud"),Qr=document.getElementById("overlay"),Gi=new Km({canvas:Pg}),de=new mg,Si=new gg(Lg),fn=new vg(Qr),On=new jm(Gi);let Le=null,Ee=null,Vt=null,ta,ea=null,be=0,Gn="vs";const Vi=window.matchMedia("(any-pointer: coarse), (pointer: coarse)");function na(){const i=window.visualViewport,t=Math.round(i?.width??window.innerWidth),e=Math.round(i?.height??window.innerHeight);Gi.resize(t,e),Le&&(ia(Gn),Bs(Gn)),je()}window.addEventListener("resize",na);window.visualViewport?.addEventListener("resize",na);na();function Dg(){return Vi.matches||window.innerWidth<820||window.innerWidth/window.innerHeight<.75}function je(){ea?.setActive(be===1&&Vi.matches)}function Ig(i){return i==="player"?Vt.player:Vt.ai}function wr(i){return i==="player"?Le:Ee}function Ug(i){for(const{who:t,event:e}of i)Ng(t,e)}function Ng(i,t){switch(t.type){case"clear":{const e=Ig(i),n=wr(i),s=Ze[t.kind??"I"]??Fg(t.clearType),r=t.clearType==="tetris"||t.clearType?.startsWith("tspin");t.clearedRows&&t.clearedRows.length&&On.explode(n.originX,t.clearedRows,s,1+(t.linesCleared??0)*.6+(r?1:0));const a=Og(t,e.combo);a&&Si.popup(a,i),r?de.sfx("tetris"):de.sfx("line"),e.combo>=1&&de.sfx("combo"),Si.flash(r?"#bff":"#fff",r?.5:.18+(t.linesCleared??0)*.05),On.shake((t.linesCleared??1)*.5+(r?.4:0)),r&&On.punch(.7);break}case"garbage-applied":{const e=wr(i),n=t.garbageIn??1;On.garbageSlam(e.originX,n),e.startGarbageRise(n),de.sfx("garbage"),On.shake(.3*n);break}case"lock":{const e=wr(i);On.lockDust(e.originX,t.cells??[],Ze[t.kind??"I"]??16777215);break}}}function Fg(i){return i==="tetris"?Ze.I:i?.startsWith("tspin")?16723455:i==="triple"?6737151:16777215}function Og(i,t){const e=i.clearType;return e==="tetris"?"TETRIS!":e==="tspin-triple"?"T-SPIN TRIPLE!":e==="tspin-double"?"T-SPIN DOUBLE!":e==="tspin-single"||e==="tspin-mini"?"T-SPIN!":i.b2b?"B2B!":t>=1?`COMBO x${t+1}`:""}function Vl(i){if(i==="pause"){Wl();return}if(i==="restart"){be===3&&Vt&&kr();return}if(!(be!==1||!Vt))switch(i){case"left":Vt.playerMove(-1),de.sfx("move");break;case"right":Vt.playerMove(1),de.sfx("move");break;case"soft":Vt.playerSoftDrop();break;case"hard":Vt.playerHardDrop(),de.sfx("drop");break;case"cw":Vt.playerRotate(1),de.sfx("rotate");break;case"ccw":Vt.playerRotate(-1),de.sfx("rotate");break;case"hold":Vt.playerHold(),de.sfx("hold");break}}ta=new ug(Vl);ta.bind();ea=new pg({root:Qr,onCommand:Vl,onMenu:()=>{be===1&&Wl()}});ea.bind();const Bg=Vi;typeof Vi.addEventListener=="function"?Vi.addEventListener("change",je):Bg.addListener?.(je);function Wl(){be===1?(be=2,je(),fn.showPause(()=>{be=1,fn.hide(),je()},()=>Hr())):be===2&&(be=1,fn.hide(),je())}function ia(i){const t=(Ht-1)/2,e=Dg()?5.8:9;Le&&(i==="single"?(Le.group.position.x=0-t,Ee&&(Ee.group.visible=!1)):(Le.group.position.x=-e-t,Ee&&(Ee.group.position.x=e-t,Ee.group.visible=!0)))}function Ds(i,t){Gn=i,de.resume(),de.startBgm(),de.sfx("start"),Vt=new Cg(t,i),Vt.onEvents(Ug),Le?Le.engine=Vt.player:(Le=new $o(Vt.player,-9,15017249),Gi.add(Le.group)),Ee?Ee.engine=Vt.ai:(Ee=new $o(Vt.ai,9,4436039),Gi.add(Ee.group)),ia(i),Si.setMode(i),Si.setDifficulty(t),Bs(i),fn.hide(),be=1,je()}function kr(){Vt&&(Vt.rematch(),Le.engine=Vt.player,Ee.engine=Vt.ai,ia(Gn),Bs(Gn),fn.hide(),be=1,je())}function Hr(){be=0,je(),de.stopBgm(),fn.showStart(()=>Ds("single",1),i=>Ds("vs",i))}const He=document.createElement("div");He.className="muted-toggle";He.textContent="🔊 SOUND";He.addEventListener("click",()=>{const i=!de.isMuted();de.setMuted(i),He.textContent=i?"🔇 MUTED":"🔊 SOUND"});Qr.appendChild(He);function Bs(i){i==="single"?(He.style.left="auto",He.style.right="calc(50% + 150px)"):(He.style.right="auto",He.style.left="30px"),He.style.bottom="auto",He.style.top="calc(50% + 215px)"}Bs("vs");fn.showStart(()=>Ds("single",1),i=>Ds("vs",i));let tl=performance.now(),Rr=0;const Cr=1e3/120;function Xl(i){const t=Math.min(i-tl,100);if(tl=i,be===1&&Vt){for(ta.update(t),Rr+=t;Rr>=Cr;)Vt.update(Cr),Rr-=Cr;Vt.state==="over"&&(be=3,je(),de.sfx("over"),Gn==="single"?fn.showSingleOver(Vt.player.lines,Vt.player.score,kr,Hr):fn.showGameOver(Vt.winner??"ai",kr,Hr))}Vt&&Le&&(Le.update(t),Le.sync(),Si.update("player",Vt.player),Gn==="vs"&&Ee&&Ee.group.visible&&(Ee.update(t),Ee.sync(),Si.update("ai",Vt.ai))),On.update(t),Gi.render(t),requestAnimationFrame(Xl)}requestAnimationFrame(Xl);
//# sourceMappingURL=index-BVAnvW_k.js.map
