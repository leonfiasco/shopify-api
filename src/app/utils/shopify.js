import axios from 'axios';

async function ShopifyData(query) {
	try {
		const response = await axios({
			url: `https://${process.env.SHOPIFY_API_ENDPOINT}/api/graphql`,
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				'X-Shopify-Storefront-Access-Token':
					process.env.SHOPIFY_STOREFRONT_API_TOKEN,
			},
			data: JSON.stringify({ query }),
		});

		return response.data.data;
	} catch (error) {
		throw new Error('Products not fetched');
	}
}

export async function getProductByHandle(handle) {
	const query = ` {
      productByHandle(handle: "${handle}") {
        id
        title
        descriptionHtml 
        totalInventory
        priceRange {
          minVariantPrice {
            amount
          }
        }
        images(first: 5) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
      }
    }
  `;

	const response = await ShopifyData(query);
	const product = response ? response.productByHandle : [];

	return product;
}

export async function getShopAll() {
	const query = `
   {
  collections(first: 3) {
    edges {
      node {
        id
        title
        products(first: 15) {
          edges {
            node {
              id
              title
              handle
              images(first: 2) {
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
              }
              variants(first: 1) {
                edges {
                  node {
                    price
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

  `;

	try {
		const response = await ShopifyData(query);
		const shopAll = response.collections.edges;

		return shopAll;
	} catch (error) {
		throw new Error('Failed to fetch collections');
	}
}

export async function getAllProducts() {
	const query = `
  {
  products(first: 35) {
    edges {
      node {
        id
        title
        handle
        priceRange {
          minVariantPrice {
            amount
          }
        }
        images(first: 5) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
      }
    }
  }
}
`;

	const response = await ShopifyData(query);

	const allProducts = response
		? response.products.edges.map((product) => {
				const { id, title, handle, priceRange, images } = product.node;
				return {
					id: id,
					title: title,
					handle: handle,
					price: priceRange.minVariantPrice.amount,
					imageSrc: images.edges[0].node.originalSrc,
					imageAlt: product.node.title,
				};
		  })
		: [];

	return allProducts;
}
