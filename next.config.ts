import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "stardewvalleywiki.com",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
