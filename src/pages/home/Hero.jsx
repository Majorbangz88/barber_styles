import React from 'react';
import heroBg from '../../assets/background/h1_hero.png';
import FilledButton from '../../components/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div
      className='h-[500px] md:h-[75vh] lg:h-screen md:w-auto bg-cover bg-center bg-no-repeat bg-fixed relative z-0 flex items-baseline-last'
      style={{ backgroundImage: `url(${heroBg})` }}>
       
        <div className='flex flex-col w-full gap-10 md:gap-20 lg:gap-20'>
          <div className='flex flex-col gap-7 px-4 md:px-14 lg:w-[120vh] lg:px-14'>
            <p className='font-oswald font-bold text-lg text-[#d19f68]'>
              WITH PATRICK POTTER
            </p>
            <p className='font-oswald text-lg md:text-5xl font-extrabold lg:text-6xl md:leading-16 lg:leading-16'>
              OUR HAIR STYLES MAKE YOUR LOOK ELEGANT
            </p>
          </div>
          <div>
            <p className='font-oswald font-extrabold text-3xl md:text-5xl px-4 md:px-9 lg:px-9 lg:text-9xl text-shadow-sm text-black text-outline opacity-15'>
              GET MORE CONFIDENT
            </p>
          </div>
          <div className='self-end'>
            <FilledButton
              btnText={
                <div className='flex items-center justify-between gap-4 mx-0 md:mx-9 lg:mx-0'>
                  <span className='font-Oswald font-bold text-sm md:text-lg lg:text-lg'>
                    BOOK AN APPOINTMENT NOW
                  </span>
                  <ArrowRight className='' />
                </div>
              }
              textColor='text-black'
              background='bg-[#d19f68]'
              height='w-[30vh] lg:h-26'
              width='h-[6vh] lg:w-[70vh]'
              padding='px-3 md:px-6 md:py-4 lg:px-6 lg:py-4'
              additionalClass='font-Oswald text-sm md:w-[50vh] md:h-20 font-semibold opacity-70'
            />
          </div>
        </div>

    </div>
  );
};

export default Hero;
