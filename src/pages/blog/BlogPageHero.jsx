import React from 'react';
import Gallery3 from '../../assets/gallery3.png'

const BlogPageHero = () => {
  return (
    <div className="relative bg-cover bg-bottom overflow-hidden bg-no-repeat bg-fixed h-[47vh] flex items-center justify-center"
            style={{ backgroundImage: `url(${Gallery3})` }}
        >
            <div className="absolute inset-0 bg-black opacity-75"></div>
            <h1 className="relative font-oswald text-white text-4xl md:text-5xl lg:6xl font-bold z-10">Blog Details</h1>
        </div>
  )
}

export default BlogPageHero
