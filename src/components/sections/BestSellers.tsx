import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';

const bestSellers = [
  {
    title: 'Organic Carrots',
    category: 'Root Vegetables',
    price: '$3.49/lb',
    image: 'https://images.unsplash.com/photo-1550828520-4cb496926fc9?w=600&h=800&fit=crop',
    alt: 'Fresh Carrots',
  },
  {
    title: 'Farm Fresh Milk',
    category: 'Dairy Products',
    price: '$5.99/gallon',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&h=800&fit=crop',
    alt: 'Fresh Milk',
  },
  {
    title: 'Sweet Corn',
    category: 'Fresh Produce',
    price: '$0.99/ear',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=800&fit=crop',
    alt: 'Corn',
  },
  {
    title: 'Russet Potatoes',
    category: 'Root Vegetables',
    price: '$2.99/5lb bag',
    image: 'https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?w=600&h=800&fit=crop',
    alt: 'Potatoes',
  },
];

export default function BestSellers() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-semibold tracking-tight">Best Sellers</h2>
          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 inline-flex items-center space-x-1"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              category={product.category}
              price={product.price}
              image={product.image}
              alt={product.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
