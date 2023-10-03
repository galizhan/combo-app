import"/build/_shared/chunk-7TTS2GOO.js";import"/build/_shared/chunk-UP5E2WR4.js";import"/build/_shared/chunk-ID6CDDMI.js";import{f as h}from"/build/_shared/chunk-4XMV4Z2X.js";import{a as A,b as w,g as f,h as b,l,m as c,o as p,p as y,q as x,t as m,v as g,w as d}from"/build/_shared/chunk-4WBX2LQN.js";import{c as n}from"/build/_shared/chunk-MEPKJ2VW.js";var v="/build/_assets/favicon-5FIZBM2K.svg";var k="/build/_assets/reset-GJUKTO6O.css";var M="/build/_assets/app-4L5QY4LK.css";var E=n(A());var o=n(d());function u({cart:t,children:r=null,footer:i,header:a,isLoggedIn:s}){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("main",{children:r})})}var z="/build/_assets/tailwind-XEYRYTDJ.css";var e=n(d()),j=({formMethod:t,currentUrl:r,nextUrl:i})=>!!(t&&t!=="GET"||r.toString()===i.toString());function H(){return[{rel:"stylesheet",href:z},{rel:"stylesheet",href:k},{rel:"stylesheet",href:M},{rel:"preconnect",href:"https://cdn.shopify.com"},{rel:"preconnect",href:"https://shop.app"},{rel:"icon",type:"image/svg+xml",href:v}]}function S(){let t=h(),r=x();return(0,e.jsxs)("html",{lang:"en",children:[(0,e.jsxs)("head",{children:[(0,e.jsx)("meta",{charSet:"utf-8"}),(0,e.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),(0,e.jsx)(c,{}),(0,e.jsx)(l,{})]}),(0,e.jsxs)("body",{children:[(0,e.jsx)(u,{...r,children:(0,e.jsx)(b,{})}),(0,e.jsx)(g,{nonce:t}),(0,e.jsx)(p,{nonce:t}),(0,e.jsx)(m,{nonce:t})]})]})}function N(){let t=f(),[r]=y(),i=h(),a="Unknown error",s=500;return w(t)?(a=t?.data?.message??t.data,s=t.status):t instanceof Error&&(a=t.message),(0,e.jsxs)("html",{lang:"en",children:[(0,e.jsxs)("head",{children:[(0,e.jsx)("meta",{charSet:"utf-8"}),(0,e.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),(0,e.jsx)(c,{}),(0,e.jsx)(l,{})]}),(0,e.jsxs)("body",{children:[(0,e.jsx)(u,{...r.data,children:(0,e.jsxs)("div",{className:"route-error",children:[(0,e.jsx)("h1",{children:"Oops"}),(0,e.jsx)("h2",{children:s}),a&&(0,e.jsx)("fieldset",{children:(0,e.jsx)("pre",{children:a})})]})}),(0,e.jsx)(g,{nonce:i}),(0,e.jsx)(p,{nonce:i}),(0,e.jsx)(m,{nonce:i})]})]})}var C=`#graphql
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
`,W=`#graphql
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
  ${C}
`,Z=`#graphql
  query Footer(
    $country: CountryCode
    $footerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    menu(handle: $footerMenuHandle) {
      ...Menu
    }
  }
  ${C}
`;export{N as ErrorBoundary,S as default,H as links,j as shouldRevalidate};
//# sourceMappingURL=/build/root-JWRHI2PY.js.map
