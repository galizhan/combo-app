import{a as m}from"/build/_shared/chunk-ID6CDDMI.js";import{a as c,b as d,c as u}from"/build/_shared/chunk-4XMV4Z2X.js";import{k as i,q as s,w as l}from"/build/_shared/chunk-4WBX2LQN.js";import{c as r}from"/build/_shared/chunk-MEPKJ2VW.js";var e=r(l()),p=({data:t})=>[{title:`Hydrogen | ${t.collection.title} Collection`}];function g(){let{collection:t}=s();return(0,e.jsxs)("div",{className:"collection",children:[(0,e.jsx)("h1",{children:t.title}),(0,e.jsx)("p",{className:"collection-description",children:t.description}),(0,e.jsx)(u,{connection:t.products,children:({nodes:n,isLoading:a,PreviousLink:o,NextLink:f})=>(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o,{children:a?"Loading...":(0,e.jsx)("span",{children:"\u2191 Load previous"})}),(0,e.jsx)(h,{products:n}),(0,e.jsx)("br",{}),(0,e.jsx)(f,{children:a?"Loading...":(0,e.jsx)("span",{children:"Load more \u2193"})})]})})]})}function h({products:t}){return(0,e.jsx)("div",{className:"products-grid",children:t.map((n,a)=>(0,e.jsx)(P,{product:n,loading:a<8?"eager":void 0},n.id))})}function P({product:t,loading:n}){let a=t.variants.nodes[0],o=m(t.handle,a.selectedOptions);return(0,e.jsxs)(i,{className:"product-item",prefetch:"intent",to:o,children:[t.featuredImage&&(0,e.jsx)(d,{alt:t.featuredImage.altText||t.title,aspectRatio:"1/1",data:t.featuredImage,loading:n,sizes:"(min-width: 45em) 400px, 100vw"}),(0,e.jsx)("h4",{children:t.title}),(0,e.jsx)("small",{children:(0,e.jsx)(c,{data:t.priceRange.minVariantPrice})})]},t.id)}var C=`#graphql
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
`,L=`#graphql
  ${C}
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
`;export{g as default,p as meta};
//# sourceMappingURL=/build/routes/collections.$handle-FU4KBQTQ.js.map
