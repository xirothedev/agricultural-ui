import type { MetadataRoute } from "next";

// Base URL for canonical links
const BASE_URL = "https://agricultural.xirothedev.site";

// Static lists for now; replace with real data sources when available
const categorySlugs = ["fresh-produce", "grains-seeds", "farm-equipment"];
const productIds = ["organic-tomatoes", "premium-wheat", "free-range-eggs"];

export default function sitemap(): MetadataRoute.Sitemap {
	const now = new Date();

	const routes: MetadataRoute.Sitemap = [
		{
			url: `${BASE_URL}/`,
			lastModified: now,
			changeFrequency: "daily",
			priority: 1,
		},
		{
			url: `${BASE_URL}/auth`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.3,
		},
		{
			url: `${BASE_URL}/categories`,
			lastModified: now,
			changeFrequency: "weekly",
			priority: 0.6,
		},
		{
			url: `${BASE_URL}/products`,
			lastModified: now,
			changeFrequency: "weekly",
			priority: 0.6,
		},
	];

	const categoryRoutes = categorySlugs.map<MetadataRoute.Sitemap[number]>((slug) => ({
		url: `${BASE_URL}/categories/${slug}`,
		lastModified: now,
		changeFrequency: "weekly",
		priority: 0.7,
	}));

	const productRoutes = productIds.map<MetadataRoute.Sitemap[number]>((id) => ({
		url: `${BASE_URL}/products/${id}`,
		lastModified: now,
		changeFrequency: "weekly",
		priority: 0.8,
	}));

	return [...routes, ...categoryRoutes, ...productRoutes];
}
