import React, { useState } from 'react';
import empowerImg from "../assets/empower_img.jpg"
import FAQ from "../components/FAQ"

const plansData = [
  {
    title: 'Basic',
    price: '$99.00',
    period: 'Per Month',
    description: (
      <>
        <p className="mb-2">Access essential workouts and nutrition guidance.</p>
        <p className="mb-2">Start your journey to a healthier lifestyle.</p>
      </>
    ),
  },
  {
    title: 'Advanced',
    price: '$155.00',
    period: 'Per Month',
    description: (
      <>
        <p className="mb-2">Personalized workout programs for faster results.</p>
        <p className="mb-2">Expert coaching to achieve your fitness goals.</p>
      </>
    ),
  },
  {
    title: 'Strong',
    price: '$295.00',
    period: 'Per Month',
    description: (
      <>
        <p className="mb-2">Tailored for serious athletes and enthusiasts.</p>
        <p className="mb-2">Intensive training sessions for maximum gains.</p>
      </>
    ),
  },
];

const Plans = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='max-w-6xl mx-auto'>
      <div className="h-36 relative">
        <div className="absolute top-1/2 left-[45%]  text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Membership Plans</h2>
        </div>
      </div>
      <div className="flex justify-center text-center mt-10 text-white">
        {plansData.map((plan, index) => (
          <div
            key={index}
            className="w-auto bg-zinc-900 p-8 mx-4 rounded-lg shadow-lg"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h3 className="text-lg font-semibold mb-3">{plan.title}</h3>
            <p className={`text-5xl font-bold mb-6 ${hoveredIndex === index ? 'text-yellow-500' : ''}`}>{plan.price}</p>
            <p className="text-zinc-700 mb-4">{plan.period}</p>
            <div className="text-lg text-zinc-700 mb-4">{plan.description}</div>
            <button
              className={`border font-semibold px-12 py-4 text-lg mt-4 ${hoveredIndex === index ? 'bg-yellow-500 text-white' : 'text-white hover:bg-yellow-500 hover:text-yellow-500'}`}
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
