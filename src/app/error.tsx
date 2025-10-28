"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { RefreshCw } from "lucide-react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	return (
		<html>
			<body className="bg-white text-gray-900 antialiased">
				<Header />
				<main>
					<section className="flex min-h-[70vh] items-center px-4 sm:px-6 lg:px-8">
						<div className="mx-auto w-full max-w-3xl text-center">
							<p className="mb-3 text-sm font-semibold tracking-wider text-gray-500">Unexpected Error</p>
							<h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">
								Something went wrong
							</h1>
							<p className="mx-auto mb-8 max-w-xl text-gray-600">
								We encountered an unexpected error. You can try reloading the page or come back later.
							</p>
							<div className="flex items-center justify-center gap-3">
								<Button size="lg" onClick={() => reset()} icon={<RefreshCw className="h-5 w-5" />}>
									Try again
								</Button>
							</div>
							{process.env.NODE_ENV === "development" && error?.message && (
								<p className="mt-6 text-xs text-gray-400">{error.message}</p>
							)}
						</div>
					</section>
				</main>
				<Footer />
			</body>
		</html>
	);
}
