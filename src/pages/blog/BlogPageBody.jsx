import React from 'react';
import { useParams, Link } from 'react-router-dom';
import BlogPostsData from '../../assets/BlogPosts';
import { FaUserAlt, FaComments } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import FilledButton from '../../components/button';
import { FaHeart } from 'react-icons/fa';
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
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa6';
import { FaGlobe } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import Author from '../../assets/posts/author.png';
import Comment1 from '../../assets/posts/comment_1.png';
import Comment2 from '../../assets/posts/comment_2.png';
import Comment3 from '../../assets/posts/comment_3.png';

const BlogPageBody = () => {
  const { id } = useParams();

  const post = BlogPostsData.find((postData) => postData.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  const commentCount = post.commentCount > 1 ? 'Comments' : 'Comment';

  return (
    <div className='flex flex-col justify-center w-full gap-18 px-4 py-30 md:px-10 lg:px-[6vh] lg:flex-row lg:items-start lg:gap-7 bg-white'>
      <div className='flex flex-col gap-4 md:gap-7 lg:w-[80vh]'>
        <img
          src={post.image}
          alt={post.title}
          className='w-full lg:w-[80vh] rounded-lg'
        />
        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold trxt-black text-black'>
          {post.title}
        </h1>

        <div className='flex gap-3'>
          <div className='flex text-sm font-oswald items-baseline-last gap-1 text-gray-400 group-hover:text-[#d19f68] cursor-pointer'>
            <FaUserAlt />
            <p className='font-semibold'>{post.author}</p>
          </div>
          <p>|</p>
          <div className='flex text-sm font-oswald items-baseline-last gap-1 text-gray-400 group-hover:text-[#d19f68] cursor-pointer'>
            <FaComments />
            <p className='font-semibold'>
              {post.commentCount} {commentCount}
            </p>
          </div>
        </div>
        <p className='leading-8 text-lg text-black text-justify'>{post.text}</p>

        <div className='flex flex-col items-center gap-5 w-full mt-8 md:flex-row md:justify-between lg:flex-row lg:justify-between'>
          <div className='flex items-center text-black text-sm md:text-lg gap-3'>
            <FaHeart />
            <p>Lilly and 4 people like this.</p>
          </div>
          <div className='flex gap-5 font-oswald text-sm text-gray-400'>
            <FaTwitter className='cursor-pointer font-oswald md:text-lg lg:text-lg hover:rotate-y-180 duration-300' />
            <FaFacebookF className='cursor-pointer font-oswald md:text-lg lg:text-lg hover:rotate-y-180 duration-300' />
            <FaGlobe className='cursor-pointer font-oswald md:text-lg lg:text-lg hover:rotate-y-180 duration-300' />
            <FaInstagram className='cursor-pointer font-oswald md:text-lg lg:text-lg hover:rotate-y-180 duration-300' />
          </div>
        </div>

        <div className='text-black flex gap-3 items-center mt-8 md:px-13 lg:px-8'>
          <img
            src={Author}
            alt='Author'
            className='h-12 w-12 md:w-auto md:h-auto lg:w-auto lg:h-auto'
          />
          <div className='flex flex-col gap-6'>
            <p className='text-xl font-bold'>{post.author}</p>
            <p>
              Second divided from form fish beast made. Every of seas all
              gathered use saying you're, he our dominion twon Second divided
              from
            </p>
          </div>
        </div>

        <div className='text-black px-3 mt-13 flex flex-col gap-8'>
          <p className='font-bold text-lg'>05 Comments</p>

          <div className='flex flex-col gap-7'>
            <div className='flex gap-6'>
              <img
                src={Comment1}
                alt=''
                className='h-18 w-18 mt-4 md:mt-0 md:w-auto lg:w-auto lg:mt-0'
              />
              <div className='flex flex-col gap-6'>
                <p className='text-[11px] text-gray-500 leading-7 md:text-sm lg:text-lg'>
                  Multiply sea night grass fourth day sea lesser rule open
                  subdue female fill which them Blessed, give fill lesser
                  bearing multiply sea night grass fourth day sea lesser
                </p>
                <div className='flex justify-between md:pr-10'>
                  <div className='flex gap-4'>
                    <p className='font-bold text-sm'>Emily Blunt</p>
                    <p className='text-[11px]'>December 4, 2025 at 3:12 pm</p>
                  </div>
                  <p className='text-sm'>REPLY</p>
                </div>
              </div>
            </div>
            <div className='flex gap-6'>
              <img
                src={Comment2}
                alt=''
                className='h-18 w-18 mt-4 md:mt-0 md:w-auto lg:w-auto lg:mt-0'
              />
              <div className='flex flex-col gap-6'>
                <p className='text-[11px] text-gray-500 leading-7 md:text-sm lg:text-lg'>
                  Multiply sea night grass fourth day sea lesser rule open
                  subdue female fill which them Blessed, give fill lesser
                  bearing multiply sea night grass fourth day sea lesser
                </p>
                <div className='flex justify-between md:pr-10'>
                  <div className='flex gap-4'>
                    <p className='font-bold text-sm'>Emily Blunt</p>
                    <p className='text-[11px]'>December 4, 2025 at 3:12 pm</p>
                  </div>
                  <p className='text-sm'>REPLY</p>
                </div>
              </div>
            </div>
            <div className='flex gap-6'>
              <img
                src={Comment3}
                alt=''
                className='h-18 w-18 mt-4 md:mt-0 md:w-auto lg:w-auto lg:mt-0'
              />
              <div className='flex flex-col gap-6'>
                <p className='text-[11px] text-gray-500 leading-7 md:text-sm lg:text-lg'>
                  Multiply sea night grass fourth day sea lesser rule open
                  subdue female fill which them Blessed, give fill lesser
                  bearing multiply sea night grass fourth day sea lesser
                </p>
                <div className='flex justify-between md:pr-10'>
                  <div className='flex gap-4'>
                    <p className='font-bold text-sm'>Emily Blunt</p>
                    <p className='text-[11px]'>December 4, 2025 at 3:12 pm</p>
                  </div>
                  <p className='text-sm'>REPLY</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col mt-13 gap-8'>
          <p className='font-bold text-black text-xl'>Leave a Reply</p>
          <form action="" className='flex flex-col gap-8'>
            <textarea name="comment" placeholder='Write Comment' className='w-full h-[20vh] px-4 py-2 text-sm border border-gray-300 text-gray-500' />
            <input type="text" name='name' placeholder='Name' className='w-full h-14 px-4 py-2 text-sm border border-gray-300 text-gray-500' />
            <input type="text" name='email' placeholder='Email' className='w-full h-14 px-4 py-2 text-sm border border-gray-300 text-gray-500' />
            <input type="text" name='website' placeholder='Website' className='w-full h-14 px-4 py-2 text-sm border border-gray-300 text-gray-500' />
            <FilledButton
            btnText='POST COMMENT'
            width='w-[25vh]'
            height='h-15'
            additionalClass='border border-[#d19f68] text-[#d19f68] font-bold px-10'
          />
          </form>
        </div>
      </div>
      <div className='flex flex-col gap-18 w-full md:w-auto lg:w-auto px-4'>
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
            <div className='flex gap-4 items-center'>
              <img src={Post2} alt='' />
              <div className='text-black font-oswald'>
                <p className='font-bold font-xl'>Astronomy or Astrology</p>
                <p className='font-sm'>03 Hours ago</p>
              </div>
            </div>
            <div className='flex gap-4 items-center'>
              <img src={Post3} alt='' />
              <div className='text-black font-oswald'>
                <p className='font-bold font-xl'>Asteroids Telescope</p>
                <p className='font-sm'>06 Hours ago</p>
              </div>
            </div>
            <div className='flex gap-4 items-center'>
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
            <FilledButton
              btnText='Project'
              additionalClass='shadow-sm py-1 px-5 rounded-lg text-gray-400 font-oswald'
            />
            <FilledButton
              btnText='Love'
              additionalClass='shadow-sm py-1 px-5 rounded-lg text-gray-400 font-oswald'
            />
            <FilledButton
              btnText='Technology'
              additionalClass='shadow-sm py-1 px-5 rounded-lg text-gray-400 font-oswald'
            />
            <FilledButton
              btnText='Travel'
              additionalClass='shadow-sm py-1 px-5 rounded-lg text-gray-400 font-oswald'
            />
            <FilledButton
              btnText='Restaurant'
              additionalClass='shadow-sm py-1 px-5 rounded-lg text-gray-400 font-oswald'
            />
            <FilledButton
              btnText='Lifestyle'
              additionalClass='shadow-sm py-1 px-5 rounded-lg text-gray-400 font-oswald'
            />
            <FilledButton
              btnText='Design'
              additionalClass='shadow-sm py-1 px-5 rounded-lg text-gray-400 font-oswald'
            />
            <FilledButton
              btnText='Illustration'
              additionalClass='shadow-sm py-1 px-5 rounded-lg text-gray-400 font-oswald'
            />
          </div>
        </div>

        <div className='flex flex-col gap-14 text-gray-600'>
          <p className='font-bold text-xl'>Instagram Feeds</p>

          <div className='flex flex-col gap-5'>
            <div className='grid grid-cols-3 gap-5 md:gap-4'>
              <img src={Post5} alt='' />
              <img src={Post6} alt='' />
              <img src={Post7} alt='' />

              <img src={Post8} alt='' />
              <img src={Post9} alt='' />
              <img src={Post10} alt='' />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-14 text-gray-600'>
          <div className='flex flex-col gap-3'>
            <p className='font-bold text-xl'>Newsletter</p>
            <hr className='text-gray-200' />
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

export default BlogPageBody;
