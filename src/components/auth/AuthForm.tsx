"use client";

import { useAuth } from "./AuthContext";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import VerifyEmailForm from "./VerifyEmailForm";
import ForgotPasswordForm from "./ForgotPasswordForm";

export default function AuthForm() {
	const { currentForm } = useAuth();

	switch (currentForm) {
		case "login":
			return <LoginForm />;
		case "signup":
			return <SignupForm />;
		case "verify-email":
			return <VerifyEmailForm />;
		case "forgot-password":
			return <ForgotPasswordForm />;
		default:
			return <LoginForm />;
	}
}
