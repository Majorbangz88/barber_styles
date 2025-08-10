import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import FooterData from '../assets/FooterData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [blogId, setBlogId] = useState();

  // const handleClick => {

  // }

  return (
    <footer className='bg-black'>
      <div className='flex flex-col gap-10 md:gap-12 lg:gap-30 mx-auto px-6 sm:px-10 py-18 lg:pt-30 max-w-7xl'>
        <div className='grid gap-12 md:grid-cols-2 lg:flex lg:justify-between'>
          <div className='flex flex-col gap-10 justify-end'>
            <img src={Logo} alt='Logo' className='w-32 h-12' />
            <p className='font-oswald text-gray-400 text-sm md:text-lg lg:text-xl leading-9'>
              Receive updates and latest news <br /> direct from Simply enter.
            </p>
            <div className='flex flex-col gap-3'>
              <p className='font-oswald text-white text-2xl md:text-3xl font-bold lg:text-4xl'>
                070 <span className='text-[#d19f68]'>3309 9619</span>
              </p>  
              <p className='font-oswald text-sm md:text-lg lg:text-xl'>
                joellegend582@gmail.com
              </p>
            </div>
          </div>

          <div className='grid gap-15 md:flex lg:flex lg:gap-40'>
            {FooterData.map((section) => (
              <div key={section.category} className='flex flex-col gap-10'>
                <h3 className='font-oswald font-semibold text-lg md:text-xl lg:text-2xl uppercase'>
                  {section.category}
                </h3>
                <ul className='flex flex-col gap-5'>
                  {section.items.map((item) => (
                    <li
                      className='font-oswald text-sm md:text-lg lg:text-xl text-gray-400 cursor-pointer lg:hover:text-white lg:transform 
                        lg:hover:translate-x-2 lg:transition-all lg:duration-200 lg:ease-in-out'
                      key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className='flex flex-col gap-5 space-y-4'>
            <h3 className='font-oswald font-semibold text-lg md:text-xl lg:text-2xl uppercase tracking-wider'>
              Newsletter
            </h3>
            <p className='text-gray-400 font-oswald md:text-lg text-sm lg:text-xl'>
              Subscribe to our newsletter for updates.
            </p>
            <div className='flex flex-col sm:flex-row sm:items-center'>
              <input
                type='email'
                placeholder='Your email'
                className='px-4 py-2 bg-gray-800 text-white text-xl h-14 md:w-[45vh] lg:w-[30vh] rounded-t-md sm:rounded-tr-none sm:rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500 w-full'
              />
              <button className='text-[#d19f68] font-oswald text-lg px-4 py-2 h-14 sm:h-13 rounded-b-md sm:rounded-bl-none sm:rounded-r-md transition-colors cursor-pointer w-full sm:w-auto'>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className='flex flex-col'>
          <hr className='text-gray-600 h-0.2 w-full' />
          <div className='flex flex-col gap-5 lg:flex-row mt-4 lg:mt-12 pt-6 text-gray-400 lg:items-center lg:justify-between'>
            <p className='font-oswald text-sm md:text-lg lg:text-xl font-stretch-150%'>
              Copyright © {new Date().getFullYear()} All rights reserved | This
              template is made with
              <FontAwesomeIcon
                icon={faHeart}
                className='text-[#d19f68]'
              /> by{' '}
              <span className='text-[#d19f68] cursor-pointer'>Big Joe</span>
            </p>
            <div className='flex gap-5 font-oswald text-sm'>
              <FontAwesomeIcon
                className='hover:text-white cursor-pointer font-oswald text-sm md:text-xl lg:text-xl hover:rotate-y-180 duration-300'
                icon={faTwitter}
              />
              <FontAwesomeIcon
                className='hover:text-white cursor-pointer font-oswald text-sm md:text-xl lg:text-xl hover:rotate-y-180 duration-300'
                icon={faFacebookF}
              />
              <FontAwesomeIcon
                className='hover:text-white cursor-pointer font-oswald text-sm md:text-xl lg:text-xl hover:rotate-y-180 duration-300'
                icon={faGlobe}
              />
              <FontAwesomeIcon
                className='hover:text-white cursor-pointer font-oswald text-sm md:text-xl lg:text-xl hover:rotate-y-180 duration-300'
                icon={faInstagram}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
