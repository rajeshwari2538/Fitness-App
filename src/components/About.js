import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons
import image1 from '../assets/about/image1.jpg';
import image2 from '../assets/about/image2.jpg';
import image3 from '../assets/about/image3.jpg';
import image4 from '../assets/about/image4.jpg';
import image5 from '../assets/about/image5.jpg';
import image6 from '../assets/about/image6.jpg';
import image7 from '../assets/about/image7.jpg';
import image8 from '../assets/about/image8.jpg';
import Empower from "../components/Empower";
import Testimonials from "../components/Testimonials";

const AboutUs = () => {
  const aboutData = [
    { image: image1, title: 'Stretching' },
    { image: image2, title: 'Core workout' },
    { image: image3, title: 'Weight loss workout' },
    { image: image4, title: 'Sports massage' },
    { image: image5, title: 'Warm-up exercises' },
    { image: image6, title: 'Squats' },
    { image: image7, title: 'Push-ups' },
    { image: image8, title: 'Med ball workout' },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const goToPreviousImages = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? aboutData.length - 3 : Math.max(0, prevIndex - 3)));
  };

  const goToNextImages = () => {
    setStartIndex((prevIndex) => (prevIndex >= aboutData.length - 3 ? 0 : prevIndex + 1));
  };

  return (
    <div className="max-w-6xl mt-16 mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl text-center text-white font-bold mb-12 mt-12">About Us</h2>
      <div className="flex items-center justify-between">
        <div className="w-1/2 pr-8">
          <h3 className="text-xl text-white font-bold mb-4">A NAME YOU CAN TRUST</h3>
          <p className="text-white text-5xl mb-8">Emily’s program is more than gym training.</p>
          <p className='text-zinc-500 text-justify text-xl'>"Emily’s program transcends traditional gym training, offering a holistic approach to fitness and wellness. Through personalized guidance and comprehensive support, participants embark on a transformative journey towards improved physical health and overall well-being."</p>
          <img className='h-full mt-8' src={require('../assets/about/about2.jpg')} alt="about" />
        </div>
        <div className="w-1/2 flex justify-end">
          <img src={require('../assets/about/aboutUs.jpg')} alt="Trust" className="w-full h-full -mt-72" />
        </div>
      </div>
      <Empower />
      <div className="mt-36 flex justify-center items-center">
        <FaArrowLeft className="text-white text-5xl border border-zinc-600 rounded-full p-3 cursor-pointer" onClick={goToPreviousImages} />
        {aboutData.slice(startIndex, startIndex + 3).map((data, index) => (
          <div key={index} className={`flex flex-col items-center ${index === 1 ? 'border border-zinc-600 p-2' : ''}`}>
            <img src={data.image} alt={data.title} className={`w-[20rem] h-[20rem] object-cover mx-4 ${index === 1 ? 'h-[25rem] w-[25rem]' : ''}`} />
            <h4 className="text-white font-bold mt-4 text-2xl">{data.title}</h4>
          </div>
        ))}
        <FaArrowRight className="text-white text-5xl border border-zinc-600 rounded-full p-3  cursor-pointer" onClick={goToNextImages} />
      </div>
      <Testimonials />
    </div>
  );
};

export default AboutUs;
