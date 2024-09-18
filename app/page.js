'use client'

import React, { useRef } from 'react';
import Deal from "./components/Deal";
import Features from "./components/Features";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

                                                                                                                                                                                                                          


export default function Home() {

  const dealSectionRef = useRef(null);

  const scrollToDealSection = () => {
    if (dealSectionRef.current) {
      dealSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-dotted-pattern min-h-screen">
      <div className="content">

        <NavBar scrollToDealSection={scrollToDealSection}/>
        <Hero/>
        <Features/>
        <Deal dealSectionRef={dealSectionRef}/>


        
        <span className="text-sm opacity-70">© 2024 Feedbackflow. All rights reserved</span>
      </div>
    </div>
  );
}
