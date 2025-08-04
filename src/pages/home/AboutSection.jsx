import React from 'react'
import AboutImg from '../../assets/about.png'
import AboutShape from '../../assets/about-shape.png'
import Signature from '../../assets/signature.png'

const AboutSection = () => {
  return (
    <div className='bg-white px-6 py-18 items-center md:px-10 lg:py-44 lg:flex lg:justify-center ems-center lg:gap-20'>
      <div className='relative w-full lg:mx-0 lg:w-auto mb-10 lg:mb-0'>
        <div className='absolute top-5 left-5 w-full h-full bg-[#d19f68] hidden lg:block -z-10'></div>

        <img
          src={AboutImg}
          alt='About'
          className=''
        />
      </div>

      <div className='flex flex-col gap-8 md:gap-6 lg:gap-6 max-w-lg  lg:text-left'>
        <p className='text-black font-oswald font-bold text-sm uppercase'>
          About Our Company
        </p>
        <p className='text-black font-oswald font-extrabold md:text-justify m:text-3xl lg:text-justify lg:text-3xl text-2xl leading-tight'>
          52 YEARS OF EXPERIENCE IN HAIR CUT!
        </p>

        <p className='text-black text-left md:text-justify lg:text-justify leading-8'>
          Brook presents your services with flexible, convenient and custom layouts. You can select your favorite 
          layouts & elements with unlimited customization possibilities. Pixel-perfect replication of the design is intended.
        </p>

        <p className='text-black font-semibold text-left md:text-justify lg:text-justify leading-8'>
          Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite.
        </p>

        <div className='mt-[-3vh] md:mt-[-8vh] lg:mt-[-8vh] flex mx-auto lg:mx-0 items-center'>
          <img
            src={Signature}
            alt='Signature'
            className='h-14 z-10 relative'
          />
          <img
            src={AboutShape}
            alt='Decorative Shape'
            className=' '
          />
        </div>
      </div>
    </div>
  )
}

export default AboutSection
