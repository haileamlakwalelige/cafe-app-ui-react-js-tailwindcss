import React from 'react';
import ima from '../assets/four.png';

const Enjoy = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-40 px-56">
        <div className="bg-white pl-5 w-[450px] h-full py-5 rounded-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-lg">
                Enjoy Your <br /> Organic Food
              </h1>
              <p className="text-justify text-sm py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae voluptates commodi quas fugit.
              </p>
              <button className="text-black font-bold bg-orange-500 px-8 rounded-full py-2">
                Order Now
              </button>
            </div>
            <img src={ima} alt="food image" className="h-32 w-32 -mr-8 pl-6" />
          </div>
        </div>
        <div className="bg-white pl-5 w-[450px] h-full py-5 rounded-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-lg">
                Enjoy Your <br /> Organic Food
              </h1>
              <p className="text-justify text-sm py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae voluptates commodi quas fugit.
              </p>
              <button className="text-black font-bold bg-orange-500 px-8 rounded-full py-2">
                Order Now
              </button>
            </div>
            <img src={ima} alt="food image" className="h-32 w-32 -mr-8 pl-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enjoy;
