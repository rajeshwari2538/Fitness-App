import React, { useEffect, useState } from 'react';
import Image from '../assets/journey.jpg'; 

const Journey = () => {
  const [years, setYears] = useState(0);
  const [programs, setPrograms] = useState(0);
  const [zones, setZones] = useState(0);
  const [classes, setClasses] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setYears(prevYears => (prevYears < 10 ? prevYears + 0.1 : 10));
      setPrograms(prevPrograms => (prevPrograms < 100 ? prevPrograms + 1 : 100));
      setZones(prevZones => (prevZones < 15 ? prevZones + 0.1 : 15));
      setClasses(prevClasses => (prevClasses < 50 ? prevClasses + 1 : 50));
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 -mt-14 md:mt-0 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center justify-center md:justify-end">
          <img src={Image} alt="Discover the FitFlex" className="max-w-full md:h-auto h-[550px] w-full" />
        </div>
        <div className="flex flex-col justify-center text-white md:ml-12">
          <h2 className="text-md md:text-xl font-bold mb-1 md:mb-4">DISCOVER THE FITCLUB</h2>
          <p className="text-4xl md:text-5xl font-semibold md:text-left">More than a fitness centre</p>
          <p className="text-lg text-neutral-600 md:text-xl mt-6 md:mt-12 md:text-left">
            Discover the FitClub isn't just another gym; it's your partner in fitness excellence. With cutting-edge facilities and a vibrant community, we're here to help you smash your fitness goals and enjoy the journey along the way. Join us and discover a new level of energy, motivation, and results!
          </p>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-2 mt-12 md:mt-40">
            {[
              { value: years, label: 'Years' },
              { value: programs, label: 'Programs' },
              { value: zones, label: 'Zones' },
              { value: classes, label: 'Classes' },
            ].map((item, index) => (
              <div key={index} className="text-left">
                <h3 className="text-5xl md:text-7xl font-bold">{Math.floor(item.value)}+</h3>
                <div className="border-b border-neutral-700 my-4"></div>
                <p className="mt-2 md:mt-4 text-xl md:text-2xl font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
