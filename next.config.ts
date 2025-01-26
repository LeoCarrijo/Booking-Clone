import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cf.bstatic.com",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
