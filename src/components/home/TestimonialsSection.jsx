import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Jennifer Wilson',
    role: 'Homeowner',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg',
    quote: 'LuxeRealty made finding our dream home a breeze. Sarah was incredibly knowledgeable about the neighborhood and helped us negotiate a great price. We couldn\'t be happier with our new home!',
    rating: 5
  },
  {
    id: 2,
    name: 'Robert Johnson',
    role: 'Property Investor',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    quote: 'As a property investor, I\'ve worked with many agencies, but LuxeRealty\'s market analysis and investment advice is unparalleled. Michael helped me acquire three properties that have all seen excellent appreciation.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'First-time Buyer',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    quote: 'Buying my first home was intimidating, but Olivia at LuxeRealty guided me through every step. She patiently answered all my questions and found a perfect starter home within my budget. Highly recommend!',
    rating: 5
  },
  {
    id: 4,
    name: 'David Miller',
    role: 'Commercial Client',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    quote: 'LuxeRealty helped our business find the ideal office space in a competitive market. Their commercial property expertise and attention to our specific needs made all the difference. Excellent service!',
    rating: 4
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <FaStar
        key={index}
        className={`h-5 w-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-16 bg-teal-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-teal-100 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience working with LuxeRealty
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 min-h-[300px]">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="rounded-full object-cover w-full h-full border-4 border-teal-100"
                />
              </div>
              <div>
                <div className="flex mb-4">
                  {renderStars(testimonials[activeIndex].rating)}
                </div>
                <blockquote className="text-lg text-gray-700 italic mb-6">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">{testimonials[activeIndex].name}</p>
                  <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  activeIndex === index ? 'bg-white' : 'bg-teal-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none hidden md:block"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="h-6 w-6 text-teal-700" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none hidden md:block"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="h-6 w-6 text-teal-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
