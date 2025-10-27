import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  image: string;
  alt: string;
  href?: string;
}

export default function CategoryCard({ title, image, alt, href = '#' }: CategoryCardProps) {
  return (
    <Link href={href}>
      <div className="group relative h-80 rounded-xl overflow-hidden bg-gray-100 cursor-pointer">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
        <div className="absolute bottom-8 left-8">
          <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">{title}</h3>
          <span className="text-sm text-white/90 font-medium inline-flex items-center space-x-1">
            <span>Explore</span>
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
