interface CornerRibbonProps {
	text: string;
	variant?: "new" | "sale" | "custom";
	className?: string;
}

export default function CornerRibbon({ text, variant = "custom", className }: CornerRibbonProps) {
	const colorClass =
		variant === "new"
			? "bg-black text-white"
			: variant === "sale"
				? "bg-red-500 text-white"
				: "bg-gray-900 text-white";

	return (
		<div
			className={`pointer-events-none absolute top-0 left-0 h-28 w-28 overflow-hidden select-none ${className ?? ""}`}
		>
			<div
				className={`absolute -top-6 -left-12 w-40 -rotate-45 text-center font-semibold tracking-wider uppercase shadow-2xl ${colorClass}`}
			>
				<div className="pt-8 pr-8 pb-4">{text}</div>
			</div>
		</div>
	);
}
