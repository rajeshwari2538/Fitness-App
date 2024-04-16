import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import img1 from "../assets/services/image1.jpg";
import img2 from "../assets/services/image2.jpg";
import img3 from "../assets/services/image3.jpg";
import img4 from "../assets/services/image4.jpg";
import img5 from "../assets/services/image5.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const services = [
    {
      id: 1,
      image: img1,
      title: 'Cardio workouts',
      description: 'Dynamic workouts designed to boost cardiovascular health and endurance',
    },
    {
      id: 2,
      image: img2,
      title: 'TRX training',
      description: 'Full-body strength and stability training using suspension straps.',
    },
    {
      id: 3,
      image: img3,
      title: 'Weight lifting',
      description: ' Build strength and muscle mass with tailored weight lifting sessions.',
    },
    {
      id: 4,
      image: img4,
      title: 'Rowing',
      description: 'Low-impact exercises engaging the entire body and improving cardiovascular fitness.',
    },
    {
      id: 5,
      image: img5,
      title: 'Cycling',
      description: 'Indoor cycling classes for calorie burning, leg strength improvement, and overall fitness enhancement.',
    },
  ];

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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
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
    <div className="max-w-6xl mx-auto px-6 md:px-0">
      <h2 className="md:text-2xl text-white font-bold mb-8">FEATURED SERVICES</h2>
      <div className="">
        <div className='flex justify-between'>
          <h3 className="text-6xl text-white font-bold mb-2">Our Classes</h3>
          <p className="text-gray-400 ml-80 text-xl">Highlights a variety of premium fitness options, ranging from cardio workouts and TRX training to weight lifting, rowing, and indoor cycling classes.</p>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {services.map((service) => (
          <div key={service.id} className="mt-6 p-4 relative">
            <img src={service.image} alt={service.title} className="w-96 h-auto object-cover rounded-md transition-transform duration-500 hover:scale-105" />
            <div className="absolute bottom-0 left-0 right-0 text-white px-8 py-10 rounded-b-md">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Services;
