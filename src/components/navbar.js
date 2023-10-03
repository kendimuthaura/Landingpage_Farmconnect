import React, { useState, useEffect } from 'react';

// import { Link } from 'react-scroll';
import { Link } from "react-router-dom"

import '../index.css'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
 
  const [isScrolled, setIsScrolled] = useState(false);


  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 33) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 z-50 w-full h-[70px] flex justify-between items-center px-4 text-black ${isScrolled ? "bg-white" : "bg-white"}`} >
      <div className="text-4xl cursor-pointer inline-flex items-center text-BLACK-700">
     
        <Link to="home" smooth={true} duration={500}>
        <h1 className='text-3xl font-bold mr-4 sm:text-2xl'>FARMCONNECT</h1>
        </Link>
      </div>
      <div className="md:hidden" onClick={handleMenuClick}>
      {showMenu ? (
        <svg
            className="h-6 w-6 text-black cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
            fillRule="evenodd"
            d="M14.95 5.879l-1.414-1.414L10 8.586 6.464 5.05 5.05 6.464 8.586 10l-3.536 3.536 1.414 1.414L10 11.414l3.536 3.536 1.414-1.414L11.414 10l3.536-3.536z"
            clipRule="evenodd"
            />
        </svg>
        ) : (
        <svg
            className="h-6 w-6 text-black cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
            />
        </svg>
        )}
      </div>
      <ul className="hidden md:flex text-left" >
        <li>
          <Link to="/" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="feature" smooth={true} duration={500}>
            Get Started
          </Link>
        </li>
        <li>
          <Link to="Faq" smooth={true} duration={500}>
            FAQ
          </Link>
        </li>
        {/* <li>
          <Link to="service" smooth={true} duration={500}>
            Our Services
          </Link>
        </li>
        <li>
          <Link to="demo" smooth={true} duration={500}>
            Demo
          </Link>
        </li> */}
        <li>
          <Link to="contact" smooth={true} duration={500}>
           Contact Us
          </Link>
        </li>
      
      </ul>
      <div className="hidden md:flex">
      <button className="px-6 py-3 h-12 bg-transparent border border-green-800 text-green rounded-full shadow-lg hover:bg-green-900 hover:text-white mx-2">
      <Link to="http://localhost:3005/login" smooth={true} duration={500}>
      Sign Up
          </Link>
            </button>
            <button className="px-6 py-3 h-12 bg-transparent border border-green-800 text-green rounded-full shadow-lg hover:bg-green-900 hover:text-white mx-2">
      <Link to="http://localhost:3002/register" smooth={true} duration={500}>
            Sign In
          </Link>
            </button>
       
        
       
      </div>
      <div
        className={`${
          showMenu ? "flex" : "hidden"
        } md:hidden flex flex-col bg-white text-black w-full absolute top-16 left-0 z-10`}
      >
        <hr className = 'bg-green-100'/>
      
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="p-4 hover:bg-green-200 cursor-pointer"
          onClick={handleMenuClick}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="p-4 hover:bg-green-200  cursor-pointer"
          onClick={handleMenuClick}
        >
          About Us
        </Link>
        <Link
          to="feature"
          smooth={true}
          duration={500}
          className="p-4 hover:bg-green-200  cursor-pointer"
          onClick={handleMenuClick}
        >
           Our Features
        </Link>
        <Link
          to="sale"
          smooth={true}
          duration={500}
          className="p-4 hover:bg-green-200  cursor-pointer"
          onClick={handleMenuClick}
        >
           On Sale
        </Link>
        <Link
          to="service"
          smooth={true}
          duration={500}
          className="p-4 hover:bg-green-200  cursor-pointer"
          onClick={handleMenuClick}
        >
           Our Services
        </Link>
        <Link
          to="demo"
          smooth={true}
          duration={500}
          className="p-4 hover:bg-green-200  cursor-pointer"
          onClick={handleMenuClick}
        >
           Demo
        </Link>
        <Link
          to="client"
          smooth={true}
          duration={500}
          className="p-4 hover:bg-green-200  cursor-pointer"
          onClick={handleMenuClick}
        >
          Our Clients
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="p-4 hover:bg-green-200  cursor-pointer"
          onClick={handleMenuClick}
        >
          Contact Us
        </Link>
        <button className="px-6 py-3 h-12 bg-transparent border border-green-800 text-green rounded-full shadow-lg hover:bg-green-900 hover:text-white mx-2">
      <Link to="contact" smooth={true} duration={500}>
      Sign Up
          </Link>
            </button><br/>
            <button className="px-6 py-3 h-12 bg-transparent border border-green-800 text-green rounded-full shadow-lg hover:bg-green-900 hover:text-white mx-2">
      <Link to="contact" smooth={true} duration={500}>
            Sign In
          </Link>
            </button>
       
      </div>
    
    </div>
  );
};

export default Navbar;