import CategoryCard from '@/components/ui/CategoryCard';

const categories = [
  {
    title: 'Fresh Produce',
    image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=600&h=800&fit=crop',
    alt: 'Fresh Produce',
  },
  {
    title: 'Grains & Seeds',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=800&fit=crop',
    alt: 'Grains & Seeds',
  },
  {
    title: 'Farm Equipment',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=600&h=800&fit=crop',
    alt: 'Farm Equipment',
  },
];

export default function Categories() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              image={category.image}
              alt={category.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
