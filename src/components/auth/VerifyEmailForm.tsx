"use client";

import Button from "@/components/ui/Button";
import { ArrowLeft, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

export default function VerifyEmailForm() {
	const { setCurrentForm, userEmail, isLoading, setIsLoading } = useAuth();
	const [otp, setOtp] = useState(["", "", "", "", "", ""]);
	const [timeLeft, setTimeLeft] = useState(60);
	const [canResend, setCanResend] = useState(false);

	useEffect(() => {
		if (timeLeft > 0) {
			const timer = setTimeout(() => {
				setTimeLeft((prev) => {
					const newTime = prev - 1;
					if (newTime === 0) {
						setCanResend(true);
					}
					return newTime;
				});
			}, 1000);
			return () => clearTimeout(timer);
		}
	}, [timeLeft]);

	const handleOtpChange = (index: number, value: string) => {
		if (value.length > 1) return; // Only allow single character

		const newOtp = [...otp];
		newOtp[index] = value;
		setOtp(newOtp);

		// Auto-focus next input
		if (value && index < 5) {
			const nextInput = document.getElementById(`otp-${index + 1}`);
			nextInput?.focus();
		}
	};

	const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
		if (e.key === "Backspace" && !otp[index] && index > 0) {
			const prevInput = document.getElementById(`otp-${index - 1}`);
			prevInput?.focus();
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const otpCode = otp.join("");

		if (otpCode.length !== 6) {
			alert("Please enter the complete 6-digit code");
			return;
		}

		setIsLoading(true);

		// TODO: Implement actual OTP verification logic
		console.log("Verifying OTP:", otpCode);

		// Simulate API call
		setTimeout(() => {
			setIsLoading(false);
			// For demo purposes, always succeed
			alert("Email verified successfully!");
			// Redirect to dashboard or login
			setCurrentForm("login");
		}, 1000);
	};

	const handleResendOtp = async () => {
		setIsLoading(true);

		// TODO: Implement actual resend OTP logic
		console.log("Resending OTP to:", userEmail);

		// Simulate API call
		setTimeout(() => {
			setIsLoading(false);
			setTimeLeft(60);
			setCanResend(false);
			setOtp(["", "", "", "", "", ""]);
			alert("New OTP sent to your email");
		}, 1000);
	};

	return (
		<div className="rounded-2xl border border-white/60 bg-white/90 p-8 shadow-xl backdrop-blur">
			<div className="mb-8">
				<button
					onClick={() => setCurrentForm("login")}
					className="mb-4 flex items-center text-gray-600 transition-colors hover:text-gray-900"
				>
					<ArrowLeft className="mr-2 h-4 w-4" />
					Back to login
				</button>
				<h1 className="mb-2 text-3xl font-semibold tracking-tight">Verify your email</h1>
				<p className="text-gray-600">
					We&apos;ve sent a 6-digit code to <span className="font-medium text-gray-900">{userEmail}</span>
				</p>
			</div>

			<form onSubmit={handleSubmit} className="space-y-6">
				<div>
					<label className="mb-4 block text-center text-sm font-medium">Enter verification code</label>
					<div className="flex justify-center space-x-3">
						{otp.map((digit, index) => (
							<input
								key={index}
								id={`otp-${index}`}
								type="text"
								inputMode="numeric"
								pattern="[0-9]*"
								maxLength={1}
								value={digit}
								onChange={(e) => handleOtpChange(index, e.target.value)}
								onKeyDown={(e) => handleKeyDown(index, e)}
								className="h-12 w-12 rounded-lg border border-gray-200 bg-gray-50/80 text-center text-xl font-semibold focus:border-transparent focus:ring-2 focus:ring-gray-900 focus:outline-none"
								required
							/>
						))}
					</div>
				</div>

				<Button
					type="submit"
					fullWidth
					size="lg"
					icon={<Mail className="h-5 w-5" />}
					disabled={isLoading || otp.join("").length !== 6}
				>
					{isLoading ? "Verifying..." : "Verify Email"}
				</Button>
			</form>

			<div className="mt-6 space-y-4 text-center">
				<div className="text-sm text-gray-600">
					{canResend ? (
						<button
							onClick={handleResendOtp}
							disabled={isLoading}
							className="font-medium text-gray-900 transition-colors hover:text-gray-600"
						>
							Resend code
						</button>
					) : (
						<span>Resend code in {timeLeft}s</span>
					)}
				</div>

				<div className="text-sm text-gray-600">
					Didn&apos;t receive the code?{" "}
					<button
						onClick={() => setCurrentForm("signup")}
						className="font-medium text-gray-900 transition-colors hover:text-gray-600"
					>
						Change email
					</button>
				</div>
			</div>
		</div>
	);
}
