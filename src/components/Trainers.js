import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import trainer1 from "../assets/trainers/trainer1.jpg"
import trainer2 from "../assets/trainers/trainer2.jpg"
import trainer3 from "../assets/trainers/trainer3.jpg"
import trainer4 from "../assets/trainers/trainer4.jpg"
import trainer5 from "../assets/trainers/trainer5.jpg"
import trainer6 from "../assets/trainers/trainer6.jpg"
import trainer7 from "../assets/trainers/trainer7.jpg"
import trainer8 from "../assets/trainers/trainer8.jpg"
import champion1 from "../assets/trainers/champion1.jpg"
import champion2 from "../assets/trainers/champion2.jpg"
import Empower from './Empower';

const Trainers = () => {

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
    {
      image: trainer7,
      name: 'David Johnson',
      job: 'Pilates Instructor',
      instagram: 'https://www.instagram.com/davidjohnson',
      facebook: 'https://www.facebook.com/davidjohnson',
      twitter: 'https://twitter.com/davidjohnson',
    },
    {
      image: trainer8,
      name: 'Emma Brown',
      job: 'CrossFit Trainer',
      instagram: 'https://www.instagram.com/emmabrown',
      facebook: 'https://www.facebook.com/emmabrown',
      twitter: 'https://twitter.com/emmabrown',
    }
  ];

  const championInstructors = [
    {
      image: champion1,
      name: 'Michael King',
      job: 'Fight instructor',
      instagram: 'https://www.instagram.com/champion1',
      facebook: 'https://www.facebook.com/champion1',
      twitter: 'https://twitter.com/champion1',
    },
    {
      image: champion2,
      name: 'Tanya Glory',
      job: 'Kickboxing trainer',
      instagram: 'https://www.instagram.com/champion2',
      facebook: 'https://www.facebook.com/champion2',
      twitter: 'https://twitter.com/champion2',
    }
  ];

  return (
    <div className="max-w-6xl md:mt-0 mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="md:text-4xl text-3xl text-center text-white font-bold mb-12 -mt-4 md:mt-12">Our Team</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4">
        {trainers.map((trainer, index) => (
          <div key={index} className="relative">
            <img src={trainer.image} alt={trainer.name} className="w-full h-[252px] md:h-[22rem]" />
            <div className="absolute inset-0 flex items-end gap-2 justify-start p-4 bg-black bg-opacity-50 transition duration-300 ease-in-out opacity-0 hover:opacity-100">
              <div>
                <p className="text-white font-bold text-2xl md:text-3xl">{trainer.name}</p>
                <p className="text-white text-sm md:text-lg ">{trainer.job}</p>
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
      <Empower />
      <div className="flex justify-between md:mt-6">
        <div className="w-[100%] mt-20">
          <h2 className="md:text-xl text-white font-semibold mb-1 md:mb-6">MEET OUR COACHES</h2>
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 md:mb-12">Champion Instructors</h2>
          <p className="text-neutral-600 leading-snug text-lg md:text-xl">Renowned in the realm of combat sports, these champions are revered for their expertise as fight instructors and kickboxing trainers. Their illustrious journeys are defined by a mastery of technique, unwavering dedication, and an unyielding spirit. Serving as beacons of inspiration, they impart invaluable knowledge and embody the pinnacle of excellence in the arena, motivating aspiring fighters worldwide to pursue their dreams with passion and determination.</p>
          <div className="flex flex-col mx-2 md:flex-row md:justify-evenly md:mt-10 mt-20 cursor-pointer">
  {championInstructors.map((champion, index) => (
    <div key={index} className={`relative md:w-[45%] h-[500px] md:h-full`} >
      <img 
        src={champion.image} 
        alt={champion.name} 
        className={`w-full h-full object-cover ${index === 1 ? 'mt-32' : ''} md:mt-30 md:w-auto md:h-auto`} 
      />
      <div className={`w-full h-full absolute inset-0 flex items-end gap-2 ${index === 1 ? 'mt-32' : ''} justify-start p-4 bg-black bg-opacity-50 transition duration-300 ease-in-out opacity-0 hover:opacity-100`}>
        <div>
          <div className="mt-2 absolute top-[45%] right-[35%] gap-8 flex text-white text-2xl md:text-4xl">
            {champion.instagram && <a href={champion.instagram} target="_blank" rel="noopener noreferrer" className='text-white'><FaInstagram /></a>}
            {champion.facebook && <a href={champion.facebook} target="_blank" rel="noopener noreferrer" className='text-white'><FaFacebook /></a>}
            {champion.twitter && <a href={champion.twitter} target="_blank" rel="noopener noreferrer" className='text-white'><FaTwitter /></a>}
          </div>
        </div>
        </div>
         <p className="text-white font-bold text-3xl md:text-4xl mt-6">{champion.name}</p>
         <p className="text-neutral-600 text-xl md:text-2xl mt-1 md:mt-4">{champion.job}</p>
         </div>
         ))}
         </div>
        </div>
      </div>
    </div>
  );
};

export default Trainers;
