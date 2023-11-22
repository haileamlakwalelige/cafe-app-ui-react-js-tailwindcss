import React from 'react'
import Review from './Review'
import { IoIosStar } from "react-icons/io";

const Reviews = () => {
  return (
    <div>
        <div className='flex justify-start items-center gap-0'>
            <Review />
            <div className='-ml-32'>
                <p>Our Customer Review</p>
                <div className='flex justify-start items-center'>
                    <IoIosStar size={20} className='text-yellow-500'/>
                    <p className="font-bold text-basae">4.7 <span className='font-light text-sm'>(12.3k Reviews)</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews