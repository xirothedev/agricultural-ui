import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "Categories | AGRO",
		template: "%s | Categories | AGRO",
	},
	description: "Discover curated categories across agriculture: produce, grains, dairy, and equipment.",
	alternates: { canonical: "/categories" },
};

export default function CategoriesLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return children;
}
