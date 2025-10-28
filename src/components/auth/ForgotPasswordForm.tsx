"use client";

import { useState } from "react";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { useAuth } from "./AuthContext";

export default function ForgotPasswordForm() {
	const { setCurrentForm, isLoading, setIsLoading } = useAuth();
	const [email, setEmail] = useState("");
	const [isEmailSent, setIsEmailSent] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!email) {
			alert("Please enter your email address");
			return;
		}

		setIsLoading(true);

		// TODO: Implement actual forgot password logic
		console.log("Sending reset email to:", email);

		// Simulate API call
		setTimeout(() => {
			setIsLoading(false);
			setIsEmailSent(true);
		}, 1000);
	};

	const handleResendEmail = async () => {
		setIsLoading(true);

		// TODO: Implement actual resend logic
		console.log("Resending reset email to:", email);

		// Simulate API call
		setTimeout(() => {
			setIsLoading(false);
			alert("Reset email sent again");
		}, 1000);
	};

	if (isEmailSent) {
		return (
			<div className="rounded-2xl border border-white/60 bg-white/90 p-8 shadow-xl backdrop-blur">
				<div className="text-center">
					<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
						<CheckCircle className="h-8 w-8 text-green-600" />
					</div>

					<h1 className="mb-2 text-3xl font-semibold tracking-tight">Check your email</h1>
					<p className="mb-8 text-gray-600">
						We&apos;ve sent password reset instructions to{" "}
						<span className="font-medium text-gray-900">{email}</span>
					</p>

					<div className="space-y-4">
						<Button
							onClick={handleResendEmail}
							variant="outline"
							fullWidth
							size="lg"
							icon={<Mail className="h-5 w-5" />}
							disabled={isLoading}
						>
							{isLoading ? "Sending..." : "Resend email"}
						</Button>

						<Button onClick={() => setCurrentForm("login")} fullWidth size="lg">
							Back to login
						</Button>
					</div>

					<div className="mt-6 text-sm text-gray-600">
						<p className="mb-2">Didn&apos;t receive the email?</p>
						<ul className="space-y-1 text-left">
							<li>• Check your spam folder</li>
							<li>• Make sure you entered the correct email</li>
							<li>• Wait a few minutes and try again</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="rounded-2xl border border-gray-200 bg-white p-8">
			<div className="mb-8">
				<button
					onClick={() => setCurrentForm("login")}
					className="mb-4 flex items-center text-gray-600 transition-colors hover:text-gray-900"
				>
					<ArrowLeft className="mr-2 h-4 w-4" />
					Back to login
				</button>
				<h1 className="mb-2 text-3xl font-semibold tracking-tight">Forgot password?</h1>
				<p className="text-gray-600">
					No worries! Enter your email and we&apos;ll send you reset instructions.
				</p>
			</div>

			<form onSubmit={handleSubmit} className="space-y-6">
				<div>
					<label htmlFor="email" className="mb-2 block text-sm font-medium">
						Email
					</label>
					<div className="relative">
						<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<Mail className="h-5 w-5 text-gray-400" />
						</div>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full rounded-lg border border-gray-200 bg-gray-50/80 py-3 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-gray-900 focus:outline-none"
							placeholder="you@example.com"
							required
						/>
					</div>
				</div>

				<Button type="submit" fullWidth size="lg" icon={<Mail className="h-5 w-5" />} disabled={isLoading}>
					{isLoading ? "Sending..." : "Send reset instructions"}
				</Button>
			</form>

			<div className="mt-6 text-center">
				<p className="text-sm text-gray-600">
					Remember your password?{" "}
					<button
						onClick={() => setCurrentForm("login")}
						className="font-medium text-gray-900 transition-colors hover:text-gray-600"
					>
						Sign in
					</button>
				</p>
			</div>
		</div>
	);
}
