import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft, FaQuoteRight } from "react-icons/fa";
import avatar1 from "../assets/testimonials/avatar1.jpg";
import avatar2 from "../assets/testimonials/avatar2.jpg";
import avatar3 from "../assets/testimonials/avatar3.jpg";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      image: avatar1,
      name: "Sandra Phillips",
      job: "Crossfitter",
      quote: "In the pursuit of fitness, every drop of sweat is a testament to your dedication. Embrace the burn, for it's in the fire of effort that strength is forged. Let each rep be a step closer to the best version of yourself."
    },
    {
      id: 2,
      image: avatar2,
      name: "Jack Morrison",
      job: "Bodybuilder",
      quote: "Muscles are sculpted not just in the gym, but in the mind's relentless pursuit of progress. Embrace the challenge of each lift, for it's in the struggle that true growth occurs. Remember, it's not just about building the body, but also strengthening the spirit."
    },
    {
      id: 3,
      image: avatar3,
      name: "Olivia Brooks",
      job: "Athlete",
      quote: "On the field of competition, every stride is a testament to your commitment to excellence. Embrace the pain of training, for it's in the discomfort that champions are born. Let your determination be the fuel that propels you to victory, one race, one game at a time."
    }
  ];

  const [selectedTestimonial, setSelectedTestimonial] = useState(1); // Set initial state to 1

  const handleNextTestimonial = () => {
    setSelectedTestimonial(prev => {
      if (prev === testimonialsData.length) {
        return 1;
      } else {
        return prev + 1;
      }
    });
  };

  const handlePrevTestimonial = () => {
    setSelectedTestimonial(prev => {
      if (prev === 1) {
        return testimonialsData.length;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <div className="max-w-6xl mt-6 mx-auto relative">
      <div className="flex items-center">
        {testimonialsData.map(testimonial => (
          <div key={testimonial.id} className="inline-block mr-8 relative">
            <div className="testimonial-container relative">
              <img src={testimonial.image} alt={testimonial.name} className={`w-44 h-32 rounded-full mb-2 cursor-pointer ${selectedTestimonial === testimonial.id && 'border-2 border-red-400'}`} onClick={() => setSelectedTestimonial(testimonial.id)} />
              {selectedTestimonial === testimonial.id && (
                <FaQuoteRight className="absolute -bottom-3 -right-2 text-red-800 text-4xl" />
              )}
              {selectedTestimonial === testimonial.id && (
                <div className="testimonial-details absolute left-0 right-0 top-full p-2 rounded-lg shadow-md text-center mt-3">
                  <span className="font-semibold text-lg text-white block">{testimonial.name}</span>
                  <span className="text-sm text-gray-600 block">{testimonial.job}</span>
                </div>
              )}
            </div>
          </div>
        ))}
        <div className=" text-white text-lg text-left mt-28">
          {selectedTestimonial !== null && (
            <p className="italic" style={{ width: '600px',marginLeft: "100px" }}>{testimonialsData[selectedTestimonial - 1].quote}</p>
          )}
          <div className="flex items-center mt-20 ml-[6.2rem]">
            <button onClick={handlePrevTestimonial} className="mr-2 border rounded-full p-4 text-gray-500">
              <FaArrowLeft />
            </button>
            <button onClick={handleNextTestimonial} className="text-gray-500 border rounded-full p-4">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
