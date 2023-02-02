'use client';

import { useState } from 'react';
import { ExploreCard, Footer, Navbar } from '../components';
import { exploreWorlds } from '../constants';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

// const [active, setActive] = useState('world-2');
const Page = () =>{
  const [active, setActive] = useState('world-1');
  return (
    
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />

    </div>
    <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
    <World />
    <div className="relative">
      
      <Insights />
      
      
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
  );
} 
  

  

export default Page;
