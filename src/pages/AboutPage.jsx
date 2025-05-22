import React, { useEffect } from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CtaSection from '../components/home/CtaSection';
import StatsSection from '../components/home/StatsSection';
import { FaCheckCircle } from 'react-icons/fa';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us | LuxeRealty';
  }, []);

  return (
    <div className="pt-24 bg-gray-50">
       <div className="flex items-center text-sm text-gray-600 mb-6 pl-8">
           <Link to="/" className="hover:text-teal-600 transition duration-300 flex items-center">
            <FaHome className="h-4 w-4 mr-1" />
            <span>Home</span>
          </Link>
        </div>
      {/* Hero Section */}
      <div className="bg-teal-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About LuxeRealty</h1>
            <p className="text-xl text-teal-100">
              We're more than just a real estate agency. We're your partners in finding the perfect property
              and creating a seamless experience every step of the way.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2007, LuxeRealty began with a simple mission: to provide exceptional service
                  and create memorable experiences for our clients in their property journey.
                </p>
                <p>
                  Over the years, we've grown from a small team of three passionate real estate professionals
                  to a respected agency with more than 50 expert agents across multiple offices. Despite our growth,
                  we've maintained our commitment to personalized service and building lasting relationships.
                </p>
                <p>
                  What sets us apart is our deep knowledge of local markets, our attention to detail, and our
                  dedication to understanding each client's unique needs and preferences. We believe that finding
                  the perfect property should be an exciting journey, not a stressful process.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg"
                alt="The LuxeRealty team"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose LuxeRealty</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine industry expertise with personalized service to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expertise & Experience',
                points: [
                  'Expert agents with deep market knowledge',
                  '18+ years in the real estate industry',
                  'Specialized knowledge of luxury properties',
                  'Continuous training and education'
                ]
              },
              {
                title: 'Client-Centered Approach',
                points: [
                  'Personalized service tailored to your needs',
                  'Transparent communication throughout the process',
                  'Responsive and accessible team',
                  'Long-term relationship building'
                ]
              },
              {
                title: 'Innovative Solutions',
                points: [
                  'Virtual tours and 3D property viewing',
                  'Advanced property search technology',
                  'Digital transaction management',
                  'Data-driven market analysis'
                ]
              }
            ].map((section, idx) => (
              <div className="bg-gray-50 p-8 rounded-lg" key={idx}>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.points.map((point, index) => (
                    <li className="flex items-start" key={index}>
                      <FaCheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600">
              These principles guide every interaction and decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '01', title: 'Integrity', desc: 'We operate with honesty and transparency in every interaction, ensuring our clients\' interests always come first.' },
              { number: '02', title: 'Excellence', desc: 'We strive for excellence in every aspect of our service, continuously improving to exceed expectations.' },
              { number: '03', title: 'Innovation', desc: 'We embrace new technologies and fresh ideas to enhance the real estate experience for our clients.' },
              { number: '04', title: 'Community', desc: 'We\'re committed to giving back and making a positive impact in the communities where we live and work.' }
            ].map((value, i) => (
              <div className="text-center p-6" key={i}>
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600">{value.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default AboutPage;
