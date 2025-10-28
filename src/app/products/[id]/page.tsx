import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import RelatedProducts from '@/components/sections/RelatedProducts';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ProductImageGallery from '@/components/ui/ProductImageGallery';
import ProductInfo from '@/components/ui/ProductInfo';
import ProductTabs from '@/components/ui/ProductTabs';

// Mock product data - in a real app, this would come from an API
const getProductData = (id: string) => {
  const products = {
    'organic-tomatoes': {
      name: 'Organic Tomatoes',
      price: '$4.99',
      unit: 'lb',
      rating: 5,
      reviewCount: 128,
      description: 'Fresh, vine-ripened organic tomatoes grown using sustainable farming practices. Hand-picked at peak ripeness to ensure maximum flavor and nutrition. Perfect for salads, sauces, and everyday cooking.',
      features: [
        'USDA Organic Certified',
        'No pesticides or synthetic fertilizers',
        'Locally sourced from family farms',
        'Harvested within 24 hours of delivery',
      ],
      images: [
        'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1561136594-7f68413baa99?w=800&h=800&fit=crop',
      ],
      inStock: true,
      certified: true,
    },
    'premium-wheat': {
      name: 'Premium Wheat',
      price: '$24.99',
      unit: 'bag',
      rating: 4,
      reviewCount: 89,
      description: 'High-quality wheat grains sourced from certified organic farms. Perfect for baking bread, making pasta, or grinding into flour.',
      features: [
        'USDA Organic Certified',
        'Non-GMO verified',
        'Stone-ground processing',
        'Long shelf life',
      ],
      images: [
        'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=800&fit=crop',
      ],
      inStock: true,
      certified: true,
    },
    'free-range-eggs': {
      name: 'Free-Range Eggs',
      price: '$6.99',
      unit: 'dozen',
      rating: 5,
      reviewCount: 156,
      description: 'Fresh free-range eggs from happy, healthy hens. Rich in protein and nutrients, perfect for breakfast, baking, or any recipe.',
      features: [
        'Free-range hens',
        'No antibiotics or hormones',
        'Rich in omega-3 fatty acids',
        'Farm-fresh quality',
      ],
      images: [
        'https://images.unsplash.com/photo-1628176601548-9fc9892b8d7f?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?w=800&h=800&fit=crop',
      ],
      inStock: true,
      certified: false,
    },
  };

  return products[id as keyof typeof products] || products['organic-tomatoes'];
};

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductData(params.id);
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Fresh Produce', href: '/category/fresh-produce' },
    { label: product.name },
  ];

  return (
    <div className="bg-white text-gray-900 antialiased">
      <Header />
      <main>
        <Breadcrumb items={breadcrumbItems} />

        {/* Product Details */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ProductImageGallery images={product.images} alt={product.name} />
              <ProductInfo product={product} />
            </div>
          </div>
        </section>

        <ProductTabs product={product} />
        <RelatedProducts />
      </main>
      <Footer />
    </div>
  );
}
