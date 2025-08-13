import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Portfolio from './pages/portfolio/Portfolio'
import Blog from './pages/blog/Blog'
import Contact from './pages/contact/Contact'
import BlogPost from './pages/blog/BlogPost'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/post/:id" element={<BlogPost />} />
      </Route>
    </Routes>
  )
}

export default App