"use client";

import { AuthProvider } from "@/components/auth/AuthContext";
import AuthForm from "@/components/auth/AuthForm";
import AuthLayout from "@/components/auth/AuthLayout";

export default function AuthPage() {
	return (
		<AuthProvider>
			<AuthLayout>
				<AuthForm />
			</AuthLayout>
		</AuthProvider>
	);
}
