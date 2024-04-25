import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { trainersData } from '../utils/data'; 

const Team = () => {
  const trainers = trainersData;

  const firstRow = trainers.slice(0, 4);
  const secondRow = trainers.slice(4, 6);

  const renderSocialIcon = (url, icon) => {
    return url && (
      <a href={url} target="_blank" rel="noopener noreferrer" className='text-white'>
        {icon}
      </a>
    );
  };
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="max-w-6xl cursor-pointer mt-6 md:mt-20 mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4">
        {[...firstRow, ...secondRow].map((trainer, index) => (
          <div key={index} className="relative col-span-1">
            <img src={trainer.image} alt={trainer.name} className="w-full h-[252px] md:h-[22rem]" />
            <div className="absolute inset-0 flex items-end justify-start p-4 bg-black bg-opacity-50 transition duration-300 ease-in-out opacity-0 hover:opacity-100">
              <div>
                <p className="text-white font-bold text-2xl md:text-3xl">{trainer.name}</p>
                <p className="text-white text-sm md:text-lg">{trainer.job}</p>
                <div className="mt-2 absolute top-0 right-4 gap-8 flex flex-col text-white text-xl">
                  {renderSocialIcon(trainer.instagram, <FaInstagram />)}
                  {renderSocialIcon(trainer.facebook, <FaFacebook />)}
                  {renderSocialIcon(trainer.twitter, <FaTwitter />)}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="md:mt-16 mt-10 ml-28 md:ml-44 col-span-2">
          <Link to="/trainers" onClick={handleLinkClick}>
            <button className="border border-neutral-700 hover:text-red-500 hover:border-red-500 text-white font-semibold py-16 px-7 md:py-20 text-2xl md:px-12 rounded-full">Our Team</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Team;
