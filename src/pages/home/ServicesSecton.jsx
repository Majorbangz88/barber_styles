import React from 'react';
import Dot from '../../assets/dot.png';
import { FaDumbbell, FaHandsHelping } from 'react-icons/fa';
import { GiBeard } from 'react-icons/gi';

const ServicesSecton = () => {
  return (
    <div className='flex flex-col bg-white items-center gap-20 py-18'>

      <div className='flex flex-col gap-10 items-center'>
        <p className='font-oswald font-bold text-lg text-black'>
          PROFESSIONAL SERVICES
        </p>
        <p className='font-bold text-2xl md:text-6xl text-center lg:text-6xl text-black'>
          OUR BEST SERVICES THAT WE <br /> ARE OFFERING TO YOU
        </p>
      </div>

      <div className='flex flex-col gap-8 md:flex-wrap lg:flex-row'>

        <div className='flex flex-col items-center bg-gray-100 gap-6 px-7 py-10 '>
          <div className=' relative flex items-end mt-9'>
            <div className='relative z-10 flex items-center justify-center bg-blue-950 hover:bg-[#d19f68] w-25 h-25'>
              <FaDumbbell className='text-4xl text-gray-200' title='Workout' />
            </div>
            <img
              src={Dot}
              alt=''
              className='absolute bottom-0 left-[52%] w-20 z-0'
            />
          </div>
          <p className='font-bold text-2xl text-blue-950'>Stylish Hair Cut</p>
          <p className='text-center leading-6 text-blue-950 w-68 md:w-60 lg:w-68'>
            Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor
            incididunt ut laborea.
          </p>
        </div>

        <div className='flex flex-col items-center bg-gray-100 gap-6 px-7 py-10'>
          <div className='relative flex items-end mt-9'>
            <div className='relative z-10 flex items-center justify-center bg-blue-950 hover:bg-[#d19f68] w-25 h-25'>
              <FaHandsHelping className='text-4xl text-gray-200' title='Massage' />
            </div>
            <img
              src={Dot}
              alt=''
              className='absolute bottom-0 left-[52%] w-20 z-0'
            />
          </div>
          <p className='font-bold text-2xl text-blue-950'>Body Massage</p>
          <p className='text-center leading-6 text-blue-950 w-68 md:w-60 lg:w-68'>
            Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor
            incididunt ut laborea.
          </p>
        </div>

        <div className='flex flex-col items-center bg-gray-100 gap-6 px-7 py-10'>
          <div className='relative flex items-end mt-9'>
            <div className='relative z-10 flex items-center justify-center bg-blue-950 hover:bg-[#d19f68] w-25 h-25'>
              <GiBeard className='text-4xl text-gray-200' title='Beard Styling' />
            </div>
            <img
              src={Dot}
              alt=''
              className='absolute bottom-0 left-[52%] w-20 z-0'
            />
          </div>
          <p className='font-bold text-2xl text-blue-950'>Beard Style</p>
          <p className='text-center leading-6 text-blue-950 w-68 md:w-60 lg:w-68'>
            Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor
            incididunt ut laborea.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ServicesSecton;
