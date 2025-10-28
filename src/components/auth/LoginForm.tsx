"use client";

import { useState } from "react";
import { Eye, Lock, Mail, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { useAuth } from "./AuthContext";

export default function LoginForm() {
	const { setCurrentForm, isLoading, setIsLoading } = useAuth();
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		rememberMe: false,
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		// TODO: Implement actual login logic
		console.log("Login data:", formData);

		// Simulate API call
		setTimeout(() => {
			setIsLoading(false);
			// For demo purposes, redirect to verify email if email contains 'verify'
			if (formData.email.includes("verify")) {
				setCurrentForm("verify-email");
			}
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
				<h1 className="mb-2 text-3xl font-semibold tracking-tight">Welcome back</h1>
				<p className="text-gray-600">Enter your credentials to access your account</p>
			</div>

			<form onSubmit={handleSubmit} className="space-y-5">
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

				<div className="flex items-center justify-between">
					<label className="flex cursor-pointer items-center space-x-2">
						<div className="relative">
							<input
								type="checkbox"
								name="rememberMe"
								checked={formData.rememberMe}
								onChange={handleInputChange}
								className="peer sr-only"
								id="remember"
							/>
							<div className="h-5 w-5 rounded border-2 border-gray-300 transition-all peer-checked:border-gray-900 peer-checked:bg-gray-900"></div>
							<Check className="pointer-events-none absolute top-1 left-1 hidden h-3 w-3 text-white peer-checked:block" />
						</div>
						<span className="text-sm text-gray-600">Remember me</span>
					</label>
					<button
						type="button"
						onClick={() => setCurrentForm("forgot-password")}
						className="cursor-pointer text-sm font-medium text-gray-900 transition-colors hover:text-gray-600"
					>
						Forgot password?
					</button>
				</div>

				<Button type="submit" fullWidth size="lg" icon={<Lock className="h-5 w-5" />} disabled={isLoading}>
					{isLoading ? "Signing in..." : "Log In"}
				</Button>
			</form>

			<div className="mt-6">
				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<div className="w-full border-t border-white/60"></div>
					</div>
					<div className="relative flex justify-center text-sm">
						<span className="px-4 text-gray-500">Or continue with</span>
					</div>
				</div>

				<div className="mt-6 grid grid-cols-2 gap-3">
					<Button
						variant="outline"
						size="lg"
						icon={
							<svg className="h-5 w-5" viewBox="0 0 24 24">
								<path
									fill="#4285F4"
									d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
								/>
								<path
									fill="#34A853"
									d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
								/>
								<path
									fill="#FBBC05"
									d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
								/>
								<path
									fill="#EA4335"
									d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
								/>
							</svg>
						}
					>
						Google
					</Button>
					<Button
						variant="outline"
						size="lg"
						icon={
							<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
							</svg>
						}
					>
						GitHub
					</Button>
				</div>
			</div>

			<div className="mt-6 text-center">
				<p className="text-sm text-gray-600">
					Don&apos;t have an account?{" "}
					<button
						onClick={() => setCurrentForm("signup")}
						className="cursor-pointer font-medium text-gray-900 transition-colors hover:text-gray-600"
					>
						Sign up
					</button>
				</p>
			</div>
		</div>
	);
}
