import React from 'react';
import { IoMdFitness } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-zinc-950 text-white py-6 flex justify-between items-center h-20">
      <div className="ml-20 flex">
        <p className='font-bold text-3xl'>FitClub</p>  
        <span className='text-4xl'><IoMdFitness /></span>
      </div>
      <ul className="flex space-x-8 justify-center"> 
        <li>
          <Link to="/" className="nav-link active">Home</Link> 
        </li>
        <li>
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li>
          <Link to="/gallery" className="nav-link">Gallery</Link>
        </li>
        <li>
          <Link to="/plans" className="nav-link">Plans</Link>
        </li>
        <li>
          <Link to="/trainers" className="nav-link">Trainers</Link>
        </li>
      </ul>
      <div className="mr-20"> 
        <a href="#" className="px-8 font-semibold py-2 bg-red-600">Find Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
