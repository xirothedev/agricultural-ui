'use client';

import { useState } from 'react';
import { Star, ShoppingBag, Heart, CheckCircle, Truck, RefreshCw, ShieldCheck } from 'lucide-react';

interface ProductInfoProps {
  product: {
    name: string;
    price: string;
    unit: string;
    rating: number;
    reviewCount: number;
    description: string;
    features: string[];
    inStock: boolean;
    certified: boolean;
  };
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }`}
      />
    ));
  };

  return (
    <div>
      <div className="flex items-center space-x-2 mb-3">
        {product.inStock && (
          <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
            In Stock
          </span>
        )}
        {product.certified && (
          <span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
            Organic Certified
          </span>
        )}
      </div>

      <h1 className="text-4xl font-semibold tracking-tight mb-3">{product.name}</h1>

      <div className="flex items-center space-x-3 mb-6">
        <div className="flex items-center">
          {renderStars(product.rating)}
        </div>
        <span className="text-sm text-gray-600">({product.reviewCount} reviews)</span>
      </div>

      <div className="flex items-baseline space-x-3 mb-8">
        <span className="text-4xl font-semibold">{product.price}</span>
        <span className="text-xl text-gray-500">/{product.unit}</span>
      </div>

      <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>

      {/* Quantity Selector */}
      <div className="mb-8">
        <label className="block text-sm font-medium mb-3">Quantity ({product.unit})</label>
        <div className="flex items-center space-x-4">
          <button
            onClick={decreaseQty}
            className="w-12 h-12 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <span className="w-4 h-4">−</span>
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            min="1"
            className="w-20 h-12 text-center border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
          <button
            onClick={increaseQty}
            className="w-12 h-12 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <span className="w-4 h-4">+</span>
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <button className="flex-1 bg-gray-900 text-white py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center justify-center space-x-2">
          <ShoppingBag className="w-5 h-5" />
          <span>Add to Cart</span>
        </button>
        <button className="w-full sm:w-14 h-14 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
          <Heart className="w-5 h-5" />
        </button>
      </div>

      {/* Product Features */}
      <div className="border-t border-gray-100 pt-8">
        <h3 className="font-semibold mb-4">Product Features</h3>
        <ul className="space-y-3">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Additional Info */}
      <div className="border-t border-gray-100 mt-8 pt-8 space-y-4">
        <div className="flex items-center space-x-3 text-sm">
          <Truck className="w-5 h-5 text-gray-400" />
          <span className="text-gray-600">Free delivery on orders over $50</span>
        </div>
        <div className="flex items-center space-x-3 text-sm">
          <RefreshCw className="w-5 h-5 text-gray-400" />
          <span className="text-gray-600">30-day return guarantee</span>
        </div>
        <div className="flex items-center space-x-3 text-sm">
          <ShieldCheck className="w-5 h-5 text-gray-400" />
          <span className="text-gray-600">Quality assured</span>
        </div>
      </div>
    </div>
  );
}
