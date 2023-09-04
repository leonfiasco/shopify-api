/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['cdn.shopify.com'],
	},
	experimental: {
		workerThreads: false,
		cpus: 1,
	},
};

module.exports = nextConfig;
