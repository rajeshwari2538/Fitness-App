import React from 'react';
import image1 from '../assets/gallery/gallery1.jpg'
import image2 from '../assets/gallery/gallery2.jpg'
import image3 from '../assets/gallery/gallery3.jpg'
import image4 from '../assets/gallery/gallery4.jpg'
import image5 from '../assets/gallery/gallery5.jpg'
import image6 from '../assets/gallery/gallery6.jpg'
import image7 from '../assets/gallery/gallery7.jpg'
import image8 from '../assets/gallery/gallery8.jpg'
import image9 from '../assets/gallery/gallery9.jpg'
import image10 from '../assets/gallery/gallery10.jpg'
import image11 from '../assets/gallery/gallery11.jpg'
import image12 from '../assets/gallery/gallery12.jpg'
import image13 from '../assets/gallery/gallery13.jpg'
import image14 from '../assets/gallery/gallery14.jpg'
import image15 from '../assets/gallery/gallery15.jpg'
import image16 from '../assets/gallery/gallery16.jpg'

const Gallery = () => {

  const images = [
    { src: image1, alt: 'Image 1' },
    { src: image2, alt: 'Image 2' },
    { src: image3, alt: 'Image 3' },
    { src: image4, alt: 'Image 4' },
    { src: image5, alt: 'Image 5' },
    { src: image6, alt: 'Image 6' },
    { src: image7, alt: 'Image 7' },
    { src: image8, alt: 'Image 8' },
    { src: image9, alt: 'Image 9' },
    { src: image10, alt: 'Image 10' },
    { src: image11, alt: 'Image 11' },
    { src: image12, alt: 'Image 12' },
    { src: image13, alt: 'Image 13' },
    { src: image14, alt: 'Image 14' },
    { src: image15, alt: 'Image 15' },
    { src: image16, alt: 'Image 16' },
  ];

  return (
    <div className="max-w-6xl mt-14 mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl text-white font-bold text-center mb-12 mt-12">Gallery</h2>
      <div className="grid grid-cols-4 gap-5">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} className="w-full h-96" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
