import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { trainersData, championInstructorsData } from '../utils/data';
import Empower from './Empower';

const Trainers = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
       <h2 className="md:text-4xl text-3xl text-center text-white font-bold mb-12 -mt-4 md:mt-12">Our Team</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 mb-12">
        {trainersData.map((trainer, index) => (
          <div key={index} className="relative">
            <img src={trainer.image} alt={trainer.name} className="w-full h-[252px] md:h-[22rem]" />
            <div className="absolute inset-0 flex items-end gap-2 justify-start p-4 bg-black bg-opacity-50 transition duration-300 ease-in-out opacity-0 hover:opacity-100">
              <div>
                <p className="text-white font-bold text-2xl md:text-3xl">{trainer.name}</p>
                <p className="text-white text-sm md:text-lg">{trainer.job}</p>
                <div className="mt-2 absolute top-0 right-4 gap-8 flex flex-col text-white text-xl">
                  {trainer.instagram && <a href={trainer.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>}
                  {trainer.facebook && <a href={trainer.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>}
                  {trainer.twitter && <a href={trainer.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
     
      <Empower />
     
      <div className="mt-20">
        <h2 className="md:text-xl text-white font-semibold mb-6">MEET OUR COACHES</h2>
        <h2 className="text-4xl md:text-7xl font-bold text-white mb-12">Champion Instructors</h2>
        <p className="text-neutral-400 leading-snug text-lg md:text-xl mb-12">
          Renowned in the realm of combat sports, these champions are revered for their expertise as fight instructors and kickboxing trainers. Their illustrious journeys are defined by a mastery of technique, unwavering dedication, and an unyielding spirit. Serving as beacons of inspiration, they impart invaluable knowledge and embody the pinnacle of excellence in the arena, motivating aspiring fighters worldwide to pursue their dreams with passion and determination.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {championInstructorsData.map((champion, index) => (
            <div key={index} className="relative">
              <img src={champion.image} alt={champion.name} className="w-full md:h-[700px] h-[500px] object-cover" />
              <div className="absolute bottom-[5.7rem] md:bottom-28 inset-0 flex items-end gap-2 justify-start p-4 bg-black bg-opacity-50 transition duration-300 ease-in-out opacity-0 hover:opacity-100">
                <div>
                  <div className="absolute top-[45%] left-[35%] flex gap-8 text-white text-2xl md:text-4xl">
                    {champion.instagram && <a href={champion.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>}
                    {champion.facebook && <a href={champion.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>}
                    {champion.twitter && <a href={champion.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>}
                  </div>
                </div>
              </div>
              <p className="text-white font-bold text-3xl md:text-4xl mt-6">{champion.name}</p>
              <p className="text-neutral-500 text-xl md:text-2xl mt-1 md:mt-4">{champion.job}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
