import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "Products | AGRO",
		template: "%s | Products | AGRO",
	},
	description: "Browse premium agricultural products including fresh produce, grains, dairy, and equipment.",
	alternates: { canonical: "/products" },
};

export default function ProductsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return children;
}
