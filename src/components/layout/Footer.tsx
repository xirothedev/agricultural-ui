import { Twitter, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';

const footerLinks = {
  shop: [
    { name: 'Fresh Produce', href: '#' },
    { name: 'Grains & Seeds', href: '#' },
    { name: 'Dairy Products', href: '#' },
    { name: 'Equipment', href: '#' },
    { name: 'Supplies', href: '#' },
  ],
  support: [
    { name: 'Contact Us', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Delivery Info', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Bulk Orders', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Our Farms', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Facebook, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-lg mb-4 tracking-tight">AGRO</h3>
            <p className="text-sm text-gray-600 mb-4">
              Premium agricultural products from trusted farmers.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-9 h-9 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.shop.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 sm:mb-0">© 2025 AGRO. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            {[
              { alt: 'Visa', src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=40&h=25&fit=crop' },
              { alt: 'Mastercard', src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=40&h=25&fit=crop' },
              { alt: 'Amex', src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=40&h=25&fit=crop' },
              { alt: 'PayPal', src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=40&h=25&fit=crop' }
            ].map(({ alt, src }) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                width={40}
                height={25}
                className="h-6 opacity-60"
                unoptimized
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
