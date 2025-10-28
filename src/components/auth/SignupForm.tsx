"use client";

import { useState } from "react";
import { Eye, Lock, Mail, User } from "lucide-react";
import Button from "@/components/ui/Button";
import { useAuth } from "./AuthContext";

export default function SignupForm() {
	const { setCurrentForm, setUserEmail, isLoading, setIsLoading } = useAuth();
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
		agreeToTerms: false,
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (formData.password !== formData.confirmPassword) {
			alert("Passwords do not match");
			return;
		}

		if (!formData.agreeToTerms) {
			alert("Please agree to the terms and conditions");
			return;
		}

		setIsLoading(true);
		setUserEmail(formData.email);

		// TODO: Implement actual signup logic
		console.log("Signup data:", formData);

		// Simulate API call
		setTimeout(() => {
			setIsLoading(false);
			setCurrentForm("verify-email");
		}, 1000);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	return (
		<div className="rounded-2xl border border-white/60 bg-white/90 p-8 shadow-xl backdrop-blur">
			<div className="mb-8">
				<h1 className="mb-2 text-3xl font-semibold tracking-tight">Create account</h1>
				<p className="text-gray-600">Join our community of farmers and suppliers</p>
			</div>

			<form onSubmit={handleSubmit} className="space-y-5">
				<div className="grid grid-cols-2 gap-4">
					<div>
						<label htmlFor="firstName" className="mb-2 block text-sm font-medium">
							First Name
						</label>
						<div className="relative">
							<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<User className="h-5 w-5 text-gray-400" />
							</div>
							<input
								type="text"
								id="firstName"
								name="firstName"
								value={formData.firstName}
								onChange={handleInputChange}
								className="w-full rounded-lg border border-gray-200 bg-gray-50/80 py-3 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-gray-900 focus:outline-none"
								placeholder="John"
								required
							/>
						</div>
					</div>
					<div>
						<label htmlFor="lastName" className="mb-2 block text-sm font-medium">
							Last Name
						</label>
						<div className="relative">
							<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<User className="h-5 w-5 text-gray-400" />
							</div>
							<input
								type="text"
								id="lastName"
								name="lastName"
								value={formData.lastName}
								onChange={handleInputChange}
								className="w-full rounded-lg border border-gray-200 bg-gray-50/80 py-3 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-gray-900 focus:outline-none"
								placeholder="Doe"
								required
							/>
						</div>
					</div>
				</div>

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
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							className="w-full rounded-lg border border-gray-200 bg-gray-50/80 py-3 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-gray-900 focus:outline-none"
							placeholder="you@example.com"
							required
						/>
					</div>
				</div>

				<div>
					<label htmlFor="password" className="mb-2 block text-sm font-medium">
						Password
					</label>
					<div className="relative">
						<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<Lock className="h-5 w-5 text-gray-400" />
						</div>
						<input
							type={showPassword ? "text" : "password"}
							id="password"
							name="password"
							value={formData.password}
							onChange={handleInputChange}
							className="w-full rounded-lg border border-gray-200 bg-gray-50/80 py-3 pr-12 pl-10 focus:border-transparent focus:ring-2 focus:ring-gray-900 focus:outline-none"
							placeholder="••••••••"
							required
							minLength={8}
						/>
						<button
							type="button"
							className="absolute inset-y-0 right-0 flex items-center pr-3"
							onClick={() => setShowPassword(!showPassword)}
						>
							<Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
						</button>
					</div>
				</div>

				<div>
					<label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium">
						Confirm Password
					</label>
					<div className="relative">
						<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<Lock className="h-5 w-5 text-gray-400" />
						</div>
						<input
							type={showConfirmPassword ? "text" : "password"}
							id="confirmPassword"
							name="confirmPassword"
							value={formData.confirmPassword}
							onChange={handleInputChange}
							className="w-full rounded-lg border border-gray-200 bg-gray-50/80 py-3 pr-12 pl-10 focus:border-transparent focus:ring-2 focus:ring-gray-900 focus:outline-none"
							placeholder="••••••••"
							required
						/>
						<button
							type="button"
							className="absolute inset-y-0 right-0 flex items-center pr-3"
							onClick={() => setShowConfirmPassword(!showConfirmPassword)}
						>
							<Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
						</button>
					</div>
				</div>

				<div className="flex items-start space-x-2">
					<div className="relative">
						<input
							type="checkbox"
							name="agreeToTerms"
							checked={formData.agreeToTerms}
							onChange={handleInputChange}
							className="peer sr-only"
							id="agreeToTerms"
						/>
						<div className="mt-0.5 h-5 w-5 rounded border-2 border-gray-300 transition-all peer-checked:border-gray-900 peer-checked:bg-gray-900"></div>
					</div>
					<label htmlFor="agreeToTerms" className="cursor-pointer text-sm text-gray-600">
						I agree to the{" "}
						<a href="#" className="text-gray-900 underline hover:text-gray-600">
							Terms of Service
						</a>{" "}
						and{" "}
						<a href="#" className="text-gray-900 underline hover:text-gray-600">
							Privacy Policy
						</a>
					</label>
				</div>

				<Button type="submit" fullWidth size="lg" icon={<User className="h-5 w-5" />} disabled={isLoading}>
					{isLoading ? "Creating account..." : "Create Account"}
				</Button>
			</form>

			<div className="mt-6 text-center">
				<p className="text-sm text-gray-600">
					Already have an account?{" "}
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
