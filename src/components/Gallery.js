import React from 'react';
import { galleryImage } from '../utils/data';

const Gallery = () => {
  return (
    <div className="max-w-6xl -mt-20 md:mt-0 mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="md:text-4xl text-3xl text-white font-bold text-center mb-12 mt-12">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5">
        {galleryImage.map((image, index) => (
          <div key={index} className="aspect-w-1 aspect-h-1">
            <img src={image.src} alt={image.alt} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
      <img src={require('../assets/gallery/group.jpg')} alt='group-img' className='w-full md:h-[470px] mt-5'/>
    </div>
  );
};

export default Gallery;
