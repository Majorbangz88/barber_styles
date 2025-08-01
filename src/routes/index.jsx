import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Services from '../pages/services/Services';
import Portfolio from '../pages/portfolio/Portfolio';
import Blog from '../pages/blog/Blog';
import Contact from '../pages/contact/Contact';

const AppRoutes = () => {
  return (
    <div>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
    </div>
  )
}

export default AppRoutes
