import React from 'react';
import four from '../assets/four.png';

const Offer = () => {
  return (
    <div className="py-20">
      <div>
        <h1 className="text-center text-5xl font-bold py-10">
          We Offer You <br /> Different Tastes
        </h1>
        <div className="grid grid-cols-3 gap-20 px-20 justify-start items-start">
          <div className="mt-8 bg-orange-300 w-72 h-[300px] overflow-y-hidden py-5 pl-3 rounded flex justify-between pr-5">
            <div>
              <div className="flex justify-start pl-3 items-center gap-3 rounded-full bg-white w-44 my-3 shadow-xl">
                <img src={four} alt="images" className="h-12 w-12" />
                <p className="font-bold">Haila</p>
              </div>
              <div className="flex justify-start pl-3 items-center gap-3 rounded-full bg-orange-500 w-44 my-3 shadow-xl">
                <img src={four} alt="images" className="h-12 w-12" />
                <p className="font-bold">Haila</p>
              </div>
              <div className="flex justify-start pl-3 items-center gap-3 rounded-full bg-white w-44 my-3 shadow-xl">
                <img src={four} alt="images" className="h-12 w-12" />
                <p className="font-bold">Haila</p>
              </div>
              <div className="flex justify-start pl-3 items-center gap-3 rounded-full bg-white w-44 my-3 shadow-xl">
                <img src={four} alt="images" className="h-12 w-12" />
                <p className="font-bold">Haila</p>
              </div>
            </div>
            <div>
              <div className="h-full bg-gray-200 rounded-full w-2.5 dark:bg-white">
                <div
                  className="bg-orange-600 w-2.5 rounded-full"
                  style={{ height: '45%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center pr-28 py-3">
            <div className=" bg-white grid grid-cols-3 justify-between items-between py-4 px-3 mt-5 gap-10 w-[400px]  h-60">
              <div className=" w-full h-full col-span-2">
                <h1 className="font-bold text-3xl">Grilled Vegetables</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  eos.
                </p>
                <div className="py-3 flex justify-between items-center mb-5">
                  <p className="font-bold text-2xl">$24.75</p>
                  <button className="ml-8 flex pl-3 items-center gap-3 rounded-full bg-white w-44 my-3 shadow-xl py-2 border-[1px] border-orange-600 justify-center font-bold pr-2.5 hover:bg-orange-600 text-center">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div>
                <img
                  src={four}
                  alt="this is food"
                  className="h-30 w-30 ml-10 "
                />
              </div>
            </div>
            <div className=" bg-white grid grid-cols-3 justify-between items-between  py-4 px-3 mt-5 gap-10 w-[400px] h-60">
              <div className=" w-full h-full col-span-2">
                <h1 className="font-bold text-3xl">Grilled Vegetables</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  eos.
                </p>
                <div className="py-3 flex justify-between items-center">
                  <p className="font-bold text-2xl">$24.75</p>
                  <button className="flex pl-3 items-center gap-3 rounded-full bg-white w-44 my-3 shadow-xl py-2 border-[1px] border-orange-600 justify-center font-bold ml-8 pr-2.5 hover:bg-orange-600 text-center">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div>
                <img
                  src={four}
                  alt="this is food"
                  className="h-30 w-30 ml-10 "
                />
              </div>
            </div>
          </div>
          <div >
          <div className="mt-4 flex flex-col justify-between items-center">
          <div className=" bg-orange-300 grid grid-cols-3 justify-between items-between py-4 px-3 mt-5 gap-10 w-[400px] h-60">
            <div className=" w-full h-full col-span-2">
              <h1 className="font-bold text-3xl">Grilled Vegetables</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                eos.
              </p>
              <div className="py-3 flex justify-between items-center">
                <p className="font-bold text-2xl">$24.75</p>
                <button className="flex pl-3 items-center gap-3 rounded-full bg-orange-500 pr-2.5 w-44 my-3 shadow-xl py-2 border-[1px] border-orange-600 justify-center font-bold ml-8 hover:bg-orange-600 text-center">
                  Add to Cart
                </button>
              </div>
            </div>
            <div>
              <img src={four} alt="this is food" className="h-30 w-30 ml-10 " />
            </div>
          </div>
          <div className=" bg-white grid grid-cols-3 justify-between items-between py-4 px-3 mt-5 gap-10 w-[400px] h-60 ">
            <div className=" w-full h-full col-span-2">
              <h1 className="font-bold text-3xl">Grilled Vegetables</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                eos.
              </p>
              <div className="py-3 flex justify-between items-center">
                <p className="font-bold text-2xl">$24.75</p>
                <button className="flex pl-3 items-center gap-3 rounded-full pr-2.5 bg-white w-44 my-3 shadow-xl py-2 border-[1px] border-orange-600 justify-center font-bold ml-8 hover:bg-orange-600 text-center">
                  Add to Cart
                </button>
              </div>
            </div>
            <div>
              <img src={four} alt="this is food" className="h-30 w-30 ml-10 " />
            </div>
          </div>
        </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Offer;
