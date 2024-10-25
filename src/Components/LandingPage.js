// src/Navbar.js
import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Shery from 'sheryjs';
import Register from './Register';

const LandingPage = () => {
  Shery.makeMagnet(".link1");
  Shery.makeMagnet(".link2");
  Shery.makeMagnet(".link3");
  // Shery.mouseFollower(".link4");

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const gotoaboutsection = () => {
    window.scrollTo({
      top: 970, // Change this value to your desired position
      behavior: 'smooth' // Optional: adds smooth scrolling
    });
  };
  const gotocontactsection = () => {
    window.scrollTo({
      top: 3000, // Change this value to your desired position
      behavior: 'smooth' // Optional: adds smooth scrolling
    });
  };
  const gotoregistersection = () => {
    window.scrollTo({
      top: 1640, // Change this value to your desired position
      behavior: 'smooth' // Optional: adds smooth scrolling
    });
  };
  
  return (
    <>
    {/* <Routes>
      <Route path={"/register"} element={<Register/>} />
    </Routes> */}
    <nav className="flex justify-between items-center bg-gradient-to-tr from-indigo-400 to-slate-500 p-4 blur-0 shadow">

    {/* Logo */}
    <div className="flex items-center">
        <img src="/assets/rn log.jpg" alt="Logo" className="hover:rounded-sm h-[50px] w-[70px]" />
        {/* <h1 className='text-pink-600 font-extrabold text-4xl'>R<sup className='font-bold'>N</sup></h1> */}
      </div>


      {/* Links */}
      <div className="hidden md:flex space-x-4 md:space-x-6">
        <motion.p onClick={gotoregistersection} animate={{scale:1.1, opacity:1}} transition={{duration:2,delay:1}}><Link  className="link1 text-black hover:text-blue-500 scale-50">Register</Link></motion.p>

       <motion.p animate={{scale:1.1, opacity:1}} transition={{duration:2,delay:1}}><Link  onClick={gotoaboutsection} className="link3 text-black hover:text-blue-500 scale-50">About</Link></motion.p>    
          
      <motion.p animate={{scale:1.1}} transition={{duration:2,delay:1}}><Link onClick={gotocontactsection} className="link4 text-black hover:text-blue-500 scale-50">Contact</Link></motion.p>
      </div>

      {/* Mobile Menu Button */}
      <motion.div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-500">
          {isOpen ? '✖' : '☰'}
        </button>
      </motion.div>

      {/* Mobile Links */}
      {/* {isOpen && (
        <div className="absolute z-40 top-20 right-0 bg-white shadow-md w-screen h-1/2 md:hidden transition-all">
          
        </div>
      )} */}



    </nav>

    {isOpen && 
    <div className="flex z-40 relative flex-col items-center justify-center space-y-4 p-10">
    <Link  className="text-black font-bold font-serif  hover:text-slate-500">Home</Link>
    <Link onClick={gotoaboutsection} className="text-black font-bold font-serif hover:text-slate-500">About</Link>
    <Link onClick={gotocontactsection} className="text-black font-bold font-serif hover:text-slate-500">Contact</Link>
  </div>}
    

    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/assets/RnbgNew.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex flex-col items-center gap-[10vh] z-10 text-center text-white">
        <div className='sm:leading-[60px] vmd:leading-[20px]'>
        <h1 className=" sm:text-[80px] mb:text-[50px] vmd:text-[40px] font-bold mb-4">Radio Nitroz</h1>
        <p className="text-lg md:text-xl mb-8">Audition for 2024 - Register Here!</p>
        </div>
        <Link onClick={gotoregistersection} className=" px-2 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
        >
          Register Now
        </Link>
      </div>
    </div>
    
      
    </>
  );
};

export default LandingPage;
