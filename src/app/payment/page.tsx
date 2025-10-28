'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Lock,
  HelpCircle,
  Check,
  User,
  Truck,
  CreditCard,
  Building2,
  ShieldCheck,
  Award,
  CheckCircle
} from 'lucide-react';
import { useState } from 'react';

export default function PaymentPage() {
  const [sameAddress, setSameAddress] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <div className="bg-gray-50 text-gray-900 antialiased min-h-screen">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mt-[66px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Payment Form */}
          <div className="lg:col-span-7">
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-medium">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">Information</span>
                </div>
                <div className="flex-1 h-px bg-gray-900 mx-4"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-medium">2</div>
                  <span className="text-sm font-medium">Payment</span>
                </div>
                <div className="flex-1 h-px bg-gray-200 mx-4"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center text-sm font-medium">3</div>
                  <span className="text-sm text-gray-400">Complete</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Contact</h3>
                    <p className="text-sm text-gray-600">farmer@agro.com</p>
                  </div>
                </div>
                <button className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">Edit</button>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <Truck className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Ship to</h3>
                      <p className="text-sm text-gray-600">123 Farm Road, Agricultural District, CA 90210</p>
                    </div>
                  </div>
                  <button className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">Edit</button>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <h2 className="text-xl font-semibold tracking-tight mb-6">Payment Method</h2>

              {/* Payment Options */}
              <div className="space-y-3 mb-6">
                <label className="relative flex items-center p-4 border-2 border-gray-900 rounded-xl cursor-pointer bg-gray-50">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="sr-only peer"
                  />
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="w-5 h-5 text-gray-900" />
                      <span className="font-medium">Credit or Debit Card</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect width='48' height='32' rx='4' fill='%231434CB'/%3E%3Ccircle cx='18' cy='16' r='8' fill='%23EB001B'/%3E%3Ccircle cx='30' cy='16' r='8' fill='%23FF5F00'/%3E%3C/svg%3E" alt="Mastercard" className="h-6" />
                      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect width='48' height='32' rx='4' fill='%231A1F71'/%3E%3Cpath d='M17 11h-4l-2 10h4l2-10zm8 0l-3 10h4l2-7 1 7h3l1-10h-4l-1 5-1-5h-2zm10 0h-4l-2 10h4l.5-2h2.5l.5 2h4l-3-10zm-1 6h-1.5l1-4 .5 4z' fill='%23fff'/%3E%3C/svg%3E" alt="Visa" className="h-6" />
                      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect width='48' height='32' rx='4' fill='%23016FD0'/%3E%3Cpath d='M16 11l-2 10h3l2-10h-3zm9 0h-3l-2 7 1-7h-3l-2 10h3l1-3 1 3h3l-1-4 2 4h3l-3-10z' fill='%23fff'/%3E%3C/svg%3E" alt="Amex" className="h-6" />
                    </div>
                  </div>
                </label>

                <label className="relative flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="sr-only peer"
                  />
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#003087">
                        <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 00-.795.68l-.04.22-.63 3.993-.03.17a.804.804 0 01-.795.679H7.605a.567.567 0 01-.556-.47c-.145-.863.767-4.92.767-4.92s.232-1.487.294-1.863c.064-.376.42-.68.795-.68h1.486c4.04 0 7.204-1.64 8.124-6.377.035-.18.063-.357.086-.53.36.085.689.2.982.348.435.22.803.49 1.098.823.18.2.326.418.437.65z" />
                        <path d="M18.666 7.13c-.03.14-.062.282-.096.427-.921 4.738-4.086 6.377-8.125 6.377H9.96c-.376 0-.732.304-.796.68-.062.376-.293 1.863-.293 1.863s-.912 4.057-.767 4.92a.567.567 0 00.556.47h3.457c.328 0 .607-.24.658-.564l.027-.14.627-3.976.04-.22a.66.66 0 01.659-.564h.416c3.527 0 6.287-1.432 7.092-5.575.336-1.733.162-3.178-.654-4.186-.25-.308-.563-.563-.928-.764-.073-.04-.15-.078-.228-.114z" fill="#0070E0" />
                      </svg>
                      <span className="font-medium">PayPal</span>
                    </div>
                  </div>
                </label>

                <label className="relative flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    checked={paymentMethod === 'bank'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="sr-only peer"
                  />
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-3">
                      <Building2 className="w-5 h-5 text-gray-600" />
                      <span className="font-medium">Bank Transfer</span>
                    </div>
                  </div>
                </label>
              </div>

              {/* Card Details Form */}
              {paymentMethod === 'card' && (
                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <div>
                    <label className="block text-sm font-medium mb-2">Card Number</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <CreditCard className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Cardholder Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM / YY"
                        maxLength={7}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">CVV</label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="123"
                          maxLength={3}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                          <HelpCircle className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Billing Address */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <h2 className="text-xl font-semibold tracking-tight mb-6">Billing Address</h2>

              <label className="flex items-center space-x-3 mb-4 cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={sameAddress}
                    onChange={(e) => setSameAddress(e.target.checked)}
                    className="sr-only peer"
                    id="same-address"
                  />
                  <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-gray-900 peer-checked:border-gray-900 transition-all"></div>
                  <Check className="w-3 h-3 text-white absolute top-1 left-1 hidden peer-checked:block pointer-events-none" />
                </div>
                <span className="text-sm font-medium">Same as shipping address</span>
              </label>

              {!sameAddress && (
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Address</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">City</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">State</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">ZIP</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Pay Button */}
            <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-sm flex items-center justify-center space-x-2">
              <Lock className="w-5 h-5" />
              <span>Pay $184.97</span>
            </button>

            <p className="text-center text-xs text-gray-500 mt-4">
              Your payment information is encrypted and secure
            </p>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-8">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-xl font-semibold tracking-tight mb-6">Order Summary</h2>

                {/* Order Items */}
                <div className="space-y-4 mb-6">
                  <div className="flex space-x-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg shrink-0 overflow-hidden">
                      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23E5E7EB' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='48' fill='%239CA3AF'%3E🌱%3C/text%3E%3C/svg%3E" alt="Product" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium mb-1">Organic Tomato Seeds</h3>
                      <p className="text-sm text-gray-600 mb-2">Premium Quality / 100 seeds</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">Qty: 2</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">$24.99</p>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg shrink-0 overflow-hidden">
                      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23E5E7EB' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='48' fill='%239CA3AF'%3E🚜%3C/text%3E%3C/svg%3E" alt="Product" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium mb-1">Farm Irrigation System</h3>
                      <p className="text-sm text-gray-600 mb-2">Drip Irrigation Kit / 50ft</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">Qty: 1</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">$159.99</p>
                    </div>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Promo code"
                      className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    />
                    <button className="px-4 py-2.5 bg-gray-100 text-gray-900 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors">
                      Apply
                    </button>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">$184.98</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">$4.99</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">$14.40</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-green-600">
                    <span>Discount (FARM10)</span>
                    <span className="font-medium">-$19.40</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-2xl font-semibold tracking-tight">$184.97</span>
                </div>

                {/* Security Badges */}
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center space-x-6 text-gray-400">
                    <div className="flex items-center space-x-2">
                      <ShieldCheck className="w-5 h-5" />
                      <span className="text-xs">Secure</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Lock className="w-5 h-5" />
                      <span className="text-xs">Encrypted</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5" />
                      <span className="text-xs">Verified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Money Back Guarantee */}
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-green-900 mb-1">30-Day Money Back Guarantee</h3>
                    <p className="text-sm text-green-700">Free returns on all orders. No questions asked.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
