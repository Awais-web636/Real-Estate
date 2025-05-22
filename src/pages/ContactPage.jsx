import React, { useEffect } from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/utils/ContactInfo';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Us | LuxeRealty';
  }, []);

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center text-sm text-gray-600 mb-6 pl-8">
           <Link to="/" className="hover:text-teal-600 transition duration-300 flex items-center">
            <FaHome className="h-4 w-4 mr-1" />
            <span>Home</span>
          </Link>
        </div>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're here to help with all your real estate needs. Reach out to us with any questions
            or to schedule a consultation with one of our expert agents.
          </p>
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <ContactForm />
          <ContactInfo />
        </div>

        {/* Map */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Location</h2>
          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe
              title="LuxeRealty Location"
              src="https://maps.google.com/maps?q=1234%20Luxury%20Avenue,%20Beverly%20Hills,%20CA%2090210&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="mt-4 text-center text-gray-600">
            <p>1234 Luxury Avenue, Suite 567, Beverly Hills, CA 90210</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
