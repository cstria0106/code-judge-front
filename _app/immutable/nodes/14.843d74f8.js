import{s as w,o as k,a as h,e as g,c as v,i as _,d as b,l as x,m as S}from"../chunks/scheduler.cf24fc46.js";import{S as B,i as C,b as u,d as l,m as $,a as c,t as m,e as p,g as N,c as T}from"../chunks/index.1a695a89.js";import{a as U}from"../chunks/api.4c769691.js";import{B as W}from"../chunks/BoxTitle.39ecf30e.js";import{U as q}from"../chunks/UserOnly.bba025d3.js";import{B as y}from"../chunks/Box.dae89304.js";import{c as M,N as O,S as P}from"../chunks/SubmitTable.2146e5a5.js";import"../chunks/moment.fbc5633a.js";function j(i){let t;return{c(){t=x("Submits")},l(n){t=S(n,"Submits")},m(n,e){_(n,t,e)},d(n){n&&b(t)}}}function d(i){let t,n;return t=new P({props:{submits:i[0]}}),{c(){u(t.$$.fragment)},l(e){l(t.$$.fragment,e)},m(e,r){$(t,e,r),n=!0},p(e,r){const s={};r&1&&(s.submits=e[0]),t.$set(s)},i(e){n||(c(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function z(i){let t,n,e,r;t=new W({props:{$$slots:{default:[j]},$$scope:{ctx:i}}});let s=i[0]!==void 0&&d(i);return{c(){u(t.$$.fragment),n=h(),s&&s.c(),e=g()},l(o){l(t.$$.fragment,o),n=v(o),s&&s.l(o),e=g()},m(o,a){$(t,o,a),_(o,n,a),s&&s.m(o,a),_(o,e,a),r=!0},p(o,a){const f={};a&2&&(f.$$scope={dirty:a,ctx:o}),t.$set(f),o[0]!==void 0?s?(s.p(o,a),a&1&&c(s,1)):(s=d(o),s.c(),c(s,1),s.m(e.parentNode,e)):s&&(N(),m(s,1,1,()=>{s=null}),T())},i(o){r||(c(t.$$.fragment,o),c(s),r=!0)},o(o){m(t.$$.fragment,o),m(s),r=!1},d(o){o&&(b(n),b(e)),p(t,o),s&&s.d(o)}}}function A(i){let t,n;return t=new y({props:{$$slots:{default:[z]},$$scope:{ctx:i}}}),{c(){u(t.$$.fragment)},l(e){l(t.$$.fragment,e)},m(e,r){$(t,e,r),n=!0},p(e,r){const s={};r&3&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){n||(c(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function D(i){let t,n;return t=new q({props:{$$slots:{default:[A]},$$scope:{ctx:i}}}),{c(){u(t.$$.fragment)},l(e){l(t.$$.fragment,e)},m(e,r){$(t,e,r),n=!0},p(e,[r]){const s={};r&3&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){n||(c(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}let E=0;function F(i,t,n){k(async()=>{const r=await M(U());r.receive().subscribe(o=>{O(o).with({event:"get/submit/initial"},a=>{n(0,e=a.data.submits)}).with({event:"get/submit/update"},a=>{n(0,e=e==null?void 0:e.map(f=>f.id!==a.data.submit.id?f:{...f,status:a.data.submit.status}))}).otherwise(()=>{})}),r.send({event:"get/submit",data:{skip:E}})});let e;return[e]}class V extends B{constructor(t){super(),C(this,t,F,D,w,{})}}export{V as component};