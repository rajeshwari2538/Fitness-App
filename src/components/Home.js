import React, { useState, useEffect } from 'react';
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { 
      id: 1, 
      image: img1, 
      title: 'CHANGE WITH US', 
      description: 'Embark on a journey of transformation and self-discovery.' 
    },
    { 
      id: 2, 
      image: img2, 
      title: 'GETTING BETTER', 
      description: 'Strive for progress, not perfection, and watch yourself evolve.' 
    },
    { 
      id: 3, 
      image: img3, 
      title: 'HEALTHY CHOICE', 
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

  return (
    <div className="max-w-6xl mx-auto flex justify-between items-center h-screen">
      <div className="flex flex-col md:flex-row justify-center items-start">
        <div className="flex flex-col items-center md:mr-10">
          {images.map((image, index) => (
            <button
              key={image.id}
              className={`text-gray-600 mt-10 py-2 md:py-2 md:ml-32 font-bold text-lg mb-2 focus:outline-none ${index === currentImage ? 'text-red-500' : ''}`}
              onClick={() => handleClick(index)}
            >
              {index < 9 ? `0${index + 1}` : index + 1}
            </button>
          ))}
        </div>
        <div className="relative w-full ml-16">
          <div className="image-container">
            <img
              key={images[currentImage].id}
              src={images[currentImage].image}
              alt={`Image ${currentImage + 1}`}
              className="w-full h-auto rounded-md shadow-md animate-slide"
            />
          </div>
          <div className="title-container animate-slide">
            <h1 className="absolute text-7xl md:text-8xl bottom-60 left-[30rem] w-full font-bold text-gray-700">{images[currentImage].title}</h1>
          </div>
          <div className="mt-10 md:mt-0 max-w-[300px] md:ml-10">
            <div className="pl-4 md:pl-10">
              <p className="text-white text-xl relative bottom-24 left-[36rem]">{images[currentImage].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
