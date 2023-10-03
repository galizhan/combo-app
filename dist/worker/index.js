var T4=Object.create;var qn=Object.defineProperty;var L4=Object.getOwnPropertyDescriptor;var P4=Object.getOwnPropertyNames;var Z4=Object.getPrototypeOf,I4=Object.prototype.hasOwnProperty;var zn=(e,t)=>()=>(e&&(t=e(e=0)),t);var ge=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Q=(e,t)=>{for(var r in t)qn(e,r,{get:t[r],enumerable:!0})},tl=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of P4(t))!I4.call(e,n)&&n!==r&&qn(e,n,{get:()=>t[n],enumerable:!(a=L4(t,n))||a.enumerable});return e};var A=(e,t,r)=>(r=e!=null?T4(Z4(e)):{},tl(t||!e||!e.__esModule?qn(r,"default",{value:e,enumerable:!0}):r,e)),Oo=e=>tl(qn({},"__esModule",{value:!0}),e);var rl=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var We=(e,t,r)=>(rl(e,t,"read from private field"),r?r.call(e):t.get(e)),Ya=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},Ja=(e,t,r,a)=>(rl(e,t,"write to private field"),a?a.call(e,r):t.set(e,r),r);var pl=ge(ee=>{"use strict";var Ka=Symbol.for("react.element"),H4=Symbol.for("react.portal"),V4=Symbol.for("react.fragment"),D4=Symbol.for("react.strict_mode"),N4=Symbol.for("react.profiler"),O4=Symbol.for("react.provider"),$4=Symbol.for("react.context"),B4=Symbol.for("react.forward_ref"),F4=Symbol.for("react.suspense"),U4=Symbol.for("react.memo"),j4=Symbol.for("react.lazy"),al=Symbol.iterator;function q4(e){return e===null||typeof e!="object"?null:(e=al&&e[al]||e["@@iterator"],typeof e=="function"?e:null)}var il={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sl=Object.assign,ll={};function ma(e,t,r){this.props=e,this.context=t,this.refs=ll,this.updater=r||il}ma.prototype.isReactComponent={};ma.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ma.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cl(){}cl.prototype=ma.prototype;function Bo(e,t,r){this.props=e,this.context=t,this.refs=ll,this.updater=r||il}var Fo=Bo.prototype=new cl;Fo.constructor=Bo;sl(Fo,ma.prototype);Fo.isPureReactComponent=!0;var nl=Array.isArray,ul=Object.prototype.hasOwnProperty,Uo={current:null},dl={key:!0,ref:!0,__self:!0,__source:!0};function hl(e,t,r){var a,n={},o=null,i=null;if(t!=null)for(a in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)ul.call(t,a)&&!dl.hasOwnProperty(a)&&(n[a]=t[a]);var s=arguments.length-2;if(s===1)n.children=r;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];n.children=l}if(e&&e.defaultProps)for(a in s=e.defaultProps,s)n[a]===void 0&&(n[a]=s[a]);return{$$typeof:Ka,type:e,key:o,ref:i,props:n,_owner:Uo.current}}function z4(e,t){return{$$typeof:Ka,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function jo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ka}function W4(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var ol=/\/+/g;function $o(e,t){return typeof e=="object"&&e!==null&&e.key!=null?W4(""+e.key):t.toString(36)}function Gn(e,t,r,a,n){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Ka:case H4:i=!0}}if(i)return i=e,n=n(i),e=a===""?"."+$o(i,0):a,nl(n)?(r="",e!=null&&(r=e.replace(ol,"$&/")+"/"),Gn(n,t,r,"",function(c){return c})):n!=null&&(jo(n)&&(n=z4(n,r+(!n.key||i&&i.key===n.key?"":(""+n.key).replace(ol,"$&/")+"/")+e)),t.push(n)),1;if(i=0,a=a===""?".":a+":",nl(e))for(var s=0;s<e.length;s++){o=e[s];var l=a+$o(o,s);i+=Gn(o,t,r,l,n)}else if(l=q4(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=a+$o(o,s++),i+=Gn(o,t,r,l,n);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Wn(e,t,r){if(e==null)return e;var a=[],n=0;return Gn(e,a,"","",function(o){return t.call(r,o,n++)}),a}function G4(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var rt={current:null},Yn={transition:null},Y4={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:Yn,ReactCurrentOwner:Uo};ee.Children={map:Wn,forEach:function(e,t,r){Wn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Wn(e,function(){t++}),t},toArray:function(e){return Wn(e,function(t){return t})||[]},only:function(e){if(!jo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ee.Component=ma;ee.Fragment=V4;ee.Profiler=N4;ee.PureComponent=Bo;ee.StrictMode=D4;ee.Suspense=F4;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y4;ee.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=sl({},e.props),n=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Uo.current),t.key!==void 0&&(n=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)ul.call(t,l)&&!dl.hasOwnProperty(l)&&(a[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];a.children=s}return{$$typeof:Ka,type:e.type,key:n,ref:o,props:a,_owner:i}};ee.createContext=function(e){return e={$$typeof:$4,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:O4,_context:e},e.Consumer=e};ee.createElement=hl;ee.createFactory=function(e){var t=hl.bind(null,e);return t.type=e,t};ee.createRef=function(){return{current:null}};ee.forwardRef=function(e){return{$$typeof:B4,render:e}};ee.isValidElement=jo;ee.lazy=function(e){return{$$typeof:j4,_payload:{_status:-1,_result:e},_init:G4}};ee.memo=function(e,t){return{$$typeof:U4,type:e,compare:t===void 0?null:t}};ee.startTransition=function(e){var t=Yn.transition;Yn.transition={};try{e()}finally{Yn.transition=t}};ee.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ee.useCallback=function(e,t){return rt.current.useCallback(e,t)};ee.useContext=function(e){return rt.current.useContext(e)};ee.useDebugValue=function(){};ee.useDeferredValue=function(e){return rt.current.useDeferredValue(e)};ee.useEffect=function(e,t){return rt.current.useEffect(e,t)};ee.useId=function(){return rt.current.useId()};ee.useImperativeHandle=function(e,t,r){return rt.current.useImperativeHandle(e,t,r)};ee.useInsertionEffect=function(e,t){return rt.current.useInsertionEffect(e,t)};ee.useLayoutEffect=function(e,t){return rt.current.useLayoutEffect(e,t)};ee.useMemo=function(e,t){return rt.current.useMemo(e,t)};ee.useReducer=function(e,t,r){return rt.current.useReducer(e,t,r)};ee.useRef=function(e){return rt.current.useRef(e)};ee.useState=function(e){return rt.current.useState(e)};ee.useSyncExternalStore=function(e,t,r){return rt.current.useSyncExternalStore(e,t,r)};ee.useTransition=function(){return rt.current.useTransition()};ee.version="18.2.0"});var ce=ge((j9,fl)=>{"use strict";fl.exports=pl()});var Ul={};Q(Ul,{AbortedDeferredError:()=>Zt,Action:()=>ue,ErrorResponse:()=>zr,IDLE_BLOCKER:()=>Cr,IDLE_FETCHER:()=>Il,IDLE_NAVIGATION:()=>Kn,UNSAFE_DEFERRED_SYMBOL:()=>rn,UNSAFE_DeferredData:()=>Xn,UNSAFE_convertRoutesToDataRoutes:()=>en,UNSAFE_getPathContributingMatches:()=>Gr,UNSAFE_invariant:()=>V,UNSAFE_warning:()=>Dt,createBrowserHistory:()=>t0,createHashHistory:()=>r0,createMemoryHistory:()=>e0,createPath:()=>Be,createRouter:()=>Ca,createStaticHandler:()=>Yo,defer:()=>Yr,generatePath:()=>wa,getStaticContextFromError:()=>Jo,getToPathname:()=>ph,isDeferredData:()=>Bl,isRouteErrorResponse:()=>xe,joinPaths:()=>gt,json:()=>Nt,matchPath:()=>rr,matchRoutes:()=>Ie,normalizePathname:()=>Pl,parsePath:()=>Le,redirect:()=>Jr,resolvePath:()=>Wr,resolveTo:()=>xa,stripBasename:()=>ut});function re(){return re=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},re.apply(this,arguments)}function e0(e){e===void 0&&(e={});let{initialEntries:t=["/"],initialIndex:r,v5Compat:a=!1}=e,n;n=t.map((p,f)=>u(p,typeof p=="string"?null:p.state,f===0?"default":void 0));let o=l(r??n.length-1),i=ue.Pop,s=null;function l(p){return Math.min(Math.max(p,0),n.length-1)}function c(){return n[o]}function u(p,f,v){f===void 0&&(f=null);let g=tr(n?c().pathname:"/",p,f,v);return Dt(g.pathname.charAt(0)==="/","relative pathnames are not supported in memory history: "+JSON.stringify(p)),g}function d(p){return typeof p=="string"?p:Be(p)}return{get index(){return o},get action(){return i},get location(){return c()},createHref:d,createURL(p){return new URL(d(p),"http://localhost")},encodeLocation(p){let f=typeof p=="string"?Le(p):p;return{pathname:f.pathname||"",search:f.search||"",hash:f.hash||""}},push(p,f){i=ue.Push;let v=u(p,f);o+=1,n.splice(o,n.length,v),a&&s&&s({action:i,location:v,delta:1})},replace(p,f){i=ue.Replace;let v=u(p,f);n[o]=v,a&&s&&s({action:i,location:v,delta:0})},go(p){i=ue.Pop;let f=l(o+p),v=n[f];o=f,s&&s({action:i,location:v,delta:p})},listen(p){return s=p,()=>{s=null}}}}function t0(e){e===void 0&&(e={});function t(a,n){let{pathname:o,search:i,hash:s}=a.location;return tr("",{pathname:o,search:i,hash:s},n.state&&n.state.usr||null,n.state&&n.state.key||"default")}function r(a,n){return typeof n=="string"?n:Be(n)}return _l(t,r,null,e)}function r0(e){e===void 0&&(e={});function t(n,o){let{pathname:i="/",search:s="",hash:l=""}=Le(n.location.hash.substr(1));return tr("",{pathname:i,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){let i=n.document.querySelector("base"),s="";if(i&&i.getAttribute("href")){let l=n.location.href,c=l.indexOf("#");s=c===-1?l:l.slice(0,c)}return s+"#"+(typeof o=="string"?o:Be(o))}function a(n,o){Dt(n.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return _l(t,r,a,e)}function V(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Dt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function J4(){return Math.random().toString(36).substr(2,8)}function ml(e,t){return{usr:e.state,key:e.key,idx:t}}function tr(e,t,r,a){return r===void 0&&(r=null),re({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Le(t):t,{state:r,key:t&&t.key||a||J4()})}function Be(e){let{pathname:t="/",search:r="",hash:a=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function Le(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function _l(e,t,r,a){a===void 0&&(a={});let{window:n=document.defaultView,v5Compat:o=!1}=a,i=n.history,s=ue.Pop,l=null,c=u();c==null&&(c=0,i.replaceState(re({},i.state,{idx:c}),""));function u(){return(i.state||{idx:null}).idx}function d(){s=ue.Pop;let g=u(),w=g==null?null:g-c;c=g,l&&l({action:s,location:v.location,delta:w})}function h(g,w){s=ue.Push;let b=tr(v.location,g,w);r&&r(b,g),c=u()+1;let C=ml(b,c),m=v.createHref(b);try{i.pushState(C,"",m)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;n.location.assign(m)}o&&l&&l({action:s,location:v.location,delta:1})}function p(g,w){s=ue.Replace;let b=tr(v.location,g,w);r&&r(b,g),c=u();let C=ml(b,c),m=v.createHref(b);i.replaceState(C,"",m),o&&l&&l({action:s,location:v.location,delta:0})}function f(g){let w=n.location.origin!=="null"?n.location.origin:n.location.href,b=typeof g=="string"?g:Be(g);return V(w,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,w)}let v={get action(){return s},get location(){return e(n,i)},listen(g){if(l)throw new Error("A history only accepts one active listener");return n.addEventListener(gl,d),l=g,()=>{n.removeEventListener(gl,d),l=null}},createHref(g){return t(n,g)},createURL:f,encodeLocation(g){let w=f(g);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:h,replace:p,go(g){return i.go(g)}};return v}function X4(e){return e.index===!0}function en(e,t,r,a){return r===void 0&&(r=[]),a===void 0&&(a={}),e.map((n,o)=>{let i=[...r,o],s=typeof n.id=="string"?n.id:i.join("-");if(V(n.index!==!0||!n.children,"Cannot specify children on an index route"),V(!a[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),X4(n)){let l=re({},n,t(n),{id:s});return a[s]=l,l}else{let l=re({},n,t(n),{id:s,children:void 0});return a[s]=l,n.children&&(l.children=en(n.children,t,i,a)),l}})}function Ie(e,t,r){r===void 0&&(r="/");let a=typeof t=="string"?Le(t):t,n=ut(a.pathname||"/",r);if(n==null)return null;let o=Tl(e);Q4(o);let i=null;for(let s=0;i==null&&s<o.length;++s)i=lh(o[s],uh(n));return i}function Tl(e,t,r,a){t===void 0&&(t=[]),r===void 0&&(r=[]),a===void 0&&(a="");let n=(o,i,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};l.relativePath.startsWith("/")&&(V(l.relativePath.startsWith(a),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(a.length));let c=gt([a,l.relativePath]),u=r.concat(l);o.children&&o.children.length>0&&(V(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Tl(o.children,t,u,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:ih(c,o.index),routesMeta:u})};return e.forEach((o,i)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))n(o,i);else for(let l of Ll(o.path))n(o,i,l)}),t}function Ll(e){let t=e.split("/");if(t.length===0)return[];let[r,...a]=t,n=r.endsWith("?"),o=r.replace(/\?$/,"");if(a.length===0)return n?[o,""]:[o];let i=Ll(a.join("/")),s=[];return s.push(...i.map(l=>l===""?o:[o,l].join("/"))),n&&s.push(...i),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function Q4(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:sh(t.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}function ih(e,t){let r=e.split("/"),a=r.length;return r.some(vl)&&(a+=oh),t&&(a+=rh),r.filter(n=>!vl(n)).reduce((n,o)=>n+(eh.test(o)?th:o===""?ah:nh),a)}function sh(e,t){return e.length===t.length&&e.slice(0,-1).every((a,n)=>a===t[n])?e[e.length-1]-t[t.length-1]:0}function lh(e,t){let{routesMeta:r}=e,a={},n="/",o=[];for(let i=0;i<r.length;++i){let s=r[i],l=i===r.length-1,c=n==="/"?t:t.slice(n.length)||"/",u=rr({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},c);if(!u)return null;Object.assign(a,u.params);let d=s.route;o.push({params:a,pathname:gt([n,u.pathname]),pathnameBase:Pl(gt([n,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(n=gt([n,u.pathnameBase]))}return o}function wa(e,t){t===void 0&&(t={});let r=e;r.endsWith("*")&&r!=="*"&&!r.endsWith("/*")&&(Dt(!1,'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".')),r=r.replace(/\*$/,"/*"));let a=r.startsWith("/")?"/":"",n=i=>i==null?"":typeof i=="string"?i:String(i),o=r.split(/\/+/).map((i,s,l)=>{if(s===l.length-1&&i==="*")return n(t["*"]);let u=i.match(/^:(\w+)(\??)$/);if(u){let[,d,h]=u,p=t[d];return V(h==="?"||p!=null,'Missing ":'+d+'" param'),n(p)}return i.replace(/\?$/g,"")}).filter(i=>!!i);return a+o.join("/")}function rr(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,a]=ch(e.path,e.caseSensitive,e.end),n=t.match(r);if(!n)return null;let o=n[0],i=o.replace(/(.)\/+$/,"$1"),s=n.slice(1);return{params:a.reduce((c,u,d)=>{if(u==="*"){let h=s[d]||"";i=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return c[u]=dh(s[d]||"",u),c},{}),pathname:o,pathnameBase:i,pattern:e}}function ch(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Dt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,s)=>(a.push(s),"/([^\\/]+)"));return e.endsWith("*")?(a.push("*"),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?n+="\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,t?void 0:"i"),a]}function uh(e){try{return decodeURI(e)}catch(t){return Dt(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function dh(e,t){try{return decodeURIComponent(e)}catch(r){return Dt(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function ut(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,a=e.charAt(r);return a&&a!=="/"?null:e.slice(r)||"/"}function Wr(e,t){t===void 0&&(t="/");let{pathname:r,search:a="",hash:n=""}=typeof e=="string"?Le(e):e;return{pathname:r?r.startsWith("/")?r:hh(r,t):t,search:fh(a),hash:gh(n)}}function hh(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(n=>{n===".."?r.length>1&&r.pop():n!=="."&&r.push(n)}),r.length>1?r.join("/"):"/"}function qo(e,t,r,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Gr(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function xa(e,t,r,a){a===void 0&&(a=!1);let n;typeof e=="string"?n=Le(e):(n=re({},e),V(!n.pathname||!n.pathname.includes("?"),qo("?","pathname","search",n)),V(!n.pathname||!n.pathname.includes("#"),qo("#","pathname","hash",n)),V(!n.search||!n.search.includes("#"),qo("#","search","hash",n)));let o=e===""||n.pathname==="",i=o?"/":n.pathname,s;if(a||i==null)s=r;else{let d=t.length-1;if(i.startsWith("..")){let h=i.split("/");for(;h[0]==="..";)h.shift(),d-=1;n.pathname=h.join("/")}s=d>=0?t[d]:"/"}let l=Wr(n,s),c=i&&i!=="/"&&i.endsWith("/"),u=(o||i===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}function ph(e){return e===""||e.pathname===""?"/":typeof e=="string"?Le(e).pathname:e.pathname}function mh(e){return e instanceof Promise&&e._tracked===!0}function vh(e){if(!mh(e))return e;if(e._error)throw e._error;return e._data}function xe(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Ca(e){let t=e.window?e.window:typeof window<"u"?window:void 0,r=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",a=!r;V(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let n;if(e.mapRouteProperties)n=e.mapRouteProperties;else if(e.detectErrorBoundary){let y=e.detectErrorBoundary;n=x=>({hasErrorBoundary:y(x)})}else n=Vl;let o={},i=en(e.routes,n,void 0,o),s,l=e.basename||"/",c=re({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),u=null,d=new Set,h=null,p=null,f=null,v=e.hydrationData!=null,g=Ie(i,e.history.location,l),w=null;if(g==null){let y=Te(404,{pathname:e.history.location.pathname}),{matches:x,route:R}=Qn(i);g=x,w={[R.id]:y}}let b=!g.some(y=>y.route.lazy)&&(!g.some(y=>y.route.loader)||e.hydrationData!=null),C,m={historyAction:e.history.action,location:e.history.location,matches:g,initialized:b,navigation:Kn,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||w,fetchers:new Map,blockers:new Map},k=ue.Pop,B=!1,Z,ne=!1,Se=!1,ze=[],ke=[],le=new Map,_t=0,Tt=-1,mr=new Map,Lt=new Set,vr=new Map,Nr=new Map,Or=new Map,To=!1;function m4(){return u=e.history.listen(y=>{let{action:x,location:R,delta:I}=y;if(To){To=!1;return}Dt(Or.size===0||I!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let W=Ks({currentLocation:m.location,nextLocation:R,historyAction:x});if(W&&I!=null){To=!0,e.history.go(I*-1),Un(W,{state:"blocked",location:R,proceed(){Un(W,{state:"proceeding",proceed:void 0,reset:void 0,location:R}),e.history.go(I)},reset(){let q=new Map(m.blockers);q.set(W,Cr),Ue({blockers:q})}});return}return yr(x,R)}),m.initialized||yr(ue.Pop,m.location),C}function v4(){u&&u(),d.clear(),Z&&Z.abort(),m.fetchers.forEach((y,x)=>Po(x)),m.blockers.forEach((y,x)=>Js(x))}function y4(y){return d.add(y),()=>d.delete(y)}function Ue(y){m=re({},m,y),d.forEach(x=>x(m))}function qa(y,x){var R,I;let W=m.actionData!=null&&m.navigation.formMethod!=null&&Et(m.navigation.formMethod)&&m.navigation.state==="loading"&&((R=y.state)==null?void 0:R._isRedirect)!==!0,q;x.actionData?Object.keys(x.actionData).length>0?q=x.actionData:q=null:W?q=m.actionData:q=null;let z=x.loaderData?Rl(m.loaderData,x.loaderData,x.matches||[],x.errors):m.loaderData,F=m.blockers;F.size>0&&(F=new Map(F),F.forEach((me,Qe)=>F.set(Qe,Cr)));let N=B===!0||m.navigation.formMethod!=null&&Et(m.navigation.formMethod)&&((I=y.state)==null?void 0:I._isRedirect)!==!0;s&&(i=s,s=void 0),ne||k===ue.Pop||(k===ue.Push?e.history.push(y,y.state):k===ue.Replace&&e.history.replace(y,y.state)),Ue(re({},x,{actionData:q,loaderData:z,historyAction:k,location:y,initialized:!0,navigation:Kn,revalidation:"idle",restoreScrollPosition:Qs(y,x.matches||m.matches),preventScrollReset:N,blockers:F})),k=ue.Pop,B=!1,ne=!1,Se=!1,ze=[],ke=[]}async function js(y,x){if(typeof y=="number"){e.history.go(y);return}let R=zo(m.location,m.matches,l,c.v7_prependBasename,y,x==null?void 0:x.fromRouteId,x==null?void 0:x.relative),{path:I,submission:W,error:q}=yl(c.v7_normalizeFormMethod,!1,R,x),z=m.location,F=tr(m.location,I,x&&x.state);F=re({},F,e.history.encodeLocation(F));let N=x&&x.replace!=null?x.replace:void 0,me=ue.Push;N===!0?me=ue.Replace:N===!1||W!=null&&Et(W.formMethod)&&W.formAction===m.location.pathname+m.location.search&&(me=ue.Replace);let Qe=x&&"preventScrollReset"in x?x.preventScrollReset===!0:void 0,pe=Ks({currentLocation:z,nextLocation:F,historyAction:me});if(pe){Un(pe,{state:"blocked",location:F,proceed(){Un(pe,{state:"proceeding",proceed:void 0,reset:void 0,location:F}),js(y,x)},reset(){let _e=new Map(m.blockers);_e.set(pe,Cr),Ue({blockers:_e})}});return}return await yr(me,F,{submission:W,pendingError:q,preventScrollReset:Qe,replace:x&&x.replace})}function w4(){if(Lo(),Ue({revalidation:"loading"}),m.navigation.state!=="submitting"){if(m.navigation.state==="idle"){yr(m.historyAction,m.location,{startUninterruptedRevalidation:!0});return}yr(k||m.historyAction,m.navigation.location,{overrideNavigation:m.navigation})}}async function yr(y,x,R){Z&&Z.abort(),Z=null,k=y,ne=(R&&R.startUninterruptedRevalidation)===!0,M4(m.location,m.matches),B=(R&&R.preventScrollReset)===!0;let I=s||i,W=R&&R.overrideNavigation,q=Ie(I,x,l);if(!q){let _e=Te(404,{pathname:x.pathname}),{matches:je,route:$r}=Qn(I);Zo(),qa(x,{matches:je,loaderData:{},errors:{[$r.id]:_e}});return}if(m.initialized&&!Se&&Eh(m.location,x)&&!(R&&R.submission&&Et(R.submission.formMethod))){qa(x,{matches:q});return}Z=new AbortController;let z=Xa(e.history,x,Z.signal,R&&R.submission),F,N;if(R&&R.pendingError)N={[Ur(q).route.id]:R.pendingError};else if(R&&R.submission&&Et(R.submission.formMethod)){let _e=await x4(z,x,R.submission,q,{replace:R.replace});if(_e.shortCircuited)return;F=_e.pendingActionData,N=_e.pendingActionError,W=Jn(x,R.submission),z=new Request(z.url,{signal:z.signal})}let{shortCircuited:me,loaderData:Qe,errors:pe}=await C4(z,x,q,W,R&&R.submission,R&&R.fetcherSubmission,R&&R.replace,F,N);me||(Z=null,qa(x,re({matches:q},F?{actionData:F}:{},{loaderData:Qe,errors:pe})))}async function x4(y,x,R,I,W){W===void 0&&(W={}),Lo();let q=kh(x,R);Ue({navigation:q});let z,F=tn(I,x);if(!F.route.action&&!F.route.lazy)z={type:be.error,error:Te(405,{method:y.method,pathname:x.pathname,routeId:F.route.id})};else if(z=await Fr("action",y,F,I,o,n,l),y.signal.aborted)return{shortCircuited:!0};if(qr(z)){let N;return W&&W.replace!=null?N=W.replace:N=z.location===m.location.pathname+m.location.search,await za(m,z,{submission:R,replace:N}),{shortCircuited:!0}}if(jr(z)){let N=Ur(I,F.route.id);return(W&&W.replace)!==!0&&(k=ue.Push),{pendingActionData:{},pendingActionError:{[N.route.id]:z.error}}}if(Sr(z))throw Te(400,{type:"defer-action"});return{pendingActionData:{[F.route.id]:z.data}}}async function C4(y,x,R,I,W,q,z,F,N){let me=I||Jn(x,W),Qe=W||q||kl(me),pe=s||i,[_e,je]=wl(e.history,m,R,Qe,x,Se,ze,ke,vr,Lt,pe,l,F,N);if(Zo(fe=>!(R&&R.some(Pt=>Pt.route.id===fe))||_e&&_e.some(Pt=>Pt.route.id===fe)),Tt=++_t,_e.length===0&&je.length===0){let fe=Gs();return qa(x,re({matches:R,loaderData:{},errors:N||null},F?{actionData:F}:{},fe?{fetchers:new Map(m.fetchers)}:{})),{shortCircuited:!0}}if(!ne){je.forEach(Pt=>{let xr=m.fetchers.get(Pt.key),No=Qa(void 0,xr?xr.data:void 0);m.fetchers.set(Pt.key,No)});let fe=F||m.actionData;Ue(re({navigation:me},fe?Object.keys(fe).length===0?{actionData:null}:{actionData:fe}:{},je.length>0?{fetchers:new Map(m.fetchers)}:{}))}je.forEach(fe=>{le.has(fe.key)&&wr(fe.key),fe.controller&&le.set(fe.key,fe.controller)});let $r=()=>je.forEach(fe=>wr(fe.key));Z&&Z.signal.addEventListener("abort",$r);let{results:Br,loaderResults:Wa,fetcherResults:Io}=await zs(m.matches,R,_e,je,y);if(y.signal.aborted)return{shortCircuited:!0};Z&&Z.signal.removeEventListener("abort",$r),je.forEach(fe=>le.delete(fe.key));let Qt=El(Br);if(Qt){if(Qt.idx>=_e.length){let fe=je[Qt.idx-_e.length].key;Lt.add(fe)}return await za(m,Qt.result,{replace:z}),{shortCircuited:!0}}let{loaderData:er,errors:jn}=bl(m,R,_e,Wa,N,je,Io,Nr);Nr.forEach((fe,Pt)=>{fe.subscribe(xr=>{(xr||fe.done)&&Nr.delete(Pt)})});let Ho=Gs(),Vo=Ys(Tt),Do=Ho||Vo||je.length>0;return re({loaderData:er,errors:jn},Do?{fetchers:new Map(m.fetchers)}:{})}function qs(y){return m.fetchers.get(y)||Il}function S4(y,x,R,I){if(a)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");le.has(y)&&wr(y);let W=s||i,q=zo(m.location,m.matches,l,c.v7_prependBasename,R,x,I==null?void 0:I.relative),z=Ie(W,q,l);if(!z){Fn(y,x,Te(404,{pathname:q}));return}let{path:F,submission:N,error:me}=yl(c.v7_normalizeFormMethod,!0,q,I);if(me){Fn(y,x,me);return}let Qe=tn(z,F);if(B=(I&&I.preventScrollReset)===!0,N&&Et(N.formMethod)){b4(y,x,F,Qe,z,N);return}vr.set(y,{routeId:x,path:F}),R4(y,x,F,Qe,z,N)}async function b4(y,x,R,I,W,q){if(Lo(),vr.delete(y),!I.route.action&&!I.route.lazy){let $e=Te(405,{method:q.formMethod,pathname:R,routeId:x});Fn(y,x,$e);return}let z=m.fetchers.get(y),F=_h(q,z);m.fetchers.set(y,F),Ue({fetchers:new Map(m.fetchers)});let N=new AbortController,me=Xa(e.history,R,N.signal,q);le.set(y,N);let Qe=_t,pe=await Fr("action",me,I,W,o,n,l);if(me.signal.aborted){le.get(y)===N&&le.delete(y);return}if(qr(pe))if(le.delete(y),Tt>Qe){let $e=va(void 0);m.fetchers.set(y,$e),Ue({fetchers:new Map(m.fetchers)});return}else{Lt.add(y);let $e=Qa(q);return m.fetchers.set(y,$e),Ue({fetchers:new Map(m.fetchers)}),za(m,pe,{submission:q,isFetchActionRedirect:!0})}if(jr(pe)){Fn(y,x,pe.error);return}if(Sr(pe))throw Te(400,{type:"defer-action"});let _e=m.navigation.location||m.location,je=Xa(e.history,_e,N.signal),$r=s||i,Br=m.navigation.state!=="idle"?Ie($r,m.navigation.location,l):m.matches;V(Br,"Didn't find any matches after fetcher action");let Wa=++_t;mr.set(y,Wa);let Io=Qa(q,pe.data);m.fetchers.set(y,Io);let[Qt,er]=wl(e.history,m,Br,q,_e,Se,ze,ke,vr,Lt,$r,l,{[I.route.id]:pe.data},void 0);er.filter($e=>$e.key!==y).forEach($e=>{let Ga=$e.key,el=m.fetchers.get(Ga),_4=Qa(void 0,el?el.data:void 0);m.fetchers.set(Ga,_4),le.has(Ga)&&wr(Ga),$e.controller&&le.set(Ga,$e.controller)}),Ue({fetchers:new Map(m.fetchers)});let jn=()=>er.forEach($e=>wr($e.key));N.signal.addEventListener("abort",jn);let{results:Ho,loaderResults:Vo,fetcherResults:Do}=await zs(m.matches,Br,Qt,er,je);if(N.signal.aborted)return;N.signal.removeEventListener("abort",jn),mr.delete(y),le.delete(y),er.forEach($e=>le.delete($e.key));let fe=El(Ho);if(fe){if(fe.idx>=Qt.length){let $e=er[fe.idx-Qt.length].key;Lt.add($e)}return za(m,fe.result)}let{loaderData:Pt,errors:xr}=bl(m,m.matches,Qt,Vo,void 0,er,Do,Nr);if(m.fetchers.has(y)){let $e=va(pe.data);m.fetchers.set(y,$e)}let No=Ys(Wa);m.navigation.state==="loading"&&Wa>Tt?(V(k,"Expected pending action"),Z&&Z.abort(),qa(m.navigation.location,{matches:Br,loaderData:Pt,errors:xr,fetchers:new Map(m.fetchers)})):(Ue(re({errors:xr,loaderData:Rl(m.loaderData,Pt,Br,xr)},No||er.length>0?{fetchers:new Map(m.fetchers)}:{})),Se=!1)}async function R4(y,x,R,I,W,q){let z=m.fetchers.get(y),F=Qa(q,z?z.data:void 0);m.fetchers.set(y,F),Ue({fetchers:new Map(m.fetchers)});let N=new AbortController,me=Xa(e.history,R,N.signal);le.set(y,N);let Qe=_t,pe=await Fr("loader",me,I,W,o,n,l);if(Sr(pe)&&(pe=await Fl(pe,me.signal,!0)||pe),le.get(y)===N&&le.delete(y),me.signal.aborted)return;if(qr(pe))if(Tt>Qe){let je=va(void 0);m.fetchers.set(y,je),Ue({fetchers:new Map(m.fetchers)});return}else{Lt.add(y),await za(m,pe);return}if(jr(pe)){let je=Ur(m.matches,x);m.fetchers.delete(y),Ue({fetchers:new Map(m.fetchers),errors:{[je.route.id]:pe.error}});return}V(!Sr(pe),"Unhandled fetcher deferred data");let _e=va(pe.data);m.fetchers.set(y,_e),Ue({fetchers:new Map(m.fetchers)})}async function za(y,x,R){let{submission:I,replace:W,isFetchActionRedirect:q}=R===void 0?{}:R;x.revalidate&&(Se=!0);let z=tr(y.location,x.location,re({_isRedirect:!0},q?{_isFetchActionRedirect:!0}:{}));if(V(z,"Expected a location on the redirect navigation"),Hl.test(x.location)&&r){let me=e.history.createURL(x.location),Qe=ut(me.pathname,l)==null;if(t.location.origin!==me.origin||Qe){W?t.location.replace(x.location):t.location.assign(x.location);return}}Z=null;let F=W===!0?ue.Replace:ue.Push,N=I||kl(y.navigation);if(Sh.has(x.status)&&N&&Et(N.formMethod))await yr(F,z,{submission:re({},N,{formAction:x.location}),preventScrollReset:B});else if(q)await yr(F,z,{overrideNavigation:Jn(z),fetcherSubmission:N,preventScrollReset:B});else{let me=Jn(z,N);await yr(F,z,{overrideNavigation:me,preventScrollReset:B})}}async function zs(y,x,R,I,W){let q=await Promise.all([...R.map(N=>Fr("loader",W,N,x,o,n,l)),...I.map(N=>N.matches&&N.match&&N.controller?Fr("loader",Xa(e.history,N.path,N.controller.signal),N.match,N.matches,o,n,l):{type:be.error,error:Te(404,{pathname:N.path})})]),z=q.slice(0,R.length),F=q.slice(R.length);return await Promise.all([Ml(y,R,z,z.map(()=>W.signal),!1,m.loaderData),Ml(y,I.map(N=>N.match),F,I.map(N=>N.controller?N.controller.signal:null),!0)]),{results:q,loaderResults:z,fetcherResults:F}}function Lo(){Se=!0,ze.push(...Zo()),vr.forEach((y,x)=>{le.has(x)&&(ke.push(x),wr(x))})}function Fn(y,x,R){let I=Ur(m.matches,x);Po(y),Ue({errors:{[I.route.id]:R},fetchers:new Map(m.fetchers)})}function Po(y){let x=m.fetchers.get(y);le.has(y)&&!(x&&x.state==="loading"&&mr.has(y))&&wr(y),vr.delete(y),mr.delete(y),Lt.delete(y),m.fetchers.delete(y)}function wr(y){let x=le.get(y);V(x,"Expected fetch controller: "+y),x.abort(),le.delete(y)}function Ws(y){for(let x of y){let R=qs(x),I=va(R.data);m.fetchers.set(x,I)}}function Gs(){let y=[],x=!1;for(let R of Lt){let I=m.fetchers.get(R);V(I,"Expected fetcher: "+R),I.state==="loading"&&(Lt.delete(R),y.push(R),x=!0)}return Ws(y),x}function Ys(y){let x=[];for(let[R,I]of mr)if(I<y){let W=m.fetchers.get(R);V(W,"Expected fetcher: "+R),W.state==="loading"&&(wr(R),mr.delete(R),x.push(R))}return Ws(x),x.length>0}function E4(y,x){let R=m.blockers.get(y)||Cr;return Or.get(y)!==x&&Or.set(y,x),R}function Js(y){m.blockers.delete(y),Or.delete(y)}function Un(y,x){let R=m.blockers.get(y)||Cr;V(R.state==="unblocked"&&x.state==="blocked"||R.state==="blocked"&&x.state==="blocked"||R.state==="blocked"&&x.state==="proceeding"||R.state==="blocked"&&x.state==="unblocked"||R.state==="proceeding"&&x.state==="unblocked","Invalid blocker state transition: "+R.state+" -> "+x.state);let I=new Map(m.blockers);I.set(y,x),Ue({blockers:I})}function Ks(y){let{currentLocation:x,nextLocation:R,historyAction:I}=y;if(Or.size===0)return;Or.size>1&&Dt(!1,"A router only supports one blocker at a time");let W=Array.from(Or.entries()),[q,z]=W[W.length-1],F=m.blockers.get(q);if(!(F&&F.state==="proceeding")&&z({currentLocation:x,nextLocation:R,historyAction:I}))return q}function Zo(y){let x=[];return Nr.forEach((R,I)=>{(!y||y(I))&&(R.cancel(),x.push(I),Nr.delete(I))}),x}function A4(y,x,R){if(h=y,f=x,p=R||null,!v&&m.navigation===Kn){v=!0;let I=Qs(m.location,m.matches);I!=null&&Ue({restoreScrollPosition:I})}return()=>{h=null,f=null,p=null}}function Xs(y,x){return p&&p(y,x.map(I=>Mh(I,m.loaderData)))||y.key}function M4(y,x){if(h&&f){let R=Xs(y,x);h[R]=f()}}function Qs(y,x){if(h){let R=Xs(y,x),I=h[R];if(typeof I=="number")return I}return null}function k4(y){o={},s=en(y,n,void 0,o)}return C={get basename(){return l},get state(){return m},get routes(){return i},initialize:m4,subscribe:y4,enableScrollRestoration:A4,navigate:js,fetch:S4,revalidate:w4,createHref:y=>e.history.createHref(y),encodeLocation:y=>e.history.encodeLocation(y),getFetcher:qs,deleteFetcher:Po,dispose:v4,getBlocker:E4,deleteBlocker:Js,_internalFetchControllers:le,_internalActiveDeferreds:Nr,_internalSetRoutes:k4},C}function Yo(e,t){V(e.length>0,"You must provide a non-empty routes array to createStaticHandler");let r={},a=(t?t.basename:null)||"/",n;if(t!=null&&t.mapRouteProperties)n=t.mapRouteProperties;else if(t!=null&&t.detectErrorBoundary){let d=t.detectErrorBoundary;n=h=>({hasErrorBoundary:d(h)})}else n=Vl;let o=en(e,n,void 0,r);async function i(d,h){let{requestContext:p}=h===void 0?{}:h,f=new URL(d.url),v=d.method,g=tr("",Be(f),null,"default"),w=Ie(o,g,a);if(!Go(v)&&v!=="HEAD"){let C=Te(405,{method:v}),{matches:m,route:k}=Qn(o);return{basename:a,location:g,matches:m,loaderData:{},actionData:null,errors:{[k.id]:C},statusCode:C.status,loaderHeaders:{},actionHeaders:{},activeDeferreds:null}}else if(!w){let C=Te(404,{pathname:g.pathname}),{matches:m,route:k}=Qn(o);return{basename:a,location:g,matches:m,loaderData:{},actionData:null,errors:{[k.id]:C},statusCode:C.status,loaderHeaders:{},actionHeaders:{},activeDeferreds:null}}let b=await l(d,g,w,p);return ya(b)?b:re({location:g,basename:a},b)}async function s(d,h){let{routeId:p,requestContext:f}=h===void 0?{}:h,v=new URL(d.url),g=d.method,w=tr("",Be(v),null,"default"),b=Ie(o,w,a);if(!Go(g)&&g!=="HEAD"&&g!=="OPTIONS")throw Te(405,{method:g});if(!b)throw Te(404,{pathname:w.pathname});let C=p?b.find(Z=>Z.route.id===p):tn(b,w);if(p&&!C)throw Te(403,{pathname:w.pathname,routeId:p});if(!C)throw Te(404,{pathname:w.pathname});let m=await l(d,w,b,f,C);if(ya(m))return m;let k=m.errors?Object.values(m.errors)[0]:void 0;if(k!==void 0)throw k;if(m.actionData)return Object.values(m.actionData)[0];if(m.loaderData){var B;let Z=Object.values(m.loaderData)[0];return(B=m.activeDeferreds)!=null&&B[C.route.id]&&(Z[rn]=m.activeDeferreds[C.route.id]),Z}}async function l(d,h,p,f,v){V(d.signal,"query()/queryRoute() requests must contain an AbortController signal");try{if(Et(d.method.toLowerCase()))return await c(d,p,v||tn(p,h),f,v!=null);let g=await u(d,p,f,v);return ya(g)?g:re({},g,{actionData:null,actionHeaders:{}})}catch(g){if(Ah(g)){if(g.type===be.error&&!Al(g.response))throw g.response;return g.response}if(Al(g))return g;throw g}}async function c(d,h,p,f,v){let g;if(!p.route.action&&!p.route.lazy){let C=Te(405,{method:d.method,pathname:new URL(d.url).pathname,routeId:p.route.id});if(v)throw C;g={type:be.error,error:C}}else if(g=await Fr("action",d,p,h,r,n,a,{isStaticRequest:!0,isRouteRequest:v,requestContext:f}),d.signal.aborted){let C=v?"queryRoute":"query";throw new Error(C+"() call aborted")}if(qr(g))throw new Response(null,{status:g.status,headers:{Location:g.location}});if(Sr(g)){let C=Te(400,{type:"defer-action"});if(v)throw C;g={type:be.error,error:C}}if(v){if(jr(g))throw g.error;return{matches:[p],loaderData:{},actionData:{[p.route.id]:g.data},errors:null,statusCode:200,loaderHeaders:{},actionHeaders:{},activeDeferreds:null}}if(jr(g)){let C=Ur(h,p.route.id),m=await u(d,h,f,void 0,{[C.route.id]:g.error});return re({},m,{statusCode:xe(g.error)?g.error.status:500,actionData:null,actionHeaders:re({},g.headers?{[p.route.id]:g.headers}:{})})}let w=new Request(d.url,{headers:d.headers,redirect:d.redirect,signal:d.signal}),b=await u(w,h,f);return re({},b,g.statusCode?{statusCode:g.statusCode}:{},{actionData:{[p.route.id]:g.data},actionHeaders:re({},g.headers?{[p.route.id]:g.headers}:{})})}async function u(d,h,p,f,v){let g=f!=null;if(g&&!(f!=null&&f.route.loader)&&!(f!=null&&f.route.lazy))throw Te(400,{method:d.method,pathname:new URL(d.url).pathname,routeId:f==null?void 0:f.route.id});let b=(f?[f]:Dl(h,Object.keys(v||{})[0])).filter(Z=>Z.route.loader||Z.route.lazy);if(b.length===0)return{matches:h,loaderData:h.reduce((Z,ne)=>Object.assign(Z,{[ne.route.id]:null}),{}),errors:v||null,statusCode:200,loaderHeaders:{},activeDeferreds:null};let C=await Promise.all([...b.map(Z=>Fr("loader",d,Z,h,r,n,a,{isStaticRequest:!0,isRouteRequest:g,requestContext:p}))]);if(d.signal.aborted){let Z=g?"queryRoute":"query";throw new Error(Z+"() call aborted")}let m=new Map,k=Ol(h,b,C,v,m),B=new Set(b.map(Z=>Z.route.id));return h.forEach(Z=>{B.has(Z.route.id)||(k.loaderData[Z.route.id]=null)}),re({},k,{matches:h,activeDeferreds:m.size>0?Object.fromEntries(m.entries()):null})}return{dataRoutes:o,query:i,queryRoute:s}}function Jo(e,t,r){return re({},t,{statusCode:500,errors:{[t._deepestRenderedBoundaryId||e[0].id]:r}})}function bh(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function zo(e,t,r,a,n,o,i){let s,l;if(o!=null&&i!=="path"){s=[];for(let u of t)if(s.push(u),u.route.id===o){l=u;break}}else s=t,l=t[t.length-1];let c=xa(n||".",Gr(s).map(u=>u.pathnameBase),ut(e.pathname,r)||e.pathname,i==="path");return n==null&&(c.search=e.search,c.hash=e.hash),(n==null||n===""||n===".")&&l&&l.route.index&&!Ko(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),a&&r!=="/"&&(c.pathname=c.pathname==="/"?r:gt([r,c.pathname])),Be(c)}function yl(e,t,r,a){if(!a||!bh(a))return{path:r};if(a.formMethod&&!Go(a.formMethod))return{path:r,error:Te(405,{method:a.formMethod})};let n=()=>({path:r,error:Te(400,{type:"invalid-body"})}),o=a.formMethod||"get",i=e?o.toUpperCase():o.toLowerCase(),s=$l(r);if(a.body!==void 0){if(a.formEncType==="text/plain"){if(!Et(i))return n();let h=typeof a.body=="string"?a.body:a.body instanceof FormData||a.body instanceof URLSearchParams?Array.from(a.body.entries()).reduce((p,f)=>{let[v,g]=f;return""+p+v+"="+g+`
`},""):String(a.body);return{path:r,submission:{formMethod:i,formAction:s,formEncType:a.formEncType,formData:void 0,json:void 0,text:h}}}else if(a.formEncType==="application/json"){if(!Et(i))return n();try{let h=typeof a.body=="string"?JSON.parse(a.body):a.body;return{path:r,submission:{formMethod:i,formAction:s,formEncType:a.formEncType,formData:void 0,json:h,text:void 0}}}catch{return n()}}}V(typeof FormData=="function","FormData is not available in this environment");let l,c;if(a.formData)l=Wo(a.formData),c=a.formData;else if(a.body instanceof FormData)l=Wo(a.body),c=a.body;else if(a.body instanceof URLSearchParams)l=a.body,c=Sl(l);else if(a.body==null)l=new URLSearchParams,c=new FormData;else try{l=new URLSearchParams(a.body),c=Sl(l)}catch{return n()}let u={formMethod:i,formAction:s,formEncType:a&&a.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Et(u.formMethod))return{path:r,submission:u};let d=Le(r);return t&&d.search&&Ko(d.search)&&l.append("index",""),d.search="?"+l,{path:Be(d),submission:u}}function Dl(e,t){let r=e;if(t){let a=e.findIndex(n=>n.route.id===t);a>=0&&(r=e.slice(0,a))}return r}function wl(e,t,r,a,n,o,i,s,l,c,u,d,h,p){let f=p?Object.values(p)[0]:h?Object.values(h)[0]:void 0,v=e.createURL(t.location),g=e.createURL(n),w=p?Object.keys(p)[0]:void 0,C=Dl(r,w).filter((k,B)=>{if(k.route.lazy)return!0;if(k.route.loader==null)return!1;if(Rh(t.loaderData,t.matches[B],k)||i.some(Se=>Se===k.route.id))return!0;let Z=t.matches[B],ne=k;return xl(k,re({currentUrl:v,currentParams:Z.params,nextUrl:g,nextParams:ne.params},a,{actionResult:f,defaultShouldRevalidate:o||v.pathname+v.search===g.pathname+g.search||v.search!==g.search||Nl(Z,ne)}))}),m=[];return l.forEach((k,B)=>{if(!r.some(ke=>ke.route.id===k.routeId))return;let Z=Ie(u,k.path,d);if(!Z){m.push({key:B,routeId:k.routeId,path:k.path,matches:null,match:null,controller:null});return}let ne=t.fetchers.get(B),Se=tn(Z,k.path),ze=!1;c.has(B)?ze=!1:s.includes(B)?ze=!0:ne&&ne.state!=="idle"&&ne.data===void 0?ze=o:ze=xl(Se,re({currentUrl:v,currentParams:t.matches[t.matches.length-1].params,nextUrl:g,nextParams:r[r.length-1].params},a,{actionResult:f,defaultShouldRevalidate:o})),ze&&m.push({key:B,routeId:k.routeId,path:k.path,matches:Z,match:Se,controller:new AbortController})}),[C,m]}function Rh(e,t,r){let a=!t||r.route.id!==t.route.id,n=e[r.route.id]===void 0;return a||n}function Nl(e,t){let r=e.route.path;return e.pathname!==t.pathname||r!=null&&r.endsWith("*")&&e.params["*"]!==t.params["*"]}function xl(e,t){if(e.route.shouldRevalidate){let r=e.route.shouldRevalidate(t);if(typeof r=="boolean")return r}return t.defaultShouldRevalidate}async function Cl(e,t,r){if(!e.lazy)return;let a=await e.lazy();if(!e.lazy)return;let n=r[e.id];V(n,"No route found in manifest");let o={};for(let i in a){let l=n[i]!==void 0&&i!=="hasErrorBoundary";Dt(!l,'Route "'+n.id+'" has a static property "'+i+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+i+'" will be ignored.')),!l&&!K4.has(i)&&(o[i]=a[i])}Object.assign(n,o),Object.assign(n,re({},t(n),{lazy:void 0}))}async function Fr(e,t,r,a,n,o,i,s){s===void 0&&(s={});let l,c,u,d=f=>{let v,g=new Promise((w,b)=>v=b);return u=()=>v(),t.signal.addEventListener("abort",u),Promise.race([f({request:t,params:r.params,context:s.requestContext}),g])};try{let f=r.route[e];if(r.route.lazy)if(f)c=(await Promise.all([d(f),Cl(r.route,o,n)]))[0];else if(await Cl(r.route,o,n),f=r.route[e],f)c=await d(f);else if(e==="action"){let v=new URL(t.url),g=v.pathname+v.search;throw Te(405,{method:t.method,pathname:g,routeId:r.route.id})}else return{type:be.data,data:void 0};else if(f)c=await d(f);else{let v=new URL(t.url),g=v.pathname+v.search;throw Te(404,{pathname:g})}V(c!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+r.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(f){l=be.error,c=f}finally{u&&t.signal.removeEventListener("abort",u)}if(ya(c)){let f=c.status;if(Ch.has(f)){let w=c.headers.get("Location");if(V(w,"Redirects returned/thrown from loaders/actions must have a Location header"),!Hl.test(w))w=zo(new URL(t.url),a.slice(0,a.indexOf(r)+1),i,!0,w);else if(!s.isStaticRequest){let b=new URL(t.url),C=w.startsWith("//")?new URL(b.protocol+w):new URL(w),m=ut(C.pathname,i)!=null;C.origin===b.origin&&m&&(w=C.pathname+C.search+C.hash)}if(s.isStaticRequest)throw c.headers.set("Location",w),c;return{type:be.redirect,status:f,location:w,revalidate:c.headers.get("X-Remix-Revalidate")!==null}}if(s.isRouteRequest)throw{type:l||be.data,response:c};let v,g=c.headers.get("Content-Type");return g&&/\bapplication\/json\b/.test(g)?v=await c.json():v=await c.text(),l===be.error?{type:l,error:new zr(f,c.statusText,v),headers:c.headers}:{type:be.data,data:v,statusCode:c.status,headers:c.headers}}if(l===be.error)return{type:l,error:c};if(Bl(c)){var h,p;return{type:be.deferred,deferredData:c,statusCode:(h=c.init)==null?void 0:h.status,headers:((p=c.init)==null?void 0:p.headers)&&new Headers(c.init.headers)}}return{type:be.data,data:c}}function Xa(e,t,r,a){let n=e.createURL($l(t)).toString(),o={signal:r};if(a&&Et(a.formMethod)){let{formMethod:i,formEncType:s}=a;o.method=i.toUpperCase(),s==="application/json"?(o.headers=new Headers({"Content-Type":s}),o.body=JSON.stringify(a.json)):s==="text/plain"?o.body=a.text:s==="application/x-www-form-urlencoded"&&a.formData?o.body=Wo(a.formData):o.body=a.formData}return new Request(n,o)}function Wo(e){let t=new URLSearchParams;for(let[r,a]of e.entries())t.append(r,typeof a=="string"?a:a.name);return t}function Sl(e){let t=new FormData;for(let[r,a]of e.entries())t.append(r,a);return t}function Ol(e,t,r,a,n){let o={},i=null,s,l=!1,c={};return r.forEach((u,d)=>{let h=t[d].route.id;if(V(!qr(u),"Cannot handle redirect results in processLoaderData"),jr(u)){let p=Ur(e,h),f=u.error;a&&(f=Object.values(a)[0],a=void 0),i=i||{},i[p.route.id]==null&&(i[p.route.id]=f),o[h]=void 0,l||(l=!0,s=xe(u.error)?u.error.status:500),u.headers&&(c[h]=u.headers)}else Sr(u)?(n.set(h,u.deferredData),o[h]=u.deferredData.data):o[h]=u.data,u.statusCode!=null&&u.statusCode!==200&&!l&&(s=u.statusCode),u.headers&&(c[h]=u.headers)}),a&&(i=a,o[Object.keys(a)[0]]=void 0),{loaderData:o,errors:i,statusCode:s||200,loaderHeaders:c}}function bl(e,t,r,a,n,o,i,s){let{loaderData:l,errors:c}=Ol(t,r,a,n,s);for(let u=0;u<o.length;u++){let{key:d,match:h,controller:p}=o[u];V(i!==void 0&&i[u]!==void 0,"Did not find corresponding fetcher result");let f=i[u];if(!(p&&p.signal.aborted))if(jr(f)){let v=Ur(e.matches,h==null?void 0:h.route.id);c&&c[v.route.id]||(c=re({},c,{[v.route.id]:f.error})),e.fetchers.delete(d)}else if(qr(f))V(!1,"Unhandled fetcher revalidation redirect");else if(Sr(f))V(!1,"Unhandled fetcher deferred data");else{let v=va(f.data);e.fetchers.set(d,v)}}return{loaderData:l,errors:c}}function Rl(e,t,r,a){let n=re({},t);for(let o of r){let i=o.route.id;if(t.hasOwnProperty(i)?t[i]!==void 0&&(n[i]=t[i]):e[i]!==void 0&&o.route.loader&&(n[i]=e[i]),a&&a.hasOwnProperty(i))break}return n}function Ur(e,t){return(t?e.slice(0,e.findIndex(a=>a.route.id===t)+1):[...e]).reverse().find(a=>a.route.hasErrorBoundary===!0)||e[0]}function Qn(e){let t=e.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Te(e,t){let{pathname:r,routeId:a,method:n,type:o}=t===void 0?{}:t,i="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(i="Bad Request",n&&r&&a?s="You made a "+n+' request to "'+r+'" but '+('did not provide a `loader` for route "'+a+'", ')+"so there is no way to handle the request.":o==="defer-action"?s="defer() is not supported in actions":o==="invalid-body"&&(s="Unable to encode submission body")):e===403?(i="Forbidden",s='Route "'+a+'" does not match URL "'+r+'"'):e===404?(i="Not Found",s='No route matches URL "'+r+'"'):e===405&&(i="Method Not Allowed",n&&r&&a?s="You made a "+n.toUpperCase()+' request to "'+r+'" but '+('did not provide an `action` for route "'+a+'", ')+"so there is no way to handle the request.":n&&(s='Invalid request method "'+n.toUpperCase()+'"')),new zr(e||500,i,new Error(s),!0)}function El(e){for(let t=e.length-1;t>=0;t--){let r=e[t];if(qr(r))return{result:r,idx:t}}}function $l(e){let t=typeof e=="string"?Le(e):e;return Be(re({},t,{hash:""}))}function Eh(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Sr(e){return e.type===be.deferred}function jr(e){return e.type===be.error}function qr(e){return(e&&e.type)===be.redirect}function Bl(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function ya(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Al(e){if(!ya(e))return!1;let t=e.status,r=e.headers.get("Location");return t>=300&&t<=399&&r!=null}function Ah(e){return e&&ya(e.response)&&(e.type===be.data||be.error)}function Go(e){return xh.has(e.toLowerCase())}function Et(e){return yh.has(e.toLowerCase())}async function Ml(e,t,r,a,n,o){for(let i=0;i<r.length;i++){let s=r[i],l=t[i];if(!l)continue;let c=e.find(d=>d.route.id===l.route.id),u=c!=null&&!Nl(c,l)&&(o&&o[l.route.id])!==void 0;if(Sr(s)&&(n||u)){let d=a[i];V(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await Fl(s,d,n).then(h=>{h&&(r[i]=h||r[i])})}}}async function Fl(e,t,r){if(r===void 0&&(r=!1),!await e.deferredData.resolveData(t)){if(r)try{return{type:be.data,data:e.deferredData.unwrappedData}}catch(n){return{type:be.error,error:n}}return{type:be.data,data:e.deferredData.data}}}function Ko(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Mh(e,t){let{route:r,pathname:a,params:n}=e;return{id:r.id,pathname:a,params:n,data:t[r.id],handle:r.handle}}function tn(e,t){let r=typeof t=="string"?Le(t).search:t.search;if(e[e.length-1].route.index&&Ko(r||""))return e[e.length-1];let a=Gr(e);return a[a.length-1]}function kl(e){let{formMethod:t,formAction:r,formEncType:a,text:n,formData:o,json:i}=e;if(!(!t||!r||!a)){if(n!=null)return{formMethod:t,formAction:r,formEncType:a,formData:void 0,json:void 0,text:n};if(o!=null)return{formMethod:t,formAction:r,formEncType:a,formData:o,json:void 0,text:void 0};if(i!==void 0)return{formMethod:t,formAction:r,formEncType:a,formData:void 0,json:i,text:void 0}}}function Jn(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function kh(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Qa(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}function _h(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0," _hasFetcherDoneAnything ":!0}}function va(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}var ue,gl,be,K4,eh,th,rh,ah,nh,oh,vl,gt,Pl,fh,gh,Nt,Zt,Xn,Yr,Jr,zr,Zl,yh,wh,xh,Ch,Sh,Kn,Il,Cr,Hl,Vl,rn,ar=zn(()=>{(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ue||(ue={}));gl="popstate";(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(be||(be={}));K4=new Set(["lazy","caseSensitive","path","id","index","children"]);eh=/^:\w+$/,th=3,rh=2,ah=1,nh=10,oh=-2,vl=e=>e==="*";gt=e=>e.join("/").replace(/\/\/+/g,"/"),Pl=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),fh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,gh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Nt=function(t,r){r===void 0&&(r={});let a=typeof r=="number"?{status:r}:r,n=new Headers(a.headers);return n.has("Content-Type")||n.set("Content-Type","application/json; charset=utf-8"),new Response(JSON.stringify(t),re({},a,{headers:n}))},Zt=class extends Error{},Xn=class{constructor(t,r){this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],V(t&&typeof t=="object"&&!Array.isArray(t),"defer() only accepts plain objects");let a;this.abortPromise=new Promise((o,i)=>a=i),this.controller=new AbortController;let n=()=>a(new Zt("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",n),this.controller.signal.addEventListener("abort",n),this.data=Object.entries(t).reduce((o,i)=>{let[s,l]=i;return Object.assign(o,{[s]:this.trackPromise(s,l)})},{}),this.done&&this.unlistenAbortSignal(),this.init=r}trackPromise(t,r){if(!(r instanceof Promise))return r;this.deferredKeys.push(t),this.pendingKeysSet.add(t);let a=Promise.race([r,this.abortPromise]).then(n=>this.onSettle(a,t,void 0,n),n=>this.onSettle(a,t,n));return a.catch(()=>{}),Object.defineProperty(a,"_tracked",{get:()=>!0}),a}onSettle(t,r,a,n){if(this.controller.signal.aborted&&a instanceof Zt)return this.unlistenAbortSignal(),Object.defineProperty(t,"_error",{get:()=>a}),Promise.reject(a);if(this.pendingKeysSet.delete(r),this.done&&this.unlistenAbortSignal(),a===void 0&&n===void 0){let o=new Error('Deferred data for key "'+r+'" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.');return Object.defineProperty(t,"_error",{get:()=>o}),this.emit(!1,r),Promise.reject(o)}return n===void 0?(Object.defineProperty(t,"_error",{get:()=>a}),this.emit(!1,r),Promise.reject(a)):(Object.defineProperty(t,"_data",{get:()=>n}),this.emit(!1,r),n)}emit(t,r){this.subscribers.forEach(a=>a(t,r))}subscribe(t){return this.subscribers.add(t),()=>this.subscribers.delete(t)}cancel(){this.controller.abort(),this.pendingKeysSet.forEach((t,r)=>this.pendingKeysSet.delete(r)),this.emit(!0)}async resolveData(t){let r=!1;if(!this.done){let a=()=>this.cancel();t.addEventListener("abort",a),r=await new Promise(n=>{this.subscribe(o=>{t.removeEventListener("abort",a),(o||this.done)&&n(o)})})}return r}get done(){return this.pendingKeysSet.size===0}get unwrappedData(){return V(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((t,r)=>{let[a,n]=r;return Object.assign(t,{[a]:vh(n)})},{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}};Yr=function(t,r){r===void 0&&(r={});let a=typeof r=="number"?{status:r}:r;return new Xn(t,a)},Jr=function(t,r){r===void 0&&(r=302);let a=r;typeof a=="number"?a={status:a}:typeof a.status>"u"&&(a.status=302);let n=new Headers(a.headers);return n.set("Location",t),new Response(null,re({},a,{headers:n}))},zr=class{constructor(t,r,a,n){n===void 0&&(n=!1),this.status=t,this.statusText=r||"",this.internal=n,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};Zl=["post","put","patch","delete"],yh=new Set(Zl),wh=["get",...Zl],xh=new Set(wh),Ch=new Set([301,302,303,307,308]),Sh=new Set([307,308]),Kn={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Il={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Cr={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Hl=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vl=e=>({hasErrorBoundary:Boolean(e.hasErrorBoundary)});rn=Symbol("deferred")});var Gl={};Q(Gl,{AbortedDeferredError:()=>Zt,Await:()=>dn,MemoryRouter:()=>ai,Navigate:()=>ni,NavigationType:()=>ue,Outlet:()=>Ht,Route:()=>d0,Router:()=>ir,RouterProvider:()=>ri,Routes:()=>oi,UNSAFE_DataRouterContext:()=>It,UNSAFE_DataRouterStateContext:()=>Ot,UNSAFE_LocationContext:()=>br,UNSAFE_NavigationContext:()=>at,UNSAFE_RouteContext:()=>Ge,UNSAFE_mapRouteProperties:()=>hn,UNSAFE_useRouteId:()=>sn,UNSAFE_useRoutesImpl:()=>ei,createMemoryRouter:()=>si,createPath:()=>Be,createRoutesFromChildren:()=>Xr,createRoutesFromElements:()=>Xr,defer:()=>Yr,generatePath:()=>wa,isRouteErrorResponse:()=>xe,json:()=>Nt,matchPath:()=>rr,matchRoutes:()=>Ie,parsePath:()=>Le,redirect:()=>Jr,renderMatches:()=>ii,resolvePath:()=>Wr,unstable_useBlocker:()=>ba,useActionData:()=>cn,useAsyncError:()=>Sa,useAsyncValue:()=>un,useHref:()=>nr,useInRouterContext:()=>$t,useLoaderData:()=>ln,useLocation:()=>ve,useMatch:()=>i0,useMatches:()=>Qr,useNavigate:()=>Bt,useNavigation:()=>ht,useNavigationType:()=>o0,useOutlet:()=>nn,useOutletContext:()=>Rr,useParams:()=>on,useResolvedPath:()=>or,useRevalidator:()=>c0,useRouteError:()=>vt,useRouteLoaderData:()=>u0,useRoutes:()=>s0});function Kr(){return Kr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Kr.apply(this,arguments)}function nr(e,t){let{relative:r}=t===void 0?{}:t;$t()||V(!1);let{basename:a,navigator:n}=S.useContext(at),{hash:o,pathname:i,search:s}=or(e,{relative:r}),l=i;return a!=="/"&&(l=i==="/"?a:gt([a,i])),n.createHref({pathname:l,search:s,hash:o})}function $t(){return S.useContext(br)!=null}function ve(){return $t()||V(!1),S.useContext(br).location}function o0(){return S.useContext(br).navigationType}function i0(e){$t()||V(!1);let{pathname:t}=ve();return S.useMemo(()=>rr(e,t),[t,e])}function ql(e){S.useContext(at).static||S.useLayoutEffect(e)}function Bt(){let{isDataRoute:e}=S.useContext(Ge);return e?Vh():Th()}function Th(){$t()||V(!1);let e=S.useContext(It),{basename:t,navigator:r}=S.useContext(at),{matches:a}=S.useContext(Ge),{pathname:n}=ve(),o=JSON.stringify(Gr(a).map(l=>l.pathnameBase)),i=S.useRef(!1);return ql(()=>{i.current=!0}),S.useCallback(function(l,c){if(c===void 0&&(c={}),!i.current)return;if(typeof l=="number"){r.go(l);return}let u=xa(l,JSON.parse(o),n,c.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:gt([t,u.pathname])),(c.replace?r.replace:r.push)(u,c.state,c)},[t,r,o,n,e])}function Rr(){return S.useContext(zl)}function nn(e){let t=S.useContext(Ge).outlet;return t&&S.createElement(zl.Provider,{value:e},t)}function on(){let{matches:e}=S.useContext(Ge),t=e[e.length-1];return t?t.params:{}}function or(e,t){let{relative:r}=t===void 0?{}:t,{matches:a}=S.useContext(Ge),{pathname:n}=ve(),o=JSON.stringify(Gr(a).map(i=>i.pathnameBase));return S.useMemo(()=>xa(e,JSON.parse(o),n,r==="path"),[e,o,n,r])}function s0(e,t){return ei(e,t)}function ei(e,t,r){$t()||V(!1);let{navigator:a}=S.useContext(at),{matches:n}=S.useContext(Ge),o=n[n.length-1],i=o?o.params:{},s=o?o.pathname:"/",l=o?o.pathnameBase:"/",c=o&&o.route,u=ve(),d;if(t){var h;let w=typeof t=="string"?Le(t):t;l==="/"||(h=w.pathname)!=null&&h.startsWith(l)||V(!1),d=w}else d=u;let p=d.pathname||"/",f=l==="/"?p:p.slice(l.length)||"/",v=Ie(e,{pathname:f}),g=Wl(v&&v.map(w=>Object.assign({},w,{params:Object.assign({},i,w.params),pathname:gt([l,a.encodeLocation?a.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:gt([l,a.encodeLocation?a.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),n,r);return t&&g?S.createElement(br.Provider,{value:{location:Kr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:ue.Pop}},g):g}function Lh(){let e=vt(),t=xe(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",n={padding:"0.5rem",backgroundColor:a},o={padding:"2px 4px",backgroundColor:a};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),r?S.createElement("pre",{style:n},r):null,null)}function Zh(e){let{routeContext:t,match:r,children:a}=e,n=S.useContext(It);return n&&n.static&&n.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=r.route.id),S.createElement(Ge.Provider,{value:t},a)}function Wl(e,t,r){var a;if(t===void 0&&(t=[]),r===void 0&&(r=null),e==null){var n;if((n=r)!=null&&n.errors)e=r.matches;else return null}let o=e,i=(a=r)==null?void 0:a.errors;if(i!=null){let s=o.findIndex(l=>l.route.id&&(i==null?void 0:i[l.route.id]));s>=0||V(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,l,c)=>{let u=l.route.id?i==null?void 0:i[l.route.id]:null,d=null;r&&(d=l.route.errorElement||Ph);let h=t.concat(o.slice(0,c+1)),p=()=>{let f;return u?f=d:l.route.Component?f=S.createElement(l.route.Component,null):l.route.element?f=l.route.element:f=s,S.createElement(Zh,{match:l,routeContext:{outlet:s,matches:h,isDataRoute:r!=null},children:f})};return r&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?S.createElement(Xo,{location:r.location,revalidation:r.revalidation,component:d,error:u,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}function ti(e){let t=S.useContext(It);return t||V(!1),t}function Er(e){let t=S.useContext(Ot);return t||V(!1),t}function Ih(e){let t=S.useContext(Ge);return t||V(!1),t}function l0(e){let t=Ih(e),r=t.matches[t.matches.length-1];return r.route.id||V(!1),r.route.id}function sn(){return l0(dt.UseRouteId)}function ht(){return Er(dt.UseNavigation).navigation}function c0(){let e=ti(an.UseRevalidator),t=Er(dt.UseRevalidator);return{revalidate:e.router.revalidate,state:t.revalidation}}function Qr(){let{matches:e,loaderData:t}=Er(dt.UseMatches);return S.useMemo(()=>e.map(r=>{let{pathname:a,params:n}=r;return{id:r.route.id,pathname:a,params:n,data:t[r.route.id],handle:r.route.handle}}),[e,t])}function ln(){let e=Er(dt.UseLoaderData),t=l0(dt.UseLoaderData);if(e.errors&&e.errors[t]!=null){console.error("You cannot `useLoaderData` in an errorElement (routeId: "+t+")");return}return e.loaderData[t]}function u0(e){return Er(dt.UseRouteLoaderData).loaderData[e]}function cn(){let e=Er(dt.UseActionData);return S.useContext(Ge)||V(!1),Object.values((e==null?void 0:e.actionData)||{})[0]}function vt(){var e;let t=S.useContext(jl),r=Er(dt.UseRouteError),a=l0(dt.UseRouteError);return t||((e=r.errors)==null?void 0:e[a])}function un(){let e=S.useContext(a0);return e==null?void 0:e._data}function Sa(){let e=S.useContext(a0);return e==null?void 0:e._error}function ba(e){let{router:t,basename:r}=ti(an.UseBlocker),a=Er(dt.UseBlocker),[n,o]=S.useState(""),i=S.useCallback(s=>{if(typeof e!="function")return!!e;if(r==="/")return e(s);let{currentLocation:l,nextLocation:c,historyAction:u}=s;return e({currentLocation:Kr({},l,{pathname:ut(l.pathname,r)||l.pathname}),nextLocation:Kr({},c,{pathname:ut(c.pathname,r)||c.pathname}),historyAction:u})},[r,e]);return S.useEffect(()=>{let s=String(++Hh);return o(s),()=>t.deleteBlocker(s)},[t]),S.useEffect(()=>{n!==""&&t.getBlocker(n,i)},[t,n,i]),n&&a.blockers.has(n)?a.blockers.get(n):Cr}function Vh(){let{router:e}=ti(an.UseNavigateStable),t=l0(dt.UseNavigateStable),r=S.useRef(!1);return ql(()=>{r.current=!0}),S.useCallback(function(n,o){o===void 0&&(o={}),r.current&&(typeof n=="number"?e.navigate(n):e.navigate(n,Kr({fromRouteId:t},o)))},[e,t])}function ri(e){let{fallbackElement:t,router:r,future:a}=e,[n,o]=S.useState(r.state),{v7_startTransition:i}=a||{},s=S.useCallback(d=>{i&&n0?n0(()=>o(d)):o(d)},[o,i]);S.useLayoutEffect(()=>r.subscribe(s),[r,s]);let l=S.useMemo(()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:d=>r.navigate(d),push:(d,h,p)=>r.navigate(d,{state:h,preventScrollReset:p==null?void 0:p.preventScrollReset}),replace:(d,h,p)=>r.navigate(d,{replace:!0,state:h,preventScrollReset:p==null?void 0:p.preventScrollReset})}),[r]),c=r.basename||"/",u=S.useMemo(()=>({router:r,navigator:l,static:!1,basename:c}),[r,l,c]);return S.createElement(S.Fragment,null,S.createElement(It.Provider,{value:u},S.createElement(Ot.Provider,{value:n},S.createElement(ir,{basename:c,location:n.location,navigationType:n.historyAction,navigator:l},n.initialized?S.createElement(Nh,{routes:r.routes,state:n}):t))),null)}function Nh(e){let{routes:t,state:r}=e;return ei(t,void 0,r)}function ai(e){let{basename:t,children:r,initialEntries:a,initialIndex:n,future:o}=e,i=S.useRef();i.current==null&&(i.current=e0({initialEntries:a,initialIndex:n,v5Compat:!0}));let s=i.current,[l,c]=S.useState({action:s.action,location:s.location}),{v7_startTransition:u}=o||{},d=S.useCallback(h=>{u&&n0?n0(()=>c(h)):c(h)},[c,u]);return S.useLayoutEffect(()=>s.listen(d),[s,d]),S.createElement(ir,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:s})}function ni(e){let{to:t,replace:r,state:a,relative:n}=e;$t()||V(!1);let{matches:o}=S.useContext(Ge),{pathname:i}=ve(),s=Bt(),l=xa(t,Gr(o).map(u=>u.pathnameBase),i,n==="path"),c=JSON.stringify(l);return S.useEffect(()=>s(JSON.parse(c),{replace:r,state:a,relative:n}),[s,c,n,r,a]),null}function Ht(e){return nn(e.context)}function d0(e){V(!1)}function ir(e){let{basename:t="/",children:r=null,location:a,navigationType:n=ue.Pop,navigator:o,static:i=!1}=e;$t()&&V(!1);let s=t.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:s,navigator:o,static:i}),[s,o,i]);typeof a=="string"&&(a=Le(a));let{pathname:c="/",search:u="",hash:d="",state:h=null,key:p="default"}=a,f=S.useMemo(()=>{let v=ut(c,s);return v==null?null:{location:{pathname:v,search:u,hash:d,state:h,key:p},navigationType:n}},[s,c,u,d,h,p,n]);return f==null?null:S.createElement(at.Provider,{value:l},S.createElement(br.Provider,{children:r,value:f}))}function oi(e){let{children:t,location:r}=e;return s0(Xr(t),r)}function dn(e){let{children:t,errorElement:r,resolve:a}=e;return S.createElement(Qo,{resolve:a,errorElement:r},S.createElement($h,null,t))}function $h(e){let{children:t}=e,r=un(),a=typeof t=="function"?t(r):t;return S.createElement(S.Fragment,null,a)}function Xr(e,t){t===void 0&&(t=[]);let r=[];return S.Children.forEach(e,(a,n)=>{if(!S.isValidElement(a))return;let o=[...t,n];if(a.type===S.Fragment){r.push.apply(r,Xr(a.props.children,o));return}a.type!==d0&&V(!1),!a.props.index||!a.props.children||V(!1);let i={id:a.props.id||o.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(i.children=Xr(a.props.children,o)),r.push(i)}),r}function ii(e){return Wl(e)}function hn(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:S.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:S.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}function si(e,t){return Ca({basename:t==null?void 0:t.basename,future:Kr({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:e0({initialEntries:t==null?void 0:t.initialEntries,initialIndex:t==null?void 0:t.initialIndex}),hydrationData:t==null?void 0:t.hydrationData,routes:e,mapRouteProperties:hn}).initialize()}var S,It,Ot,a0,at,br,Ge,jl,zl,Ph,Xo,an,dt,Hh,Dh,n0,mt,Oh,Qo,h0=zn(()=>{S=A(ce());ar();ar();It=S.createContext(null),Ot=S.createContext(null),a0=S.createContext(null),at=S.createContext(null),br=S.createContext(null),Ge=S.createContext({outlet:null,matches:[],isDataRoute:!1}),jl=S.createContext(null);zl=S.createContext(null);Ph=S.createElement(Lh,null),Xo=class extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?S.createElement(Ge.Provider,{value:this.props.routeContext},S.createElement(jl.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(an||(an={}));(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(dt||(dt={}));Hh=0;Dh="startTransition",n0=S[Dh];(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(mt||(mt={}));Oh=new Promise(()=>{}),Qo=class extends S.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,r){console.error("<Await> caught the following error during render",t,r)}render(){let{children:t,errorElement:r,resolve:a}=this.props,n=null,o=mt.pending;if(!(a instanceof Promise))o=mt.success,n=Promise.resolve(),Object.defineProperty(n,"_tracked",{get:()=>!0}),Object.defineProperty(n,"_data",{get:()=>a});else if(this.state.error){o=mt.error;let i=this.state.error;n=Promise.reject().catch(()=>{}),Object.defineProperty(n,"_tracked",{get:()=>!0}),Object.defineProperty(n,"_error",{get:()=>i})}else a._tracked?(n=a,o=n._error!==void 0?mt.error:n._data!==void 0?mt.success:mt.pending):(o=mt.pending,Object.defineProperty(a,"_tracked",{get:()=>!0}),n=a.then(i=>Object.defineProperty(a,"_data",{get:()=>i}),i=>Object.defineProperty(a,"_error",{get:()=>i})));if(o===mt.error&&n._error instanceof Zt)throw Oh;if(o===mt.error&&!r)throw n._error;if(o===mt.error)return S.createElement(a0.Provider,{value:n,children:r});if(o===mt.success)return S.createElement(a0.Provider,{value:n,children:t});throw n}}});var s5={};Q(s5,{AbortedDeferredError:()=>Zt,Await:()=>dn,BrowserRouter:()=>rp,Form:()=>He,HashRouter:()=>ap,Link:()=>w0,MemoryRouter:()=>ai,NavLink:()=>di,Navigate:()=>ni,NavigationType:()=>ue,Outlet:()=>Ht,Route:()=>d0,Router:()=>ir,RouterProvider:()=>ri,Routes:()=>oi,ScrollRestoration:()=>sp,UNSAFE_DataRouterContext:()=>It,UNSAFE_DataRouterStateContext:()=>Ot,UNSAFE_LocationContext:()=>br,UNSAFE_NavigationContext:()=>at,UNSAFE_RouteContext:()=>Ge,UNSAFE_useRouteId:()=>sn,UNSAFE_useScrollRestoration:()=>C0,createBrowserRouter:()=>Xh,createHashRouter:()=>Qh,createMemoryRouter:()=>si,createPath:()=>Be,createRoutesFromChildren:()=>Xr,createRoutesFromElements:()=>Xr,createSearchParams:()=>m0,defer:()=>Yr,generatePath:()=>wa,isRouteErrorResponse:()=>xe,json:()=>Nt,matchPath:()=>rr,matchRoutes:()=>Ie,parsePath:()=>Le,redirect:()=>Jr,renderMatches:()=>ii,resolvePath:()=>Wr,unstable_HistoryRouter:()=>np,unstable_useBlocker:()=>ba,unstable_usePrompt:()=>i5,useActionData:()=>cn,useAsyncError:()=>Sa,useAsyncValue:()=>un,useBeforeUnload:()=>o5,useFetcher:()=>fi,useFetchers:()=>n5,useFormAction:()=>pi,useHref:()=>nr,useInRouterContext:()=>$t,useLinkClickHandler:()=>e5,useLoaderData:()=>ln,useLocation:()=>ve,useMatch:()=>i0,useMatches:()=>Qr,useNavigate:()=>Bt,useNavigation:()=>ht,useNavigationType:()=>o0,useOutlet:()=>nn,useOutletContext:()=>Rr,useParams:()=>on,useResolvedPath:()=>or,useRevalidator:()=>c0,useRouteError:()=>vt,useRouteLoaderData:()=>u0,useRoutes:()=>s0,useSearchParams:()=>t5,useSubmit:()=>hi});function yt(){return yt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},yt.apply(this,arguments)}function ui(e,t){if(e==null)return{};var r={},a=Object.keys(e),n,o;for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}function y0(e){return e!=null&&typeof e.tagName=="string"}function Bh(e){return y0(e)&&e.tagName.toLowerCase()==="button"}function Fh(e){return y0(e)&&e.tagName.toLowerCase()==="form"}function Uh(e){return y0(e)&&e.tagName.toLowerCase()==="input"}function jh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function qh(e,t){return e.button===0&&(!t||t==="_self")&&!jh(e)}function m0(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let a=e[r];return t.concat(Array.isArray(a)?a.map(n=>[r,n]):[[r,a]])},[]))}function zh(e,t){let r=m0(e);if(t)for(let a of t.keys())r.has(a)||t.getAll(a).forEach(n=>{r.append(a,n)});return r}function Wh(){if(p0===null)try{new FormData(document.createElement("form"),0),p0=!1}catch{p0=!0}return p0}function ci(e){return e!=null&&!Gh.has(e)?null:e}function Jl(e,t){let r,a,n,o,i;if(Fh(e)){let s=e.getAttribute("action");a=s?ut(s,t):null,r=e.getAttribute("method")||g0,n=ci(e.getAttribute("enctype"))||li,o=new FormData(e)}else if(Bh(e)||Uh(e)&&(e.type==="submit"||e.type==="image")){let s=e.form;if(s==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||s.getAttribute("action");if(a=l?ut(l,t):null,r=e.getAttribute("formmethod")||s.getAttribute("method")||g0,n=ci(e.getAttribute("formenctype"))||ci(s.getAttribute("enctype"))||li,o=new FormData(s,e),!Wh()){let{name:c,type:u,value:d}=e;if(u==="image"){let h=c?c+".":"";o.append(h+"x","0"),o.append(h+"y","0")}else c&&o.append(c,d)}}else{if(y0(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=g0,a=null,n=li,i=e}return o&&n==="text/plain"&&(i=o,o=void 0),{action:a,method:r.toLowerCase(),encType:n,formData:o,body:i}}function Xh(e,t){return Ca({basename:t==null?void 0:t.basename,future:yt({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:t0({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Kl(),routes:e,mapRouteProperties:hn}).initialize()}function Qh(e,t){return Ca({basename:t==null?void 0:t.basename,future:yt({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:r0({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Kl(),routes:e,mapRouteProperties:hn}).initialize()}function Kl(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=yt({},t,{errors:ep(t.errors)})),t}function ep(e){if(!e)return null;let t=Object.entries(e),r={};for(let[a,n]of t)if(n&&n.__type==="RouteErrorResponse")r[a]=new zr(n.status,n.statusText,n.data,n.internal===!0);else if(n&&n.__type==="Error"){if(n.__subType){let o=window[n.__subType];if(typeof o=="function")try{let i=new o(n.message);i.stack="",r[a]=i}catch{}}if(r[a]==null){let o=new Error(n.message);o.stack="",r[a]=o}}else r[a]=n;return r}function rp(e){let{basename:t,children:r,future:a,window:n}=e,o=L.useRef();o.current==null&&(o.current=t0({window:n,v5Compat:!0}));let i=o.current,[s,l]=L.useState({action:i.action,location:i.location}),{v7_startTransition:c}=a||{},u=L.useCallback(d=>{c&&Ra?Ra(()=>l(d)):l(d)},[l,c]);return L.useLayoutEffect(()=>i.listen(u),[i,u]),L.createElement(ir,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:i})}function ap(e){let{basename:t,children:r,future:a,window:n}=e,o=L.useRef();o.current==null&&(o.current=r0({window:n,v5Compat:!0}));let i=o.current,[s,l]=L.useState({action:i.action,location:i.location}),{v7_startTransition:c}=a||{},u=L.useCallback(d=>{c&&Ra?Ra(()=>l(d)):l(d)},[l,c]);return L.useLayoutEffect(()=>i.listen(u),[i,u]),L.createElement(ir,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:i})}function np(e){let{basename:t,children:r,future:a,history:n}=e,[o,i]=L.useState({action:n.action,location:n.location}),{v7_startTransition:s}=a||{},l=L.useCallback(c=>{s&&Ra?Ra(()=>i(c)):i(c)},[i,s]);return L.useLayoutEffect(()=>n.listen(l),[n,l]),L.createElement(ir,{basename:t,children:r,location:o.location,navigationType:o.action,navigator:n})}function sp(e){let{getKey:t,storageKey:r}=e;return C0({getKey:t,storageKey:r}),null}function x0(e){let t=L.useContext(It);return t||V(!1),t}function Ql(e){let t=L.useContext(Ot);return t||V(!1),t}function e5(e,t){let{target:r,replace:a,state:n,preventScrollReset:o,relative:i}=t===void 0?{}:t,s=Bt(),l=ve(),c=or(e,{relative:i});return L.useCallback(u=>{if(qh(u,r)){u.preventDefault();let d=a!==void 0?a:Be(l)===Be(c);s(e,{replace:d,state:n,preventScrollReset:o,relative:i})}},[l,s,c,a,n,r,e,o,i])}function t5(e){let t=L.useRef(m0(e)),r=L.useRef(!1),a=ve(),n=L.useMemo(()=>zh(a.search,r.current?null:t.current),[a.search]),o=Bt(),i=L.useCallback((s,l)=>{let c=m0(typeof s=="function"?s(n):s);r.current=!0,o("?"+c,l)},[o,n]);return[n,i]}function r5(){if(typeof document>"u")throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")}function hi(){let{router:e}=x0(Ea.UseSubmit),{basename:t}=L.useContext(at),r=sn();return L.useCallback(function(a,n){n===void 0&&(n={}),r5();let{action:o,method:i,encType:s,formData:l,body:c}=Jl(a,t);e.navigate(n.action||o,{preventScrollReset:n.preventScrollReset,formData:l,body:c,formMethod:n.method||i,formEncType:n.encType||s,replace:n.replace,state:n.state,fromRouteId:r})},[e,t,r])}function a5(e,t){let{router:r}=x0(Ea.UseSubmitFetcher),{basename:a}=L.useContext(at);return L.useCallback(function(n,o){o===void 0&&(o={}),r5();let{action:i,method:s,encType:l,formData:c,body:u}=Jl(n,a);t==null&&V(!1),r.fetch(e,t,o.action||i,{preventScrollReset:o.preventScrollReset,formData:c,body:u,formMethod:o.method||s,formEncType:o.encType||l})},[r,a,e,t])}function pi(e,t){let{relative:r}=t===void 0?{}:t,{basename:a}=L.useContext(at),n=L.useContext(Ge);n||V(!1);let[o]=n.matches.slice(-1),i=yt({},or(e||".",{relative:r})),s=ve();if(e==null&&(i.search=s.search,i.hash=s.hash,o.route.index)){let l=new URLSearchParams(i.search);l.delete("index"),i.search=l.toString()?"?"+l.toString():""}return(!e||e===".")&&o.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(i.pathname=i.pathname==="/"?a:gt([a,i.pathname])),Be(i)}function lp(e,t){return L.forwardRef((a,n)=>{let o=a5(e,t);return L.createElement(Xl,yt({},a,{ref:n,submit:o}))})}function fi(){var e;let{router:t}=x0(Ea.UseFetcher),r=L.useContext(Ge);r||V(!1);let a=(e=r.matches[r.matches.length-1])==null?void 0:e.route.id;a==null&&V(!1);let[n]=L.useState(()=>String(++cp)),[o]=L.useState(()=>(a||V(!1),lp(n,a))),[i]=L.useState(()=>u=>{t||V(!1),a||V(!1),t.fetch(n,a,u)}),s=a5(n,a),l=t.getFetcher(n),c=L.useMemo(()=>yt({Form:o,submit:s,load:i},l),[l,o,s,i]);return L.useEffect(()=>()=>{if(!t){console.warn("No router available to clean up from useFetcher()");return}t.deleteFetcher(n)},[t,n]),c}function n5(){return[...Ql(v0.UseFetchers).fetchers.values()]}function C0(e){let{getKey:t,storageKey:r}=e===void 0?{}:e,{router:a}=x0(Ea.UseScrollRestoration),{restoreScrollPosition:n,preventScrollReset:o}=Ql(v0.UseScrollRestoration),{basename:i}=L.useContext(at),s=ve(),l=Qr(),c=ht();L.useEffect(()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"}),[]),up(L.useCallback(()=>{if(c.state==="idle"){let u=(t?t(s,l):null)||s.key;f0[u]=window.scrollY}sessionStorage.setItem(r||Yl,JSON.stringify(f0)),window.history.scrollRestoration="auto"},[r,t,c.state,s,l])),typeof document<"u"&&(L.useLayoutEffect(()=>{try{let u=sessionStorage.getItem(r||Yl);u&&(f0=JSON.parse(u))}catch{}},[r]),L.useLayoutEffect(()=>{let u=t&&i!=="/"?(h,p)=>t(yt({},h,{pathname:ut(h.pathname,i)||h.pathname}),p):t,d=a==null?void 0:a.enableScrollRestoration(f0,()=>window.scrollY,u);return()=>d&&d()},[a,i,t]),L.useLayoutEffect(()=>{if(n!==!1){if(typeof n=="number"){window.scrollTo(0,n);return}if(s.hash){let u=document.getElementById(decodeURIComponent(s.hash.slice(1)));if(u){u.scrollIntoView();return}}o!==!0&&window.scrollTo(0,0)}},[s,n,o]))}function o5(e,t){let{capture:r}=t||{};L.useEffect(()=>{let a=r!=null?{capture:r}:void 0;return window.addEventListener("beforeunload",e,a),()=>{window.removeEventListener("beforeunload",e,a)}},[e,r])}function up(e,t){let{capture:r}=t||{};L.useEffect(()=>{let a=r!=null?{capture:r}:void 0;return window.addEventListener("pagehide",e,a),()=>{window.removeEventListener("pagehide",e,a)}},[e,r])}function i5(e){let{when:t,message:r}=e,a=ba(t);L.useEffect(()=>{a.state==="blocked"&&!t&&a.reset()},[a,t]),L.useEffect(()=>{a.state==="blocked"&&(window.confirm(r)?setTimeout(a.proceed,0):a.reset())},[a,r])}var L,g0,li,p0,Gh,Yh,Jh,Kh,tp,Ra,op,ip,w0,di,He,Xl,Ea,v0,cp,Yl,f0,ea=zn(()=>{L=A(ce());h0();h0();ar();g0="get",li="application/x-www-form-urlencoded";p0=null;Gh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);Yh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Jh=["aria-current","caseSensitive","className","end","style","to","children"],Kh=["reloadDocument","replace","state","method","action","onSubmit","submit","relative","preventScrollReset"];tp="startTransition",Ra=L[tp];op=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ip=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,w0=L.forwardRef(function(t,r){let{onClick:a,relative:n,reloadDocument:o,replace:i,state:s,target:l,to:c,preventScrollReset:u}=t,d=ui(t,Yh),{basename:h}=L.useContext(at),p,f=!1;if(typeof c=="string"&&ip.test(c)&&(p=c,op))try{let b=new URL(window.location.href),C=c.startsWith("//")?new URL(b.protocol+c):new URL(c),m=ut(C.pathname,h);C.origin===b.origin&&m!=null?c=m+C.search+C.hash:f=!0}catch{}let v=nr(c,{relative:n}),g=e5(c,{replace:i,state:s,target:l,preventScrollReset:u,relative:n});function w(b){a&&a(b),b.defaultPrevented||g(b)}return L.createElement("a",yt({},d,{href:p||v,onClick:f||o?a:w,ref:r,target:l}))}),di=L.forwardRef(function(t,r){let{"aria-current":a="page",caseSensitive:n=!1,className:o="",end:i=!1,style:s,to:l,children:c}=t,u=ui(t,Jh),d=or(l,{relative:u.relative}),h=ve(),p=L.useContext(Ot),{navigator:f}=L.useContext(at),v=f.encodeLocation?f.encodeLocation(d).pathname:d.pathname,g=h.pathname,w=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(g=g.toLowerCase(),w=w?w.toLowerCase():null,v=v.toLowerCase());let b=g===v||!i&&g.startsWith(v)&&g.charAt(v.length)==="/",C=w!=null&&(w===v||!i&&w.startsWith(v)&&w.charAt(v.length)==="/"),m=b?a:void 0,k;typeof o=="function"?k=o({isActive:b,isPending:C}):k=[o,b?"active":null,C?"pending":null].filter(Boolean).join(" ");let B=typeof s=="function"?s({isActive:b,isPending:C}):s;return L.createElement(w0,yt({},u,{"aria-current":m,className:k,ref:r,style:B,to:l}),typeof c=="function"?c({isActive:b,isPending:C}):c)}),He=L.forwardRef((e,t)=>{let r=hi();return L.createElement(Xl,yt({},e,{submit:r,ref:t}))}),Xl=L.forwardRef((e,t)=>{let{reloadDocument:r,replace:a,state:n,method:o=g0,action:i,onSubmit:s,submit:l,relative:c,preventScrollReset:u}=e,d=ui(e,Kh),h=o.toLowerCase()==="get"?"get":"post",p=pi(i,{relative:c});return L.createElement("form",yt({ref:t,method:h,action:p,onSubmit:r?s:v=>{if(s&&s(v),v.defaultPrevented)return;v.preventDefault();let g=v.nativeEvent.submitter,w=(g==null?void 0:g.getAttribute("formmethod"))||o;l(g||v.currentTarget,{method:w,replace:a,state:n,relative:c,preventScrollReset:u})}},d))});(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Ea||(Ea={}));(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(v0||(v0={}));cp=0;Yl="react-router-scroll-positions",f0={}});var L5=ge(ka=>{"use strict";Object.defineProperty(ka,"__esModule",{value:!0});var Tp=ce(),sr=(ar(),Oo(Ul)),Si=(h0(),Oo(Gl)),ta=(ea(),Oo(s5));function Lp(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(r){if(r!=="default"){var a=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,Object.freeze(t)}var kr=Lp(Tp);function Pp({basename:e,children:t,location:r="/"}){typeof r=="string"&&(r=ta.parsePath(r));let a=sr.Action.Pop,n={pathname:r.pathname||"/",search:r.search||"",hash:r.hash||"",state:r.state||null,key:r.key||"default"},o=k5();return kr.createElement(ta.Router,{basename:e,children:t,location:n,navigationType:a,navigator:o,static:!0})}function Zp({context:e,router:t,hydrate:r=!0,nonce:a}){t&&e||sr.UNSAFE_invariant(!1);let n={router:t,navigator:k5(),static:!0,staticContext:e,basename:e.basename||"/"},o="";if(r!==!1){let s={loaderData:e.loaderData,actionData:e.actionData,errors:Hp(e.errors)};o=`window.__staticRouterHydrationData = JSON.parse(${$p(JSON.stringify(JSON.stringify(s)))});`}let{state:i}=n.router;return kr.createElement(kr.Fragment,null,kr.createElement(ta.UNSAFE_DataRouterContext.Provider,{value:n},kr.createElement(ta.UNSAFE_DataRouterStateContext.Provider,{value:i},kr.createElement(ta.Router,{basename:n.basename,location:i.location,navigationType:i.historyAction,navigator:n.navigator,static:n.static},kr.createElement(Ip,{routes:t.routes,state:i})))),o?kr.createElement("script",{suppressHydrationWarning:!0,nonce:a,dangerouslySetInnerHTML:{__html:o}}):null)}function Ip({routes:e,state:t}){return Si.UNSAFE_useRoutesImpl(e,void 0,t)}function Hp(e){if(!e)return null;let t=Object.entries(e),r={};for(let[a,n]of t)sr.isRouteErrorResponse(n)?r[a]={...n,__type:"RouteErrorResponse"}:n instanceof Error?r[a]={message:n.message,__type:"Error",...n.name!=="Error"?{__subType:n.name}:{}}:r[a]=n;return r}function k5(){return{createHref:_5,encodeLocation:T5,push(e){throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(e)})\` somewhere in your app.`)},replace(e){throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(e)}, { replace: true })\` somewhere in your app.`)},go(e){throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${e})\` somewhere in your app.`)},back(){throw new Error("You cannot use navigator.back() on the server because it is a stateless environment.")},forward(){throw new Error("You cannot use navigator.forward() on the server because it is a stateless environment.")}}}function Vp(e,t){return sr.createStaticHandler(e,{...t,mapRouteProperties:Si.UNSAFE_mapRouteProperties})}function Dp(e,t){let r={},a=sr.UNSAFE_convertRoutesToDataRoutes(e,Si.UNSAFE_mapRouteProperties,void 0,r),n=t.matches.map(i=>{let s=r[i.route.id]||i.route;return{...i,route:s}}),o=i=>`You cannot use router.${i}() on the server because it is a stateless environment`;return{get basename(){return t.basename},get state(){return{historyAction:sr.Action.Pop,location:t.location,matches:n,loaderData:t.loaderData,actionData:t.actionData,errors:t.errors,initialized:!0,navigation:sr.IDLE_NAVIGATION,restoreScrollPosition:null,preventScrollReset:!1,revalidation:"idle",fetchers:new Map,blockers:new Map}},get routes(){return a},initialize(){throw o("initialize")},subscribe(){throw o("subscribe")},enableScrollRestoration(){throw o("enableScrollRestoration")},navigate(){throw o("navigate")},fetch(){throw o("fetch")},revalidate(){throw o("revalidate")},createHref:_5,encodeLocation:T5,getFetcher(){return sr.IDLE_FETCHER},deleteFetcher(){throw o("deleteFetcher")},dispose(){throw o("dispose")},getBlocker(){return sr.IDLE_BLOCKER},deleteBlocker(){throw o("deleteBlocker")},_internalFetchControllers:new Map,_internalActiveDeferreds:new Map,_internalSetRoutes(){throw o("_internalSetRoutes")}}}function _5(e){return typeof e=="string"?e:ta.createPath(e)}function T5(e){let t=typeof e=="string"?ta.parsePath(e):e;return{pathname:t.pathname||"",search:t.search||"",hash:t.hash||""}}var Np={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},Op=/[&><\u2028\u2029]/g;function $p(e){return e.replace(Op,t=>Np[t])}ka.StaticRouter=Pp;ka.StaticRouterProvider=Zp;ka.createStaticHandler=Vp;ka.createStaticRouter=Dp});var Lc=ge(Ta=>{"use strict";var sc=ce();function G(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pt=Object.prototype.hasOwnProperty,qp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,B5={},F5={};function lc(e){return pt.call(F5,e)?!0:pt.call(B5,e)?!1:qp.test(e)?F5[e]=!0:(B5[e]=!0,!1)}function it(e,t,r,a,n,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=n,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var Ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ye[e]=new it(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ye[t]=new it(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ye[e]=new it(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ye[e]=new it(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ye[e]=new it(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ye[e]=new it(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ye[e]=new it(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ye[e]=new it(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ye[e]=new it(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ii=/[\-:]([a-z])/g;function Hi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ii,Hi);Ye[t]=new it(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ii,Hi);Ye[t]=new it(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ii,Hi);Ye[t]=new it(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ye[e]=new it(e,1,!1,e.toLowerCase(),null,!1,!1)});Ye.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ye[e]=new it(e,1,!1,e.toLowerCase(),null,!0,!0)});var V0={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zp=["Webkit","ms","Moz","O"];Object.keys(V0).forEach(function(e){zp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),V0[t]=V0[e]})});var Wp=/["'&<>]/;function ot(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var t=Wp.exec(e);if(t){var r="",a,n=0;for(a=t.index;a<e.length;a++){switch(e.charCodeAt(a)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}n!==a&&(r+=e.substring(n,a)),n=a+1,r+=t}e=n!==a?r+e.substring(n,a):r}return e}var Gp=/([A-Z])/g,Yp=/^ms-/,_i=Array.isArray;function cr(e,t){return{insertionMode:e,selectedValue:t}}function Jp(e,t,r){switch(t){case"select":return cr(1,r.value!=null?r.value:r.defaultValue);case"svg":return cr(2,null);case"math":return cr(3,null);case"foreignObject":return cr(1,null);case"table":return cr(4,null);case"thead":case"tbody":case"tfoot":return cr(5,null);case"colgroup":return cr(7,null);case"tr":return cr(6,null)}return 4<=e.insertionMode||e.insertionMode===0?cr(1,null):e}var U5=new Map;function cc(e,t,r){if(typeof r!="object")throw Error(G(62));t=!0;for(var a in r)if(pt.call(r,a)){var n=r[a];if(n!=null&&typeof n!="boolean"&&n!==""){if(a.indexOf("--")===0){var o=ot(a);n=ot((""+n).trim())}else{o=a;var i=U5.get(o);i!==void 0||(i=ot(o.replace(Gp,"-$1").toLowerCase().replace(Yp,"-ms-")),U5.set(o,i)),o=i,n=typeof n=="number"?n===0||pt.call(V0,a)?""+n:n+"px":ot((""+n).trim())}t?(t=!1,e.push(' style="',o,":",n)):e.push(";",o,":",n)}}t||e.push('"')}function wt(e,t,r,a){switch(r){case"style":cc(e,t,a);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N"){if(t=Ye.hasOwnProperty(r)?Ye[r]:null,t!==null){switch(typeof a){case"function":case"symbol":return;case"boolean":if(!t.acceptsBooleans)return}switch(r=t.attributeName,t.type){case 3:a&&e.push(" ",r,'=""');break;case 4:a===!0?e.push(" ",r,'=""'):a!==!1&&e.push(" ",r,'="',ot(a),'"');break;case 5:isNaN(a)||e.push(" ",r,'="',ot(a),'"');break;case 6:!isNaN(a)&&1<=a&&e.push(" ",r,'="',ot(a),'"');break;default:t.sanitizeURL&&(a=""+a),e.push(" ",r,'="',ot(a),'"')}}else if(lc(r)){switch(typeof a){case"function":case"symbol":return;case"boolean":if(t=r.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-")return}e.push(" ",r,'="',ot(a),'"')}}}function D0(e,t,r){if(t!=null){if(r!=null)throw Error(G(60));if(typeof t!="object"||!("__html"in t))throw Error(G(61));t=t.__html,t!=null&&e.push(""+t)}}function Kp(e){var t="";return sc.Children.forEach(e,function(r){r!=null&&(t+=r)}),t}function Ai(e,t,r,a){e.push(jt(r));var n=r=null,o;for(o in t)if(pt.call(t,o)){var i=t[o];if(i!=null)switch(o){case"children":r=i;break;case"dangerouslySetInnerHTML":n=i;break;default:wt(e,a,o,i)}}return e.push(">"),D0(e,n,r),typeof r=="string"?(e.push(ot(r)),null):r}var Xp=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,j5=new Map;function jt(e){var t=j5.get(e);if(t===void 0){if(!Xp.test(e))throw Error(G(65,e));t="<"+e,j5.set(e,t)}return t}function Qp(e,t,r,a,n){switch(t){case"select":e.push(jt("select"));var o=null,i=null;for(u in r)if(pt.call(r,u)){var s=r[u];if(s!=null)switch(u){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"defaultValue":case"value":break;default:wt(e,a,u,s)}}return e.push(">"),D0(e,i,o),o;case"option":i=n.selectedValue,e.push(jt("option"));var l=s=null,c=null,u=null;for(o in r)if(pt.call(r,o)){var d=r[o];if(d!=null)switch(o){case"children":s=d;break;case"selected":c=d;break;case"dangerouslySetInnerHTML":u=d;break;case"value":l=d;default:wt(e,a,o,d)}}if(i!=null)if(r=l!==null?""+l:Kp(s),_i(i)){for(a=0;a<i.length;a++)if(""+i[a]===r){e.push(' selected=""');break}}else""+i===r&&e.push(' selected=""');else c&&e.push(' selected=""');return e.push(">"),D0(e,u,s),s;case"textarea":e.push(jt("textarea")),u=i=o=null;for(s in r)if(pt.call(r,s)&&(l=r[s],l!=null))switch(s){case"children":u=l;break;case"value":o=l;break;case"defaultValue":i=l;break;case"dangerouslySetInnerHTML":throw Error(G(91));default:wt(e,a,s,l)}if(o===null&&i!==null&&(o=i),e.push(">"),u!=null){if(o!=null)throw Error(G(92));if(_i(u)&&1<u.length)throw Error(G(93));o=""+u}return typeof o=="string"&&o[0]===`
`&&e.push(`
`),o!==null&&e.push(ot(""+o)),null;case"input":e.push(jt("input")),l=u=s=o=null;for(i in r)if(pt.call(r,i)&&(c=r[i],c!=null))switch(i){case"children":case"dangerouslySetInnerHTML":throw Error(G(399,"input"));case"defaultChecked":l=c;break;case"defaultValue":s=c;break;case"checked":u=c;break;case"value":o=c;break;default:wt(e,a,i,c)}return u!==null?wt(e,a,"checked",u):l!==null&&wt(e,a,"checked",l),o!==null?wt(e,a,"value",o):s!==null&&wt(e,a,"value",s),e.push("/>"),null;case"menuitem":e.push(jt("menuitem"));for(var h in r)if(pt.call(r,h)&&(o=r[h],o!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(G(400));default:wt(e,a,h,o)}return e.push(">"),null;case"title":e.push(jt("title")),o=null;for(d in r)if(pt.call(r,d)&&(i=r[d],i!=null))switch(d){case"children":o=i;break;case"dangerouslySetInnerHTML":throw Error(G(434));default:wt(e,a,d,i)}return e.push(">"),o;case"listing":case"pre":e.push(jt(t)),i=o=null;for(l in r)if(pt.call(r,l)&&(s=r[l],s!=null))switch(l){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;default:wt(e,a,l,s)}if(e.push(">"),i!=null){if(o!=null)throw Error(G(60));if(typeof i!="object"||!("__html"in i))throw Error(G(61));r=i.__html,r!=null&&(typeof r=="string"&&0<r.length&&r[0]===`
`?e.push(`
`,r):e.push(""+r))}return typeof o=="string"&&o[0]===`
`&&e.push(`
`),o;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(jt(t));for(var p in r)if(pt.call(r,p)&&(o=r[p],o!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(G(399,t));default:wt(e,a,p,o)}return e.push("/>"),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Ai(e,r,t,a);case"html":return n.insertionMode===0&&e.push("<!DOCTYPE html>"),Ai(e,r,t,a);default:if(t.indexOf("-")===-1&&typeof r.is!="string")return Ai(e,r,t,a);e.push(jt(t)),i=o=null;for(c in r)if(pt.call(r,c)&&(s=r[c],s!=null))switch(c){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"style":cc(e,a,s);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:lc(c)&&typeof s!="function"&&typeof s!="symbol"&&e.push(" ",c,'="',ot(s),'"')}return e.push(">"),D0(e,i,o),o}}function q5(e,t,r){if(e.push('<!--$?--><template id="'),r===null)throw Error(G(395));return e.push(r),e.push('"></template>')}function e3(e,t,r,a){switch(r.insertionMode){case 0:case 1:return e.push('<div hidden id="'),e.push(t.segmentPrefix),t=a.toString(16),e.push(t),e.push('">');case 2:return e.push('<svg aria-hidden="true" style="display:none" id="'),e.push(t.segmentPrefix),t=a.toString(16),e.push(t),e.push('">');case 3:return e.push('<math aria-hidden="true" style="display:none" id="'),e.push(t.segmentPrefix),t=a.toString(16),e.push(t),e.push('">');case 4:return e.push('<table hidden id="'),e.push(t.segmentPrefix),t=a.toString(16),e.push(t),e.push('">');case 5:return e.push('<table hidden><tbody id="'),e.push(t.segmentPrefix),t=a.toString(16),e.push(t),e.push('">');case 6:return e.push('<table hidden><tr id="'),e.push(t.segmentPrefix),t=a.toString(16),e.push(t),e.push('">');case 7:return e.push('<table hidden><colgroup id="'),e.push(t.segmentPrefix),t=a.toString(16),e.push(t),e.push('">');default:throw Error(G(397))}}function t3(e,t){switch(t.insertionMode){case 0:case 1:return e.push("</div>");case 2:return e.push("</svg>");case 3:return e.push("</math>");case 4:return e.push("</table>");case 5:return e.push("</tbody></table>");case 6:return e.push("</tr></table>");case 7:return e.push("</colgroup></table>");default:throw Error(G(397))}}var r3=/[<\u2028\u2029]/g;function Mi(e){return JSON.stringify(e).replace(r3,function(t){switch(t){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}function a3(e,t){return t=t===void 0?"":t,{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:t+"P:",segmentPrefix:t+"S:",boundaryPrefix:t+"B:",idPrefix:t,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:e}}function z5(e,t,r,a){return r.generateStaticMarkup?(e.push(ot(t)),!1):(t===""?e=a:(a&&e.push("<!-- -->"),e.push(ot(t)),e=!0),e)}var Cn=Object.assign,n3=Symbol.for("react.element"),uc=Symbol.for("react.portal"),dc=Symbol.for("react.fragment"),hc=Symbol.for("react.strict_mode"),pc=Symbol.for("react.profiler"),fc=Symbol.for("react.provider"),gc=Symbol.for("react.context"),mc=Symbol.for("react.forward_ref"),vc=Symbol.for("react.suspense"),yc=Symbol.for("react.suspense_list"),wc=Symbol.for("react.memo"),Vi=Symbol.for("react.lazy"),o3=Symbol.for("react.scope"),i3=Symbol.for("react.debug_trace_mode"),s3=Symbol.for("react.legacy_hidden"),l3=Symbol.for("react.default_value"),W5=Symbol.iterator;function Ti(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case dc:return"Fragment";case uc:return"Portal";case pc:return"Profiler";case hc:return"StrictMode";case vc:return"Suspense";case yc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gc:return(e.displayName||"Context")+".Consumer";case fc:return(e._context.displayName||"Context")+".Provider";case mc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wc:return t=e.displayName||null,t!==null?t:Ti(e.type)||"Memo";case Vi:t=e._payload,e=e._init;try{return Ti(e(t))}catch{}}return null}var xc={};function G5(e,t){if(e=e.contextTypes,!e)return xc;var r={},a;for(a in e)r[a]=t[a];return r}var aa=null;function z0(e,t){if(e!==t){e.context._currentValue2=e.parentValue,e=e.parent;var r=t.parent;if(e===null){if(r!==null)throw Error(G(401))}else{if(r===null)throw Error(G(401));z0(e,r)}t.context._currentValue2=t.value}}function Cc(e){e.context._currentValue2=e.parentValue,e=e.parent,e!==null&&Cc(e)}function Sc(e){var t=e.parent;t!==null&&Sc(t),e.context._currentValue2=e.value}function bc(e,t){if(e.context._currentValue2=e.parentValue,e=e.parent,e===null)throw Error(G(402));e.depth===t.depth?z0(e,t):bc(e,t)}function Rc(e,t){var r=t.parent;if(r===null)throw Error(G(402));e.depth===r.depth?z0(e,r):Rc(e,r),t.context._currentValue2=t.value}function B0(e){var t=aa;t!==e&&(t===null?Sc(e):e===null?Cc(t):t.depth===e.depth?z0(t,e):t.depth>e.depth?bc(t,e):Rc(t,e),aa=e)}var Y5={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}};function J5(e,t,r,a){var n=e.state!==void 0?e.state:null;e.updater=Y5,e.props=r,e.state=n;var o={queue:[],replace:!1};e._reactInternals=o;var i=t.contextType;if(e.context=typeof i=="object"&&i!==null?i._currentValue2:a,i=t.getDerivedStateFromProps,typeof i=="function"&&(i=i(r,n),n=i==null?n:Cn({},n,i),e.state=n),typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(t=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),t!==e.state&&Y5.enqueueReplaceState(e,e.state,null),o.queue!==null&&0<o.queue.length)if(t=o.queue,i=o.replace,o.queue=null,o.replace=!1,i&&t.length===1)e.state=t[0];else{for(o=i?t[0]:e.state,n=!0,i=i?1:0;i<t.length;i++){var s=t[i];s=typeof s=="function"?s.call(e,o,r,a):s,s!=null&&(n?(n=!1,o=Cn({},o,s)):Cn(o,s))}e.state=o}else o.queue=null}var c3={id:1,overflow:""};function Li(e,t,r){var a=e.id;e=e.overflow;var n=32-N0(a)-1;a&=~(1<<n),r+=1;var o=32-N0(t)+n;if(30<o){var i=n-n%5;return o=(a&(1<<i)-1).toString(32),a>>=i,n-=i,{id:1<<32-N0(t)+n|r<<n|a,overflow:o+e}}return{id:1<<o|r<<n|a,overflow:e}}var N0=Math.clz32?Math.clz32:h3,u3=Math.log,d3=Math.LN2;function h3(e){return e>>>=0,e===0?32:31-(u3(e)/d3|0)|0}function p3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var f3=typeof Object.is=="function"?Object.is:p3,ur=null,Di=null,O0=null,ye=null,wn=!1,F0=!1,Sn=0,Tr=null,W0=0;function ra(){if(ur===null)throw Error(G(321));return ur}function K5(){if(0<W0)throw Error(G(312));return{memoizedState:null,queue:null,next:null}}function Ni(){return ye===null?O0===null?(wn=!1,O0=ye=K5()):(wn=!0,ye=O0):ye.next===null?(wn=!1,ye=ye.next=K5()):(wn=!0,ye=ye.next),ye}function Oi(){Di=ur=null,F0=!1,O0=null,W0=0,ye=Tr=null}function Ec(e,t){return typeof t=="function"?t(e):t}function X5(e,t,r){if(ur=ra(),ye=Ni(),wn){var a=ye.queue;if(t=a.dispatch,Tr!==null&&(r=Tr.get(a),r!==void 0)){Tr.delete(a),a=ye.memoizedState;do a=e(a,r.action),r=r.next;while(r!==null);return ye.memoizedState=a,[a,t]}return[ye.memoizedState,t]}return e=e===Ec?typeof t=="function"?t():t:r!==void 0?r(t):t,ye.memoizedState=e,e=ye.queue={last:null,dispatch:null},e=e.dispatch=g3.bind(null,ur,e),[ye.memoizedState,e]}function Q5(e,t){if(ur=ra(),ye=Ni(),t=t===void 0?null:t,ye!==null){var r=ye.memoizedState;if(r!==null&&t!==null){var a=r[1];e:if(a===null)a=!1;else{for(var n=0;n<a.length&&n<t.length;n++)if(!f3(t[n],a[n])){a=!1;break e}a=!0}if(a)return r[0]}}return e=e(),ye.memoizedState=[e,t],e}function g3(e,t,r){if(25<=W0)throw Error(G(301));if(e===ur)if(F0=!0,e={action:r,next:null},Tr===null&&(Tr=new Map),r=Tr.get(t),r===void 0)Tr.set(t,e);else{for(t=r;t.next!==null;)t=t.next;t.next=e}}function m3(){throw Error(G(394))}function I0(){}var ec={readContext:function(e){return e._currentValue2},useContext:function(e){return ra(),e._currentValue2},useMemo:Q5,useReducer:X5,useRef:function(e){ur=ra(),ye=Ni();var t=ye.memoizedState;return t===null?(e={current:e},ye.memoizedState=e):t},useState:function(e){return X5(Ec,e)},useInsertionEffect:I0,useLayoutEffect:function(){},useCallback:function(e,t){return Q5(function(){return e},t)},useImperativeHandle:I0,useEffect:I0,useDebugValue:I0,useDeferredValue:function(e){return ra(),e},useTransition:function(){return ra(),[!1,m3]},useId:function(){var e=Di.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-N0(e)-1)).toString(32)+t;var r=$0;if(r===null)throw Error(G(404));return t=Sn++,e=":"+r.idPrefix+"R"+e,0<t&&(e+="H"+t.toString(32)),e+":"},useMutableSource:function(e,t){return ra(),t(e._source)},useSyncExternalStore:function(e,t,r){if(r===void 0)throw Error(G(407));return r()}},$0=null,ki=sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function v3(e){return console.error(e),null}function xn(){}function y3(e,t,r,a,n,o,i,s,l){var c=[],u=new Set;return t={destination:null,responseState:t,progressiveChunkSize:a===void 0?12800:a,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:u,pingedTasks:c,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:n===void 0?v3:n,onAllReady:o===void 0?xn:o,onShellReady:i===void 0?xn:i,onShellError:s===void 0?xn:s,onFatalError:l===void 0?xn:l},r=U0(t,0,null,r,!1,!1),r.parentFlushed=!0,e=$i(t,e,null,r,u,xc,null,c3),c.push(e),t}function $i(e,t,r,a,n,o,i,s){e.allPendingTasks++,r===null?e.pendingRootTasks++:r.pendingTasks++;var l={node:t,ping:function(){var c=e.pingedTasks;c.push(l),c.length===1&&kc(e)},blockedBoundary:r,blockedSegment:a,abortSet:n,legacyContext:o,context:i,treeContext:s};return n.add(l),l}function U0(e,t,r,a,n,o){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:a,boundary:r,lastPushedText:n,textEmbedded:o}}function bn(e,t){if(e=e.onError(t),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function j0(e,t){var r=e.onShellError;r(t),r=e.onFatalError,r(t),e.destination!==null?(e.status=2,e.destination.destroy(t)):(e.status=1,e.fatalError=t)}function tc(e,t,r,a,n){for(ur={},Di=t,Sn=0,e=r(a,n);F0;)F0=!1,Sn=0,W0+=1,ye=null,e=r(a,n);return Oi(),e}function rc(e,t,r,a){var n=r.render(),o=a.childContextTypes;if(o!=null){var i=t.legacyContext;if(typeof r.getChildContext!="function")a=i;else{r=r.getChildContext();for(var s in r)if(!(s in o))throw Error(G(108,Ti(a)||"Unknown",s));a=Cn({},i,r)}t.legacyContext=a,xt(e,t,n),t.legacyContext=i}else xt(e,t,n)}function ac(e,t){if(e&&e.defaultProps){t=Cn({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Pi(e,t,r,a,n){if(typeof r=="function")if(r.prototype&&r.prototype.isReactComponent){n=G5(r,t.legacyContext);var o=r.contextType;o=new r(a,typeof o=="object"&&o!==null?o._currentValue2:n),J5(o,r,a,n),rc(e,t,o,r)}else{o=G5(r,t.legacyContext),n=tc(e,t,r,a,o);var i=Sn!==0;if(typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0)J5(n,r,a,o),rc(e,t,n,r);else if(i){a=t.treeContext,t.treeContext=Li(a,1,0);try{xt(e,t,n)}finally{t.treeContext=a}}else xt(e,t,n)}else if(typeof r=="string"){switch(n=t.blockedSegment,o=Qp(n.chunks,r,a,e.responseState,n.formatContext),n.lastPushedText=!1,i=n.formatContext,n.formatContext=Jp(i,r,a),Zi(e,t,o),n.formatContext=i,r){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:n.chunks.push("</",r,">")}n.lastPushedText=!1}else{switch(r){case s3:case i3:case hc:case pc:case dc:xt(e,t,a.children);return;case yc:xt(e,t,a.children);return;case o3:throw Error(G(343));case vc:e:{r=t.blockedBoundary,n=t.blockedSegment,o=a.fallback,a=a.children,i=new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:i,errorDigest:null},l=U0(e,n.chunks.length,s,n.formatContext,!1,!1);n.children.push(l),n.lastPushedText=!1;var c=U0(e,0,null,n.formatContext,!1,!1);c.parentFlushed=!0,t.blockedBoundary=s,t.blockedSegment=c;try{if(Zi(e,t,a),e.responseState.generateStaticMarkup||c.lastPushedText&&c.textEmbedded&&c.chunks.push("<!-- -->"),c.status=1,q0(s,c),s.pendingTasks===0)break e}catch(u){c.status=4,s.forceClientRender=!0,s.errorDigest=bn(e,u)}finally{t.blockedBoundary=r,t.blockedSegment=n}t=$i(e,o,r,l,i,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof r=="object"&&r!==null)switch(r.$$typeof){case mc:if(a=tc(e,t,r.render,a,n),Sn!==0){r=t.treeContext,t.treeContext=Li(r,1,0);try{xt(e,t,a)}finally{t.treeContext=r}}else xt(e,t,a);return;case wc:r=r.type,a=ac(r,a),Pi(e,t,r,a,n);return;case fc:if(n=a.children,r=r._context,a=a.value,o=r._currentValue2,r._currentValue2=a,i=aa,aa=a={parent:i,depth:i===null?0:i.depth+1,context:r,parentValue:o,value:a},t.context=a,xt(e,t,n),e=aa,e===null)throw Error(G(403));a=e.parentValue,e.context._currentValue2=a===l3?e.context._defaultValue:a,e=aa=e.parent,t.context=e;return;case gc:a=a.children,a=a(r._currentValue2),xt(e,t,a);return;case Vi:n=r._init,r=n(r._payload),a=ac(r,a),Pi(e,t,r,a,void 0);return}throw Error(G(130,r==null?r:typeof r,""))}}function xt(e,t,r){if(t.node=r,typeof r=="object"&&r!==null){switch(r.$$typeof){case n3:Pi(e,t,r.type,r.props,r.ref);return;case uc:throw Error(G(257));case Vi:var a=r._init;r=a(r._payload),xt(e,t,r);return}if(_i(r)){nc(e,t,r);return}if(r===null||typeof r!="object"?a=null:(a=W5&&r[W5]||r["@@iterator"],a=typeof a=="function"?a:null),a&&(a=a.call(r))){if(r=a.next(),!r.done){var n=[];do n.push(r.value),r=a.next();while(!r.done);nc(e,t,n)}return}throw e=Object.prototype.toString.call(r),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}typeof r=="string"?(a=t.blockedSegment,a.lastPushedText=z5(t.blockedSegment.chunks,r,e.responseState,a.lastPushedText)):typeof r=="number"&&(a=t.blockedSegment,a.lastPushedText=z5(t.blockedSegment.chunks,""+r,e.responseState,a.lastPushedText))}function nc(e,t,r){for(var a=r.length,n=0;n<a;n++){var o=t.treeContext;t.treeContext=Li(o,a,n);try{Zi(e,t,r[n])}finally{t.treeContext=o}}}function Zi(e,t,r){var a=t.blockedSegment.formatContext,n=t.legacyContext,o=t.context;try{return xt(e,t,r)}catch(l){if(Oi(),typeof l=="object"&&l!==null&&typeof l.then=="function"){r=l;var i=t.blockedSegment,s=U0(e,i.chunks.length,null,i.formatContext,i.lastPushedText,!0);i.children.push(s),i.lastPushedText=!1,e=$i(e,t.node,t.blockedBoundary,s,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,r.then(e,e),t.blockedSegment.formatContext=a,t.legacyContext=n,t.context=o,B0(o)}else throw t.blockedSegment.formatContext=a,t.legacyContext=n,t.context=o,B0(o),l}}function w3(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,Mc(this,t,e)}function Ac(e,t,r){var a=e.blockedBoundary;e.blockedSegment.status=3,a===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.push(null))):(a.pendingTasks--,a.forceClientRender||(a.forceClientRender=!0,e=r===void 0?Error(G(432)):r,a.errorDigest=t.onError(e),a.parentFlushed&&t.clientRenderedBoundaries.push(a)),a.fallbackAbortableTasks.forEach(function(n){return Ac(n,t,r)}),a.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(a=t.onAllReady,a()))}function q0(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var r=t.children[0];r.id=t.id,r.parentFlushed=!0,r.status===1&&q0(e,r)}else e.completedSegments.push(t)}function Mc(e,t,r){if(t===null){if(r.parentFlushed){if(e.completedRootSegment!==null)throw Error(G(389));e.completedRootSegment=r}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=xn,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(r.parentFlushed&&r.status===1&&q0(t,r),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(w3,e),t.fallbackAbortableTasks.clear()):r.parentFlushed&&r.status===1&&(q0(t,r),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function kc(e){if(e.status!==2){var t=aa,r=ki.current;ki.current=ec;var a=$0;$0=e.responseState;try{var n=e.pingedTasks,o;for(o=0;o<n.length;o++){var i=n[o],s=e,l=i.blockedSegment;if(l.status===0){B0(i.context);try{xt(s,i,i.node),s.responseState.generateStaticMarkup||l.lastPushedText&&l.textEmbedded&&l.chunks.push("<!-- -->"),i.abortSet.delete(i),l.status=1,Mc(s,i.blockedBoundary,l)}catch(f){if(Oi(),typeof f=="object"&&f!==null&&typeof f.then=="function"){var c=i.ping;f.then(c,c)}else{i.abortSet.delete(i),l.status=4;var u=i.blockedBoundary,d=f,h=bn(s,d);if(u===null?j0(s,d):(u.pendingTasks--,u.forceClientRender||(u.forceClientRender=!0,u.errorDigest=h,u.parentFlushed&&s.clientRenderedBoundaries.push(u))),s.allPendingTasks--,s.allPendingTasks===0){var p=s.onAllReady;p()}}}finally{}}}n.splice(0,o),e.destination!==null&&Bi(e,e.destination)}catch(f){bn(e,f),j0(e,f)}finally{$0=a,ki.current=r,r===ec&&B0(t)}}}function H0(e,t,r){switch(r.parentFlushed=!0,r.status){case 0:var a=r.id=e.nextSegmentId++;return r.lastPushedText=!1,r.textEmbedded=!1,e=e.responseState,t.push('<template id="'),t.push(e.placeholderPrefix),e=a.toString(16),t.push(e),t.push('"></template>');case 1:r.status=2;var n=!0;a=r.chunks;var o=0;r=r.children;for(var i=0;i<r.length;i++){for(n=r[i];o<n.index;o++)t.push(a[o]);n=G0(e,t,n)}for(;o<a.length-1;o++)t.push(a[o]);return o<a.length&&(n=t.push(a[o])),n;default:throw Error(G(390))}}function G0(e,t,r){var a=r.boundary;if(a===null)return H0(e,t,r);if(a.parentFlushed=!0,a.forceClientRender)return e.responseState.generateStaticMarkup||(a=a.errorDigest,t.push("<!--$!-->"),t.push("<template"),a&&(t.push(' data-dgst="'),a=ot(a),t.push(a),t.push('"')),t.push("></template>")),H0(e,t,r),e=e.responseState.generateStaticMarkup?!0:t.push("<!--/$-->"),e;if(0<a.pendingTasks){a.rootSegmentID=e.nextSegmentId++,0<a.completedSegments.length&&e.partialBoundaries.push(a);var n=e.responseState,o=n.nextSuspenseID++;return n=n.boundaryPrefix+o.toString(16),a=a.id=n,q5(t,e.responseState,a),H0(e,t,r),t.push("<!--/$-->")}if(a.byteSize>e.progressiveChunkSize)return a.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(a),q5(t,e.responseState,a.id),H0(e,t,r),t.push("<!--/$-->");if(e.responseState.generateStaticMarkup||t.push("<!--$-->"),r=a.completedSegments,r.length!==1)throw Error(G(391));return G0(e,t,r[0]),e=e.responseState.generateStaticMarkup?!0:t.push("<!--/$-->"),e}function oc(e,t,r){return e3(t,e.responseState,r.formatContext,r.id),G0(e,t,r),t3(t,r.formatContext)}function ic(e,t,r){for(var a=r.completedSegments,n=0;n<a.length;n++)_c(e,t,r,a[n]);if(a.length=0,e=e.responseState,a=r.id,r=r.rootSegmentID,t.push(e.startInlineScript),e.sentCompleteBoundaryFunction?t.push('$RC("'):(e.sentCompleteBoundaryFunction=!0,t.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')),a===null)throw Error(G(395));return r=r.toString(16),t.push(a),t.push('","'),t.push(e.segmentPrefix),t.push(r),t.push('")</script>')}function _c(e,t,r,a){if(a.status===2)return!0;var n=a.id;if(n===-1){if((a.id=r.rootSegmentID)===-1)throw Error(G(392));return oc(e,t,a)}return oc(e,t,a),e=e.responseState,t.push(e.startInlineScript),e.sentCompleteSegmentFunction?t.push('$RS("'):(e.sentCompleteSegmentFunction=!0,t.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')),t.push(e.segmentPrefix),n=n.toString(16),t.push(n),t.push('","'),t.push(e.placeholderPrefix),t.push(n),t.push('")</script>')}function Bi(e,t){try{var r=e.completedRootSegment;if(r!==null&&e.pendingRootTasks===0){G0(e,t,r),e.completedRootSegment=null;var a=e.responseState.bootstrapChunks;for(r=0;r<a.length-1;r++)t.push(a[r]);r<a.length&&t.push(a[r])}var n=e.clientRenderedBoundaries,o;for(o=0;o<n.length;o++){var i=n[o];a=t;var s=e.responseState,l=i.id,c=i.errorDigest,u=i.errorMessage,d=i.errorComponentStack;if(a.push(s.startInlineScript),s.sentClientRenderFunction?a.push('$RX("'):(s.sentClientRenderFunction=!0,a.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')),l===null)throw Error(G(395));if(a.push(l),a.push('"'),c||u||d){a.push(",");var h=Mi(c||"");a.push(h)}if(u||d){a.push(",");var p=Mi(u||"");a.push(p)}if(d){a.push(",");var f=Mi(d);a.push(f)}if(!a.push(")</script>")){e.destination=null,o++,n.splice(0,o);return}}n.splice(0,o);var v=e.completedBoundaries;for(o=0;o<v.length;o++)if(!ic(e,t,v[o])){e.destination=null,o++,v.splice(0,o);return}v.splice(0,o);var g=e.partialBoundaries;for(o=0;o<g.length;o++){var w=g[o];e:{n=e,i=t;var b=w.completedSegments;for(s=0;s<b.length;s++)if(!_c(n,i,w,b[s])){s++,b.splice(0,s);var C=!1;break e}b.splice(0,s),C=!0}if(!C){e.destination=null,o++,g.splice(0,o);return}}g.splice(0,o);var m=e.completedBoundaries;for(o=0;o<m.length;o++)if(!ic(e,t,m[o])){e.destination=null,o++,m.splice(0,o);return}m.splice(0,o)}finally{e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.push(null)}}function x3(e,t){try{var r=e.abortableTasks;r.forEach(function(a){return Ac(a,e,t)}),r.clear(),e.destination!==null&&Bi(e,e.destination)}catch(a){bn(e,a),j0(e,a)}}function C3(){}function Tc(e,t,r,a){var n=!1,o=null,i="",s={push:function(c){return c!==null&&(i+=c),!0},destroy:function(c){n=!0,o=c}},l=!1;if(e=y3(e,a3(r,t?t.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},1/0,C3,void 0,function(){l=!0},void 0,void 0),kc(e),x3(e,a),e.status===1)e.status=2,s.destroy(e.fatalError);else if(e.status!==2&&e.destination===null){e.destination=s;try{Bi(e,s)}catch(c){bn(e,c),j0(e,c)}}if(n)throw o;if(!l)throw Error(G(426));return i}Ta.renderToNodeStream=function(){throw Error(G(207))};Ta.renderToStaticMarkup=function(e,t){return Tc(e,t,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};Ta.renderToStaticNodeStream=function(){throw Error(G(208))};Ta.renderToString=function(e,t){return Tc(e,t,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};Ta.version="18.2.0"});var _u=ge(l1=>{"use strict";var nu=ce();function J(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var St=null,bt=0;function D(e,t){if(t.length!==0)if(512<t.length)0<bt&&(e.enqueue(new Uint8Array(St.buffer,0,bt)),St=new Uint8Array(512),bt=0),e.enqueue(t);else{var r=St.length-bt;r<t.length&&(r===0?e.enqueue(St):(St.set(t.subarray(0,r),bt),e.enqueue(St),t=t.subarray(r)),St=new Uint8Array(512),bt=0),St.set(t,bt),bt+=t.length}}function Ce(e,t){return D(e,t),!0}function Pc(e){St&&0<bt&&(e.enqueue(new Uint8Array(St.buffer,0,bt)),St=null,bt=0)}var ou=new TextEncoder;function K(e){return ou.encode(e)}function _(e){return ou.encode(e)}function iu(e,t){typeof e.error=="function"?e.error(t):e.close()}var ft=Object.prototype.hasOwnProperty,S3=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zc={},Ic={};function su(e){return ft.call(Ic,e)?!0:ft.call(Zc,e)?!1:S3.test(e)?Ic[e]=!0:(Zc[e]=!0,!1)}function st(e,t,r,a,n,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=n,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ke[e]=new st(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ke[t]=new st(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ke[e]=new st(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ke[e]=new st(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ke[e]=new st(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ke[e]=new st(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ke[e]=new st(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ke[e]=new st(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ke[e]=new st(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qi=/[\-:]([a-z])/g;function e1(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qi,e1);Ke[t]=new st(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qi,e1);Ke[t]=new st(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qi,e1);Ke[t]=new st(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ke[e]=new st(e,1,!1,e.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ke[e]=new st(e,1,!1,e.toLowerCase(),null,!0,!0)});var K0={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},b3=["Webkit","ms","Moz","O"];Object.keys(K0).forEach(function(e){b3.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),K0[t]=K0[e]})});var R3=/["'&<>]/;function Je(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var t=R3.exec(e);if(t){var r="",a,n=0;for(a=t.index;a<e.length;a++){switch(e.charCodeAt(a)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}n!==a&&(r+=e.substring(n,a)),n=a+1,r+=t}e=n!==a?r+e.substring(n,a):r}return e}var E3=/([A-Z])/g,A3=/^ms-/,Gi=Array.isArray,M3=_("<script>"),k3=_("</script>"),_3=_('<script src="'),T3=_('<script type="module" src="'),Hc=_('" async=""></script>'),L3=/(<\/|<)(s)(cript)/gi;function P3(e,t,r,a){return""+t+(r==="s"?"\\u0073":"\\u0053")+a}function Z3(e,t,r,a,n){e=e===void 0?"":e,t=t===void 0?M3:_('<script nonce="'+Je(t)+'">');var o=[];if(r!==void 0&&o.push(t,K((""+r).replace(L3,P3)),k3),a!==void 0)for(r=0;r<a.length;r++)o.push(_3,K(Je(a[r])),Hc);if(n!==void 0)for(a=0;a<n.length;a++)o.push(T3,K(Je(n[a])),Hc);return{bootstrapChunks:o,startInlineScript:t,placeholderPrefix:_(e+"P:"),segmentPrefix:_(e+"S:"),boundaryPrefix:e+"B:",idPrefix:e,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}function qt(e,t){return{insertionMode:e,selectedValue:t}}function I3(e){return qt(e==="http://www.w3.org/2000/svg"?2:e==="http://www.w3.org/1998/Math/MathML"?3:0,null)}function H3(e,t,r){switch(t){case"select":return qt(1,r.value!=null?r.value:r.defaultValue);case"svg":return qt(2,null);case"math":return qt(3,null);case"foreignObject":return qt(1,null);case"table":return qt(4,null);case"thead":case"tbody":case"tfoot":return qt(5,null);case"colgroup":return qt(7,null);case"tr":return qt(6,null)}return 4<=e.insertionMode||e.insertionMode===0?qt(1,null):e}var t1=_("<!-- -->");function Vc(e,t,r,a){return t===""?a:(a&&e.push(t1),e.push(K(Je(t))),!0)}var Dc=new Map,V3=_(' style="'),Nc=_(":"),D3=_(";");function lu(e,t,r){if(typeof r!="object")throw Error(J(62));t=!0;for(var a in r)if(ft.call(r,a)){var n=r[a];if(n!=null&&typeof n!="boolean"&&n!==""){if(a.indexOf("--")===0){var o=K(Je(a));n=K(Je((""+n).trim()))}else{o=a;var i=Dc.get(o);i!==void 0||(i=_(Je(o.replace(E3,"-$1").toLowerCase().replace(A3,"-ms-"))),Dc.set(o,i)),o=i,n=typeof n=="number"?n===0||ft.call(K0,a)?K(""+n):K(n+"px"):K(Je((""+n).trim()))}t?(t=!1,e.push(V3,o,Nc,n)):e.push(D3,o,Nc,n)}}t||e.push(na)}var Lr=_(" "),La=_('="'),na=_('"'),Oc=_('=""');function Ct(e,t,r,a){switch(r){case"style":lu(e,t,a);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N"){if(t=Ke.hasOwnProperty(r)?Ke[r]:null,t!==null){switch(typeof a){case"function":case"symbol":return;case"boolean":if(!t.acceptsBooleans)return}switch(r=K(t.attributeName),t.type){case 3:a&&e.push(Lr,r,Oc);break;case 4:a===!0?e.push(Lr,r,Oc):a!==!1&&e.push(Lr,r,La,K(Je(a)),na);break;case 5:isNaN(a)||e.push(Lr,r,La,K(Je(a)),na);break;case 6:!isNaN(a)&&1<=a&&e.push(Lr,r,La,K(Je(a)),na);break;default:t.sanitizeURL&&(a=""+a),e.push(Lr,r,La,K(Je(a)),na)}}else if(su(r)){switch(typeof a){case"function":case"symbol":return;case"boolean":if(t=r.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-")return}e.push(Lr,K(r),La,K(Je(a)),na)}}}var Pr=_(">"),$c=_("/>");function X0(e,t,r){if(t!=null){if(r!=null)throw Error(J(60));if(typeof t!="object"||!("__html"in t))throw Error(J(61));t=t.__html,t!=null&&e.push(K(""+t))}}function N3(e){var t="";return nu.Children.forEach(e,function(r){r!=null&&(t+=r)}),t}var Fi=_(' selected=""');function Ui(e,t,r,a){e.push(zt(r));var n=r=null,o;for(o in t)if(ft.call(t,o)){var i=t[o];if(i!=null)switch(o){case"children":r=i;break;case"dangerouslySetInnerHTML":n=i;break;default:Ct(e,a,o,i)}}return e.push(Pr),X0(e,n,r),typeof r=="string"?(e.push(K(Je(r))),null):r}var ji=_(`
`),O3=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Bc=new Map;function zt(e){var t=Bc.get(e);if(t===void 0){if(!O3.test(e))throw Error(J(65,e));t=_("<"+e),Bc.set(e,t)}return t}var $3=_("<!DOCTYPE html>");function B3(e,t,r,a,n){switch(t){case"select":e.push(zt("select"));var o=null,i=null;for(u in r)if(ft.call(r,u)){var s=r[u];if(s!=null)switch(u){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"defaultValue":case"value":break;default:Ct(e,a,u,s)}}return e.push(Pr),X0(e,i,o),o;case"option":i=n.selectedValue,e.push(zt("option"));var l=s=null,c=null,u=null;for(o in r)if(ft.call(r,o)){var d=r[o];if(d!=null)switch(o){case"children":s=d;break;case"selected":c=d;break;case"dangerouslySetInnerHTML":u=d;break;case"value":l=d;default:Ct(e,a,o,d)}}if(i!=null)if(r=l!==null?""+l:N3(s),Gi(i)){for(a=0;a<i.length;a++)if(""+i[a]===r){e.push(Fi);break}}else""+i===r&&e.push(Fi);else c&&e.push(Fi);return e.push(Pr),X0(e,u,s),s;case"textarea":e.push(zt("textarea")),u=i=o=null;for(s in r)if(ft.call(r,s)&&(l=r[s],l!=null))switch(s){case"children":u=l;break;case"value":o=l;break;case"defaultValue":i=l;break;case"dangerouslySetInnerHTML":throw Error(J(91));default:Ct(e,a,s,l)}if(o===null&&i!==null&&(o=i),e.push(Pr),u!=null){if(o!=null)throw Error(J(92));if(Gi(u)&&1<u.length)throw Error(J(93));o=""+u}return typeof o=="string"&&o[0]===`
`&&e.push(ji),o!==null&&e.push(K(Je(""+o))),null;case"input":e.push(zt("input")),l=u=s=o=null;for(i in r)if(ft.call(r,i)&&(c=r[i],c!=null))switch(i){case"children":case"dangerouslySetInnerHTML":throw Error(J(399,"input"));case"defaultChecked":l=c;break;case"defaultValue":s=c;break;case"checked":u=c;break;case"value":o=c;break;default:Ct(e,a,i,c)}return u!==null?Ct(e,a,"checked",u):l!==null&&Ct(e,a,"checked",l),o!==null?Ct(e,a,"value",o):s!==null&&Ct(e,a,"value",s),e.push($c),null;case"menuitem":e.push(zt("menuitem"));for(var h in r)if(ft.call(r,h)&&(o=r[h],o!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(J(400));default:Ct(e,a,h,o)}return e.push(Pr),null;case"title":e.push(zt("title")),o=null;for(d in r)if(ft.call(r,d)&&(i=r[d],i!=null))switch(d){case"children":o=i;break;case"dangerouslySetInnerHTML":throw Error(J(434));default:Ct(e,a,d,i)}return e.push(Pr),o;case"listing":case"pre":e.push(zt(t)),i=o=null;for(l in r)if(ft.call(r,l)&&(s=r[l],s!=null))switch(l){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;default:Ct(e,a,l,s)}if(e.push(Pr),i!=null){if(o!=null)throw Error(J(60));if(typeof i!="object"||!("__html"in i))throw Error(J(61));r=i.__html,r!=null&&(typeof r=="string"&&0<r.length&&r[0]===`
`?e.push(ji,K(r)):e.push(K(""+r)))}return typeof o=="string"&&o[0]===`
`&&e.push(ji),o;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(zt(t));for(var p in r)if(ft.call(r,p)&&(o=r[p],o!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(J(399,t));default:Ct(e,a,p,o)}return e.push($c),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Ui(e,r,t,a);case"html":return n.insertionMode===0&&e.push($3),Ui(e,r,t,a);default:if(t.indexOf("-")===-1&&typeof r.is!="string")return Ui(e,r,t,a);e.push(zt(t)),i=o=null;for(c in r)if(ft.call(r,c)&&(s=r[c],s!=null))switch(c){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"style":lu(e,a,s);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:su(c)&&typeof s!="function"&&typeof s!="symbol"&&e.push(Lr,K(c),La,K(Je(s)),na)}return e.push(Pr),X0(e,i,o),o}}var F3=_("</"),U3=_(">"),j3=_('<template id="'),q3=_('"></template>'),z3=_("<!--$-->"),W3=_('<!--$?--><template id="'),G3=_('"></template>'),Y3=_("<!--$!-->"),J3=_("<!--/$-->"),K3=_("<template"),X3=_('"'),Q3=_(' data-dgst="');_(' data-msg="');_(' data-stck="');var ef=_("></template>");function Fc(e,t,r){if(D(e,W3),r===null)throw Error(J(395));return D(e,r),Ce(e,G3)}var tf=_('<div hidden id="'),rf=_('">'),af=_("</div>"),nf=_('<svg aria-hidden="true" style="display:none" id="'),of=_('">'),sf=_("</svg>"),lf=_('<math aria-hidden="true" style="display:none" id="'),cf=_('">'),uf=_("</math>"),df=_('<table hidden id="'),hf=_('">'),pf=_("</table>"),ff=_('<table hidden><tbody id="'),gf=_('">'),mf=_("</tbody></table>"),vf=_('<table hidden><tr id="'),yf=_('">'),wf=_("</tr></table>"),xf=_('<table hidden><colgroup id="'),Cf=_('">'),Sf=_("</colgroup></table>");function bf(e,t,r,a){switch(r.insertionMode){case 0:case 1:return D(e,tf),D(e,t.segmentPrefix),D(e,K(a.toString(16))),Ce(e,rf);case 2:return D(e,nf),D(e,t.segmentPrefix),D(e,K(a.toString(16))),Ce(e,of);case 3:return D(e,lf),D(e,t.segmentPrefix),D(e,K(a.toString(16))),Ce(e,cf);case 4:return D(e,df),D(e,t.segmentPrefix),D(e,K(a.toString(16))),Ce(e,hf);case 5:return D(e,ff),D(e,t.segmentPrefix),D(e,K(a.toString(16))),Ce(e,gf);case 6:return D(e,vf),D(e,t.segmentPrefix),D(e,K(a.toString(16))),Ce(e,yf);case 7:return D(e,xf),D(e,t.segmentPrefix),D(e,K(a.toString(16))),Ce(e,Cf);default:throw Error(J(397))}}function Rf(e,t){switch(t.insertionMode){case 0:case 1:return Ce(e,af);case 2:return Ce(e,sf);case 3:return Ce(e,uf);case 4:return Ce(e,pf);case 5:return Ce(e,mf);case 6:return Ce(e,wf);case 7:return Ce(e,Sf);default:throw Error(J(397))}}var Ef=_('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),Af=_('$RS("'),Mf=_('","'),kf=_('")</script>'),_f=_('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),Tf=_('$RC("'),Lf=_('","'),Pf=_('")</script>'),Zf=_('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),If=_('$RX("'),Hf=_('"'),Vf=_(")</script>"),qi=_(","),Df=/[<\u2028\u2029]/g;function zi(e){return JSON.stringify(e).replace(Df,function(t){switch(t){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var An=Object.assign,Nf=Symbol.for("react.element"),cu=Symbol.for("react.portal"),uu=Symbol.for("react.fragment"),du=Symbol.for("react.strict_mode"),hu=Symbol.for("react.profiler"),pu=Symbol.for("react.provider"),fu=Symbol.for("react.context"),gu=Symbol.for("react.forward_ref"),mu=Symbol.for("react.suspense"),vu=Symbol.for("react.suspense_list"),yu=Symbol.for("react.memo"),r1=Symbol.for("react.lazy"),Of=Symbol.for("react.scope"),$f=Symbol.for("react.debug_trace_mode"),Bf=Symbol.for("react.legacy_hidden"),Ff=Symbol.for("react.default_value"),Uc=Symbol.iterator;function Yi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case uu:return"Fragment";case cu:return"Portal";case hu:return"Profiler";case du:return"StrictMode";case mu:return"Suspense";case vu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fu:return(e.displayName||"Context")+".Consumer";case pu:return(e._context.displayName||"Context")+".Provider";case gu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yu:return t=e.displayName||null,t!==null?t:Yi(e.type)||"Memo";case r1:t=e._payload,e=e._init;try{return Yi(e(t))}catch{}}return null}var wu={};function jc(e,t){if(e=e.contextTypes,!e)return wu;var r={},a;for(a in e)r[a]=t[a];return r}var ia=null;function so(e,t){if(e!==t){e.context._currentValue=e.parentValue,e=e.parent;var r=t.parent;if(e===null){if(r!==null)throw Error(J(401))}else{if(r===null)throw Error(J(401));so(e,r)}t.context._currentValue=t.value}}function xu(e){e.context._currentValue=e.parentValue,e=e.parent,e!==null&&xu(e)}function Cu(e){var t=e.parent;t!==null&&Cu(t),e.context._currentValue=e.value}function Su(e,t){if(e.context._currentValue=e.parentValue,e=e.parent,e===null)throw Error(J(402));e.depth===t.depth?so(e,t):Su(e,t)}function bu(e,t){var r=t.parent;if(r===null)throw Error(J(402));e.depth===r.depth?so(e,r):bu(e,r),t.context._currentValue=t.value}function ro(e){var t=ia;t!==e&&(t===null?Cu(e):e===null?xu(t):t.depth===e.depth?so(t,e):t.depth>e.depth?Su(t,e):bu(t,e),ia=e)}var qc={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}};function zc(e,t,r,a){var n=e.state!==void 0?e.state:null;e.updater=qc,e.props=r,e.state=n;var o={queue:[],replace:!1};e._reactInternals=o;var i=t.contextType;if(e.context=typeof i=="object"&&i!==null?i._currentValue:a,i=t.getDerivedStateFromProps,typeof i=="function"&&(i=i(r,n),n=i==null?n:An({},n,i),e.state=n),typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(t=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),t!==e.state&&qc.enqueueReplaceState(e,e.state,null),o.queue!==null&&0<o.queue.length)if(t=o.queue,i=o.replace,o.queue=null,o.replace=!1,i&&t.length===1)e.state=t[0];else{for(o=i?t[0]:e.state,n=!0,i=i?1:0;i<t.length;i++){var s=t[i];s=typeof s=="function"?s.call(e,o,r,a):s,s!=null&&(n?(n=!1,o=An({},o,s)):An(o,s))}e.state=o}else o.queue=null}var Uf={id:1,overflow:""};function Ji(e,t,r){var a=e.id;e=e.overflow;var n=32-Q0(a)-1;a&=~(1<<n),r+=1;var o=32-Q0(t)+n;if(30<o){var i=n-n%5;return o=(a&(1<<i)-1).toString(32),a>>=i,n-=i,{id:1<<32-Q0(t)+n|r<<n|a,overflow:o+e}}return{id:1<<o|r<<n|a,overflow:e}}var Q0=Math.clz32?Math.clz32:zf,jf=Math.log,qf=Math.LN2;function zf(e){return e>>>=0,e===0?32:31-(jf(e)/qf|0)|0}function Wf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Gf=typeof Object.is=="function"?Object.is:Wf,dr=null,a1=null,eo=null,we=null,Rn=!1,ao=!1,Mn=0,Zr=null,lo=0;function oa(){if(dr===null)throw Error(J(321));return dr}function Wc(){if(0<lo)throw Error(J(312));return{memoizedState:null,queue:null,next:null}}function n1(){return we===null?eo===null?(Rn=!1,eo=we=Wc()):(Rn=!0,we=eo):we.next===null?(Rn=!1,we=we.next=Wc()):(Rn=!0,we=we.next),we}function o1(){a1=dr=null,ao=!1,eo=null,lo=0,we=Zr=null}function Ru(e,t){return typeof t=="function"?t(e):t}function Gc(e,t,r){if(dr=oa(),we=n1(),Rn){var a=we.queue;if(t=a.dispatch,Zr!==null&&(r=Zr.get(a),r!==void 0)){Zr.delete(a),a=we.memoizedState;do a=e(a,r.action),r=r.next;while(r!==null);return we.memoizedState=a,[a,t]}return[we.memoizedState,t]}return e=e===Ru?typeof t=="function"?t():t:r!==void 0?r(t):t,we.memoizedState=e,e=we.queue={last:null,dispatch:null},e=e.dispatch=Yf.bind(null,dr,e),[we.memoizedState,e]}function Yc(e,t){if(dr=oa(),we=n1(),t=t===void 0?null:t,we!==null){var r=we.memoizedState;if(r!==null&&t!==null){var a=r[1];e:if(a===null)a=!1;else{for(var n=0;n<a.length&&n<t.length;n++)if(!Gf(t[n],a[n])){a=!1;break e}a=!0}if(a)return r[0]}}return e=e(),we.memoizedState=[e,t],e}function Yf(e,t,r){if(25<=lo)throw Error(J(301));if(e===dr)if(ao=!0,e={action:r,next:null},Zr===null&&(Zr=new Map),r=Zr.get(t),r===void 0)Zr.set(t,e);else{for(t=r;t.next!==null;)t=t.next;t.next=e}}function Jf(){throw Error(J(394))}function Y0(){}var Jc={readContext:function(e){return e._currentValue},useContext:function(e){return oa(),e._currentValue},useMemo:Yc,useReducer:Gc,useRef:function(e){dr=oa(),we=n1();var t=we.memoizedState;return t===null?(e={current:e},we.memoizedState=e):t},useState:function(e){return Gc(Ru,e)},useInsertionEffect:Y0,useLayoutEffect:function(){},useCallback:function(e,t){return Yc(function(){return e},t)},useImperativeHandle:Y0,useEffect:Y0,useDebugValue:Y0,useDeferredValue:function(e){return oa(),e},useTransition:function(){return oa(),[!1,Jf]},useId:function(){var e=a1.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-Q0(e)-1)).toString(32)+t;var r=to;if(r===null)throw Error(J(404));return t=Mn++,e=":"+r.idPrefix+"R"+e,0<t&&(e+="H"+t.toString(32)),e+":"},useMutableSource:function(e,t){return oa(),t(e._source)},useSyncExternalStore:function(e,t,r){if(r===void 0)throw Error(J(407));return r()}},to=null,Wi=nu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function Kf(e){return console.error(e),null}function En(){}function Xf(e,t,r,a,n,o,i,s,l){var c=[],u=new Set;return t={destination:null,responseState:t,progressiveChunkSize:a===void 0?12800:a,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:u,pingedTasks:c,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:n===void 0?Kf:n,onAllReady:o===void 0?En:o,onShellReady:i===void 0?En:i,onShellError:s===void 0?En:s,onFatalError:l===void 0?En:l},r=no(t,0,null,r,!1,!1),r.parentFlushed=!0,e=i1(t,e,null,r,u,wu,null,Uf),c.push(e),t}function i1(e,t,r,a,n,o,i,s){e.allPendingTasks++,r===null?e.pendingRootTasks++:r.pendingTasks++;var l={node:t,ping:function(){var c=e.pingedTasks;c.push(l),c.length===1&&Mu(e)},blockedBoundary:r,blockedSegment:a,abortSet:n,legacyContext:o,context:i,treeContext:s};return n.add(l),l}function no(e,t,r,a,n,o){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:a,boundary:r,lastPushedText:n,textEmbedded:o}}function kn(e,t){if(e=e.onError(t),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function oo(e,t){var r=e.onShellError;r(t),r=e.onFatalError,r(t),e.destination!==null?(e.status=2,iu(e.destination,t)):(e.status=1,e.fatalError=t)}function Kc(e,t,r,a,n){for(dr={},a1=t,Mn=0,e=r(a,n);ao;)ao=!1,Mn=0,lo+=1,we=null,e=r(a,n);return o1(),e}function Xc(e,t,r,a){var n=r.render(),o=a.childContextTypes;if(o!=null){var i=t.legacyContext;if(typeof r.getChildContext!="function")a=i;else{r=r.getChildContext();for(var s in r)if(!(s in o))throw Error(J(108,Yi(a)||"Unknown",s));a=An({},i,r)}t.legacyContext=a,Rt(e,t,n),t.legacyContext=i}else Rt(e,t,n)}function Qc(e,t){if(e&&e.defaultProps){t=An({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Ki(e,t,r,a,n){if(typeof r=="function")if(r.prototype&&r.prototype.isReactComponent){n=jc(r,t.legacyContext);var o=r.contextType;o=new r(a,typeof o=="object"&&o!==null?o._currentValue:n),zc(o,r,a,n),Xc(e,t,o,r)}else{o=jc(r,t.legacyContext),n=Kc(e,t,r,a,o);var i=Mn!==0;if(typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0)zc(n,r,a,o),Xc(e,t,n,r);else if(i){a=t.treeContext,t.treeContext=Ji(a,1,0);try{Rt(e,t,n)}finally{t.treeContext=a}}else Rt(e,t,n)}else if(typeof r=="string"){switch(n=t.blockedSegment,o=B3(n.chunks,r,a,e.responseState,n.formatContext),n.lastPushedText=!1,i=n.formatContext,n.formatContext=H3(i,r,a),Xi(e,t,o),n.formatContext=i,r){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:n.chunks.push(F3,K(r),U3)}n.lastPushedText=!1}else{switch(r){case Bf:case $f:case du:case hu:case uu:Rt(e,t,a.children);return;case vu:Rt(e,t,a.children);return;case Of:throw Error(J(343));case mu:e:{r=t.blockedBoundary,n=t.blockedSegment,o=a.fallback,a=a.children,i=new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:i,errorDigest:null},l=no(e,n.chunks.length,s,n.formatContext,!1,!1);n.children.push(l),n.lastPushedText=!1;var c=no(e,0,null,n.formatContext,!1,!1);c.parentFlushed=!0,t.blockedBoundary=s,t.blockedSegment=c;try{if(Xi(e,t,a),c.lastPushedText&&c.textEmbedded&&c.chunks.push(t1),c.status=1,io(s,c),s.pendingTasks===0)break e}catch(u){c.status=4,s.forceClientRender=!0,s.errorDigest=kn(e,u)}finally{t.blockedBoundary=r,t.blockedSegment=n}t=i1(e,o,r,l,i,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof r=="object"&&r!==null)switch(r.$$typeof){case gu:if(a=Kc(e,t,r.render,a,n),Mn!==0){r=t.treeContext,t.treeContext=Ji(r,1,0);try{Rt(e,t,a)}finally{t.treeContext=r}}else Rt(e,t,a);return;case yu:r=r.type,a=Qc(r,a),Ki(e,t,r,a,n);return;case pu:if(n=a.children,r=r._context,a=a.value,o=r._currentValue,r._currentValue=a,i=ia,ia=a={parent:i,depth:i===null?0:i.depth+1,context:r,parentValue:o,value:a},t.context=a,Rt(e,t,n),e=ia,e===null)throw Error(J(403));a=e.parentValue,e.context._currentValue=a===Ff?e.context._defaultValue:a,e=ia=e.parent,t.context=e;return;case fu:a=a.children,a=a(r._currentValue),Rt(e,t,a);return;case r1:n=r._init,r=n(r._payload),a=Qc(r,a),Ki(e,t,r,a,void 0);return}throw Error(J(130,r==null?r:typeof r,""))}}function Rt(e,t,r){if(t.node=r,typeof r=="object"&&r!==null){switch(r.$$typeof){case Nf:Ki(e,t,r.type,r.props,r.ref);return;case cu:throw Error(J(257));case r1:var a=r._init;r=a(r._payload),Rt(e,t,r);return}if(Gi(r)){eu(e,t,r);return}if(r===null||typeof r!="object"?a=null:(a=Uc&&r[Uc]||r["@@iterator"],a=typeof a=="function"?a:null),a&&(a=a.call(r))){if(r=a.next(),!r.done){var n=[];do n.push(r.value),r=a.next();while(!r.done);eu(e,t,n)}return}throw e=Object.prototype.toString.call(r),Error(J(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}typeof r=="string"?(a=t.blockedSegment,a.lastPushedText=Vc(t.blockedSegment.chunks,r,e.responseState,a.lastPushedText)):typeof r=="number"&&(a=t.blockedSegment,a.lastPushedText=Vc(t.blockedSegment.chunks,""+r,e.responseState,a.lastPushedText))}function eu(e,t,r){for(var a=r.length,n=0;n<a;n++){var o=t.treeContext;t.treeContext=Ji(o,a,n);try{Xi(e,t,r[n])}finally{t.treeContext=o}}}function Xi(e,t,r){var a=t.blockedSegment.formatContext,n=t.legacyContext,o=t.context;try{return Rt(e,t,r)}catch(l){if(o1(),typeof l=="object"&&l!==null&&typeof l.then=="function"){r=l;var i=t.blockedSegment,s=no(e,i.chunks.length,null,i.formatContext,i.lastPushedText,!0);i.children.push(s),i.lastPushedText=!1,e=i1(e,t.node,t.blockedBoundary,s,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,r.then(e,e),t.blockedSegment.formatContext=a,t.legacyContext=n,t.context=o,ro(o)}else throw t.blockedSegment.formatContext=a,t.legacyContext=n,t.context=o,ro(o),l}}function Qf(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,Au(this,t,e)}function Eu(e,t,r){var a=e.blockedBoundary;e.blockedSegment.status=3,a===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.close())):(a.pendingTasks--,a.forceClientRender||(a.forceClientRender=!0,e=r===void 0?Error(J(432)):r,a.errorDigest=t.onError(e),a.parentFlushed&&t.clientRenderedBoundaries.push(a)),a.fallbackAbortableTasks.forEach(function(n){return Eu(n,t,r)}),a.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(a=t.onAllReady,a()))}function io(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var r=t.children[0];r.id=t.id,r.parentFlushed=!0,r.status===1&&io(e,r)}else e.completedSegments.push(t)}function Au(e,t,r){if(t===null){if(r.parentFlushed){if(e.completedRootSegment!==null)throw Error(J(389));e.completedRootSegment=r}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=En,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(r.parentFlushed&&r.status===1&&io(t,r),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(Qf,e),t.fallbackAbortableTasks.clear()):r.parentFlushed&&r.status===1&&(io(t,r),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function Mu(e){if(e.status!==2){var t=ia,r=Wi.current;Wi.current=Jc;var a=to;to=e.responseState;try{var n=e.pingedTasks,o;for(o=0;o<n.length;o++){var i=n[o],s=e,l=i.blockedSegment;if(l.status===0){ro(i.context);try{Rt(s,i,i.node),l.lastPushedText&&l.textEmbedded&&l.chunks.push(t1),i.abortSet.delete(i),l.status=1,Au(s,i.blockedBoundary,l)}catch(f){if(o1(),typeof f=="object"&&f!==null&&typeof f.then=="function"){var c=i.ping;f.then(c,c)}else{i.abortSet.delete(i),l.status=4;var u=i.blockedBoundary,d=f,h=kn(s,d);if(u===null?oo(s,d):(u.pendingTasks--,u.forceClientRender||(u.forceClientRender=!0,u.errorDigest=h,u.parentFlushed&&s.clientRenderedBoundaries.push(u))),s.allPendingTasks--,s.allPendingTasks===0){var p=s.onAllReady;p()}}}finally{}}}n.splice(0,o),e.destination!==null&&s1(e,e.destination)}catch(f){kn(e,f),oo(e,f)}finally{to=a,Wi.current=r,r===Jc&&ro(t)}}}function J0(e,t,r){switch(r.parentFlushed=!0,r.status){case 0:var a=r.id=e.nextSegmentId++;return r.lastPushedText=!1,r.textEmbedded=!1,e=e.responseState,D(t,j3),D(t,e.placeholderPrefix),e=K(a.toString(16)),D(t,e),Ce(t,q3);case 1:r.status=2;var n=!0;a=r.chunks;var o=0;r=r.children;for(var i=0;i<r.length;i++){for(n=r[i];o<n.index;o++)D(t,a[o]);n=co(e,t,n)}for(;o<a.length-1;o++)D(t,a[o]);return o<a.length&&(n=Ce(t,a[o])),n;default:throw Error(J(390))}}function co(e,t,r){var a=r.boundary;if(a===null)return J0(e,t,r);if(a.parentFlushed=!0,a.forceClientRender)a=a.errorDigest,Ce(t,Y3),D(t,K3),a&&(D(t,Q3),D(t,K(Je(a))),D(t,X3)),Ce(t,ef),J0(e,t,r);else if(0<a.pendingTasks){a.rootSegmentID=e.nextSegmentId++,0<a.completedSegments.length&&e.partialBoundaries.push(a);var n=e.responseState,o=n.nextSuspenseID++;n=_(n.boundaryPrefix+o.toString(16)),a=a.id=n,Fc(t,e.responseState,a),J0(e,t,r)}else if(a.byteSize>e.progressiveChunkSize)a.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(a),Fc(t,e.responseState,a.id),J0(e,t,r);else{if(Ce(t,z3),r=a.completedSegments,r.length!==1)throw Error(J(391));co(e,t,r[0])}return Ce(t,J3)}function tu(e,t,r){return bf(t,e.responseState,r.formatContext,r.id),co(e,t,r),Rf(t,r.formatContext)}function ru(e,t,r){for(var a=r.completedSegments,n=0;n<a.length;n++)ku(e,t,r,a[n]);if(a.length=0,e=e.responseState,a=r.id,r=r.rootSegmentID,D(t,e.startInlineScript),e.sentCompleteBoundaryFunction?D(t,Tf):(e.sentCompleteBoundaryFunction=!0,D(t,_f)),a===null)throw Error(J(395));return r=K(r.toString(16)),D(t,a),D(t,Lf),D(t,e.segmentPrefix),D(t,r),Ce(t,Pf)}function ku(e,t,r,a){if(a.status===2)return!0;var n=a.id;if(n===-1){if((a.id=r.rootSegmentID)===-1)throw Error(J(392));return tu(e,t,a)}return tu(e,t,a),e=e.responseState,D(t,e.startInlineScript),e.sentCompleteSegmentFunction?D(t,Af):(e.sentCompleteSegmentFunction=!0,D(t,Ef)),D(t,e.segmentPrefix),n=K(n.toString(16)),D(t,n),D(t,Mf),D(t,e.placeholderPrefix),D(t,n),Ce(t,kf)}function s1(e,t){St=new Uint8Array(512),bt=0;try{var r=e.completedRootSegment;if(r!==null&&e.pendingRootTasks===0){co(e,t,r),e.completedRootSegment=null;var a=e.responseState.bootstrapChunks;for(r=0;r<a.length-1;r++)D(t,a[r]);r<a.length&&Ce(t,a[r])}var n=e.clientRenderedBoundaries,o;for(o=0;o<n.length;o++){var i=n[o];a=t;var s=e.responseState,l=i.id,c=i.errorDigest,u=i.errorMessage,d=i.errorComponentStack;if(D(a,s.startInlineScript),s.sentClientRenderFunction?D(a,If):(s.sentClientRenderFunction=!0,D(a,Zf)),l===null)throw Error(J(395));if(D(a,l),D(a,Hf),(c||u||d)&&(D(a,qi),D(a,K(zi(c||"")))),(u||d)&&(D(a,qi),D(a,K(zi(u||"")))),d&&(D(a,qi),D(a,K(zi(d)))),!Ce(a,Vf)){e.destination=null,o++,n.splice(0,o);return}}n.splice(0,o);var h=e.completedBoundaries;for(o=0;o<h.length;o++)if(!ru(e,t,h[o])){e.destination=null,o++,h.splice(0,o);return}h.splice(0,o),Pc(t),St=new Uint8Array(512),bt=0;var p=e.partialBoundaries;for(o=0;o<p.length;o++){var f=p[o];e:{n=e,i=t;var v=f.completedSegments;for(s=0;s<v.length;s++)if(!ku(n,i,f,v[s])){s++,v.splice(0,s);var g=!1;break e}v.splice(0,s),g=!0}if(!g){e.destination=null,o++,p.splice(0,o);return}}p.splice(0,o);var w=e.completedBoundaries;for(o=0;o<w.length;o++)if(!ru(e,t,w[o])){e.destination=null,o++,w.splice(0,o);return}w.splice(0,o)}finally{Pc(t),e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.close()}}function au(e,t){try{var r=e.abortableTasks;r.forEach(function(a){return Eu(a,e,t)}),r.clear(),e.destination!==null&&s1(e,e.destination)}catch(a){kn(e,a),oo(e,a)}}l1.renderToReadableStream=function(e,t){return new Promise(function(r,a){var n,o,i=new Promise(function(u,d){o=u,n=d}),s=Xf(e,Z3(t?t.identifierPrefix:void 0,t?t.nonce:void 0,t?t.bootstrapScriptContent:void 0,t?t.bootstrapScripts:void 0,t?t.bootstrapModules:void 0),I3(t?t.namespaceURI:void 0),t?t.progressiveChunkSize:void 0,t?t.onError:void 0,o,function(){var u=new ReadableStream({type:"bytes",pull:function(d){if(s.status===1)s.status=2,iu(d,s.fatalError);else if(s.status!==2&&s.destination===null){s.destination=d;try{s1(s,d)}catch(h){kn(s,h),oo(s,h)}}},cancel:function(){au(s)}},{highWaterMark:0});u.allReady=i,r(u)},function(u){i.catch(function(){}),a(u)},n);if(t&&t.signal){var l=t.signal,c=function(){au(s,l.reason),l.removeEventListener("abort",c)};l.addEventListener("abort",c)}Mu(s)})};l1.version="18.2.0"});var Lu=ge(sa=>{"use strict";var Pa,Tu;Pa=Lc(),Tu=_u();sa.version=Pa.version;sa.renderToString=Pa.renderToString;sa.renderToStaticMarkup=Pa.renderToStaticMarkup;sa.renderToNodeStream=Pa.renderToNodeStream;sa.renderToStaticNodeStream=Pa.renderToStaticNodeStream;sa.renderToReadableStream=Tu.renderToReadableStream});var Zu=ge(uo=>{"use strict";var eg=ce(),tg=Symbol.for("react.element"),rg=Symbol.for("react.fragment"),ag=Object.prototype.hasOwnProperty,ng=eg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,og={key:!0,ref:!0,__self:!0,__source:!0};function Pu(e,t,r){var a,n={},o=null,i=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(a in t)ag.call(t,a)&&!og.hasOwnProperty(a)&&(n[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)n[a]===void 0&&(n[a]=t[a]);return{$$typeof:tg,type:e,key:o,ref:i,props:n,_owner:ng.current}}uo.Fragment=rg;uo.jsx=Pu;uo.jsxs=Pu});var H=ge(($v,Iu)=>{"use strict";Iu.exports=Zu()});var Fu=ge(m1=>{"use strict";m1.parse=xg;m1.serialize=Cg;var yg=decodeURIComponent,wg=encodeURIComponent,go=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function xg(e,t){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var r={},a=t||{},n=e.split(";"),o=a.decode||yg,i=0;i<n.length;i++){var s=n[i],l=s.indexOf("=");if(!(l<0)){var c=s.substring(0,l).trim();if(r[c]==null){var u=s.substring(l+1,s.length).trim();u[0]==='"'&&(u=u.slice(1,-1)),r[c]=Sg(u,o)}}}return r}function Cg(e,t,r){var a=r||{},n=a.encode||wg;if(typeof n!="function")throw new TypeError("option encode is invalid");if(!go.test(e))throw new TypeError("argument name is invalid");var o=n(t);if(o&&!go.test(o))throw new TypeError("argument val is invalid");var i=e+"="+o;if(a.maxAge!=null){var s=a.maxAge-0;if(isNaN(s)||!isFinite(s))throw new TypeError("option maxAge is invalid");i+="; Max-Age="+Math.floor(s)}if(a.domain){if(!go.test(a.domain))throw new TypeError("option domain is invalid");i+="; Domain="+a.domain}if(a.path){if(!go.test(a.path))throw new TypeError("option path is invalid");i+="; Path="+a.path}if(a.expires){if(typeof a.expires.toUTCString!="function")throw new TypeError("option expires is invalid");i+="; Expires="+a.expires.toUTCString()}if(a.httpOnly&&(i+="; HttpOnly"),a.secure&&(i+="; Secure"),a.sameSite){var l=typeof a.sameSite=="string"?a.sameSite.toLowerCase():a.sameSite;switch(l){case!0:i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"strict":i+="; SameSite=Strict";break;case"none":i+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return i}function Sg(e,t){try{return t(e)}catch{return e}}});var Qu=ge((Ry,Hn)=>{"use strict";var Da={decodeValues:!0,map:!1,silent:!1};function S1(e){return typeof e=="string"&&!!e.trim()}function b1(e,t){var r=e.split(";").filter(S1),a=r.shift(),n=Pg(a),o=n.name,i=n.value;t=t?Object.assign({},Da,t):Da;try{i=t.decodeValues?decodeURIComponent(i):i}catch(l){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+i+"'. Set options.decodeValues to false to disable this feature.",l)}var s={name:o,value:i};return r.forEach(function(l){var c=l.split("="),u=c.shift().trimLeft().toLowerCase(),d=c.join("=");u==="expires"?s.expires=new Date(d):u==="max-age"?s.maxAge=parseInt(d,10):u==="secure"?s.secure=!0:u==="httponly"?s.httpOnly=!0:u==="samesite"?s.sameSite=d:s[u]=d}),s}function Pg(e){var t="",r="",a=e.split("=");return a.length>1?(t=a.shift(),r=a.join("=")):r=e,{name:t,value:r}}function Xu(e,t){if(t=t?Object.assign({},Da,t):Da,!e)return t.map?{}:[];if(e.headers)if(typeof e.headers.getSetCookie=="function")e=e.headers.getSetCookie();else if(e.headers["set-cookie"])e=e.headers["set-cookie"];else{var r=e.headers[Object.keys(e.headers).find(function(n){return n.toLowerCase()==="set-cookie"})];!r&&e.headers.cookie&&!t.silent&&console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),e=r}if(Array.isArray(e)||(e=[e]),t=t?Object.assign({},Da,t):Da,t.map){var a={};return e.filter(S1).reduce(function(n,o){var i=b1(o,t);return n[i.name]=i,n},a)}else return e.filter(S1).map(function(n){return b1(n,t)})}function Zg(e){if(Array.isArray(e))return e;if(typeof e!="string")return[];var t=[],r=0,a,n,o,i,s;function l(){for(;r<e.length&&/\s/.test(e.charAt(r));)r+=1;return r<e.length}function c(){return n=e.charAt(r),n!=="="&&n!==";"&&n!==","}for(;r<e.length;){for(a=r,s=!1;l();)if(n=e.charAt(r),n===","){for(o=r,r+=1,l(),i=r;r<e.length&&c();)r+=1;r<e.length&&e.charAt(r)==="="?(s=!0,r=i,t.push(e.substring(a,o)),a=r):r=o+1}else r+=1;(!s||r>=e.length)&&t.push(e.substring(a,e.length))}return t}Hn.exports=Xu;Hn.exports.parse=Xu;Hn.exports.parseString=b1;Hn.exports.splitCookiesString=Zg});var g2=ge((sw,f2)=>{"use strict";f2.exports=function(e){var t=e.directives,r=new Set,a=[];return Object.keys(t).forEach(function(n){var o=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();if(r.has(o))throw new Error("".concat(n," is specified more than once"));r.add(o);var i=t[n];Array.isArray(i)?i=i.join(" "):i===!0&&(i=""),i?a.push("".concat(o," ").concat(i)):i!==!1&&a.push(o)}),a.join("; ")}});var v2={};Q(v2,{default:()=>$g,logSeoTags:()=>m2});function $g({headTags:e}){return m2(e),null}function m2(e){console.log(" "),console.log("%cSEO Meta Tags",`${Bg}`),console.log(" "),e.forEach(t=>{if(t.tag==="script"){if(console.log("%c\u2022 JSON LD ",Z1),t.children)try{console.table(JSON.parse(t.children),["name","content"])}catch{console.log(t.children)}}else{if(console.log(`%c\u2022 ${t.tag} `,Z1),t.children)if(typeof t.children=="string")console.log(`\u21B3 ${t.children}`);else try{Object.entries(JSON.parse(t.children)).map(([r,a])=>console.log(`\u21B3 ${a}`))}catch{console.log(t.children)}if(t.props.property==="og:image:url"){let r=t.props.content;Fg(r).then(a=>{let n=`font-size: 400px; padding: 10px; background: white url(${a}) no-repeat center; background-size: contain;`;console.log("%c\u2022 Share image preview",Z1),console.log("%c  ",n),console.log(`\u21B3 ${r}`)}).catch(a=>{console.error(a)})}Object.entries(t.props).map(([r,a])=>{console.log(`\u21B3 ${r} \u2192 ${a}`)})}console.log(" ")})}async function Fg(e){let t=await(await(await fetch(e)).blob()).arrayBuffer();return`data:image/png;base64,${Ug(t)}`}function Ug(e){let t="",r=new Uint8Array(e),a=r.byteLength;for(let n=0;n<a;n++)t+=String.fromCharCode(r[n]);return btoa(t)}var Z1,Bg,y2=zn(()=>{Z1="text-transform: uppercase;",Bg="text-transform: uppercase; font-weight: bold; text-transform: uppercase;font-weight: bold"});var Ro=ge(pa=>{"use strict";function E8(e,t,r){var a=t.slidesToShow,n=t.currentSlide;return r.length>2*a?e+2*a:n>=r.length?r.length+e:e}function A8(e,t){if(t.length>2*e){for(var r={},a=t.length-2*e,n=t.length-a,o=a,i=0;i<n;i++)r[i]=o,o++;var s=t.length+n,l=s+t.slice(0,2*e).length,c=0;for(i=s;i<=l;i++)r[i]=c,c++;var u=s,d=0;for(i=n;i<u;i++)r[i]=d,d++;return r}r={};var h=3*t.length,p=0;for(i=0;i<h;i++)r[i]=p,++p===t.length&&(p=0);return r}function M8(e,t){return t.length<e?t:t.length>2*e?t.slice(t.length-2*e,t.length).concat(t,t.slice(0,2*e)):t.concat(t,t)}function k8(e,t){return t.length>2*e?2*e:t.length}function _8(e,t,r){var a,n=e.currentSlide,o=e.slidesToShow,i=e.itemWidth,s=e.totalItems,l=0,c=0,u=n===0,d=t.length-(t.length-2*o);return t.length<o?(c=l=0,u=a=!1):t.length>2*o?((a=n>=d+t.length)&&(c=-i*(l=n-t.length)),u&&(c=-i*(l=d+(t.length-2*o)))):((a=n>=2*t.length)&&(c=-i*(l=n-t.length)),u&&(c=r.showDots?-i*(l=t.length):-i*(l=s/3))),{isReachingTheEnd:a,isReachingTheStart:u,nextSlide:l,nextPosition:c}}Object.defineProperty(pa,"__esModule",{value:!0}),pa.getOriginalCounterPart=E8,pa.getOriginalIndexLookupTableByClones=A8,pa.getClones=M8,pa.getInitialSlideInInfiniteMode=k8,pa.checkClonesPosition=_8});var ws=ge(On=>{"use strict";Object.defineProperty(On,"__esModule",{value:!0});var T8=!1;function L8(e,t,r,a){var n=0,o=a||r;return t&&o&&(n=e[o].partialVisibilityGutter||e[o].paritialVisibilityGutter),n}function P8(e,t){var r;return t[e]&&(r=(100/t[e].items).toFixed(1)),r}function Z8(e,t,r){return Math.round(r/(t+(e.centerMode?1:0)))}On.getPartialVisibilityGutter=L8,On.getWidthFromDeviceType=P8,On.getItemClientSideWidth=Z8});var Hr=ge(kt=>{"use strict";Object.defineProperty(kt,"__esModule",{value:!0});var xs=ws();function Cs(e){var t=e.slidesToShow;return e.totalItems<t}function I8(e,t){var r,a=e.domLoaded,n=e.slidesToShow,o=e.containerWidth,i=e.itemWidth,s=t.deviceType,l=t.responsive,c=t.ssr,u=t.partialVisbile,d=t.partialVisible,h=Boolean(a&&n&&o&&i);c&&s&&!h&&(r=xs.getWidthFromDeviceType(s,l));var p=Boolean(c&&s&&!h&&r);return{shouldRenderOnSSR:p,flexBisis:r,domFullyLoaded:h,partialVisibilityGutter:xs.getPartialVisibilityGutter(l,u||d,s,e.deviceType),shouldRenderAtAll:p||h}}function H8(e,t){var r=t.currentSlide,a=t.slidesToShow;return r<=e&&e<r+a}function Nd(e,t,r){var a=r||e.transform;return!t.infinite&&e.currentSlide===0||Cs(e)?a:a+e.itemWidth/2}function V8(e){return!(0<e.currentSlide)}function Od(e){var t=e.currentSlide,r=e.totalItems;return!(t+e.slidesToShow<r)}function $d(e,t,r,a){t===void 0&&(t=0);var n=e.currentSlide,o=e.slidesToShow,i=Od(e),s=!r.infinite&&i,l=a||e.transform;if(Cs(e))return l;var c=l+n*t;return s?c+(e.containerWidth-(e.itemWidth-t)*o):c}function Bd(e,t){return e.rtl?-1*t:t}function D8(e,t,r){var a=t.partialVisbile,n=t.partialVisible,o=t.responsive,i=t.deviceType,s=t.centerMode,l=r||e.transform,c=xs.getPartialVisibilityGutter(o,a||n,i,e.deviceType);return Bd(t,n||a?$d(e,c,t,r):s?Nd(e,t,r):l)}function N8(e,t){var r=e.domLoaded,a=e.slidesToShow,n=e.containerWidth,o=e.itemWidth,i=t.deviceType,s=t.responsive,l=t.slidesToSlide||1,c=Boolean(r&&a&&n&&o);return t.ssr&&t.deviceType&&!c&&Object.keys(s).forEach(function(u){var d=s[u].slidesToSlide;i===u&&d&&(l=d)}),c&&Object.keys(s).forEach(function(u){var d=s[u],h=d.breakpoint,p=d.slidesToSlide,f=h.max,v=h.min;p&&window.innerWidth>=v&&window.innerWidth<=f&&(l=p)}),l}kt.notEnoughChildren=Cs,kt.getInitialState=I8,kt.getIfSlideIsVisbile=H8,kt.getTransformForCenterMode=Nd,kt.isInLeftEnd=V8,kt.isInRightEnd=Od,kt.getTransformForPartialVsibile=$d,kt.parsePosition=Bd,kt.getTransform=D8,kt.getSlidesToSlide=N8});var Fd=ge(Ss=>{"use strict";Object.defineProperty(Ss,"__esModule",{value:!0});var O8=function(e,t,r){var a;return function(){var n=arguments;a||(e.apply(this,n),a=!0,typeof r=="function"&&r(!0),setTimeout(function(){a=!1,typeof r=="function"&&r(!1)},t))}};Ss.default=O8});var Ud=ge(bs=>{"use strict";function $8(e,t){var r=t.partialVisbile,a=t.partialVisible,n=t.centerMode,o=t.ssr,i=t.responsive;if((r||a)&&n)throw new Error("center mode can not be used at the same time with partialVisible");if(!i)throw o?new Error("ssr mode need to be used in conjunction with responsive prop"):new Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(i&&typeof i!="object")throw new Error("responsive prop must be an object")}Object.defineProperty(bs,"__esModule",{value:!0}),bs.default=$8});var jd=ge(Rs=>{"use strict";Object.defineProperty(Rs,"__esModule",{value:!0});var B8=Hr();function F8(e,t,r){r===void 0&&(r=0);var a,n,o=e.slidesToShow,i=e.currentSlide,s=e.itemWidth,l=e.totalItems,c=B8.getSlidesToSlide(e,t),u=i+1+r+o+(0<r?0:c);return n=u<=l?-s*(a=i+r+(0<r?0:c)):l<u&&i!==l-o?-s*(a=l-o):a=void 0,{nextSlides:a,nextPosition:n}}Rs.populateNextSlides=F8});var qd=ge(Es=>{"use strict";Object.defineProperty(Es,"__esModule",{value:!0});var U8=ce(),j8=Hr(),q8=Hr();function z8(e,t,r){r===void 0&&(r=0);var a,n,o=e.currentSlide,i=e.itemWidth,s=e.slidesToShow,l=t.children,c=t.showDots,u=t.infinite,d=j8.getSlidesToSlide(e,t),h=o-r-(0<r?0:d),p=(U8.Children.toArray(l).length-s)%d;return n=0<=h?(a=h,c&&!u&&0<p&&q8.isInRightEnd(e)&&(a=o-p),-i*a):a=h<0&&o!==0?0:void 0,{nextSlides:a,nextPosition:n}}Es.populatePreviousSlides=z8});var zd=ge(As=>{"use strict";function W8(e,t,r,a,n,o){var i,s,l=e.itemWidth,c=e.slidesToShow,u=e.totalItems,d=e.currentSlide,h=t.infinite,p=!1,f=Math.round((r-a)/l),v=Math.round((a-r)/l),g=r<n;if(n<r&&f<=c){i="right";var w=Math.abs(-l*(u-c)),b=o-(a-n),C=d===u-c;(Math.abs(b)<=w||C&&h)&&(s=b,p=!0)}return g&&v<=c&&(i="left",((b=o+(n-a))<=0||d===0&&h)&&(p=!0,s=b)),{direction:i,nextPosition:s,canContinue:p}}Object.defineProperty(As,"__esModule",{value:!0}),As.populateSlidesOnMouseTouchMove=W8});var ks=ge(Me=>{"use strict";Object.defineProperty(Me,"__esModule",{value:!0});var Eo=Ro();Me.getOriginalCounterPart=Eo.getOriginalCounterPart,Me.getClones=Eo.getClones,Me.checkClonesPosition=Eo.checkClonesPosition,Me.getInitialSlideInInfiniteMode=Eo.getInitialSlideInInfiniteMode;var Ms=ws();Me.getWidthFromDeviceType=Ms.getWidthFromDeviceType,Me.getPartialVisibilityGutter=Ms.getPartialVisibilityGutter,Me.getItemClientSideWidth=Ms.getItemClientSideWidth;var Vr=Hr();Me.getInitialState=Vr.getInitialState,Me.getIfSlideIsVisbile=Vr.getIfSlideIsVisbile,Me.getTransformForCenterMode=Vr.getTransformForCenterMode,Me.getTransformForPartialVsibile=Vr.getTransformForPartialVsibile,Me.isInLeftEnd=Vr.isInLeftEnd,Me.isInRightEnd=Vr.isInRightEnd,Me.notEnoughChildren=Vr.notEnoughChildren,Me.getSlidesToSlide=Vr.getSlidesToSlide;var G8=Fd();Me.throttle=G8.default;var Y8=Ud();Me.throwError=Y8.default;var J8=jd();Me.populateNextSlides=J8.populateNextSlides;var K8=qd();Me.populatePreviousSlides=K8.populatePreviousSlides;var X8=zd();Me.populateSlidesOnMouseTouchMove=X8.populateSlidesOnMouseTouchMove});var Wd=ge(Ba=>{"use strict";var Q8=Ba&&Ba.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,n){a.__proto__=n}||function(a,n){for(var o in n)n.hasOwnProperty(o)&&(a[o]=n[o])})(t,r)};return function(t,r){function a(){this.constructor=t}e(t,r),t.prototype=r===null?Object.create(r):(a.prototype=r.prototype,new a)}}();Object.defineProperty(Ba,"__esModule",{value:!0});var e9=ce();function t9(e){return"clientY"in e}Ba.isMouseMoveEvent=t9;var r9=function(e){function t(){return e!==null&&e.apply(this,arguments)||this}return Q8(t,e),t}(e9.Component);Ba.default=r9});var Gd=ge(_s=>{"use strict";Object.defineProperty(_s,"__esModule",{value:!0});var a9=Ro(),n9=Hr();function o9(e,t,r,a){var n={},o=n9.getSlidesToSlide(t,r);return Array(e).fill(0).forEach(function(i,s){var l=a9.getOriginalCounterPart(s,t,a);if(s===0)n[0]=l;else{var c=n[s-1]+o;n[s]=c}}),n}_s.getLookupTableForNextSlides=o9});var Jd=ge(Ts=>{"use strict";Object.defineProperty(Ts,"__esModule",{value:!0});var $n=ce(),i9=Ro(),s9=Gd(),Yd=Hr(),l9=function(e){var t=e.props,r=e.state,a=e.goToSlide,n=e.getState,o=t.showDots,i=t.customDot,s=t.dotListClass,l=t.infinite,c=t.children;if(!o||Yd.notEnoughChildren(r))return null;var u,d=r.currentSlide,h=r.slidesToShow,p=Yd.getSlidesToSlide(r,t),f=$n.Children.toArray(c);u=l?Math.ceil(f.length/p):Math.ceil((f.length-h)/p)+1;var v=s9.getLookupTableForNextSlides(u,r,t,f),g=i9.getOriginalIndexLookupTableByClones(h,f),w=g[d];return $n.createElement("ul",{className:"react-multi-carousel-dot-list "+s},Array(u).fill(0).map(function(b,C){var m,k;if(l){k=v[C];var B=g[k];m=w===B||B<=w&&w<B+p}else{var Z=f.length-h,ne=C*p;m=(k=Z<ne?Z:ne)===d||k<d&&d<k+p&&d<f.length-h}return i?$n.cloneElement(i,{index:C,active:m,key:C,onClick:function(){return a(k)},carouselState:n()}):$n.createElement("li",{"data-index":C,key:C,className:"react-multi-carousel-dot "+(m?"react-multi-carousel-dot--active":"")},$n.createElement("button",{"aria-label":"Go to slide "+(C+1),onClick:function(){return a(k)}}))}))};Ts.default=l9});var Kd=ge(Mo=>{"use strict";Object.defineProperty(Mo,"__esModule",{value:!0});var Ao=ce(),c9=function(e){var t=e.customLeftArrow,r=e.getState,a=e.previous,n=e.disabled,o=e.rtl;if(t)return Ao.cloneElement(t,{onClick:function(){return a()},carouselState:r(),disabled:n,rtl:o});var i=o?"rtl":"";return Ao.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left "+i,onClick:function(){return a()},type:"button",disabled:n})};Mo.LeftArrow=c9;var u9=function(e){var t=e.customRightArrow,r=e.getState,a=e.next,n=e.disabled,o=e.rtl;if(t)return Ao.cloneElement(t,{onClick:function(){return a()},carouselState:r(),disabled:n,rtl:o});var i=o?"rtl":"";return Ao.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right "+i,onClick:function(){return a()},type:"button",disabled:n})};Mo.RightArrow=u9});var Xd=ge(Ps=>{"use strict";Object.defineProperty(Ps,"__esModule",{value:!0});var ko=ce(),Ls=ks(),d9=function(e){var t=e.props,r=e.state,a=e.goToSlide,n=e.clones,o=e.notEnoughChildren,i=r.itemWidth,s=t.children,l=t.infinite,c=t.itemClass,u=t.itemAriaLabel,d=t.partialVisbile,h=t.partialVisible,p=Ls.getInitialState(r,t),f=p.flexBisis,v=p.shouldRenderOnSSR,g=p.domFullyLoaded,w=p.partialVisibilityGutter;return p.shouldRenderAtAll?(d&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),ko.createElement(ko.Fragment,null,(l?n:ko.Children.toArray(s)).map(function(b,C){return ko.createElement("li",{key:C,"data-index":C,onClick:function(){t.focusOnSelect&&a(C)},"aria-hidden":Ls.getIfSlideIsVisbile(C,r)?"false":"true","aria-label":u||(b.props.ariaLabel?b.props.ariaLabel:null),style:{flex:v?"1 0 "+f+"%":"auto",position:"relative",width:g?((d||h)&&w&&!o?i-w:i)+"px":"auto"},className:"react-multi-carousel-item "+(Ls.getIfSlideIsVisbile(C,r)?"react-multi-carousel-item--active":"")+" "+c},b)}))):null};Ps.default=d9});var t4=ge(Bn=>{"use strict";var h9=Bn&&Bn.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,n){a.__proto__=n}||function(a,n){for(var o in n)n.hasOwnProperty(o)&&(a[o]=n[o])})(t,r)};return function(t,r){function a(){this.constructor=t}e(t,r),t.prototype=r===null?Object.create(r):(a.prototype=r.prototype,new a)}}();Object.defineProperty(Bn,"__esModule",{value:!0});var Xe=ce(),Ze=ks(),fa=Wd(),p9=Jd(),Qd=Kd(),f9=Xd(),_o=Hr(),Xt=400,e4="transform 400ms ease-in-out",g9=function(e){function t(r){var a=e.call(this,r)||this;return a.containerRef=Xe.createRef(),a.listRef=Xe.createRef(),a.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:Xe.Children.count(r.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},a.onResize=a.onResize.bind(a),a.handleDown=a.handleDown.bind(a),a.handleMove=a.handleMove.bind(a),a.handleOut=a.handleOut.bind(a),a.onKeyUp=a.onKeyUp.bind(a),a.handleEnter=a.handleEnter.bind(a),a.setIsInThrottle=a.setIsInThrottle.bind(a),a.next=Ze.throttle(a.next.bind(a),r.transitionDuration||Xt,a.setIsInThrottle),a.previous=Ze.throttle(a.previous.bind(a),r.transitionDuration||Xt,a.setIsInThrottle),a.goToSlide=Ze.throttle(a.goToSlide.bind(a),r.transitionDuration||Xt,a.setIsInThrottle),a.onMove=!1,a.initialX=0,a.lastX=0,a.isAnimationAllowed=!1,a.direction="",a.initialY=0,a.isInThrottle=!1,a.transformPlaceHolder=0,a}return h9(t,e),t.prototype.resetTotalItems=function(){var r=this,a=Xe.Children.count(this.props.children),n=Ze.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,a));this.setState({totalItems:a,currentSlide:n},function(){r.setContainerAndItemWidth(r.state.slidesToShow,!0)})},t.prototype.setIsInThrottle=function(r){r===void 0&&(r=!1),this.isInThrottle=r},t.prototype.setTransformDirectly=function(r,a){var n=this.props.additionalTransfrom;this.transformPlaceHolder=r;var o=_o.getTransform(this.state,this.props,this.transformPlaceHolder);this.listRef&&this.listRef.current&&(this.setAnimationDirectly(a),this.listRef.current.style.transform="translate3d("+(o+n)+"px,0,0)")},t.prototype.setAnimationDirectly=function(r){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=r?this.props.customTransition||e4:"none")},t.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},t.prototype.setClones=function(r,a,n,o){var i=this;o===void 0&&(o=!1),this.isAnimationAllowed=!1;var s=Xe.Children.toArray(this.props.children),l=Ze.getInitialSlideInInfiniteMode(r||this.state.slidesToShow,s),c=Ze.getClones(this.state.slidesToShow,s),u=s.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:c.length,currentSlide:n&&!o?u:l},function(){i.correctItemsPosition(a||i.state.itemWidth)})},t.prototype.setItemsToShow=function(r,a){var n=this,o=this.props.responsive;Object.keys(o).forEach(function(i){var s=o[i],l=s.breakpoint,c=s.items,u=l.max,d=l.min,h=[window.innerWidth];window.screen&&window.screen.width&&h.push(window.screen.width);var p=Math.min.apply(Math,h);d<=p&&p<=u&&(n.setState({slidesToShow:c,deviceType:i}),n.setContainerAndItemWidth(c,r,a))})},t.prototype.setContainerAndItemWidth=function(r,a,n){var o=this;if(this.containerRef&&this.containerRef.current){var i=this.containerRef.current.offsetWidth,s=Ze.getItemClientSideWidth(this.props,r,i);this.setState({containerWidth:i,itemWidth:s},function(){o.props.infinite&&o.setClones(r,s,a,n)}),a&&this.correctItemsPosition(s)}},t.prototype.correctItemsPosition=function(r,a,n){a&&(this.isAnimationAllowed=!0),!a&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var o=this.state.totalItems<this.state.slidesToShow?0:-r*this.state.currentSlide;n&&this.setTransformDirectly(o,!0),this.setState({transform:o})},t.prototype.onResize=function(r){var a;a=!!this.props.infinite&&(typeof r!="boolean"||!r),this.setItemsToShow(a)},t.prototype.componentDidUpdate=function(r,a){var n=this,o=r.keyBoardControl,i=r.autoPlay,s=r.children,l=a.containerWidth,c=a.domLoaded,u=a.currentSlide;if(this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==l&&(this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),this.itemsToShowTimeout=setTimeout(function(){n.setItemsToShow(!0)},this.props.transitionDuration||Xt)),o&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!o&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),i&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),i||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),s.length!==this.props.children.length?t.clonesTimeout=setTimeout(function(){n.props.infinite?n.setClones(n.state.slidesToShow,n.state.itemWidth,!0,!0):n.resetTotalItems()},this.props.transitionDuration||Xt):this.props.infinite&&this.state.currentSlide!==u&&this.correctClonesPosition({domLoaded:c}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform),this.props.autoPlay&&this.props.rewind&&!this.props.infinite&&Ze.isInRightEnd(this.state)){var d=this.props.transitionDuration||Xt;t.isInThrottleTimeout=setTimeout(function(){n.setIsInThrottle(!1),n.resetAutoplayInterval(),n.goToSlide(0,void 0,!!n.props.rewindWithAnimation)},d+this.props.autoPlaySpeed)}},t.prototype.correctClonesPosition=function(r){var a=this,n=r.domLoaded,o=Xe.Children.toArray(this.props.children),i=Ze.checkClonesPosition(this.state,o,this.props),s=i.isReachingTheEnd,l=i.isReachingTheStart,c=i.nextSlide,u=i.nextPosition;this.state.domLoaded&&n&&(s||l)&&(this.isAnimationAllowed=!1,t.transformTimeout=setTimeout(function(){a.setState({transform:u,currentSlide:c})},this.props.transitionDuration||Xt))},t.prototype.next=function(r){var a=this;r===void 0&&(r=0);var n=this.props,o=n.afterChange,i=n.beforeChange;if(!Ze.notEnoughChildren(this.state)){var s=Ze.populateNextSlides(this.state,this.props,r),l=s.nextSlides,c=s.nextPosition,u=this.state.currentSlide;l!==void 0&&c!==void 0&&(typeof i=="function"&&i(l,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:c,currentSlide:l},function(){typeof o=="function"&&(t.afterChangeTimeout=setTimeout(function(){o(u,a.getState())},a.props.transitionDuration||Xt))}))}},t.prototype.previous=function(r){var a=this;r===void 0&&(r=0);var n=this.props,o=n.afterChange,i=n.beforeChange;if(!Ze.notEnoughChildren(this.state)){var s=Ze.populatePreviousSlides(this.state,this.props,r),l=s.nextSlides,c=s.nextPosition;if(l!==void 0&&c!==void 0){var u=this.state.currentSlide;typeof i=="function"&&i(l,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:c,currentSlide:l},function(){typeof o=="function"&&(t.afterChangeTimeout2=setTimeout(function(){o(u,a.getState())},a.props.transitionDuration||Xt))})}}},t.prototype.resetAutoplayInterval=function(){this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),t.clonesTimeout&&clearTimeout(t.clonesTimeout),t.isInThrottleTimeout&&clearTimeout(t.isInThrottleTimeout),t.transformTimeout&&clearTimeout(t.transformTimeout),t.afterChangeTimeout&&clearTimeout(t.afterChangeTimeout),t.afterChangeTimeout2&&clearTimeout(t.afterChangeTimeout2),t.afterChangeTimeout3&&clearTimeout(t.afterChangeTimeout3)},t.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0},t.prototype.getCords=function(r){var a=r.clientX,n=r.clientY;return{clientX:_o.parsePosition(this.props,a),clientY:_o.parsePosition(this.props,n)}},t.prototype.handleDown=function(r){if(!(!fa.isMouseMoveEvent(r)&&!this.props.swipeable||fa.isMouseMoveEvent(r)&&!this.props.draggable||this.isInThrottle)){var a=this.getCords(fa.isMouseMoveEvent(r)?r:r.touches[0]),n=a.clientX,o=a.clientY;this.onMove=!0,this.initialX=n,this.initialY=o,this.lastX=n,this.isAnimationAllowed=!1}},t.prototype.handleMove=function(r){if(!(!fa.isMouseMoveEvent(r)&&!this.props.swipeable||fa.isMouseMoveEvent(r)&&!this.props.draggable||Ze.notEnoughChildren(this.state))){var a=this.getCords(fa.isMouseMoveEvent(r)?r:r.touches[0]),n=a.clientX,o=a.clientY,i=this.initialX-n,s=this.initialY-o;if(this.onMove){if(!(Math.abs(i)>Math.abs(s)))return;var l=Ze.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,n,this.transformPlaceHolder),c=l.direction,u=l.nextPosition,d=l.canContinue;c&&(this.direction=c,d&&u!==void 0&&this.setTransformDirectly(u)),this.lastX=n}}},t.prototype.handleOut=function(r){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var a=r.type==="touchend"&&!this.props.swipeable,n=(r.type==="mouseleave"||r.type==="mouseup")&&!this.props.draggable;if(!a&&!n&&this.onMove){if(this.setAnimationDirectly(!0),this.direction==="right")if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var o=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(o)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);this.direction==="left"&&(this.lastX-this.initialX>this.props.minimumTouchDrag?(o=Math.round((this.lastX-this.initialX)/this.state.itemWidth),this.previous(o)):this.correctItemsPosition(this.state.itemWidth,!0,!0)),this.resetMoveStatus()}},t.prototype.isInViewport=function(r){var a=r.getBoundingClientRect(),n=a.top,o=n===void 0?0:n,i=a.left,s=i===void 0?0:i,l=a.bottom,c=l===void 0?0:l,u=a.right,d=u===void 0?0:u;return 0<=o&&0<=s&&c<=(window.innerHeight||document.documentElement.clientHeight)&&d<=(window.innerWidth||document.documentElement.clientWidth)},t.prototype.isChildOfCarousel=function(r){return!!(r instanceof Element&&this.listRef&&this.listRef.current)&&this.listRef.current.contains(r)},t.prototype.onKeyUp=function(r){var a=r.target;switch(r.keyCode){case 37:if(this.isChildOfCarousel(a))return this.previous();break;case 39:if(this.isChildOfCarousel(a))return this.next();break;case 9:if(this.isChildOfCarousel(a)&&a instanceof HTMLInputElement&&this.isInViewport(a))return this.next()}},t.prototype.handleEnter=function(r){fa.isMouseMoveEvent(r)&&this.autoPlay&&this.props.autoPlay&&this.props.pauseOnHover&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},t.prototype.goToSlide=function(r,a,n){var o=this;if(n===void 0&&(n=!0),!this.isInThrottle){var i=this.state.itemWidth,s=this.props,l=s.afterChange,c=s.beforeChange,u=this.state.currentSlide;typeof c!="function"||a&&(typeof a!="object"||a.skipBeforeChange)||c(r,this.getState()),this.isAnimationAllowed=n,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({currentSlide:r,transform:-i*r},function(){o.props.infinite&&o.correctClonesPosition({domLoaded:!0}),typeof l!="function"||a&&(typeof a!="object"||a.skipAfterChange)||(t.afterChangeTimeout3=setTimeout(function(){l(u,o.getState())},o.props.transitionDuration||Xt))})}},t.prototype.getState=function(){return this.state},t.prototype.renderLeftArrow=function(r){var a=this,n=this.props,o=n.customLeftArrow,i=n.rtl;return Xe.createElement(Qd.LeftArrow,{customLeftArrow:o,getState:function(){return a.getState()},previous:this.previous,disabled:r,rtl:i})},t.prototype.renderRightArrow=function(r){var a=this,n=this.props,o=n.customRightArrow,i=n.rtl;return Xe.createElement(Qd.RightArrow,{customRightArrow:o,getState:function(){return a.getState()},next:this.next,disabled:r,rtl:i})},t.prototype.renderButtonGroups=function(){var r=this,a=this.props.customButtonGroup;return a?Xe.cloneElement(a,{previous:function(){return r.previous()},next:function(){return r.next()},goToSlide:function(n,o){return r.goToSlide(n,o)},carouselState:this.getState()}):null},t.prototype.renderDotsList=function(){var r=this;return Xe.createElement(p9.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return r.getState()}})},t.prototype.renderCarouselItems=function(){var r=[];if(this.props.infinite){var a=Xe.Children.toArray(this.props.children);r=Ze.getClones(this.state.slidesToShow,a)}return Xe.createElement(f9.default,{clones:r,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:Ze.notEnoughChildren(this.state),props:this.props})},t.prototype.render=function(){var r=this.props,a=r.deviceType,n=r.arrows,o=r.renderArrowsWhenDisabled,i=r.removeArrowOnDeviceType,s=r.infinite,l=r.containerClass,c=r.sliderClass,u=r.customTransition,d=r.additionalTransfrom,h=r.renderDotsOutside,p=r.renderButtonGroupOutside,f=r.className,v=r.rtl,g=Ze.getInitialState(this.state,this.props),w=g.shouldRenderOnSSR,b=g.shouldRenderAtAll,C=Ze.isInLeftEnd(this.state),m=Ze.isInRightEnd(this.state),k=n&&!(i&&(a&&-1<i.indexOf(a)||this.state.deviceType&&-1<i.indexOf(this.state.deviceType)))&&!Ze.notEnoughChildren(this.state)&&b,B=!s&&C,Z=!s&&m,ne=_o.getTransform(this.state,this.props);return Xe.createElement(Xe.Fragment,null,Xe.createElement("div",{className:"react-multi-carousel-list "+l+" "+f,dir:v?"rtl":"ltr",ref:this.containerRef},Xe.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+c,style:{transition:this.isAnimationAllowed?u||e4:"none",overflow:w?"hidden":"unset",transform:"translate3d("+(ne+d)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),k&&(!B||o)&&this.renderLeftArrow(B),k&&(!Z||o)&&this.renderRightArrow(Z),b&&!p&&this.renderButtonGroups(),b&&!h&&this.renderDotsList()),b&&h&&this.renderDotsList(),b&&p&&this.renderButtonGroups())},t.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,renderArrowsWhenDisabled:!1,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0,pauseOnHover:!0,shouldResetAutoplay:!0,rewind:!1,rtl:!1,rewindWithAnimation:!1},t}(Xe.Component);Bn.default=g9});var r4=ge(Zs=>{"use strict";Object.defineProperty(Zs,"__esModule",{value:!0});var m9=t4();Zs.default=m9.default});var n4=ge((PC,a4)=>{a4.exports=r4()});var Fs={};Q(Fs,{assets:()=>g4,assetsBuildDirectory:()=>V9,entry:()=>O9,future:()=>D9,publicPath:()=>N9,routes:()=>$9});var $1={};Q($1,{default:()=>F2});function Ee(){return Ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Ee.apply(this,arguments)}var E=A(ce());ea();var oe=A(ce());ea();var S0=class extends oe.default.Component{constructor(t){super(t),this.state={error:t.error||null,location:t.location}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location?{error:t.error||null,location:t.location}:{error:t.error||r.error,location:r.location}}render(){return this.state.error?oe.default.createElement(this.props.component,{error:this.state.error}):this.props.children}};function Aa({error:e}){return oe.default.useEffect(()=>{console.error(e)},[e]),oe.default.createElement("html",{lang:"en"},oe.default.createElement("head",null,oe.default.createElement("meta",{charSet:"utf-8"}),oe.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"}),oe.default.createElement("title",null,"Application Error!")),oe.default.createElement("body",null,oe.default.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},oe.default.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),e.stack?oe.default.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},e.stack):null),oe.default.createElement("script",{dangerouslySetInnerHTML:{__html:`
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
              );
            `}})))}function l5(){let e=vt();if(xe(e))return oe.default.createElement(h5,{caught:e});if(e instanceof Error)return oe.default.createElement(Aa,{error:e});{let t=e==null?"Unknown Error":typeof e=="object"&&"toString"in e?e.toString():JSON.stringify(e);return oe.default.createElement(Aa,{error:new Error(t)})}}var c5=oe.default.createContext(void 0);function dp(){return(0,oe.useContext)(c5)}function u5({catch:e,component:t,children:r}){return e?oe.default.createElement(c5.Provider,{value:e},oe.default.createElement(t,null)):oe.default.createElement(oe.default.Fragment,null,r)}function d5(){let e=dp();return oe.default.createElement(h5,{caught:e})}function h5({caught:e}){return oe.default.createElement("html",{lang:"en"},oe.default.createElement("head",null,oe.default.createElement("meta",{charSet:"utf-8"}),oe.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"}),oe.default.createElement("title",null,"Unhandled Thrown Response!")),oe.default.createElement("body",null,oe.default.createElement("h1",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},e.status," ",e.statusText),oe.default.createElement("script",{dangerouslySetInnerHTML:{__html:`
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws 404s (and other responses). Check out https://remix.run/guides/not-found for more information."
              );
            `}})))}function Ft(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}ea();async function p5(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch{return window.location.reload(),new Promise(()=>{})}}function f5(e,t,r){let a=e.map(o=>{var i;let s=t[o.route.id];return((i=s.links)===null||i===void 0?void 0:i.call(s))||[]}).flat(1),n=pp(e,r);return fp(a,n)}function gi(e){return e!=null&&typeof e.page=="string"}function hp(e){return e==null?!1:e.href==null?e.rel==="preload"&&(typeof e.imageSrcSet=="string"||typeof e.imagesrcset=="string")&&(typeof e.imageSizes=="string"||typeof e.imagesizes=="string"):typeof e.rel=="string"&&typeof e.href=="string"}async function g5(e,t,r){return(await Promise.all(e.map(async n=>{let o=await p5(t.routes[n.route.id],r);return o.links?o.links():[]}))).flat(1).filter(hp).filter(n=>n.rel==="stylesheet"||n.rel==="preload").map(n=>n.rel==="preload"?{...n,rel:"prefetch"}:{...n,rel:"prefetch",as:"style"})}function mi(e,t,r,a,n,o){let i=y5(e),s=(u,d)=>r[d]?u.route.id!==r[d].route.id:!0,l=(u,d)=>{var h;return r[d].pathname!==u.pathname||((h=r[d].route.path)===null||h===void 0?void 0:h.endsWith("*"))&&r[d].params["*"]!==u.params["*"]};return o==="data"&&n.search!==i.search?t.filter((u,d)=>{if(!a.routes[u.route.id].hasLoader)return!1;if(s(u,d)||l(u,d))return!0;if(u.route.shouldRevalidate){var p;let f=u.route.shouldRevalidate({currentUrl:new URL(n.pathname+n.search+n.hash,window.origin),currentParams:((p=r[0])===null||p===void 0?void 0:p.params)||{},nextUrl:new URL(e,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):t.filter((u,d)=>{let h=a.routes[u.route.id];return(o==="assets"||h.hasLoader)&&(s(u,d)||l(u,d))})}function m5(e,t,r){let a=y5(e);return vi(t.filter(n=>r.routes[n.route.id].hasLoader).map(n=>{let{pathname:o,search:i}=a,s=new URLSearchParams(i);return s.set("_data",n.route.id),`${o}?${s}`}))}function v5(e,t){return vi(e.map(r=>{let a=t.routes[r.route.id],n=[a.module];return a.imports&&(n=n.concat(a.imports)),n}).flat(1))}function pp(e,t){return vi(e.map(r=>{let a=t.routes[r.route.id],n=[a.module];return a.imports&&(n=n.concat(a.imports)),n}).flat(1))}function vi(e){return[...new Set(e)]}function fp(e,t){let r=new Set,a=new Set(t);return e.reduce((n,o)=>{if(!gi(o)&&o.as==="script"&&o.href&&a.has(o.href))return n;let s=JSON.stringify(o);return r.has(s)||(r.add(s),n.push(o)),n},[])}function y5(e){let t=Le(e);return t.search===void 0&&(t.search=""),t}var gp={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},mp=/[&><\u2028\u2029]/g;function pn(e){return e.replace(mp,t=>gp[t])}function yi(e){return{__html:e}}var w5={state:"idle",type:"init",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,submission:void 0};function C5(){let e=E.useContext(It);return Ft(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function gn(){let e=E.useContext(Ot);return Ft(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var mn=E.createContext(void 0);mn.displayName="Remix";function Ut(){let e=E.useContext(mn);return Ft(e,"You must render this element inside a <Remix> element"),e}function S5({id:e}){let{routeModules:t,future:r}=Ut();Ft(t,`Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.
Check this link for more details:
https://remix.run/pages/gotchas#server-code-in-client-bundles`);let{default:a,ErrorBoundary:n,CatchBoundary:o}=t[e];return!a&&(n||!r.v2_errorBoundary&&o)&&(a=Ht),Ft(a,`Route "${e}" has no component! Please go add a \`default\` export in the route module file.
If you were trying to navigate or submit to a resource route, use \`<a>\` instead of \`<Link>\` or \`<Form reloadDocument>\`.`),E.createElement(a,null)}function b5({id:e}){let{future:t,routeModules:r}=Ut();Ft(r,`Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.
Check this link for more details:
https://remix.run/pages/gotchas#server-code-in-client-bundles`);let a=vt(),{CatchBoundary:n,ErrorBoundary:o}=r[e];if(t.v2_errorBoundary){if(e==="root"&&(o||(o=l5)),o)return E.createElement(o,null);throw a}if(e==="root"&&(n||(n=d5),o||(o=Aa)),xe(a)){let i=a;if(i!=null&&i.error&&i.status!==404&&o)return E.createElement(o,{error:i.error});if(n)return E.createElement(u5,{catch:a,component:n})}if(a instanceof Error&&o)return E.createElement(o,{error:a});throw a}function R5(e,t){let[r,a]=E.useState(!1),[n,o]=E.useState(!1),{onFocus:i,onBlur:s,onMouseEnter:l,onMouseLeave:c,onTouchStart:u}=t,d=E.useRef(null);E.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let f=g=>{g.forEach(w=>{o(w.isIntersecting)})},v=new IntersectionObserver(f,{threshold:.5});return d.current&&v.observe(d.current),()=>{v.disconnect()}}},[e]);let h=()=>{e==="intent"&&a(!0)},p=()=>{e==="intent"&&(a(!1),o(!1))};return E.useEffect(()=>{if(r){let f=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(f)}}},[r]),[n,d,{onFocus:fn(i,h),onBlur:fn(s,p),onMouseEnter:fn(l,h),onMouseLeave:fn(c,p),onTouchStart:fn(u,h)}]}var E5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ma=E.forwardRef(({to:e,prefetch:t="none",...r},a)=>{let n=typeof e=="string"&&E5.test(e),o=nr(e),[i,s,l]=R5(t,r);return E.createElement(E.Fragment,null,E.createElement(di,Ee({},r,l,{ref:A5(a,s),to:e})),i&&!n?E.createElement(R0,{page:o}):null)});Ma.displayName="NavLink";var Y=E.forwardRef(({to:e,prefetch:t="none",...r},a)=>{let n=typeof e=="string"&&E5.test(e),o=nr(e),[i,s,l]=R5(t,r);return E.createElement(E.Fragment,null,E.createElement(w0,Ee({},r,l,{ref:A5(a,s),to:e})),i&&!n?E.createElement(R0,{page:o}):null)});Y.displayName="Link";function fn(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}var vp="\u26A0\uFE0F REMIX FUTURE CHANGE: The behavior of links `imagesizes` and `imagesrcset` will be changing in v2. Only the React camel case versions will be valid. Please change to `imageSizes` and `imageSrcSet`. For instructions on making this change see https://remix.run/docs/en/v1.15.0/pages/v2#links-imagesizes-and-imagesrcset";var yp="\u26A0\uFE0F REMIX FUTURE CHANGE: `fetcher.type` will be removed in v2. Please use `fetcher.state`, `fetcher.formData`, and `fetcher.data` to achieve the same UX. For instructions on making this change see https://remix.run/docs/en/v1.15.0/pages/v2#usefetcher",wp="\u26A0\uFE0F REMIX FUTURE CHANGE : `fetcher.submission` will be removed in v2. The submission fields are now part of the fetcher object itself (`fetcher.formData`). For instructions on making this change see https://remix.run/docs/en/v1.15.0/pages/v2#usefetcher";function b0(){let{manifest:e,routeModules:t}=Ut(),{errors:r,matches:a}=gn(),n=r?a.slice(0,a.findIndex(i=>r[i.route.id])+1):a,o=E.useMemo(()=>f5(n,t,e),[n,t,e]);return E.useEffect(()=>{o.some(i=>"imagesizes"in i||"imagesrcset"in i)&&void 0},[o]),E.createElement(E.Fragment,null,o.map(i=>{if(gi(i))return E.createElement(R0,Ee({key:i.page},i));let s=null;return"useId"in E?(i.imagesrcset&&(i.imageSrcSet=s=i.imagesrcset,delete i.imagesrcset),i.imagesizes&&(i.imageSizes=i.imagesizes,delete i.imagesizes)):(i.imageSrcSet&&(i.imagesrcset=s=i.imageSrcSet,delete i.imageSrcSet),i.imageSizes&&(i.imagesizes=i.imageSizes,delete i.imageSizes)),E.createElement("link",Ee({key:i.rel+(i.href||"")+(s||"")},i))}))}function R0({page:e,...t}){let{router:r}=C5(),a=E.useMemo(()=>Ie(r.routes,e),[r.routes,e]);return a?E.createElement(Cp,Ee({page:e,matches:a},t)):(console.warn(`Tried to prefetch ${e} but no routes matched.`),null)}function xp(e){let{manifest:t,routeModules:r}=Ut(),[a,n]=E.useState([]);return E.useEffect(()=>{let o=!1;return g5(e,t,r).then(i=>{o||n(i)}),()=>{o=!0}},[e,t,r]),a}function Cp({page:e,matches:t,...r}){let a=ve(),{manifest:n}=Ut(),{matches:o}=gn(),i=E.useMemo(()=>mi(e,t,o,n,a,"data"),[e,t,o,n,a]),s=E.useMemo(()=>mi(e,t,o,n,a,"assets"),[e,t,o,n,a]),l=E.useMemo(()=>m5(e,i,n),[i,e,n]),c=E.useMemo(()=>v5(s,n),[s,n]),u=xp(s);return E.createElement(E.Fragment,null,l.map(d=>E.createElement("link",Ee({key:d,rel:"prefetch",as:"fetch",href:d},r))),c.map(d=>E.createElement("link",Ee({key:d,rel:"modulepreload",href:d},r))),u.map(d=>E.createElement("link",Ee({key:d.href},d))))}function Sp(){let{routeModules:e}=Ut(),{errors:t,matches:r,loaderData:a}=gn(),n=ve(),o=t?r.slice(0,r.findIndex(l=>t[l.route.id])+1):r,i={},s={};for(let l of o){let c=l.route.id,u=a[c],d=l.params,h=e[c];if(h.meta){let p=typeof h.meta=="function"?h.meta({data:u,parentsData:s,params:d,location:n}):h.meta;if(p&&Array.isArray(p))throw new Error("The route at "+l.route.path+" returns an array. This is only supported with the `v2_meta` future flag in the Remix config. Either set the flag to `true` or update the route's meta function to return an object.\n\nTo reference the v1 meta function API, see https://remix.run/route/meta");Object.assign(i,p)}s[c]=u}return E.createElement(E.Fragment,null,Object.entries(i).map(([l,c])=>{if(!c)return null;if(["charset","charSet"].includes(l))return E.createElement("meta",{key:"charSet",charSet:c});if(l==="title")return E.createElement("title",{key:"title"},String(c));let u=/^(og|music|video|article|book|profile|fb):.+$/.test(l);return[c].flat().map(d=>u?E.createElement("meta",{property:l,content:d,key:l+d}):typeof d=="string"?E.createElement("meta",{name:l,content:d,key:l+d}):E.createElement("meta",Ee({key:l+JSON.stringify(d)},d)))}))}function bp(){let{routeModules:e}=Ut(),{errors:t,matches:r,loaderData:a}=gn(),n=ve(),o=t?r.slice(0,r.findIndex(c=>t[c.route.id])+1):r,i=[],s=null,l=[];for(let c=0;c<o.length;c++){let u=o[c],d=u.route.id,h=a[d],p=u.params,f=e[d],v=[],g={id:d,data:h,meta:[],params:u.params,pathname:u.pathname,handle:u.route.handle,get route(){return console.warn("The meta function in "+u.route.path+" accesses the `route` property on `matches`. This is deprecated and will be removed in Remix version 2. See"),u.route}};if(l[c]=g,f!=null&&f.meta?v=typeof f.meta=="function"?f.meta({data:h,params:p,location:n,matches:l}):Array.isArray(f.meta)?[...f.meta]:f.meta:s&&(v=[...s]),v=v||[],!Array.isArray(v))throw new Error("The `v2_meta` API is enabled in the Remix config, but the route at "+u.route.path+` returns an invalid value. In v2, all route meta functions must return an array of meta objects.

To reference the v1 meta function API, see https://remix.run/route/meta`);g.meta=v,l[c]=g,i=[...v],s=i}return E.createElement(E.Fragment,null,i.flat().map(c=>{if(!c)return null;if("tagName"in c){let u=c.tagName;return delete c.tagName,Rp(u)?E.createElement(u,Ee({key:JSON.stringify(c)},c)):(console.warn(`A meta object uses an invalid tagName: ${u}. Expected either 'link' or 'meta'`),null)}if("title"in c)return E.createElement("title",{key:"title"},String(c.title));if("charset"in c&&(c.charSet??(c.charSet=c.charset),delete c.charset),"charSet"in c&&c.charSet!=null)return typeof c.charSet=="string"?E.createElement("meta",{key:"charSet",charSet:c.charSet}):null;if("script:ld+json"in c){let u=null;try{u=JSON.stringify(c["script:ld+json"])}catch{}return u!=null&&E.createElement("script",{key:"script:ld+json",type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(c["script:ld+json"])}})}return E.createElement("meta",Ee({key:JSON.stringify(c)},c))}))}function Rp(e){return typeof e=="string"&&/^(meta|link)$/.test(e)}function E0(){let{future:e}=Ut();return e!=null&&e.v2_meta?E.createElement(bp,null):E.createElement(Sp,null)}function Ar(e){return E.createElement(dn,e)}var wi=!1;function A0(e){let{manifest:t,serverHandoffString:r,abortDelay:a,serializeError:n}=Ut(),{router:o,static:i,staticContext:s}=C5(),{matches:l}=gn(),c=ht();E.useEffect(()=>{wi=!0},[]);let u=(C,m)=>{let k;return n&&m instanceof Error?k=n(m):k=m,`${JSON.stringify(C)}:__remixContext.p(!1, ${pn(JSON.stringify(k))})`},d=(C,m,k)=>{let B;try{B=JSON.stringify(k)}catch(Z){return u(m,Z)}return`${JSON.stringify(m)}:__remixContext.p(${pn(B)})`},h=(C,m,k)=>{let B;return n&&k instanceof Error?B=n(k):B=k,`__remixContext.r(${JSON.stringify(C)}, ${JSON.stringify(m)}, !1, ${pn(JSON.stringify(B))})`},p=(C,m,k)=>{let B;try{B=JSON.stringify(k)}catch(Z){return h(C,m,Z)}return`__remixContext.r(${JSON.stringify(C)}, ${JSON.stringify(m)}, ${pn(B)})`},f=[],v=E.useMemo(()=>{var C;let m=s?`window.__remixContext = ${r};`:" ",k=s==null?void 0:s.activeDeferreds;m+=k?["__remixContext.p = function(v,e,p,x) {","  if (typeof e !== 'undefined') {",`    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,"    p=Promise.reject(x);","  } else {","    p=Promise.resolve(v);","  }","  return p;","};","__remixContext.n = function(i,k) {","  __remixContext.t = __remixContext.t || {};","  __remixContext.t[i] = __remixContext.t[i] || {};","  let p = new Promise((r, e) => {__remixContext.t[i][k] = {r:(v)=>{r(v);},e:(v)=>{e(v);}};});",typeof a=="number"?`setTimeout(() => {if(typeof p._error !== "undefined" || typeof p._data !== "undefined"){return;} __remixContext.t[i][k].e(new Error("Server timeout."))}, ${a});`:"","  return p;","};","__remixContext.r = function(i,k,v,e,p,x) {","  p = __remixContext.t[i][k];","  if (typeof e !== 'undefined') {",`    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,"    p.e(x);","  } else {","    p.r(v);","  }","};"].join(`
`)+Object.entries(k).map(([Z,ne])=>{let Se=new Set(ne.pendingKeys),ze=ne.deferredKeys.map(ke=>{if(Se.has(ke))return f.push(E.createElement(x5,{key:`${Z} | ${ke}`,deferredData:ne,routeId:Z,dataKey:ke,scriptProps:e,serializeData:p,serializeError:h})),`${JSON.stringify(ke)}:__remixContext.n(${JSON.stringify(Z)}, ${JSON.stringify(ke)})`;{let le=ne.data[ke];return typeof le._error<"u"?u(ke,le._error):d(Z,ke,le._data)}}).join(`,
`);return`Object.assign(__remixContext.state.loaderData[${JSON.stringify(Z)}], {${ze}});`}).join(`
`)+(f.length>0?`__remixContext.a=${f.length};`:""):"";let B=i?`${(C=t.hmr)!==null&&C!==void 0&&C.runtime?`import ${JSON.stringify(t.hmr.runtime)};`:""}import ${JSON.stringify(t.url)};
${l.map((Z,ne)=>`import * as route${ne} from ${JSON.stringify(t.routes[Z.route.id].module)};`).join(`
`)}
window.__remixRouteModules = {${l.map((Z,ne)=>`${JSON.stringify(Z.route.id)}:route${ne}`).join(",")}};

import(${JSON.stringify(t.entry.module)});`:" ";return E.createElement(E.Fragment,null,E.createElement("script",Ee({},e,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:yi(m),type:void 0})),E.createElement("script",Ee({},e,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:yi(B),type:"module",async:!0})))},[]);if(!i&&typeof __remixContext=="object"&&__remixContext.a)for(let C=0;C<__remixContext.a;C++)f.push(E.createElement(x5,{key:C,scriptProps:e,serializeData:p,serializeError:h}));let g=E.useMemo(()=>{if(c.location){let C=Ie(o.routes,c.location);return Ft(C,`No routes match path "${c.location.pathname}"`),C}return[]},[c.location,o.routes]),w=l.concat(g).map(C=>{let m=t.routes[C.route.id];return(m.imports||[]).concat([m.module])}).flat(1),b=wi?[]:t.entry.imports.concat(w);return wi?null:E.createElement(E.Fragment,null,E.createElement("link",{rel:"modulepreload",href:t.entry.module,crossOrigin:e.crossOrigin}),Ap(b).map(C=>E.createElement("link",{key:C,rel:"modulepreload",href:C,crossOrigin:e.crossOrigin})),v,f)}function x5({dataKey:e,deferredData:t,routeId:r,scriptProps:a,serializeData:n,serializeError:o}){return typeof document>"u"&&t&&e&&r&&Ft(t.pendingKeys.includes(e),`Deferred data for route ${r} with key ${e} was not pending but tried to render a script for it.`),E.createElement(E.Suspense,{fallback:typeof document>"u"&&t&&e&&r?null:E.createElement("script",Ee({},a,{async:!0,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:" "}}))},typeof document>"u"&&t&&e&&r?E.createElement(Ar,{resolve:t.data[e],errorElement:E.createElement(Ep,{dataKey:e,routeId:r,scriptProps:a,serializeError:o}),children:i=>E.createElement("script",Ee({},a,{async:!0,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:n(r,e,i)}}))}):E.createElement("script",Ee({},a,{async:!0,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:" "}})))}function Ep({dataKey:e,routeId:t,scriptProps:r,serializeError:a}){let n=Sa();return E.createElement("script",Ee({},r,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:a(t,e,n)}}))}function Ap(e){return[...new Set(e)]}function Mr(){let{routeModules:e}=Ut(),t=Qr();return E.useMemo(()=>t.map(r=>({id:r.id,pathname:r.pathname,params:r.params,data:r.data,handle:e[r.id].handle})),[t,e])}function ie(){return ln()}function nt(){return cn()}function M0(){let e=fi();return E.useMemo(()=>{let r={...kp({state:e.state,data:e.data,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text," _hasFetcherDoneAnything ":e[" _hasFetcherDoneAnything "]}),load:e.load,submit:e.submit,Form:e.Form};return Mp(r),r},[e])}function Mp(e){let t=e.type;Object.defineProperty(e,"type",{get(){return t},set(a){t=a},configurable:!0,enumerable:!0});let r=e.submission;Object.defineProperty(e,"submission",{get(){return r},set(a){r=a},configurable:!0,enumerable:!0})}function kp(e){let{state:t,formMethod:r,formAction:a,formEncType:n,formData:o,json:i,text:s,data:l}=e,c=r!=null&&["POST","PUT","PATCH","DELETE"].includes(r.toUpperCase());if(t==="idle")return e[" _hasFetcherDoneAnything "]===!0?{state:"idle",type:"done",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,submission:void 0,data:l}:w5;if(t==="submitting"&&r&&a&&n&&(o||i!==void 0||s!==void 0)){if(c)return{state:t,type:"actionSubmission",formMethod:r.toUpperCase(),formAction:a,formEncType:n,formData:o,json:i,text:s,submission:{method:r.toUpperCase(),action:a,encType:n,formData:o,json:i,text:s,key:""},data:l};Ft(!1,"Encountered an unexpected fetcher scenario in useFetcher()")}if(t==="loading"&&r&&a&&n){if(c)return l?{state:t,type:"actionReload",formMethod:r.toUpperCase(),formAction:a,formEncType:n,formData:o,json:i,text:s,submission:{method:r.toUpperCase(),action:a,encType:n,formData:o,json:i,text:s,key:""},data:l}:{state:t,type:"actionRedirect",formMethod:r.toUpperCase(),formAction:a,formEncType:n,formData:o,json:i,text:s,submission:{method:r.toUpperCase(),action:a,encType:n,formData:o,json:i,text:s,key:""},data:void 0};{let d=new URL(a,window.location.origin);return o&&(d.search=new URLSearchParams(o.entries()).toString()),{state:"submitting",type:"loaderSubmission",formMethod:r.toUpperCase(),formAction:a,formEncType:n,formData:o,json:i,text:s,submission:{method:r.toUpperCase(),action:d.pathname+d.search,encType:n,formData:o,json:i,text:s,key:""},data:l}}}return{state:"loading",type:"normalLoad",formMethod:void 0,formAction:void 0,formData:void 0,json:void 0,text:void 0,formEncType:void 0,submission:void 0,data:l}}var k0=()=>null;function A5(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var xi=A(ce());function _p(e){let t={};return Object.values(e).forEach(r=>{let a=r.parentId||"";t[a]||(t[a]=[]),t[a].push(r)}),t}function Ci(e,t,r,a="",n=_p(e)){return(n[a]||[]).map(o=>{let i=r.v2_errorBoundary===!0?o.id==="root"||o.hasErrorBoundary:o.id==="root"||o.hasCatchBoundary||o.hasErrorBoundary,s={caseSensitive:o.caseSensitive,element:xi.createElement(S5,{id:o.id}),errorElement:i?xi.createElement(b5,{id:o.id}):void 0,id:o.id,index:o.index,path:o.path,handle:t[o.id].handle},l=Ci(e,t,r,o.id,n);return l.length>0&&(s.children=l),s})}ea();var _0=A(ce());ea();var M5="positions";function T0({getKey:e,...t}){let r=ve(),a=Mr();C0({getKey:e,storageKey:M5});let n=_0.useMemo(()=>{if(!e)return null;let i=e(r,a);return i!==r.key?i:null},[]),o=((i,s)=>{if(!window.history.state||!window.history.state.key){let l=Math.random().toString(32).slice(2);window.history.replaceState({key:l},"")}try{let c=JSON.parse(sessionStorage.getItem(i)||"{}")[s||window.history.state.key];typeof c=="number"&&window.scrollTo(0,c)}catch(l){console.error(l),sessionStorage.removeItem(i)}}).toString();return _0.createElement("script",Ee({},t,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${o})(${JSON.stringify(M5)}, ${JSON.stringify(n)})`}}))}var L0=A(ce()),P0=A(L5());function bi({context:e,url:t,abortDelay:r}){typeof t=="string"&&(t=new URL(t));let{manifest:a,routeModules:n,serverHandoffString:o}=e,i=Ci(a.routes,n,e.future),s=(0,P0.createStaticRouter)(i,e.staticHandlerContext);return L0.createElement(mn.Provider,{value:{manifest:a,routeModules:n,serverHandoffString:o,future:e.future,serializeError:e.serializeError,abortDelay:r}},L0.createElement(S0,{location:s.state.location,component:Aa},L0.createElement(P0.StaticRouterProvider,{router:s,context:e.staticHandlerContext,hydrate:!1})))}function lr(e,t){var r=V5(e,t,"get");return Fp(e,r)}function H5(e,t,r){var a=V5(e,t,"set");return Up(e,a,r),r}function V5(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}function Fp(e,t){return t.get?t.get.call(e):t.value}function Up(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}function vn(e,t,r){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return r}function D5(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function P5(e,t,r){D5(e,t),t.set(e,r)}function Z5(e,t){D5(e,t),t.add(e)}var N5=[" daum[ /]"," deusu/"," yadirectfetcher","(?:^| )site","(?:^|[^g])news","@[a-z]","\\(at\\)[a-z]","\\(github\\.com/","\\[at\\][a-z]","^12345","^<","^[\\w \\.\\-\\(\\)]+(/v?\\d+(\\.\\d+)?(\\.\\d{1,10})?)?$","^[^ ]{50,}$","^active","^ad muncher","^amaya","^anglesharp/","^anonymous","^avsdevicesdk/","^axios/","^bidtellect/","^biglotron","^btwebclient/","^castro","^clamav[ /]","^client/","^cobweb/","^coccoc","^custom","^ddg[_-]android","^discourse","^dispatch/\\d","^downcast/","^duckduckgo","^facebook","^fdm[ /]\\d","^getright/","^gozilla/","^hatena","^hobbit","^hotzonu","^hwcdn/","^jeode/","^jetty/","^jigsaw","^linkdex","^lwp[-: ]","^metauri","^microsoft bits","^movabletype","^mozilla/\\d\\.\\d \\(compatible;?\\)$","^mozilla/\\d\\.\\d \\w*$","^navermailapp","^netsurf","^offline explorer","^php","^postman","^postrank","^python","^read","^reed","^restsharp/","^snapchat","^space bison","^svn","^swcd ","^taringa","^test certificate info","^thumbor/","^tumblr/","^user-agent:mozilla","^valid","^venus/fedoraplanet","^w3c","^webbandit/","^webcopier","^wget","^whatsapp","^xenu link sleuth","^yahoo","^yandex","^zdm/\\d","^zoom marketplace/","^{{.*}}$","adbeat\\.com","appinsights","archive","ask jeeves/teoma","bit\\.ly/","bluecoat drtr","bot","browsex","burpcollaborator","capture","catch","check","chrome-lighthouse","chromeframe","cloud","crawl","cryptoapi","dareboost","datanyze","dataprovider","dejaclick","dmbrowser","download","evc-batch/","feed","firephp","freesafeip","ghost","gomezagent","google","headlesschrome/","http","httrack","hubspot marketing grader","hydra","ibisbrowser","images","iplabel","ips-agent","java","library","mail\\.ru/","manager","monitor","morningscore/","neustar wpm","nutch","offbyone","optimize","pageburst","pagespeed","perl","phantom","pingdom","powermarks","preview","proxy","ptst[ /]\\d","reader","rexx;","rigor","rss","scan","scrape","search","serp ?reputation ?management","server","sogou","sparkler/","speedcurve","spider","splash","statuscake","stumbleupon\\.com","supercleaner","synapse","synthetic","taginspector/","torrent","tracemyfile","transcoder","trendsmapresolver","twingly recon","url","virtuoso","wappalyzer","webglance","webkit2png","websitemetadataretriever","whatcms/","wordpress","zgrab"];function jp(e){try{new RegExp("(?<! cu)bot").test("dangerbot")}catch{return e}return[["bot","(?<! cu)bot"],["google","(?<! (?:channel/|google/))google(?!(app|/google| pixel))"],["http","(?<!(?:lib))http"],["java","java(?!;)"],["search","(?<! ya(?:yandex)?)search"]].forEach(t=>{let[r,a]=t,n=e.lastIndexOf(r);~n&&e.splice(n,1,a)}),e}jp(N5);var O5="i",_r=new WeakMap,yn=new WeakMap,Z0=new WeakSet,Ri=new WeakSet,_a=class{constructor(t){return Z5(this,Ri),Z5(this,Z0),P5(this,_r,{writable:!0,value:void 0}),P5(this,yn,{writable:!0,value:void 0}),H5(this,_r,t||N5.slice()),vn(this,Z0,Ei).call(this),Object.defineProperties(a=>this.test(a),Object.entries(Object.getOwnPropertyDescriptors(_a.prototype)).reduce((a,n)=>{let[o,i]=n;return typeof i.value=="function"&&Object.assign(a,{[o]:{value:this[o].bind(this)}}),typeof i.get=="function"&&Object.assign(a,{[o]:{get:()=>this[o]}}),a},{}))}get pattern(){return new RegExp(lr(this,yn))}test(t){return Boolean(t)&&lr(this,yn).test(t)}find(){let r=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:"").match(lr(this,yn));return r&&r[0]}matches(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return lr(this,_r).filter(r=>new RegExp(r,O5).test(t))}clear(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";this.exclude(this.matches(t))}extend(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];[].push.apply(lr(this,_r),t.filter(r=>vn(this,Ri,I5).call(this,r)===-1).map(r=>r.toLowerCase())),vn(this,Z0,Ei).call(this)}exclude(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],{length:r}=t;for(;r--;){let a=vn(this,Ri,I5).call(this,t[r]);a>-1&&lr(this,_r).splice(a,1)}vn(this,Z0,Ei).call(this)}spawn(t){return new _a(t||lr(this,_r))}};function Ei(){H5(this,yn,new RegExp(lr(this,_r).join("|"),O5))}function I5(e){return lr(this,_r).indexOf(e.toLowerCase())}var $5=new _a;var B2=A(Lu());function lt(e){if(!e){let t=`flattenConnection(): needs a 'connection' to flatten, but received '${e??""}' instead.`;return console.error(t+" Returning an empty array"),[]}return"nodes"in e?e.nodes:"edges"in e&&Array.isArray(e.edges)?e.edges.map(t=>{if(!(t!=null&&t.node))throw new Error("flattenConnection(): Connection edges must contain nodes");return t.node}):[]}var cg=A(H(),1),_n=A(ce(),1);var Za="2023-07";function u1(e){let{storeDomain:t,privateStorefrontToken:r,publicStorefrontToken:a,storefrontApiVersion:n=Za,contentType:o}=e;if(!t)throw new Error(c1+`\`storeDomain\` is required when creating a new Storefront client.
Received "${t}".`);n!==Za&&lg(`The Storefront API version that you're using is different than the version this build of Hydrogen React is targeting.
You may run into unexpected errors if these versions don't match. Received verion: "${n}"; expected version "${Za}"`);let i=l=>l.includes("mock.shop"),s=l=>{let c=(l==null?void 0:l.storeDomain)??t;return c.includes("://")?c:`https://${c}`};return{getShopifyDomain:s,getStorefrontApiUrl(l){let c=s(l),u=c+(c.endsWith("/")?"api":"/api");return i(c)?u:`${u}/${(l==null?void 0:l.storefrontApiVersion)??n}/graphql.json`},getPrivateTokenHeaders(l){if(!r&&!(l!=null&&l.privateStorefrontToken)&&!i(t))throw new Error(c1+"You did not pass in a `privateStorefrontToken` while using `createStorefrontClient()` or `getPrivateTokenHeaders()`");return{"content-type":((l==null?void 0:l.contentType)??o)==="graphql"?"application/graphql":"application/json","X-SDK-Variant":"hydrogen-react","X-SDK-Variant-Source":"react","X-SDK-Version":n,"Shopify-Storefront-Private-Token":(l==null?void 0:l.privateStorefrontToken)??r??"",...l!=null&&l.buyerIp?{"Shopify-Storefront-Buyer-IP":l.buyerIp}:{}}},getPublicTokenHeaders(l){if(!a&&!(l!=null&&l.publicStorefrontToken)&&!i(t))throw new Error(c1+"You did not pass in a `publicStorefrontToken` while using `createStorefrontClient()` or `getPublicTokenHeaders()`");let c=(l==null?void 0:l.contentType)??o??"json";return ig(c,n,(l==null?void 0:l.publicStorefrontToken)??a??"")}}}function ig(e,t,r){return{"content-type":e==="graphql"?"application/graphql":"application/json","X-SDK-Variant":"hydrogen-react","X-SDK-Variant-Source":"react","X-SDK-Version":t,"X-Shopify-Storefront-Access-Token":r}}var Hu=new Set,c1="[h2:error:createStorefrontClient] ",sg="[h2:warn:createStorefrontClient] ",lg=e=>{Hu.has(e)||(console.warn(sg+e),Hu.add(e))};var ug={storeDomain:"test",storefrontToken:"abc123",storefrontApiVersion:Za,countryIsoCode:"US",languageIsoCode:"EN",getStorefrontApiUrl(){return""},getPublicTokenHeaders(){return{}},getShopifyDomain(){return""}},dg=(0,_n.createContext)(ug);function Vu(){let e=(0,_n.useContext)(dg);if(!e)throw new Error("'useShop()' must be a descendent of <ShopifyProvider/>");return e}var d1="Shopify-Storefront-Id",h1="Shopify-Storefront-Y",p1="Shopify-Storefront-S",la="_shopify_y",ca="_shopify_s";var hg=new Set(["domain","path","max-age","expires","samesite","secure","httponly"]);function Du(e){let t={},r,a,n=0,o=e.split(/;\s*/g),i,s;for(;n<o.length;n++)if(a=o[n],r=a.indexOf("="),~r){if(i=a.substring(0,r++).trim(),s=a.substring(r).trim(),s[0]==='"'&&(s=s.substring(1,s.length-1)),~s.indexOf("%"))try{s=decodeURIComponent(s)}catch{}hg.has(a=i.toLowerCase())?a==="expires"?t.expires=new Date(s):a==="max-age"?t.maxage=+s:t[a]=s:t[i]=s}else(i=a.trim().toLowerCase())&&(i==="httponly"||i==="secure")&&(t[i]=!0);return t}function ho(e){let t=Du(e);return{[la]:t[la]||"",[ca]:t[ca]||""}}function po(e){let t={id:"",resource:null,resourceId:null,search:"",searchParams:new URLSearchParams,hash:""};if(typeof e!="string")return t;try{let{search:r,searchParams:a,pathname:n,hash:o}=new URL(e),i=n.split("/"),s=i[i.length-1],l=i[i.length-2];return!s||!l?t:{id:`${s}${r}${o}`||"",resource:l??null,resourceId:s||null,search:r,searchParams:a,hash:o}}catch{return t}}var Ln=A(H(),1);var Tn=A(ce(),1);function f1(e){let{countryIsoCode:t,languageIsoCode:r}=Vu(),a=r.includes("_")?r.replace("_","-"):`${r}-${t}`;if(!a)throw new Error("useMoney(): Unable to get 'locale' from 'useShop()', which means that 'locale' was not passed to '<ShopifyProvider/>'. 'locale' is required for 'useMoney()' to work");let n=parseFloat(e.amount),o=(0,Tn.useMemo)(()=>({style:"currency",currency:e.currencyCode}),[e.currencyCode]),i=Ia(a,o),s=Ia(a,{...o,currencyDisplay:"name"}),l=Ia(a,{...o,currencyDisplay:"narrowSymbol"}),c=Ia(a,{...o,minimumFractionDigits:0,maximumFractionDigits:0}),u=Ia(a),d=Ia(a,{minimumFractionDigits:0,maximumFractionDigits:0}),h=f=>f.type==="currency",p=(0,Tn.useMemo)(()=>({original:()=>e,currencyCode:()=>e.currencyCode,localizedString:()=>i().format(n),parts:()=>i().formatToParts(n),withoutTrailingZeros:()=>n%1===0?c().format(n):i().format(n),withoutTrailingZerosAndCurrency:()=>n%1===0?d().format(n):u().format(n),currencyName:()=>{var f;return((f=s().formatToParts(n).find(h))==null?void 0:f.value)??e.currencyCode},currencySymbol:()=>{var f;return((f=i().formatToParts(n).find(h))==null?void 0:f.value)??e.currencyCode},currencyNarrowSymbol:()=>{var f;return((f=l().formatToParts(n).find(h))==null?void 0:f.value)??""},amount:()=>i().formatToParts(n).filter(f=>["decimal","fraction","group","integer","literal"].includes(f.type)).map(f=>f.value).join("")}),[e,n,s,i,l,u,c,d]);return(0,Tn.useMemo)(()=>new Proxy(p,{get:(f,v)=>{var g;return(g=Reflect.get(f,v))==null?void 0:g.call(null)}}),[p])}function Ia(e,t){return(0,Tn.useMemo)(()=>{let r;return()=>r??(r=new Intl.NumberFormat(e,t))},[e,t])}function Re({data:e,as:t,withoutCurrency:r,withoutTrailingZeros:a,measurement:n,measurementSeparator:o="/",...i}){if(!pg(e))throw new Error("<Money/> needs a valid 'data' prop that has 'amount' and 'currencyCode'");let s=f1(e),l=t??"div",c=s.localizedString;return(r||a)&&(r&&!a?c=s.amount:!r&&a?c=s.withoutTrailingZeros:c=s.withoutTrailingZerosAndCurrency),(0,Ln.jsxs)(l,{...i,children:[c,n&&n.referenceUnit&&(0,Ln.jsxs)(Ln.Fragment,{children:[o,n.referenceUnit]})]})}function pg(e){return typeof e.amount=="string"&&!!e.amount&&typeof e.currencyCode=="string"&&!!e.currencyCode}var Pn=A(H(),1),Wt=A(ce(),1);var Ve=Wt.forwardRef(({alt:e,aspectRatio:t,crop:r="center",data:a,decoding:n="async",height:o="auto",loader:i=fo,loaderOptions:s,loading:l="lazy",sizes:c,src:u,srcSetOptions:d={intervals:15,startingWidth:200,incrementSize:200,placeholderWidth:100},width:h="100%",widths:p,...f},v)=>{let g=Wt.useMemo(()=>{let ne=a!=null&&a.width&&(a!=null&&a.height)?a==null?void 0:a.width:void 0,Se=a!=null&&a.width&&(a!=null&&a.height)?a==null?void 0:a.height:void 0;return{width:ne,height:Se,unitsMatch:Boolean(Nu(ne,Se))}},[a]),w=Wt.useMemo(()=>{let Se=Zn((h||"100%").toString()),ze=`${Se.number}${Se.unit}`,ke=o==null,le=ke?null:Zn(o.toString()),_t=le?`${le.number}${le.unit}`:"",Tt=ke?"auto":_t,mr=u||(a==null?void 0:a.url),Lt=a!=null&&a.altText&&!e?a==null?void 0:a.altText:e||"",vr=t||(g.unitsMatch?[In(g.width),In(g.height)].join("/"):void 0);return{width:ze,height:Tt,src:mr,alt:Lt,aspectRatio:vr}},[h,o,u,a,e,t,g,f==null?void 0:f.key]),{intervals:b,startingWidth:C,incrementSize:m,placeholderWidth:k}=d,B=Wt.useMemo(()=>mg(h,b,C,m),[h,b,C,m]);return Ou(w.width)?(0,Pn.jsx)(fg,{aspectRatio:t,crop:r,decoding:n,height:o,imageWidths:B,loader:i,loading:l,normalizedProps:w,passthroughProps:f,ref:v,width:h}):(0,Pn.jsx)(gg,{aspectRatio:t,crop:r,decoding:n,imageWidths:B,loader:i,loading:l,normalizedProps:w,passthroughProps:f,placeholderWidth:k,ref:v,sizes:c})}),fg=Wt.forwardRef(({aspectRatio:e,crop:t,decoding:r,height:a,imageWidths:n,loader:o=fo,loading:i,normalizedProps:s,passthroughProps:l,width:c},u)=>{let d=Wt.useMemo(()=>{let h=In(c),p=In(a),f=e||(Nu(s.width,s.height)?[h,p].join("/"):s.aspectRatio?s.aspectRatio:void 0),v=n===void 0?void 0:Bu(n,f,t),g=p||(f&&h?h*(g1(f)??1):void 0),w=$u(s.src,v,o),b=o({src:s.src,width:h,height:g,crop:s.height==="auto"?void 0:t});return{width:h,aspectRatio:f,height:g,srcSet:w,src:b}},[e,t,a,n,o,s,c]);return(0,Pn.jsx)("img",{ref:u,alt:s.alt,decoding:r,height:d.height,loading:i,src:d.src,srcSet:d.srcSet,width:d.width,style:{aspectRatio:d.aspectRatio,...l.style},...l})}),gg=Wt.forwardRef(({crop:e,decoding:t,imageWidths:r,loader:a=fo,loading:n,normalizedProps:o,passthroughProps:i,placeholderWidth:s,sizes:l},c)=>{let u=Wt.useMemo(()=>{let d=r===void 0?void 0:Bu(r,o.aspectRatio,e),h=o.aspectRatio&&s?s*(g1(o.aspectRatio)??1):void 0,p=$u(o.src,d,a),f=a({src:o.src,width:s,height:h,crop:e});return{placeholderHeight:h,srcSet:p,src:f}},[e,r,a,o,s]);return(0,Pn.jsx)("img",{ref:c,alt:o.alt,decoding:t,height:u.placeholderHeight,loading:n,sizes:l,src:u.src,srcSet:u.srcSet,width:s,...i,style:{width:o.width,aspectRatio:o.aspectRatio,...i.style}})});function fo({src:e,width:t,height:r,crop:a}){if(!e)return"";let n=new URL(e);return t&&n.searchParams.append("width",Math.round(t).toString()),r&&n.searchParams.append("height",Math.round(r).toString()),a&&n.searchParams.append("crop",a),n.href}function Nu(e="100%",t="auto"){return Zn(e.toString()).unit===Zn(t.toString()).unit}function Zn(e){let t=e.replace(/[0-9.]/g,""),r=parseFloat(e.replace(t,""));return{unit:t===""?r===void 0?"auto":"px":t,number:r}}function In(e){if(e===void 0)return;let{unit:t,number:r}=Zn(e.toString());switch(t){case"em":return r*16;case"rem":return r*16;case"px":return r;case"":return r;default:return}}function Ou(e){return typeof e=="number"||typeof e=="string"&&/\d(px|em|rem)$/.test(e)}function $u(e,t,r=fo){return e?(t==null?void 0:t.length)===0||!t?e:t.map((a,n)=>`${r({src:e,width:a.width,height:a.height,crop:a.crop})} ${t.length===3?`${n+1}x`:`${a.width??0}w`}`).join(", "):""}function mg(e="100%",t,r,a){let n=Array.from({length:t},(i,s)=>s*a+r),o=Array.from({length:3},(i,s)=>(s+1)*(In(e)??0));return Ou(e)?o:n}function g1(e){if(!e)return;let[t,r]=e.split("/");return 1/(Number(t)/Number(r))}function Bu(e,t,r="center"){return e?e.map(n=>({width:n,height:t?n*(g1(t)??1):void 0,crop:r})):void 0}var vo=A(Fu());var Uu={};function mo(e,t){!e&&!Uu[t]&&(Uu[t]=!0,console.warn(t))}var v1=({sign:e,unsign:t})=>(r,a={})=>{let{secrets:n=[],...o}={path:"/",sameSite:"lax",...a};return kg(r,o.expires),{get name(){return r},get isSigned(){return n.length>0},get expires(){return typeof o.maxAge<"u"?new Date(Date.now()+o.maxAge*1e3):o.expires},async parse(i,s){if(!i)return null;let l=(0,vo.parse)(i,{...o,...s});return r in l?l[r]===""?"":await Rg(t,l[r],n):null},async serialize(i,s){return(0,vo.serialize)(r,i===""?"":await bg(e,i,n),{...o,...s})}}},Ha=e=>e!=null&&typeof e.name=="string"&&typeof e.isSigned=="boolean"&&typeof e.parse=="function"&&typeof e.serialize=="function";async function bg(e,t,r){let a=Eg(t);return r.length>0&&(a=await e(a,r[0])),a}async function Rg(e,t,r){if(r.length>0){for(let a of r){let n=await e(t,a);if(n!==!1)return ju(n)}return null}return ju(t)}function Eg(e){return btoa(Mg(encodeURIComponent(JSON.stringify(e))))}function ju(e){try{return JSON.parse(decodeURIComponent(Ag(atob(e))))}catch{return{}}}function Ag(e){let t=e.toString(),r="",a=0,n,o;for(;a<t.length;)n=t.charAt(a++),/[\w*+\-./@]/.exec(n)?r+=n:(o=n.charCodeAt(0),o<256?r+="%"+qu(o,2):r+="%u"+qu(o,4).toUpperCase());return r}function qu(e,t){let r=e.toString(16);for(;r.length<t;)r="0"+r;return r}function Mg(e){let t=e.toString(),r="",a=0,n,o;for(;a<t.length;){if(n=t.charAt(a++),n==="%"){if(t.charAt(a)==="u"){if(o=t.slice(a+1,a+5),/^[\da-f]{4}$/i.exec(o)){r+=String.fromCharCode(parseInt(o,16)),a+=5;continue}}else if(o=t.slice(a,a+2),/^[\da-f]{2}$/i.exec(o)){r+=String.fromCharCode(parseInt(o,16)),a+=2;continue}}r+=n}return r}function kg(e,t){mo(!t,`The "${e}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`)}ar();ar();var hr=function(e){return e.Development="development",e.Production="production",e.Test="test",e}({});function zu(e){return e===hr.Development||e===hr.Production||e===hr.Test}function y1(e,t){if(e instanceof Error&&t!==hr.Development){let r=new Error("Unexpected Server Error");return r.stack=void 0,r}return e}function w1(e,t){return Object.entries(e).reduce((r,[a,n])=>Object.assign(r,{[a]:y1(n,t)}),{})}function Va(e,t){let r=y1(e,t);return{message:r.message,stack:r.stack}}function x1(e,t){if(!e)return null;let r=Object.entries(e),a={};for(let[n,o]of r)if(xe(o))a[n]={...o,__type:"RouteErrorResponse"};else if(o instanceof Error){let i=y1(o,t);a[n]={message:i.message,stack:i.stack,__type:"Error",...i.name!=="Error"?{__subType:i.name}:{}}}else a[n]=o;return a}var M=(e,t={})=>Nt(e,t),Gt=(e,t={})=>Yr(e,t),j=(e,t=302)=>Jr(e,t);function Gu(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Ir(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}var _g=new Set([301,302,303,307,308]);function C1(e){return _g.has(e)}function Yu(e){return C1(e.status)}function Tg(e){return e!=null&&typeof e.then=="function"&&e._tracked===!0}var Lg="__deferred_promise:";function Ju(e,t,r){let a=new TextEncoder;return new ReadableStream({async start(o){let i={},s=[];for(let[c,u]of Object.entries(e.data))Tg(u)?(i[c]=`${Lg}${c}`,(typeof u._data<"u"||typeof u._error<"u")&&s.push(c)):i[c]=u;o.enqueue(a.encode(JSON.stringify(i)+`

`));for(let c of s)Wu(o,a,c,e.data[c],r);let l=e.subscribe((c,u)=>{u&&Wu(o,a,u,e.data[u],r)});await e.resolveData(t),l(),o.close()}})}function Wu(e,t,r,a,n){"_error"in a?e.enqueue(t.encode("error:"+JSON.stringify({[r]:a._error instanceof Error?Va(a._error,n):a._error})+`

`)):e.enqueue(t.encode("data:"+JSON.stringify({[r]:a._data??null})+`

`))}ar();function Ku(e){return Object.keys(e).reduce((t,r)=>(t[r]=e[r].module,t),{})}var e2=A(Qu());function t2(e,t){let r=t.errors?t.matches.findIndex(o=>t.errors[o.route.id]):-1,a=r>=0?t.matches.slice(0,r+1):t.matches,n;if(r>=0){let{actionHeaders:o,actionData:i,loaderHeaders:s,loaderData:l}=t;t.matches.slice(r).some(c=>{let u=c.route.id;return o[u]&&(!i||i[u]===void 0)?n=o[u]:s[u]&&l[u]===void 0&&(n=s[u]),n!=null})}return a.reduce((o,i,s)=>{let{id:l}=i.route,c=e.routes[l].module,u=t.loaderHeaders[l]||new Headers,d=t.actionHeaders[l]||new Headers,h=n!=null&&s===a.length-1,p=h&&n!==u&&n!==d;if(c.headers==null&&e.future.v2_headers){let v=new Headers(o);return p&&ua(n,v),ua(d,v),ua(u,v),v}let f=new Headers(c.headers?typeof c.headers=="function"?c.headers({loaderHeaders:u,parentHeaders:o,actionHeaders:d,errorHeaders:h?n:void 0}):c.headers:void 0);return p&&ua(n,f),ua(d,f),ua(u,f),ua(o,f),f},new Headers)}function ua(e,t){let r=e.get("Set-Cookie");r&&(0,e2.splitCookiesString)(r).forEach(n=>{t.append("Set-Cookie",n)})}function r2(e,t){if(e===!1||e===null||typeof e>"u")throw console.error("The following error is a bug in Remix; please open an issue! https://github.com/remix-run/remix/issues/new"),new Error(t)}ar();function a2(e,t){let r=Ie(e,t);return r?r.map(a=>({params:a.params,pathname:a.pathname,route:a.route})):null}async function n2({loadContext:e,action:t,params:r,request:a,routeId:n}){let o=await t({request:s2(i2(a)),context:e,params:r});if(o===void 0)throw new Error(`You defined an action for route "${n}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);return Ir(o)?o:M(o)}async function o2({loadContext:e,loader:t,params:r,request:a,routeId:n}){let o=await t({request:s2(i2(a)),context:e,params:r});if(o===void 0)throw new Error(`You defined a loader for route "${n}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`);return Gu(o)?o.init&&C1(o.init.status||200)?j(new Headers(o.init.headers).get("Location"),o.init):o:Ir(o)?o:M(o)}function i2(e){let t=new URL(e.url),r=t.searchParams.getAll("index");t.searchParams.delete("index");let a=[];for(let n of r)n&&a.push(n);for(let n of a)t.searchParams.append("index",n);return new Request(t.href,e)}function s2(e){let t=new URL(e.url);return t.searchParams.delete("_data"),new Request(t.href,e)}function l2(e){let t={};return Object.values(e).forEach(r=>{let a=r.parentId||"";t[a]||(t[a]=[]),t[a].push(r)}),t}function R1(e,t="",r=l2(e)){return(r[t]||[]).map(a=>({...a,children:R1(e,a.id,r)}))}function E1(e,t,r="",a=l2(e)){return(a[r]||[]).map(n=>{let i={hasErrorBoundary:t.v2_errorBoundary===!0?n.id==="root"||n.module.ErrorBoundary!=null:n.id==="root"||n.module.CatchBoundary!=null||n.module.ErrorBoundary!=null,id:n.id,path:n.path,loader:n.module.loader?s=>o2({request:s.request,params:s.params,loadContext:s.context,loader:n.module.loader,routeId:n.id}):void 0,action:n.module.action?s=>n2({request:s.request,params:s.params,loadContext:s.context,action:n.module.action,routeId:n.id}):void 0,handle:n.module.handle};return n.index?{index:!0,...i}:{caseSensitive:n.caseSensitive,children:E1(e,t,n.id,a),...i}})}var Ig={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},Hg=/[&><\u2028\u2029]/g;function c2(e){return e.replace(Hg,t=>Ig[t])}function A1(e){return c2(JSON.stringify(e))}var M1=(e,t)=>{let r=R1(e.routes),a=E1(e.routes,e.future),n=zu(t)?t:hr.Production,o=Yo(a),i=e.entry.module.handleError||((s,{request:l})=>{n!==hr.Test&&!l.signal.aborted&&console.error(s)});return async function(l,c={}){let u=new URL(l.url),d=a2(r,u.pathname),h=v=>i(v,{context:c,params:d&&d.length>0?d[0].params:{},request:l}),p;if(u.searchParams.has("_data")){let v=u.searchParams.get("_data");if(p=await Vg(n,o,v,l,c,h),e.entry.module.handleDataRequest){var f;p=await e.entry.module.handleDataRequest(p,{context:c,params:(d==null||(f=d.find(g=>g.route.id==v))===null||f===void 0?void 0:f.params)||{},request:l})}}else d&&d[d.length-1].route.module.default==null?p=await Ng(n,o,d.slice(-1)[0].route.id,l,c,h):p=await Dg(n,e,o,l,c,h);return l.method==="HEAD"?new Response(null,{headers:p.headers,status:p.status,statusText:p.statusText}):p}};async function Vg(e,t,r,a,n,o){try{let i=await t.queryRoute(a,{routeId:r,requestContext:n});if(Yu(i)){let s=new Headers(i.headers);return s.set("X-Remix-Redirect",s.get("Location")),s.set("X-Remix-Status",i.status),s.delete("Location"),i.headers.get("Set-Cookie")!==null&&s.set("X-Remix-Revalidate","yes"),new Response(null,{status:204,headers:s})}if(rn in i){let s=i[rn],l=Ju(s,a.signal,e),c=s.init||{},u=new Headers(c.headers);return u.set("Content-Type","text/remix-deferred"),u.set("X-Remix-Response","yes"),c.headers=u,new Response(l,c)}return i.headers.set("X-Remix-Response","yes"),i}catch(i){if(Ir(i))return i.headers.set("X-Remix-Catch","yes"),i;if(xe(i))return i.error&&o(i.error),h2(i,e);let s=i instanceof Error?i:new Error("Unexpected Server Error");return o(s),Nt(Va(s,e),{status:500,headers:{"X-Remix-Error":"yes"}})}}function d2(e,t,r){let a=e[t]||e.root,n=xe(r)&&(!r.error||r.status===404);return n&&a.module.CatchBoundary||!n&&a.module.ErrorBoundary||!a.parentId?a.id:d2(e,a.parentId,r)}function u2(e,t){if(!t.errors)return;let r={};for(let a of Object.keys(t.errors)){let n=t.errors[a],o=d2(e.routes,a,n);r[o]=n}t.errors=r}async function Dg(e,t,r,a,n,o){let i;try{i=await r.query(a,{requestContext:n})}catch(u){return o(u),new Response(null,{status:500})}if(Ir(i))return i;i.errors&&(Object.values(i.errors).forEach(u=>{(!xe(u)||u.error)&&o(u)}),i.errors=w1(i.errors,e)),t.future.v2_errorBoundary!==!0&&u2(t,i);let s=t2(t,i),l={manifest:t.assets,routeModules:Ku(t.routes),staticHandlerContext:i,serverHandoffString:A1({url:i.location.pathname,state:{loaderData:i.loaderData,actionData:i.actionData,errors:x1(i.errors,e)},future:t.future}),future:t.future,serializeError:u=>Va(u,e)},c=t.entry.module.default;try{return await c(a,i.statusCode,s,l,n)}catch(u){o(u),i=Jo(r.dataRoutes,i,u),i.errors&&(i.errors=w1(i.errors,e)),t.future.v2_errorBoundary!==!0&&u2(t,i),l={...l,staticHandlerContext:i,serverHandoffString:A1({url:i.location.pathname,state:{loaderData:i.loaderData,actionData:i.actionData,errors:x1(i.errors,e)},future:t.future})};try{return await c(a,i.statusCode,s,l,n)}catch(d){return o(d),p2(d,e)}}}async function Ng(e,t,r,a,n,o){try{let i=await t.queryRoute(a,{routeId:r,requestContext:n});return r2(Ir(i),"Expected a Response to be returned from queryRoute"),i}catch(i){return Ir(i)?(i.headers.set("X-Remix-Catch","yes"),i):xe(i)?(i.error&&o(i.error),h2(i,e)):(o(i),p2(i,e))}}function h2(e,t){return Nt(Va(e.error||new Error("Unexpected Server Error"),t),{status:e.status,statusText:e.statusText,headers:{"X-Remix-Error":"yes"}})}function p2(e,t){let r="Unexpected Server Error";return t!==hr.Production&&(r+=`

${String(e)}`),new Response(r,{status:500,headers:{"Content-Type":"text/plain"}})}function k1(e){return`__flash_${e}__`}var Vn=(e={},t="")=>{let r=new Map(Object.entries(e));return{get id(){return t},get data(){return Object.fromEntries(r)},has(a){return r.has(a)||r.has(k1(a))},get(a){if(r.has(a))return r.get(a);let n=k1(a);if(r.has(n)){let o=r.get(n);return r.delete(n),o}},set(a,n){r.set(a,n)},flash(a,n){r.set(k1(a),n)},unset(a){r.delete(a)}}};var _1=e=>({cookie:t,createData:r,readData:a,updateData:n,deleteData:o})=>{let i=Ha(t)?t:e((t==null?void 0:t.name)||"__session",t);return T1(i),{async getSession(s,l){let c=s&&await i.parse(s,l),u=c&&await a(c);return Vn(u||{},c||"")},async commitSession(s,l){let{id:c,data:u}=s;return c?await n(c,u,i.expires):c=await r(u,i.expires),i.serialize(c,l)},async destroySession(s,l){return await o(s.id),i.serialize("",{...l,expires:new Date(0)})}}};function T1(e){mo(e.isSigned,`The "${e.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/utils/cookies#signing-cookies for more information.`)}var L1=e=>({cookie:t}={})=>{let r=Ha(t)?t:e((t==null?void 0:t.name)||"__session",t);return T1(r),{async getSession(a,n){return Vn(a&&await r.parse(a,n)||{})},async commitSession(a,n){let o=await r.serialize(a.data,n);if(o.length>4096)throw new Error("Cookie length will exceed browser maximum. Length: "+o.length);return o},async destroySession(a,n){return r.serialize("",{...n,expires:new Date(0)})}}};var P1=e=>({cookie:t}={})=>{let r=0,a=new Map;return e({cookie:t,async createData(n,o){let i=(++r).toString();return a.set(i,{data:n,expires:o}),i},async readData(n){if(a.has(n)){let{data:o,expires:i}=a.get(n);if(!i||i>new Date)return o;i&&a.delete(n)}return null},async updateData(n,o,i){a.set(n,{data:o,expires:i})},async deleteData(n){a.delete(n)}})};var se=A(ce(),1);var Nn=A(H(),1),E2=A(g2(),1);function jg(e){let t=Array.isArray(e)?e:[e],r="";for(let a of t)a!=null&&(typeof a=="object"?a.body&&typeof a.body=="string"?r+=a.body:r+=JSON.stringify(a):r+=a);return encodeURIComponent(r)}var V1="public",qg="private",A2="no-store",w2={maxAge:"max-age",staleWhileRevalidate:"stale-while-revalidate",sMaxAge:"s-maxage",staleIfError:"stale-if-error"};function M2(e){let t=[];return Object.keys(e).forEach(r=>{r==="mode"?t.push(e[r]):w2[r]&&t.push(`${w2[r]}=${e[r]}`)}),t.join(", ")}function zg(){return{mode:A2}}function k2(e){if(e!=null&&e.mode&&(e==null?void 0:e.mode)!==V1&&(e==null?void 0:e.mode)!==qg)throw Error("'mode' must be either 'public' or 'private'")}function Na(e){return k2(e),{mode:V1,maxAge:1,staleWhileRevalidate:9,...e}}function Wg(e){return k2(e),{mode:V1,maxAge:3600,staleWhileRevalidate:82800,...e}}function Gg(e){return e}function _2(e){return String(e).includes("__proto__")?JSON.parse(e,Yg):JSON.parse(e)}function Yg(e,t){if(e!=="__proto__")return t}function wo(e,t){return e&&t?{...e,...t}:e||Na()}function H1(e){return M2(wo(e))}async function Jg(e,t){if(!e)return;let r=await e.match(t);if(r)return r}async function Kg(e,t,r,a){if(!e)return;let n=wo(a),o=H1(wo(n,{maxAge:(n.maxAge||0)+(n.staleWhileRevalidate||0)})),i=H1(wo(n));r.headers.set("cache-control",o),r.headers.set("real-cache-control",i),r.headers.set("cache-put-date",new Date().toUTCString()),await e.put(t,r)}async function Xg(e,t){e&&await e.delete(t)}function Qg(e,t){let r=e.headers.get("real-cache-control"),a=0;if(r){let n=r.match(/max-age=(\d*)/);n&&n.length>1&&(a=parseFloat(n[1]))}return[(new Date().valueOf()-new Date(t).valueOf())/1e3,a]}function em(e,t){let r=t.headers.get("cache-put-date");if(!r)return!1;let[a,n]=Qg(t,r);return a>n}var D1={get:Jg,set:Kg,delete:Xg,generateDefaultCacheControlHeader:H1,isStale:em};function N1(e){return`https://shopify.dev/?${e}`}function tm(e){return e||Na()}async function rm(e,t){if(!e)return;let r=N1(t),a=new Request(r),n=await D1.get(e,a);if(!n)return;let o=await n.text();try{return[_2(o),n]}catch{return[o,n]}}async function x2(e,t,r,a){if(!e)return;let n=N1(t),o=new Request(n),i=new Response(JSON.stringify(r));await D1.set(e,o,i,tm(a))}function am(e,t){return D1.isStale(new Request(N1(e)),t)}function nm(e,t){return[e,{status:t.status,statusText:t.statusText,headers:Array.from(t.headers.entries())}]}function C2([e,t]){return[e,new Response(e,t)]}var om=e=>!(e!=null&&e.errors),I1=new Set;async function im(e,t,{strategy:r=Na(),cacheInstance:a,shouldCacheResult:n=()=>!0,waitUntil:o}){let i=jg([...typeof e=="string"?[e]:e]),s;if(!a||!r||r.mode===A2)return await t();let l=await rm(a,i);if(l){let[u,d]=l,h=am(i,d)?"STALE":"HIT";if(!I1.has(i)&&h==="STALE"){I1.add(i);let p=Promise.resolve().then(async()=>{let f=Date.now();try{let v=await t();n(v)&&(await x2(a,i,v,r),s==null||s("PUT",f))}catch(v){v.message&&(v.message="SWR in sub-request failed: "+v.message),console.error(v)}finally{I1.delete(i)}});o==null||o(p)}return u}let c=await t();if(n(c)){let u=Promise.resolve().then(async()=>{await x2(a,i,c,r)});o==null||o(u)}return c}async function sm(e,t,{cacheInstance:r,cache:a,cacheKey:n=[e,t],shouldCacheResponse:o=()=>!0,waitUntil:i,returnType:s="json"}={}){return!a&&(!t.method||t.method==="GET")&&(a=Na()),im(n,async()=>{let l=await fetch(e,t),c;try{c=await l[s]()}catch{try{c=await l.text()}catch{throw new Error(`Storefront API response code: ${l.status} (Request Id: ${l.headers.get("x-request-id")})`)}}return nm(c,l)},{cacheInstance:r,waitUntil:i,strategy:a??null,shouldCacheResult:l=>o(...C2(l))}).then(C2)}var lm="Custom-Storefront-Request-Group-ID";function cm(){return typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`weak-${Math.random().toString(16).substring(2)}`}var um="2023.7.8",T2=class extends Error{},dm=e=>e instanceof T2,hm=/(^|}\s)query[\s({]/im,pm=/(^|}\s)mutation[\s({]/im;function S2(e){return e.replace(/\s*#.*$/gm,"").replace(/\s+/gm," ").trim()}var fm={language:"EN",country:"US"};function L2(e){let{storefrontHeaders:t,cache:r,waitUntil:a,buyerIp:n,i18n:o,requestGroupId:i,storefrontId:s,...l}=e,{getPublicTokenHeaders:c,getPrivateTokenHeaders:u,getStorefrontApiUrl:d,getShopifyDomain:h}=u1(l),p=(l.privateStorefrontToken?u:c)({contentType:"json",buyerIp:(t==null?void 0:t.buyerIp)||n});if(p[lm]=(t==null?void 0:t.requestGroupId)||i||cm(),s&&(p[d1]=s),p["user-agent"]=`Hydrogen ${um}`,t&&t.cookie){let v=ho(t.cookie??"");v[la]&&(p[h1]=v[la]),v[ca]&&(p[p1]=v[ca])}async function f({query:v,mutation:g,variables:w,cache:b,headers:C=[],storefrontApiVersion:m}){let k=C instanceof Headers?Object.fromEntries(C.entries()):Array.isArray(C)?Object.fromEntries(C):C;v=v??g;let B={...w};o&&(!(w!=null&&w.country)&&/\$country/.test(v)&&(B.country=o.country),!(w!=null&&w.language)&&/\$language/.test(v)&&(B.language=o.language));let Z=d({storefrontApiVersion:m}),ne={method:"POST",headers:{...p,...k},body:JSON.stringify({query:v,variables:B})},[Se,ze]=await sm(Z,ne,{cacheInstance:g?void 0:r,cache:b||Na(),shouldCacheResponse:om,waitUntil:a}),ke={response:ze,type:g?"mutation":"query",query:v,queryVariables:B,errors:void 0};if(!ze.ok){let Tt;try{Tt=_2(Se)}catch{Tt=[{message:Se}]}b2({...ke,errors:Tt})}let{data:le,errors:_t}=Se;return _t!=null&&_t.length&&b2({...ke,errors:_t,ErrorConstructor:T2}),le}return{storefront:{query:(v,g)=>{if(v=S2(v),pm.test(v))throw new Error("[h2:error:storefront.query] Cannot execute mutations");let w=f({...g,query:v});return w.catch(()=>{}),w},mutate:(v,g)=>{if(v=S2(v),hm.test(v))throw new Error("[h2:error:storefront.mutate] Cannot execute queries");let w=f({...g,mutation:v});return w.catch(()=>{}),w},cache:r,CacheNone:zg,CacheLong:Wg,CacheShort:Na,CacheCustom:Gg,generateCacheControlHeader:M2,getPublicTokenHeaders:c,getPrivateTokenHeaders:u,getShopifyDomain:h,getApiUrl:d,isApiError:dm,i18n:o??fm}}}function b2({response:e,errors:t,type:r,query:a,queryVariables:n,ErrorConstructor:o=Error}){var l;let i=e.headers.get("x-request-id"),s=(typeof t=="string"?t:(l=t==null?void 0:t.map)==null?void 0:l.call(t,c=>c.message).join(`
`))||`API response error: ${e.status}`;throw new o(`[h2:error:storefront.${r}] `+s+(i?` - Request ID: ${i}`:""),{cause:JSON.stringify({errors:t,requestId:i})})}var Yt,R2,Ew=(R2=class{constructor(){Ya(this,Yt,void 0);Ja(this,Yt,new Map)}add(e){throw new Error("Method not implemented. Use `put` instead.")}addAll(e){throw new Error("Method not implemented. Use `put` instead.")}matchAll(e,t){throw new Error("Method not implemented. Use `match` instead.")}async put(e,t){var r;if(e.method!=="GET")throw new TypeError("Cannot cache response to non-GET request.");if(t.status===206)throw new TypeError("Cannot cache response to a range request (206 Partial Content).");if((r=t.headers.get("vary"))!=null&&r.includes("*"))throw new TypeError("Cannot cache response with 'Vary: *' header.");We(this,Yt).set(e.url,{body:new Uint8Array(await t.arrayBuffer()),status:t.status,headers:[...t.headers],timestamp:Date.now()})}async match(e){var d,h;if(e.method!=="GET")return;let t=We(this,Yt).get(e.url);if(!t)return;let{body:r,timestamp:a,...n}=t,o=new Headers(n.headers),i=o.get("cache-control")||o.get("real-cache-control")||"",s=parseInt(((d=i.match(/max-age=(\d+)/))==null?void 0:d[1])||"0",10),l=parseInt(((h=i.match(/stale-while-revalidate=(\d+)/))==null?void 0:h[1])||"0",10),c=(Date.now()-a)/1e3;if(c>s+l){We(this,Yt).delete(e.url);return}let u=c>s;return o.set("cache",u?"STALE":"HIT"),o.set("date",new Date(a).toUTCString()),new Response(r,{status:n.status??200,headers:o})}async delete(e){return We(this,Yt).has(e.url)?(We(this,Yt).delete(e.url),!0):!1}keys(e){let t=[];for(let r of We(this,Yt).keys())(!e||e.url===r)&&t.push(new Request(r));return Promise.resolve(t)}},Yt=new WeakMap,R2);async function P2(e){var l,c,u;let{storefront:t,request:r,noAdminRedirect:a,response:n=new Response("Not Found",{status:404})}=e,{pathname:o,search:i}=new URL(r.url),s=o+i;if(o==="/admin"&&!a)return j(`${t.getShopifyDomain()}/admin`);try{let{urlRedirects:d}=await t.query(mm,{variables:{query:"path:"+s}}),h=(u=(c=(l=d==null?void 0:d.edges)==null?void 0:l[0])==null?void 0:c.node)==null?void 0:u.target;if(h)return new Response(null,{status:301,headers:{location:h}});let p=new URLSearchParams(i),f=p.get("return_to")||p.get("redirect");if(f){if(gm(f))return j(f);console.warn(`Cross-domain redirects are not supported. Tried to redirect from ${s} to ${f}`)}}catch(d){console.error(`Failed to fetch redirects from Storefront API for route ${s}`,d)}return n}function gm(e){try{new URL(e)}catch{return!0}return!1}var mm=`#graphql
  query redirects($query: String) {
    urlRedirects(first: 1, query: $query) {
      edges {
        node {
          target
        }
      }
    }
  }
`;var Aw=(0,se.lazy)(()=>Promise.resolve().then(()=>(y2(),v2)));function At({connection:e,children:t=()=>(console.warn("<Pagination> requires children to work properly"),null)}){let r=ht().state==="loading",{endCursor:a,hasNextPage:n,hasPreviousPage:o,nextPageUrl:i,nodes:s,previousPageUrl:l,startCursor:c}=vm(e),u=(0,se.useMemo)(()=>({pageInfo:{endCursor:a,hasPreviousPage:o,startCursor:c},nodes:s}),[a,o,c,s]),d=(0,se.useMemo)(()=>function(p){return n?(0,se.createElement)(Y,{preventScrollReset:!0,...p,to:i,state:u,replace:!0}):null},[n,i,u]),h=(0,se.useMemo)(()=>function(p){return o?(0,se.createElement)(Y,{preventScrollReset:!0,...p,to:l,state:u,replace:!0}):null},[o,l,u]);return t({state:u,hasNextPage:n,hasPreviousPage:o,isLoading:r,nextPageUrl:i,nodes:s,previousPageUrl:l,NextLink:d,PreviousLink:h})}function yo(e){let t=new URLSearchParams(e);return t.delete("cursor"),t.delete("direction"),t.toString()}function Dn(e){throw new Error(`The Pagination component requires ${"`"+e+"`"} to be a part of your query. See the guide on how to setup your query to include ${"`"+e+"`"}: https://shopify.dev/docs/custom-storefronts/hydrogen/data-fetching/pagination#setup-the-paginated-query`)}function vm(e){e.pageInfo||Dn("pageInfo"),typeof e.pageInfo.startCursor>"u"&&Dn("pageInfo.startCursor"),typeof e.pageInfo.endCursor>"u"&&Dn("pageInfo.endCursor"),typeof e.pageInfo.hasNextPage>"u"&&Dn("pageInfo.hasNextPage"),typeof e.pageInfo.hasPreviousPage>"u"&&Dn("pageInfo.hasPreviousPage");let t=Bt(),{state:r,search:a,pathname:n}=ve(),o=new URLSearchParams(a).get("direction")==="previous",[i,s]=(0,se.useState)(lt(e)),[l,c]=(0,se.useState)({startCursor:e.pageInfo.startCursor,endCursor:e.pageInfo.endCursor,hasPreviousPage:e.pageInfo.hasPreviousPage,hasNextPage:e.pageInfo.hasNextPage}),u=(0,se.useRef)({params:yo(a),pathname:n});(0,se.useEffect)(()=>{var p,f,v,g;if(yo(a)!==u.current.params||n!==u.current.pathname)u.current={pathname:n,params:yo(a)},t(`${n}?${yo(a)}`,{replace:!0,preventScrollReset:!0,state:{nodes:void 0,pageInfo:void 0}});else if(r!=null&&r.nodes){if(s(o?[...lt(e),...r.nodes]:[...r.nodes,...lt(e)]),r==null?void 0:r.pageInfo){let w=((p=r==null?void 0:r.pageInfo)==null?void 0:p.startCursor)===void 0?e.pageInfo.startCursor:r.pageInfo.startCursor,b=((f=r==null?void 0:r.pageInfo)==null?void 0:f.endCursor)===void 0?e.pageInfo.endCursor:r.pageInfo.endCursor,C=((v=r==null?void 0:r.pageInfo)==null?void 0:v.hasPreviousPage)===void 0?e.pageInfo.hasPreviousPage:r.pageInfo.hasPreviousPage,m=((g=r==null?void 0:r.pageInfo)==null?void 0:g.hasNextPage)===void 0?e.pageInfo.hasNextPage:r.pageInfo.hasNextPage;o?(w=e.pageInfo.startCursor,C=e.pageInfo.hasPreviousPage):(b=e.pageInfo.endCursor,m=e.pageInfo.hasNextPage),c({startCursor:w,endCursor:b,hasPreviousPage:C,hasNextPage:m})}}else s(lt(e)),c({startCursor:e.pageInfo.startCursor,endCursor:e.pageInfo.endCursor,hasPreviousPage:e.pageInfo.hasPreviousPage,hasNextPage:e.pageInfo.hasNextPage})},[r,e,o,a,t,n]);let d=(0,se.useMemo)(()=>{let p=new URLSearchParams(a);return p.set("direction","previous"),l.startCursor&&p.set("cursor",l.startCursor),`?${p.toString()}`},[a,l.startCursor]),h=(0,se.useMemo)(()=>{let p=new URLSearchParams(a);return p.set("direction","next"),l.endCursor&&p.set("cursor",l.endCursor),`?${p.toString()}`},[a,l.endCursor]);return{...l,previousPageUrl:d,nextPageUrl:h,nodes:i}}function Mt(e,t={pageBy:20}){if(typeof(e==null?void 0:e.url)>"u")throw new Error("getPaginationVariables must be called with the Request object passed to your loader function");let{pageBy:r}=t,a=new URLSearchParams(new URL(e.url).search),n=a.get("cursor")??void 0;return(a.get("direction")==="previous"?"previous":"next")=="previous"?{last:r,startCursor:n??null}:{first:r,endCursor:n??null}}var Z2="cartFormInput";function De({children:e,action:t,inputs:r,route:a}){let n=M0();return(0,Nn.jsxs)(n.Form,{action:a||"",method:"post",children:[(t||r)&&(0,Nn.jsx)("input",{type:"hidden",name:Z2,value:JSON.stringify({action:t,inputs:r})}),typeof e=="function"?e(n):e]})}De.INPUT_NAME=Z2;De.ACTIONS={AttributesUpdateInput:"AttributesUpdateInput",BuyerIdentityUpdate:"BuyerIdentityUpdate",Create:"Create",DiscountCodesUpdate:"DiscountCodesUpdate",LinesAdd:"LinesAdd",LinesRemove:"LinesRemove",LinesUpdate:"LinesUpdate",NoteUpdate:"NoteUpdate",SelectedDeliveryOptionsUpdate:"SelectedDeliveryOptionsUpdate",MetafieldsSet:"MetafieldsSet",MetafieldDelete:"MetafieldDelete"};function ym(e){let t={};for(let i of e.entries()){let s=i[0],l=e.getAll(s);t[s]=l.length>1?l:i[1]}let{cartFormInput:r,...a}=t,{action:n,inputs:o}=r?JSON.parse(String(r)):{};return{action:n,inputs:{...o,...a}}}De.getFormInput=ym;var pr=`#graphql
  fragment CartApiError on CartUserError {
    message
    field
    code
  }
`,fr=`#graphql
  fragment CartApiMutation on Cart {
    id
    totalQuantity
  }
`;function wm(e){return async(t,r)=>{let{cartId:a,...n}=r||{},{cartCreate:o}=await e.storefront.mutate(xm(e.cartFragment),{variables:{input:t,...n}});return o}}var xm=(e=fr)=>`#graphql
  mutation cartCreate(
    $input: CartInput!
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartCreate(input: $input) {
      cart {
        ...CartApiMutation
        checkoutUrl
      }
      errors: userErrors {
        ...CartApiError
      }
    }
  }
  ${e}
  ${pr}
`;function Cm(e){return async t=>{let r=e.getCartId();if(!r)return null;let{cart:a}=await e.storefront.query(Sm(e.cartFragment),{variables:{cartId:r,...t},cache:e.storefront.CacheNone()});return a}}var Sm=(e=bm)=>`#graphql
  query CartQuery(
    $cartId: ID!
    $numCartLines: Int = 100
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cart(id: $cartId) {
      ...CartApiQuery
    }
  }

  ${e}
`,bm=`#graphql
  fragment CartApiQuery on Cart {
    id
    checkoutUrl
    totalQuantity
    buyerIdentity {
      countryCode
      customer {
        id
        email
        firstName
        lastName
        displayName
      }
      email
      phone
    }
    lines(first: $numCartLines) {
      edges {
        node {
          id
          quantity
          attributes {
            key
            value
          }
          cost {
            totalAmount {
              amount
              currencyCode
            }
            amountPerQuantity {
              amount
              currencyCode
            }
            compareAtAmountPerQuantity {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              availableForSale
              compareAtPrice {
                ...CartApiMoney
              }
              price {
                ...CartApiMoney
              }
              requiresShipping
              title
              image {
                ...CartApiImage
              }
              product {
                handle
                title
                id
              }
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
    cost {
      subtotalAmount {
        ...CartApiMoney
      }
      totalAmount {
        ...CartApiMoney
      }
      totalDutyAmount {
        ...CartApiMoney
      }
      totalTaxAmount {
        ...CartApiMoney
      }
    }
    note
    attributes {
      key
      value
    }
    discountCodes {
      applicable
      code
    }
  }

  fragment CartApiMoney on MoneyV2 {
    currencyCode
    amount
  }

  fragment CartApiImage on Image {
    id
    url
    altText
    width
    height
  }
`;function Rm(e){return async(t,r)=>{let{cartLinesAdd:a}=await e.storefront.mutate(Em(e.cartFragment),{variables:{cartId:e.getCartId(),lines:t,...r}});return a}}var Em=(e=fr)=>`#graphql
  mutation cartLinesAdd(
    $cartId: ID!
    $lines: [CartLineInput!]!
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...CartApiMutation
      }
      errors: userErrors {
        ...CartApiError
      }
    }
  }

  ${e}
  ${pr}
`;function Am(e){return async(t,r)=>{let{cartLinesUpdate:a}=await e.storefront.mutate(Mm(e.cartFragment),{variables:{cartId:e.getCartId(),lines:t,...r}});return a}}var Mm=(e=fr)=>`#graphql
  mutation cartLinesUpdate(
    $cartId: ID!
    $lines: [CartLineUpdateInput!]!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...CartApiMutation
      }
      errors: userErrors {
        ...CartApiError
      }
    }
  }

  ${e}
  ${pr}
`;function km(e){return async(t,r)=>{let{cartLinesRemove:a}=await e.storefront.mutate(_m(e.cartFragment),{variables:{cartId:e.getCartId(),lineIds:t,...r}});return a}}var _m=(e=fr)=>`#graphql
  mutation cartLinesRemove(
    $cartId: ID!
    $lineIds: [ID!]!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...CartApiMutation
      }
      errors: userErrors {
        ...CartApiError
      }
    }
  }

  ${e}
  ${pr}
`;function Tm(e){return async(t,r)=>{let a=t.filter((o,i,s)=>s.indexOf(o)===i),{cartDiscountCodesUpdate:n}=await e.storefront.mutate(Lm(e.cartFragment),{variables:{cartId:e.getCartId(),discountCodes:a,...r}});return n}}var Lm=(e=fr)=>`#graphql
  mutation cartDiscountCodesUpdate(
    $cartId: ID!
    $discountCodes: [String!]
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
      cart {
        ...CartApiMutation
      }
      errors: userErrors {
        ...CartApiError
      }
    }
  }
  ${e}
  ${pr}
`;function Pm(e){return async(t,r)=>{let{cartBuyerIdentityUpdate:a}=await e.storefront.mutate(Zm(e.cartFragment),{variables:{cartId:e.getCartId(),buyerIdentity:t,...r}});return a}}var Zm=(e=fr)=>`#graphql
  mutation cartBuyerIdentityUpdate(
    $cartId: ID!
    $buyerIdentity: CartBuyerIdentityInput!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
      cart {
        ...CartApiMutation
      }
      errors: userErrors {
        ...CartApiError
      }
    }
  }
  ${e}
  ${pr}
`;function Im(e){return async(t,r)=>{let{cartNoteUpdate:a}=await e.storefront.mutate(Hm(e.cartFragment),{variables:{cartId:e.getCartId(),note:t,...r}});return a}}var Hm=(e=fr)=>`#graphql
  mutation cartNoteUpdate(
    $cartId: ID!
    $note: String
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartNoteUpdate(cartId: $cartId, note: $note) {
      cart {
        ...CartApiMutation
      }
      errors: userErrors {
        ...CartApiError
      }
    }
  }
  ${e}
  ${pr}
`;function Vm(e){return async(t,r)=>{let{cartSelectedDeliveryOptionsUpdate:a}=await e.storefront.mutate(Dm(e.cartFragment),{variables:{cartId:e.getCartId(),selectedDeliveryOptions:t,...r}});return a}}var Dm=(e=fr)=>`#graphql
  mutation cartSelectedDeliveryOptionsUpdate(
    $cartId: ID!
    $selectedDeliveryOptions: [CartSelectedDeliveryOptionInput!]!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartSelectedDeliveryOptionsUpdate(cartId: $cartId, selectedDeliveryOptions: $selectedDeliveryOptions) {
      cart {
        ...CartApiMutation
      }
      errors: userErrors {
        ...CartApiError
      }
    }
  }
  ${e}
  ${pr}
`;function Nm(e){return async(t,r)=>{let{cartAttributesUpdate:a}=await e.storefront.mutate(Om(e.cartFragment),{variables:{cartId:(r==null?void 0:r.cartId)||e.getCartId(),attributes:t}});return a}}var Om=(e=fr)=>`#graphql
  mutation cartAttributesUpdate(
    $cartId: ID!
    $attributes: [AttributeInput!]!
  ) {
    cartAttributesUpdate(cartId: $cartId, attributes: $attributes) {
      cart {
        ...CartApiMutation
      }
      errors: userErrors {
        ...CartApiError
      }
    }
  }
  ${e}
  ${pr}
`;function $m(e){return async(t,r)=>{let a=(r==null?void 0:r.cartId)||e.getCartId(),n=t.map(i=>({...i,ownerId:a})),{cartMetafieldsSet:o}=await e.storefront.mutate(Bm(),{variables:{metafields:n}});return{cart:{id:a},errors:o.errors}}}var Bm=()=>`#graphql
  mutation cartMetafieldsSet(
    $metafields: [CartMetafieldsSetInput!]!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartMetafieldsSet(metafields: $metafields) {
      errors: userErrors {
        code
        elementIndex
        field
        message
      }
    }
  }
`;function Fm(e){return async(t,r)=>{let a=(r==null?void 0:r.cartId)||e.getCartId(),{cartMetafieldDelete:n}=await e.storefront.mutate(Um(),{variables:{input:{ownerId:a,key:t}}});return{cart:{id:a},errors:n.errors}}}var Um=()=>`#graphql
  mutation cartMetafieldDelete(
    $input: CartMetafieldDeleteInput!
  ) {
    cartMetafieldDelete(input: $input) {
      errors: userErrors {
        code
        field
        message
      }
    }
  }
`,jm=new Set(["domain","path","max-age","expires","samesite","secure","httponly"]);function qm(e){let t={},r,a,n=0,o=e.split(/;\s*/g),i,s;for(;n<o.length;n++)if(a=o[n],r=a.indexOf("="),~r){if(i=a.substring(0,r++).trim(),s=a.substring(r).trim(),s[0]==='"'&&(s=s.substring(1,s.length-1)),~s.indexOf("%"))try{s=decodeURIComponent(s)}catch{}jm.has(a=i.toLowerCase())?a==="expires"?t.expires=new Date(s):a==="max-age"?t.maxage=+s:t[a]=s:t[i]=s}else(i=a.trim().toLowerCase())&&(i==="httponly"||i==="secure")&&(t[i]=!0);return t}function zm(e,t,r={}){let a=e+"="+encodeURIComponent(t);return r.expires&&(a+="; Expires="+new Date(r.expires).toUTCString()),r.maxage!=null&&r.maxage>=0&&(a+="; Max-Age="+(r.maxage|0)),r.domain&&(a+="; Domain="+r.domain),r.path&&(a+="; Path="+r.path),r.samesite&&(a+="; SameSite="+r.samesite),(r.secure||r.samesite==="None")&&(a+="; Secure"),r.httponly&&(a+="; HttpOnly"),a}var I2=e=>{let t=qm(e.get("Cookie")||"");return()=>t.cart?`gid://shopify/Cart/${t.cart}`:void 0},H2=e=>t=>{let r=new Headers;return r.append("Set-Cookie",zm("cart",t.split("/").pop()||"",{path:"/",...e})),r};function V2(e){let{getCartId:t,setCartId:r,storefront:a,cartQueryFragment:n,cartMutateFragment:o}=e,i={storefront:a,getCartId:t,cartFragment:o},s=t(),l=wm(i),c={get:Cm({storefront:a,getCartId:t,cartFragment:n}),getCartId:t,setCartId:r,create:l,addLines:async(u,d)=>s||d!=null&&d.cartId?await Rm(i)(u,d):await l({lines:u},d),updateLines:Am(i),removeLines:km(i),updateDiscountCodes:async(u,d)=>s||d!=null&&d.cartId?await Tm(i)(u,d):await l({discountCodes:u},d),updateBuyerIdentity:async(u,d)=>s||d!=null&&d.cartId?await Pm(i)(u,d):await l({buyerIdentity:u},d),updateNote:async(u,d)=>s||d!=null&&d.cartId?await Im(i)(u,d):await l({note:u},d),updateSelectedDeliveryOption:Vm(i),updateAttributes:async(u,d)=>s||d!=null&&d.cartId?await Nm(i)(u,d):await l({attributes:u},d),setMetafields:async(u,d)=>s||d!=null&&d.cartId?await $m(i)(u,d):await l({metafields:u},d),deleteMetafield:Fm(i)};return"customMethods__unstable"in e?{...c,...e.customMethods__unstable??{}}:c}function D2({handle:e,options:t=[],variants:r=[],productPath:a="products",children:n}){let o=r instanceof Array?r:lt(r),{searchParams:i,path:s,alreadyOnProductPage:l}=Wm(e,a),c=t.filter(u=>{var d;return((d=u==null?void 0:u.values)==null?void 0:d.length)===1});return(0,se.createElement)(se.Fragment,null,...(0,se.useMemo)(()=>t.filter(u=>{var d;return((d=u==null?void 0:u.values)==null?void 0:d.length)>1}).map(u=>{let d,h=[];for(let p of u.values){let f=new URLSearchParams(l?i:void 0);f.set(u.name,p),c.forEach(C=>{f.set(C.name,C.values[0])});let v=o.find(C=>{var m;return(m=C==null?void 0:C.selectedOptions)==null?void 0:m.every(k=>f.get(k==null?void 0:k.name)===(k==null?void 0:k.value))}),g=i.get(u.name),w=g?g===p:!1;w&&(d=p);let b="?"+f.toString();h.push({value:p,isAvailable:v?v.availableForSale:!0,to:s+b,search:b,isActive:w})}return n({option:{name:u.name,value:d,values:h}})}),[t,o,n]))}var N2=e=>{if(typeof(e==null?void 0:e.url)>"u")throw new TypeError(`Expected a Request instance, got ${typeof e}`);let t=new URL(e.url).searchParams,r=[];return t.forEach((a,n)=>{r.push({name:n,value:a})}),r};function Wm(e,t){let{pathname:r,search:a}=ve();return(0,se.useMemo)(()=>{let n=/(\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)/g.exec(r),o=n&&n.length>0;t=t.startsWith("/")?t.substring(1):t;let i=o?`${n[0]}${t}/${e}`:`/${t}/${e}`;return{searchParams:new URLSearchParams(a),alreadyOnProductPage:i===r,path:i}},[r,a,e,t])}function Gm(){return Jm(Ym())}function Ym(){try{return crypto.getRandomValues(new Uint8Array(16))}catch{return new Uint8Array(16).map(()=>Math.random()*255|0)}}function Jm(e){return Array.from(e,function(t){return("0"+(t&255).toString(16)).slice(-2)}).join("")}var O2=(0,se.createContext)(void 0),Km=O2.Provider,xo=()=>(0,se.useContext)(O2);function $2(e={}){let t=Gm(),r=Xm(t,e);return{nonce:t,header:r,NonceProvider:({children:a})=>(0,se.createElement)(Km,{value:t},a)}}function Xm(e,t={}){let r=`'nonce-${e}'`,a=Object.assign({},{baseUri:["'self'"],defaultSrc:["'self'",r,"https://cdn.shopify.com","https://shopify.com"],frameAncestors:["none"],styleSrc:["'self'","'unsafe-inline'","https://cdn.shopify.com"],connectSrc:["'self'","https://monorail-edge.shopifysvc.com"]},t);return a.scriptSrc instanceof Array&&!a.scriptSrc.includes(r)?a.scriptSrc.push(r):a.defaultSrc instanceof Array&&!a.defaultSrc.includes(r)&&a.defaultSrc.push(r),(0,E2.default)({directives:a})}var Mw=(0,se.forwardRef)((e,t)=>{let r=xo();return(0,Nn.jsx)("script",{suppressHydrationWarning:!0,...e,nonce:r,ref:t})});var O1=A(H());async function F2(e,t,r,a){let{nonce:n,header:o,NonceProvider:i}=$2(),s=await(0,B2.renderToReadableStream)((0,O1.jsx)(i,{children:(0,O1.jsx)(bi,{context:a,url:e.url})}),{nonce:n,signal:e.signal,onError(l){console.error(l),t=500}});return $5(e.headers.get("user-agent"))&&await s.allReady,r.set("Content-Type","text/html"),r.set("Content-Security-Policy",o),new Response(s,{headers:r,status:t})}var j1={};Q(j1,{ErrorBoundary:()=>R6,default:()=>id,links:()=>S6,loader:()=>b6,shouldRevalidate:()=>C6});var B1=new TextEncoder,Qm=async(e,t)=>{let r=await U2(t,["sign"]),a=B1.encode(e),n=await crypto.subtle.sign("HMAC",r,a),o=btoa(String.fromCharCode(...new Uint8Array(n))).replace(/=+$/,"");return e+"."+o},e6=async(e,t)=>{let r=e.lastIndexOf("."),a=e.slice(0,r),n=e.slice(r+1),o=await U2(t,["verify"]),i=B1.encode(a),s=t6(atob(n));return await crypto.subtle.verify("HMAC",o,s,i)?a:!1};async function U2(e,t){return await crypto.subtle.importKey("raw",B1.encode(e),{name:"HMAC",hash:"SHA-256"},!1,t)}function t6(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}var j2=v1({sign:Qm,unsign:e6}),q2=L1(j2),r6=_1(j2),Bw=P1(r6);function z2({build:e,mode:t,poweredByHeader:r=!0,getLoadContext:a}){let n=M1(e,t);return async o=>{let i=a?await a(o):void 0,s=await n(o,i);return r&&s.headers.append("powered-by","Shopify, Hydrogen"),s}}function W2(e){let t=e.headers;return{requestGroupId:t.get("request-id"),buyerIp:t.get("oxygen-buyer-ip"),cookie:t.get("cookie")}}var G2="/build/_assets/favicon-5FIZBM2K.svg";var Y2="/build/_assets/reset-GJUKTO6O.css";var J2="/build/_assets/app-4L5QY4LK.css";var w6=A(ce());var K2=A(ce());function Co(e,t){let{pathname:r}=ve();return(0,K2.useMemo)(()=>F1({handle:e,pathname:r,searchParams:new URLSearchParams,selectedOptions:t}),[e,t,r])}function F1({handle:e,pathname:t,searchParams:r,selectedOptions:a}){let n=/(\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)/g.exec(t),i=n&&n.length>0?`${n[0]}products/${e}`:`/products/${e}`;a.forEach(l=>{r.set(l.name,l.value)});let s=r.toString();return i+(s?"?"+r.toString():"")}var P=A(H());function ed({layout:e,cart:t}){var o,i;let r=Boolean(((i=(o=t==null?void 0:t.lines)==null?void 0:o.nodes)==null?void 0:i.length)||0),n=`cart-main ${t&&Boolean(t.discountCodes.filter(s=>s.applicable).length)?"with-discount":""}`;return(0,P.jsxs)("div",{className:n,children:[(0,P.jsx)(f6,{hidden:r,layout:e}),(0,P.jsx)(i6,{cart:t,layout:e})]})}function i6({layout:e,cart:t}){let r=!!t&&t.totalQuantity>0;return(0,P.jsxs)("div",{className:"cart-details",children:[(0,P.jsx)(s6,{lines:t==null?void 0:t.lines,layout:e}),r&&(0,P.jsxs)(u6,{cost:t.cost,layout:e,children:[(0,P.jsx)(g6,{discountCodes:t.discountCodes}),(0,P.jsx)(c6,{checkoutUrl:t.checkoutUrl})]})]})}function s6({lines:e,layout:t}){return e?(0,P.jsx)("div",{"aria-labelledby":"cart-lines",children:(0,P.jsx)("ul",{children:e.nodes.map(r=>(0,P.jsx)(l6,{line:r,layout:t},r.id))})}):null}function l6({layout:e,line:t}){let{id:r,merchandise:a}=t,{product:n,title:o,image:i,selectedOptions:s}=a,l=Co(n.handle,s);return(0,P.jsxs)("li",{className:"cart-line",children:[i&&(0,P.jsx)(Ve,{alt:o,aspectRatio:"1/1",data:i,height:100,loading:"lazy",width:100}),(0,P.jsxs)("div",{children:[(0,P.jsx)(Y,{prefetch:"intent",to:l,onClick:()=>{e==="aside"&&(window.location.href=l)},children:(0,P.jsx)("p",{children:(0,P.jsx)("strong",{children:n.title})})}),(0,P.jsx)(p6,{line:t,as:"span"}),(0,P.jsx)("ul",{children:s.map(c=>(0,P.jsx)("li",{children:(0,P.jsxs)("small",{children:[c.name,": ",c.value]})},c.name))}),(0,P.jsx)(h6,{line:t})]})]},r)}function c6({checkoutUrl:e}){return e?(0,P.jsxs)("div",{children:[(0,P.jsx)("a",{href:e,target:"_self",children:(0,P.jsx)("p",{children:"Continue to Checkout \u2192"})}),(0,P.jsx)("br",{})]}):null}function u6({cost:e,layout:t,children:r=null}){var n;return(0,P.jsxs)("div",{"aria-labelledby":"cart-summary",className:t==="page"?"cart-summary-page":"cart-summary-aside",children:[(0,P.jsx)("h4",{children:"Totals"}),(0,P.jsxs)("dl",{className:"cart-subtotal",children:[(0,P.jsx)("dt",{children:"Subtotal"}),(0,P.jsx)("dd",{children:(n=e==null?void 0:e.subtotalAmount)!=null&&n.amount?(0,P.jsx)(Re,{data:e==null?void 0:e.subtotalAmount}):"-"})]}),r]})}function d6({lineIds:e}){return(0,P.jsx)(De,{route:"/cart",action:De.ACTIONS.LinesRemove,inputs:{lineIds:e},children:(0,P.jsx)("button",{type:"submit",children:"Remove"})})}function h6({line:e}){if(!e||typeof(e==null?void 0:e.quantity)>"u")return null;let{id:t,quantity:r}=e,a=Number(Math.max(0,r-1).toFixed(0)),n=Number((r+1).toFixed(0));return(0,P.jsxs)("div",{className:"cart-line-quantiy",children:[(0,P.jsxs)("small",{children:["Quantity: ",r," \xA0\xA0"]}),(0,P.jsx)(Q2,{lines:[{id:t,quantity:a}],children:(0,P.jsx)("button",{"aria-label":"Decrease quantity",disabled:r<=1,name:"decrease-quantity",value:a,children:(0,P.jsx)("span",{children:"\u2212 "})})}),"\xA0",(0,P.jsx)(Q2,{lines:[{id:t,quantity:n}],children:(0,P.jsx)("button",{"aria-label":"Increase quantity",name:"increase-quantity",value:n,children:(0,P.jsx)("span",{children:"+"})})}),"\xA0",(0,P.jsx)(d6,{lineIds:[t]})]})}function p6({line:e,priceType:t="regular",...r}){var n,o;if(!((n=e==null?void 0:e.cost)!=null&&n.amountPerQuantity)||!((o=e==null?void 0:e.cost)!=null&&o.totalAmount))return null;let a=t==="regular"?e.cost.totalAmount:e.cost.compareAtAmountPerQuantity;return a==null?null:(0,P.jsx)("div",{children:(0,P.jsx)(Re,{withoutTrailingZeros:!0,...r,data:a})})}function f6({hidden:e=!1,layout:t="aside"}){return(0,P.jsxs)("div",{hidden:e,children:[(0,P.jsx)("br",{}),(0,P.jsx)("p",{children:"Looks like you haven\u2019t added anything yet, let\u2019s get you started!"}),(0,P.jsx)("br",{}),(0,P.jsx)(Y,{to:"/collections",onClick:()=>{t==="aside"&&(window.location.href="/collections")},children:"Continue shopping \u2192"})]})}function g6({discountCodes:e}){var r;let t=((r=e==null?void 0:e.filter(a=>a.applicable))==null?void 0:r.map(({code:a})=>a))||[];return(0,P.jsxs)("div",{children:[(0,P.jsx)("dl",{hidden:!t.length,children:(0,P.jsxs)("div",{children:[(0,P.jsx)("dt",{children:"Discount(s)"}),(0,P.jsx)(X2,{children:(0,P.jsxs)("div",{className:"cart-discount",children:[(0,P.jsx)("code",{children:t==null?void 0:t.join(", ")}),"\xA0",(0,P.jsx)("button",{children:"Remove"})]})})]})}),(0,P.jsx)(X2,{discountCodes:t,children:(0,P.jsxs)("div",{children:[(0,P.jsx)("input",{type:"text",name:"discountCode",placeholder:"Discount code"}),"\xA0",(0,P.jsx)("button",{type:"submit",children:"Apply"})]})})]})}function X2({discountCodes:e,children:t}){return(0,P.jsx)(De,{route:"/cart",action:De.ACTIONS.DiscountCodesUpdate,inputs:{discountCodes:e||[]},children:t})}function Q2({children:e,lines:t}){return(0,P.jsx)(De,{route:"/cart",action:De.ACTIONS.LinesUpdate,inputs:{lines:t},children:e})}var So=A(ce()),X=A(H()),td=[{type:"queries",items:[]},{type:"products",items:[]},{type:"collections",items:[]},{type:"pages",items:[]},{type:"articles",items:[]}];function rd({searchTerm:e}){let t=(0,So.useRef)(null);return(0,So.useEffect)(()=>{function r(a){var n,o;a.key==="k"&&a.metaKey&&(a.preventDefault(),(n=t.current)==null||n.focus()),a.key==="Escape"&&((o=t.current)==null||o.blur())}return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[]),(0,X.jsxs)(He,{method:"get",children:[(0,X.jsx)("input",{defaultValue:e,name:"q",placeholder:"Search\u2026",ref:t,type:"search"}),"\xA0",(0,X.jsx)("button",{type:"submit",children:"Search"})]})}function ad({results:e}){if(!e)return null;let t=Object.keys(e);return(0,X.jsx)("div",{children:e&&t.map(r=>{var n,o,i;let a=e[r];if(((n=a.nodes[0])==null?void 0:n.__typename)==="Page"){let s=a;return a.nodes.length?(0,X.jsx)(v6,{pages:s},"pages"):null}if(((o=a.nodes[0])==null?void 0:o.__typename)==="Product"){let s=a;return a.nodes.length?(0,X.jsx)(m6,{products:s},"products"):null}if(((i=a.nodes[0])==null?void 0:i.__typename)==="Article"){let s=a;return a.nodes.length?(0,X.jsx)(y6,{articles:s},"articles"):null}return null})})}function m6({products:e}){return(0,X.jsxs)("div",{className:"search-result",children:[(0,X.jsx)("h3",{children:"Products"}),(0,X.jsx)(At,{connection:e,children:({nodes:t,isLoading:r,NextLink:a,PreviousLink:n})=>{let o=t.map(i=>(0,X.jsx)("div",{className:"search-results-item",children:(0,X.jsx)(Y,{prefetch:"intent",to:`/products/${i.handle}`,children:(0,X.jsx)("span",{children:i.title})})},i.id));return(0,X.jsxs)("div",{children:[(0,X.jsx)("div",{children:(0,X.jsx)(n,{children:r?"Loading...":(0,X.jsx)("span",{children:"\u2191 Load previous"})})}),(0,X.jsxs)("div",{children:[o,(0,X.jsx)("br",{})]}),(0,X.jsx)("div",{children:(0,X.jsx)(a,{children:r?"Loading...":(0,X.jsx)("span",{children:"Load more \u2193"})})})]})}}),(0,X.jsx)("br",{})]})}function v6({pages:e}){var t;return(0,X.jsxs)("div",{className:"search-result",children:[(0,X.jsx)("h2",{children:"Pages"}),(0,X.jsx)("div",{children:(t=e==null?void 0:e.nodes)==null?void 0:t.map(r=>(0,X.jsx)("div",{className:"search-results-item",children:(0,X.jsx)(Y,{prefetch:"intent",to:`/pages/${r.handle}`,children:r.title})},r.id))}),(0,X.jsx)("br",{})]})}function y6({articles:e}){var t;return(0,X.jsxs)("div",{className:"search-result",children:[(0,X.jsx)("h2",{children:"Articles"}),(0,X.jsx)("div",{children:(t=e==null?void 0:e.nodes)==null?void 0:t.map(r=>(0,X.jsx)("div",{className:"search-results-item",children:(0,X.jsx)(Y,{prefetch:"intent",to:`/blog/${r.handle}`,children:r.title})},r.id))}),(0,X.jsx)("br",{})]})}function nd(){return(0,X.jsx)("p",{children:"No results, try a different search."})}var Oa=A(H());function U1({cart:e,children:t=null,footer:r,header:a,isLoggedIn:n}){return(0,Oa.jsx)(Oa.Fragment,{children:(0,Oa.jsx)("main",{children:t})})}var od="/build/_assets/tailwind-XEYRYTDJ.css";var de=A(H()),C6=({formMethod:e,currentUrl:t,nextUrl:r})=>!!(e&&e!=="GET"||t.toString()===r.toString());function S6(){return[{rel:"stylesheet",href:od},{rel:"stylesheet",href:Y2},{rel:"stylesheet",href:J2},{rel:"preconnect",href:"https://cdn.shopify.com"},{rel:"preconnect",href:"https://shop.app"},{rel:"icon",type:"image/svg+xml",href:G2}]}async function b6({context:e}){let{storefront:t,session:r,cart:a}=e,n=await r.get("customerAccessToken"),o=e.env.PUBLIC_STORE_DOMAIN,{isLoggedIn:i,headers:s}=await E6(r,n),l=a.get(),c=t.query(M6,{cache:t.CacheLong(),variables:{footerMenuHandle:"footer"}}),u=t.query(A6,{cache:t.CacheLong(),variables:{headerMenuHandle:"main-menu"}});return Gt({cart:l,footer:c,header:await u,isLoggedIn:i,publicStoreDomain:o},{headers:s})}function id(){let e=xo(),t=ie();return(0,de.jsxs)("html",{lang:"en",children:[(0,de.jsxs)("head",{children:[(0,de.jsx)("meta",{charSet:"utf-8"}),(0,de.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),(0,de.jsx)(E0,{}),(0,de.jsx)(b0,{})]}),(0,de.jsxs)("body",{children:[(0,de.jsx)(U1,{...t,children:(0,de.jsx)(Ht,{})}),(0,de.jsx)(T0,{nonce:e}),(0,de.jsx)(A0,{nonce:e}),(0,de.jsx)(k0,{nonce:e})]})]})}function R6(){var o;let e=vt(),[t]=Mr(),r=xo(),a="Unknown error",n=500;return xe(e)?(a=((o=e==null?void 0:e.data)==null?void 0:o.message)??e.data,n=e.status):e instanceof Error&&(a=e.message),(0,de.jsxs)("html",{lang:"en",children:[(0,de.jsxs)("head",{children:[(0,de.jsx)("meta",{charSet:"utf-8"}),(0,de.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),(0,de.jsx)(E0,{}),(0,de.jsx)(b0,{})]}),(0,de.jsxs)("body",{children:[(0,de.jsx)(U1,{...t.data,children:(0,de.jsxs)("div",{className:"route-error",children:[(0,de.jsx)("h1",{children:"Oops"}),(0,de.jsx)("h2",{children:n}),a&&(0,de.jsx)("fieldset",{children:(0,de.jsx)("pre",{children:a})})]})}),(0,de.jsx)(T0,{nonce:r}),(0,de.jsx)(A0,{nonce:r}),(0,de.jsx)(k0,{nonce:r})]})]})}async function E6(e,t){let r=!1,a=new Headers;if(!(t!=null&&t.accessToken)||!(t!=null&&t.expiresAt))return{isLoggedIn:r,headers:a};let n=new Date(t.expiresAt).getTime(),o=Date.now();return n<o?(e.unset("customerAccessToken"),a.append("Set-Cookie",await e.commit())):r=!0,{isLoggedIn:r,headers:a}}var sd=`#graphql
  fragment MenuItem on MenuItem {
    id
    resourceId
    tags
    title
    type
    url
  }
  fragment ChildMenuItem on MenuItem {
    ...MenuItem
  }
  fragment ParentMenuItem on MenuItem {
    ...MenuItem
    items {
      ...ChildMenuItem
    }
  }
  fragment Menu on Menu {
    id
    items {
      ...ParentMenuItem
    }
  }
`,A6=`#graphql
  fragment Shop on Shop {
    id
    name
    description
    primaryDomain {
      url
    }
    brand {
      logo {
        image {
          url
        }
      }
    }
  }
  query Header(
    $country: CountryCode
    $headerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    shop {
      ...Shop
    }
    menu(handle: $headerMenuHandle) {
      ...Menu
    }
  }
  ${sd}
`,M6=`#graphql
  query Footer(
    $country: CountryCode
    $footerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    menu(handle: $footerMenuHandle) {
      ...Menu
    }
  }
  ${sd}
`;var q1={};Q(q1,{action:()=>T6,default:()=>ld,loader:()=>_6,meta:()=>k6});var et=A(H()),k6=()=>[{title:"Activate Account"}];async function _6({context:e}){return await e.session.get("customerAccessToken")?j("/account"):M({})}async function T6({request:e,context:t,params:r}){var s;let{session:a,storefront:n}=t,{id:o,activationToken:i}=r;if(e.method!=="POST")return M({error:"Method not allowed"},{status:405});try{if(!o||!i)throw new Error("Missing token. The link you followed might be wrong.");let l=await e.formData(),c=l.has("password")?String(l.get("password")):null,u=l.has("passwordConfirm")?String(l.get("passwordConfirm")):null;if(!(c&&u&&c===u))throw new Error("Passwords do not match");let{customerActivate:h}=await n.mutate(L6,{variables:{id:`gid://shopify/Customer/${o}`,input:{password:c,activationToken:i}}});if((s=h==null?void 0:h.customerUserErrors)!=null&&s.length)throw new Error(h.customerUserErrors[0].message);let{customerAccessToken:p}=h??{};if(!p)throw new Error("Could not activate account.");return a.set("customerAccessToken",p),j("/account",{headers:{"Set-Cookie":await a.commit()}})}catch(l){return l instanceof Error?M({error:l.message},{status:400}):M({error:l},{status:400})}}function ld(){let e=nt(),t=(e==null?void 0:e.error)??null;return(0,et.jsxs)("div",{className:"account-activate",children:[(0,et.jsx)("h1",{children:"Activate Account."}),(0,et.jsx)("p",{children:"Create your password to activate your account."}),(0,et.jsxs)(He,{method:"POST",children:[(0,et.jsxs)("fieldset",{children:[(0,et.jsx)("label",{htmlFor:"password",children:"Password"}),(0,et.jsx)("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",placeholder:"Password","aria-label":"Password",minLength:8,required:!0,autoFocus:!0}),(0,et.jsx)("label",{htmlFor:"passwordConfirm",children:"Re-enter password"}),(0,et.jsx)("input",{id:"passwordConfirm",name:"passwordConfirm",type:"password",autoComplete:"current-password",placeholder:"Re-enter password","aria-label":"Re-enter password",minLength:8,required:!0})]}),t?(0,et.jsx)("p",{children:(0,et.jsx)("mark",{children:(0,et.jsx)("small",{children:t})})}):(0,et.jsx)("br",{}),(0,et.jsx)("button",{className:"bg-primary text-contrast rounded py-2 px-4 focus:shadow-outline block w-full",type:"submit",children:"Save"})]})]})}var L6=`#graphql
  mutation customerActivate(
    $id: ID!,
    $input: CustomerActivateInput!,
    $country: CountryCode,
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerActivate(id: $id, input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;var z1={};Q(z1,{default:()=>cd,loader:()=>Z6,meta:()=>P6});var da=A(H()),P6=({data:e})=>[{title:`Hydrogen | ${e.article.title} article`}];async function Z6({params:e,context:t}){let{blogHandle:r,articleHandle:a}=e;if(!a||!r)throw new Response("Not found",{status:404});let{blog:n}=await t.storefront.query(I6,{variables:{blogHandle:r,articleHandle:a}});if(!(n!=null&&n.articleByHandle))throw new Response(null,{status:404});let o=n.articleByHandle;return M({article:o})}function cd(){let{article:e}=ie(),{title:t,image:r,contentHtml:a,author:n}=e,o=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(new Date(e.publishedAt));return(0,da.jsxs)("div",{className:"article",children:[(0,da.jsxs)("h1",{children:[t,(0,da.jsxs)("span",{children:[o," \xB7 ",n==null?void 0:n.name]})]}),r&&(0,da.jsx)(Ve,{data:r,sizes:"90vw",loading:"eager"}),(0,da.jsx)("div",{dangerouslySetInnerHTML:{__html:a},className:"article"})]})}var I6=`#graphql
  query Article(
    $articleHandle: String!
    $blogHandle: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    blog(handle: $blogHandle) {
      articleByHandle(handle: $articleHandle) {
        title
        contentHtml
        publishedAt
        author: authorV2 {
          name
        }
        image {
          id
          altText
          url
          width
          height
        }
        seo {
          description
          title
        }
      }
    }
  }
`;var W1={};Q(W1,{action:()=>V6,default:()=>ud,meta:()=>H6});var Fe=A(H()),H6=()=>[{title:"Reset Password"}];async function V6({request:e,context:t,params:r}){var s;if(e.method!=="POST")return M({error:"Method not allowed"},{status:405});let{id:a,resetToken:n}=r,{session:o,storefront:i}=t;try{if(!a||!n)throw new Error("customer token or id not found");let l=await e.formData(),c=l.has("password")?String(l.get("password")):"",u=l.has("passwordConfirm")?String(l.get("passwordConfirm")):"";if(Boolean(c&&u)&&c!==u)throw new Error("Please provide matching passwords");let{customerReset:h}=await i.mutate(D6,{variables:{id:`gid://shopify/Customer/${a}`,input:{password:c,resetToken:n}}});if((s=h==null?void 0:h.customerUserErrors)!=null&&s.length)throw new Error(h==null?void 0:h.customerUserErrors[0].message);if(!(h!=null&&h.customerAccessToken))throw new Error("Access token not found. Please try again.");return o.set("customerAccessToken",h.customerAccessToken),j("/account",{headers:{"Set-Cookie":await o.commit()}})}catch(l){return l instanceof Error?M({error:l.message},{status:400}):M({error:l},{status:400})}}function ud(){let e=nt();return(0,Fe.jsxs)("div",{className:"account-reset",children:[(0,Fe.jsx)("h1",{children:"Reset Password."}),(0,Fe.jsx)("p",{children:"Enter a new password for your account."}),(0,Fe.jsxs)(He,{method:"POST",children:[(0,Fe.jsxs)("fieldset",{children:[(0,Fe.jsx)("label",{htmlFor:"password",children:"Password"}),(0,Fe.jsx)("input",{"aria-label":"Password",autoComplete:"current-password",autoFocus:!0,id:"password",minLength:8,name:"password",placeholder:"Password",required:!0,type:"password"}),(0,Fe.jsx)("label",{htmlFor:"passwordConfirm",children:"Re-enter password"}),(0,Fe.jsx)("input",{"aria-label":"Re-enter password",autoComplete:"current-password",id:"passwordConfirm",minLength:8,name:"passwordConfirm",placeholder:"Re-enter password",required:!0,type:"password"})]}),e!=null&&e.error?(0,Fe.jsx)("p",{children:(0,Fe.jsx)("mark",{children:(0,Fe.jsx)("small",{children:e.error})})}):(0,Fe.jsx)("br",{}),(0,Fe.jsx)("button",{type:"submit",children:"Reset"})]}),(0,Fe.jsx)("br",{}),(0,Fe.jsx)("p",{children:(0,Fe.jsx)("a",{href:"/account/login",children:"Back to login \u2192"})})]})}var D6=`#graphql
  mutation customerReset(
    $id: ID!,
    $input: CustomerResetInput!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerReset(id: $id, input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;var G1={};Q(G1,{default:()=>dd,loader:()=>O6,meta:()=>N6});var Ne=A(H()),N6=({data:e})=>[{title:`Hydrogen | ${e.blog.title} blog`}],O6=async({request:e,params:t,context:{storefront:r}})=>{let a=Mt(e,{pageBy:4});if(!t.blogHandle)throw new Response("blog not found",{status:404});let{blog:n}=await r.query(B6,{variables:{blogHandle:t.blogHandle,...a}});if(!(n!=null&&n.articles))throw new Response("Not found",{status:404});return M({blog:n})};function dd(){let{blog:e}=ie(),{articles:t}=e;return(0,Ne.jsxs)("div",{className:"blog",children:[(0,Ne.jsx)("h1",{children:e.title}),(0,Ne.jsx)("div",{className:"blog-grid",children:(0,Ne.jsx)(At,{connection:t,children:({nodes:r,isLoading:a,PreviousLink:n,NextLink:o})=>(0,Ne.jsxs)(Ne.Fragment,{children:[(0,Ne.jsx)(n,{children:a?"Loading...":(0,Ne.jsx)("span",{children:"\u2191 Load previous"})}),r.map((i,s)=>(0,Ne.jsx)($6,{article:i,loading:s<2?"eager":"lazy"},i.id)),(0,Ne.jsx)(o,{children:a?"Loading...":(0,Ne.jsx)("span",{children:"Load more \u2193"})})]})})})]})}function $6({article:e,loading:t}){let r=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(new Date(e.publishedAt));return(0,Ne.jsx)("div",{className:"blog-article",children:(0,Ne.jsxs)(Y,{to:`/blogs/${e.blog.handle}/${e.handle}`,children:[e.image&&(0,Ne.jsx)("div",{className:"blog-article-image",children:(0,Ne.jsx)(Ve,{alt:e.image.altText||e.title,aspectRatio:"3/2",data:e.image,loading:t,sizes:"(min-width: 768px) 50vw, 100vw"})}),(0,Ne.jsx)("h3",{children:e.title}),(0,Ne.jsx)("small",{children:r})]})},e.id)}var B6=`#graphql
  query Blog(
    $language: LanguageCode
    $blogHandle: String!
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(language: $language) {
    blog(handle: $blogHandle) {
      title
      seo {
        title
        description
      }
      articles(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ArticleItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          hasNextPage
          endCursor
        }

      }
    }
  }
  fragment ArticleItem on Article {
    author: authorV2 {
      name
    }
    contentHtml
    handle
    id
    image {
      id
      altText
      url
      width
      height
    }
    publishedAt
    title
    blog {
      handle
    }
  }
`;var Y1={};Q(Y1,{CUSTOMER_FRAGMENT:()=>fd,default:()=>hd,loader:()=>U6,meta:()=>F6});var te=A(H()),F6=()=>[{title:"Orders"}];async function U6({request:e,context:t}){let{session:r,storefront:a}=t,n=await r.get("customerAccessToken");if(!(n!=null&&n.accessToken))return j("/account/login");try{let o=Mt(e,{pageBy:20}),{customer:i}=await a.query(W6,{variables:{customerAccessToken:n.accessToken,country:a.i18n.country,language:a.i18n.language,...o},cache:a.CacheNone()});if(!i)throw new Error("Customer not found");return M({customer:i})}catch(o){return o instanceof Error?M({error:o.message},{status:400}):M({error:o},{status:400})}}function hd(){let{customer:e}=ie(),{orders:t,numberOfOrders:r}=e;return(0,te.jsxs)("div",{className:"orders",children:[(0,te.jsxs)("h2",{children:["Orders ",(0,te.jsxs)("small",{children:["(",r,")"]})]}),(0,te.jsx)("br",{}),t.nodes.length?(0,te.jsx)(j6,{orders:t}):(0,te.jsx)(pd,{})]})}function j6({orders:e}){return(0,te.jsx)("div",{className:"acccount-orders",children:e!=null&&e.nodes.length?(0,te.jsx)(At,{connection:e,children:({nodes:t,isLoading:r,PreviousLink:a,NextLink:n})=>(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)(a,{children:r?"Loading...":(0,te.jsx)("span",{children:"\u2191 Load previous"})}),t.map(o=>(0,te.jsx)(q6,{order:o},o.id)),(0,te.jsx)(n,{children:r?"Loading...":(0,te.jsx)("span",{children:"Load more \u2193"})})]})}):(0,te.jsx)(pd,{})})}function pd(){return(0,te.jsxs)("div",{children:[(0,te.jsx)("p",{children:"You haven't placed any orders yet."}),(0,te.jsx)("br",{}),(0,te.jsx)("p",{children:(0,te.jsx)(Y,{to:"/collections",children:"Start Shopping \u2192"})})]})}function q6({order:e}){return(0,te.jsxs)(te.Fragment,{children:[(0,te.jsxs)("fieldset",{children:[(0,te.jsx)(Y,{to:`/account/orders/${e.id}`,children:(0,te.jsxs)("strong",{children:["#",e.orderNumber]})}),(0,te.jsx)("p",{children:new Date(e.processedAt).toDateString()}),(0,te.jsx)("p",{children:e.financialStatus}),(0,te.jsx)("p",{children:e.fulfillmentStatus}),(0,te.jsx)(Re,{data:e.currentTotalPrice}),(0,te.jsx)(Y,{to:`/account/orders/${btoa(e.id)}`,children:"View Order \u2192"})]}),(0,te.jsx)("br",{})]})}var z6=`#graphql
  fragment OrderItem on Order {
    currentTotalPrice {
      amount
      currencyCode
    }
    financialStatus
    fulfillmentStatus
    id
    lineItems(first: 10) {
      nodes {
        title
        variant {
          image {
            url
            altText
            height
            width
          }
        }
      }
    }
    orderNumber
    customerUrl
    statusUrl
    processedAt
  }
`,fd=`#graphql
  fragment CustomerOrders on Customer {
    numberOfOrders
    orders(
      sortKey: PROCESSED_AT,
      reverse: true,
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...OrderItem
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        hasNextPage
        endCursor
      }
    }
  }
  ${z6}
`,W6=`#graphql
  ${fd}
  query CustomerOrders(
    $country: CountryCode
    $customerAccessToken: String!
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      ...CustomerOrders
    }
  }
`;var J1={};Q(J1,{action:()=>G6,normalizePredictiveSearchResults:()=>md});var gd=["ARTICLE","COLLECTION","PAGE","PRODUCT","QUERY"];async function G6({request:e,params:t,context:r}){if(e.method!=="POST")throw new Error("Invalid request method");let a=await Y6({params:t,request:e,context:r});return M(a)}async function Y6({params:e,request:t,context:r}){let a=new URL(t.url),n=new URLSearchParams(a.search),o;try{o=await t.formData()}catch{}let i=String((o==null?void 0:o.get("q"))||n.get("q")||""),s=Number((o==null?void 0:o.get("limit"))||n.get("limit")||10),l=String((o==null?void 0:o.get("type"))||n.get("type")||"ANY"),c=l==="ANY"?gd:l.split(",").map(h=>h.toUpperCase()).filter(h=>gd.includes(h));if(!i)return{searchResults:{results:null,totalResults:0},searchTerm:i,searchTypes:c};let u=await r.storefront.query(J6,{variables:{limit:s,limitScope:"EACH",searchTerm:i,types:c}});if(!u)throw new Error("No data returned from Shopify API");return{searchResults:md(u.predictiveSearch,e.locale),searchTerm:i,searchTypes:c}}function md(e,t){let r=0;if(!e)return{results:td,totalResults:r};function a(i,s){return s?i.trackingParameters?`?${s}&${i.trackingParameters}`:`?${s}`:i.trackingParameters?`?${i.trackingParameters}`:""}let n=t?`/${t}`:"",o=[];return e.queries.length&&o.push({type:"queries",items:e.queries.map(i=>{let s=a(i,`q=${encodeURIComponent(i.text)}`);return r++,{__typename:i.__typename,handle:"",id:i.text,image:void 0,title:i.text,styledTitle:i.styledText,url:`${n}/search${s}`}})}),e.products.length&&o.push({type:"products",items:e.products.map(i=>{var l,c,u;r++;let s=a(i);return{__typename:i.__typename,handle:i.handle,id:i.id,image:(u=(c=(l=i.variants)==null?void 0:l.nodes)==null?void 0:c[0])==null?void 0:u.image,title:i.title,url:`${n}/products/${i.handle}${s}`,price:i.variants.nodes[0].price}})}),e.collections.length&&o.push({type:"collections",items:e.collections.map(i=>{r++;let s=a(i);return{__typename:i.__typename,handle:i.handle,id:i.id,image:i.image,title:i.title,url:`${n}/collections/${i.handle}${s}`}})}),e.pages.length&&o.push({type:"pages",items:e.pages.map(i=>{r++;let s=a(i);return{__typename:i.__typename,handle:i.handle,id:i.id,image:void 0,title:i.title,url:`${n}/pages/${i.handle}${s}`}})}),e.articles.length&&o.push({type:"articles",items:e.articles.map(i=>{r++;let s=a(i);return{__typename:i.__typename,handle:i.handle,id:i.id,image:i.image,title:i.title,url:`${n}/blog/${i.handle}${s}`}})}),{results:o,totalResults:r}}var J6=`#graphql
  fragment PredictiveArticle on Article {
    __typename
    id
    title
    handle
    image {
      url
      altText
      width
      height
    }
    trackingParameters
  }
  fragment PredictiveCollection on Collection {
    __typename
    id
    title
    handle
    image {
      url
      altText
      width
      height
    }
    trackingParameters
  }
  fragment PredictivePage on Page {
    __typename
    id
    title
    handle
    trackingParameters
  }
  fragment PredictiveProduct on Product {
    __typename
    id
    title
    handle
    trackingParameters
    variants(first: 1) {
      nodes {
        id
        image {
          url
          altText
          width
          height
        }
        price {
          amount
          currencyCode
        }
      }
    }
  }
  fragment PredictiveQuery on SearchQuerySuggestion {
    __typename
    text
    styledText
    trackingParameters
  }
  query predictiveSearch(
    $country: CountryCode
    $language: LanguageCode
    $limit: Int!
    $limitScope: PredictiveSearchLimitScope!
    $searchTerm: String!
    $types: [PredictiveSearchType!]
  ) @inContext(country: $country, language: $language) {
    predictiveSearch(
      limit: $limit,
      limitScope: $limitScope,
      query: $searchTerm,
      types: $types,
    ) {
      articles {
        ...PredictiveArticle
      }
      collections {
        ...PredictiveCollection
      }
      pages {
        ...PredictivePage
      }
      products {
        ...PredictiveProduct
      }
      queries {
        ...PredictiveQuery
      }
    }
  }
`;var K1={};Q(K1,{default:()=>vd,loader:()=>X6,meta:()=>K6});var Ae=A(H()),K6=({data:e})=>[{title:`Hydrogen | ${e.collection.title} Collection`}];async function X6({request:e,params:t,context:r}){let{handle:a}=t,{storefront:n}=r,o=Mt(e,{pageBy:8});if(!a)return j("/collections");let{collection:i}=await n.query(r7,{variables:{handle:a,...o}});if(!i)throw new Response(`Collection ${a} not found`,{status:404});return M({collection:i})}function vd(){let{collection:e}=ie();return(0,Ae.jsxs)("div",{className:"collection",children:[(0,Ae.jsx)("h1",{children:e.title}),(0,Ae.jsx)("p",{className:"collection-description",children:e.description}),(0,Ae.jsx)(At,{connection:e.products,children:({nodes:t,isLoading:r,PreviousLink:a,NextLink:n})=>(0,Ae.jsxs)(Ae.Fragment,{children:[(0,Ae.jsx)(a,{children:r?"Loading...":(0,Ae.jsx)("span",{children:"\u2191 Load previous"})}),(0,Ae.jsx)(Q6,{products:t}),(0,Ae.jsx)("br",{}),(0,Ae.jsx)(n,{children:r?"Loading...":(0,Ae.jsx)("span",{children:"Load more \u2193"})})]})})]})}function Q6({products:e}){return(0,Ae.jsx)("div",{className:"products-grid",children:e.map((t,r)=>(0,Ae.jsx)(e7,{product:t,loading:r<8?"eager":void 0},t.id))})}function e7({product:e,loading:t}){let r=e.variants.nodes[0],a=Co(e.handle,r.selectedOptions);return(0,Ae.jsxs)(Y,{className:"product-item",prefetch:"intent",to:a,children:[e.featuredImage&&(0,Ae.jsx)(Ve,{alt:e.featuredImage.altText||e.title,aspectRatio:"1/1",data:e.featuredImage,loading:t,sizes:"(min-width: 45em) 400px, 100vw"}),(0,Ae.jsx)("h4",{children:e.title}),(0,Ae.jsx)("small",{children:(0,Ae.jsx)(Re,{data:e.priceRange.minVariantPrice})})]},e.id)}var t7=`#graphql
  fragment MoneyProductItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment ProductItem on Product {
    id
    handle
    title
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyProductItem
      }
      maxVariantPrice {
        ...MoneyProductItem
      }
    }
    variants(first: 1) {
      nodes {
        selectedOptions {
          name
          value
        }
      }
    }
  }
`,r7=`#graphql
  ${t7}
  query Collection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      products(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ProductItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          endCursor
          startCursor
        }
      }
    }
  }
`;var X1={};Q(X1,{default:()=>yd,loader:()=>n7,meta:()=>a7});var T=A(H()),a7=({data:e})=>{var t;return[{title:`Order ${(t=e==null?void 0:e.order)==null?void 0:t.name}`}]};async function n7({params:e,context:t}){var h;let{session:r,storefront:a}=t;if(!e.id)return j("/account/orders");let n=atob(e.id);if(!await r.get("customerAccessToken"))return j("/account/login");let{order:i}=await a.query(i7,{variables:{orderId:n}});if(!i||!("lineItems"in i))throw new Response("Order not found",{status:404});let s=lt(i.lineItems),c=(h=lt(i.discountApplications)[0])==null?void 0:h.value,u=(c==null?void 0:c.__typename)==="MoneyV2"&&c,d=(c==null?void 0:c.__typename)==="PricingPercentageValue"&&(c==null?void 0:c.percentage);return M({order:i,lineItems:s,discountValue:u,discountPercentage:d})}function yd(){var n;let{order:e,lineItems:t,discountValue:r,discountPercentage:a}=ie();return(0,T.jsxs)("div",{className:"account-order",children:[(0,T.jsxs)("h2",{children:["Order ",e.name]}),(0,T.jsxs)("p",{children:["Placed on ",new Date(e.processedAt).toDateString()]}),(0,T.jsx)("br",{}),(0,T.jsxs)("div",{children:[(0,T.jsxs)("table",{children:[(0,T.jsx)("thead",{children:(0,T.jsxs)("tr",{children:[(0,T.jsx)("th",{scope:"col",children:"Product"}),(0,T.jsx)("th",{scope:"col",children:"Price"}),(0,T.jsx)("th",{scope:"col",children:"Quantity"}),(0,T.jsx)("th",{scope:"col",children:"Total"})]})}),(0,T.jsx)("tbody",{children:t.map((o,i)=>(0,T.jsx)(o7,{lineItem:o},i))}),(0,T.jsxs)("tfoot",{children:[(r&&r.amount||a)&&(0,T.jsxs)("tr",{children:[(0,T.jsx)("th",{scope:"row",colSpan:3,children:(0,T.jsx)("p",{children:"Discounts"})}),(0,T.jsx)("th",{scope:"row",children:(0,T.jsx)("p",{children:"Discounts"})}),(0,T.jsx)("td",{children:a?(0,T.jsxs)("span",{children:["-",a,"% OFF"]}):r&&(0,T.jsx)(Re,{data:r})})]}),(0,T.jsxs)("tr",{children:[(0,T.jsx)("th",{scope:"row",colSpan:3,children:(0,T.jsx)("p",{children:"Subtotal"})}),(0,T.jsx)("th",{scope:"row",children:(0,T.jsx)("p",{children:"Subtotal"})}),(0,T.jsx)("td",{children:(0,T.jsx)(Re,{data:e.subtotalPriceV2})})]}),(0,T.jsxs)("tr",{children:[(0,T.jsx)("th",{scope:"row",colSpan:3,children:"Tax"}),(0,T.jsx)("th",{scope:"row",children:(0,T.jsx)("p",{children:"Tax"})}),(0,T.jsx)("td",{children:(0,T.jsx)(Re,{data:e.totalTaxV2})})]}),(0,T.jsxs)("tr",{children:[(0,T.jsx)("th",{scope:"row",colSpan:3,children:"Total"}),(0,T.jsx)("th",{scope:"row",children:(0,T.jsx)("p",{children:"Total"})}),(0,T.jsx)("td",{children:(0,T.jsx)(Re,{data:e.totalPriceV2})})]})]})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)("h3",{children:"Shipping Address"}),e!=null&&e.shippingAddress?(0,T.jsxs)("address",{children:[(0,T.jsxs)("p",{children:[e.shippingAddress.firstName&&e.shippingAddress.firstName+" ",e.shippingAddress.lastName]}),(n=e==null?void 0:e.shippingAddress)!=null&&n.formatted?e.shippingAddress.formatted.map(o=>(0,T.jsx)("p",{children:o},o)):(0,T.jsx)(T.Fragment,{})]}):(0,T.jsx)("p",{children:"No shipping address defined"}),(0,T.jsx)("h3",{children:"Status"}),(0,T.jsx)("div",{children:(0,T.jsx)("p",{children:e.fulfillmentStatus})})]})]}),(0,T.jsx)("br",{}),(0,T.jsx)("p",{children:(0,T.jsx)("a",{target:"_blank",href:e.statusUrl,rel:"noreferrer",children:"View Order Status \u2192"})})]})}function o7({lineItem:e}){var t;return(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{children:(0,T.jsxs)("div",{children:[(0,T.jsx)(Y,{to:`/products/${e.variant.product.handle}`,children:((t=e==null?void 0:e.variant)==null?void 0:t.image)&&(0,T.jsx)("div",{children:(0,T.jsx)(Ve,{data:e.variant.image,width:96,height:96})})}),(0,T.jsxs)("div",{children:[(0,T.jsx)("p",{children:e.title}),(0,T.jsx)("small",{children:e.variant.title})]})]})}),(0,T.jsx)("td",{children:(0,T.jsx)(Re,{data:e.variant.price})}),(0,T.jsx)("td",{children:e.quantity}),(0,T.jsx)("td",{children:(0,T.jsx)(Re,{data:e.discountedTotalPrice})})]},e.variant.id)}var i7=`#graphql
  fragment OrderMoney on MoneyV2 {
    amount
    currencyCode
  }
  fragment AddressFull on MailingAddress {
    address1
    address2
    city
    company
    country
    countryCodeV2
    firstName
    formatted
    id
    lastName
    name
    phone
    province
    provinceCode
    zip
  }
  fragment DiscountApplication on DiscountApplication {
    value {
      __typename
      ... on MoneyV2 {
        ...OrderMoney
      }
      ... on PricingPercentageValue {
        percentage
      }
    }
  }
  fragment OrderLineProductVariant on ProductVariant {
    id
    image {
      altText
      height
      url
      id
      width
    }
    price {
      ...OrderMoney
    }
    product {
      handle
    }
    sku
    title
  }
  fragment OrderLineItemFull on OrderLineItem {
    title
    quantity
    discountAllocations {
      allocatedAmount {
        ...OrderMoney
      }
      discountApplication {
        ...DiscountApplication
      }
    }
    originalTotalPrice {
      ...OrderMoney
    }
    discountedTotalPrice {
      ...OrderMoney
    }
    variant {
      ...OrderLineProductVariant
    }
  }
  fragment Order on Order {
    id
    name
    orderNumber
    statusUrl
    processedAt
    fulfillmentStatus
    totalTaxV2 {
      ...OrderMoney
    }
    totalPriceV2 {
      ...OrderMoney
    }
    subtotalPriceV2 {
      ...OrderMoney
    }
    shippingAddress {
      ...AddressFull
    }
    discountApplications(first: 100) {
      nodes {
        ...DiscountApplication
      }
    }
    lineItems(first: 100) {
      nodes {
        ...OrderLineItemFull
      }
    }
  }
  query Order(
    $country: CountryCode
    $language: LanguageCode
    $orderId: ID!
  ) @inContext(country: $country, language: $language) {
    order: node(id: $orderId) {
      ... on Order {
        ...Order
      }
    }
  }
`;var Q1={};Q(Q1,{default:()=>wd,loader:()=>s7});var tt=A(H());async function s7({context:e,request:t}){let r=Mt(t,{pageBy:4}),{collections:a}=await e.storefront.query(u7,{variables:r});return M({collections:a})}function wd(){let{collections:e}=ie();return(0,tt.jsxs)("div",{className:"collections",children:[(0,tt.jsx)("h1",{children:"Collections"}),(0,tt.jsx)(At,{connection:e,children:({nodes:t,isLoading:r,PreviousLink:a,NextLink:n})=>(0,tt.jsxs)("div",{children:[(0,tt.jsx)(a,{children:r?"Loading...":(0,tt.jsx)("span",{children:"\u2191 Load previous"})}),(0,tt.jsx)(l7,{collections:t}),(0,tt.jsx)(n,{children:r?"Loading...":(0,tt.jsx)("span",{children:"Load more \u2193"})})]})})]})}function l7({collections:e}){return(0,tt.jsx)("div",{className:"collections-grid",children:e.map((t,r)=>(0,tt.jsx)(c7,{collection:t,index:r},t.id))})}function c7({collection:e,index:t}){return(0,tt.jsxs)(Y,{className:"collection-item",to:`/collections/${e.handle}`,prefetch:"intent",children:[e.image&&(0,tt.jsx)(Ve,{alt:e.image.altText||e.title,aspectRatio:"1/1",data:e.image,loading:t<3?"eager":void 0}),(0,tt.jsx)("h5",{children:e.title})]},e.id)}var u7=`#graphql
  fragment Collection on Collection {
    id
    title
    handle
    image {
      id
      url
      altText
      width
      height
    }
  }
  query StoreCollections(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    collections(
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...Collection
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;var ts={};Q(ts,{AddressForm:()=>es,action:()=>p7,default:()=>Cd,loader:()=>h7,meta:()=>d7});var O=A(H()),d7=()=>[{title:"Addresses"}];async function h7({context:e}){let{session:t}=e;return await t.get("customerAccessToken")?M({}):j("/account/login")}async function p7({request:e,context:t}){var n,o,i,s,l;let{storefront:r,session:a}=t;try{let c=await e.formData(),u=c.has("addressId")?String(c.get("addressId")):null;if(!u)throw new Error("You must provide an address id.");let d=await a.get("customerAccessToken");if(!d)return M({error:{[u]:"Unauthorized"}},{status:401});let{accessToken:h}=d,p=c.has("defaultAddress")?String(c.get("defaultAddress"))==="on":null,f={},v=["address1","address2","city","company","country","firstName","lastName","phone","province","zip"];for(let g of v){let w=c.get(g);typeof w=="string"&&(f[g]=w)}switch(e.method){case"POST":try{let{customerAddressCreate:g}=await r.mutate(y7,{variables:{customerAccessToken:h,address:f}});if((n=g==null?void 0:g.customerUserErrors)!=null&&n.length){let b=g.customerUserErrors[0];throw new Error(b.message)}let w=g==null?void 0:g.customerAddress;if(!(w!=null&&w.id))throw new Error("Expected customer address to be created, but the id is missing");if(p){let b=decodeURIComponent(w.id),{customerDefaultAddressUpdate:C}=await r.mutate(xd,{variables:{customerAccessToken:h,addressId:b}});if((o=C==null?void 0:C.customerUserErrors)!=null&&o.length){let m=C.customerUserErrors[0];throw new Error(m.message)}}return M({error:null,createdAddress:w,defaultAddress:p})}catch(g){return g instanceof Error?M({error:{[u]:g.message}},{status:400}):M({error:{[u]:g}},{status:400})}case"PUT":try{let{customerAddressUpdate:g}=await r.mutate(m7,{variables:{address:f,customerAccessToken:h,id:decodeURIComponent(u)}}),w=g==null?void 0:g.customerAddress;if((i=g==null?void 0:g.customerUserErrors)!=null&&i.length){let b=g.customerUserErrors[0];throw new Error(b.message)}if(p){let{customerDefaultAddressUpdate:b}=await r.mutate(xd,{variables:{customerAccessToken:h,addressId:decodeURIComponent(u)}});if((s=b==null?void 0:b.customerUserErrors)!=null&&s.length){let C=b.customerUserErrors[0];throw new Error(C.message)}}return M({error:null,updatedAddress:w,defaultAddress:p})}catch(g){return g instanceof Error?M({error:{[u]:g.message}},{status:400}):M({error:{[u]:g}},{status:400})}case"DELETE":try{let{customerAddressDelete:g}=await r.mutate(v7,{variables:{customerAccessToken:h,id:u}});if((l=g==null?void 0:g.customerUserErrors)!=null&&l.length){let w=g.customerUserErrors[0];throw new Error(w.message)}return M({error:null,deletedAddress:u})}catch(g){return g instanceof Error?M({error:{[u]:g.message}},{status:400}):M({error:{[u]:g}},{status:400})}default:return M({error:{[u]:"Method not allowed"}},{status:405})}}catch(c){return c instanceof Error?M({error:c.message},{status:400}):M({error:c},{status:400})}}function Cd(){let{customer:e}=Rr(),{defaultAddress:t,addresses:r}=e;return(0,O.jsxs)("div",{className:"account-addresses",children:[(0,O.jsx)("h2",{children:"Addresses"}),(0,O.jsx)("br",{}),r.nodes.length?(0,O.jsxs)("div",{children:[(0,O.jsxs)("div",{children:[(0,O.jsx)("legend",{children:"Create address"}),(0,O.jsx)(f7,{})]}),(0,O.jsx)("br",{}),(0,O.jsx)("hr",{}),(0,O.jsx)("br",{}),(0,O.jsx)(g7,{addresses:r,defaultAddress:t})]}):(0,O.jsx)("p",{children:"You have no addresses saved."})]})}function f7(){return(0,O.jsx)(es,{address:{address1:"",address2:"",city:"",company:"",country:"",firstName:"",id:"new",lastName:"",phone:"",province:"",zip:""},defaultAddress:null,children:({stateForMethod:t})=>(0,O.jsx)("div",{children:(0,O.jsx)("button",{disabled:t("POST")!=="idle",formMethod:"POST",type:"submit",children:t("POST")!=="idle"?"Creating":"Create"})})})}function g7({addresses:e,defaultAddress:t}){return(0,O.jsxs)("div",{children:[(0,O.jsx)("legend",{children:"Existing addresses"}),e.nodes.map(r=>(0,O.jsx)(es,{address:r,defaultAddress:t,children:({stateForMethod:a})=>(0,O.jsxs)("div",{children:[(0,O.jsx)("button",{disabled:a("PUT")!=="idle",formMethod:"PUT",type:"submit",children:a("PUT")!=="idle"?"Saving":"Save"}),(0,O.jsx)("button",{disabled:a("DELETE")!=="idle",formMethod:"DELETE",type:"submit",children:a("DELETE")!=="idle"?"Deleting":"Delete"})]})},r.id))]})}function es({address:e,defaultAddress:t,children:r}){var l;let{state:a,formMethod:n}=ht(),o=nt(),i=(l=o==null?void 0:o.error)==null?void 0:l[e.id],s=(t==null?void 0:t.id)===e.id;return(0,O.jsx)(He,{id:e.id,children:(0,O.jsxs)("fieldset",{children:[(0,O.jsx)("input",{type:"hidden",name:"addressId",defaultValue:e.id}),(0,O.jsx)("label",{htmlFor:"firstName",children:"First name*"}),(0,O.jsx)("input",{"aria-label":"First name",autoComplete:"given-name",defaultValue:(e==null?void 0:e.firstName)??"",id:"firstName",name:"firstName",placeholder:"First name",required:!0,type:"text"}),(0,O.jsx)("label",{htmlFor:"lastName",children:"Last name*"}),(0,O.jsx)("input",{"aria-label":"Last name",autoComplete:"family-name",defaultValue:(e==null?void 0:e.lastName)??"",id:"lastName",name:"lastName",placeholder:"Last name",required:!0,type:"text"}),(0,O.jsx)("label",{htmlFor:"company",children:"Company"}),(0,O.jsx)("input",{"aria-label":"Company",autoComplete:"organization",defaultValue:(e==null?void 0:e.company)??"",id:"company",name:"company",placeholder:"Company",type:"text"}),(0,O.jsx)("label",{htmlFor:"address1",children:"Address line*"}),(0,O.jsx)("input",{"aria-label":"Address line 1",autoComplete:"address-line1",defaultValue:(e==null?void 0:e.address1)??"",id:"address1",name:"address1",placeholder:"Address line 1*",required:!0,type:"text"}),(0,O.jsx)("label",{htmlFor:"address2",children:"Address line 2"}),(0,O.jsx)("input",{"aria-label":"Address line 2",autoComplete:"address-line2",defaultValue:(e==null?void 0:e.address2)??"",id:"address2",name:"address2",placeholder:"Address line 2",type:"text"}),(0,O.jsx)("label",{htmlFor:"city",children:"City*"}),(0,O.jsx)("input",{"aria-label":"City",autoComplete:"address-level2",defaultValue:(e==null?void 0:e.city)??"",id:"city",name:"city",placeholder:"City",required:!0,type:"text"}),(0,O.jsx)("label",{htmlFor:"province",children:"State / Province*"}),(0,O.jsx)("input",{"aria-label":"State",autoComplete:"address-level1",defaultValue:(e==null?void 0:e.province)??"",id:"province",name:"province",placeholder:"State / Province",required:!0,type:"text"}),(0,O.jsx)("label",{htmlFor:"zip",children:"Zip / Postal Code*"}),(0,O.jsx)("input",{"aria-label":"Zip",autoComplete:"postal-code",defaultValue:(e==null?void 0:e.zip)??"",id:"zip",name:"zip",placeholder:"Zip / Postal Code",required:!0,type:"text"}),(0,O.jsx)("label",{htmlFor:"country",children:"Country*"}),(0,O.jsx)("input",{"aria-label":"Country",autoComplete:"country-name",defaultValue:(e==null?void 0:e.country)??"",id:"country",name:"country",placeholder:"Country",required:!0,type:"text"}),(0,O.jsx)("label",{htmlFor:"phone",children:"Phone"}),(0,O.jsx)("input",{"aria-label":"Phone",autoComplete:"tel",defaultValue:(e==null?void 0:e.phone)??"",id:"phone",name:"phone",placeholder:"+16135551111",pattern:"^\\+?[1-9]\\d{3,14}$",type:"tel"}),(0,O.jsxs)("div",{children:[(0,O.jsx)("input",{defaultChecked:s,id:"defaultAddress",name:"defaultAddress",type:"checkbox"}),(0,O.jsx)("label",{htmlFor:"defaultAddress",children:"Set as default address"})]}),i?(0,O.jsx)("p",{children:(0,O.jsx)("mark",{children:(0,O.jsx)("small",{children:i})})}):(0,O.jsx)("br",{}),r({stateForMethod:c=>n===c?a:"idle"})]})})}var m7=`#graphql
  mutation customerAddressUpdate(
    $address: MailingAddressInput!
    $customerAccessToken: String!
    $id: ID!
    $country: CountryCode
    $language: LanguageCode
 ) @inContext(country: $country, language: $language) {
    customerAddressUpdate(
      address: $address
      customerAccessToken: $customerAccessToken
      id: $id
    ) {
      customerAddress {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`,v7=`#graphql
  mutation customerAddressDelete(
    $customerAccessToken: String!,
    $id: ID!,
    $country: CountryCode,
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerAddressDelete(customerAccessToken: $customerAccessToken, id: $id) {
      customerUserErrors {
        code
        field
        message
      }
      deletedCustomerAddressId
    }
  }
`,xd=`#graphql
  mutation customerDefaultAddressUpdate(
    $addressId: ID!
    $customerAccessToken: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerDefaultAddressUpdate(
      addressId: $addressId
      customerAccessToken: $customerAccessToken
    ) {
      customer {
        defaultAddress {
          id
        }
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`,y7=`#graphql
  mutation customerAddressCreate(
    $address: MailingAddressInput!
    $customerAccessToken: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerAddressCreate(
      address: $address
      customerAccessToken: $customerAccessToken
    ) {
      customerAddress {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;var rs={};Q(rs,{action:()=>x7,default:()=>Sd,loader:()=>w7});var Oe=A(H());async function w7({context:e}){return await e.session.get("customerAccessToken")?j("/account"):M({})}var x7=async({request:e,context:t})=>{var u,d;if(e.method!=="POST")return M({error:"Method not allowed"},{status:405});let{storefront:r,session:a}=t,n=await e.formData(),o=String(n.has("email")?n.get("email"):""),i=n.has("password")?String(n.get("password")):null,s=n.has("passwordConfirm")?String(n.get("passwordConfirm")):null,l=i&&s&&i===s,c=Boolean(o&&i);try{if(!l)throw new Error("Passwords do not match");if(!c)throw new Error("Please provide both an email and a password.");let{customerCreate:h}=await r.mutate(C7,{variables:{input:{email:o,password:i}}});if((u=h==null?void 0:h.customerUserErrors)!=null&&u.length)throw new Error(h==null?void 0:h.customerUserErrors[0].message);let p=h==null?void 0:h.customer;if(!(p!=null&&p.id))throw new Error("Could not create customer");let{customerAccessTokenCreate:f}=await r.mutate(S7,{variables:{input:{email:o,password:i}}});if(!((d=f==null?void 0:f.customerAccessToken)!=null&&d.accessToken))throw new Error("Missing access token");return a.set("customerAccessToken",f==null?void 0:f.customerAccessToken),M({error:null,newCustomer:p},{status:302,headers:{"Set-Cookie":await a.commit(),Location:"/account"}})}catch(h){return h instanceof Error?M({error:h.message},{status:400}):M({error:h},{status:400})}};function Sd(){let e=nt(),t=(e==null?void 0:e.error)||null;return(0,Oe.jsxs)("div",{className:"login",children:[(0,Oe.jsx)("h1",{children:"Register."}),(0,Oe.jsxs)(He,{method:"POST",children:[(0,Oe.jsxs)("fieldset",{children:[(0,Oe.jsx)("label",{htmlFor:"email",children:"Email address"}),(0,Oe.jsx)("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,placeholder:"Email address","aria-label":"Email address",autoFocus:!0}),(0,Oe.jsx)("label",{htmlFor:"password",children:"Password"}),(0,Oe.jsx)("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",placeholder:"Password","aria-label":"Password",minLength:8,required:!0}),(0,Oe.jsx)("label",{htmlFor:"passwordConfirm",children:"Re-enter password"}),(0,Oe.jsx)("input",{id:"passwordConfirm",name:"passwordConfirm",type:"password",autoComplete:"current-password",placeholder:"Re-enter password","aria-label":"Re-enter password",minLength:8,required:!0})]}),t?(0,Oe.jsx)("p",{children:(0,Oe.jsx)("mark",{children:(0,Oe.jsx)("small",{children:t})})}):(0,Oe.jsx)("br",{}),(0,Oe.jsx)("button",{type:"submit",children:"Register"})]}),(0,Oe.jsx)("br",{}),(0,Oe.jsx)("p",{children:(0,Oe.jsx)(Y,{to:"/account/login",children:"Login \u2192"})})]})}var C7=`#graphql
  mutation customerCreate(
    $input: CustomerCreateInput!,
    $country: CountryCode,
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerCreate(input: $input) {
      customer {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`,S7=`#graphql
  mutation registerLogin(
    $input: CustomerAccessTokenCreateInput!,
    $country: CountryCode,
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerAccessTokenCreate(input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
`;var as={};Q(as,{action:()=>R7,default:()=>bd,loader:()=>b7});var he=A(H());async function b7({context:e}){return await e.session.get("customerAccessToken")?j("/account"):M({})}async function R7({request:e,context:t}){let{storefront:r}=t,a=await e.formData(),n=a.has("email")?String(a.get("email")):null;if(e.method!=="POST")return M({error:"Method not allowed"},{status:405});try{if(!n)throw new Error("Please provide an email.");return await r.mutate(E7,{variables:{email:n}}),M({resetRequested:!0})}catch(o){return o instanceof Error?M({error:o.message,resetRequested:!1},{status:400}):M({error:o,resetRequested:!1},{status:400})}}function bd(){let e=nt();return(0,he.jsx)("div",{className:"account-recover",children:(0,he.jsx)("div",{children:e!=null&&e.resetRequested?(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)("h1",{children:"Request Sent."}),(0,he.jsx)("p",{children:"If that email address is in our system, you will receive an email with instructions about how to reset your password in a few minutes."}),(0,he.jsx)("br",{}),(0,he.jsx)(Y,{to:"/account/login",children:"Return to Login"})]}):(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)("h1",{children:"Forgot Password."}),(0,he.jsx)("p",{children:"Enter the email address associated with your account to receive a link to reset your password."}),(0,he.jsx)("br",{}),(0,he.jsxs)(He,{method:"POST",children:[(0,he.jsxs)("fieldset",{children:[(0,he.jsx)("label",{htmlFor:"email",children:"Email"}),(0,he.jsx)("input",{"aria-label":"Email address",autoComplete:"email",autoFocus:!0,id:"email",name:"email",placeholder:"Email address",required:!0,type:"email"})]}),e!=null&&e.error?(0,he.jsx)("p",{children:(0,he.jsx)("mark",{children:(0,he.jsx)("small",{children:e.error})})}):(0,he.jsx)("br",{}),(0,he.jsx)("button",{type:"submit",children:"Request Reset Link"})]}),(0,he.jsxs)("div",{children:[(0,he.jsx)("br",{}),(0,he.jsx)("p",{children:(0,he.jsx)(Y,{to:"/account/login",children:"Login \u2192"})})]})]})})})}var E7=`#graphql
  mutation customerRecover(
    $email: String!,
    $country: CountryCode,
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerRecover(email: $email) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;var ns={};Q(ns,{default:()=>Rd,loader:()=>M7,meta:()=>A7});var Jt=A(H()),A7=({data:e})=>[{title:`Hydrogen | ${e.policy.title}`}];async function M7({params:e,context:t}){var o,i;if(!e.handle)throw new Response("No handle was passed in",{status:404});let r=e.handle.replace(/-([a-z])/g,(s,l)=>l.toUpperCase()),n=(i=(await t.storefront.query(k7,{variables:{privacyPolicy:!1,shippingPolicy:!1,termsOfService:!1,refundPolicy:!1,[r]:!0,language:(o=t.storefront.i18n)==null?void 0:o.language}})).shop)==null?void 0:i[r];if(!n)throw new Response("Could not find the policy",{status:404});return M({policy:n})}function Rd(){let{policy:e}=ie();return(0,Jt.jsxs)("div",{className:"policy",children:[(0,Jt.jsx)("br",{}),(0,Jt.jsx)("br",{}),(0,Jt.jsx)("div",{children:(0,Jt.jsx)(Y,{to:"/policies",children:"\u2190 Back to Policies"})}),(0,Jt.jsx)("br",{}),(0,Jt.jsx)("h1",{children:e.title}),(0,Jt.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})]})}var k7=`#graphql
  fragment Policy on ShopPolicy {
    body
    handle
    id
    title
    url
  }
  query Policy(
    $country: CountryCode
    $language: LanguageCode
    $privacyPolicy: Boolean!
    $refundPolicy: Boolean!
    $shippingPolicy: Boolean!
    $termsOfService: Boolean!
  ) @inContext(language: $language, country: $country) {
    shop {
      privacyPolicy @include(if: $privacyPolicy) {
        ...Policy
      }
      shippingPolicy @include(if: $shippingPolicy) {
        ...Policy
      }
      termsOfService @include(if: $termsOfService) {
        ...Policy
      }
      refundPolicy @include(if: $refundPolicy) {
        ...Policy
      }
    }
  }
`;var os={};Q(os,{default:()=>Md,loader:()=>T7,meta:()=>_7});var Ad=A(ce());var U=A(H()),_7=({data:e})=>[{title:`Hydrogen | ${e.product.title}`}];async function T7({params:e,request:t,context:r}){let{handle:a}=e,{storefront:n}=r,o=N2(t).filter(u=>!u.name.startsWith("_sid")&&!u.name.startsWith("_pos")&&!u.name.startsWith("_psq")&&!u.name.startsWith("_ss")&&!u.name.startsWith("_v")&&!u.name.startsWith("fbclid"));if(!a)throw new Error("Expected product handle to be defined");let{product:i}=await n.query(N7,{variables:{handle:a,selectedOptions:o}});if(!(i!=null&&i.id))throw new Response(null,{status:404});let s=i.variants.nodes[0];if(Boolean(s.selectedOptions.find(u=>u.name==="Title"&&u.value==="Default Title")))i.selectedVariant=s;else if(!i.selectedVariant)return L7({product:i,request:t});let c=n.query($7,{variables:{handle:a}});return Gt({product:i,variants:c})}function L7({product:e,request:t}){let r=new URL(t.url),a=e.variants.nodes[0];throw j(F1({pathname:r.pathname,handle:e.handle,selectedOptions:a.selectedOptions,searchParams:new URLSearchParams(r.search)}),{status:302})}function Md(){let{product:e,variants:t}=ie(),{selectedVariant:r}=e;return(0,U.jsxs)("div",{className:"product",children:[(0,U.jsx)(P7,{image:r==null?void 0:r.image}),(0,U.jsx)(Z7,{selectedVariant:r,product:e,variants:t})]})}function P7({image:e}){return e?(0,U.jsx)("div",{className:"product-image",children:(0,U.jsx)(Ve,{alt:e.altText||"Product Image",aspectRatio:"1/1",data:e,sizes:"(min-width: 45em) 50vw, 100vw"},e.id)}):(0,U.jsx)("div",{className:"product-image"})}function Z7({selectedVariant:e,product:t,variants:r}){let{title:a,descriptionHtml:n}=t;return(0,U.jsxs)("div",{className:"product-main",children:[(0,U.jsx)("h1",{children:a}),(0,U.jsx)(I7,{selectedVariant:e}),(0,U.jsx)("br",{}),(0,U.jsx)(Ad.Suspense,{fallback:(0,U.jsx)(Ed,{product:t,selectedVariant:e,variants:[]}),children:(0,U.jsx)(Ar,{errorElement:"There was a problem loading product variants",resolve:r,children:o=>{var i;return(0,U.jsx)(Ed,{product:t,selectedVariant:e,variants:((i=o.product)==null?void 0:i.variants.nodes)||[]})}})}),(0,U.jsx)("br",{}),(0,U.jsx)("br",{}),(0,U.jsx)("p",{children:(0,U.jsx)("strong",{children:"Description"})}),(0,U.jsx)("br",{}),(0,U.jsx)("div",{dangerouslySetInnerHTML:{__html:n}}),(0,U.jsx)("br",{})]})}function I7({selectedVariant:e}){return(0,U.jsx)("div",{className:"product-price",children:e!=null&&e.compareAtPrice?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)("p",{children:"Sale"}),(0,U.jsx)("br",{}),(0,U.jsxs)("div",{className:"product-price-on-sale",children:[e?(0,U.jsx)(Re,{data:e.price}):null,(0,U.jsx)("s",{children:(0,U.jsx)(Re,{data:e.compareAtPrice})})]})]}):(e==null?void 0:e.price)&&(0,U.jsx)(Re,{data:e==null?void 0:e.price})})}function Ed({product:e,selectedVariant:t,variants:r}){return(0,U.jsxs)("div",{className:"product-form",children:[(0,U.jsx)(D2,{handle:e.handle,options:e.options,variants:r,children:({option:a})=>(0,U.jsx)(H7,{option:a},a.name)}),(0,U.jsx)("br",{}),(0,U.jsx)(V7,{disabled:!t||!t.availableForSale,onClick:()=>{window.location.href=window.location.href+"#cart-aside"},lines:t?[{merchandiseId:t.id,quantity:1}]:[],children:t!=null&&t.availableForSale?"Add to cart":"Sold out"})]})}function H7({option:e}){return(0,U.jsxs)("div",{className:"product-options",children:[(0,U.jsx)("h5",{children:e.name}),(0,U.jsx)("div",{className:"product-options-grid",children:e.values.map(({value:t,isAvailable:r,isActive:a,to:n})=>(0,U.jsx)(Y,{className:"product-options-item",prefetch:"intent",preventScrollReset:!0,replace:!0,to:n,style:{border:a?"1px solid black":"1px solid transparent",opacity:r?1:.3},children:t},e.name+t))}),(0,U.jsx)("br",{})]},e.name)}function V7({analytics:e,children:t,disabled:r,lines:a,onClick:n}){return(0,U.jsx)(De,{route:"/cart",inputs:{lines:a},action:De.ACTIONS.LinesAdd,children:o=>(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)("input",{name:"analytics",type:"hidden",value:JSON.stringify(e)}),(0,U.jsx)("button",{type:"submit",onClick:n,disabled:r??o.state!=="idle",children:t})]})})}var kd=`#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
`,D7=`#graphql
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    options {
      name
      values
    }
    selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
      ...ProductVariant
    }
    variants(first: 1) {
      nodes {
        ...ProductVariant
      }
    }
    seo {
      description
      title
    }
  }
  ${kd}
`,N7=`#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${D7}
`,O7=`#graphql
  fragment ProductVariants on Product {
    variants(first: 250) {
      nodes {
        ...ProductVariant
      }
    }
  }
  ${kd}
`,$7=`#graphql
  ${O7}
  query ProductVariants(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...ProductVariants
    }
  }
`;var is={};Q(is,{action:()=>U7,default:()=>_d,loader:()=>F7,meta:()=>B7});var ae=A(H()),B7=()=>[{title:"Profile"}];async function F7({context:e}){return await e.session.get("customerAccessToken")?M({}):j("/account/login")}async function U7({request:e,context:t}){var i,s,l,c,u,d,h;let{session:r,storefront:a}=t;if(e.method!=="PUT")return M({error:"Method not allowed"},{status:405});let n=await e.formData(),o=await r.get("customerAccessToken");if(!o)return M({error:"Unauthorized"},{status:401});try{let p=j7(n),f={},v=["firstName","lastName","email","password","phone"];for(let[w,b]of n.entries())v.includes(w)&&(w==="acceptsMarketing"&&(f.acceptsMarketing=b==="on"),typeof b=="string"&&b.length&&(f[w]=b));p&&(f.password=p);let g=await a.mutate(q7,{variables:{customerAccessToken:o.accessToken,customer:f}});return(s=(i=g.customerUpdate)==null?void 0:i.customerUserErrors)!=null&&s.length?M({error:(l=g.customerUpdate)==null?void 0:l.customerUserErrors[0]},{status:400}):((u=(c=g.customerUpdate)==null?void 0:c.customerAccessToken)!=null&&u.accessToken&&r.set("customerAccessToken",(d=g.customerUpdate)==null?void 0:d.customerAccessToken),M({error:null,customer:(h=g.customerUpdate)==null?void 0:h.customer},{headers:{"Set-Cookie":await r.commit()}}))}catch(p){return M({error:p.message,customer:null},{status:400})}}function _d(){let e=Rr(),{state:t}=ht(),r=nt(),a=(r==null?void 0:r.customer)??(e==null?void 0:e.customer);return(0,ae.jsxs)("div",{className:"account-profile",children:[(0,ae.jsx)("h2",{children:"My profile"}),(0,ae.jsx)("br",{}),(0,ae.jsxs)(He,{method:"PUT",children:[(0,ae.jsx)("legend",{children:"Personal information"}),(0,ae.jsxs)("fieldset",{children:[(0,ae.jsx)("label",{htmlFor:"firstName",children:"First name"}),(0,ae.jsx)("input",{id:"firstName",name:"firstName",type:"text",autoComplete:"given-name",placeholder:"First name","aria-label":"First name",defaultValue:a.firstName??"",minLength:2}),(0,ae.jsx)("label",{htmlFor:"lastName",children:"Last name"}),(0,ae.jsx)("input",{id:"lastName",name:"lastName",type:"text",autoComplete:"family-name",placeholder:"Last name","aria-label":"Last name",defaultValue:a.lastName??"",minLength:2}),(0,ae.jsx)("label",{htmlFor:"phone",children:"Mobile"}),(0,ae.jsx)("input",{id:"phone",name:"phone",type:"tel",autoComplete:"tel",placeholder:"Mobile","aria-label":"Mobile",defaultValue:a.phone??""}),(0,ae.jsx)("label",{htmlFor:"email",children:"Email address"}),(0,ae.jsx)("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,placeholder:"Email address","aria-label":"Email address",defaultValue:a.email??""}),(0,ae.jsxs)("div",{className:"account-profile-marketing",children:[(0,ae.jsx)("input",{id:"acceptsMarketing",name:"acceptsMarketing",type:"checkbox",placeholder:"Accept marketing","aria-label":"Accept marketing",defaultChecked:a.acceptsMarketing}),(0,ae.jsx)("label",{htmlFor:"acceptsMarketing",children:"\xA0 Subscribed to marketing communications"})]})]}),(0,ae.jsx)("br",{}),(0,ae.jsx)("legend",{children:"Change password (optional)"}),(0,ae.jsxs)("fieldset",{children:[(0,ae.jsx)("label",{htmlFor:"currentPassword",children:"Current password"}),(0,ae.jsx)("input",{id:"currentPassword",name:"currentPassword",type:"password",autoComplete:"current-password",placeholder:"Current password","aria-label":"Current password",minLength:8}),(0,ae.jsx)("label",{htmlFor:"newPassword",children:"New password"}),(0,ae.jsx)("input",{id:"newPassword",name:"newPassword",type:"password",placeholder:"New password","aria-label":"New password",minLength:8}),(0,ae.jsx)("label",{htmlFor:"newPasswordConfirm",children:"New password (confirm)"}),(0,ae.jsx)("input",{id:"newPasswordConfirm",name:"newPasswordConfirm",type:"password",placeholder:"New password (confirm)","aria-label":"New password confirm",minLength:8}),(0,ae.jsx)("small",{children:"Passwords must be at least 8 characters."})]}),r!=null&&r.error?(0,ae.jsx)("p",{children:(0,ae.jsx)("mark",{children:(0,ae.jsx)("small",{children:r.error})})}):(0,ae.jsx)("br",{}),(0,ae.jsx)("button",{type:"submit",disabled:t!=="idle",children:t!=="idle"?"Updating":"Update"})]})]})}function j7(e){let t,r=e.get("currentPassword"),a=e.get("newPassword"),n=e.get("newPasswordConfirm"),o;if(a&&!r&&(o=new Error("Current password is required.")),a&&a!==n&&(o=new Error("New passwords must match.")),a&&r&&a===r&&(o=new Error("New password must be different than current password.")),o)throw o;return r&&a?t=a:t=r,String(t)}var q7=`#graphql
  # https://shopify.dev/docs/api/storefront/latest/mutations/customerUpdate
  mutation customerUpdate(
    $customerAccessToken: String!,
    $customer: CustomerUpdateInput!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    customerUpdate(customerAccessToken: $customerAccessToken, customer: $customer) {
      customer {
        acceptsMarketing
        email
        firstName
        id
        lastName
        phone
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;var ss={};Q(ss,{action:()=>G7,default:()=>Td,loader:()=>W7,meta:()=>z7});var z7=()=>[{title:"Logout"}];async function W7(){return j("/account/login")}async function G7({request:e,context:t}){let{session:r}=t;return r.unset("customerAccessToken"),e.method!=="POST"?M({error:"Method not allowed"},{status:405}):j("/",{headers:{"Set-Cookie":await r.commit()}})}function Td(){return null}var ls={};Q(ls,{default:()=>Ld,loader:()=>Y7});var ha=A(H());async function Y7({context:e}){let t=await e.storefront.query(J7),r=Object.values(t.shop||{});if(!r.length)throw new Response("No policies found",{status:404});return M({policies:r})}function Ld(){let{policies:e}=ie();return(0,ha.jsxs)("div",{className:"policies",children:[(0,ha.jsx)("h1",{children:"Policies"}),(0,ha.jsx)("div",{children:e.map(t=>t?(0,ha.jsx)("fieldset",{children:(0,ha.jsx)(Y,{to:`/policies/${t.handle}`,children:t.title})},t.id):null)})]})}var J7=`#graphql
  fragment PolicyItem on ShopPolicy {
    id
    title
    handle
  }
  query Policies ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    shop {
      privacyPolicy {
        ...PolicyItem
      }
      shippingPolicy {
        ...PolicyItem
      }
      termsOfService {
        ...PolicyItem
      }
      refundPolicy {
        ...PolicyItem
      }
      subscriptionPolicy {
        id
        title
        handle
      }
    }
  }
`;var cs={};Q(cs,{action:()=>Q7,default:()=>Pd,loader:()=>X7,meta:()=>K7});var Pe=A(H()),K7=()=>[{title:"Login"}];async function X7({context:e}){return await e.session.get("customerAccessToken")?j("/account"):M({})}async function Q7({request:e,context:t}){var n;let{session:r,storefront:a}=t;if(e.method!=="POST")return M({error:"Method not allowed"},{status:405});try{let o=await e.formData(),i=String(o.has("email")?o.get("email"):""),s=String(o.has("password")?o.get("password"):"");if(!Boolean(i&&s))throw new Error("Please provide both an email and a password.");let{customerAccessTokenCreate:c}=await a.mutate(e8,{variables:{input:{email:i,password:s}}});if(!((n=c==null?void 0:c.customerAccessToken)!=null&&n.accessToken))throw new Error(c==null?void 0:c.customerUserErrors[0].message);let{customerAccessToken:u}=c;return r.set("customerAccessToken",u),j("/account",{headers:{"Set-Cookie":await r.commit()}})}catch(o){return o instanceof Error?M({error:o.message},{status:400}):M({error:o},{status:400})}}function Pd(){let e=nt(),t=(e==null?void 0:e.error)||null;return(0,Pe.jsxs)("div",{className:"login",children:[(0,Pe.jsx)("h1",{children:"Sign in."}),(0,Pe.jsxs)(He,{method:"POST",children:[(0,Pe.jsxs)("fieldset",{children:[(0,Pe.jsx)("label",{htmlFor:"email",children:"Email address"}),(0,Pe.jsx)("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,placeholder:"Email address","aria-label":"Email address",autoFocus:!0}),(0,Pe.jsx)("label",{htmlFor:"password",children:"Password"}),(0,Pe.jsx)("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",placeholder:"Password","aria-label":"Password",minLength:8,required:!0})]}),t?(0,Pe.jsx)("p",{children:(0,Pe.jsx)("mark",{children:(0,Pe.jsx)("small",{children:t})})}):(0,Pe.jsx)("br",{}),(0,Pe.jsx)("button",{type:"submit",children:"Sign in"})]}),(0,Pe.jsx)("br",{}),(0,Pe.jsxs)("div",{children:[(0,Pe.jsx)("p",{children:(0,Pe.jsx)(Y,{to:"/account/recover",children:"Forgot password \u2192"})}),(0,Pe.jsx)("p",{children:(0,Pe.jsx)(Y,{to:"/account/register",children:"Register \u2192"})})]})]})}var e8=`#graphql
  mutation login($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
`;var us={};Q(us,{loader:()=>t8});async function t8({request:e,context:t,params:r}){let{cart:a}=t,{code:n}=r,o=new URL(e.url),i=new URLSearchParams(o.search),s=i.get("redirect")||i.get("return_to")||"/";i.delete("redirect"),i.delete("return_to");let l=`${s}?${i}`;if(!n)return j(l);let c=await a.updateDiscountCodes([n]),u=a.setCartId(c.cart.id);return j(l,{status:303,headers:u})}var ds={};Q(ds,{loader:()=>a8});var r8=250;async function a8({request:e,context:{storefront:t}}){let r=await t.query(i8,{variables:{urlLimits:r8,language:t.i18n.language}});if(!r)throw new Response("No data found",{status:404});let a=n8({data:r,baseUrl:new URL(e.url).origin});return new Response(a,{headers:{"Content-Type":"application/xml","Cache-Control":`max-age=${60*60*24}`}})}function bo(e){return e.replace(/[&<>'"]/g,t=>`&#${t.charCodeAt(0)};`)}function n8({data:e,baseUrl:t}){let r=lt(e.products).filter(i=>i.onlineStoreUrl).map(i=>{var c;let l={url:`${t}/products/${bo(i.handle)}`,lastMod:i.updatedAt,changeFreq:"daily"};return(c=i.featuredImage)!=null&&c.url&&(l.image={url:bo(i.featuredImage.url)},i.title&&(l.image.title=bo(i.title)),i.featuredImage.altText&&(l.image.caption=bo(i.featuredImage.altText))),l}),a=lt(e.collections).filter(i=>i.onlineStoreUrl).map(i=>({url:`${t}/collections/${i.handle}`,lastMod:i.updatedAt,changeFreq:"daily"})),n=lt(e.pages).filter(i=>i.onlineStoreUrl).map(i=>({url:`${t}/pages/${i.handle}`,lastMod:i.updatedAt,changeFreq:"weekly"}));return`
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    >
      ${[...r,...a,...n].map(o8).join("")}
    </urlset>`}function o8({url:e,lastMod:t,changeFreq:r,image:a}){let n=a?`<image:image>
        <image:loc>${a.url}</image:loc>
        <image:title>${a.title??""}</image:title>
        <image:caption>${a.caption??""}</image:caption>
      </image:image>`.trim():"";return`
    <url>
      <loc>${e}</loc>
      <lastmod>${t}</lastmod>
      <changefreq>${r}</changefreq>
      ${n}
    </url>
  `.trim()}var i8=`#graphql
  query Sitemap($urlLimits: Int, $language: LanguageCode)
  @inContext(language: $language) {
    products(
      first: $urlLimits
      query: "published_status:'online_store:visible'"
    ) {
      nodes {
        updatedAt
        handle
        onlineStoreUrl
        title
        featuredImage {
          url
          altText
        }
      }
    }
    collections(
      first: $urlLimits
      query: "published_status:'online_store:visible'"
    ) {
      nodes {
        updatedAt
        handle
        onlineStoreUrl
      }
    }
    pages(first: $urlLimits, query: "published_status:'published'") {
      nodes {
        updatedAt
        handle
        onlineStoreUrl
      }
    }
  }
`;var hs={};Q(hs,{default:()=>Zd,loader:()=>l8,meta:()=>s8});var $a=A(H()),s8=({data:e})=>[{title:`Hydrogen | ${e.page.title}`}];async function l8({params:e,context:t}){if(!e.handle)throw new Error("Missing page handle");let{page:r}=await t.storefront.query(c8,{variables:{handle:e.handle}});if(!r)throw new Response("Not Found",{status:404});return M({page:r})}function Zd(){let{page:e}=ie();return(0,$a.jsxs)("div",{className:"page",children:[(0,$a.jsx)("header",{children:(0,$a.jsx)("h1",{children:e.title})}),(0,$a.jsx)("main",{dangerouslySetInnerHTML:{__html:e.body}})]})}var c8=`#graphql
  query Page(
    $language: LanguageCode,
    $country: CountryCode,
    $handle: String!
  )
  @inContext(language: $language, country: $country) {
    page(handle: $handle) {
      id
      title
      body
      seo {
        description
        title
      }
    }
  }
`;var fs={};Q(fs,{ErrorBoundary:()=>d8,loader:()=>u8});var Kt=A(H());async function u8({request:e,context:t}){let r=new URL(e.url),{shop:a}=await t.storefront.query(p8),n=po(a.id).id,o=h8({url:r.origin,shopId:n});return new Response(o,{status:200,headers:{"Content-Type":"text/plain","Cache-Control":`max-age=${60*60*24}`}})}function d8(){let e=vt();if(xe(e))return(0,Kt.jsxs)("div",{children:[(0,Kt.jsx)("h1",{children:"Oops"}),(0,Kt.jsxs)("p",{children:["Status: ",e.status]}),(0,Kt.jsx)("p",{children:e.data.message})]});let t="Unknown error";return e instanceof Error&&(t=e.message),(0,Kt.jsxs)("div",{children:[(0,Kt.jsx)("h1",{children:"Uh oh ..."}),(0,Kt.jsx)("p",{children:"Something went wrong."}),(0,Kt.jsx)("pre",{children:t})]})}function h8({url:e,shopId:t}){let r=e?`${e}/sitemap.xml`:void 0;return`
User-agent: *
${ps({sitemapUrl:r,shopId:t})}

# Google adsbot ignores robots.txt unless specifically named!
User-agent: adsbot-google
Disallow: /checkouts/
Disallow: /checkout
Disallow: /carts
Disallow: /orders
${t?`Disallow: /${t}/checkouts`:""}
${t?`Disallow: /${t}/orders`:""}
Disallow: /*?*oseid=*
Disallow: /*preview_theme_id*
Disallow: /*preview_script_id*

User-agent: Nutch
Disallow: /

User-agent: AhrefsBot
Crawl-delay: 10
${ps({sitemapUrl:r,shopId:t})}

User-agent: AhrefsSiteAudit
Crawl-delay: 10
${ps({sitemapUrl:r,shopId:t})}

User-agent: MJ12bot
Crawl-Delay: 10

User-agent: Pinterest
Crawl-delay: 1
`.trim()}function ps({shopId:e,sitemapUrl:t}){return`Disallow: /admin
Disallow: /cart
Disallow: /orders
Disallow: /checkouts/
Disallow: /checkout
${e?`Disallow: /${e}/checkouts`:""}
${e?`Disallow: /${e}/orders`:""}
Disallow: /carts
Disallow: /account
Disallow: /collections/*sort_by*
Disallow: /*/collections/*sort_by*
Disallow: /collections/*+*
Disallow: /collections/*%2B*
Disallow: /collections/*%2b*
Disallow: /*/collections/*+*
Disallow: /*/collections/*%2B*
Disallow: /*/collections/*%2b*
Disallow: */collections/*filter*&*filter*
Disallow: /blogs/*+*
Disallow: /blogs/*%2B*
Disallow: /blogs/*%2b*
Disallow: /*/blogs/*+*
Disallow: /*/blogs/*%2B*
Disallow: /*/blogs/*%2b*
Disallow: /*?*oseid=*
Disallow: /*preview_theme_id*
Disallow: /*preview_script_id*
Disallow: /policies/
Disallow: /*/*?*ls=*&ls=*
Disallow: /*/*?*ls%3D*%3Fls%3D*
Disallow: /*/*?*ls%3d*%3fls%3d*
Disallow: /search
Allow: /search/
Disallow: /search/?*
Disallow: /apple-app-site-association
Disallow: /.well-known/shopify/monorail
${t?`Sitemap: ${t}`:""}`}var p8=`#graphql
  query StoreRobots($country: CountryCode, $language: LanguageCode)
   @inContext(country: $country, language: $language) {
    shop {
      id
    }
  }
`;var gs={};Q(gs,{default:()=>Id,loader:()=>g8,meta:()=>f8});var ct=A(H()),f8=()=>[{title:"Hydrogen | Blogs"}],g8=async({request:e,context:{storefront:t}})=>{let r=Mt(e,{pageBy:10}),{blogs:a}=await t.query(m8,{variables:{...r}});return M({blogs:a})};function Id(){let{blogs:e}=ie();return(0,ct.jsxs)("div",{className:"blogs",children:[(0,ct.jsx)("h1",{children:"Blogs"}),(0,ct.jsx)("div",{className:"blogs-grid",children:(0,ct.jsx)(At,{connection:e,children:({nodes:t,isLoading:r,PreviousLink:a,NextLink:n})=>(0,ct.jsxs)(ct.Fragment,{children:[(0,ct.jsx)(a,{children:r?"Loading...":(0,ct.jsx)("span",{children:"\u2191 Load previous"})}),t.map(o=>(0,ct.jsx)(Y,{className:"blog",prefetch:"intent",to:`/blogs/${o.handle}`,children:(0,ct.jsx)("h2",{children:o.title})},o.handle)),(0,ct.jsx)(n,{children:r?"Loading...":(0,ct.jsx)("span",{children:"Load more \u2193"})})]})})})]})}var m8=`#graphql
  query Blogs(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    blogs(
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      nodes {
        title
        handle
        seo {
          title
          description
        }
      }
    }
  }
`;var ms={};Q(ms,{default:()=>Hd,loader:()=>v8});async function v8({request:e,context:t,params:r}){var p;let{cart:a}=t,{lines:n}=r;if(!n)return j("/cart");let o=n.split(",").map(f=>{let v=f.split(":"),g=v[0],w=parseInt(v[1],10);return{merchandiseId:`gid://shopify/ProductVariant/${g}`,quantity:w}}),i=new URL(e.url),l=new URLSearchParams(i.search).get("discount"),c=l?[l]:[],u=await a.create({lines:o,discountCodes:c}),d=u.cart;if((p=u.errors)!=null&&p.length||!d)throw new Response("Link may be expired. Try checking the URL.",{status:410});let h=a.setCartId(d.id);if(d.checkoutUrl)return j(d.checkoutUrl,{headers:h});throw new Error("No checkout URL found")}function Hd(){return null}var vs={};Q(vs,{loader:()=>y8});async function y8({context:e}){return await e.session.get("customerAccessToken")?j("/account"):j("/account/login")}var ys={};Q(ys,{CUSTOMER_FRAGMENT:()=>Dd,default:()=>Vd,loader:()=>x8,shouldRevalidate:()=>w8});var qe=A(H());function w8(){return!0}async function x8({request:e,context:t}){let{session:r,storefront:a}=t,{pathname:n}=new URL(e.url),o=await r.get("customerAccessToken"),i=!!(o!=null&&o.accessToken),s=n==="/account"||n==="/account/",l=/^\/account\/(orders|orders\/.*|profile|addresses|addresses\/.*)$/.test(n);if(i){if(s)return j("/account/orders")}else return l||s?(r.unset("customerAccessToken"),j("/account/login",{headers:{"Set-Cookie":await r.commit()}})):M({isLoggedIn:!1,isAccountHome:s,isPrivateRoute:l,customer:null});try{let{customer:c}=await a.query(R8,{variables:{customerAccessToken:o.accessToken,country:a.i18n.country,language:a.i18n.language},cache:a.CacheNone()});if(!c)throw new Error("Customer not found");return M({isLoggedIn:i,isPrivateRoute:l,isAccountHome:s,customer:c},{headers:{"Cache-Control":"no-cache, no-store, must-revalidate"}})}catch(c){return console.error("There was a problem loading account",c),r.unset("customerAccessToken"),j("/account/login",{headers:{"Set-Cookie":await r.commit()}})}}function Vd(){let{customer:e,isPrivateRoute:t,isAccountHome:r}=ie();return!t&&!r?(0,qe.jsx)(Ht,{context:{customer:e}}):(0,qe.jsxs)(C8,{customer:e,children:[(0,qe.jsx)("br",{}),(0,qe.jsx)("br",{}),(0,qe.jsx)(Ht,{context:{customer:e}})]})}function C8({customer:e,children:t}){let r=e?e.firstName?`Welcome, ${e.firstName}`:"Welcome to your account.":"Account Details";return(0,qe.jsxs)("div",{className:"account",children:[(0,qe.jsx)("h1",{children:r}),(0,qe.jsx)("br",{}),(0,qe.jsx)(S8,{}),t]})}function S8(){function e({isActive:t,isPending:r}){return{fontWeight:t?"bold":void 0,color:r?"grey":"black"}}return(0,qe.jsxs)("nav",{role:"navigation",children:[(0,qe.jsx)(Ma,{to:"/account/orders",style:e,children:"Orders \xA0"}),"\xA0|\xA0",(0,qe.jsx)(Ma,{to:"/account/profile",style:e,children:"\xA0 Profile \xA0"}),"\xA0|\xA0",(0,qe.jsx)(Ma,{to:"/account/addresses",style:e,children:"\xA0 Addresses \xA0"}),"\xA0|\xA0",(0,qe.jsx)(b8,{})]})}function b8(){return(0,qe.jsxs)(He,{className:"account-logout",method:"POST",action:"/account/logout",children:["\xA0",(0,qe.jsx)("button",{type:"submit",children:"Sign out"})]})}var Dd=`#graphql
  fragment Customer on Customer {
    acceptsMarketing
    addresses(first: 6) {
      nodes {
        ...Address
      }
    }
    defaultAddress {
      ...Address
    }
    email
    firstName
    lastName
    numberOfOrders
    phone
  }
  fragment Address on MailingAddress {
    id
    formatted
    firstName
    lastName
    company
    address1
    address2
    country
    province
    city
    zip
    phone
  }
`,R8=`#graphql
  query Customer(
    $customerAccessToken: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      ...Customer
    }
  }
  ${Dd}
`;var Ns={};Q(Ns,{default:()=>u4,links:()=>C9,loader:()=>b9,meta:()=>x9});var Ua=A(ce());var c4=A(n4());var o4="/build/_assets/styles-EGASMYHT.css";var Fa=A(ce());var Is=A(ce()),Hs={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Vs=Is.default.createContext&&Is.default.createContext(Hs);var Dr=function(){return Dr=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Dr.apply(this,arguments)},y9=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};function i4(e){return e&&e.map(function(t,r){return Fa.default.createElement(t.tag,Dr({key:r},t.attr),i4(t.child))})}function s4(e){return function(t){return Fa.default.createElement(w9,Dr({attr:Dr({},e.attr)},t),i4(e.child))}}function w9(e){var t=function(r){var a=e.attr,n=e.size,o=e.title,i=y9(e,["attr","size","title"]),s=n||r.size||"1em",l;return r.className&&(l=r.className),e.className&&(l=(l?l+" ":"")+e.className),Fa.default.createElement("svg",Dr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,i,{className:l,style:Dr(Dr({color:e.color||r.color},r.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&Fa.default.createElement("title",null,o),e.children)};return Vs!==void 0?Fa.default.createElement(Vs.Consumer,null,function(r){return t(r)}):t(Hs)}function l4(e){return s4({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Circle_Check"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M15.81,10.4a.5.5,0,0,0-.71-.71l-3.56,3.56L9.81,11.52a.5.5,0,0,0-.71.71l2.08,2.08a.513.513,0,0,0,.71,0Z"}},{tag:"path",attr:{d:"M12,21.934A9.934,9.934,0,1,1,21.933,12,9.945,9.945,0,0,1,12,21.934ZM12,3.067A8.934,8.934,0,1,0,20.933,12,8.944,8.944,0,0,0,12,3.067Z"}}]}]}]})(e)}var $=A(H()),x9=()=>[{title:"Hydrogen | Home"}],C9=()=>[{rel:"stylesheet",href:o4}],S9={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5,partialVisibilityGutter:40},desktop:{breakpoint:{max:3e3,min:1024},items:3,partialVisibilityGutter:40},tablet:{breakpoint:{max:1024,min:464},items:2,partialVisibilityGutter:40},mobile:{breakpoint:{max:464,min:0},items:1,partialVisibilityGutter:40}};async function b9({context:e}){let{storefront:t}=e,{collections:r}=await t.query(E9),a=r.nodes[0],n=t.query(A9),o=t.query(M9),i=t.query(_9),s=t.query(k9);return Gt({featuredCollection:a,recommendedProducts:n,winterProducts:o,autumnProducts:i,summerProducts:s})}function u4(){let e=ie(),[t,r]=(0,Ua.useState)([null,null,null]),[a,n]=(0,Ua.useState)(1);return a===1?(0,$.jsxs)("div",{className:"home",children:[(0,$.jsx)("h1",{children:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043E\u0435 \u043A\u043E\u043C\u0431\u043E"}),(0,$.jsx)(Ds,{products:e.winterProducts,onClicked:o=>{t[0]=o,r(t)},title:"\u0417\u0438\u043C\u043D\u0435\u0435 \u043A\u043E\u043C\u0431\u043E"}),(0,$.jsx)(Ds,{products:e.autumnProducts,onClicked:o=>{t[1]=o,r(t)},title:"\u041E\u0441\u0435\u043D\u043D\u0435\u0435 \u043A\u043E\u043C\u0431\u043E"}),(0,$.jsx)(Ds,{products:e.summerProducts,onClicked:o=>{t[2]=o,r(t)},title:"\u041B\u0435\u0442\u043D\u0435\u0435 \u043A\u043E\u043C\u0431\u043E"}),(0,$.jsx)("div",{className:"flex justify-center w-full",children:(0,$.jsx)("button",{className:"border-2 border-gray-400 px-3 py-2",onClick:()=>n(2),children:"\u0414\u0430\u043B\u0435\u0435"})})]}):(0,$.jsx)(R9,{selectedItems:t,setStep:n})}function R9({selectedItems:e,setStep:t}){return(0,$.jsx)("div",{className:"flex justify-center",children:(0,$.jsxs)("div",{children:[(0,$.jsxs)("div",{className:"flex items-center",children:[(0,$.jsx)("h2",{className:"m-0",children:"\u0412\u044B \u0432\u044B\u0431\u0440\u0430\u043B\u0438: "}),(0,$.jsx)("button",{className:"border-2 border-gray-400 px-3 py-2 ml-5",onClick:()=>t(1),children:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0440\u0443\u0433\u043E\u0435"})]}),(0,$.jsx)("div",{className:"flex mt-5",children:e.map(r=>(0,$.jsxs)("div",{children:[(0,$.jsx)(Ve,{data:r.images.nodes[0],aspectRatio:"1/1",sizes:"(min-width: 45em) 10vw, 50vw"}),(0,$.jsx)("h3",{children:r.title})]}))}),(0,$.jsx)("div",{className:"flex justify-center mt-10",children:(0,$.jsxs)("form",{children:[(0,$.jsxs)("div",{children:[(0,$.jsx)("label",{htmlFor:"number",children:"\u0424\u0418\u041E"}),(0,$.jsx)("input",{name:"number",className:"w-full"})]}),(0,$.jsxs)("div",{children:[(0,$.jsx)("label",{htmlFor:"number",children:"\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"}),(0,$.jsx)("input",{name:"number",className:"w-full"})]}),(0,$.jsx)("div",{className:"flex justify-center",children:(0,$.jsx)("button",{className:"border-2 border-gray-400 px-3 py-2 ml-5",onClick:()=>t(1),children:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"})})]})})]})})}function Ds({products:e,onClicked:t,title:r}){let[a,n]=(0,Ua.useState)(null);return(0,$.jsxs)("div",{className:"recommended-products",children:[(0,$.jsx)("h2",{children:r}),(0,$.jsx)(Ua.Suspense,{fallback:(0,$.jsx)("div",{children:"Loading..."}),children:(0,$.jsx)(Ar,{resolve:e,children:({collection:o})=>(0,$.jsxs)("div",{children:[console.log(o),(0,$.jsx)(c4.default,{partialVisible:!0,responsive:S9,children:o.products.edges.map(i=>{let s=i.node;return(0,$.jsxs)("a",{className:"recommended-product pr-25 relative",onClick:()=>{n(s.id),t(s)},children:[a===s.id&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)("div",{className:"absolute w-full h-full top-0 right-0 ",style:{background:"rgba(0,0,0,0.2)"}}),(0,$.jsx)("div",{className:"absolute top-0 right-0",style:{zIndex:1e5},children:(0,$.jsx)(l4,{size:"3em",color:"green"})})]}),(0,$.jsx)(Ve,{data:s.images.nodes[0],aspectRatio:"1/1",sizes:"(min-width: 45em) 10vw, 50vw"}),(0,$.jsx)("h4",{children:s.title}),(0,$.jsx)("small",{children:(0,$.jsx)(Re,{data:s.priceRange.minVariantPrice})}),(0,$.jsx)("h4",{children:"\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u044B"}),(0,$.jsx)("div",{className:"flex",children:s.variants.nodes.map(l=>(console.log("variant",l.selectedOptions[0]),(0,$.jsx)("p",{className:"mr-2",children:l.selectedOptions[0].value})))})]},s.id)})})]})})}),(0,$.jsx)("br",{})]})}var E9=`#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`,A9=`#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 10, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`,M9=`#graphql
  query WinterProducts{
    collection(id:  "gid://shopify/Collection/464268919094") {
    handle
    products(first: 10) {
      edges {
        node {
          handle
          id
          title
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          metafield(key: "category", namespace: "custom") {
            namespace
          }
          variants(first: 10) {
            nodes {
              id
              
              selectedOptions {
                name
                value
              }
            }
          }
          images(first: 1) {
            nodes {
              id
              url
              altText
              width
              height
            }
          }
        }
      }
    }
  }
  }
  `,k9=`#graphql
  query WinterProducts{
    collection(id:  "gid://shopify/Collection/464268984630") {
    handle
    products(first: 10) {
      edges {
        node {
          handle
          id
          title
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          metafield(key: "category", namespace: "custom") {
            namespace
          }
          variants(first: 10) {
            nodes {
              id
              
              selectedOptions {
                name
                value
              }
            }
          }
          images(first: 1) {
            nodes {
              id
              url
              altText
              width
              height
            }
          }
        }
      }
    }
  }
  }
  `,_9=`#graphql
  query WinterProducts{
    collection(id:  "gid://shopify/Collection/464269017398") {
    handle
    products(first: 10) {
      edges {
        node {
          handle
          id
          title
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          metafield(key: "category", namespace: "custom") {
            namespace
          }
          variants(first: 10) {
            nodes {
              id
              
              selectedOptions {
                name
                value
              }
            }
          }
          images(first: 1) {
            nodes {
              id
              url
              altText
              width
              height
            }
          }
        }
      }
    }
  }
  }
  `;var Os={};Q(Os,{default:()=>d4,loader:()=>L9,meta:()=>T9});var ga=A(H()),T9=()=>[{title:"Hydrogen | Search"}];async function L9({request:e,context:t}){let r=new URL(e.url),a=new URLSearchParams(r.search),n=Mt(e,{pageBy:8}),o=String(a.get("q")||"");if(!o)return{searchResults:{results:null,totalResults:0},searchTerm:o};let i=await t.storefront.query(P9,{variables:{query:o,...n}});if(!i)throw new Error("No search data returned from Shopify API");let s=Object.values(i).reduce((c,u)=>c+u.nodes.length,0);return Gt({searchTerm:o,searchResults:{results:i,totalResults:s}})}function d4(){let{searchTerm:e,searchResults:t}=ie();return(0,ga.jsxs)("div",{className:"search",children:[(0,ga.jsx)("h1",{children:"Search"}),(0,ga.jsx)(rd,{searchTerm:e}),!e||!t.totalResults?(0,ga.jsx)(nd,{}):(0,ga.jsx)(ad,{results:t.results})]})}var P9=`#graphql
  fragment SearchProduct on Product {
    __typename
    handle
    id
    publishedAt
    title
    trackingParameters
    vendor
    variants(first: 1) {
      nodes {
        id
        image {
          url
          altText
          width
          height
        }
        price {
          amount
          currencyCode
        }
        compareAtPrice {
          amount
          currencyCode
        }
        selectedOptions {
          name
          value
        }
        product {
          handle
          title
        }
      }
    }
  }
  fragment SearchPage on Page {
     __typename
     handle
    id
    title
    trackingParameters
  }
  fragment SearchArticle on Article {
    __typename
    handle
    id
    title
    trackingParameters
  }
  query search(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $query: String!
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    products: search(
      query: $query,
      unavailableProducts: HIDE,
      types: [PRODUCT],
      first: $first,
      sortKey: RELEVANCE,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...on Product {
          ...SearchProduct
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
    pages: search(
      query: $query,
      types: [PAGE],
      first: 10
    ) {
      nodes {
        ...on Page {
          ...SearchPage
        }
      }
    }
    articles: search(
      query: $query,
      types: [ARTICLE],
      first: 10
    ) {
      nodes {
        ...on Article {
          ...SearchArticle
        }
      }
    }
  }
`;var $s={};Q($s,{action:()=>I9,default:()=>p4,meta:()=>Z9});var h4=A(ce());var gr=A(H()),Z9=()=>[{title:"Hydrogen | Cart"}];async function I9({request:e,context:t}){let{session:r,cart:a}=t,[n,o]=await Promise.all([e.formData(),r.get("customerAccessToken")]),{action:i,inputs:s}=De.getFormInput(n);if(!i)throw new Error("No action provided");let l=200,c;switch(i){case De.ACTIONS.LinesAdd:c=await a.addLines(s.lines);break;case De.ACTIONS.LinesUpdate:c=await a.updateLines(s.lines);break;case De.ACTIONS.LinesRemove:c=await a.removeLines(s.lineIds);break;case De.ACTIONS.DiscountCodesUpdate:{let v=s.discountCode,g=v?[v]:[];g.push(...s.discountCodes),c=await a.updateDiscountCodes(g);break}case De.ACTIONS.BuyerIdentityUpdate:{c=await a.updateBuyerIdentity({...s.buyerIdentity,customerAccessToken:o==null?void 0:o.accessToken});break}default:throw new Error(`${i} cart action is not defined`)}let u=c.cart.id,d=a.setCartId(c.cart.id),{cart:h,errors:p}=c,f=n.get("redirectTo")??null;return typeof f=="string"&&(l=303,d.set("Location",f)),M({cart:h,errors:p,analytics:{cartId:u}},{status:l,headers:d})}function p4(){var r;let[e]=Mr(),t=(r=e.data)==null?void 0:r.cart;return(0,gr.jsxs)("div",{className:"cart",children:[(0,gr.jsx)("h1",{children:"Cart"}),(0,gr.jsx)(h4.Suspense,{fallback:(0,gr.jsx)("p",{children:"Loading cart ..."}),children:(0,gr.jsx)(Ar,{errorElement:(0,gr.jsx)("div",{children:"An error occurred"}),resolve:t,children:a=>(0,gr.jsx)(ed,{layout:"page",cart:a})})})]})}var Bs={};Q(Bs,{default:()=>f4,loader:()=>H9});async function H9({request:e}){throw new Response(`${new URL(e.url).pathname} not found`,{status:404})}function f4(){return null}var g4={entry:{module:"/build/entry.client-LVAX3VRW.js",imports:["/build/_shared/chunk-4WBX2LQN.js","/build/_shared/chunk-MEPKJ2VW.js"]},routes:{root:{id:"root",parentId:void 0,path:"",index:void 0,caseSensitive:void 0,module:"/build/root-JWRHI2PY.js",imports:["/build/_shared/chunk-7TTS2GOO.js","/build/_shared/chunk-UP5E2WR4.js","/build/_shared/chunk-ID6CDDMI.js","/build/_shared/chunk-4XMV4Z2X.js"],hasAction:!1,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!0},"routes/$":{id:"routes/$",parentId:"root",path:"*",index:void 0,caseSensitive:void 0,module:"/build/routes/$-Z3TMLNMC.js",imports:void 0,hasAction:!1,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/[robots.txt]":{id:"routes/[robots.txt]",parentId:"root",path:"robots.txt",index:void 0,caseSensitive:void 0,module:"/build/routes/[robots.txt]-AYZZBUT4.js",imports:void 0,hasAction:!1,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!0},"routes/[sitemap.xml]":{id:"routes/[sitemap.xml]",parentId:"root",path:"sitemap.xml",index:void 0,caseSensitive:void 0,module:"/build/routes/[sitemap.xml]-YNAZ76PN.js",imports:void 0,hasAction:!1,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/_index":{id:"routes/_index",parentId:"root",path:void 0,index:!0,caseSensitive:void 0,module:"/build/routes/_index-CCCAAS4E.js",imports:void 0,hasAction:!1,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/account":{id:"routes/account",parentId:"root",path:"account",index:void 0,caseSensitive:void 0,module:"/build/routes/account-NJ7APERE.js",imports:void 0,hasAction:!1,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/account.$":{id:"routes/account.$",parentId:"routes/account",path:"*",index:void 0,caseSensitive:void 0,module:"/build/routes/account.$-J4FDBBHB.js",imports:void 0,hasAction:!1,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/account.addresses":{id:"routes/account.addresses",parentId:"routes/account",path:"addresses",index:void 0,caseSensitive:void 0,module:"/build/routes/account.addresses-KBU6RB5L.js",imports:void 0,hasAction:!0,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/account.orders.$id":{id:"routes/account.orders.$id",parentId:"routes/account",path:"orders/:id",index:void 0,caseSensitive:void 0,module:"/build/routes/account.orders.$id-MSJIFMWE.js",imports:["/build/_shared/chunk-4XMV4Z2X.js"],hasAction:!1,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/account.orders._index":{id:"routes/account.orders._index",parentId:"routes/account",path:"orders",index:!0,caseSensitive:void 0,module:"/build/routes/account.orders._index-WCG7HFVG.js",imports:["/build/_shared/chunk-4XMV4Z2X.js"],hasAction:!1,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/account.profile":{id:"routes/account.profile",parentId:"routes/account",path:"profile",index:void 0,caseSensitive:void 0,module:"/build/routes/account.profile-LK3AWNYP.js",imports:void 0,hasAction:!0,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/account_.activate.$id.$activationToken":{id:"routes/account_.activate.$id.$activationToken",parentId:"root",path:"account/activate/:id/:activationToken",index:void 0,caseSensitive:void 0,module:"/build/routes/account_.activate.$id.$activationToken-NG675DHT.js",imports:void 0,hasAction:!0,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/account_.login":{id:"routes/account_.login",parentId:"root",path:"account/login",index:void 0,caseSensitive:void 0,module:"/build/routes/account_.login-76NRKK5Y.js",imports:void 0,hasAction:!0,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/account_.logout":{id:"routes/account_.logout",parentId:"root",path:"account/logout",index:void 0,caseSensitive:void 0,module:"/build/routes/account_.logout-CTSNVFCK.js",imports:void 0,hasAction:!0,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/account_.recover":{id:"routes/account_.recover",parentId:"root",path:"account/recover",index:void 0,caseSensitive:void 0,module:"/build/routes/account_.recover-W25PQUAN.js",imports:void 0,hasAction:!0,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/account_.register":{id:"routes/account_.register",parentId:"root",path:"account/register",index:void 0,caseSensitive:void 0,module:"/build/routes/account_.register-OFJPR6HY.js",imports:void 0,hasAction:!0,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/account_.reset.$id.$resetToken":{id:"routes/account_.reset.$id.$resetToken",parentId:"root",path:"account/reset/:id/:resetToken",index:void 0,caseSensitive:void 0,module:"/build/routes/account_.reset.$id.$resetToken-WV6DIZZU.js",imports:void 0,hasAction:!0,hasLoader:!1,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/api.predictive-search":{id:"routes/api.predictive-search",parentId:"root",path:"api/predictive-search",index:void 0,caseSensitive:void 0,module:"/build/routes/api.predictive-search-TZJEBK5T.js",imports:void 0,hasAction:!0,hasLoader:!1,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/blogs.$blogHandle.$articleHandle":{id:"routes/blogs.$blogHandle.$articleHandle",parentId:"root",path:"blogs/:blogHandle/:articleHandle",index:void 0,caseSensitive:void 0,module:"/build/routes/blogs.$blogHandle.$articleHandle-EN4FWXIJ.js",imports:void 0,hasAction:!1,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/blogs.$blogHandle._index":{id:"routes/blogs.$blogHandle._index",parentId:"root",path:"blogs/:blogHandle",index:!0,caseSensitive:void 0,module:"/build/routes/blogs.$blogHandle._index-4CKWWRRQ.js",imports:void 0,hasAction:!1,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/blogs._index":{id:"routes/blogs._index",parentId:"root",path:"blogs",index:!0,caseSensitive:void 0,module:"/build/routes/blogs._index-A6QNOZS7.js",imports:void 0,hasAction:!1,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/cart":{id:"routes/cart",parentId:"root",path:"cart",index:void 0,caseSensitive:void 0,module:"/build/routes/cart-YTWITYD6.js",imports:void 0,hasAction:!0,hasLoader:!1,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/cart.$lines":{id:"routes/cart.$lines",parentId:"routes/cart",path:":lines",index:void 0,caseSensitive:void 0,module:"/build/routes/cart.$lines-4SNCL2FB.js",imports:void 0,hasAction:!1,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/collections.$handle":{id:"routes/collections.$handle",parentId:"root",path:"collections/:handle",index:void 0,caseSensitive:void 0,module:"/build/routes/collections.$handle-FU4KBQTQ.js",imports:void 0,hasAction:!1,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/collections._index":{id:"routes/collections._index",parentId:"root",path:"collections",index:!0,caseSensitive:void 0,module:"/build/routes/collections._index-ZU5JQRVH.js",imports:void 0,hasAction:!1,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/discount.$code":{id:"routes/discount.$code",parentId:"root",path:"discount/:code",index:void 0,caseSensitive:void 0,module:"/build/routes/discount.$code-URIEGO3X.js",imports:void 0,hasAction:!1,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/pages.$handle":{id:"routes/pages.$handle",parentId:"root",path:"pages/:handle",index:void 0,caseSensitive:void 0,module:"/build/routes/pages.$handle-S2IYRA4K.js",imports:void 0,hasAction:!1,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/policies.$handle":{id:"routes/policies.$handle",parentId:"root",path:"policies/:handle",index:void 0,caseSensitive:void 0,module:"/build/routes/policies.$handle-UPCXIUBN.js",imports:void 0,hasAction:!1,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/policies._index":{id:"routes/policies._index",parentId:"root",path:"policies",index:!0,caseSensitive:void 0,module:"/build/routes/policies._index-7QEL2Q7Z.js",imports:void 0,hasAction:!1,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/products.$handle":{id:"routes/products.$handle",parentId:"root",path:"products/:handle",index:void 0,caseSensitive:void 0,module:"/build/routes/products.$handle-PCHMUCVE.js",imports:void 0,hasAction:!1,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!1},"routes/search":{id:"routes/search",parentId:"root",path:"search",index:void 0,caseSensitive:void 0,module:"/build/routes/search-UU3VVWZT.js",imports:void 0,hasAction:!1,hasLoader:!0,hasCatchBoundary:!1,hasErrorBoundary:!1}},version:"df6bdbde",hmr:void 0,url:"/build/manifest-DF6BDBDE.js"};var V9="dist/client/build",D9={v2_dev:!0,unstable_postcss:!1,unstable_tailwind:!1,v2_errorBoundary:!0,v2_headers:!0,v2_meta:!0,v2_normalizeFormMethod:!0,v2_routeConvention:!0},N9="/build/",O9={module:$1},$9={root:{id:"root",parentId:void 0,path:"",index:void 0,caseSensitive:void 0,module:j1},"routes/account_.activate.$id.$activationToken":{id:"routes/account_.activate.$id.$activationToken",parentId:"root",path:"account/activate/:id/:activationToken",index:void 0,caseSensitive:void 0,module:q1},"routes/blogs.$blogHandle.$articleHandle":{id:"routes/blogs.$blogHandle.$articleHandle",parentId:"root",path:"blogs/:blogHandle/:articleHandle",index:void 0,caseSensitive:void 0,module:z1},"routes/account_.reset.$id.$resetToken":{id:"routes/account_.reset.$id.$resetToken",parentId:"root",path:"account/reset/:id/:resetToken",index:void 0,caseSensitive:void 0,module:W1},"routes/blogs.$blogHandle._index":{id:"routes/blogs.$blogHandle._index",parentId:"root",path:"blogs/:blogHandle",index:!0,caseSensitive:void 0,module:G1},"routes/account.orders._index":{id:"routes/account.orders._index",parentId:"routes/account",path:"orders",index:!0,caseSensitive:void 0,module:Y1},"routes/api.predictive-search":{id:"routes/api.predictive-search",parentId:"root",path:"api/predictive-search",index:void 0,caseSensitive:void 0,module:J1},"routes/collections.$handle":{id:"routes/collections.$handle",parentId:"root",path:"collections/:handle",index:void 0,caseSensitive:void 0,module:K1},"routes/account.orders.$id":{id:"routes/account.orders.$id",parentId:"routes/account",path:"orders/:id",index:void 0,caseSensitive:void 0,module:X1},"routes/collections._index":{id:"routes/collections._index",parentId:"root",path:"collections",index:!0,caseSensitive:void 0,module:Q1},"routes/account.addresses":{id:"routes/account.addresses",parentId:"routes/account",path:"addresses",index:void 0,caseSensitive:void 0,module:ts},"routes/account_.register":{id:"routes/account_.register",parentId:"root",path:"account/register",index:void 0,caseSensitive:void 0,module:rs},"routes/account_.recover":{id:"routes/account_.recover",parentId:"root",path:"account/recover",index:void 0,caseSensitive:void 0,module:as},"routes/policies.$handle":{id:"routes/policies.$handle",parentId:"root",path:"policies/:handle",index:void 0,caseSensitive:void 0,module:ns},"routes/products.$handle":{id:"routes/products.$handle",parentId:"root",path:"products/:handle",index:void 0,caseSensitive:void 0,module:os},"routes/account.profile":{id:"routes/account.profile",parentId:"routes/account",path:"profile",index:void 0,caseSensitive:void 0,module:is},"routes/account_.logout":{id:"routes/account_.logout",parentId:"root",path:"account/logout",index:void 0,caseSensitive:void 0,module:ss},"routes/policies._index":{id:"routes/policies._index",parentId:"root",path:"policies",index:!0,caseSensitive:void 0,module:ls},"routes/account_.login":{id:"routes/account_.login",parentId:"root",path:"account/login",index:void 0,caseSensitive:void 0,module:cs},"routes/discount.$code":{id:"routes/discount.$code",parentId:"root",path:"discount/:code",index:void 0,caseSensitive:void 0,module:us},"routes/[sitemap.xml]":{id:"routes/[sitemap.xml]",parentId:"root",path:"sitemap.xml",index:void 0,caseSensitive:void 0,module:ds},"routes/pages.$handle":{id:"routes/pages.$handle",parentId:"root",path:"pages/:handle",index:void 0,caseSensitive:void 0,module:hs},"routes/[robots.txt]":{id:"routes/[robots.txt]",parentId:"root",path:"robots.txt",index:void 0,caseSensitive:void 0,module:fs},"routes/blogs._index":{id:"routes/blogs._index",parentId:"root",path:"blogs",index:!0,caseSensitive:void 0,module:gs},"routes/cart.$lines":{id:"routes/cart.$lines",parentId:"routes/cart",path:":lines",index:void 0,caseSensitive:void 0,module:ms},"routes/account.$":{id:"routes/account.$",parentId:"routes/account",path:"*",index:void 0,caseSensitive:void 0,module:vs},"routes/account":{id:"routes/account",parentId:"root",path:"account",index:void 0,caseSensitive:void 0,module:ys},"routes/_index":{id:"routes/_index",parentId:"root",path:void 0,index:!0,caseSensitive:void 0,module:Ns},"routes/search":{id:"routes/search",parentId:"root",path:"search",index:void 0,caseSensitive:void 0,module:Os},"routes/cart":{id:"routes/cart",parentId:"root",path:"cart",index:void 0,caseSensitive:void 0,module:$s},"routes/$":{id:"routes/$",parentId:"root",path:"*",index:void 0,caseSensitive:void 0,module:Bs}};var lS={async fetch(e,t,r){try{if(!(t!=null&&t.SESSION_SECRET))throw new Error("SESSION_SECRET environment variable is not set");let a=r.waitUntil.bind(r),[n,o]=await Promise.all([caches.open("hydrogen"),Us.init(e,[t.SESSION_SECRET])]),{storefront:i}=L2({cache:n,waitUntil:a,i18n:{language:"EN",country:"US"},publicStorefrontToken:t.PUBLIC_STOREFRONT_API_TOKEN,privateStorefrontToken:t.PRIVATE_STOREFRONT_API_TOKEN,storeDomain:t.PUBLIC_STORE_DOMAIN,storefrontId:t.PUBLIC_STOREFRONT_ID,storefrontHeaders:W2(e)}),s=V2({storefront:i,getCartId:I2(e.headers),setCartId:H2(),cartQueryFragment:B9}),c=await z2({build:Fs,mode:"production",getLoadContext:()=>({session:o,storefront:i,cart:s,env:t,waitUntil:a})})(e);return c.status===404?P2({request:e,response:c,storefront:i}):c}catch(a){return console.error(a),new Response("An unexpected error occurred",{status:500})}}},ja,Vt,Us=class{constructor(t,r){Ya(this,ja,void 0);Ya(this,Vt,void 0);Ja(this,ja,t),Ja(this,Vt,r)}static async init(t,r){let a=q2({cookie:{name:"session",httpOnly:!0,path:"/",sameSite:"lax",secrets:r}}),n=await a.getSession(t.headers.get("Cookie"));return new this(a,n)}get has(){return We(this,Vt).has}get get(){return We(this,Vt).get}get flash(){return We(this,Vt).flash}get unset(){return We(this,Vt).unset}get set(){return We(this,Vt).set}destroy(){return We(this,ja).destroySession(We(this,Vt))}commit(){return We(this,ja).commitSession(We(this,Vt))}};ja=new WeakMap,Vt=new WeakMap;var B9=`#graphql
  fragment Money on MoneyV2 {
    currencyCode
    amount
  }
  fragment CartLine on CartLine {
    id
    quantity
    attributes {
      key
      value
    }
    cost {
      totalAmount {
        ...Money
      }
      amountPerQuantity {
        ...Money
      }
      compareAtAmountPerQuantity {
        ...Money
      }
    }
    merchandise {
      ... on ProductVariant {
        id
        availableForSale
        compareAtPrice {
          ...Money
        }
        price {
          ...Money
        }
        requiresShipping
        title
        image {
          id
          url
          altText
          width
          height

        }
        product {
          handle
          title
          id
        }
        selectedOptions {
          name
          value
        }
      }
    }
  }
  fragment CartApiQuery on Cart {
    id
    checkoutUrl
    totalQuantity
    buyerIdentity {
      countryCode
      customer {
        id
        email
        firstName
        lastName
        displayName
      }
      email
      phone
    }
    lines(first: $numCartLines) {
      nodes {
        ...CartLine
      }
    }
    cost {
      subtotalAmount {
        ...Money
      }
      totalAmount {
        ...Money
      }
      totalDutyAmount {
        ...Money
      }
      totalTaxAmount {
        ...Money
      }
    }
    note
    attributes {
      key
      value
    }
    discountCodes {
      code
      applicable
    }
  }
`;export{Us as HydrogenSession,lS as default};
/**
 * Automatically applies a discount found on the url
 * If a cart exists it's updated with the discount, otherwise a cart is created with the discount already applied
 * @param ?redirect an optional path to return to otherwise return to the home page
 * @example
 * Example path applying a discount and redirecting
 * ```ts
 * /discount/FREESHIPPING?redirect=/products
 *
 * ```
 * @preserve
 */
/**
 * Automatically creates a new cart based on the URL and redirects straight to checkout.
 * Expected URL structure:
 * ```ts
 * /cart/<variant_id>:<quantity>
 *
 * ```
 * More than one `<variant_id>:<quantity>` separated by a comma, can be supplied in the URL, for
 * carts with more than one product variant.
 *
 * @param `?discount` an optional discount code to apply to the cart
 * @example
 * Example path creating a cart with two product variants, different quantities, and a discount code:
 * ```ts
 * /cart/41007289663544:1,41007289696312:2?discount=HYDROBOARD
 *
 * ```
 * @preserve
 */
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@remix-run/router/dist/router.js:
  (**
   * @remix-run/router v1.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router/dist/index.js:
  (**
   * React Router v6.14.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router-dom/dist/index.js:
  (**
   * React Router DOM v6.14.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-dom/cjs/react-dom-server-legacy.browser.production.min.js:
  (**
   * @license React
   * react-dom-server-legacy.browser.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-server.browser.production.min.js:
  (**
   * @license React
   * react-dom-server.browser.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

@remix-run/react/dist/esm/_virtual/_rollupPluginBabelHelpers.js:
  (**
   * @remix-run/react v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/errorBoundaries.js:
  (**
   * @remix-run/react v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/invariant.js:
  (**
   * @remix-run/react v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/routeModules.js:
  (**
   * @remix-run/react v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/links.js:
  (**
   * @remix-run/react v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/markup.js:
  (**
   * @remix-run/react v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/transition.js:
  (**
   * @remix-run/react v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/components.js:
  (**
   * @remix-run/react v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/routes.js:
  (**
   * @remix-run/react v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/scroll-restoration.js:
  (**
   * @remix-run/react v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/server.js:
  (**
   * @remix-run/react v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/index.js:
  (**
   * @remix-run/react v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/warnings.js:
  (**
   * @remix-run/server-runtime v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/cookies.js:
  (**
   * @remix-run/server-runtime v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/mode.js:
  (**
   * @remix-run/server-runtime v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/errors.js:
  (**
   * @remix-run/server-runtime v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/responses.js:
  (**
   * @remix-run/server-runtime v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/entry.js:
  (**
   * @remix-run/server-runtime v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/headers.js:
  (**
   * @remix-run/server-runtime v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/invariant.js:
  (**
   * @remix-run/server-runtime v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/routeMatching.js:
  (**
   * @remix-run/server-runtime v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/data.js:
  (**
   * @remix-run/server-runtime v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/routes.js:
  (**
   * @remix-run/server-runtime v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/markup.js:
  (**
   * @remix-run/server-runtime v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/serverHandoff.js:
  (**
   * @remix-run/server-runtime v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/server.js:
  (**
   * @remix-run/server-runtime v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/sessions.js:
  (**
   * @remix-run/server-runtime v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/sessions/cookieStorage.js:
  (**
   * @remix-run/server-runtime v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/sessions/memoryStorage.js:
  (**
   * @remix-run/server-runtime v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/index.js:
  (**
   * @remix-run/server-runtime v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@shopify/hydrogen/dist/production/index.js:
  (*! @see: https://shopify.dev/docs/api/storefront/latest/mutations/cartCreate *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/queries/cart *)
  (*! @see: https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesAdd *)
  (*! @see: https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesUpdate *)
  (*! @see: https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesRemove *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/mutations/cartDiscountCodesUpdate *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/mutations/cartBuyerIdentityUpdate *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/mutations/cartNoteUpdate *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/mutations/cartSelectedDeliveryOptionsUpdate *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/mutations/cartMetafieldsSet *)
  (*! @see https://shopify.dev/docs/api/storefront/2023-07/mutations/cartMetafieldDelete *)
*/
//# sourceMappingURL=index.js.map
