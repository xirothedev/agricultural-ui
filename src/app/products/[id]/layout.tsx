import type { Metadata } from "next";

// Mock product data (same as in page.tsx). Replace with real API call later.
const getProductData = (id: string) => {
	const products = {
		"organic-tomatoes": {
			name: "Organic Tomatoes",
			description:
				"Fresh, vine-ripened organic tomatoes grown using sustainable farming practices. Hand-picked at peak ripeness to ensure maximum flavor and nutrition. Perfect for salads, sauces, and everyday cooking.",
			unit: "lb",
			images: ["https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=800&h=800&fit=crop"],
		},
		"premium-wheat": {
			name: "Premium Wheat",
			description:
				"High-quality wheat grains sourced from certified organic farms. Perfect for baking bread, making pasta, or grinding into flour.",
			unit: "bag",
			images: ["https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=800&fit=crop"],
		},
		"free-range-eggs": {
			name: "Free-Range Eggs",
			description:
				"Fresh free-range eggs from happy, healthy hens. Rich in protein and nutrients, perfect for breakfast, baking, or any recipe.",
			unit: "dozen",
			images: ["https://images.unsplash.com/photo-1628176601548-9fc9892b8d7f?w=800&h=800&fit=crop"],
		},
	} as const;
	return products[id as keyof typeof products] || products["organic-tomatoes"];
};

interface ProductsLayoutProps {
  children: React.ReactNode;
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
	const product = getProductData(params.id);
	const pageUrl = `https://agriculture.xirothedev.site/products/${params.id}`;
	const title = `${product.name} | AGRO`;
	const description = product.description;
	const image = product.images?.[0] ?? "https://agriculture.xirothedev.site/media/seo.png";

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
			images: [{ url: image, width: 1200, height: 630, alt: product.name }],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
		},
		robots: { index: true, follow: true },
		keywords: [product.name, product.unit, "agriculture", "AGRO"],
		category: "Product",
	};
}

export default function ProductsItemLayout({ children }: ProductsLayoutProps) {
	return children;
}
