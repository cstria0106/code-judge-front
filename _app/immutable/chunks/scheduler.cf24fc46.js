var B=Object.defineProperty;var q=(t,e,n)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(q(t,typeof e!="symbol"?e+"":e,n),n);function R(){}const rt=t=>t;function F(t,e){for(const n in e)t[n]=e[n];return t}function ot(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function G(t){return t()}function at(){return Object.create(null)}function I(t){t.forEach(G)}function ut(t){return typeof t=="function"}function ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function _t(t){return Object.keys(t).length===0}function M(t,...e){if(t==null){for(const i of e)i(void 0);return R}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ht(t){let e;return M(t,n=>e=n)(),e}function dt(t,e,n){t.$$.on_destroy.push(M(e,n))}function mt(t,e,n,i){if(t){const s=S(t,e,n,i);return t[0](s)}}function S(t,e,n,i){return t[1]&&i?F(n.ctx.slice(),t[1](i(e))):n.ctx}function pt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],c=Math.max(e.dirty.length,s.length);for(let r=0;r<c;r+=1)o[r]=e.dirty[r]|s[r];return o}return e.dirty|s}return e.dirty}function yt(t,e,n,i,s,o){if(s){const c=S(e,n,i,o);t.p(c,s)}}function gt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function bt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function xt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function vt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}let p=!1;function wt(){p=!0}function Et(){p=!1}function z(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&l.push(u)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:z(1,s,O=>e[n[O]].claim_order,a))-1;i[l]=n[u]+1;const T=u+1;n[T]=l,s=Math.max(T,s)}const o=[],c=[];let r=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);r>=l;r--)c.push(e[r]);r--}for(;r>=0;r--)c.push(e[r]);o.reverse(),c.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<c.length;l++){for(;a<o.length&&c[l].claim_order>=o[a].claim_order;)a++;const u=a<o.length?o[a]:null;t.insertBefore(c[l],u)}}function J(t,e){t.appendChild(e)}function K(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Nt(t){const e=E("style");return e.textContent="/* empty */",Q(K(t),e),e.sheet}function Q(t,e){return J(t.head||t,e),e.sheet}function U(t,e){if(p){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function V(t,e,n){t.insertBefore(e,n||null)}function X(t,e,n){p&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function Tt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function E(t){return document.createElement(t)}function j(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function N(t){return document.createTextNode(t)}function kt(){return N(" ")}function At(){return N("")}function Lt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Y(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Z=["width","height"];function Mt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Z.indexOf(i)===-1?t[i]=e[i]:Y(t,i,e[i])}function St(t){return t.dataset.svelteH}function jt(t){return Array.from(t.childNodes)}function C(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function H(t,e,n,i,s=!1){C(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const r=t[c];if(e(r)){const l=n(r);return l===void 0?t.splice(c,1):t[c]=l,s||(t.claim_info.last_index=c),r}}for(let c=t.claim_info.last_index-1;c>=0;c--){const r=t[c];if(e(r)){const l=n(r);return l===void 0?t.splice(c,1):t[c]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,r}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function P(t,e,n,i){return H(t,s=>s.nodeName===e,s=>{const o=[];for(let c=0;c<s.attributes.length;c++){const r=s.attributes[c];n[r.name]||o.push(r.name)}o.forEach(c=>s.removeAttribute(c))},()=>i(e))}function Ct(t,e,n){return P(t,e,n,E)}function Ht(t,e,n){return P(t,e,n,j)}function $(t,e){return H(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>N(e),!0)}function Pt(t){return $(t," ")}function k(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Dt(t,e){const n=k(t,"HTML_TAG_START",0),i=k(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new A(e);C(t);const s=t.splice(n,i-n+1);x(s[0]),x(s[s.length-1]);const o=s.slice(1,s.length-1);for(const c of o)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new A(e,o)}function Ot(t,e){e=""+e,t.data!==e&&(t.data=e)}function Bt(t,e){t.value=e??""}function qt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Rt(t,e,n){for(let i=0;i<t.options.length;i+=1){const s=t.options[i];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Ft(t){const e=t.querySelector(":checked");return e&&e.__value}function Gt(t,e,n){t.classList.toggle(e,!!n)}function tt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}class et{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=j(n.nodeName):this.e=E(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)V(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(x)}}class A extends et{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)X(this.t,this.n[i],n)}}function It(t,e){return new t(e)}let m;function g(t){m=t}function y(){if(!m)throw new Error("Function called outside component initialization");return m}function zt(t){y().$$.on_mount.push(t)}function Wt(t){y().$$.after_update.push(t)}function Jt(t){y().$$.on_destroy.push(t)}function Kt(){const t=y();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=tt(e,n,{cancelable:i});return s.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function Qt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const d=[],L=[];let h=[];const v=[],D=Promise.resolve();let w=!1;function nt(){w||(w=!0,D.then(st))}function Ut(){return nt(),D}function it(t){h.push(t)}function Vt(t){v.push(t)}const b=new Set;let _=0;function st(){if(_!==0)return;const t=m;do{try{for(;_<d.length;){const e=d[_];_++,g(e),ct(e.$$)}}catch(e){throw d.length=0,_=0,e}for(g(null),d.length=0,_=0;L.length;)L.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];b.has(n)||(b.add(n),n())}h.length=0}while(d.length);for(;v.length;)v.pop()();w=!1,b.clear(),g(t)}function ct(t){if(t.fragment!==null){t.update(),I(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(it)}}function Xt(t){const e=[],n=[];h.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),h=e}export{M as $,yt as A,gt as B,pt as C,Lt as D,I as E,dt as F,ht as G,St as H,Tt as I,Bt as J,j as K,Ht as L,Rt as M,Kt as N,Qt as O,vt as P,Vt as Q,it as R,A as S,Dt as T,bt as U,Ft as V,ot as W,y as X,g as Y,st as Z,xt as _,kt as a,ut as a0,K as a1,Nt as a2,tt as a3,rt as a4,at as a5,_t as a6,Xt as a7,m as a8,G as a9,d as aa,nt as ab,wt as ac,Et as ad,Wt as b,Pt as c,x as d,At as e,E as f,Ct as g,jt as h,X as i,Y as j,qt as k,N as l,$ as m,Ot as n,zt as o,L as p,It as q,Jt as r,ft as s,Ut as t,R as u,F as v,U as w,Mt as x,Gt as y,mt as z};