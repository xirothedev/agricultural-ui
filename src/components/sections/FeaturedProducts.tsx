import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';

const featuredProducts = [
  {
    title: 'Organic Tomatoes',
    category: 'Fresh Produce',
    price: '$4.99/lb',
    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=600&h=800&fit=crop',
    alt: 'Organic Tomatoes',
  },
  {
    title: 'Premium Wheat',
    category: 'Grains',
    price: '$24.99/bag',
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&h=800&fit=crop',
    alt: 'Premium Wheat',
  },
  {
    title: 'Free-Range Eggs',
    category: 'Dairy & Eggs',
    price: '$6.99/dozen',
    image: 'https://images.unsplash.com/photo-1639194335563-d56b83f0060c?w=600&h=800&fit=crop',
    alt: 'Fresh Eggs',
    badge: {
      text: 'New',
      type: 'new' as const,
    },
  },
  {
    title: 'Raw Organic Honey',
    category: 'Natural Products',
    price: '$12.99',
    originalPrice: '$15.99',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=800&fit=crop',
    alt: 'Organic Honey',
    badge: {
      text: '-20%',
      type: 'sale' as const,
    },
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-semibold tracking-tight">Featured Products</h2>
          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 inline-flex items-center space-x-1"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              category={product.category}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              alt={product.alt}
              badge={product.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
