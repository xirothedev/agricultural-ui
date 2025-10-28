import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

const buttonVariants = {
  primary: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-900',
  outline: 'border border-gray-200 text-gray-900 hover:bg-gray-50 focus:ring-gray-900',
  ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:ring-gray-900',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-600',
  success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-600',
};

const buttonSizes = {
  sm: 'px-3 py-1.5 text-xs font-medium',
  md: 'px-4 py-2 text-sm font-medium',
  lg: 'px-6 py-3 text-sm font-medium',
  xl: 'px-8 py-4 text-base font-medium',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        'inline-flex cursor-pointer items-center justify-center rounded-lg font-medium transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',

        // Variant styles
        buttonVariants[variant],

        // Size styles
        buttonSizes[size],

        // Full width
        fullWidth && 'w-full',

        // Custom className
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
}
