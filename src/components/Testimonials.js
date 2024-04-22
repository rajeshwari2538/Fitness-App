import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft, FaQuoteRight } from "react-icons/fa";
import { testimonialsData } from '../utils/data';

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(1);

  const handleTestimonialClick = (id) => {
    setSelectedTestimonial(id === selectedTestimonial ? null : id);
  };

  const handleNextTestimonial = () => {
    setSelectedTestimonial((prev) => (prev === testimonialsData.length ? 1 : prev + 1));
  };

  const handlePrevTestimonial = () => {
    setSelectedTestimonial((prev) => (prev === 1 ? testimonialsData.length : prev - 1));
  };

  return (
    <div className="max-w-6xl mt-6 mx-auto relative">
      <div className="flex flex-col md:flex-row-reverse items-center">
        <div className="md:mr-8 relative md:w-[60%]" style={{ textAlign: 'right' }}>
          {selectedTestimonial !== null && (
            <p className="italic text-white md:text-xl text-lg text-wrap mx-4 text-left">{testimonialsData[selectedTestimonial - 1].quote}</p>
          )}
          <div className="flex items-center mt-10 ml-4 md:mt-6">
            <button onClick={handlePrevTestimonial} className="mr-2 border border-neutral-700 rounded-full p-4 text-neutral-600">
              <FaArrowLeft />
            </button>
            <button onClick={handleNextTestimonial} className="text-neutral-600 border border-neutral-700 rounded-full p-4">
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-col mr-[70%] md:mr-0 md:flex-row md:items-center md:mt-0">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="inline-block md:mr-8 relative" style={{ textAlign: 'center' }}>
              <div className="testimonial-container relative">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={`md:w-40 md:h-36 w-24 h-24 rounded-full mb-4 cursor-pointer ${selectedTestimonial === testimonial.id && 'border-2 border-red-400'}`}
                  onClick={() => handleTestimonialClick(testimonial.id)}
                />
                {selectedTestimonial === testimonial.id && (
                  <FaQuoteRight className="absolute -bottom-3 -left-2 text-red-800 text-4xl" />
                )}
                {selectedTestimonial === testimonial.id && (
                  <div className="testimonial-details absolute ml-7 md:right-auto left-[100%] md:left-auto top-0 md:top-full p-2 rounded-lg shadow-md text-center mt-3 md:mt-0" style={{ display: selectedTestimonial === testimonial.id ? 'block' : 'none' }}>
                    <span className="font-semibold text-lg text-white block md:inline-block">{testimonial.name}</span>
                    <span className="text-sm text-neutral-600 block">{testimonial.job}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
