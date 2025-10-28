import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { UrlObject } from "url";

interface CategoryCardProps {
	title: string;
	image: string;
	alt: string;
	href?: UrlObject;
}

export default function CategoryCard({ title, image, alt, href = { href: "#" } }: CategoryCardProps) {
	return (
		<Link href={href}>
			<div className="group relative h-80 cursor-pointer overflow-hidden rounded-xl bg-gray-100">
				<Image
					src={image}
					alt={alt}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-105"
					unoptimized
				/>
				<div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30"></div>
				<div className="absolute bottom-8 left-8">
					<h3 className="mb-2 text-2xl font-semibold tracking-tight text-white">{title}</h3>
					<span className="inline-flex items-center space-x-1 text-sm font-medium text-white/90">
						<span>Explore</span>
						<ArrowRight className="h-4 w-4" />
					</span>
				</div>
			</div>
		</Link>
	);
}
