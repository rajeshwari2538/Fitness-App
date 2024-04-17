import React, { useEffect, useState } from 'react';
import Image from '../assets/journey.jpg'; // Import your Image component

const Journey = () => {
  const [years, setYears] = useState(0);
  const [programs, setPrograms] = useState(0);
  const [zones, setZones] = useState(0);
  const [classes, setClasses] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increase values gradually until the target is reached
      setYears((prevYears) => (prevYears < 10 ? prevYears + 0.1 : 10));
      setPrograms((prevPrograms) => (prevPrograms < 100 ? prevPrograms + 1 : 100));
      setZones((prevZones) => (prevZones < 15 ? prevZones + 0.1 : 15));
      setClasses((prevClasses) => (prevClasses < 50 ? prevClasses + 1 : 50));
    }, 10); // Adjust the interval as needed

    // Clear interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-4">
        {/* Left side */}
        <div className="flex items-center">
          <img src={Image} alt="Discover the FitFlex" />
        </div>
        {/* Right side */}
        <div className="flex flex-col justify-center text-white ml-12">
          <h2 className="text-xl font-bold mb-4">DISCOVER THE FITCLUB</h2>
          <p className='text-5xl font-semibold'>More than a fitness centre</p>
          <p className="text-lg mt-12">Discover the FitClub isn't just another gym; it's your partner in fitness excellence. With cutting-edge facilities and a vibrant community, we're here to help you smash your fitness goals and enjoy the journey along the way. Join us and discover a new level of energy, motivation, and results!</p>
          
          {/* Grid for stats */}
          <div className="grid grid-cols-2 gap-6 mt-40">
            <div className="text-left">
              <h3 className="text-7xl font-bold">{Math.floor(years)}+</h3>
              <div className='border-b border-zinc-700 my-4'></div>
              <p className="mt-4 text-2xl font-semibold">Years</p>
            </div>
            <div className="text-left">
              <h3 className="text-7xl font-bold">{Math.floor(programs)}+</h3>
              <div className='border-b border-zinc-700 my-4'></div>
              <p className="mt-4 text-2xl font-semibold">Programs</p>
            </div>
            <div className="text-left">
              <h3 className="text-7xl font-bold">{Math.floor(zones)}+</h3>
              <div className='border-b border-zinc-700 my-4'></div>
              <p className="mt-4 text-2xl font-semibold">Zones</p>
            </div>
            <div className="text-left">
              <h3 className="text-7xl font-bold">{Math.floor(classes)}+</h3>
              <div className='border-b border-zinc-700 my-4'></div>
              <p className="mt-4 text-2xl font-semibold">Classes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
