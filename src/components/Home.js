import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import img1 from "../assets/home/hero1.jpg";
import img2 from "../assets/home/hero2.jpg";
import img3 from "../assets/home/hero3.jpg";
import { MdArrowOutward } from "react-icons/md";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { 
      id: 1, 
      image: img1, 
      title: 'GETTING BETTER', 
      description: 'Embark on a journey of transformation and self-discovery.' 
    },
    { 
      id: 2, 
      image: img2, 
      title: 'HEALTHY CHOICE', 
      description: 'Strive for progress, not perfection, and watch yourself evolve.' 
    },
    { 
      id: 3, 
      image: img3, 
      title: 'CHANGE WITH US',
      description: 'Make the decision to prioritize your health and well-being.' 
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(currentImage => (currentImage + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [images.length]);

  const handleClick = (index) => {
    setCurrentImage(index);
  };

  const isSmallDevice = window.innerWidth < 768; // Assuming small devices have width less than 768px

  return (
    <div className="max-w-6xl mx-auto -mt-[52%] md:-mt-10 flex justify-between items-center h-screen">
      <div className="flex flex-col md:flex-row justify-center items-start w-full">
        <div className="flex flex-col items-center md:mr-10">
          {images.map((image, index) => (
            <button
              key={image.id}
              className={`text-gray-600 mt-16 py-2 md:py-2 md:-ml-32 font-bold text-lg mb-2 focus:outline-none ${index === currentImage ? 'text-red-500' : ''}`}
              onClick={() => handleClick(index)}
            >
              <span className={`hidden md:inline-block ${index < 9 ? 'block' : 'hidden'}`}>{index < 9 ? `0${index + 1}` : index + 1}</span>
            </button>
          ))}
        </div>
        <div className="relative w-full flex items-start flex-col md:flex-row">
          <div className="image-container flex-shrink-0 relative w-full md:w-[850px]">
            <img
              key={images[currentImage].id}
              src={images[currentImage].image}
              alt={`Image ${currentImage + 1}`}
              className="w-full h-auto rounded-md shadow-md animated-image" // Add animated-image class
            />
            <h1 className={`absolute -bottom-16 left-4 md:top-10 md:left-[75%] text-3xl md:text-9xl text-white font-bold font-mono z-10 ${isSmallDevice ? 'mt-4 text-center w-full' : ''}`} style={{ lineHeight: isSmallDevice ? '1.2' : '0.9', maxWidth: isSmallDevice ? '250px' : 'none' }}>{images[currentImage].title}</h1>
          </div>
          {isSmallDevice ? (
            <div className="description-container ml-6 mt-12 md:mt-0">
              <Link to="services" smooth={true} duration={500} className='text-white text-xl mt-4' style={{ cursor: 'pointer' }}>Learn More<span className='inline-block ml-3 mt-5 -mb-1 text-2xl'><MdArrowOutward /></span></Link>
            </div>
          ) : (
            <div className="description-container ml-8 md:mt-[23rem]">
              <p className="text-zinc-600 text-lg md:text-xl">{images[currentImage].description}</p>
              <Link to="services" smooth={true} duration={500} className='text-white text-xl mt-4' style={{ cursor: 'pointer' }}>Learn More<span className='inline-block ml-3 mt-5 -mb-1 text-2xl'><MdArrowOutward /></span></Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
