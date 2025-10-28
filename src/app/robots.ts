import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	const base = "https://agriculture.xirothedev.site";
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: [`${base}/sitemap.xml`],
		host: base,
	};
}
