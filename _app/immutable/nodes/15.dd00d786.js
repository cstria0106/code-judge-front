import{s as F,F as H,o as G,a as E,e as M,c as I,i as b,d,l as W,m as j,p as J,f as h,g as C,h as V,H as N,j as O,w as $,D as K,Q as X,n as Y}from"../chunks/scheduler.cf24fc46.js";import{S as Z,i as ee,b as R,d as S,m as D,a as g,t as k,e as P,g as te,c as se,f as ae}from"../chunks/index.1a695a89.js";import{p as oe}from"../chunks/stores.d316c29d.js";import{a as ne,g as ie}from"../chunks/api.4c769691.js";import{B as re}from"../chunks/BoxTitle.39ecf30e.js";import{U as le}from"../chunks/UserOnly.bba025d3.js";import{B as ue}from"../chunks/Box.dae89304.js";import{c as fe,N as ce,S as me}from"../chunks/SubmitTable.2146e5a5.js";import{Q as de}from"../chunks/CodeEditor.6af6e19d.js";import{a as pe}from"../chunks/index.1282ffed.js";import{g as _e}from"../chunks/navigation.00a6515e.js";import{b as $e}from"../chunks/paths.bd20d20d.js";function be(l){let e;return{c(){e=W("Submits")},l(a){e=j(a,"Submits")},m(a,t){b(a,e,t)},d(a){a&&d(e)}}}function z(l){let e,a,t,i,s="Code",o,r,c,u,p,_,v="Submit",T,w,B,x,U;e=new me({props:{submits:[l[0]]}});function A(n){l[3](n)}let q={language:l[0].language};l[1]!==void 0&&(q.code=l[1]),r=new de({props:q}),J.push(()=>ae(r,"code",A));let m=l[0].status.type==="COMPLETE"&&l[0].status.result.type==="COMPILE_ERROR"&&Q(l);return{c(){R(e.$$.fragment),a=E(),t=h("div"),i=h("div"),i.textContent=s,o=E(),R(r.$$.fragment),u=E(),p=h("div"),_=h("button"),_.textContent=v,T=E(),m&&m.c(),w=M(),this.h()},l(n){S(e.$$.fragment,n),a=I(n),t=C(n,"DIV",{class:!0});var f=V(t);i=C(f,"DIV",{"data-svelte-h":!0}),N(i)!=="svelte-e2dulz"&&(i.textContent=s),o=I(f),S(r.$$.fragment,f),u=I(f),p=C(f,"DIV",{class:!0});var y=V(p);_=C(y,"BUTTON",{class:!0,"data-svelte-h":!0}),N(_)!=="svelte-1ayc1zh"&&(_.textContent=v),y.forEach(d),f.forEach(d),T=I(n),m&&m.l(n),w=M(),this.h()},h(){O(_,"class","inline-block w-auto"),O(p,"class","mt-4 text-right"),O(t,"class","mt-4")},m(n,f){D(e,n,f),b(n,a,f),b(n,t,f),$(t,i),$(t,o),D(r,t,null),$(t,u),$(t,p),$(p,_),b(n,T,f),m&&m.m(n,f),b(n,w,f),B=!0,x||(U=K(_,"click",l[2]),x=!0)},p(n,f){const y={};f&1&&(y.submits=[n[0]]),e.$set(y);const L={};f&1&&(L.language=n[0].language),!c&&f&2&&(c=!0,L.code=n[1],X(()=>c=!1)),r.$set(L),n[0].status.type==="COMPLETE"&&n[0].status.result.type==="COMPILE_ERROR"?m?m.p(n,f):(m=Q(n),m.c(),m.m(w.parentNode,w)):m&&(m.d(1),m=null)},i(n){B||(g(e.$$.fragment,n),g(r.$$.fragment,n),B=!0)},o(n){k(e.$$.fragment,n),k(r.$$.fragment,n),B=!1},d(n){n&&(d(a),d(t),d(T),d(w)),P(e,n),P(r),m&&m.d(n),x=!1,U()}}}function Q(l){let e,a,t="Compiler message",i,s,o=l[0].status.result.message+"",r;return{c(){e=h("div"),a=h("div"),a.textContent=t,i=E(),s=h("pre"),r=W(o),this.h()},l(c){e=C(c,"DIV",{class:!0});var u=V(e);a=C(u,"DIV",{class:!0,"data-svelte-h":!0}),N(a)!=="svelte-1qasbyt"&&(a.textContent=t),i=I(u),s=C(u,"PRE",{class:!0});var p=V(s);r=j(p,o),p.forEach(d),u.forEach(d),this.h()},h(){O(a,"class","mb-2"),O(s,"class","text-xs border border-gray-200 rounded-sm p-4 overflow-scroll"),O(e,"class","mt-4")},m(c,u){b(c,e,u),$(e,a),$(e,i),$(e,s),$(s,r)},p(c,u){u&1&&o!==(o=c[0].status.result.message+"")&&Y(r,o)},d(c){c&&d(e)}}}function ge(l){let e,a,t,i;e=new re({props:{$$slots:{default:[be]},$$scope:{ctx:l}}});let s=l[0]!==void 0&&z(l);return{c(){R(e.$$.fragment),a=E(),s&&s.c(),t=M()},l(o){S(e.$$.fragment,o),a=I(o),s&&s.l(o),t=M()},m(o,r){D(e,o,r),b(o,a,r),s&&s.m(o,r),b(o,t,r),i=!0},p(o,r){const c={};r&64&&(c.$$scope={dirty:r,ctx:o}),e.$set(c),o[0]!==void 0?s?(s.p(o,r),r&1&&g(s,1)):(s=z(o),s.c(),g(s,1),s.m(t.parentNode,t)):s&&(te(),k(s,1,1,()=>{s=null}),se())},i(o){i||(g(e.$$.fragment,o),g(s),i=!0)},o(o){k(e.$$.fragment,o),k(s),i=!1},d(o){o&&(d(a),d(t)),P(e,o),s&&s.d(o)}}}function ve(l){let e,a;return e=new ue({props:{$$slots:{default:[ge]},$$scope:{ctx:l}}}),{c(){R(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,i){D(e,t,i),a=!0},p(t,i){const s={};i&67&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){a||(g(e.$$.fragment,t),a=!0)},o(t){k(e.$$.fragment,t),a=!1},d(t){P(e,t)}}}function he(l){let e,a;return e=new le({props:{$$slots:{default:[ve]},$$scope:{ctx:l}}}),{c(){R(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,i){D(e,t,i),a=!0},p(t,[i]){const s={};i&67&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){a||(g(e.$$.fragment,t),a=!0)},o(t){k(e.$$.fragment,t),a=!1},d(t){P(e,t)}}}function Ce(l,e,a){let t;H(l,oe,u=>a(4,t=u));const i=t.params.id;let s,o="";async function r(){s&&(await pe.functional.submit.create(ie(),{language:s.language,code:o,problemId:s.problem.id}),_e(`${$e}/submits`))}G(async()=>{const u=await fe(ne());u.receive().subscribe(_=>{ce(_).with({event:"get/submit/detail"},v=>{a(0,s=v.data.submit),a(1,o=v.data.submit.code)}).with({event:"get/submit/update"},v=>{s&&a(0,s={...s,status:v.data.submit.status})}).otherwise(()=>{})}),u.send({event:"get/submit",data:{id:i}})});function c(u){o=u,a(1,o)}return[s,o,r,c]}class Me extends Z{constructor(e){super(),ee(this,e,Ce,he,F,{})}}export{Me as component};