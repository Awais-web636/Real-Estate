import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { properties } from '../../data/properties';
import PropertyCard from '../properties/PropertyCard';

const FeaturedProperties = () => {
  const featuredProperties = properties.filter(property => property.featured);

  const scrollLeft = () => {
    const container = document.getElementById('featured-properties-container');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('featured-properties-container');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Properties</h2>
            <p className="text-gray-600">Explore our handpicked selection of premium properties</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300"
              aria-label="Scroll left"
            >
              <FaChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300"
              aria-label="Scroll right"
            >
              <FaChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div
          id="featured-properties-container"
          className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4"
          style={{ scrollbarWidth: 'none' }}
        >
          {featuredProperties.map(property => (
            <div key={property.id} className="min-w-[300px] md:min-w-[350px]">
              <PropertyCard property={property} />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/properties"
            className="inline-flex items-center text-teal-600 hover:text-teal-800 transition duration-300"
          >
            <span className="font-medium">View all properties</span>
            <FaChevronRight className="ml-1 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
