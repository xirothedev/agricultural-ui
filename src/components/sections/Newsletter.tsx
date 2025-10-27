'use client';

export default function Newsletter() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">Stay Connected</h2>
        <p className="text-gray-600 mb-8">
          Subscribe to our newsletter for seasonal offers and farming tips.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
