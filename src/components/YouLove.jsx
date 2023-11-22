import React from 'react';
import { IoPlay } from "react-icons/io5";
import two from '../assets/seven.png';
import four from '../assets/one.png';
import { FaPhone, FaStar } from "react-icons/fa";


const YouLove = () => {
  return (
    <div>
      <div className='grid grid-cols-2 px-20 mx-24  mt-10'>
        <div>
          <h1 className='font-serif text-5xl font-semibold'>
            Food You Love, <br />
            Delivered to You
          </h1>
          <p className='text-justify py-5'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            perspiciatis nihil, consequatur cum, molestias atque, doloremque
            excepturi deserunt quia natus minima deleniti? Consectetur labore
            aliquid tenetur ullam, ratione vel ut.
          </p>
          <div className='flex justify-between items-center'>
            <button className='text-black font-bold bg-orange-500 px-16 rounded-full py-2'>Explore Now</button>
            <div className='flex justify-center items-center gap-4'>
                <IoPlay size={40} className='text-orange-500 p-2 rounded-full bg-white'/>
            <button>Watch Video</button>
            </div>
          </div>
        </div>
        <div>
          <div className='flex justify-start gap-4 bg-orange-200 rounded-full w-80 h-20 items-center'>
            <img src={four} alt="two" className='h-16 w-16 rounded-full'/>
            <div>
              <h1>Haileamlak Waleligne</h1>
              <div className='flex justify-start py-1 items-center gap-1'>
                <FaStar size={10} className="text-yellow-500"/>
                <FaStar size={10} className="text-yellow-500"/>
                <FaStar size={10} className="text-yellow-500"/>
                <FaStar size={10} className="text-yellow-500"/>
                <FaStar size={10} className="text-yellow-500"/>
              </div>
              <p>$7.50</p>
            </div>
          </div>
          <div className='z-10'><img src={two} alt="food Images" className='relative z-10'/></div>
          <div className='flex justify-start gap-4 bg-orange-200 rounded-full w-80 h-20 items-center ml-60 -mt-80 z-50'>
            <img src={four} alt="two" className='h-16 w-16 rounded-full'/>
            <div>
              <h1>Haileamlak Waleligne</h1>
              <div className='flex justify-start py-1 items-center gap-1'>
                <FaStar size={10} className="text-yellow-500"/>
                <FaStar size={10} className="text-yellow-500"/>
                <FaStar size={10} className="text-yellow-500"/>
                <FaStar size={10} className="text-yellow-500"/>
                <FaStar size={10} className="text-yellow-500"/>
              </div>
              <p>$7.50</p>
            </div>
          </div>
          <div className='flex justify-start gap-4 bg-orange-200 rounded-full w-[350px] h-20 items-center mt-40 z-20'>
            <img src={four} alt="two" className='h-16 w-16 rounded-full z-20'/>
            <div className='flex justify-between items-center z-20'>
             <div >
               <h1>Haileamlak Waleligne</h1>
              <p>Food Courier</p>
             </div>
             <div>
              <FaPhone size={30} className='bg-yellow-500 text-white px-2 rounded-full h-12 w-12 ml-5'/>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouLove;
