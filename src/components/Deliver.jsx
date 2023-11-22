import React from 'react';
// import { IoPlay } from 'react-icons/io5';
import imo3 from '../assets/food3.jpg';
import imo2 from '../assets/food2.jpg';
import imo1 from '../assets/food1.jpg';
import { IoMdCart, IoMdWatch  } from 'react-icons/io';
import { FaRegBell } from "react-icons/fa6";

const Deliver = () => {
  return (
    <div className="grid grid-cols-2 px-40 pt-20">
      <div>
        <div className="flex justify-center flex-col">
          <div className="flex justify-center">
            <div className="pt-5 h-44  w-44  -mr-20">
              <img
                src={imo1}
                alt="Delivery Image"
                className="h-44  w-44 rounded-2xl -mr-32"
              />
            </div>
            <img
              src={imo2}
              alt="Delivery Image"
              className="h-60 w-56 rounded-2xl"
            />
          </div>
          <div className="flex justify-center ml-32 items-center h-44 w-56 -mt-24">
            <img
              src={imo3}
              alt="Delivery Image"
              className="h-56 w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-2xl">We Deliver Anywhere</h1>
        <p className="text-sm text-justify py-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla,
          quasi dolorem obcaecati velit quas quos dignissimos culpa ea mollitia
          incidunt harum vero a non similique iste temporibus facilis quisquam?
        </p>
        <div className="flex justify-start items-center">
          <button className="text-black font-bold bg-orange-500 px-8 rounded-full py-2">
            Contact Us
          </button>
          <button className="text-black font-bold bg-white border-2 border-orange-500 px-8 rounded-full py-2 ml-16">
            View Menu
          </button>
        </div>
        <div className="flex justify-between items-center py-5">
          <button className="text-black flex text-sm bg-white shadow-2xl px-3 rounded-full py-2 ">
            <IoMdCart
              size={25}
              className="bg-orange-400 flex items-center justify-center  p-1 rounded-full text-sm text-black -mt-1 my-0.5"
            />{' '}
            <p className="pl-1">Order Now</p>
          </button>
          <button className="text-black flex text-sm bg-white shadow-2xl px-3 rounded-full py-2 ">
            <IoMdWatch 
              size={25}
              className="bg-orange-400 flex items-center justify-center p-1  rounded-full text-sm text-black -mt-1 my-0.5"
            />{' '}
            <p className="pl-1">24/7 service</p>
          </button>
          <button className="text-black flex text-sm bg-white shadow-2xl px-3 rounded-full py-2 ">
            <FaRegBell
              size={25}
              className="bg-orange-400 flex items-center justify-center  p-1 rounded-full text-sm text-black -mt-1 my-0.5"
            />{' '}
            <p className="pl-1">View Menu</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deliver;
