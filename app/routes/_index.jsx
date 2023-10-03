import {defer} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link} from '@remix-run/react';
import {Suspense, useState} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import Carousel from 'react-multi-carousel';
import reactCarousel from 'react-multi-carousel/lib/styles.css';
import {CiCircleCheck} from 'react-icons/ci'
import image from '../../public/image.jpg'

export const meta = () => {
    return [{title: 'Hydrogen | Home'}];
};
export const links = () => [
    {rel: 'stylesheet', href: reactCarousel}
]
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 5,
        partialVisibilityGutter: 40
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3,
        partialVisibilityGutter: 40
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2,
        partialVisibilityGutter: 40
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
        partialVisibilityGutter: 40
    }
};

export async function loader({context}) {
    const {storefront} = context;
    const {collections} = await storefront.query(FEATURED_COLLECTION_QUERY);
    const featuredCollection = collections.nodes[0];
    const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);
    const winterProducts =  storefront.query(WINTER_PRODUCTS);
    const autumnProducts =  storefront.query(AUTUMN_PRODUCTS);
    const summerProducts =  storefront.query(SUMMER_PRODUCTS);

    return defer({featuredCollection, recommendedProducts, winterProducts, autumnProducts, summerProducts});
    return null
}

export default function Homepage() {
    const data = useLoaderData();
    const [selectedItems, setSelectedItems] = useState([null, null, null,])
    const [step, setStep] = useState(1)
    if (step === 1)
        return (
            <div className="home">
                <h1>Выберите свое комбо</h1>
                {/*<FeaturedCollection collection={data.featuredCollection}/>*/}
                <RecommendedProducts products={data.winterProducts} onClicked={(id) => {
                    selectedItems[0] = id
                    setSelectedItems(selectedItems)
                }} title={'Зимнее комбо'}/>
                <RecommendedProducts products={data.autumnProducts} onClicked={(id) => {
                    selectedItems[1] = id
                    setSelectedItems(selectedItems)
                }}  title={'Осеннее комбо'}/>
                <RecommendedProducts products={data.summerProducts} onClicked={(id) => {
                    selectedItems[2] = id
                    setSelectedItems(selectedItems)
                }}  title={'Летнее комбо'}/>
                <div className={'flex justify-center w-full'}>
                    <button className={'border-2 border-gray-400 px-3 py-2'} onClick={() => setStep(2)}>Далее</button>
                </div>
            </div>
        );
    return <ContactForm selectedItems={selectedItems} setStep={setStep}/>
}


function ContactForm({selectedItems, setStep}) {

    return <div className={'flex justify-center'}>
        <div>
            <div className={'flex items-center'}>
                <h2 className={'m-0'}>Вы выбрали: </h2>
                <button className={'border-2 border-gray-400 px-3 py-2 ml-5'} onClick={() => setStep(1)}>Выбрать другое
                </button>
            </div>
            <div className={'flex mt-5'}>

                {selectedItems.map(item => {
                    return (
                        <div>
                            <Image
                                data={item.images.nodes[0]}
                                aspectRatio="1/1"
                                sizes="(min-width: 45em) 10vw, 50vw"
                            />
                            <h3>{item.title}</h3>
                        </div>
                    )
                })}

            </div>
            <div className={'flex justify-center mt-10'}>
                <form>
                    <div>
                        <label htmlFor={'number'}>ФИО</label>
                        <input name={'number'} className={'w-full'}/>
                    </div>

                    <div>
                        <label htmlFor={'number'}>Номер телефона</label>
                        <input name={'number'} className={'w-full'}/>
                    </div>
                    <div className={'flex justify-center'}>
                        <button className={'border-2 border-gray-400 px-3 py-2 ml-5'}
                                onClick={() => setStep(1)}>Отправить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}

function RecommendedProducts({products, onClicked, title}) {
    const [selected, onSelected] = useState(null);
    return (
        <div className="recommended-products">
            <h2>{title}</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <Await resolve={products}>

                    {({collection}) => (
                        <div>
                            {console.log(collection)}
                            <Carousel partialVisible={true} responsive={responsive}>
                                {collection.products.edges.map((p) => {
                                    const product = p.node;
                                    return (
                                        <a
                                            key={product.id}
                                            className="recommended-product pr-25 relative"
                                            onClick={() => {
                                                onSelected(product.id)
                                                onClicked(product)
                                            }}
                                        >
                                            {selected === product.id && (
                                                <>
                                                    <div className="absolute w-full h-full top-0 right-0 "
                                                         style={{background: "rgba(0,0,0,0.2)"}}>
                                                    </div>
                                                    <div className="absolute top-0 right-0" style={{zIndex: 100000}}>
                                                        <CiCircleCheck size='3em' color={'green'}/>
                                                    </div>
                                                </>
                                            )}
                                            {/*<img src={image}/>*/}
                                            <Image
                                                data={product.images.nodes[0]}
                                                aspectRatio="1/1"
                                                sizes="(min-width: 45em) 10vw, 50vw"
                                            />
                                            <h4>{product.title}</h4>
                                            <small>
                                                <Money data={product.priceRange.minVariantPrice}/>
                                            </small>
                                            <h4>Доступные размеры</h4>
                                            <div className={'flex'}>
                                                {product.variants.nodes.map(variant => {
                                                    console.log('variant', variant.selectedOptions[0])
                                                    return (
                                                        <p className={'mr-2'}>{variant.selectedOptions[0].value}</p>

                                                    )
                                                })}
                                            </div>
                                        </a>

                                    )
                                })}
                            </Carousel>
                        </div>
                    )}

                </Await>
            </Suspense>
            <br/>
        </div>
    );
}

//
const FEATURED_COLLECTION_QUERY = `#graphql
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
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
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
`;


const WINTER_PRODUCTS = `#graphql
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
  `


const SUMMER_PRODUCTS = `#graphql
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
  `

const AUTUMN_PRODUCTS = `#graphql
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
  `
