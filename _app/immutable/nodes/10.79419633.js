import{s as S,e as H,i as B,d,u as _,f as p,a as k,g as b,h as v,T as q,c as y,j as T,w as h,X as z,l as D,m as w}from"../chunks/scheduler.074396d7.js";import{h as F,u as I}from"../chunks/await_block.cf3b133a.js";import{e as R}from"../chunks/each.b8031df4.js";import{S as O,i as P,a as M,t as N,b as X,d as Y,m as G,e as J}from"../chunks/index.1e7081af.js";import{a as K}from"../chunks/index.a71612e2.js";import{g as Q}from"../chunks/api.ae7c73b6.js";import{B as U}from"../chunks/BarsRotateFade.4b8bcd3d.js";function j(c,t,a){const e=c.slice();return e[1]=t[a],e}function V(c){return{c:_,l:_,m:_,p:_,i:_,o:_,d:_}}function W(c){let t,a,e='<tr><th class="svelte-uo6y6b">ID</th> <th class="svelte-uo6y6b">Name</th> <th class="svelte-uo6y6b">Role</th></tr>',s,r,i=R(c[0]),n=[];for(let o=0;o<i.length;o+=1)n[o]=A(j(c,i,o));return{c(){t=p("table"),a=p("thead"),a.innerHTML=e,s=k(),r=p("tbody");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){t=b(o,"TABLE",{class:!0});var u=v(t);a=b(u,"THEAD",{"data-svelte-h":!0}),q(a)!=="svelte-1oljeta"&&(a.innerHTML=e),s=y(u),r=b(u,"TBODY",{});var l=v(r);for(let f=0;f<n.length;f+=1)n[f].l(l);l.forEach(d),u.forEach(d),this.h()},h(){T(t,"class","svelte-uo6y6b")},m(o,u){B(o,t,u),h(t,a),h(t,s),h(t,r);for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(r,null)},p(o,u){if(u&1){i=R(o[0]);let l;for(l=0;l<i.length;l+=1){const f=j(o,i,l);n[l]?n[l].p(f,u):(n[l]=A(f),n[l].c(),n[l].m(r,null))}for(;l<n.length;l+=1)n[l].d(1);n.length=i.length}},i:_,o:_,d(o){o&&d(t),z(n,o)}}}function A(c){let t,a,e=c[1].id+"",s,r,i,n=c[1].name+"",o,u,l,f=c[1].role+"",$,E;return{c(){t=p("tr"),a=p("td"),s=D(e),r=k(),i=p("td"),o=D(n),u=k(),l=p("td"),$=D(f),E=k(),this.h()},l(g){t=b(g,"TR",{});var m=v(t);a=b(m,"TD",{class:!0});var C=v(a);s=w(C,e),C.forEach(d),r=y(m),i=b(m,"TD",{class:!0});var L=v(i);o=w(L,n),L.forEach(d),u=y(m),l=b(m,"TD",{class:!0});var x=v(l);$=w(x,f),x.forEach(d),E=y(m),m.forEach(d),this.h()},h(){T(a,"class","svelte-uo6y6b"),T(i,"class","svelte-uo6y6b"),T(l,"class","svelte-uo6y6b")},m(g,m){B(g,t,m),h(t,a),h(a,s),h(t,r),h(t,i),h(i,o),h(t,u),h(t,l),h(l,$),h(t,E)},p:_,d(g){g&&d(t)}}}function Z(c){let t,a;return t=new U({props:{size:32,color:"#333"}}),{c(){X(t.$$.fragment)},l(e){Y(t.$$.fragment,e)},m(e,s){G(t,e,s),a=!0},p:_,i(e){a||(M(t.$$.fragment,e),a=!0)},o(e){N(t.$$.fragment,e),a=!1},d(e){J(t,e)}}}function tt(c){let t,a,e={ctx:c,current:null,token:null,hasCatch:!1,pending:Z,then:W,catch:V,value:0,blocks:[,,,]};return F(c[0],e),{c(){t=H(),e.block.c()},l(s){t=H(),e.block.l(s)},m(s,r){B(s,t,r),e.block.m(s,e.anchor=r),e.mount=()=>t.parentNode,e.anchor=t,a=!0},p(s,[r]){c=s,I(e,c,r)},i(s){a||(M(e.block),a=!0)},o(s){for(let r=0;r<3;r+=1){const i=e.blocks[r];N(i)}a=!1},d(s){s&&d(t),e.block.d(s),e.token=null,e=null}}}function et(c){return[K.functional.user.manageList(Q(),{}).then(a=>a.users)]}class it extends O{constructor(t){super(),P(this,t,et,tt,S,{})}}export{it as component};