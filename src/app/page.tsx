import Header from "@/components/layout/Header";
import Banner from "@/components/sections/Banner";
import BestSellers from "@/components/sections/BestSellers";
import Categories from "@/components/sections/Categories";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

export default function Home() {
	return (
		<div className="bg-white text-gray-900 antialiased">
			<Header />
			<main>
				<Script id="ld-website" type="application/ld+json" strategy="afterInteractive">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "WebSite",
						name: "AGRO",
						url: "https://agricultural.xirothedev.site/",
						potentialAction: {
							"@type": "SearchAction",
							target: "https://agricultural.xirothedev.site/search?q={search_term_string}",
							"query-input": "required name=search_term_string",
						},
					})}
				</Script>
				<Script id="ld-organization" type="application/ld+json" strategy="afterInteractive">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Organization",
						name: "AGRO",
						url: "https://agricultural.xirothedev.site/",
						logo: "https://agricultural.xirothedev.site/media/logo.png",
						sameAs: ["https://www.facebook.com/", "https://www.instagram.com/", "https://twitter.com/"],
						contactPoint: [
							{
								"@type": "ContactPoint",
								contactType: "customer support",
								areaServed: "VN",
								availableLanguage: ["vi", "en"],
							},
						],
					})}
				</Script>
				<Hero />
				<Categories />
				<FeaturedProducts />
				<Banner />
				<BestSellers />
				<Features />
				<Newsletter />
			</main>
			<Footer />
		</div>
	);
}
