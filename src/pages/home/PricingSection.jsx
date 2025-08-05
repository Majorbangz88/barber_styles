import React from 'react';
import PricingImg1 from '../../assets/pricing1.png';
import PricingImg2 from '../../assets/pricing2.png';

const PricingSection = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center gap-16 md:items-center lg:items-center bg-white py-20 px-6'>

      <div className='flex flex-col gap-20 items-center md:items-start'>
        <div className='flex flex-col gap-6 text-center md:text-left'>
          <p className='font-oswald font-semibold text-2xl text-black'>
            OUR BEST PRICING
          </p>
          <p className='font-bold text-4xl md:text-6xl text-black leading-tight'>
            WE PROVIDE BEST PRICE <br /> IN THE CITY!
          </p>
        </div>

        <div className='flex flex-col md:flex-row justify-between w-full gap-12'>
          <div>
            <ul className='flex flex-col gap-6'>
              <li className='text-black font-oswald text-xl'>
                STYLING..........................
                <span className='text-yellow-600'>$25</span>
              </li>
              <li className='text-black font-oswald text-xl'>
                STYLING + COLOR..................
                <span className='text-yellow-600'>$65</span>
              </li>
              <li className='text-black font-oswald text-xl'>
                STYLING + TINT...................
                <span className='text-yellow-600'>$65</span>
              </li>
              <li className='text-black font-oswald text-xl'>
                SEMI-PERMANENT WAVE..............
                <span className='text-yellow-600'>$65</span>
              </li>
              <li className='text-black font-oswald text-xl'>
                CUT + STYLING....................
                <span className='text-yellow-600'>$63</span>
              </li>
              <li className='text-black font-oswald text-xl'>
                CUT + STYLING + COLOR............
                <span className='text-yellow-600'>$100</span>
              </li>
              <li className='text-black font-oswald text-xl'>
                CUT + STYLING + TINT.............
                <span className='text-yellow-600'>$100</span>
              </li>
            </ul>
          </div>

          <div>
            <ul className='flex flex-col gap-6'>
              <li className='text-black font-oswald text-xl'>
                CUT..................
                <span className='text-yellow-600'>$25</span>
              </li>
              <li className='text-black font-oswald text-xl'>
                SHAVE..................
                <span className='text-yellow-600'>$65</span>
              </li>
              <li className='text-black font-oswald text-xl'>
                BEARD TRIM..................
                <span className='text-yellow-600'>$65</span>
              </li>
              <li className='text-black font-oswald text-xl'>
                CUT + BEARD TRIM WAVE..................
                <span className='text-yellow-600'>$65</span>
              </li>
              <li className='text-black font-oswald text-xl'>
                CUT + SHAVE..................
                <span className='text-yellow-600'>$63</span>
              </li>
              <li className='text-black font-oswald text-xl'>
                CLEAN UP..................
                <span className='text-yellow-600'>$100</span>
              </li>
              <li className='text-black font-oswald text-xl'>
                CUT + STYLING + TINT..................
                <span className='text-yellow-600'>$100</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="relative w-full max-w-[600px] lg:max-w-none lg:w-auto mt-10 lg:mt-0">
        <img
          src={PricingImg1}
          alt="Barber Working"
          className="w-full h-auto object-cover rounded shadow-md"
        />

        <img
          src={PricingImg2}
          alt="Close-up Barber"
          className="
            absolute 
            right-0 bottom-[20px]
            w-[60%] 
            sm:w-[60%] 
            md:w-[45%] 
            lg:w-[65%] 
            lg:bottom-[25px] 
            lg:right-[-60px]
            shadow-lg 
            z-10
          "
        />
      </div>
    </div>
  );
};

export default PricingSection;
