import React from 'react';
import Home from './Home';
import Services from './Services';
import Testimonials from './Testimonials';
import Journey from './Journey';
import Empower from './Empower';
import Team from './Team';


const Body = () => {
  return (
    <div>
      <Home />
      <Services />
      <Journey />
      <Testimonials />
      <Empower/>
      <Team />
    </div>
  )
}

export default Body