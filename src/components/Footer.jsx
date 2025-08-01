import React from 'react'
import Logo from '../assets/logo.png'
import FooterData from '../assets/FooterData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'; // fas
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-[1400px] mx-auto px-4 py-18 md:px-10 lg:pt-30 xl:px-32">

        <div className='grid gap-12 md:grid-cols-2 lg:flex lg:justify-between'>
          <div className='flex flex-col gap-10 justify-end'>
            <img src={Logo} alt='Logo' className='w-32 h-12' />
            <p className='font-oswald text-gray-400 font-semibold'>Receive updates and latest news <br/> direct from Simply enter.</p>
            <div className='flex flex-col gap-3'>
              <p className='font-oswald text-white font-semibold text-3xl'>+564 <span className='text-[#d19f68]'>7885 3222</span></p>
              <p>youremail@gmail.com</p>
            </div>
          </div>
          <div className='grid gap-15 md:flex md:gap-24 lg:flex lg:gap-30'>
            {FooterData.map((section) => (
              <div key={section.category} className='flex flex-col gap-10'>
                <h3 className="font-oswald uppercase">{section.category}</h3>
                <ul className='flex flex-col gap-5'>
                  {section.items.map((item) => (
                      <li className='font-oswald text-gray-400 font-semibold cursor-pointer lg:hover:text-white lg:transform 
                        lg:hover:translate-x-2 lg:transition-all lg:duration-200 lg:ease-in-out' key={item}>
                        {item}
                      </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col gap-5 space-y-4">
            <h3 className="font-oswald text-lg uppercase tracking-wider">
              Newsletter
            </h3>
            <p className="text-gray-400">
              Subscribe to our newsletter for updates.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="bg-[#d19f68] text-black px-4 py-2 rounded-r-md hover:bg-[#d19f68] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:flex lg:flex-row border-t border-gray-400 mt-12 pt-6 text-gray-400 lg:items-center lg:justify-between">
          <p className=''>
            Copyright © {new Date().getFullYear()} All rights reserved | This template is made with 
            <FontAwesomeIcon icon={faHeart} className='text-[#d19f68]'/> by <span className='text-[#d19f68] cursor-pointer'>Big Joe</span>
          </p>
          <div className='flex gap-5 font-oswald text-sm'>
            <FontAwesomeIcon className='hover:text-white cursor-pointer' icon={faTwitter} />
            <FontAwesomeIcon className='hover:text-white cursor-pointer' icon={faFacebookF} />
            <FontAwesomeIcon className='hover:text-white cursor-pointer' icon={faGlobe} />
            <FontAwesomeIcon className='hover:text-white cursor-pointer' icon={faInstagram} />
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
