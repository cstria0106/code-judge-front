import{G as n}from"./scheduler.cf24fc46.js";import{a as i}from"./store.8297d846.js";function a(o){return o!=null?`Bearer ${o}`:void 0}function c(o){const t="https://api.code.icnlab.dev",e=n(i);return{host:t,headers:{...o===!1?void 0:{Authorization:a(e)}}}}function d(o){const t="wss://api.code.icnlab.dev",e=n(i);return{host:t,...o===!1?void 0:{authorization:{token:a(e)}}}}export{d as a,c as g};
