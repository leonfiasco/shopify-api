import axios from 'axios';

const domain = process.env.SHOPIFY_API_ENDPOINT;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_API_TOKEN;

async function ShopifyData(query) {
	try {
		const response = await axios({
			url: `https://${domain}/api/graphql`,
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
			},
			data: JSON.stringify({ query }),
		});

		return response.data.data;
	} catch (error) {
		throw new Error('Products not fetched');
	}
}

export async function getSummerCollection() {
	const query = `
   {
  collections(first: 2) {
    edges {
      node {
        id
        title
        products(first: 8) {
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
		// const summerCollection = response.collections.edges;

		// return summerCollection;
		// console.log('summer-collection', response);
	} catch (error) {
		throw new Error('Failed to fetch collections');
	}
}
