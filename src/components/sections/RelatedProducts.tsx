import ProductCard from '@/components/ui/ProductCard';

const relatedProducts = [
  {
    title: 'Organic Carrots',
    category: 'Root Vegetables',
    price: '$3.49/lb',
    image: 'https://images.unsplash.com/photo-1550828520-4cb496926fc9?w=600&h=800&fit=crop',
    alt: 'Fresh Carrots',
  },
  {
    title: 'Bell Peppers',
    category: 'Fresh Produce',
    price: '$5.99/lb',
    image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=600&h=800&fit=crop',
    alt: 'Bell Peppers',
  },
  {
    title: 'Fresh Lettuce',
    category: 'Leafy Greens',
    price: '$2.99/head',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=800&fit=crop',
    alt: 'Lettuce',
  },
  {
    title: 'Organic Cucumbers',
    category: 'Fresh Produce',
    price: '$1.99/each',
    image: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=600&h=800&fit=crop',
    alt: 'Cucumbers',
  },
];

export default function RelatedProducts() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight mb-10">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product, index) => (
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
