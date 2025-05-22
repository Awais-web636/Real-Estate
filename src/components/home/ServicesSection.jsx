import React from 'react';
import {
  FaHome,
  FaChartLine,
  FaCompass,
  FaKey,
  FaClock,
  FaShieldAlt
} from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'Property Listings',
    description: 'Browse our extensive collection of premium properties in the most sought-after locations.',
    icon: <FaHome className="w-12 h-12 text-teal-500" />
  },
  {
    id: 2,
    title: 'Market Analysis',
    description: 'Get insights into market trends and property values to make informed decisions.',
    icon: <FaChartLine className="w-12 h-12 text-teal-500" />
  },
  {
    id: 3,
    title: 'Property Tours',
    description: 'Schedule virtual or in-person tours with our experienced real estate agents.',
    icon: <FaCompass className="w-12 h-12 text-teal-500" />
  },
  {
    id: 4,
    title: 'Buying Assistance',
    description: 'Expert guidance throughout the buying process, from offer to closing.',
    icon: <FaKey className="w-12 h-12 text-teal-500" />
  },
  {
    id: 5,
    title: 'Fast Response',
    description: 'Our team is committed to responding quickly to all your real estate needs.',
    icon: <FaClock className="w-12 h-12 text-teal-500" />
  },
  {
    id: 6,
    title: 'Secure Transactions',
    description: 'Rest easy knowing your property transactions are handled with the utmost security.',
    icon: <FaShieldAlt className="w-12 h-12 text-teal-500" />
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of real estate services designed to meet all your property needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 p-8 rounded-lg transition duration-300 hover:shadow-lg hover:transform hover:-translate-y-1"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
