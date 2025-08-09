import React from 'react';
import Gallery1 from '../../assets/gallery1.png';
import Gallery2 from '../../assets/gallery2.png';
import Gallery3 from '../../assets/gallery3.png';
import Gallery4 from '../../assets/gallery4.png';

const ImageGallery = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-white py-24 px-6 gap-20'>
      <div className='flex flex-col gap-10 items-center'>
        <p className='font-oswald font-semibold text-2xl text-black'>
          OUR IMAGE GALLERY
        </p>
        <p className='font-bold text-2xl md:text-5xl text-center lg:text-6xl text-black lg:w-[70%]'>
          SOME IMAGES FROM OUR BARBER SHOP
        </p>
      </div>

      <div className='flex flex-col gap-10'>

        <div className='flex flex-col md:flex-row gap-10'>
          <div className='overflow-hidden'>
            <img
              src={Gallery1}
              alt='Barber shop service'
              className='h-[400px] w-[460px] md:h-[400px] md:w-[320px] lg:h-auto lg:w-full object-cover hover:scale-105 transition duration-300'
            />
          </div>
          <div className='overflow-hidden'>
            <img
              src={Gallery2}
              alt='Barber working'
              className='h-[400px] w-[460px] md:h-[400px] md:w-[320px] lg:h-auto lg:w-full object-cover object-left hover:scale-105 transition duration-300'
            />
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-10'>
          <div className='overflow-hidden'>
            <img
              src={Gallery3}
              alt='Haircut in progress'
              className='h-[400px] w-[460px] md:h-[400px] md:w-[320px] lg:h-auto lg:w-full object-cover object-left hover:scale-105 transition duration-300'
            />
          </div>
          <div className='overflow-hidden'>
            <img
              src={Gallery4}
              alt='Barber tools'
              className='h-[400px] w-[460px] md:h-[400px] md:w-[320px] lg:h-auto lg:w-full object-cover object-left hover:scale-105 transition duration-300'
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ImageGallery;
