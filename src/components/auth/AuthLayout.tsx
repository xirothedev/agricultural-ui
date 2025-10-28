"use client";

import { ReactNode, useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";

interface AuthLayoutProps {
	children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
	const [animatedValues, setAnimatedValues] = useState({
		farmers: 0,
		products: 0,
		satisfaction: 0,
	});

	useEffect(() => {
		const targetValues = {
			farmers: 50000,
			products: 200,
			satisfaction: 98,
		};

		const animateValue = (key: keyof typeof targetValues, target: number, duration: number) => {
			const startTime = Date.now();
			const startValue = 0;

			const animate = () => {
				const elapsed = Date.now() - startTime;
				const progress = Math.min(elapsed / duration, 1);

				// Easing function: easeOutQuart (starts fast, slows down)
				const easeOutQuart = 1 - Math.pow(1 - progress, 4);
				const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);

				setAnimatedValues((prev) => ({
					...prev,
					[key]: currentValue,
				}));

				if (progress < 1) {
					requestAnimationFrame(animate);
				}
			};

			requestAnimationFrame(animate);
		};

		// Start animations with slight delays
		setTimeout(() => animateValue("farmers", targetValues.farmers, 2000), 100);
		setTimeout(() => animateValue("products", targetValues.products, 1500), 300);
		setTimeout(() => animateValue("satisfaction", targetValues.satisfaction, 1800), 500);
	}, []);

	return (
		<div className="relative min-h-screen">
			<Image
				src="/media/auth-background.png"
				alt="Agricultural background"
				width={0}
				height={0}
				className="fixed inset-0 h-full w-full object-cover object-top"
				priority
				sizes="100vw"
			/>
			<Header />

			<div className="absolute inset-0 top-[66px] z-10 flex items-center justify-between px-4 pt-4 sm:px-6 lg:px-24">
				{/* Left side - Text content */}
				<div className="max-w-2xl flex-1 pr-8">
					<div className="text-white">
						<h1 className="mb-6 text-5xl leading-tight font-bold">
							Cultivating connections,
							<br />
							growing futures
						</h1>
						<p className="mb-12 text-xl text-gray-200">
							Join thousands of farmers and suppliers building
							<br />
							sustainable agriculture together.
						</p>

						{/* Statistics */}
						<div className="grid grid-cols-3 gap-8">
							<div>
								<div className="mb-2 text-4xl font-bold text-white">
									{animatedValues.farmers >= 1000
										? `${(animatedValues.farmers / 1000).toFixed(0)}K+`
										: `${animatedValues.farmers}+`}
								</div>
								<div className="text-gray-300">Active Farmers</div>
							</div>
							<div>
								<div className="mb-2 text-4xl font-bold text-white">{animatedValues.products}+</div>
								<div className="text-gray-300">Products</div>
							</div>
							<div>
								<div className="mb-2 text-4xl font-bold text-white">{animatedValues.satisfaction}%</div>
								<div className="text-gray-300">Satisfaction</div>
							</div>
						</div>
					</div>
				</div>

				{/* Right side - Auth Form */}
				<div className="w-full max-w-md">{children}</div>
			</div>
		</div>
	);
}
