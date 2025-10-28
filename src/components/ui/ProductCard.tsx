import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import CornerRibbon from "./CornerRibbon";

interface ProductCardProps {
	title: string;
	category: string;
	price: string;
	originalPrice?: string;
	image: string;
	alt: string;
	badge?: {
		text: string;
		type: "new" | "sale";
	};
	href?: string;
}

export default function ProductCard({
	title,
	category,
	price,
	originalPrice,
	image,
	alt,
	badge,
	href = "#",
}: ProductCardProps) {
	const productSlug = title.toLowerCase().replace(/\s+/g, "-");
	const productHref = { pathname: href === "#" ? `/products/${productSlug}` : href };

	return (
		<div className="group">
			<Link href={productHref}>
				<div className="relative mb-4 aspect-3/4 overflow-hidden rounded-xl bg-gray-100">
					<Image
						src={image}
						alt={alt}
						fill
						className="object-cover transition-transform duration-500 group-hover:scale-105"
						unoptimized
					/>
					<button className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-gray-100">
						<Heart className="h-5 w-5" />
					</button>
					<button className="absolute right-4 bottom-4 left-4 rounded-lg bg-white py-2.5 font-medium text-gray-900 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-gray-100">
						Add to Cart
					</button>
					{badge && <CornerRibbon text={badge.text} variant={badge.type === "new" ? "new" : "sale"} />}
				</div>
			</Link>
			<div>
				<Link href={productHref}>
					<h3 className="mb-1 font-medium text-gray-900 transition-colors hover:text-gray-600">{title}</h3>
				</Link>
				<p className="mb-2 text-sm text-gray-500">{category}</p>
				<div className="flex items-center space-x-2">
					<p className="font-semibold">{price}</p>
					{originalPrice && <p className="text-sm text-gray-400 line-through">{originalPrice}</p>}
				</div>
			</div>
		</div>
	);
}
