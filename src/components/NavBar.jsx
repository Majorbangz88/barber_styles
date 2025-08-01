import React from 'react';
import logo from '../assets/logo.png'
import FilledButton from './button';

const NavBar = () => {
  return (
    <div className='flex justify-between px-40 py-10.5'>
      <img src={logo} alt='Logo' />
      <div className='flex justify-between gap-14 items-center'>
          <p className='text-white'>Home</p>
          <p className='text-white'>About</p>
          <p className='text-white'>Services</p>
          <p className='text-white'>Portfolio</p>
          <p className='text-white'>Blog</p>
          <p className='text-white'>Contact</p>
          <FilledButton
            btnText="BECOME A MEMBER"
            textColor="text-black"
            background="bg-[#d19f68]"
            height='h-15'
            width="w-auto"
            padding="px-8 py-2"
            additionalClass='font-oswald text-sm font-semibold'
          />
      </div>
    </div>
  )
}

export default NavBar
