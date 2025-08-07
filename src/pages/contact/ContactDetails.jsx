import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { MdPhoneIphone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

const ContactDetails = () => {
  return (
    <div className='bg-white py-12 md:py-24 px-4 sm:px-6 lg:px-8 lg:py-44 flex flex-col items-center'>
      {/* Google Map - Sized to match form height */}
      <div className='w-full max-w-7xl h-[400px] md:h-[500px] bg-gray-200 mb-12 rounded-lg'>
        {/* Replace with your actual map component */}
        <div className='flex items-center justify-center h-full text-gray-500'>
          Google Map will appear here
        </div>
      </div>

      <p className='text-black text-3xl md:text-4xl font-bold mb-8 text-center lg:text-left'>Get in Touch</p>

      <div className='w-full max-w-7xl flex flex-col lg:flex-row gap-12 xl:gap-20 lg:items-start justify-center'>
        <div className='w-full lg:w-[910px]'>
          <form className='flex flex-col gap-10'>
            <textarea 
              name="message" 
              placeholder='Enter Message' 
              className='h-48 md:h-56 w-full border border-gray-300 text-black px-5 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#d19f68]'
            />
            
            <div className='flex flex-col sm:flex-row gap-6'>
              <input 
                type="text" 
                name='name' 
                placeholder='Enter your name' 
                className='flex-1 h-12 min-w-[200px] border border-gray-300 text-black px-5 rounded focus:outline-none focus:ring-2 focus:ring-[#d19f68]'
              />
              <input 
                type="email" 
                name='email' 
                placeholder='Email' 
                className='flex-1 h-12 min-w-[200px] border border-gray-300 text-black px-5 rounded focus:outline-none focus:ring-2 focus:ring-[#d19f68]'
              />
            </div>
            
            <input 
              type="text" 
              name="subject" 
              placeholder='Enter subject' 
              className='w-full h-12 border border-gray-300 text-black px-5 rounded focus:outline-none focus:ring-2 focus:ring-[#d19f68]'
            />
            
            <button 
              type="submit"
              className='h-14 w-full sm:w-40 border-2 border-[#d19f68] text-[#d19f68] font-medium rounded hover:bg-[#d19f68] hover:text-white transition duration-300 self-center lg:self-start'
            >
              SEND
            </button>
          </form>
        </div>

        <div className='w-full lg:w-auto flex flex-col gap-8 md:gap-10 justify-center'>
          <div className='flex gap-5 items-start'>
            <AiFillHome className='text-black text-2xl md:text-3xl mt-1 flex-shrink-0' />
            <div>
              <p className='font-semibold text-lg md:text-xl text-black'>Buttonwood, California.</p>
              <p className='text-black text-base md:text-lg'>Rosemead, CA 91770</p>
            </div>
          </div>
          
          <div className='flex gap-5 items-start'>
            <MdPhoneIphone className='text-black text-2xl md:text-3xl mt-1 flex-shrink-0' />
            <div>
              <p className='font-semibold text-lg md:text-xl text-black'>+234-703-309-9619</p>
              <p className='text-black text-base md:text-lg'>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          
          <div className='flex gap-5 items-start'>
            <IoMdMail className='text-black text-2xl md:text-3xl mt-1 flex-shrink-0' />
            <div>
              <p className='font-semibold text-lg md:text-xl text-black'>joellegend582@gmail.com</p>
              <p className='text-black text-base md:text-lg'>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactDetails