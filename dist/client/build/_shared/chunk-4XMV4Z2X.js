import{a as T,c as _,d as Y,f as Z,k as H,s as J,w as q}from"/build/_shared/chunk-4WBX2LQN.js";import{b as me,c as v}from"/build/_shared/chunk-MEPKJ2VW.js";var ie=me((Be,oe)=>{"use strict";oe.exports=function(e){var t=e.directives,a=new Set,r=[];return Object.keys(t).forEach(function(n){var o=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();if(a.has(o))throw new Error("".concat(n," is specified more than once"));a.add(o);var i=t[n];Array.isArray(i)?i=i.join(" "):i===!0&&(i=""),i?r.push("".concat(o," ").concat(i)):i!==!1&&r.push(o)}),r.join("; ")}});function I(e){if(!e){let t=`flattenConnection(): needs a 'connection' to flatten, but received '${e??""}' instead.`;return console.error(t+" Returning an empty array"),[]}return"nodes"in e?e.nodes:"edges"in e&&Array.isArray(e.edges)?e.edges.map(t=>{if(!t?.node)throw new Error("flattenConnection(): Connection edges must contain nodes");return t.node}):[]}var R=v(q(),1);var E=v(T(),1);var ye=v(q(),1),P=v(T(),1);var X="2023-07";var Ce={storeDomain:"test",storefrontToken:"abc123",storefrontApiVersion:X,countryIsoCode:"US",languageIsoCode:"EN",getStorefrontApiUrl(){return""},getPublicTokenHeaders(){return{}},getShopifyDomain(){return""}},ve=(0,P.createContext)(Ce);function K(){let e=(0,P.useContext)(ve);if(!e)throw new Error("'useShop()' must be a descendent of <ShopifyProvider/>");return e}function V(e){let{countryIsoCode:t,languageIsoCode:a}=K(),r=a.includes("_")?a.replace("_","-"):`${a}-${t}`;if(!r)throw new Error("useMoney(): Unable to get 'locale' from 'useShop()', which means that 'locale' was not passed to '<ShopifyProvider/>'. 'locale' is required for 'useMoney()' to work");let n=parseFloat(e.amount),o=(0,E.useMemo)(()=>({style:"currency",currency:e.currencyCode}),[e.currencyCode]),i=A(r,o),s=A(r,{...o,currencyDisplay:"name"}),d=A(r,{...o,currencyDisplay:"narrowSymbol"}),g=A(r,{...o,minimumFractionDigits:0,maximumFractionDigits:0}),c=A(r),h=A(r,{minimumFractionDigits:0,maximumFractionDigits:0}),f=u=>u.type==="currency",p=(0,E.useMemo)(()=>({original:()=>e,currencyCode:()=>e.currencyCode,localizedString:()=>i().format(n),parts:()=>i().formatToParts(n),withoutTrailingZeros:()=>n%1===0?g().format(n):i().format(n),withoutTrailingZerosAndCurrency:()=>n%1===0?h().format(n):c().format(n),currencyName:()=>{var u;return((u=s().formatToParts(n).find(f))==null?void 0:u.value)??e.currencyCode},currencySymbol:()=>{var u;return((u=i().formatToParts(n).find(f))==null?void 0:u.value)??e.currencyCode},currencyNarrowSymbol:()=>{var u;return((u=d().formatToParts(n).find(f))==null?void 0:u.value)??""},amount:()=>i().formatToParts(n).filter(u=>["decimal","fraction","group","integer","literal"].includes(u.type)).map(u=>u.value).join("")}),[e,n,s,i,d,c,g,h]);return(0,E.useMemo)(()=>new Proxy(p,{get:(u,y)=>{var m;return(m=Reflect.get(u,y))==null?void 0:m.call(null)}}),[p])}function A(e,t){return(0,E.useMemo)(()=>{let a;return()=>a??(a=new Intl.NumberFormat(e,t))},[e,t])}function z({data:e,as:t,withoutCurrency:a,withoutTrailingZeros:r,measurement:n,measurementSeparator:o="/",...i}){if(!we(e))throw new Error("<Money/> needs a valid 'data' prop that has 'amount' and 'currencyCode'");let s=V(e),d=t??"div",g=s.localizedString;return(a||r)&&(a&&!r?g=s.amount:!a&&r?g=s.withoutTrailingZeros:g=s.withoutTrailingZerosAndCurrency),(0,R.jsxs)(d,{...i,children:[g,n&&n.referenceUnit&&(0,R.jsxs)(R.Fragment,{children:[o,n.referenceUnit]})]})}function we(e){return typeof e.amount=="string"&&!!e.amount&&typeof e.currencyCode=="string"&&!!e.currencyCode}var U=v(q(),1),C=v(T(),1);var ee=C.forwardRef(({alt:e,aspectRatio:t,crop:a="center",data:r,decoding:n="async",height:o="auto",loader:i=O,loaderOptions:s,loading:d="lazy",sizes:g,src:c,srcSetOptions:h={intervals:15,startingWidth:200,incrementSize:200,placeholderWidth:100},width:f="100%",widths:p,...u},y)=>{let m=C.useMemo(()=>{let N=r?.width&&r?.height?r?.width:void 0,x=r?.width&&r?.height?r?.height:void 0;return{width:N,height:x,unitsMatch:Boolean(te(N,x))}},[r]),w=C.useMemo(()=>{let x=D((f||"100%").toString()),le=`${x.number}${x.unit}`,W=o==null,j=W?null:D(o.toString()),de=j?`${j.number}${j.unit}`:"",pe=W?"auto":de,fe=c||r?.url,ge=r?.altText&&!e?r?.altText:e||"",he=t||(m.unitsMatch?[L(m.width),L(m.height)].join("/"):void 0);return{width:le,height:pe,src:fe,alt:ge,aspectRatio:he}},[f,o,c,r,e,t,m,u?.key]),{intervals:S,startingWidth:$,incrementSize:b,placeholderWidth:ce}=h,Q=C.useMemo(()=>$e(f,S,$,b),[f,S,$,b]);return re(w.width)?(0,U.jsx)(Ie,{aspectRatio:t,crop:a,decoding:n,height:o,imageWidths:Q,loader:i,loading:d,normalizedProps:w,passthroughProps:u,ref:y,width:f}):(0,U.jsx)(Se,{aspectRatio:t,crop:a,decoding:n,imageWidths:Q,loader:i,loading:d,normalizedProps:w,passthroughProps:u,placeholderWidth:ce,ref:y,sizes:g})}),Ie=C.forwardRef(({aspectRatio:e,crop:t,decoding:a,height:r,imageWidths:n,loader:o=O,loading:i,normalizedProps:s,passthroughProps:d,width:g},c)=>{let h=C.useMemo(()=>{let f=L(g),p=L(r),u=e||(te(s.width,s.height)?[f,p].join("/"):s.aspectRatio?s.aspectRatio:void 0),y=n===void 0?void 0:ne(n,u,t),m=p||(u&&f?f*(G(u)??1):void 0),w=ae(s.src,y,o),S=o({src:s.src,width:f,height:m,crop:s.height==="auto"?void 0:t});return{width:f,aspectRatio:u,height:m,srcSet:w,src:S}},[e,t,r,n,o,s,g]);return(0,U.jsx)("img",{ref:c,alt:s.alt,decoding:a,height:h.height,loading:i,src:h.src,srcSet:h.srcSet,width:h.width,style:{aspectRatio:h.aspectRatio,...d.style},...d})}),Se=C.forwardRef(({crop:e,decoding:t,imageWidths:a,loader:r=O,loading:n,normalizedProps:o,passthroughProps:i,placeholderWidth:s,sizes:d},g)=>{let c=C.useMemo(()=>{let h=a===void 0?void 0:ne(a,o.aspectRatio,e),f=o.aspectRatio&&s?s*(G(o.aspectRatio)??1):void 0,p=ae(o.src,h,r),u=r({src:o.src,width:s,height:f,crop:e});return{placeholderHeight:f,srcSet:p,src:u}},[e,a,r,o,s]);return(0,U.jsx)("img",{ref:g,alt:o.alt,decoding:t,height:c.placeholderHeight,loading:n,sizes:d,src:c.src,srcSet:c.srcSet,width:s,...i,style:{width:o.width,aspectRatio:o.aspectRatio,...i.style}})});function O({src:e,width:t,height:a,crop:r}){if(!e)return"";let n=new URL(e);return t&&n.searchParams.append("width",Math.round(t).toString()),a&&n.searchParams.append("height",Math.round(a).toString()),r&&n.searchParams.append("crop",r),n.href}function te(e="100%",t="auto"){return D(e.toString()).unit===D(t.toString()).unit}function D(e){let t=e.replace(/[0-9.]/g,""),a=parseFloat(e.replace(t,""));return{unit:t===""?a===void 0?"auto":"px":t,number:a}}function L(e){if(e===void 0)return;let{unit:t,number:a}=D(e.toString());switch(t){case"em":return a*16;case"rem":return a*16;case"px":return a;case"":return a;default:return}}function re(e){return typeof e=="number"||typeof e=="string"&&/\d(px|em|rem)$/.test(e)}function ae(e,t,a=O){return e?t?.length===0||!t?e:t.map((r,n)=>`${a({src:e,width:r.width,height:r.height,crop:r.crop})} ${t.length===3?`${n+1}x`:`${r.width??0}w`}`).join(", "):""}function $e(e="100%",t,a,r){let n=Array.from({length:t},(i,s)=>s*r+a),o=Array.from({length:3},(i,s)=>(s+1)*(L(e)??0));return re(e)?o:n}function G(e){if(!e)return;let[t,a]=e.split("/");return 1/(Number(t)/Number(a))}function ne(e,t,a="center"){return e?e.map(n=>({width:n,height:t?n*(G(t)??1):void 0,crop:a})):void 0}var l=v(T(),1);var k=v(q(),1),xe=v(ie(),1);var mt=(0,l.lazy)(()=>import("/build/_shared/log-seo-tags-TY72EQWZ-KATZQFVP.js"));function yt({connection:e,children:t=()=>(console.warn("<Pagination> requires children to work properly"),null)}){let a=Z().state==="loading",{endCursor:r,hasNextPage:n,hasPreviousPage:o,nextPageUrl:i,nodes:s,previousPageUrl:d,startCursor:g}=Pe(e),c=(0,l.useMemo)(()=>({pageInfo:{endCursor:r,hasPreviousPage:o,startCursor:g},nodes:s}),[r,o,g,s]),h=(0,l.useMemo)(()=>function(p){return n?(0,l.createElement)(H,{preventScrollReset:!0,...p,to:i,state:c,replace:!0}):null},[n,i,c]),f=(0,l.useMemo)(()=>function(p){return o?(0,l.createElement)(H,{preventScrollReset:!0,...p,to:d,state:c,replace:!0}):null},[o,d,c]);return t({state:c,hasNextPage:n,hasPreviousPage:o,isLoading:a,nextPageUrl:i,nodes:s,previousPageUrl:d,NextLink:h,PreviousLink:f})}function F(e){let t=new URLSearchParams(e);return t.delete("cursor"),t.delete("direction"),t.toString()}function M(e){throw new Error(`The Pagination component requires ${"`"+e+"`"} to be a part of your query. See the guide on how to setup your query to include ${"`"+e+"`"}: https://shopify.dev/docs/custom-storefronts/hydrogen/data-fetching/pagination#setup-the-paginated-query`)}function Pe(e){e.pageInfo||M("pageInfo"),typeof e.pageInfo.startCursor>"u"&&M("pageInfo.startCursor"),typeof e.pageInfo.endCursor>"u"&&M("pageInfo.endCursor"),typeof e.pageInfo.hasNextPage>"u"&&M("pageInfo.hasNextPage"),typeof e.pageInfo.hasPreviousPage>"u"&&M("pageInfo.hasPreviousPage");let t=Y(),{state:a,search:r,pathname:n}=_(),o=new URLSearchParams(r).get("direction")==="previous",[i,s]=(0,l.useState)(I(e)),[d,g]=(0,l.useState)({startCursor:e.pageInfo.startCursor,endCursor:e.pageInfo.endCursor,hasPreviousPage:e.pageInfo.hasPreviousPage,hasNextPage:e.pageInfo.hasNextPage}),c=(0,l.useRef)({params:F(r),pathname:n});(0,l.useEffect)(()=>{if(F(r)!==c.current.params||n!==c.current.pathname)c.current={pathname:n,params:F(r)},t(`${n}?${F(r)}`,{replace:!0,preventScrollReset:!0,state:{nodes:void 0,pageInfo:void 0}});else if(a?.nodes){if(s(o?[...I(e),...a.nodes]:[...a.nodes,...I(e)]),a?.pageInfo){let p=a?.pageInfo?.startCursor===void 0?e.pageInfo.startCursor:a.pageInfo.startCursor,u=a?.pageInfo?.endCursor===void 0?e.pageInfo.endCursor:a.pageInfo.endCursor,y=a?.pageInfo?.hasPreviousPage===void 0?e.pageInfo.hasPreviousPage:a.pageInfo.hasPreviousPage,m=a?.pageInfo?.hasNextPage===void 0?e.pageInfo.hasNextPage:a.pageInfo.hasNextPage;o?(p=e.pageInfo.startCursor,y=e.pageInfo.hasPreviousPage):(u=e.pageInfo.endCursor,m=e.pageInfo.hasNextPage),g({startCursor:p,endCursor:u,hasPreviousPage:y,hasNextPage:m})}}else s(I(e)),g({startCursor:e.pageInfo.startCursor,endCursor:e.pageInfo.endCursor,hasPreviousPage:e.pageInfo.hasPreviousPage,hasNextPage:e.pageInfo.hasNextPage})},[a,e,o,r,t,n]);let h=(0,l.useMemo)(()=>{let p=new URLSearchParams(r);return p.set("direction","previous"),d.startCursor&&p.set("cursor",d.startCursor),`?${p.toString()}`},[r,d.startCursor]),f=(0,l.useMemo)(()=>{let p=new URLSearchParams(r);return p.set("direction","next"),d.endCursor&&p.set("cursor",d.endCursor),`?${p.toString()}`},[r,d.endCursor]);return{...d,previousPageUrl:h,nextPageUrl:f,nodes:i}}var se="cartFormInput";function B({children:e,action:t,inputs:a,route:r}){let n=J();return(0,k.jsxs)(n.Form,{action:r||"",method:"post",children:[(t||a)&&(0,k.jsx)("input",{type:"hidden",name:se,value:JSON.stringify({action:t,inputs:a})}),typeof e=="function"?e(n):e]})}B.INPUT_NAME=se;B.ACTIONS={AttributesUpdateInput:"AttributesUpdateInput",BuyerIdentityUpdate:"BuyerIdentityUpdate",Create:"Create",DiscountCodesUpdate:"DiscountCodesUpdate",LinesAdd:"LinesAdd",LinesRemove:"LinesRemove",LinesUpdate:"LinesUpdate",NoteUpdate:"NoteUpdate",SelectedDeliveryOptionsUpdate:"SelectedDeliveryOptionsUpdate",MetafieldsSet:"MetafieldsSet",MetafieldDelete:"MetafieldDelete"};function Ee(e){let t={};for(let i of e.entries()){let s=i[0],d=e.getAll(s);t[s]=d.length>1?d:i[1]}let{cartFormInput:a,...r}=t,{action:n,inputs:o}=a?JSON.parse(String(a)):{};return{action:n,inputs:{...o,...r}}}B.getFormInput=Ee;function Ct({handle:e,options:t=[],variants:a=[],productPath:r="products",children:n}){let o=a instanceof Array?a:I(a),{searchParams:i,path:s,alreadyOnProductPage:d}=Re(e,r),g=t.filter(c=>c?.values?.length===1);return(0,l.createElement)(l.Fragment,null,...(0,l.useMemo)(()=>t.filter(c=>c?.values?.length>1).map(c=>{let h,f=[];for(let p of c.values){let u=new URLSearchParams(d?i:void 0);u.set(c.name,p),g.forEach($=>{u.set($.name,$.values[0])});let y=o.find($=>$?.selectedOptions?.every(b=>u.get(b?.name)===b?.value)),m=i.get(c.name),w=m?m===p:!1;w&&(h=p);let S="?"+u.toString();f.push({value:p,isAvailable:y?y.availableForSale:!0,to:s+S,search:S,isActive:w})}return n({option:{name:c.name,value:h,values:f}})}),[t,o,n]))}function Re(e,t){let{pathname:a,search:r}=_();return(0,l.useMemo)(()=>{let n=/(\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)/g.exec(a),o=n&&n.length>0;t=t.startsWith("/")?t.substring(1):t;let i=o?`${n[0]}${t}/${e}`:`/${t}/${e}`;return{searchParams:new URLSearchParams(r),alreadyOnProductPage:i===a,path:i}},[a,r,e,t])}var ue=(0,l.createContext)(void 0),vt=ue.Provider,Ue=()=>(0,l.useContext)(ue);var wt=(0,l.forwardRef)((e,t)=>{let a=Ue();return(0,k.jsx)("script",{suppressHydrationWarning:!0,...e,nonce:a,ref:t})});export{z as a,ee as b,yt as c,B as d,Ct as e,Ue as f};
/*! Bundled license information:

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
//# sourceMappingURL=/build/_shared/chunk-4XMV4Z2X.js.map
