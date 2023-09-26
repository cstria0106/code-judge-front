import{s as me,a as I,c as D,i as g,d as $,e as W,f as N,l as V,g as A,h as y,H as R,m as F,j as O,w as x,D as K,n as fe,E as ue,u as se}from"../chunks/scheduler.cf24fc46.js";import{S as ce,i as pe,b as w,d as C,m as P,a as p,t as d,e as E,g as ne,c as le}from"../chunks/index.1a695a89.js";import{g as J}from"../chunks/navigation.1419d084.js";import{B as X}from"../chunks/BoxTitle.39ecf30e.js";import{U as _e}from"../chunks/UserOnly.743703f2.js";import{B as Y}from"../chunks/Box.dae89304.js";import{F as de}from"../chunks/FetchUser.54e7b1fb.js";import{F as L,a as be,b as ge,c as ve,d as he,e as ke}from"../chunks/index.280987f5.js";import{a as xe}from"../chunks/store.8297d846.js";import{r as we}from"../chunks/app.68cad029.js";import{a as Ce}from"../chunks/index.2da52b7b.js";import{g as Pe}from"../chunks/api.0a1d2d44.js";import{P as Ee}from"../chunks/Problems.e2d300c9.js";import{O as Ne}from"../chunks/Orientation.5c54c58d.js";import{b as Q}from"../chunks/paths.3dd296e0.js";function ie(a){let t,l;return t=new Ne({props:{vertical:!0,$$slots:{default:[Fe]},$$scope:{ctx:a}}}),{c(){w(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,r){P(t,e,r),l=!0},p(e,r){const n={};r&384&&(n.$$scope={dirty:r,ctx:e}),t.$set(n)},i(e){l||(p(t.$$.fragment,e),l=!0)},o(e){d(t.$$.fragment,e),l=!1},d(e){E(t,e)}}}function Ae(a){let t,l,e;return t=new L({props:{icon:ve}}),{c(){w(t.$$.fragment),l=V(" User Information")},l(r){C(t.$$.fragment,r),l=F(r," User Information")},m(r,n){P(t,r,n),g(r,l,n),e=!0},p:se,i(r){e||(p(t.$$.fragment,r),e=!0)},o(r){d(t.$$.fragment,r),e=!1},d(r){r&&$(l),E(t,r)}}}function Te(a){let t,l,e,r,n="ID",f,b,_=a[7].id+"",s,v,i,o="Name",m,U,T=a[7].name+"",M,z,c,h,S,j,B,q,Z,H,ee,ae;return t=new X({props:{$$slots:{default:[Ae]},$$scope:{ctx:a}}}),h=new L({props:{icon:be}}),q=new L({props:{icon:ge}}),{c(){w(t.$$.fragment),l=I(),e=N("div"),r=N("div"),r.textContent=n,f=I(),b=N("div"),s=V(_),v=I(),i=N("div"),i.textContent=o,m=I(),U=N("div"),M=V(T),z=I(),c=N("button"),w(h.$$.fragment),S=V(`
          Edit`),j=I(),B=N("button"),w(q.$$.fragment),Z=V(`
          Sign Out`),this.h()},l(u){C(t.$$.fragment,u),l=D(u),e=A(u,"DIV",{class:!0});var k=y(e);r=A(k,"DIV",{"data-svelte-h":!0}),R(r)!=="svelte-1mtr7hb"&&(r.textContent=n),f=D(k),b=A(k,"DIV",{class:!0});var G=y(b);s=F(G,_),G.forEach($),v=D(k),i=A(k,"DIV",{"data-svelte-h":!0}),R(i)!=="svelte-ylpshh"&&(i.textContent=o),m=D(k),U=A(k,"DIV",{class:!0});var oe=y(U);M=F(oe,T),oe.forEach($),k.forEach($),z=D(u),c=A(u,"BUTTON",{class:!0});var te=y(c);C(h.$$.fragment,te),S=F(te,`
          Edit`),te.forEach($),j=D(u),B=A(u,"BUTTON",{class:!0});var re=y(B);C(q.$$.fragment,re),Z=F(re,`
          Sign Out`),re.forEach($),this.h()},h(){O(b,"class","text"),O(U,"class","text"),O(e,"class","grid grid-cols-[1fr_auto] [&>.text]:text-right gap-y-2"),O(c,"class","mt-4"),O(B,"class","mt-2")},m(u,k){P(t,u,k),g(u,l,k),g(u,e,k),x(e,r),x(e,f),x(e,b),x(b,s),x(e,v),x(e,i),x(e,m),x(e,U),x(U,M),g(u,z,k),g(u,c,k),P(h,c,null),x(c,S),g(u,j,k),g(u,B,k),P(q,B,null),x(B,Z),H=!0,ee||(ae=[K(c,"click",a[2]),K(B,"click",a[1])],ee=!0)},p(u,k){const G={};k&256&&(G.$$scope={dirty:k,ctx:u}),t.$set(G),(!H||k&128)&&_!==(_=u[7].id+"")&&fe(s,_),(!H||k&128)&&T!==(T=u[7].name+"")&&fe(M,T)},i(u){H||(p(t.$$.fragment,u),p(h.$$.fragment,u),p(q.$$.fragment,u),H=!0)},o(u){d(t.$$.fragment,u),d(h.$$.fragment,u),d(q.$$.fragment,u),H=!1},d(u){u&&($(l),$(e),$(z),$(c),$(j),$(B)),E(t,u),E(h),E(q),ee=!1,ue(ae)}}}function Ie(a){let t,l;return t=new Y({props:{$$slots:{default:[Be]},$$scope:{ctx:a}}}),{c(){w(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,r){P(t,e,r),l=!0},p(e,r){const n={};r&256&&(n.$$scope={dirty:r,ctx:e}),t.$set(n)},i(e){l||(p(t.$$.fragment,e),l=!0)},o(e){d(t.$$.fragment,e),l=!1},d(e){E(t,e)}}}function De(a){let t,l;return t=new Y({props:{$$slots:{default:[ye]},$$scope:{ctx:a}}}),{c(){w(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,r){P(t,e,r),l=!0},p(e,r){const n={};r&256&&(n.$$scope={dirty:r,ctx:e}),t.$set(n)},i(e){l||(p(t.$$.fragment,e),l=!0)},o(e){d(t.$$.fragment,e),l=!1},d(e){E(t,e)}}}function Ue(a){let t,l,e;return t=new L({props:{icon:he}}),{c(){w(t.$$.fragment),l=V(" Active Problems")},l(r){C(t.$$.fragment,r),l=F(r," Active Problems")},m(r,n){P(t,r,n),g(r,l,n),e=!0},p:se,i(r){e||(p(t.$$.fragment,r),e=!0)},o(r){d(t.$$.fragment,r),e=!1},d(r){r&&$(l),E(t,r)}}}function Be(a){let t,l,e,r,n,f,b="See all past problems",_;return t=new X({props:{$$slots:{default:[Ue]},$$scope:{ctx:a}}}),r=new Ee({props:{pages:[a[0]]}}),r.$on("clickProblem",a[3]),{c(){w(t.$$.fragment),l=I(),e=N("div"),w(r.$$.fragment),n=I(),f=N("a"),f.textContent=b,this.h()},l(s){C(t.$$.fragment,s),l=D(s),e=A(s,"DIV",{class:!0});var v=y(e);C(r.$$.fragment,v),v.forEach($),n=D(s),f=A(s,"A",{class:!0,href:!0,"data-svelte-h":!0}),R(f)!=="svelte-1azfhgn"&&(f.textContent=b),this.h()},h(){O(e,"class","h-[400px] overflow-y-scroll border border-gray-300 p-4 rounded-md"),O(f,"class","block text-right mt-2 text-blue-600"),O(f,"href",Q+"/problems")},m(s,v){P(t,s,v),g(s,l,v),g(s,e,v),P(r,e,null),g(s,n,v),g(s,f,v),_=!0},p(s,v){const i={};v&256&&(i.$$scope={dirty:v,ctx:s}),t.$set(i)},i(s){_||(p(t.$$.fragment,s),p(r.$$.fragment,s),_=!0)},o(s){d(t.$$.fragment,s),d(r.$$.fragment,s),_=!1},d(s){s&&($(l),$(e),$(n),$(f)),E(t,s),E(r)}}}function Oe(a){let t,l,e;return t=new L({props:{icon:ke}}),{c(){w(t.$$.fragment),l=V(" Alert")},l(r){C(t.$$.fragment,r),l=F(r," Alert")},m(r,n){P(t,r,n),g(r,l,n),e=!0},p:se,i(r){e||(p(t.$$.fragment,r),e=!0)},o(r){d(t.$$.fragment,r),e=!1},d(r){r&&$(l),E(t,r)}}}function ye(a){let t,l,e;return t=new X({props:{$$slots:{default:[Oe]},$$scope:{ctx:a}}}),{c(){w(t.$$.fragment),l=V(`
          Please change your password before use!`)},l(r){C(t.$$.fragment,r),l=F(r,`
          Please change your password before use!`)},m(r,n){P(t,r,n),g(r,l,n),e=!0},p(r,n){const f={};n&256&&(f.$$scope={dirty:n,ctx:r}),t.$set(f)},i(r){e||(p(t.$$.fragment,r),e=!0)},o(r){d(t.$$.fragment,r),e=!1},d(r){r&&$(l),E(t,r)}}}function $e(a){let t,l;return t=new Y({props:{$$slots:{default:[Ve]},$$scope:{ctx:a}}}),{c(){w(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,r){P(t,e,r),l=!0},i(e){l||(p(t.$$.fragment,e),l=!0)},o(e){d(t.$$.fragment,e),l=!1},d(e){E(t,e)}}}function Se(a){let t;return{c(){t=V("Admin Panel")},l(l){t=F(l,"Admin Panel")},m(l,e){g(l,t,e)},d(l){l&&$(t)}}}function Ve(a){let t,l,e,r,n,f="Manage problems",b,_,s,v="Manage users",i,o,m,U="Manage submits",T,M,z;return t=new X({props:{$$slots:{default:[Se]},$$scope:{ctx:a}}}),{c(){w(t.$$.fragment),l=I(),e=N("div"),r=N("span"),n=N("button"),n.textContent=f,b=I(),_=N("span"),s=N("button"),s.textContent=v,i=I(),o=N("span"),m=N("button"),m.textContent=U,this.h()},l(c){C(t.$$.fragment,c),l=D(c),e=A(c,"DIV",{class:!0});var h=y(e);r=A(h,"SPAN",{});var S=y(r);n=A(S,"BUTTON",{type:!0,"data-svelte-h":!0}),R(n)!=="svelte-9zf7ra"&&(n.textContent=f),S.forEach($),b=D(h),_=A(h,"SPAN",{});var j=y(_);s=A(j,"BUTTON",{type:!0,"data-svelte-h":!0}),R(s)!=="svelte-15b3viu"&&(s.textContent=v),j.forEach($),i=D(h),o=A(h,"SPAN",{});var B=y(o);m=A(B,"BUTTON",{type:!0,"data-svelte-h":!0}),R(m)!=="svelte-ke97n2"&&(m.textContent=U),B.forEach($),h.forEach($),this.h()},h(){O(n,"type","button"),O(s,"type","button"),O(m,"type","button"),O(e,"class","flex flex-row flex-wrap gap-2")},m(c,h){P(t,c,h),g(c,l,h),g(c,e,h),x(e,r),x(r,n),x(e,b),x(e,_),x(_,s),x(e,i),x(e,o),x(o,m),T=!0,M||(z=[K(n,"click",a[4]),K(s,"click",a[5]),K(m,"click",a[6])],M=!0)},p(c,h){const S={};h&256&&(S.$$scope={dirty:h,ctx:c}),t.$set(S)},i(c){T||(p(t.$$.fragment,c),T=!0)},o(c){d(t.$$.fragment,c),T=!1},d(c){c&&($(l),$(e)),E(t,c),M=!1,ue(z)}}}function Fe(a){let t,l,e,r,n,f,b;t=new Y({props:{class:"text-sm",$$slots:{default:[Te]},$$scope:{ctx:a}}});const _=[De,Ie],s=[];function v(o,m){return o[7].shouldChangePassword?0:1}e=v(a),r=s[e]=_[e](a);let i=a[7].role==="ADMIN"&&$e(a);return{c(){w(t.$$.fragment),l=I(),r.c(),n=I(),i&&i.c(),f=W()},l(o){C(t.$$.fragment,o),l=D(o),r.l(o),n=D(o),i&&i.l(o),f=W()},m(o,m){P(t,o,m),g(o,l,m),s[e].m(o,m),g(o,n,m),i&&i.m(o,m),g(o,f,m),b=!0},p(o,m){const U={};m&384&&(U.$$scope={dirty:m,ctx:o}),t.$set(U);let T=e;e=v(o),e===T?s[e].p(o,m):(ne(),d(s[T],1,1,()=>{s[T]=null}),le(),r=s[e],r?r.p(o,m):(r=s[e]=_[e](o),r.c()),p(r,1),r.m(n.parentNode,n)),o[7].role==="ADMIN"?i?m&128&&p(i,1):(i=$e(o),i.c(),p(i,1),i.m(f.parentNode,f)):i&&(ne(),d(i,1,1,()=>{i=null}),le())},i(o){b||(p(t.$$.fragment,o),p(r),p(i),b=!0)},o(o){d(t.$$.fragment,o),d(r),d(i),b=!1},d(o){o&&($(l),$(n),$(f)),E(t,o),s[e].d(o),i&&i.d(o)}}}function Me(a){let t,l,e=a[7]!==null&&ie(a);return{c(){e&&e.c(),t=W()},l(r){e&&e.l(r),t=W()},m(r,n){e&&e.m(r,n),g(r,t,n),l=!0},p(r,n){r[7]!==null?e?(e.p(r,n),n&128&&p(e,1)):(e=ie(r),e.c(),p(e,1),e.m(t.parentNode,t)):e&&(ne(),d(e,1,1,()=>{e=null}),le())},i(r){l||(p(e),l=!0)},o(r){d(e),l=!1},d(r){r&&$(t),e&&e.d(r)}}}function ze(a){let t,l,e,r;return t=new de({props:{force:!0}}),e=new _e({props:{$$slots:{default:[Me,({user:n})=>({7:n}),({user:n})=>n?128:0]},$$scope:{ctx:a}}}),{c(){w(t.$$.fragment),l=I(),w(e.$$.fragment)},l(n){C(t.$$.fragment,n),l=D(n),C(e.$$.fragment,n)},m(n,f){P(t,n,f),g(n,l,f),P(e,n,f),r=!0},p(n,[f]){const b={};f&384&&(b.$$scope={dirty:f,ctx:n}),e.$set(b)},i(n){r||(p(t.$$.fragment,n),p(e.$$.fragment,n),r=!0)},o(n){d(t.$$.fragment,n),d(e.$$.fragment,n),r=!1},d(n){n&&$(l),E(t,n),E(e,n)}}}function je(a){const t=Ce.functional.problem.list(Pe(),{}).then(_=>_.problems);function l(){xe.set(null),we()}return[t,l,()=>{J(`${Q}/my/edit`)},_=>J(`${Q}/problems/${_.detail.id}`),()=>J(`${Q}/manage/problems`),()=>J(`${Q}/manage/users`),()=>J(`${Q}/manage/submits`)]}class nt extends ce{constructor(t){super(),pe(this,t,je,ze,me,{})}}export{nt as component};