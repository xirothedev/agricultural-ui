'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';

interface ProductTabsProps {
  product: {
    name: string;
    rating: number;
    reviewCount: number;
  };
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState('description');

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }`}
      />
    ));
  };

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'nutrition', label: 'Nutrition' },
    { id: 'reviews', label: `Reviews (${product.reviewCount})` },
  ];

  return (
    <section className="pb-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto pt-16">
        <div className="flex border-b border-gray-200 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-medium border-b-2 transition-colors ${activeTab === tab.id
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Description Tab */}
        {activeTab === 'description' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">About This Product</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our organic tomatoes are grown with care on certified organic farms using sustainable practices. Each tomato is vine-ripened to perfection, ensuring you receive produce at its peak flavor and nutritional value.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                These tomatoes are perfect for a variety of uses - slice them for sandwiches, dice them for salads, or simmer them into rich sauces. Their balanced acidity and natural sweetness make them a versatile kitchen staple.
              </p>
              <h4 className="font-semibold mb-3">Growing Practices</h4>
              <p className="text-gray-600 leading-relaxed">
                Grown using integrated pest management, crop rotation, and natural composting methods. Our farmers prioritize soil health and biodiversity to produce the highest quality organic tomatoes.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">Storage & Handling</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Store at room temperature away from direct sunlight for best flavor. Once fully ripe, you can refrigerate to extend shelf life. Remove from refrigerator 30 minutes before eating for optimal taste.
              </p>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h4 className="font-semibold mb-4">Quick Facts</h4>
                <dl className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <dt className="text-gray-600">Origin</dt>
                    <dd className="font-medium">Local Farms, USA</dd>
                  </div>
                  <div className="flex justify-between text-sm">
                    <dt className="text-gray-600">Season</dt>
                    <dd className="font-medium">Year-round</dd>
                  </div>
                  <div className="flex justify-between text-sm">
                    <dt className="text-gray-600">Shelf Life</dt>
                    <dd className="font-medium">5-7 days</dd>
                  </div>
                  <div className="flex justify-between text-sm">
                    <dt className="text-gray-600">Certification</dt>
                    <dd className="font-medium">USDA Organic</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        )}

        {/* Nutrition Tab */}
        {activeTab === 'nutrition' && (
          <div className="max-w-3xl">
            <h3 className="text-2xl font-semibold mb-6 tracking-tight">Nutritional Information</h3>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex justify-between items-baseline mb-6 pb-4 border-b-2 border-gray-900">
                <span className="font-semibold">Serving Size</span>
                <span className="text-gray-600">1 medium tomato (123g)</span>
              </div>
              <dl className="space-y-4">
                <div className="flex justify-between text-sm pb-3 border-b border-gray-200">
                  <dt className="font-medium">Calories</dt>
                  <dd className="font-semibold">22</dd>
                </div>
                <div className="flex justify-between text-sm pb-3 border-b border-gray-200">
                  <dt className="font-medium">Total Fat</dt>
                  <dd>0.2g</dd>
                </div>
                <div className="flex justify-between text-sm pb-3 border-b border-gray-200">
                  <dt className="font-medium">Sodium</dt>
                  <dd>6mg</dd>
                </div>
                <div className="flex justify-between text-sm pb-3 border-b border-gray-200">
                  <dt className="font-medium">Total Carbohydrate</dt>
                  <dd>4.8g</dd>
                </div>
                <div className="flex justify-between text-sm pb-3 border-b border-gray-200">
                  <dt className="font-medium">Dietary Fiber</dt>
                  <dd>1.5g</dd>
                </div>
                <div className="flex justify-between text-sm pb-3 border-b border-gray-200">
                  <dt className="font-medium">Sugars</dt>
                  <dd>3.2g</dd>
                </div>
                <div className="flex justify-between text-sm pb-3 border-b border-gray-200">
                  <dt className="font-medium">Protein</dt>
                  <dd>1.1g</dd>
                </div>
                <div className="flex justify-between text-sm pb-3 border-b border-gray-200">
                  <dt className="font-medium">Vitamin C</dt>
                  <dd>17mg (28% DV)</dd>
                </div>
                <div className="flex justify-between text-sm">
                  <dt className="font-medium">Potassium</dt>
                  <dd>292mg (8% DV)</dd>
                </div>
              </dl>
            </div>
            <p className="text-xs text-gray-500 mt-4">* Percent Daily Values are based on a 2,000 calorie diet.</p>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Rating Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-5xl font-semibold mb-2">4.8</div>
                  <div className="flex items-center justify-center mb-2">
                    {renderStars(5)}
                  </div>
                  <p className="text-sm text-gray-600">Based on {product.reviewCount} reviews</p>
                </div>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center space-x-3">
                      <span className="text-sm w-8">{rating}★</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yellow-400"
                          style={{
                            width: rating === 5 ? '85%' : rating === 4 ? '10%' : rating === 3 ? '3%' : '1%'
                          }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-8">
                        {rating === 5 ? 109 : rating === 4 ? 13 : rating === 3 ? 4 : 1}
                      </span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 border border-gray-900 text-gray-900 py-3 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-colors">
                  Write a Review
                </button>
              </div>
            </div>

            {/* Reviews List */}
            <div className="lg:col-span-2 space-y-8">
              {/* Sample Reviews */}
              <div className="border-b border-gray-100 pb-8">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold">Sarah M.</h4>
                      <span className="text-xs text-gray-500">Verified Purchase</span>
                    </div>
                    <div className="flex items-center mb-2">
                      {renderStars(5)}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <h5 className="font-medium mb-2">Best tomatoes I've ever had!</h5>
                <p className="text-gray-600 text-sm leading-relaxed">
                  These tomatoes are absolutely delicious. So much flavor compared to store-bought ones. They arrived fresh and perfectly ripe. Will definitely order again!
                </p>
              </div>

              <div className="border-b border-gray-100 pb-8">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold">Michael R.</h4>
                      <span className="text-xs text-gray-500">Verified Purchase</span>
                    </div>
                    <div className="flex items-center mb-2">
                      {renderStars(5)}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">5 days ago</span>
                </div>
                <h5 className="font-medium mb-2">Perfect for homemade sauce</h5>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Used these for making pasta sauce and they were incredible. The natural sweetness and low acidity made for the best sauce I've ever made. Highly recommend for cooking!
                </p>
              </div>

              <div className="border-b border-gray-100 pb-8">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold">Emily K.</h4>
                      <span className="text-xs text-gray-500">Verified Purchase</span>
                    </div>
                    <div className="flex items-center mb-2">
                      {renderStars(4)}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">1 week ago</span>
                </div>
                <h5 className="font-medium mb-2">Great quality, fast delivery</h5>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Very fresh tomatoes delivered quickly. One was slightly bruised but overall great quality. The organic certification gives me peace of mind.
                </p>
              </div>

              <button className="w-full border border-gray-200 text-gray-900 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Load More Reviews
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
