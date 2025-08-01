import React from 'react';
import { assets } from '../../assets/assets';
import SearchBar from '../../components/student/SearchBar';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-20 md:pt-36 px-6 md:px-0 space-y-6 text-center bg-gradient-to-b from-cyan-100/70">
      <h1 className="text-gray-800 font-bold max-w-3xl mx-auto text-home-heading-small md:text-home-heading-large leading-tight">
        Unlock your potential with courses tailored to
        <span className="text-blue-600"> your goals.</span>
      </h1>

      <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">
        Learn from world-class instructors with interactive content and a supportive community—everything you need to grow personally and professionally.
      </p>

      <SearchBar />
    </div>
  );
};

export default Hero;
