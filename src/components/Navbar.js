import React, { useState, useEffect } from 'react';
import { IoMdFitness } from "react-icons/io";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showSidebar]);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (isMobile) {
      closeSidebar();
    }
  };

  return (
    <div>
      <nav className="bg-zinc-950 text-white py-6 flex justify-between items-center h-20 relative">
        <div className="ml-4 md:ml-20 flex">
          <p className='font-bold text-2xl md:text-3xl'>FitClub</p>  
          <span className='text-3xl md:text-4xl'><IoMdFitness /></span>
        </div>
        {isMobile && (
          <div className="md:hidden">
            {showSidebar ? (
              <button onClick={closeSidebar} className="text-zinc-600 mr-10">
               Close <span className='font-semibold text-white text-lg'>X</span>
              </button>
            ) : (
              <button onClick={toggleSidebar} className="text-white">
                <GiHamburgerMenu />
              </button>
            )}
          </div>
        )}
        <div className="hidden md:flex flex-grow justify-center items-center space-x-8 text-lg font-semibold">
          <Link to="/" className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => handleLinkClick('home')}>Home</Link>
          <Link to="/about" className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} onClick={() => handleLinkClick('about')}>About</Link>
          <Link to="/gallery" className={`nav-link ${activeLink === 'gallery' ? 'active' : ''}`} onClick={() => handleLinkClick('gallery')}>Gallery</Link>
          <Link to="/plans" className={`nav-link ${activeLink === 'plans' ? 'active' : ''}`} onClick={() => handleLinkClick('plans')}>Plans</Link>
          <Link to="/trainers" className={`nav-link ${activeLink === 'trainers' ? 'active' : ''}`} onClick={() => handleLinkClick('trainers')}>Trainers</Link>
          <a href="#" className={`nav-link ${activeLink === 'contact' ? 'active' : ''} bg-red-600 px-4 py-2 hover:bg-red-500 `} onClick={() => handleLinkClick('contact')}>{isMobile ? 'Contact Us' : 'Find Us'}</a>
        </div>
      </nav>
      {isMobile && showSidebar && (
        <div className="fixed top-20 right-0 z-50 bg-zinc-950 text-white w-screen h-screen md:w-64 overflow-y-auto">
          <div className="p-4">
            <ul className="py-4 text-left text-lg font-semibold">
              <li className="mb-4">
                <Link to="/" className={`sidebar-nav-link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => handleLinkClick('home')}>Home</Link>
              </li>
              <li className="mb-4">
                <Link to="/about" className={`sidebar-nav-link ${activeLink === 'about' ? 'active' : ''}`} onClick={() => handleLinkClick('about')}>About</Link>
              </li>
              <li className="mb-4">
                <Link to="/gallery" className={`sidebar-nav-link ${activeLink === 'gallery' ? 'active' : ''}`} onClick={() => handleLinkClick('gallery')}>Gallery</Link>
              </li>
              <li className="mb-4">
                <Link to="/plans" className={`sidebar-nav-link ${activeLink === 'plans' ? 'active' : ''}`} onClick={() => handleLinkClick('plans')}>Plans</Link>
              </li>
              <li className="mb-4">
                <Link to="/trainers" className={`sidebar-nav-link ${activeLink === 'trainers' ? 'active' : ''}`} onClick={() => handleLinkClick('trainers')}>Trainers</Link>
              </li>
              <li className="mb-4">
                <a href="#" className={`sidebar-nav-link ${activeLink === 'contact' ? 'active' : ''}`} onClick={() => handleLinkClick('contact')}>{isMobile ? 'Contact Us' : 'Find Us'}</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
