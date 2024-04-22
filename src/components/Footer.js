import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    const handleLinkClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
  return (
    <footer className="max-w-6xl md:h-[40rem] mx-auto bg-neutral-900 text-white md:mt-24 mt-16 py-10">
      <div className="container mt-20 mx-auto -ml-14 md:ml-0 flex flex-col justify-between items-center">
        
        <div className="flex flex-col -ml-5 md:ml-0 md:flex-row justify-between text-center md:text-left mb-4 md:mb-0">
          <h2 className="md:text-4xl text-2xl text-left font-bold md:ml-20">FitClub</h2>
          <p className="md:text-7xl text-2xl font-bold md:ml-[30rem]">Your ultimate fitness centre</p>
        </div>
    
        <div className="md:-ml-[45rem] ml-8">
          <h3 className="text-lg font-bold mb-2">Newsletter Signup</h3>
          <div className="flex items-center mb-1">
            <input type="email" placeholder="Enter Your Email Address" className="bg-neutral-900 text-neutral-700 pl-0 pr-20 py-2 rounded-l px-10 focus:outline-none" />
            <button className="md:px-2 px-10 py-2 hover:text-red-700 rounded-r focus:outline-none">➔</button>
          </div>
          <div className='border border-neutral-700 my-2'></div>
          <div className="flex items-center mt-6 text-sm">
            <input type="checkbox" id="privacyPolicy" className="mr-1" />
            <label htmlFor="privacyPolicy" className='text-neutral-600'>I agree to the <span className='text-white underline'>Privacy Policy.</span></label>
          </div>
        </div>
        
        <div className="mt-4 md:-mt-16 flex flex-col md:flex-row">
          <div className="flex flex-col -ml-20 md:ml-[40rem] md:mr-10 space-y-2 md:space-y-0">
            <h3 className="md:text-2xl text-xl font-bold mb-2">Socials</h3>
            <a href="https://www.facebook.com/fitclub" className="text-gray-400 md:text-lg hover:text-white">Facebook</a>
            <a href="https://www.twitter.com/fitclub" className="text-gray-400 md:text-lg hover:text-white">Twitter</a>
            <a href="https://www.dribble.com/fitclub" className="text-gray-400 md:text-lg hover:text-white">Dribble</a>
            <a href="https://www.instagram.com/fitclub" className="text-gray-400 md:text-lg hover:text-white">Instagram</a>
          </div>
          <div className="flex flex-col md:ml-0 mt-4 md:mt-0 -ml-20 md:mr-10 space-y-2 md:space-y-0">
            <h3 className="md:text-2xl text-xl font-bold mb-2">Menu</h3>
            <Link to="/" onClick={handleLinkClick} className="text-gray-400 md:text-lg hover:text-white">Home</Link>
            <Link to="services" onClick={handleLinkClick} className="text-gray-400 md:text-lg hover:text-white">Services</Link>
            <Link to="/about" onClick={handleLinkClick} className="text-gray-400 md:text-lg hover:text-white">About Us</Link>
            <Link to="/contact" onClick={handleLinkClick} className="text-gray-400 md:text-lg hover:text-white">Contact</Link>
          </div>
          <div className="md:text-center mt-4 md:mt-0 flex flex-col">
            <h3 className="md:text-2xl text-xl md:ml-0 font-bold mb-2">Say Hello</h3>
            <a href="mailto:info@example.com" className="text-gray-400 md:text-lg hover:text-white">info@example.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
