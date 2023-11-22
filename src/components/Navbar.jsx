import React from 'react';
import { PiCirclesThreeFill } from 'react-icons/pi';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='bg-orange-100'>
      <div className="grid grid-cols-3 justify-center gap-10 items-center py-8">
        <div className="flex justify-center items-center">
          <PiCirclesThreeFill className="text-orange-500" />
          <p className='font-bold pl-1'>FoodyDots</p>
        </div>
        <div className='flex justify-between items-center gap-3 '>
          <li className='font-bold text-base list-none text-orange-500'>Home</li>
          <li className='font-bold text-base list-none'>Menu</li>
          <li className='font-bold text-base list-none'>Delivery</li>
          <li className='font-bold text-base list-none'>Service</li>
          <li className='font-bold text-base list-none'>Contact</li>
        </div>
        <div className='flex justify-center items-center'>
        <div className='flex justify-center items-center rounded-full border-2 bg-white text-black'>
            <input type="text"  className='bg-white rounded-full w-44 focus:outline-none placeholder:pl-3' placeholder='Search ...'/>
            <FaSearch  size={30} className='text-black rounded-full p-2 bg-orange-500'/>
        </div>
        <div>
            <button className='py-2 px-5 bg-orange-500 rounded-full ml-4 text-sm text-black'>Order Now</button>
        </div>
        </div>
      </div>
    </div>
  );
}; 

export default Navbar;
