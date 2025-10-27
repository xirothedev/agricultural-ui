import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="pt-24 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              {index > 0 && <ChevronRight className="w-4 h-4" />}
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900">{item.label}</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
