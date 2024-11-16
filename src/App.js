import React from 'react'
import Register from './Components/Register'
import LandingPage from './Components/LandingPage'
import Contact from './Components/Contact'
import About from './Components/About'
import { motion } from 'framer-motion'

function App() {
  return (
    <>
    <LandingPage/>
    <About/>
    <Register/>
    <Contact/>
    <motion.h1 
    animate={{ scale:[1,1.3], skew:[1,2]}} 
    transition={{duration: 2,
          ease: "linear",
          loop: "Infinity", // Loop infinitely
          repeatType: "loop", }}
           style={{}} className='rnfooter bg-[url("/public/assets/OIP.jpg")] text-black text-center font-bold animate-bounce '>@RN Team</motion.h1>
    </>
  )
}

export default App