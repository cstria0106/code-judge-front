import{s as G,o as J,f as K,a as L,e as U,g as Q,T as X,c as Z,j as z,i as v,d as g}from"../chunks/scheduler.ab7c2898.js";import{S as N,i as tt,b as P,d as T,m as k,a as f,t as h,e as x,g as et,c as rt}from"../chunks/index.956fb253.js";import{a as nt}from"../chunks/api.329286e0.js";import{U as ot}from"../chunks/UserOnly.ea8aead8.js";import{l as it}from"../chunks/index.fb0b8ccc.js";import"../chunks/moment.fbc5633a.js";import{N as st,S as ut}from"../chunks/SubmitTable.c43755e1.js";import{C as at}from"../chunks/Column.8bd8b6f7.js";var S=function(r,t){return S=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])},S(r,t)};function Y(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");S(r,t);function e(){this.constructor=r}r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function j(r){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&r[t],n=0;if(e)return e.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function b(r,t){var e=typeof Symbol=="function"&&r[Symbol.iterator];if(!e)return r;var n=e.call(r),o,i=[],s;try{for(;(t===void 0||t-- >0)&&!(o=n.next()).done;)i.push(o.value)}catch(u){s={error:u}}finally{try{o&&!o.done&&(e=n.return)&&e.call(n)}finally{if(s)throw s.error}}return i}function y(r,t,e){if(e||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return r.concat(i||Array.prototype.slice.call(t))}function l(r){return typeof r=="function"}function ct(r){var t=function(n){Error.call(n),n.stack=new Error().stack},e=r(t);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var _=ct(function(r){return function(e){r(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,o){return o+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function F(r,t){if(r){var e=r.indexOf(t);0<=e&&r.splice(e,1)}}var A=function(){function r(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return r.prototype.unsubscribe=function(){var t,e,n,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=j(s),a=u.next();!a.done;a=u.next()){var I=a.value;I.remove(this)}}catch(c){t={error:c}}finally{try{a&&!a.done&&(e=u.return)&&e.call(u)}finally{if(t)throw t.error}}else s.remove(this);var C=this.initialTeardown;if(l(C))try{C()}catch(c){i=c instanceof _?c.errors:[c]}var O=this._finalizers;if(O){this._finalizers=null;try{for(var d=j(O),p=d.next();!p.done;p=d.next()){var V=p.value;try{M(V)}catch(c){i=i??[],c instanceof _?i=y(y([],b(i)),b(c.errors)):i.push(c)}}}catch(c){n={error:c}}finally{try{p&&!p.done&&(o=d.return)&&o.call(d)}finally{if(n)throw n.error}}}if(i)throw new _(i)}},r.prototype.add=function(t){var e;if(t&&t!==this)if(this.closed)M(t);else{if(t instanceof r){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(t)}},r.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},r.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},r.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&F(e,t)},r.prototype.remove=function(t){var e=this._finalizers;e&&F(e,t),t instanceof r&&t._removeParent(this)},r.EMPTY=function(){var t=new r;return t.closed=!0,t}(),r}();A.EMPTY;function W(r){return r instanceof A||r&&"closed"in r&&l(r.remove)&&l(r.add)&&l(r.unsubscribe)}function M(r){l(r)?r():r.unsubscribe()}var q={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},w={setTimeout:function(r,t){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];var o=w.delegate;return o!=null&&o.setTimeout?o.setTimeout.apply(o,y([r,t],b(e))):setTimeout.apply(void 0,y([r,t],b(e)))},clearTimeout:function(r){var t=w.delegate;return((t==null?void 0:t.clearTimeout)||clearTimeout)(r)},delegate:void 0};function lt(r){w.setTimeout(function(){throw r})}function D(){}function ft(r){r()}var B=function(r){Y(t,r);function t(e){var n=r.call(this)||this;return n.isStopped=!1,e?(n.destination=e,W(e)&&e.add(n)):n.destination=mt,n}return t.create=function(e,n,o){return new E(e,n,o)},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(A),pt=Function.prototype.bind;function $(r,t){return pt.call(r,t)}var ht=function(){function r(t){this.partialObserver=t}return r.prototype.next=function(t){var e=this.partialObserver;if(e.next)try{e.next(t)}catch(n){m(n)}},r.prototype.error=function(t){var e=this.partialObserver;if(e.error)try{e.error(t)}catch(n){m(n)}else m(t)},r.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(e){m(e)}},r}(),E=function(r){Y(t,r);function t(e,n,o){var i=r.call(this)||this,s;if(l(e)||!e)s={next:e??void 0,error:n??void 0,complete:o??void 0};else{var u;i&&q.useDeprecatedNextContext?(u=Object.create(e),u.unsubscribe=function(){return i.unsubscribe()},s={next:e.next&&$(e.next,u),error:e.error&&$(e.error,u),complete:e.complete&&$(e.complete,u)}):s=e}return i.destination=new ht(s),i}return t}(B);function m(r){lt(r)}function dt(r){throw r}var mt={closed:!0,next:D,error:dt,complete:D},bt=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function yt(r){return r}function vt(r){return r.length===0?yt:r.length===1?r[0]:function(e){return r.reduce(function(n,o){return o(n)},e)}}var gt=function(){function r(t){t&&(this._subscribe=t)}return r.prototype.lift=function(t){var e=new r;return e.source=this,e.operator=t,e},r.prototype.subscribe=function(t,e,n){var o=this,i=$t(t)?t:new E(t,e,n);return ft(function(){var s=o,u=s.operator,a=s.source;i.add(u?u.call(i,a):a?o._subscribe(i):o._trySubscribe(i))}),i},r.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},r.prototype.forEach=function(t,e){var n=this;return e=H(e),new e(function(o,i){var s=new E({next:function(u){try{t(u)}catch(a){i(a),s.unsubscribe()}},error:i,complete:o});n.subscribe(s)})},r.prototype._subscribe=function(t){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(t)},r.prototype[bt]=function(){return this},r.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return vt(t)(this)},r.prototype.toPromise=function(t){var e=this;return t=H(t),new t(function(n,o){var i;e.subscribe(function(s){return i=s},function(s){return o(s)},function(){return n(i)})})},r.create=function(t){return new r(t)},r}();function H(r){var t;return(t=r??q.Promise)!==null&&t!==void 0?t:Promise}function _t(r){return r&&l(r.next)&&l(r.error)&&l(r.complete)}function $t(r){return r&&r instanceof B||_t(r)&&W(r)}async function St(r){var e;const t=it(r.host,{auth:(e=r.authorization)!=null&&e.token?{token:r.authorization.token}:void 0,transports:["websocket"],withCredentials:!0,autoConnect:!0});return await new Promise(n=>t.on("connect",n)),{send:n=>t.emit(n.event,n.data),receive:()=>new gt(n=>{t.onAny((o,i)=>{n.next({event:o,data:i})}),t.on("disconnect",()=>{n.complete()})})}}function R(r){let t,e;return t=new ut({props:{submits:r[0]}}),{c(){P(t.$$.fragment)},l(n){T(t.$$.fragment,n)},m(n,o){k(t,n,o),e=!0},p(n,o){const i={};o&1&&(i.submits=n[0]),t.$set(i)},i(n){e||(f(t.$$.fragment,n),e=!0)},o(n){h(t.$$.fragment,n),e=!1},d(n){x(t,n)}}}function wt(r){let t,e="Submits",n,o,i,s=r[0]!==void 0&&R(r);return{c(){t=K("h4"),t.textContent=e,n=L(),s&&s.c(),o=U(),this.h()},l(u){t=Q(u,"H4",{class:!0,"data-svelte-h":!0}),X(t)!=="svelte-1g63hne"&&(t.textContent=e),n=Z(u),s&&s.l(u),o=U(),this.h()},h(){z(t,"class","mb-4")},m(u,a){v(u,t,a),v(u,n,a),s&&s.m(u,a),v(u,o,a),i=!0},p(u,a){u[0]!==void 0?s?(s.p(u,a),a&1&&f(s,1)):(s=R(u),s.c(),f(s,1),s.m(o.parentNode,o)):s&&(et(),h(s,1,1,()=>{s=null}),rt())},i(u){i||(f(s),i=!0)},o(u){h(s),i=!1},d(u){u&&(g(t),g(n),g(o)),s&&s.d(u)}}}function Et(r){let t,e;return t=new at({props:{$$slots:{default:[wt]},$$scope:{ctx:r}}}),{c(){P(t.$$.fragment)},l(n){T(t.$$.fragment,n)},m(n,o){k(t,n,o),e=!0},p(n,o){const i={};o&3&&(i.$$scope={dirty:o,ctx:n}),t.$set(i)},i(n){e||(f(t.$$.fragment,n),e=!0)},o(n){h(t.$$.fragment,n),e=!1},d(n){x(t,n)}}}function Pt(r){let t,e;return t=new ot({props:{$$slots:{default:[Et]},$$scope:{ctx:r}}}),{c(){P(t.$$.fragment)},l(n){T(t.$$.fragment,n)},m(n,o){k(t,n,o),e=!0},p(n,[o]){const i={};o&3&&(i.$$scope={dirty:o,ctx:n}),t.$set(i)},i(n){e||(f(t.$$.fragment,n),e=!0)},o(n){h(t.$$.fragment,n),e=!1},d(n){x(t,n)}}}let Tt=0;function kt(r,t,e){J(async()=>{const o=await St(nt());o.receive().subscribe(s=>{st(s).with({event:"get/submit/initial"},u=>{e(0,n=u.data.submits)}).with({event:"get/submit/update"},u=>{e(0,n=n==null?void 0:n.map(a=>a.id!==u.data.submit.id?a:{...a,status:u.data.submit.status}))}).otherwise(()=>{})}),o.send({event:"get/submit",data:{skip:Tt}})});let n;return[n]}class Dt extends N{constructor(t){super(),tt(this,t,kt,Pt,G,{})}}export{Dt as component};
