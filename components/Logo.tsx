// src/components/Logo.js
import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const Logo = () => {
  return (
    <div className='w-full'>
    <div className="absolute top-14 left-4 md:left-12 bottom-0 p-0 m-0 pl-1 w-full h-auto">
    
      <img src="/beyonde.png" alt="Logo" className="md:w-48 w-40 h-auto object-cover" />
    </div>
   
    <div className="absolute top-12 md:top-12  right-28 md:right-44 h-10 w-10 mt-2">
      <a href="#contact">
                  <button className="shadow-[inset_0_0_0_2px_#616467] text-black pt-4 pb-3
                   rounded-full tracking-normal uppercase font-bold bg-transparent hover:bg-[#221543] hover:text-white dark:text-neutral-200 transition duration-200 w-32 text-xs md:w-40 md:text-base whitespace-nowrap">
  Contact Us
</button> 
              </a>
    </div>

    </div>
  );
};

export default Logo;

