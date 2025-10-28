import type { Metadata } from "next";

const getCategoryData = (slug: string) => {
	const categories = {
		"fresh-produce": {
			title: "Fresh Produce",
			products: [
				{
					image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=600&h=800&fit=crop",
				},
			],
		},
		"grains-seeds": {
			title: "Grains & Seeds",
			products: [
				{
					image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&h=800&fit=crop",
				},
			],
		},
		"farm-equipment": {
			title: "Farm Equipment",
			products: [
				{
					image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=600&h=800&fit=crop",
				},
			],
		},
	} as const;
	return categories[slug as keyof typeof categories] || categories["fresh-produce"];
};

interface CategoryLayoutProps {
  children: React.ReactNode;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	const category = getCategoryData(params.slug);
	const pageUrl = `https://agriculture.xirothedev.site/categories/${params.slug}`;
	const title = `${category.title} | AGRO`;
	const description = `Explore curated products in ${category.title.toLowerCase()}.`;
	const image = category.products?.[0]?.image ?? "https://agriculture.xirothedev.site/media/seo.png";

	return {
		title,
		description,
		alternates: { canonical: pageUrl },
		openGraph: {
			type: "website",
			siteName: "AGRO",
			title,
			description,
			url: pageUrl,
			images: [{ url: image, width: 1200, height: 630, alt: category.title }],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
		},
		robots: { index: true, follow: true },
		keywords: [category.title, "category", "agriculture", "AGRO"],
		category: "Category",
	};
}

export default function CategoryItemLayout({ children }: CategoryLayoutProps) {
	return children;
}
