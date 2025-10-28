import Header from '@/components/layout/Header';
import Banner from '@/components/sections/Banner';
import BestSellers from '@/components/sections/BestSellers';
import Categories from '@/components/sections/Categories';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import Features from '@/components/sections/Features';
import Hero from '@/components/sections/Hero';
import Newsletter from '@/components/sections/Newsletter';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="bg-white text-gray-900 antialiased">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Banner />
        <BestSellers />
        <Features />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
