import React from 'react'
import heroBg from '../../assets/background/h1_hero.png';
import FilledButton from '../../components/button';
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat bg-fixed relative z-0 flex items-baseline-last"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className='flex justify-between w-full h-[60vh] pl-4'>
        <div className='flex flex-col gap-8 items-center'>
          <div className='flex flex-col gap-7'>
            <p className='font-Oswald font-bold text-lg text-[#d19f68]'>WITH PATRICK POTTER</p>
            <p className='font-Oswald font-extrabold text-5xl leading-16'>OUR HAIR STYLES MAKE YOUR <br/>LOOK ELEGANT</p>
          </div>
          <div>
            <p className='font-Oswald font-extrabold text-8xl text-shadow-sm text-black text-outline opacity-15'>GET MORE CONFIDENT</p>
          </div>
        </div>
        <div className='self-end'>
          <FilledButton
            btnText={
              <div className="flex items-center justify-between gap-4 mx-9">
                <span className='font-Oswald font-bold text-lg'>BOOK AN APPOINTMENT NOW</span>
                <ArrowRight className="" />
              </div>
            }
            textColor="text-black"
            background="bg-[#d19f68]"
            height="h-26"
            width="w-[70vh]"
            padding="px-6 py-4"
            additionalClass="font-Oswald text-sm font-semibold opacity-70"
          />
        </div>
      </div>
      
    </div>
  )
}

export default Hero
