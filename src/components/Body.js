import React from 'react';
import Home from './Home';
import Services from './Services';
import Testimonials from './Testimonials';
import Journey from './Journey';
import Empower from './Empower';
import Team from './Team';


const Body = () => {
  return (
    <div className=''>
      <Home />
      <Services />
      <Journey />
      <Empower/>
      <Team />
      <Testimonials />
    </div>
  )
}

export default Body