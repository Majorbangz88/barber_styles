import React, { useState } from 'react';
import logo from '../assets/logo.png';
import FilledButton from './button';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const textColor = menuOpen ? 'text-black' : 'text-white';

  const navLinks = (
    <>
      <Link to='/' onClick={() => setMenuOpen(false)}>
        <p className={`${textColor} cursor-pointer`}>Home</p>
      </Link>
      <Link to='/about' onClick={() => setMenuOpen(false)}>
        <p className={`${textColor} cursor-pointer`}>About</p>
      </Link>
      <Link to='/services' onClick={() => setMenuOpen(false)}>
        <p className={`${textColor} cursor-pointer`}>Services</p>
      </Link>
      <Link to='/portfolio' onClick={() => setMenuOpen(false)}>
        <p className={`${textColor} cursor-pointer`}>Portfolio</p>
      </Link>
      <Link to='/blog' onClick={() => setMenuOpen(false)}>
        <p className={`${textColor} cursor-pointer`}>Blog</p>
      </Link>
      <Link to='/contact' onClick={() => setMenuOpen(false)}>
        <p className={`${textColor} cursor-pointer`}>Contact</p>
      </Link>

      <FilledButton
        btnText="BECOME A MEMBER"
        textColor="text-black"
        background="bg-[#d19f68]"
        height="h-15"
        width="w-auto"
        padding="px-8 py-2"
        additionalClass="font-oswald text-sm font-semibold"
      />
    </>
  );

  return (
    <div className="bg-black px-6 py-5 lg:px-40 lg:py-10 flex items-center justify-between relative">
      <Link to='/'>
        <img src={logo} alt='Logo' className='w-28 cursor-pointer' />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden lg:flex gap-14 items-center">
        {navLinks}
      </div>

      {/* Hamburger Icon */}
      <div
        className="lg:hidden text-[#d19f68] text-2xl cursor-pointer z-50"
        onClick={toggleMenu}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-white flex flex-col gap-5 px-8 py-6 z-40">
          {navLinks}
        </div>
      )}
    </div>
  );
};

export default NavBar;
