import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdHome, MdArrowBack } from 'react-icons/md';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'Page Not Found | LuxeRealty';
  }, []);

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <span className="text-9xl font-bold text-teal-600">404</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md transition duration-300"
          >
            <MdHome className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-md transition duration-300"
          >
            <MdArrowBack className="mr-2 h-5 w-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
