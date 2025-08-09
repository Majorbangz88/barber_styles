import React from 'react'
import AboutImg from '../../assets/about.png'
import AboutShape from '../../assets/about-shape.png'
import Signature from '../../assets/signature.png'

const AboutSection = () => {
  return (
    <div className='bg-white px-6 py-8 items-center md:pl-10 md:pr-20 md:justify-center lg:py-44 lg:flex lg:flex-row lg:justify-center ems-center lg:gap-8'>
      <div className='relative w-full md:w-auto lg:mx-0 lg:w-auto mb-10 lg:mb-0'>
        <div className='absolute top-5 left-5 w-full h-full -z-10'></div>

        <img
          src={AboutImg}
          alt='About'
          className='w-full'
        />
      </div>

      <div className='flex flex-col gap-8 md:gap-6 lg:gap-12 w-full lg:w-[55vh] lg:text-left'>
        <div className='flex flex-col gap-8'>
          <p className='text-black font-oswald font-bold text-sm md:text-lg uppercase'>
          About Our Company
        </p>
        <p className='text-black font-oswald font-extrabold md:text-[40px] lg:text-justify lg:text-3xl text-2xl leading-tight'>
          52 YEARS OF EXPERIENCE IN HAIR CUT!
        </p>
        </div>

        <p className='text-black text-left  lg:text-justify leading-8'>
          Brook presents your services with flexible, convenient and custom layouts. You can select your favorite 
          layouts & elements with unlimited customization possibilities. Pixel-perfect replication of the design is intended.
        </p>

        <p className='text-black font-semibold text-left md:text-justify lg:text-justify leading-8'>
          Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite.
        </p>

        <div className='overflow-hidden mt-[-3vh] md:mt-[-8vh] lg:mt-[-8vh] flex mx-auto lg:mx-0 items-center'>
          <img
            src={Signature}
            alt='Signature'
            className='h-14 z-10 relative'
          />
          <img
            src={AboutShape}
            alt='Decorative Shape'
            className='md:ml-[-8vh]'
          />
        </div>
      </div>
    </div>
  )
}

export default AboutSection
