'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  User,
  MapPin,
  CreditCard,
  Package,
  Heart,
  Bell,
  Lock,
  LogOut,
  Camera,
  CheckCircle,
  Plus,
  MoreVertical,
  Truck,
  Mail,
  Smartphone,
  Tag
} from 'lucide-react';
import { useState } from 'react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('personal');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [marketingCommunications, setMarketingCommunications] = useState(true);

  const navigationItems = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'payment', label: 'Payment Methods', icon: CreditCard },
    { id: 'orders', label: 'Order History', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Lock },
  ];

  return (
    <div className="bg-gray-50 text-gray-900 antialiased min-h-screen">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mt-[66px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your account settings and preferences</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-3">
            <nav className="bg-white rounded-xl border border-gray-200 p-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === item.id
                      ? 'bg-gray-50 text-gray-900 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              <div className="border-t border-gray-100 my-2"></div>
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-red-600 transition-colors">
                <LogOut className="w-5 h-5" />
                <span>Log Out</span>
              </button>
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9 space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-xl font-semibold tracking-tight">Profile Information</h2>
                <button className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">Edit</button>
              </div>

              <div className="flex items-start space-x-6 mb-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-linear-to-br from-green-200 to-green-300 flex items-center justify-center text-3xl font-semibold text-green-600">
                    JD
                  </div>
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors shadow-lg">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">John Doe</h3>
                  <p className="text-gray-600 mb-4">farmer.john@agro.com</p>
                  <div className="flex items-center space-x-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                      Premium Farmer
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    defaultValue="John"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    defaultValue="Doe"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    defaultValue="farmer.john@agro.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium mb-2">Farm Name</label>
                  <input
                    type="text"
                    defaultValue="Green Valley Farm"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end space-x-3 mt-6 pt-6 border-t border-gray-100">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                  Cancel
                </button>
                <button className="px-6 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Saved Addresses */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight mb-1">Saved Addresses</h2>
                  <p className="text-sm text-gray-600">Manage your shipping and billing addresses</p>
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                  <Plus className="w-4 h-4" />
                  <span>Add Address</span>
                </button>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 border-2 border-gray-900 rounded-xl bg-gray-50 relative">
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-900 text-white">
                      Default
                    </span>
                    <button className="text-gray-600 hover:text-gray-900">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                  <h3 className="font-medium mb-1">Farm Address</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    123 Farm Road<br />
                    Agricultural District, CA 90210<br />
                    United States
                  </p>
                  <div className="flex items-center space-x-3 mt-4 pt-4 border-t border-gray-200">
                    <button className="text-sm font-medium text-gray-900 hover:text-gray-600">Edit</button>
                    <button className="text-sm font-medium text-gray-600 hover:text-red-600">Remove</button>
                  </div>
                </div>

                <div className="p-4 border border-gray-200 rounded-xl relative hover:border-gray-300 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <span className="h-6"></span>
                    <button className="text-gray-600 hover:text-gray-900">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                  <h3 className="font-medium mb-1">Warehouse</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    456 Storage Ave, Unit 200<br />
                    Agricultural District, CA 90211<br />
                    United States
                  </p>
                  <div className="flex items-center space-x-3 mt-4 pt-4 border-t border-gray-100">
                    <button className="text-sm font-medium text-gray-900 hover:text-gray-600">Edit</button>
                    <button className="text-sm font-medium text-gray-600 hover:text-red-600">Remove</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight mb-1">Recent Orders</h2>
                  <p className="text-sm text-gray-600">Track and manage your orders</p>
                </div>
                <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">View All</a>
              </div>

              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-medium">Order #AGR-2024-0123</h3>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Delivered
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">Placed on January 15, 2024</p>
                    </div>
                    <p className="text-lg font-semibold">$184.97</p>
                  </div>

                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg shrink-0">
                      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23E5E7EB' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='48' fill='%239CA3AF'%3E🌱%3C/text%3E%3C/svg%3E" alt="Product" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium mb-1">Organic Tomato Seeds</h4>
                      <p className="text-sm text-gray-600">Qty: 2 • Premium Quality</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                    <button className="flex-1 px-4 py-2 border border-gray-200 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                      Track Order
                    </button>
                    <button className="flex-1 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>

                <div className="p-4 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-medium">Order #AGR-2024-0089</h3>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                          <Truck className="w-3 h-3 mr-1" />
                          In Transit
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">Placed on January 10, 2024</p>
                    </div>
                    <p className="text-lg font-semibold">$159.99</p>
                  </div>

                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg shrink-0">
                      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23E5E7EB' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='48' fill='%239CA3AF'%3E🚜%3C/text%3E%3C/svg%3E" alt="Product" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium mb-1">Farm Irrigation System</h4>
                      <p className="text-sm text-gray-600">Qty: 1 • Drip Kit 50ft</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                    <button className="flex-1 px-4 py-2 border border-gray-200 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                      Track Order
                    </button>
                    <button className="flex-1 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Settings */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold tracking-tight mb-6">Account Settings</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <div>
                      <h3 className="font-medium">Email Notifications</h3>
                      <p className="text-sm text-gray-600">Receive order updates and promotions</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setEmailNotifications(!emailNotifications)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${emailNotifications ? 'bg-gray-900' : 'bg-gray-200'
                      }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${emailNotifications ? 'translate-x-6' : 'translate-x-1'
                      }`}></span>
                  </button>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-5 h-5 text-gray-600" />
                    <div>
                      <h3 className="font-medium">SMS Notifications</h3>
                      <p className="text-sm text-gray-600">Get text messages for delivery updates</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSmsNotifications(!smsNotifications)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${smsNotifications ? 'bg-gray-900' : 'bg-gray-200'
                      }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${smsNotifications ? 'translate-x-6' : 'translate-x-1'
                      }`}></span>
                  </button>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-3">
                    <Tag className="w-5 h-5 text-gray-600" />
                    <div>
                      <h3 className="font-medium">Marketing Communications</h3>
                      <p className="text-sm text-gray-600">Receive special offers and product news</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMarketingCommunications(!marketingCommunications)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${marketingCommunications ? 'bg-gray-900' : 'bg-gray-200'
                      }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${marketingCommunications ? 'translate-x-6' : 'translate-x-1'
                      }`}></span>
                  </button>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-white rounded-xl border border-red-200 p-6">
              <h2 className="text-xl font-semibold tracking-tight text-red-900 mb-2">Danger Zone</h2>
              <p className="text-sm text-gray-600 mb-6">Irreversible actions for your account</p>

              <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                <div>
                  <h3 className="font-medium text-red-900 mb-1">Delete Account</h3>
                  <p className="text-sm text-red-700">Permanently delete your account and all data</p>
                </div>
                <button className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
