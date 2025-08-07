import React from 'react';
import { Link } from 'react-router-dom';
import HomeBlog1 from '../../assets/home-blog1.png';
import HomeBlog2 from '../../assets/home-blog2.png';

const RecentNewsSection = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-white py-48 px-6 gap-24'>
      <div className='flex flex-col gap-10 items-center'>
        <p className='font-oswald font-semibold text-2xl text-black'>
          OUR RECENT NEWS
        </p>
        <p className='font-bold text-4xl md:text-6xl text-center lg:text-6xl text-black w-[70%]'>
          HIPPOS AND TRICKS FROM RECENT BLOG
        </p>
      </div>

      <div className='flex flex-col md:flex-row lg:flex-row bg-white items-center justify-center gap-10'>
        <Link to={'/blog'}>
          <div className='group'>
            <div className='flex flex-col h-auto items-center border group-hover:border-1 group-hover:border-amber-400 transition group-hover:duration-300'>
              <div className='overflow-hidden w-full'>
                <img
                  src={HomeBlog1}
                  alt=''
                  className='w-full h-auto group-hover:transition object-cover hover:scale-105 duration-300'
                />
              </div>

              <div className='flex flex-col gap-3 py-6 w-[90%] md:w-[80%] lg:w-[70%]'>
                <p className='font-oswald text-black '>| Physics</p>
                <p className='font-oswald text-black font-bold text-2xl md:text-2xl lg:text-3xl group-hover:text-[#d19f68] group-hover:duration-300 cursor-pointer'>
                  FOOTPRINTS IN TIME IS PERFECT HOUSE IN KURASHIKI
                </p>
                <p className='font-oswald text-black'>BECOME A MEMBER</p>
              </div>
            </div>
          </div>
        </Link>

        <Link to={'/blog'}>
          <div className='group'>
          <div className='flex flex-col h-auto items-center border group-hover:border-1 group-hover:border-amber-400 transition group-hover:duration-300'>
            <div className='overflow-hidden w-full'>
              <img
                src={HomeBlog2}
                alt=''
                className='w-full h-auto group-hover:transition object-cover hover:scale-105 duration-300'
              />
            </div>

            <div className='flex flex-col gap-3 py-6 w-[90%] md:w-[80%] lg:w-[70%]'>
              <p className='font-oswald text-black '>| Physics</p>
              <p className='font-oswald text-black font-bold text-2xl md:text-2xl lg:text-3xl group-hover:text-[#d19f68] group-hover:duration-300 cursor-pointer'>
                FOOTPRINTS IN TIME IS PERFECT HOUSE IN KURASHIKI
              </p>
              <p className='font-oswald text-black'>BECOME A MEMBER</p>
            </div>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default RecentNewsSection;
