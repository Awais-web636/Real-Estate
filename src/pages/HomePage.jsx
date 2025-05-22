import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedProperties from '../components/home/FeaturedProperties';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import StatsSection from '../components/home/StatsSection';
import CtaSection from '../components/home/CtaSection';

const HomePage = () => {
  useEffect(() => {
    // Update the document title when component mounts
    document.title = 'LuxeRealty - Find Your Dream Home';

    // Add custom styles for the homepage
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes scrollDown {
        0% { transform: translateY(0); opacity: 1; }
        75% { transform: translateY(8px); opacity: 0.5; }
        100% { transform: translateY(0); opacity: 1; }
      }

      .animate-scrollDown {
        animation: scrollDown 1.5s ease-in-out infinite;
      }

      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }

      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);

    // Cleanup when component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div>
      <HeroSection />
      <FeaturedProperties />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;
