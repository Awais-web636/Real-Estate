import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-20 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg)',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900/75 z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let our expert team guide you through the process. From searching to closing, we're with you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/properties"
              className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-8 py-4 rounded-md transition duration-300 text-center"
            >
              Browse Properties
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-gray-800 font-medium px-8 py-4 rounded-md transition duration-300 text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
