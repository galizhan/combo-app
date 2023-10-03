import{a as i,c as d}from"/build/_shared/chunk-4XMV4Z2X.js";import{k as o,q as u,w as c}from"/build/_shared/chunk-4WBX2LQN.js";import{c as a}from"/build/_shared/chunk-MEPKJ2VW.js";var e=a(c()),f=()=>[{title:"Orders"}];function l(){let{customer:r}=u(),{orders:t,numberOfOrders:n}=r;return(0,e.jsxs)("div",{className:"orders",children:[(0,e.jsxs)("h2",{children:["Orders ",(0,e.jsxs)("small",{children:["(",n,")"]})]}),(0,e.jsx)("br",{}),t.nodes.length?(0,e.jsx)(O,{orders:t}):(0,e.jsx)(m,{})]})}function O({orders:r}){return(0,e.jsx)("div",{className:"acccount-orders",children:r?.nodes.length?(0,e.jsx)(d,{connection:r,children:({nodes:t,isLoading:n,PreviousLink:g,NextLink:p})=>(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(g,{children:n?"Loading...":(0,e.jsx)("span",{children:"\u2191 Load previous"})}),t.map(s=>(0,e.jsx)(h,{order:s},s.id)),(0,e.jsx)(p,{children:n?"Loading...":(0,e.jsx)("span",{children:"Load more \u2193"})})]})}):(0,e.jsx)(m,{})})}function m(){return(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{children:"You haven't placed any orders yet."}),(0,e.jsx)("br",{}),(0,e.jsx)("p",{children:(0,e.jsx)(o,{to:"/collections",children:"Start Shopping \u2192"})})]})}function h({order:r}){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("fieldset",{children:[(0,e.jsx)(o,{to:`/account/orders/${r.id}`,children:(0,e.jsxs)("strong",{children:["#",r.orderNumber]})}),(0,e.jsx)("p",{children:new Date(r.processedAt).toDateString()}),(0,e.jsx)("p",{children:r.financialStatus}),(0,e.jsx)("p",{children:r.fulfillmentStatus}),(0,e.jsx)(i,{data:r.currentTotalPrice}),(0,e.jsx)(o,{to:`/account/orders/${btoa(r.id)}`,children:"View Order \u2192"})]}),(0,e.jsx)("br",{})]})}var C=`#graphql
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
`,y=`#graphql
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
  ${C}
`,S=`#graphql
  ${y}
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
`;export{l as default,f as meta};
//# sourceMappingURL=/build/routes/account.orders._index-WCG7HFVG.js.map
