import React from 'react';
import { FaRegFaceGrin } from 'react-icons/fa6';

const Welcome = () => {
  return (
    <div>
      <div className="flex justify-start items-center gap-5 ml-44 mt-10 bg-orange-500  rounded-full w-[300px] h-10">
        <h1 className="text-center text-gray-900 pl-12 font-bold">
          Welcome to FoodyDots
        </h1>
        <FaRegFaceGrin className="text-gray-900 font-bold" />
      </div>
    </div>
  );
};

export default Welcome;
