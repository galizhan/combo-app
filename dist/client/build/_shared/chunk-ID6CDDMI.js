import{a as g,c as e}from"/build/_shared/chunk-4WBX2LQN.js";import{c as m}from"/build/_shared/chunk-MEPKJ2VW.js";var c=m(g());function L(r,n){let{pathname:t}=e();return(0,c.useMemo)(()=>h({handle:r,pathname:t,searchParams:new URLSearchParams,selectedOptions:n}),[r,n,t])}function h({handle:r,pathname:n,searchParams:t,selectedOptions:s}){let o=/(\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)/g.exec(n),u=o&&o.length>0?`${o[0]}products/${r}`:`/products/${r}`;s.forEach(a=>{t.set(a.name,a.value)});let i=t.toString();return u+(i?"?"+t.toString():"")}export{L as a};
//# sourceMappingURL=/build/_shared/chunk-ID6CDDMI.js.map
