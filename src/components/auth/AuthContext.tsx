"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type AuthFormType = "login" | "signup" | "verify-email" | "forgot-password";

interface AuthContextType {
	currentForm: AuthFormType;
	setCurrentForm: (form: AuthFormType) => void;
	userEmail: string;
	setUserEmail: (email: string) => void;
	isLoading: boolean;
	setIsLoading: (loading: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [currentForm, setCurrentForm] = useState<AuthFormType>("login");
	const [userEmail, setUserEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	return (
		<AuthContext.Provider
			value={{
				currentForm,
				setCurrentForm,
				userEmail,
				setUserEmail,
				isLoading,
				setIsLoading,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}
