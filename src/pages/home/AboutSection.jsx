import React from 'react'
import AboutImg from '../../assets/about.png'
import AboutShape from '../../assets/about-shape.png'
import Signature from '../../assets/signature.png'

const AboutSection = () => {
  return (
    <div className='grid bg-white md:flex md lg:flex lg:items-center lg:justify-center py-44 gap-20'>
      <img src={AboutImg} alt='Image' />
      <div>
        <div className='flex flex-col w-[50vh] gap-7 text-justify'>
            <p className='text-black font-oswald font-bold'>About Our company</p>
            <p className='text-black font-oswald font-bold text-4xl'>52 YEARS OF EXPERIENCE IN HAIR CUT!</p>
            <p className='text-black'>
                Brook presents your services with flexible, convenient and cdpoe layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfreplication of the designers is intended.
            </p>
            <p className='text-black'>
                Brook presents your services with flexible, convefnient and ent anipurpose layouts. You can select your favorite.
            </p>
        </div>
        <div>
            <img src={Signature} alt='Signature' />
            <img src={AboutShape} alt='Image' />
        </div>
      </div>
    </div>
  )
}

export default AboutSection
