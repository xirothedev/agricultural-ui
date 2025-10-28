import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://agricultural.xirothedev.site"),
	title: {
		default: "AGRO - Premium Agricultural Products",
		template: "%s | AGRO",
	},
	description: "Discover premium quality agricultural products, organic produce, and sustainable farming solutions.",
	keywords: [
		"agro",
		"agricultural",
		"agricultural products",
		"agricultural products online",
		"agricultural products marketplace",
		"agricultural products store",
		"agricultural products shop",
		"agricultural products online store",
		"agricultural products online shop",
		"agriculture",
		"organic",
		"fresh produce",
		"grains",
		"dairy",
		"farm equipment",
		"sustainable farming",
		"marketplace",
	],
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "vi_VN",
		siteName: "AGRO",
		title: "AGRO - Premium Agricultural Products",
		description:
			"Discover premium quality agricultural products, organic produce, and sustainable farming solutions.",
		url: "/",
		images: [
			{
				url: "/media/seo.png",
				width: 1200,
				height: 630,
				alt: "AGRO - Premium Agricultural Products",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "AGRO - Premium Agricultural Products",
		description:
			"Discover premium quality agricultural products, organic produce, and sustainable farming solutions.",
		images: ["/media/seo.png"],
		creator: "@agro",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-snippet": -1,
			"max-image-preview": "large",
			"max-video-preview": -1,
		},
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/favicon.ico",
	},
	applicationName: "AGRO",
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
	],
	category: "E-commerce",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
