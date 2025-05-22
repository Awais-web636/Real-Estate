import React from 'react';
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from 'react-icons/md';

const ContactInfo = () => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>

      <div className="space-y-6">
        {/* Address */}
        <div className="flex items-start">
          <div className="bg-teal-100 p-3 rounded-full flex-shrink-0 mr-4">
            <MdLocationOn className="h-6 w-6 text-teal-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Office Address</h3>
            <p className="text-gray-600">
              1234 Luxury Avenue<br />
              Suite 567<br />
              Beverly Hills, CA 90210
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start">
          <div className="bg-teal-100 p-3 rounded-full flex-shrink-0 mr-4">
            <MdPhone className="h-6 w-6 text-teal-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
            <p className="text-gray-600">
              <a href="tel:+15551234567" className="hover:text-teal-600 transition duration-300">
                (555) 123-4567
              </a>
            </p>
            <p className="text-gray-600">
              <a href="tel:+15559876543" className="hover:text-teal-600 transition duration-300">
                (555) 987-6543
              </a>
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start">
          <div className="bg-teal-100 p-3 rounded-full flex-shrink-0 mr-4">
            <MdEmail className="h-6 w-6 text-teal-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
            <p className="text-gray-600">
              <a href="mailto:info@luxerealty.com" className="hover:text-teal-600 transition duration-300">
                info@luxerealty.com
              </a>
            </p>
            <p className="text-gray-600">
              <a href="mailto:support@luxerealty.com" className="hover:text-teal-600 transition duration-300">
                support@luxerealty.com
              </a>
            </p>
          </div>
        </div>

        {/* Business Hours */}
        <div className="flex items-start">
          <div className="bg-teal-100 p-3 rounded-full flex-shrink-0 mr-4">
            <MdAccessTime className="h-6 w-6 text-teal-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Business Hours</h3>
            <div className="grid grid-cols-2 gap-y-1 text-gray-600">
              <span>Monday - Friday:</span>
              <span>9:00 AM - 6:00 PM</span>
              <span>Saturday:</span>
              <span>10:00 AM - 4:00 PM</span>
              <span>Sunday:</span>
              <span>Closed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
