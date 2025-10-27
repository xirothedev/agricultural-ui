import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-[600px] rounded-2xl overflow-hidden bg-gray-100">
          <video
            src="/media/thumnail.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 sm:px-12 lg:px-16 max-w-2xl">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white mb-6 tracking-tight leading-tight">
                Fresh from Farm to Table
              </h1>
              <p className="text-lg text-white/90 mb-8 font-light">
                Discover premium quality agricultural products, organic produce, and sustainable farming solutions.
              </p>
              <button className="bg-white text-gray-900 px-8 py-3.5 rounded-full font-medium hover:bg-gray-100 transition-colors inline-flex items-center space-x-2">
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
