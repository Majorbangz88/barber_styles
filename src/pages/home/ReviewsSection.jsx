import React from 'react';
import ReviewsData from '../../assets/ReviewsData';
import Carousel from '../../components/Carousel';
import ReviewsBg from '../../assets/section_bg02.png';

const ReviewsSection = () => {
  return (
    <div className='flex flex-col items-center justify-center py-60 overflow-hidden bg-cover bg-fixed relative z-0 bg-center bg-no-repeat'
        style={{backgroundImage: `url(${ReviewsBg})`, width: '100%', height: '70vh' }}
        >
      <div className='container mx-auto px-4'>
        <h2 className='text-white text-3xl font-bold text-center mb-12'>
          CLIENT TESTIMONIALS
        </h2>
        <Carousel reviews={ReviewsData} />
      </div>
    </div>
  );
};

export default ReviewsSection;