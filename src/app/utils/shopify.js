const domain = process.env.SHOPIFY_API_ENDPOINT;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_API_TOKEN;

async function ShopifyData(query) {
	const URL = `https://${domain}/api/2023-04/graphql.json`;

	const options = {
		endpoint: URL,
		method: 'POST',
		headers: {
			'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ query }),
	};

	try {
		const data = await fetch(URL, options).then((response) => {
			return response.json();
		});

		return data;
	} catch (error) {
		throw new Error('Products not fetched');
	}
}

export async function getAllProducts() {
	const query = `
collections(first: 2) {
    edges {
      node {
        id
        products(first: 5) {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  }
`;

	const response = await ShopifyData(query);

	const allProducts = response.data.products.edges
		? response.data.products.edges
		: [];

	return allProducts;
}
