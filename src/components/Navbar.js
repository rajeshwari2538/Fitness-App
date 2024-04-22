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
    document.body.style.overflow = showSidebar ? 'hidden' : 'auto';
  }, [showSidebar]);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const closeSidebar = () => setShowSidebar(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (isMobile) closeSidebar();
  };

  return (
    <div>
      <nav className="bg-neutral-900 text-white py-6 flex justify-between items-center h-20 relative">
        <div className="ml-6 md:ml-20 flex">
          <p className='font-bold text-2xl md:text-3xl'>FitClub</p>  
          <span className='text-3xl md:text-4xl'><IoMdFitness /></span>
        </div>
        {isMobile && (
          <div className="md:hidden">
            <button onClick={showSidebar ? closeSidebar : toggleSidebar} className="text-white text-xl mr-5">
              {showSidebar ? 'Close X' : <GiHamburgerMenu />}
            </button>
          </div>
        )}
        <div className="hidden md:flex flex-grow justify-center items-center space-x-8 text-lg font-semibold">
          {['home', 'about', 'gallery', 'plans', 'trainers', 'contact'].map((link) => (
            <Link
              key={link}
              to={link === 'home' ? '/' : `/${link}`}
              className={`nav-link ${activeLink === link ? 'active' : ''}`}
              onClick={() => handleLinkClick(link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          ))}
        </div>
      </nav>
      {isMobile && showSidebar && (
        <div className="fixed top-20 right-0 z-50 bg-neutral-900 text-white w-screen h-screen md:w-64 overflow-y-auto">
          <div className="p-4">
            <ul className="py-4 text-left text-lg font-semibold">
              {['home', 'about', 'gallery', 'plans', 'trainers', 'Contact'].map((link) => (
                <li key={link} className="mb-4">
                  <Link
                    to={link === 'home' ? '/' : `/${link}`}
                    className={`sidebar-nav-link ${activeLink === link ? 'active' : ''}`}
                    onClick={() => handleLinkClick(link)}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
