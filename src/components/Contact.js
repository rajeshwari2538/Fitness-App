import React, { useEffect, useState } from 'react';
import contactBg from '../assets/contact-bg.jpg';

const Contact = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`bg-cover bg-center w-full sm:w-[80%] mx-auto min-h-screen`}
      style={{
        backgroundImage: !isSmallScreen && `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${contactBg})`,
      }}
    >
      <div className="flex justify-center items-center h-full">
        <div className="max-w-full sm:max-w-6xl mx-auto px-6 py-10 md:px-4 md:py-12 flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 pr-0 sm:pr-12 mb-8 sm:mb-0">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-8 text-white">Contact Us</h2>
            <div className="text-white py-10 pr-2">
              <div className="flex items-center mb-8 md:mb-4">
                 <img src='https://cdn-icons-png.freepik.com/512/8476/8476964.png' className='h-14 mr-4'/>
                 <div>
                   <p className="md:text-2xl text-xl font-bold mb-4 md:mb-2">Open Hours</p>
                   <ul>
                     <li>Mon-Fri: 9 AM – 6 PM</li>
                     <li>Saturday: 9 AM – 4 PM</li>
                     <li>Sunday: Closed</li>
                   </ul>
                 </div>
              </div>
              <div className="flex items-center mb-8 md:mb-4">
                <img src='https://cdn-icons-png.flaticon.com/512/4942/4942069.png' className='h-14 mr-4'/>
                <div>
                  <p className='text-xl md:text-2xl font-bold mb-2'>Address</p>
                  <p>2101 X Street,Y cross, MG Road, Bangalore</p>
                </div>
              </div>
              <div className="flex items-center">
                <img src='https://cdn.pixabay.com/photo/2016/06/13/17/30/mail-1454731_640.png' className='h-14 mr-4'/>
                <div>
                  <p className='md:text-2xl text-xl font-bold mb-2'>Email</p> 
                  <p>rajeshwarigadagi@gmail.com</p>
                  <p>+91-8217864544</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[30rem] pr-0 sm:pr-8">
            <h2 className="md:text-4xl text-2xl font-bold mb-8 text-white">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg font-bold text-white mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full bg-neutral-800 text-white rounded-md p-2" />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-bold text-white mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-neutral-800 text-white rounded-md p-2" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-lg font-bold text-white mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="w-full bg-neutral-800 text-white rounded-md p-2" />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-bold text-white mb-2">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full bg-neutral-800 text-white rounded-md p-2"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
            </form>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Contact;
