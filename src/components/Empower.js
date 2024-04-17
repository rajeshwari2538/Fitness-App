import React from 'react';
import Image from "../assets/empower_img.jpg"

const Empower = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20 text-white">
      <p className='text-9xl font-semibold text-center'>Empower
        <img className='mx-6 inline-block h-28' src={Image} alt='empower-img' />
         your fitness workout</p>
    </div>
  );
};

export default Empower;
