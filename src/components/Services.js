import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { servicesData } from '../utils/data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className="services max-w-6xl mx-auto px-6 mt-0 md:px-0">
      <h2 className="md:text-xl text-white font-bold mb-2">FEATURED SERVICES</h2>
      <div className="">
        <div className='flex flex-col md:flex-row md:items-center'>
          <h3 className="md:text-6xl text-4xl text-white font-bold mb-2 md:mr-8">Our Classes</h3>
          <p className="text-neutral-600 md:text-xl mt-2 text-lg md:mb-0">Highlights a variety of premium fitness options, ranging from cardio workouts and TRX training to weight lifting, rowing, and indoor cycling classes.</p>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {servicesData.map((service) => (
          <div key={service.id} className="mt-6 p-4 relative">
            <img src={service.image} alt={service.title} className="w-full h-auto object-cover rounded-md transition-transform duration-500 hover:scale-105" />
            <div className="absolute bottom-0 left-0 right-0 text-white px-5 py-6 md:px-8 md:py-10 rounded-b-md">
              <h3 className="text-xl md:text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm md:text-md hidden md:block">{service.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="md:mt-16 mt-5">
        <p className="font-semibold text-white text-md md:text-xl">
          MOTIVATION FOR YOU
        </p>
        <p className='text-neutral-700 font-bold mt-3 mb-16 text-4xl md:text-7xl'>
          Strength lies not in what you can do, but in overcoming what you cannot do.
        </p>
      </div>
    </div>
  );
};

export default Services;
