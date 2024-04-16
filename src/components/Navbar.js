import React from 'react';
import { IoMdFitness } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="bg-zinc-950 text-white py-6 flex justify-between items-center h-20">
      <div className="ml-20 flex">
        <p className='font-bold text-3xl'>FitClub</p>  
        <span className='text-4xl'><IoMdFitness /></span>
      </div>
      <ul className="flex space-x-8 justify-center"> 
        <li>
          <a href="#" className="nav-link active">Home</a> 
        </li>
        <li>
          <a href="#" className="nav-link">About</a>
        </li>
        <li>
          <a href="#" className="nav-link">Gallery</a>
        </li>
        <li>
          <a href="#" className="nav-link">Plans</a>
        </li>
        <li>
          <a href="#" className="nav-link">Trainers</a>
        </li>
      </ul>
      <div className="mr-20"> 
        <a href="#" className="px-8 font-semibold py-2 bg-red-600">Find Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
