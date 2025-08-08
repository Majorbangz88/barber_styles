import React, { useState, useEffect } from 'react';

const Carousel = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState([]);

  useEffect(() => {
    const endIndex = Math.min(currentIndex + 2, reviews.length);
    setVisibleReviews(reviews.slice(currentIndex, endIndex));
  }, [currentIndex, reviews]);

  const numGroups = Math.ceil(reviews.length / 2);

  const handleDotClick = (index) => {
    setCurrentIndex(index * 2);
  };

  return (
    <div className='relative w-full lg:max-w-[110vh] mx-auto'>
      <div className='flex flex-col items-center gap-10'>
        <div className='flex flex-col md:flex-row md:gap-16 lg:gap-16 transition-all duration-300'>
          {visibleReviews.map((review) => (
            <div
              key={review.name}
              className='w-full md:w-[50%] px-4 py-6 bg-opacity-50 rounded-md text-white shadow-md'
            >
              <div className='flex flex-col gap-4 h-full'>
                <div className='border-2 rounded-full w-12 h-12 flex items-center justify-center'>
                  <p className='font-sans font-bold text-6xl'>"</p>
                </div>
                <p className='font-oswald text-14 font-semibold leading-8'>{review.review}</p>
                <hr className="border-gray-300" />
                <p className='text-sm font-semibold text-[#d19f68]'>{review.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='flex gap-2 mt-4'>
          {[...Array(numGroups)].map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`h-2 w-5 transition-colors duration-300 ${
                currentIndex / 2 === i ? 'bg-[#d19f68] w-9' : 'bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
