import CategoryCard from "@/components/ui/CategoryCard";

const categories = [
	{
		title: "Fresh Produce",
		image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=600&h=800&fit=crop",
		alt: "Fresh Produce",
		slug: "fresh-produce",
	},
	{
		title: "Grains & Seeds",
		image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=800&fit=crop",
		alt: "Grains & Seeds",
		slug: "grains-seeds",
	},
	{
		title: "Farm Equipment",
		image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=600&h=800&fit=crop",
		alt: "Farm Equipment",
		slug: "farm-equipment",
	},
];

export default function Categories() {
	return (
		<section className="px-4 py-12 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
					{categories.map((category, index) => (
						<CategoryCard
							key={index}
							title={category.title}
							image={category.image}
							alt={category.alt}
							href={{ pathname: `/categories/${category.slug}` }}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
