import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  title: string;
  category: string;
  price: string;
  originalPrice?: string;
  image: string;
  alt: string;
  badge?: {
    text: string;
    type: 'new' | 'sale';
  };
  href?: string;
}

export default function ProductCard({
  title,
  category,
  price,
  originalPrice,
  image,
  alt,
  badge,
  href = '#',
}: ProductCardProps) {
  const productSlug = title.toLowerCase().replace(/\s+/g, '-');
  const productHref = href === '#' ? `/products/${productSlug}` : href;

  return (
    <div className="group">
      <Link href={productHref}>
        <div className="relative aspect-3/4 bg-gray-100 rounded-xl overflow-hidden mb-4">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            unoptimized
          />
          <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100">
            <Heart className="w-5 h-5" />
          </button>
          <button className="absolute bottom-4 left-4 right-4 bg-white text-gray-900 py-2.5 rounded-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100">
            Add to Cart
          </button>
          {badge && (
            <div
              className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${badge.type === 'new'
                ? 'bg-black text-white'
                : 'bg-red-500 text-white'
                }`}
            >
              {badge.text}
            </div>
          )}
        </div>
      </Link>
      <div>
        <Link href={productHref}>
          <h3 className="font-medium text-gray-900 mb-1 hover:text-gray-600 transition-colors">{title}</h3>
        </Link>
        <p className="text-sm text-gray-500 mb-2">{category}</p>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">{price}</p>
          {originalPrice && (
            <p className="text-sm text-gray-400 line-through">{originalPrice}</p>
          )}
        </div>
      </div>
    </div>
  );
}
