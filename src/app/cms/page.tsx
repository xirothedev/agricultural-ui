'use client';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';
import {
  AlertCircle,
  CheckCircle,
  Copy,
  Edit,
  Edit2,
  Package,
  Plus,
  Search,
  SlidersHorizontal,
  Trash2,
  Upload,
  X
} from 'lucide-react';
import { useState } from 'react';

export default function CMSDashboard() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedStatus, setSelectedStatus] = useState('All Status');

  const agriculturalProducts = [
    {
      id: 1,
      name: 'Organic Tomato Seeds',
      sku: 'OTS-2024-001',
      category: 'Seeds',
      price: 24.99,
      stock: 156,
      status: 'Published',
      image: '🌱'
    },
    {
      id: 2,
      name: 'Farm Irrigation System',
      sku: 'FIS-2024-002',
      category: 'Equipment',
      price: 159.99,
      stock: 89,
      status: 'Published',
      image: '🚜'
    },
    {
      id: 3,
      name: 'Premium Fertilizer',
      sku: 'PF-2024-003',
      category: 'Supplies',
      price: 49.99,
      stock: 7,
      status: 'Published',
      image: '🌿'
    },
    {
      id: 4,
      name: 'Garden Tool Set',
      sku: 'GTS-2024-004',
      category: 'Tools',
      price: 89.99,
      stock: 43,
      status: 'Draft',
      image: '🛠️'
    },
    {
      id: 5,
      name: 'Greenhouse Cover',
      sku: 'GC-2024-005',
      category: 'Equipment',
      price: 129.99,
      stock: 67,
      status: 'Published',
      image: '🏠'
    }
  ];

  const categories = [
    'All Categories',
    'Seeds',
    'Equipment',
    'Supplies',
    'Tools',
    'Livestock',
    'Machinery'
  ];

  const statuses = [
    'All Status',
    'Published',
    'Draft',
    'Archived'
  ];

  const openAddModal = () => {
    setShowAddModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeAddModal = () => {
    setShowAddModal(false);
    document.body.style.overflow = 'auto';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-green-100 text-green-800';
      case 'Draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'Archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStockColor = (stock: number) => {
    if (stock < 10) return 'text-red-600';
    if (stock < 50) return 'text-yellow-600';
    return 'text-gray-600';
  };

  return (
    <div className="bg-gray-50 text-gray-900 antialiased min-h-screen">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mt-[66px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight mb-2">Product Management</h1>
            <p className="text-gray-600">Add, edit, and manage your agricultural product catalog</p>
          </div>
          <Button
            onClick={openAddModal}
            size="lg"
            icon={<Plus className="w-4 h-4" />}
          >
            Add Product
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Total Products</span>
              <Package className="w-4 h-4 text-gray-400" />
            </div>
            <p className="text-3xl font-semibold tracking-tight">247</p>
            <p className="text-sm text-green-600 mt-2">+12 this month</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Published</span>
              <CheckCircle className="w-4 h-4 text-gray-400" />
            </div>
            <p className="text-3xl font-semibold tracking-tight">218</p>
            <p className="text-sm text-gray-600 mt-2">88% of total</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Draft</span>
              <Edit className="w-4 h-4 text-gray-400" />
            </div>
            <p className="text-3xl font-semibold tracking-tight">29</p>
            <p className="text-sm text-gray-600 mt-2">12% of total</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Low Stock</span>
              <AlertCircle className="w-4 h-4 text-gray-400" />
            </div>
            <p className="text-3xl font-semibold tracking-tight">8</p>
            <p className="text-sm text-red-600 mt-2">Needs attention</p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                />
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all text-sm"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all text-sm"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
              <button className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <SlidersHorizontal className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Stock</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {agriculturalProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                          <span className="text-2xl">{product.image}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{product.name}</p>
                          <p className="text-xs text-gray-500">SKU: {product.sku}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{product.category}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">${product.price.toFixed(2)}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={getStockColor(product.stock)}>{product.stock} units</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors">
                          <Copy className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">Showing <span className="font-medium">1-5</span> of <span className="font-medium">247</span> products</p>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="px-3 py-2" disabled>
                Previous
              </Button>
              <Button size="sm" className="px-3 py-2">1</Button>
              <Button variant="outline" size="sm" className="px-3 py-2">2</Button>
              <Button variant="outline" size="sm" className="px-3 py-2">3</Button>
              <span className="px-2 text-gray-500">...</span>
              <Button variant="outline" size="sm" className="px-3 py-2">50</Button>
              <Button variant="outline" size="sm" className="px-3 py-2">
                Next
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <h2 className="text-xl font-semibold">Add New Product</h2>
              <Button
                onClick={closeAddModal}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              {/* Product Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                <input
                  type="text"
                  placeholder="Enter product name"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                />
              </div>

              {/* SKU and Category */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">SKU</label>
                  <input
                    type="text"
                    placeholder="e.g., AGR-2024-001"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all">
                    <option>Select category</option>
                    <option>Seeds</option>
                    <option>Equipment</option>
                    <option>Supplies</option>
                    <option>Tools</option>
                    <option>Livestock</option>
                    <option>Machinery</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  rows={4}
                  placeholder="Enter product description"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Price and Stock */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price ($)</label>
                  <input
                    type="number"
                    placeholder="0.00"
                    step="0.01"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Stock</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Images</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-600 mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                </div>
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all">
                  <option>Published</option>
                  <option>Draft</option>
                  <option>Archived</option>
                </select>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-end space-x-3 rounded-b-2xl">
              <Button
                onClick={closeAddModal}
                variant="outline"
                size="md"
                className="px-5 py-2.5"
              >
                Cancel
              </Button>
              <Button size="md" className="px-5 py-2.5">
                Add Product
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
