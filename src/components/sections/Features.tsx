import { Truck, Leaf, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Fresh products delivered same day',
  },
  {
    icon: Leaf,
    title: '100% Organic',
    description: 'Certified organic produce',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Guarantee',
    description: '100% satisfaction guaranteed',
  },
];

export default function Features() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
