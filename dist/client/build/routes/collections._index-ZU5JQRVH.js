import{b as l,c as d}from"/build/_shared/chunk-4XMV4Z2X.js";import{k as i,q as r,w as s}from"/build/_shared/chunk-4WBX2LQN.js";import{c as a}from"/build/_shared/chunk-MEPKJ2VW.js";var t=a(s());function g(){let{collections:e}=r();return(0,t.jsxs)("div",{className:"collections",children:[(0,t.jsx)("h1",{children:"Collections"}),(0,t.jsx)(d,{connection:e,children:({nodes:n,isLoading:o,PreviousLink:u,NextLink:c})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(u,{children:o?"Loading...":(0,t.jsx)("span",{children:"\u2191 Load previous"})}),(0,t.jsx)(f,{collections:n}),(0,t.jsx)(c,{children:o?"Loading...":(0,t.jsx)("span",{children:"Load more \u2193"})})]})})]})}function f({collections:e}){return(0,t.jsx)("div",{className:"collections-grid",children:e.map((n,o)=>(0,t.jsx)(C,{collection:n,index:o},n.id))})}function C({collection:e,index:n}){return(0,t.jsxs)(i,{className:"collection-item",to:`/collections/${e.handle}`,prefetch:"intent",children:[e.image&&(0,t.jsx)(l,{alt:e.image.altText||e.title,aspectRatio:"1/1",data:e.image,loading:n<3?"eager":void 0}),(0,t.jsx)("h5",{children:e.title})]},e.id)}export{g as default};
//# sourceMappingURL=/build/routes/collections._index-ZU5JQRVH.js.map
