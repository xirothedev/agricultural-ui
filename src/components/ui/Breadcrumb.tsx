import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { UrlObject } from "url";

interface BreadcrumbItem {
	label: string;
	href?: UrlObject;
}

interface BreadcrumbProps {
	items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
	return (
		<div className="px-4 pt-24 pb-6 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<nav className="flex items-center space-x-2 text-sm text-gray-600">
					{items.map((item, index) => (
						<div key={index} className="flex items-center space-x-2">
							{index > 0 && <ChevronRight className="h-4 w-4" />}
							{item.href ? (
								<Link href={item.href} className="transition-colors hover:text-gray-900">
									{item.label}
								</Link>
							) : (
								<span className="text-gray-900">{item.label}</span>
							)}
						</div>
					))}
				</nav>
			</div>
		</div>
	);
}
