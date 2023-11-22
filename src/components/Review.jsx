import React from 'react';
import face from '../assets/face.jpg';

const Review = () => {
  return (
    <div>
      <div className="avatar-group -space-x-6 rtl:space-x-reverse mx-40 py-10">
        <div className="avatar">
          <div className="w-12">
            <img src={face} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-12">
            <img src={face} />{' '}
          </div>
        </div>
        <div className="avatar">
          <div className="w-12">
            <img src={face} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
