import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import { MdArrowOutward } from "react-icons/md";
import { homeData } from '../utils/data'; 

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isSmallDevice, setIsSmallDevice] = useState(window.innerWidth < 768);
  const [title, setTitle] = useState(homeData[currentImage].title);
  const [titleAnimationKey, setTitleAnimationKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(currentImage => (currentImage + 1) % homeData.length);
      setTitle(homeData[currentImage].title);
      setTitleAnimationKey(prevKey => prevKey + 1);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [homeData.length, currentImage]);

  const handleClick = (index) => {
    setCurrentImage(index);
    setTitle(homeData[index].title);
    setTitleAnimationKey(prevKey => prevKey + 1);
  };

  return (
    <div className={`max-w-6xl mx-auto ${isSmallDevice ? '-mt-[26rem]' : 'mt-[10%] md:-mt-10'} flex justify-between items-center h-screen`}>
      <div className="flex flex-col md:flex-row justify-center items-start w-full">
        <div className="flex flex-col items-center md:mr-10">
          {homeData.map((image, index) => (
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
            {homeData.map((image, index) => (
              <img
                key={image.id}
                src={image.image}
                alt={`Image ${index + 1}`}
                className={`w-[90%] mx-auto md:w-full h-auto rounded-md shadow-md animated-image ${index === currentImage ? 'animated' : ''} ${index % 2 === 0 ? 'scale-in-hor-center' : 'scale-in-hor-right'}`}
                style={{ display: index === currentImage ? 'block' : 'none' }}
              />
            ))}
            <h1 key={titleAnimationKey} className={`absolute -bottom-16 left-4 md:top-10 md:left-[75%] text-3xl md:text-9xl text-white font-bold font-mono z-10 animated-title ${isSmallDevice ? 'mt-4 text-center w-full' : ''}`} style={{ lineHeight: isSmallDevice ? '1' : '0.9', maxWidth: isSmallDevice ? '250px' : 'none' }}>{title}</h1>
          </div>
          <div className="description-container ml-6 mt-12 md:mt-[23rem]">
            <p className={`text-neutral-400 text-lg md:text-xl ${isSmallDevice ? 'hidden' : 'block'}`}>{homeData[currentImage].description}</p>
            <Link to="services" smooth={true} duration={500} className='text-white text-xl mt-4' style={{ cursor: 'pointer' }}>Learn More<span className='inline-block ml-3 mt-5 -mb-1 text-2xl'><MdArrowOutward /></span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
