import Image from 'next/image';

export default function Banner() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-96 rounded-2xl overflow-hidden bg-gray-900">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&h=600&fit=crop"
            alt="Banner"
            fill
            className="object-cover opacity-40"
            unoptimized
          />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-2xl">
              <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4 tracking-tight">
                Harvest Season Sale
              </h2>
              <p className="text-lg text-white/90 mb-8 font-light">
                Special discounts on seasonal produce and farming supplies. Limited time offer.
              </p>
              <button className="bg-white text-gray-900 px-8 py-3.5 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Shop Sale
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
