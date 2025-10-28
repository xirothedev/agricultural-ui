import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	output: "standalone",
	reactCompiler: true,
	typedRoutes: true,
	experimental: {
		turbopackFileSystemCacheForDev: true,
	},
};

export default nextConfig;
