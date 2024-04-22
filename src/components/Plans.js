import React, { useState } from 'react';
import FAQ from "../components/FAQ";
import { plansData } from '../utils/data'; 

const Plans = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='max-w-6xl mx-auto'>
      <div className="h-36 relative">
        <h2 className="md:text-4xl text-3xl text-center text-white font-bold  md:mb-12 mt-12 md:mt-12">Membership Plans</h2>
      </div>
      <div className="flex flex-col -mt-10 space-y-4 md:space-y-0 md:space-x-4 md:flex-row justify-center text-center md:mt-10 text-white">
        {plansData.map((plan, index) => (
          <div
            key={index}
            className="w-[90%] md:w-auto bg-neutral-800 p-8 mx-auto shadow-lg"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h3 className="md:text-2xl text-xl font-semibold mb-1 md:mb-3">{plan.title}</h3>
            <p className={`text-3xl md:text-5xl font-bold mb-4 md:mb-6 ${hoveredIndex === index ? 'text-yellow-500' : ''}`}>{plan.price}</p>
            <p className="text-neutral-700 text-lg md:text-xl mb-4">{plan.period}</p>
            <div className="text-lg text-neutral-600 mb-4">{plan.description}</div>
            <button
              className={`border border-neutral-600 font-semibold px-8 py-2 md:px-12 md:py-4 text-lg mt-4 ${hoveredIndex === index ? 'bg-yellow-500 text-white' : 'text-white hover:bg-yellow-500 hover:text-yellow-500'}`}
            >
              Get Now
            </button>
          </div>
        ))}
      </div>
      <FAQ />
    </div>
  );
};

export default Plans;
