import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { aboutData } from '../utils/data'; 
import Empower from "../components/Empower";
import Testimonials from "../components/Testimonials";

const About = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setStartIndex(0);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const goToPreviousImages = () => {
    setStartIndex(prevIndex => (prevIndex === 0 ? aboutData.length - 3 : Math.max(0, prevIndex - 3)));
  };

  const goToNextImages = () => {
    setStartIndex(prevIndex => (prevIndex >= aboutData.length - 3 ? 0 : prevIndex + 1));
  };

  return (
    <div className="max-w-6xl mt-0 mx-auto py-12 px-4 md:px-8">
      <h2 className="md:text-4xl text-3xl text-center text-white font-bold mb-12 -mt-4 md:mt-12">About Us</h2>
      <div className="flex md:flex-row flex-col md:items-center md:justify-between">
        <div className="w-full md:w-1/2 pr-8">
          <h3 className="md:text-xl text-white font-semibold mb-2 md:mb-4">A NAME YOU CAN TRUST</h3>
          <p className="text-white font-semibold text-3xl md:text-5xl mb-5 md:mb-8">Emily’s program is more than gym training.</p>
          <p className='text-neutral-600 text-justify text-lg md:text-xl'>"Emily’s program transcends traditional gym training, offering a holistic approach to fitness and wellness. Through personalized guidance and comprehensive support, participants embark on a transformative journey towards improved physical health and overall well-being."</p>
          <img className='h-full mt-8' src={require('../assets/about/about2.jpg')} alt="about" />
        </div>
        <div className="md:w-1/2 w-full flex justify-end">
          <img src={require('../assets/about/aboutUs.jpg')} alt="Trust" className="w-[26.4rem] mt-4 md:w-full mr-8 md:mr-0 md:h-[900px] md:-mt-2" />
        </div>
      </div>
      <Empower />
      <div className="mt-10 mb-8 flex justify-center items-center overflow-x-auto">
        <FaArrowLeft className="text-neutral-600 text-4xl md:text-5xl border border-neutral-600 rounded-full p-3 cursor-pointer" onClick={goToPreviousImages} />
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-4 md:py-6">
          {aboutData.slice(startIndex, startIndex + (window.innerWidth > 768 ? 3 : 2)).map((data, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={data.image} alt={data.title} className="w-48 h-48 md:w-60 md:h-60 object-cover" />
              <h4 className="text-white font-semibold mt-2 text-lg md:text-xl">{data.title}</h4>
            </div>
          ))}
        </div>
        <FaArrowRight className="text-gray-600 text-4xl md:text-5xl border border-gray-600 rounded-full p-3 cursor-pointer" onClick={goToNextImages} />
      </div>
      <Testimonials />
    </div>
  );
};

export default About;
