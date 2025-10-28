'use client';

import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';
import { Check, Eye, Lock, Mail } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    farmers: 0,
    products: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const targetValues = {
      farmers: 50000,
      products: 200,
      satisfaction: 98
    };

    const animateValue = (key: keyof typeof targetValues, target: number, duration: number) => {
      const startTime = Date.now();
      const startValue = 0;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function: easeOutQuart (starts fast, slows down)
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);

        setAnimatedValues(prev => ({
          ...prev,
          [key]: currentValue
        }));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    // Start animations with slight delays
    setTimeout(() => animateValue('farmers', targetValues.farmers, 2000), 100);
    setTimeout(() => animateValue('products', targetValues.products, 1500), 300);
    setTimeout(() => animateValue('satisfaction', targetValues.satisfaction, 1800), 500);
  }, []);

  return (
    <div className="min-h-screen relative">

      <Image src="/media/auth-background.png" alt="Agricultural background" width={0} height={0} className="object-cover object-top w-full h-full fixed inset-0" priority sizes='100vw' />
      <Header />

      <div className="absolute inset-0 top-[66px] pt-4 z-10 flex items-center justify-between px-4 sm:px-6 lg:px-24">
        {/* Left side - Text content */}
        <div className="flex-1 max-w-2xl pr-8">
          <div className="text-white">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Cultivating connections,<br />
              growing futures
            </h1>
            <p className="text-xl text-gray-200 mb-12">
              Join thousands of farmers and suppliers building<br />
              sustainable agriculture together.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-white mb-2">
                  {animatedValues.farmers >= 1000
                    ? `${(animatedValues.farmers / 1000).toFixed(0)}K+`
                    : `${animatedValues.farmers}+`
                  }
                </div>
                <div className="text-gray-300">Active Farmers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">
                  {animatedValues.products}+
                </div>
                <div className="text-gray-300">Products</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">
                  {animatedValues.satisfaction}%
                </div>
                <div className="text-gray-300">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="w-full max-w-md">
          {/* Login Form */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="mb-8">
              <h1 className="text-3xl font-semibold tracking-tight mb-2">Welcome back</h1>
              <p className="text-gray-600">Enter your credentials to access your account</p>
            </div>

            <form className="space-y-5">
              <div>
                <label htmlFor="login-email" className="block text-sm font-medium mb-2">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="login-email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="login-password" className="block text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="login-password"
                    className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" id="remember" />
                    <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-gray-900 peer-checked:border-gray-900 transition-all"></div>
                    <Check className="w-3 h-3 text-white absolute top-1 left-1 hidden peer-checked:block pointer-events-none" />
                  </div>
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">Forgot password?</a>
              </div>

              <Button type="submit" fullWidth size="lg" icon={<Lock className="w-5 h-5" />}>
                Log In
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  icon={
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  }
                >
                  Google
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  icon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  }
                >
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
