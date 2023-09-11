import{_ as Fe}from"./preload-helper.a4192956.js";var l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qe(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function Be(r){if(r.__esModule)return r;var a=r.default;if(typeof a=="function"){var t=function u(){return this instanceof u?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};t.prototype=a.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(u){var i=Object.getOwnPropertyDescriptor(r,u);Object.defineProperty(t,u,i.get?i:{enumerable:!0,get:function(){return r[u]}})}),t}var Oe={},le={},Ee={},E={},Te={};Object.defineProperty(Te,"__esModule",{value:!0});var Pe={};Object.defineProperty(Pe,"__esModule",{value:!0});var je={};Object.defineProperty(je,"__esModule",{value:!0});var J={};const Ge={},Ue=Object.freeze(Object.defineProperty({__proto__:null,default:Ge},Symbol.toStringTag,{value:"Module"})),Ie=Be(Ue);var Le=l&&l.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(J,"__esModule",{value:!0});J.AesPkcs5=void 0;var ve=Le(Ie),ye;(function(r){function a(u,i,e){var o=i.length*8,f=ve.default.createCipheriv("AES-".concat(o,"-CBC"),i,e);return f.update(u,"utf8","base64")+f.final("base64")}r.encrypt=a;function t(u,i,e){var o=i.length*8,f=ve.default.createDecipheriv("AES-".concat(o,"-CBC"),i,e);return f.update(u,"base64","utf8")+f.final("utf8")}r.decrypt=t})(ye||(J.AesPkcs5=ye={}));var ne={},Je=function(r){return Fe(()=>import(r),[],import.meta.url)},z={},ze=l&&l.__extends||function(){var r=function(a,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,i){u.__proto__=i}||function(u,i){for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(u[e]=i[e])},r(a,t)};return function(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(a,t);function u(){this.constructor=a}a.prototype=t===null?Object.create(t):(u.prototype=t.prototype,new u)}}();Object.defineProperty(z,"__esModule",{value:!0});z.HttpError=void 0;var Ve=function(r){ze(a,r);function a(t,u,i,e){var o=this.constructor,f=r.call(this,e)||this;f.method=t,f.path=u,f.status=i,f.body_=be;var s=o.prototype;return Object.setPrototypeOf?Object.setPrototypeOf(f,s):f.__proto__=s,f}return a.prototype.toJSON=function(){if(this.body_===be)try{this.body_=JSON.parse(this.message)}catch{this.body_=this.message}return{method:this.method,path:this.path,status:this.status,message:this.body_}},a}(Error);z.HttpError=Ve;var be={},ae={};Object.defineProperty(ae,"__esModule",{value:!0});ae.Singleton=void 0;var Ke=function(){function r(a){this.closure_=a,this.value_=pe}return r.prototype.get=function(){return this.value_===pe&&(this.value_=this.closure_()),this.value_},r}();ae.Singleton=Ke;var pe={},L=l&&l.__assign||function(){return L=Object.assign||function(r){for(var a,t=1,u=arguments.length;t<u;t++){a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(r[i]=a[i])}return r},L.apply(this,arguments)},me=l&&l.__awaiter||function(r,a,t,u){function i(e){return e instanceof t?e:new t(function(o){o(e)})}return new(t||(t=Promise))(function(e,o){function f(c){try{n(u.next(c))}catch(h){o(h)}}function s(c){try{n(u.throw(c))}catch(h){o(h)}}function n(c){c.done?e(c.value):i(c.value).then(f,s)}n((u=u.apply(r,a||[])).next())})},De=l&&l.__generator||function(r,a){var t={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},u,i,e,o;return o={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function f(n){return function(c){return s([n,c])}}function s(n){if(u)throw new TypeError("Generator is already executing.");for(;o&&(o=0,n[0]&&(t=0)),t;)try{if(u=1,i&&(e=n[0]&2?i.return:n[0]?i.throw||((e=i.return)&&e.call(i),0):i.next)&&!(e=e.call(i,n[1])).done)return e;switch(i=0,e&&(n=[n[0]&2,e.value]),n[0]){case 0:case 1:e=n;break;case 4:return t.label++,{value:n[1],done:!1};case 5:t.label++,i=n[1],n=[0];continue;case 7:n=t.ops.pop(),t.trys.pop();continue;default:if(e=t.trys,!(e=e.length>0&&e[e.length-1])&&(n[0]===6||n[0]===2)){t=0;continue}if(n[0]===3&&(!e||n[1]>e[0]&&n[1]<e[3])){t.label=n[1];break}if(n[0]===6&&t.label<e[1]){t.label=e[1],e=n;break}if(e&&t.label<e[2]){t.label=e[2],t.ops.push(n);break}e[2]&&t.ops.pop(),t.trys.pop();continue}n=a.call(r,t)}catch(c){n=[6,c],i=0}finally{u=e=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}},ge=l&&l.__values||function(r){var a=typeof Symbol=="function"&&Symbol.iterator,t=a&&r[a],u=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&u>=r.length&&(r=void 0),{value:r&&r[u++],done:!r}}};throw new TypeError(a?"Object is not iterable.":"Symbol.iterator is not defined.")},Qe=l&&l.__read||function(r,a){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var u=t.call(r),i,e=[],o;try{for(;(a===void 0||a-- >0)&&!(i=u.next()).done;)e.push(i.value)}catch(f){o={error:f}}finally{try{i&&!i.done&&(t=u.return)&&t.call(u)}finally{if(o)throw o.error}}return e},We=l&&l.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(ne,"__esModule",{value:!0});ne.Fetcher=void 0;var Xe=We(Je),we=J,Ze=z,ke=ae,et=function(){function r(){}return r.fetch=function(a,t,u,i,e,o){var f,s,n,c,h;return me(this,void 0,void 0,function(){var _,p,se,g,T,X,oe;return De(this,function(Z){switch(Z.label){case 0:if((t.request===!0||t.response===!0)&&a.encryption===void 0)throw new Error("Error on nestia.Fetcher.encrypt(): the encryption password has not been configured.");return _=L({},(f=a.headers)!==null&&f!==void 0?f:{}),e!==void 0&&((s=_["Content-Type"])!==null&&s!==void 0||(_["Content-Type"]=t.request===!0||typeof e=="string"?"text/plain":"application/json")),p=L(L({},(n=a.options)!==null&&n!==void 0?n:{}),{method:u,headers:function(){var y,G,k,he,fe=[];try{for(var ee=ge(Object.entries(_)),U=ee.next();!U.done;U=ee.next()){var de=Qe(U.value,2),_e=de[0],te=de[1];if(te!==void 0)if(Array.isArray(te))try{for(var re=(k=void 0,ge(te)),I=re.next();!I.done;I=re.next()){var Ye=I.value;fe.push([_e,String(Ye)])}}catch(ce){k={error:ce}}finally{try{I&&!I.done&&(he=re.return)&&he.call(re)}finally{if(k)throw k.error}}else fe.push([_e,String(te)])}}catch(ce){y={error:ce}}finally{try{U&&!U.done&&(G=ee.return)&&G.call(ee)}finally{if(y)throw y.error}}return fe}()}),e!==void 0&&(p.body=function(){var y=t.request===!0||_["Content-Type"]!=="text/plain"?(o??JSON.stringify)(e):String(e);if(t.request!==!0)return y;var G=a.encryption instanceof Function?a.encryption({headers:p.headers,body:y},!0):a.encryption;return we.AesPkcs5.encrypt(y,G.key,G.iv)}()),a.host[a.host.length-1]!=="/"&&i[0]!=="/"&&(i="/"+i),se=new URL("".concat(a.host).concat(i)),[4,tt.get()];case 1:return[4,Z.sent()(se.href,p)];case 2:return g=Z.sent(),[4,g.text()];case 3:if(T=(c=Z.sent())!==null&&c!==void 0?c:"",t.status!==void 0&&g.status!==t.status||t.status===void 0&&g.status!==200&&g.status!==201)throw new Ze.HttpError(u,i,g.status,T);if(u==="HEAD")return[2,void 0];X=!t.response||T.length===0?T:function(){var y=a.encryption instanceof Function?a.encryption({headers:rt(g.headers),body:T},!1):a.encryption;return we.AesPkcs5.decrypt(T,y.key,y.iv)}(),oe=X;try{(t.response||((h=g.headers.get("Content-Type"))!==null&&h!==void 0?h:"").indexOf("application/json")!==-1)&&(oe=X.length?JSON.parse(X):void 0)}catch{}return[2,oe]}})})},r}();ne.Fetcher=et;var tt=new ke.Singleton(function(){return me(void 0,void 0,void 0,function(){var r;return De(this,function(a){switch(a.label){case 0:return typeof l=="object"&&typeof l.process=="object"&&typeof l.process.versions=="object"&&typeof l.process.versions.node!==void 0?l.fetch!==void 0?[3,2]:(r=l,[4,(0,Xe.default)("node-fetch")]):[3,3];case 1:r.fetch=a.sent().default,a.label=2;case 2:return[2,l.fetch];case 3:return[2,window.fetch]}})})});function rt(r){var a={};return r.forEach(function(t,u){return a[u]=t}),a}(function(r){var a=l&&l.__createBinding||(Object.create?function(u,i,e,o){o===void 0&&(o=e);var f=Object.getOwnPropertyDescriptor(i,e);(!f||("get"in f?!i.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return i[e]}}),Object.defineProperty(u,o,f)}:function(u,i,e,o){o===void 0&&(o=e),u[o]=i[e]}),t=l&&l.__exportStar||function(u,i){for(var e in u)e!=="default"&&!Object.prototype.hasOwnProperty.call(i,e)&&a(i,u,e)};Object.defineProperty(r,"__esModule",{value:!0}),t(Te,r),t(Pe,r),t(je,r),t(J,r),t(ne,r),t(z,r)})(E);(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.HttpError=void 0;var a=E;Object.defineProperty(r,"HttpError",{enumerable:!0,get:function(){return a.HttpError}})})(Ee);var v={},V={},P=l&&l.__assign||function(){return P=Object.assign||function(r){for(var a,t=1,u=arguments.length;t<u;t++){a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(r[i]=a[i])}return r},P.apply(this,arguments)},nt=l&&l.__awaiter||function(r,a,t,u){function i(e){return e instanceof t?e:new t(function(o){o(e)})}return new(t||(t=Promise))(function(e,o){function f(c){try{n(u.next(c))}catch(h){o(h)}}function s(c){try{n(u.throw(c))}catch(h){o(h)}}function n(c){c.done?e(c.value):i(c.value).then(f,s)}n((u=u.apply(r,a||[])).next())})},at=l&&l.__generator||function(r,a){var t={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},u,i,e,o;return o={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function f(n){return function(c){return s([n,c])}}function s(n){if(u)throw new TypeError("Generator is already executing.");for(;o&&(o=0,n[0]&&(t=0)),t;)try{if(u=1,i&&(e=n[0]&2?i.return:n[0]?i.throw||((e=i.return)&&e.call(i),0):i.next)&&!(e=e.call(i,n[1])).done)return e;switch(i=0,e&&(n=[n[0]&2,e.value]),n[0]){case 0:case 1:e=n;break;case 4:return t.label++,{value:n[1],done:!1};case 5:t.label++,i=n[1],n=[0];continue;case 7:n=t.ops.pop(),t.trys.pop();continue;default:if(e=t.trys,!(e=e.length>0&&e[e.length-1])&&(n[0]===6||n[0]===2)){t=0;continue}if(n[0]===3&&(!e||n[1]>e[0]&&n[1]<e[3])){t.label=n[1];break}if(n[0]===6&&t.label<e[1]){t.label=e[1],e=n;break}if(e&&t.label<e[2]){t.label=e[2],t.ops.push(n);break}e[2]&&t.ops.pop(),t.trys.pop();continue}n=a.call(r,t)}catch(c){n=[6,c],i=0}finally{u=e=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}};Object.defineProperty(V,"__esModule",{value:!0});V.login=void 0;var it=E;function M(r,a){var t;return nt(this,void 0,void 0,function(){return at(this,function(u){return[2,it.Fetcher.fetch(P(P({},r),{headers:P(P({},(t=r.headers)!==null&&t!==void 0?t:{}),{"Content-Type":"application/json"})}),M.ENCRYPTED,M.METHOD,M.path(),a)]})})}V.login=M;(function(r){r.METHOD="POST",r.PATH="/auth/login",r.ENCRYPTED={request:!1,response:!1},r.path=function(){return"/auth/login"}})(M||(V.login=M={}));var b={},d={},j=l&&l.__assign||function(){return j=Object.assign||function(r){for(var a,t=1,u=arguments.length;t<u;t++){a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(r[i]=a[i])}return r},j.apply(this,arguments)},K=l&&l.__awaiter||function(r,a,t,u){function i(e){return e instanceof t?e:new t(function(o){o(e)})}return new(t||(t=Promise))(function(e,o){function f(c){try{n(u.next(c))}catch(h){o(h)}}function s(c){try{n(u.throw(c))}catch(h){o(h)}}function n(c){c.done?e(c.value):i(c.value).then(f,s)}n((u=u.apply(r,a||[])).next())})},Q=l&&l.__generator||function(r,a){var t={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},u,i,e,o;return o={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function f(n){return function(c){return s([n,c])}}function s(n){if(u)throw new TypeError("Generator is already executing.");for(;o&&(o=0,n[0]&&(t=0)),t;)try{if(u=1,i&&(e=n[0]&2?i.return:n[0]?i.throw||((e=i.return)&&e.call(i),0):i.next)&&!(e=e.call(i,n[1])).done)return e;switch(i=0,e&&(n=[n[0]&2,e.value]),n[0]){case 0:case 1:e=n;break;case 4:return t.label++,{value:n[1],done:!1};case 5:t.label++,i=n[1],n=[0];continue;case 7:n=t.ops.pop(),t.trys.pop();continue;default:if(e=t.trys,!(e=e.length>0&&e[e.length-1])&&(n[0]===6||n[0]===2)){t=0;continue}if(n[0]===3&&(!e||n[1]>e[0]&&n[1]<e[3])){t.label=n[1];break}if(n[0]===6&&t.label<e[1]){t.label=e[1],e=n;break}if(e&&t.label<e[2]){t.label=e[2],t.ops.push(n);break}e[2]&&t.ops.pop(),t.trys.pop();continue}n=a.call(r,t)}catch(c){n=[6,c],i=0}finally{u=e=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}};Object.defineProperty(d,"__esModule",{value:!0});d.manageDestroy=d.manageUpdate=d.manageCreate=d.manageList=d.manageGet=void 0;var W=E;function S(r,a){return K(this,void 0,void 0,function(){return Q(this,function(t){return[2,W.Fetcher.fetch(r,S.ENCRYPTED,S.METHOD,S.path(a))]})})}d.manageGet=S;(function(r){r.METHOD="GET",r.PATH="/problem/manage/:id",r.ENCRYPTED={request:!1,response:!1},r.path=function(a){return"/problem/manage/".concat(encodeURIComponent(a??"null"))}})(S||(d.manageGet=S={}));function H(r){return K(this,void 0,void 0,function(){return Q(this,function(a){return[2,W.Fetcher.fetch(r,H.ENCRYPTED,H.METHOD,H.path())]})})}d.manageList=H;(function(r){r.METHOD="GET",r.PATH="/problem/manage",r.ENCRYPTED={request:!1,response:!1},r.path=function(){return"/problem/manage"}})(H||(d.manageList=H={}));function C(r){return K(this,void 0,void 0,function(){return Q(this,function(a){return[2,W.Fetcher.fetch(r,C.ENCRYPTED,C.METHOD,C.path())]})})}d.manageCreate=C;(function(r){r.METHOD="POST",r.PATH="/problem/manage",r.ENCRYPTED={request:!1,response:!1},r.path=function(){return"/problem/manage"}})(C||(d.manageCreate=C={}));function x(r,a,t){var u;return K(this,void 0,void 0,function(){return Q(this,function(i){return[2,W.Fetcher.fetch(j(j({},r),{headers:j(j({},(u=r.headers)!==null&&u!==void 0?u:{}),{"Content-Type":"application/json"})}),x.ENCRYPTED,x.METHOD,x.path(a),t)]})})}d.manageUpdate=x;(function(r){r.METHOD="PUT",r.PATH="/problem/manage/:id",r.ENCRYPTED={request:!1,response:!1},r.path=function(a){return"/problem/manage/".concat(encodeURIComponent(a??"null"))}})(x||(d.manageUpdate=x={}));function $(r,a){return K(this,void 0,void 0,function(){return Q(this,function(t){return[2,W.Fetcher.fetch(r,$.ENCRYPTED,$.METHOD,$.path(a))]})})}d.manageDestroy=$;(function(r){r.METHOD="DELETE",r.PATH="/problem/manage/:id",r.ENCRYPTED={request:!1,response:!1},r.path=function(a){return"/problem/manage/".concat(encodeURIComponent(a??"null"))}})($||(d.manageDestroy=$={}));var ut=l&&l.__createBinding||(Object.create?function(r,a,t,u){u===void 0&&(u=t);var i=Object.getOwnPropertyDescriptor(a,t);(!i||("get"in i?!a.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return a[t]}}),Object.defineProperty(r,u,i)}:function(r,a,t,u){u===void 0&&(u=t),r[u]=a[t]}),ot=l&&l.__setModuleDefault||(Object.create?function(r,a){Object.defineProperty(r,"default",{enumerable:!0,value:a})}:function(r,a){r.default=a}),ft=l&&l.__importStar||function(r){if(r&&r.__esModule)return r;var a={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&ut(a,r,t);return ot(a,r),a},Me=l&&l.__awaiter||function(r,a,t,u){function i(e){return e instanceof t?e:new t(function(o){o(e)})}return new(t||(t=Promise))(function(e,o){function f(c){try{n(u.next(c))}catch(h){o(h)}}function s(c){try{n(u.throw(c))}catch(h){o(h)}}function n(c){c.done?e(c.value):i(c.value).then(f,s)}n((u=u.apply(r,a||[])).next())})},Se=l&&l.__generator||function(r,a){var t={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},u,i,e,o;return o={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function f(n){return function(c){return s([n,c])}}function s(n){if(u)throw new TypeError("Generator is already executing.");for(;o&&(o=0,n[0]&&(t=0)),t;)try{if(u=1,i&&(e=n[0]&2?i.return:n[0]?i.throw||((e=i.return)&&e.call(i),0):i.next)&&!(e=e.call(i,n[1])).done)return e;switch(i=0,e&&(n=[n[0]&2,e.value]),n[0]){case 0:case 1:e=n;break;case 4:return t.label++,{value:n[1],done:!1};case 5:t.label++,i=n[1],n=[0];continue;case 7:n=t.ops.pop(),t.trys.pop();continue;default:if(e=t.trys,!(e=e.length>0&&e[e.length-1])&&(n[0]===6||n[0]===2)){t=0;continue}if(n[0]===3&&(!e||n[1]>e[0]&&n[1]<e[3])){t.label=n[1];break}if(n[0]===6&&t.label<e[1]){t.label=e[1],e=n;break}if(e&&t.label<e[2]){t.label=e[2],t.ops.push(n);break}e[2]&&t.ops.pop(),t.trys.pop();continue}n=a.call(r,t)}catch(c){n=[6,c],i=0}finally{u=e=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}};Object.defineProperty(b,"__esModule",{value:!0});b.get=b.list=b.manage=void 0;var He=E;b.manage=ft(d);function R(r,a){return Me(this,void 0,void 0,function(){return Se(this,function(t){return[2,He.Fetcher.fetch(r,R.ENCRYPTED,R.METHOD,R.path(a))]})})}b.list=R;(function(r){r.METHOD="GET",r.PATH="/problem",r.ENCRYPTED={request:!1,response:!1},r.path=function(a){for(var t=a,u=new URLSearchParams,i=function(h,_){if(_===void 0)return"continue";Array.isArray(_)?_.forEach(function(p){return u.append(h,String(p))}):u.set(h,String(_))},e=0,o=Object.entries(t);e<o.length;e++){var f=o[e],s=f[0],n=f[1];i(s,n)}var c=u.toString();return"/problem".concat(c.length?"?".concat(c):"")}})(R||(b.list=R={}));function N(r,a){return Me(this,void 0,void 0,function(){return Se(this,function(t){return[2,He.Fetcher.fetch(r,N.ENCRYPTED,N.METHOD,N.path(a))]})})}b.get=N;(function(r){r.METHOD="GET",r.PATH="/problem/:id",r.ENCRYPTED={request:!1,response:!1},r.path=function(a){return"/problem/".concat(encodeURIComponent(a??"null"))}})(N||(b.get=N={}));var w={},m=l&&l.__assign||function(){return m=Object.assign||function(r){for(var a,t=1,u=arguments.length;t<u;t++){a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(r[i]=a[i])}return r},m.apply(this,arguments)},Ce=l&&l.__awaiter||function(r,a,t,u){function i(e){return e instanceof t?e:new t(function(o){o(e)})}return new(t||(t=Promise))(function(e,o){function f(c){try{n(u.next(c))}catch(h){o(h)}}function s(c){try{n(u.throw(c))}catch(h){o(h)}}function n(c){c.done?e(c.value):i(c.value).then(f,s)}n((u=u.apply(r,a||[])).next())})},xe=l&&l.__generator||function(r,a){var t={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},u,i,e,o;return o={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function f(n){return function(c){return s([n,c])}}function s(n){if(u)throw new TypeError("Generator is already executing.");for(;o&&(o=0,n[0]&&(t=0)),t;)try{if(u=1,i&&(e=n[0]&2?i.return:n[0]?i.throw||((e=i.return)&&e.call(i),0):i.next)&&!(e=e.call(i,n[1])).done)return e;switch(i=0,e&&(n=[n[0]&2,e.value]),n[0]){case 0:case 1:e=n;break;case 4:return t.label++,{value:n[1],done:!1};case 5:t.label++,i=n[1],n=[0];continue;case 7:n=t.ops.pop(),t.trys.pop();continue;default:if(e=t.trys,!(e=e.length>0&&e[e.length-1])&&(n[0]===6||n[0]===2)){t=0;continue}if(n[0]===3&&(!e||n[1]>e[0]&&n[1]<e[3])){t.label=n[1];break}if(n[0]===6&&t.label<e[1]){t.label=e[1],e=n;break}if(e&&t.label<e[2]){t.label=e[2],t.ops.push(n);break}e[2]&&t.ops.pop(),t.trys.pop();continue}n=a.call(r,t)}catch(c){n=[6,c],i=0}finally{u=e=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}};Object.defineProperty(w,"__esModule",{value:!0});w.create=w.list=void 0;var $e=E;function A(r,a){return Ce(this,void 0,void 0,function(){return xe(this,function(t){return[2,$e.Fetcher.fetch(r,A.ENCRYPTED,A.METHOD,A.path(a))]})})}w.list=A;(function(r){r.METHOD="GET",r.PATH="/submit",r.ENCRYPTED={request:!1,response:!1},r.path=function(a){for(var t=a,u=new URLSearchParams,i=function(h,_){if(_===void 0)return"continue";Array.isArray(_)?_.forEach(function(p){return u.append(h,String(p))}):u.set(h,String(_))},e=0,o=Object.entries(t);e<o.length;e++){var f=o[e],s=f[0],n=f[1];i(s,n)}var c=u.toString();return"/submit".concat(c.length?"?".concat(c):"")}})(A||(w.list=A={}));function Y(r,a){var t;return Ce(this,void 0,void 0,function(){return xe(this,function(u){return[2,$e.Fetcher.fetch(m(m({},r),{headers:m(m({},(t=r.headers)!==null&&t!==void 0?t:{}),{"Content-Type":"application/json"})}),Y.ENCRYPTED,Y.METHOD,Y.path(),a)]})})}w.create=Y;(function(r){r.METHOD="POST",r.PATH="/submit",r.ENCRYPTED={request:!1,response:!1},r.path=function(){return"/submit"}})(Y||(w.create=Y={}));var ie={},O={},D=l&&l.__assign||function(){return D=Object.assign||function(r){for(var a,t=1,u=arguments.length;t<u;t++){a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(r[i]=a[i])}return r},D.apply(this,arguments)},Re=l&&l.__awaiter||function(r,a,t,u){function i(e){return e instanceof t?e:new t(function(o){o(e)})}return new(t||(t=Promise))(function(e,o){function f(c){try{n(u.next(c))}catch(h){o(h)}}function s(c){try{n(u.throw(c))}catch(h){o(h)}}function n(c){c.done?e(c.value):i(c.value).then(f,s)}n((u=u.apply(r,a||[])).next())})},Ne=l&&l.__generator||function(r,a){var t={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},u,i,e,o;return o={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function f(n){return function(c){return s([n,c])}}function s(n){if(u)throw new TypeError("Generator is already executing.");for(;o&&(o=0,n[0]&&(t=0)),t;)try{if(u=1,i&&(e=n[0]&2?i.return:n[0]?i.throw||((e=i.return)&&e.call(i),0):i.next)&&!(e=e.call(i,n[1])).done)return e;switch(i=0,e&&(n=[n[0]&2,e.value]),n[0]){case 0:case 1:e=n;break;case 4:return t.label++,{value:n[1],done:!1};case 5:t.label++,i=n[1],n=[0];continue;case 7:n=t.ops.pop(),t.trys.pop();continue;default:if(e=t.trys,!(e=e.length>0&&e[e.length-1])&&(n[0]===6||n[0]===2)){t=0;continue}if(n[0]===3&&(!e||n[1]>e[0]&&n[1]<e[3])){t.label=n[1];break}if(n[0]===6&&t.label<e[1]){t.label=e[1],e=n;break}if(e&&t.label<e[2]){t.label=e[2],t.ops.push(n);break}e[2]&&t.ops.pop(),t.trys.pop();continue}n=a.call(r,t)}catch(c){n=[6,c],i=0}finally{u=e=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}};Object.defineProperty(O,"__esModule",{value:!0});O.getMyUser=O.updateMyUser=void 0;var Ae=E;function F(r,a){var t;return Re(this,void 0,void 0,function(){return Ne(this,function(u){return[2,Ae.Fetcher.fetch(D(D({},r),{headers:D(D({},(t=r.headers)!==null&&t!==void 0?t:{}),{"Content-Type":"application/json"})}),F.ENCRYPTED,F.METHOD,F.path(),a)]})})}O.updateMyUser=F;(function(r){r.METHOD="PUT",r.PATH="/user/my",r.ENCRYPTED={request:!1,response:!1},r.path=function(){return"/user/my"}})(F||(O.updateMyUser=F={}));function q(r){return Re(this,void 0,void 0,function(){return Ne(this,function(a){return[2,Ae.Fetcher.fetch(r,q.ENCRYPTED,q.METHOD,q.path())]})})}O.getMyUser=q;(function(r){r.METHOD="GET",r.PATH="/user/my",r.ENCRYPTED={request:!1,response:!1},r.path=function(){return"/user/my"}})(q||(O.getMyUser=q={}));var ct=l&&l.__createBinding||(Object.create?function(r,a,t,u){u===void 0&&(u=t);var i=Object.getOwnPropertyDescriptor(a,t);(!i||("get"in i?!a.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return a[t]}}),Object.defineProperty(r,u,i)}:function(r,a,t,u){u===void 0&&(u=t),r[u]=a[t]}),lt=l&&l.__setModuleDefault||(Object.create?function(r,a){Object.defineProperty(r,"default",{enumerable:!0,value:a})}:function(r,a){r.default=a}),st=l&&l.__importStar||function(r){if(r&&r.__esModule)return r;var a={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&ct(a,r,t);return lt(a,r),a};Object.defineProperty(ie,"__esModule",{value:!0});ie.my=void 0;ie.my=st(O);var ht=l&&l.__createBinding||(Object.create?function(r,a,t,u){u===void 0&&(u=t);var i=Object.getOwnPropertyDescriptor(a,t);(!i||("get"in i?!a.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return a[t]}}),Object.defineProperty(r,u,i)}:function(r,a,t,u){u===void 0&&(u=t),r[u]=a[t]}),dt=l&&l.__setModuleDefault||(Object.create?function(r,a){Object.defineProperty(r,"default",{enumerable:!0,value:a})}:function(r,a){r.default=a}),ue=l&&l.__importStar||function(r){if(r&&r.__esModule)return r;var a={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&ht(a,r,t);return dt(a,r),a},_t=l&&l.__awaiter||function(r,a,t,u){function i(e){return e instanceof t?e:new t(function(o){o(e)})}return new(t||(t=Promise))(function(e,o){function f(c){try{n(u.next(c))}catch(h){o(h)}}function s(c){try{n(u.throw(c))}catch(h){o(h)}}function n(c){c.done?e(c.value):i(c.value).then(f,s)}n((u=u.apply(r,a||[])).next())})},vt=l&&l.__generator||function(r,a){var t={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},u,i,e,o;return o={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function f(n){return function(c){return s([n,c])}}function s(n){if(u)throw new TypeError("Generator is already executing.");for(;o&&(o=0,n[0]&&(t=0)),t;)try{if(u=1,i&&(e=n[0]&2?i.return:n[0]?i.throw||((e=i.return)&&e.call(i),0):i.next)&&!(e=e.call(i,n[1])).done)return e;switch(i=0,e&&(n=[n[0]&2,e.value]),n[0]){case 0:case 1:e=n;break;case 4:return t.label++,{value:n[1],done:!1};case 5:t.label++,i=n[1],n=[0];continue;case 7:n=t.ops.pop(),t.trys.pop();continue;default:if(e=t.trys,!(e=e.length>0&&e[e.length-1])&&(n[0]===6||n[0]===2)){t=0;continue}if(n[0]===3&&(!e||n[1]>e[0]&&n[1]<e[3])){t.label=n[1];break}if(n[0]===6&&t.label<e[1]){t.label=e[1],e=n;break}if(e&&t.label<e[2]){t.label=e[2],t.ops.push(n);break}e[2]&&t.ops.pop(),t.trys.pop();continue}n=a.call(r,t)}catch(c){n=[6,c],i=0}finally{u=e=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}};Object.defineProperty(v,"__esModule",{value:!0});v.ping=v.user=v.submit=v.problem=v.auth=void 0;var yt=E;v.auth=ue(V);v.problem=ue(b);v.submit=ue(w);v.user=ue(ie);function B(r){return _t(this,void 0,void 0,function(){return vt(this,function(a){return[2,yt.Fetcher.fetch(r,B.ENCRYPTED,B.METHOD,B.path())]})})}v.ping=B;(function(r){r.METHOD="GET",r.PATH="/ping",r.ENCRYPTED={request:!1,response:!1},r.path=function(){return"/ping"}})(B||(v.ping=B={}));(function(r){var a=l&&l.__createBinding||(Object.create?function(e,o,f,s){s===void 0&&(s=f);var n=Object.getOwnPropertyDescriptor(o,f);(!n||("get"in n?!o.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return o[f]}}),Object.defineProperty(e,s,n)}:function(e,o,f,s){s===void 0&&(s=f),e[s]=o[f]}),t=l&&l.__setModuleDefault||(Object.create?function(e,o){Object.defineProperty(e,"default",{enumerable:!0,value:o})}:function(e,o){e.default=o}),u=l&&l.__exportStar||function(e,o){for(var f in e)f!=="default"&&!Object.prototype.hasOwnProperty.call(o,f)&&a(o,e,f)},i=l&&l.__importStar||function(e){if(e&&e.__esModule)return e;var o={};if(e!=null)for(var f in e)f!=="default"&&Object.prototype.hasOwnProperty.call(e,f)&&a(o,e,f);return t(o,e),o};Object.defineProperty(r,"__esModule",{value:!0}),r.functional=void 0,u(Ee,r),r.functional=i(v)})(le);(function(r){var a=l&&l.__createBinding||(Object.create?function(o,f,s,n){n===void 0&&(n=s);var c=Object.getOwnPropertyDescriptor(f,s);(!c||("get"in c?!f.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return f[s]}}),Object.defineProperty(o,n,c)}:function(o,f,s,n){n===void 0&&(n=s),o[n]=f[s]}),t=l&&l.__setModuleDefault||(Object.create?function(o,f){Object.defineProperty(o,"default",{enumerable:!0,value:f})}:function(o,f){o.default=f}),u=l&&l.__importStar||function(o){if(o&&o.__esModule)return o;var f={};if(o!=null)for(var s in o)s!=="default"&&Object.prototype.hasOwnProperty.call(o,s)&&a(f,o,s);return t(f,o),f},i=l&&l.__exportStar||function(o,f){for(var s in o)s!=="default"&&!Object.prototype.hasOwnProperty.call(f,s)&&a(f,o,s)};Object.defineProperty(r,"__esModule",{value:!0});var e=u(le);i(le,r),r.default=e})(Oe);const pt=qe(Oe);export{pt as a,Oe as b,l as c,qe as g};
