import React from 'react';
import BlogPostsData from '../../assets/BlogPosts';
import { FaUserAlt, FaComments } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import FilledButton from '../../components/button';
import Post1 from '../../assets/posts/post_1.png';
import Post2 from '../../assets/posts/post_2.png';
import Post3 from '../../assets/posts/post_3.png';
import Post4 from '../../assets/posts/post_4.png';
import Post5 from '../../assets/posts/post_5.png';
import Post6 from '../../assets/posts/post_6.png';
import Post7 from '../../assets/posts/post_7.png';
import Post8 from '../../assets/posts/post_8.png';
import Post9 from '../../assets/posts/post_9.png';
import Post10 from '../../assets/posts/post_10.png';

const BlogPosts = () => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const getExcerpt = (text, length = 170) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
  };

  return (
    <div className='flex flex-col justify-center gap-18 px-4 py-30 md:px-10 lg:px-60 lg:flex-row lg:items-start lg:gap-7 bg-white'>
      <div className='flex flex-col gap-10 md:gap-16 lg:gap-20'>
        {BlogPostsData.map((blogPost) => {
          const [year, month, day] = blogPost.date.split('-');
          const monthName = months[parseInt(month, 10) - 1]; // convert "01" -> 1
          const commentCount =
            blogPost.commentCount > 1 ? 'Comments' : 'Comment';

          return (
            <div key={blogPost.id} className=' flex flex-col gap-8'>
              <div className='relative w-full'>
                <img
                  src={blogPost.image}
                  alt='Blog Images'
                  className='w-full h-auto object-cover'
                />
                <div className='absolute bottom-[-8px] left-3 md:left-8 lg:left-15 w-15 h-17 rounded-lg flex flex-col px-2 py-3 items-center justify-center md:w-25 md:h-25 lg:w-25 lg:h-25 bg-[#d19f68] text-white'>
                  <p className='font-bold text-2xl'>{day}</p>
                  <p className='font-semibold text-lg'>{monthName}</p>
                </div>
              </div>
              <div className='text-black font-oswald md:px-12 lg:px-15'>
                <p className='font-bold text-[16px] md:text-2xl lg:text-2xl'>{blogPost.title}</p>
                <p className=' leading-8'>{getExcerpt(blogPost.text)}</p>
                <div className='flex gap-3 mt-8'>
                  <div className='flex text-sm font-oswald items-baseline-last gap-1 text-gray-400'>
                    <FaUserAlt />
                    <p className='font-semibold'>{blogPost.author}</p>
                  </div>
                  <p>|</p>
                  <div className='flex text-sm font-oswald items-baseline-last gap-1 text-gray-400'>
                    <FaComments />
                    <p className='font-semibold'>
                      {blogPost.commentCount} {commentCount}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className='flex flex-col gap-18 w-full md:w-auto lg:w-auto px-8'>
        <div className='flex flex-col gap-5'>
          <div className='flex'>
            <input
              type='text'
              placeholder='Search Keyword'
              name='search'
              className='h-12 w-[30vh] border border-amber-300 px-3 rounded-lg text-gray-600'
            />
            <div className='bg-[#d19f68] h-12 w-12 flex items-center justify-center'>
              <IoSearch className='text-white text-xl' />
            </div>
          </div>
          <FilledButton
            btnText='SEARCH'
            width='w-full'
            height='h-15'
            additionalClass='border border-[#d19f68] text-[#d19f68] font-bold'
          />
        </div>

        <div className='flex flex-col gap-14 text-gray-600'>
          <p className='font-bold text-xl'>Category</p>
          <ul className=' flex flex-col gap-6 font-semibold text-lg'>
            <li>Restaurant Food(37)</li>
            <li>Travel news(23)</li>
            <li>Modern technology(14)</li>
            <li>Product(3)</li>
            <li>Inspiration(5)</li>
            <li>Health care(32)</li>
          </ul>
        </div>

        <div className='flex flex-col gap-14 text-gray-600'>
          <p className='font-bold text-xl'>Recent Post</p>
          <div className='flex flex-col gap-5'>
            <div className='flex gap-4 items-center'>
              <img src={Post1} alt='' />
              <div className='text-black font-oswald'>
                <p className='font-bold font-xl'>The Amazing Hubble</p>
                <p className='font-sm'>02 Hours ago</p>
              </div>
            </div>
            <div className='flex gap-4 items-center4'>
              <img src={Post2} alt='' />
              <div className='text-black font-oswald'>
                <p className='font-bold font-xl'>Astronomy or Astrology</p>
                <p className='font-sm'>03 Hours ago</p>
              </div>
            </div>
            <div className='flex gap-4 items-center4'>
              <img src={Post3} alt='' />
              <div className='text-black font-oswald'>
                <p className='font-bold font-xl'>Asteroids Telescope</p>
                <p className='font-sm'>06 Hours ago</p>
              </div>
            </div>
            <div className='flex gap-4 items-center4'>
              <img src={Post4} alt='' />
              <div className='text-black font-oswald'>
                <p className='font-bold font-xl'>Minimalist Approach</p>
                <p className='font-sm'>05 September, 2025</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-14 text-gray-600'>
          <p className='font-bold text-xl'>Tag Clouds</p>
          <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-3'>
                <FilledButton btnText='Project' additionalClass='shadow-sm py-1 px-5 rounded-lg text-gray-400 font-oswald'/>
                <FilledButton btnText='Love' additionalClass='shadow-sm py-1 px-5 rounded-lg text-gray-400 font-oswald'/>
                <FilledButton btnText='Technology' additionalClass='shadow-sm py-1 px-5 rounded-lg text-gray-400 font-oswald'/>
                <FilledButton btnText='Travel' additionalClass='shadow-sm py-1 px-5 rounded-lg text-gray-400 font-oswald'/>
                <FilledButton btnText='Restaurant' additionalClass='shadow-sm py-1 px-5 rounded-lg text-gray-400 font-oswald'/>
                <FilledButton btnText='Lifestyle' additionalClass='shadow-sm py-1 px-5 rounded-lg text-gray-400 font-oswald'/>
                <FilledButton btnText='Design' additionalClass='shadow-sm py-1 px-5 rounded-lg text-gray-400 font-oswald'/>
                <FilledButton btnText='Illustration' additionalClass='shadow-sm py-1 px-5 rounded-lg text-gray-400 font-oswald'/>
          </div>
          
        </div>

        <div className='flex flex-col gap-14 text-gray-600'>
          <p className='font-bold text-xl'>Instagram Feeds</p>
          
          <div className='flex flex-col gap-5'>
            <div className='flex gap-5 md:gap-25 lg:gap-5'>
                <img src={Post5} alt="" />
                <img src={Post6} alt="" />
                <img src={Post7} alt="" />
            </div>
            <div className='flex gap-5 md:gap-25 lg:gap-5'>
                <img src={Post6} alt="" />
                <img src={Post9} alt="" />
                <img src={Post10} alt="" />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-14 text-gray-600'>
          <div className='flex flex-col gap-3'>
            <p className='font-bold text-xl'>Newsletter</p>
            <hr className='text-gray-200'/>
          </div>  
          
          <div className='flex flex-col gap-5'>
            <input
              type='text'
              placeholder='Enter email'
              name='search'
              className='h-13 w-full border shadow-ld border-gray-200 px-3 rounded-lg text-gray-600'
            />
            <FilledButton
            btnText='SUBSCRIBE'
            width='w-full'
            height='h-15'
            additionalClass='border border-[#d19f68] text-[#d19f68] font-bold'
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
