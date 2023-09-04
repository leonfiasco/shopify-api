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

export async function getSummerCollection() {
	const query = `
   {
  collections(first: 2) {
    edges {
      node {
        id
        title
        products(first: 6) {
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
		const summerCollection = response.collections.edges;

		return summerCollection;
	} catch (error) {
		throw new Error('Failed to fetch collections');
	}
}
