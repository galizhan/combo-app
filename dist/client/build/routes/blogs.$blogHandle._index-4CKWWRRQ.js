import{b as d,c as u}from"/build/_shared/chunk-4XMV4Z2X.js";import{k as r,q as s,w as g}from"/build/_shared/chunk-4WBX2LQN.js";import{c as l}from"/build/_shared/chunk-MEPKJ2VW.js";var e=l(g()),c=({data:t})=>[{title:`Hydrogen | ${t.blog.title} blog`}];function m(){let{blog:t}=s(),{articles:a}=t;return(0,e.jsxs)("div",{className:"blog",children:[(0,e.jsx)("h1",{children:t.title}),(0,e.jsx)("div",{className:"blog-grid",children:(0,e.jsx)(u,{connection:a,children:({nodes:n,isLoading:o,PreviousLink:b,NextLink:h})=>(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(b,{children:o?"Loading...":(0,e.jsx)("span",{children:"\u2191 Load previous"})}),n.map((i,p)=>(0,e.jsx)(f,{article:i,loading:p<2?"eager":"lazy"},i.id)),(0,e.jsx)(h,{children:o?"Loading...":(0,e.jsx)("span",{children:"Load more \u2193"})})]})})})]})}function f({article:t,loading:a}){let n=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(new Date(t.publishedAt));return(0,e.jsx)("div",{className:"blog-article",children:(0,e.jsxs)(r,{to:`/blogs/${t.blog.handle}/${t.handle}`,children:[t.image&&(0,e.jsx)("div",{className:"blog-article-image",children:(0,e.jsx)(d,{alt:t.image.altText||t.title,aspectRatio:"3/2",data:t.image,loading:a,sizes:"(min-width: 768px) 50vw, 100vw"})}),(0,e.jsx)("h3",{children:t.title}),(0,e.jsx)("small",{children:n})]})},t.id)}export{m as default,c as meta};
//# sourceMappingURL=/build/routes/blogs.$blogHandle._index-4CKWWRRQ.js.map
