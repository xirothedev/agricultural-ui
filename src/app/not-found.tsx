import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="bg-white text-gray-900 antialiased">
			<Header />
			<main>
				<section className="flex min-h-[70vh] items-center px-4 sm:px-6 lg:px-8">
					<div className="mx-auto w-full max-w-3xl text-center">
						<p className="mb-3 text-sm font-semibold tracking-wider text-gray-500">Error 404</p>
						<h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">Page not found</h1>
						<p className="mx-auto mb-8 max-w-xl text-gray-600">
							The page you are looking for doesn&apos;t exist or has been moved. Try going back to the
							homepage or exploring our product categories.
						</p>
						<div className="flex items-center justify-center gap-3">
							<Link href={{ pathname: "/" }}>
								<Button size="lg">Go to Homepage</Button>
							</Link>
							<Link href={{ pathname: "/categories" }}>
								<Button size="lg" variant="outline">
									Browse Categories
								</Button>
							</Link>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
