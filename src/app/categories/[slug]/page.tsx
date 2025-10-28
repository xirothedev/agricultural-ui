import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ProductCard from "@/components/ui/ProductCard";

interface CategoryPageProps {
	params: { slug: string };
}

const getCategoryData = (slug: string) => {
	const categories = {
		"fresh-produce": {
			title: "Fresh Produce",
			products: [
				{
					title: "Organic Tomatoes",
					category: "Fresh Produce",
					price: "$4.99/lb",
					image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=600&h=800&fit=crop",
					alt: "Organic Tomatoes",
				},
				{
					title: "Raw Organic Honey",
					category: "Natural Products",
					price: "$12.99",
					originalPrice: "$15.99",
					image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=800&fit=crop",
					alt: "Organic Honey",
					badge: { text: "-20%", type: "sale" as const },
				},
			],
		},
		"grains-seeds": {
			title: "Grains & Seeds",
			products: [
				{
					title: "Premium Wheat",
					category: "Grains",
					price: "$24.99/bag",
					image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&h=800&fit=crop",
					alt: "Premium Wheat",
				},
			],
		},
		"farm-equipment": {
			title: "Farm Equipment",
			products: [
				{
					title: "Heavy-Duty Tractor",
					category: "Equipment",
					price: "$4,999",
					image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=600&h=800&fit=crop",
					alt: "Farm Tractor",
					badge: { text: "New", type: "new" as const },
				},
			],
		},
	} as const;

	return categories[slug as keyof typeof categories] || categories["fresh-produce"];
};

export default function CategoryPage({ params }: CategoryPageProps) {
	const category = getCategoryData(params.slug);
	const breadcrumbItems = [
		{ label: "Home", href: { pathname: "/" } },
		{ label: category.title, href: {} },
	];

	return (
		<div className="bg-white text-gray-900 antialiased">
			<Header />
			<main>
				<Breadcrumb items={breadcrumbItems} />

				<section className="px-4 py-10 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-7xl">
						<div className="mb-8">
							<h1 className="text-3xl font-semibold tracking-tight">{category.title}</h1>
							<p className="mt-2 text-gray-600">
								Explore curated products in {category.title.toLowerCase()}.
							</p>
						</div>

						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
							{category.products.map((product, index) => (
								<ProductCard key={index} {...product} />
							))}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
