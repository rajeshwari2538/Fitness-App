import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import trainer1 from "../assets/trainers/trainer1.jpg"
import trainer2 from "../assets/trainers/trainer2.jpg"
import trainer3 from "../assets/trainers/trainer3.jpg"
import trainer4 from "../assets/trainers/trainer4.jpg"
import trainer5 from "../assets/trainers/trainer5.jpg"
import trainer6 from "../assets/trainers/trainer6.jpg"
import { Link } from 'react-router-dom';

const Team = () => {

  const trainers = [
    {
      image: trainer1,
      name: 'John Doe',
      job: 'Fitness Trainer',
      instagram: 'https://www.instagram.com/johndoe',
      facebook: 'https://www.facebook.com/johndoe',
      twitter: 'https://twitter.com/johndoe',
    },
    {
      image: trainer2,
      name: 'Jane Smith',
      job: 'Yoga Instructor',
      instagram: 'https://www.instagram.com/janesmith',
      facebook: 'https://www.facebook.com/janesmith',
      twitter: 'https://twitter.com/janesmith',
    },
    {
      image: trainer3,
      name: 'Michael Johnson',
      job: 'Personal Trainer',
      instagram: 'https://www.instagram.com/michaeljohnson',
      facebook: 'https://www.facebook.com/michaeljohnson',
      twitter: 'https://twitter.com/michaeljohnson',
    },
    {
      image: trainer4,
      name: 'Emily Davis',
      job: 'Personal Trainer',
      instagram: 'https://www.instagram.com/emilydavis',
      facebook: 'https://www.facebook.com/emilydavis',
      twitter: 'https://twitter.com/emilydavis',
    },
    {
      image: trainer5,
      name: 'Alex Thompson',
      job: 'Nutritionist',
      instagram: 'https://www.instagram.com/alexthompson',
      facebook: 'https://www.facebook.com/alexthompson',
      twitter: 'https://twitter.com/alexthompson',
    },
    {
      image: trainer6,
      name: 'Sarah Wilson',
      job: 'Zumba Instructor',
      instagram: 'https://www.instagram.com/sarahwilson',
      facebook: 'https://www.facebook.com/sarahwilson',
      twitter: 'https://twitter.com/sarahwilson',
    },
  ];

  const firstRow = trainers.slice(0, 4);
  const secondRow = trainers.slice(4, 6);

  return (
    <div className="max-w-6xl cursor-pointer mt-20 mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-4 gap-4">
        {firstRow.map((trainer, index) => (
          <div key={index} className="relative">
            <img src={trainer.image} alt={trainer.name} className="w-full h-[22rem]" />
            <div className="absolute inset-0 flex items-end gap-2 justify-start p-4 bg-black bg-opacity-50 transition duration-300 ease-in-out opacity-0 hover:opacity-100">
              <div>
                <p className="text-white font-bold text-3xl">{trainer.name}</p>
                <p className="text-white text-lg ">{trainer.job}</p>
                <div className="mt-2 absolute top-0 right-4 gap-8 flex flex-col text-white text-xl">
                  {trainer.instagram && <a href={trainer.instagram} target="_blank" rel="noopener noreferrer" className=''><FaInstagram /></a>}
                  {trainer.facebook && <a href={trainer.facebook} target="_blank" rel="noopener noreferrer" className=''><FaFacebook /></a>}
                  {trainer.twitter && <a href={trainer.twitter} target="_blank" rel="noopener noreferrer" className=''><FaTwitter /></a>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4 mt-6">
        {secondRow.map((trainer, index) => (
          <div key={index} className="relative col-span-1">
            <img src={trainer.image} alt={trainer.name} className="w-full h-[22rem]" />
            <div className="absolute inset-0 flex items-end justify-start p-4 bg-black bg-opacity-50 transition duration-300 ease-in-out opacity-0 hover:opacity-100">
              <div>
                <p className="text-white font-bold text-3xl">{trainer.name}</p>
                <p className="text-white text-lg">{trainer.job}</p>
                <div className="mt-2 absolute top-0 right-4 gap-8 flex flex-col text-white text-xl">
                  {trainer.instagram && <a href={trainer.instagram} target="_blank" rel="noopener noreferrer" className='text-white'><FaInstagram /></a>}
                  {trainer.facebook && <a href={trainer.facebook} target="_blank" rel="noopener noreferrer" className='text-white'><FaFacebook /></a>}
                  {trainer.twitter && <a href={trainer.twitter} target="_blank" rel="noopener noreferrer" className='text-white'><FaTwitter /></a>}
                </div>
              </div>
            </div>
          </div>
        ))}
        <Link to="/trainers">
          <div className="mt-16 ml-44">
           <button className="border border-zinc-700 hover:text-red-500 hover:border-red-500 text-white font-semibold py-20 text-2xl px-[5.2rem] rounded-full">Our Team</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Team;