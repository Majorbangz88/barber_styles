import React, { useState, useEffect } from 'react';

const Carousel = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState([]);

  useEffect(() => {
    const endIndex = Math.min(currentIndex + 2, reviews.length);
    setVisibleReviews(reviews.slice(currentIndex, endIndex));
  }, [currentIndex, reviews]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 2 >= reviews.length ? 0 : prevIndex + 2
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 2 < 0 ? reviews.length - (reviews.length % 2 || 2) : prevIndex - 2
    );
  };

  return (
    <div className='relative w-full lg:max-w-[110vh] mx-auto'>
      <div className='flex flex-col items-center gap-15'>
        <div className='flex md:flex-col lg:flex-row overflow-hidden'>
        {visibleReviews.map((review) => (
          <div 
            key={review.name} 
            className='flex-shrink-0 w-full md:w-1/2 px-18 py-6 transition-transform duration-300'
          >
            <div className='flex flex-col gap-8 h-full'>
              <div className='border-2 rounded-full w-20 h-20 flex items-center justify-center'>
                <p className='font-oswald font-bold text-6xl'>"</p>
              </div>
              <p className='font-oswald text-white text-xl leading-10'>{review.review}</p>
              <hr />
              <p className='text-white text-xl'>{review.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='flex gap-3'>
            <div className='borer h-2 w-7 bg-white'></div>
            <div className='borer h-2 w-7 bg-white'></div>
            <div className='borer h-2 w-7 bg-white'></div>
            <div className='borer h-2 w-7 bg-white'></div>
            <div className='borer h-2 w-7 bg-white'></div>
        </div>
      </div>

      <button 
        onClick={prevSlide}
        className='absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full'
      >
        &lt;
      </button>
      <button 
        onClick={nextSlide}
        className='absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full'
      >
        &gt;
      </button>

    </div>
  );
};

export default Carousel;