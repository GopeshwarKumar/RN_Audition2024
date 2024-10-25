import React from 'react'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <>
    <h1 className='text-black p-5 font-serif animate-pulse'>Contact US</h1>
    <div className='text-black grid  sm:grid-cols-2 place-items-center gap-[4vh] py-[5vh]  '>
      <div >
      <motion.h3 whileInView={{opacity:1}} transition={{duration:2}} className='font-bold opacity-0'>President</motion.h3>
      <motion.p whileInView={{opacity:1}} transition={{duration:2}} className='opacity-0'>Name Shubham Ghosh</motion.p>
      <p>Mob No. :-  xxxxxxxxxx</p>
      <p>E-Mail :-   abcd@gmail.com</p>
      </div>
      <div>
      <motion.h3 whileInView={{opacity:1}} transition={{duration:2}} className='font-bold opacity-0'>Vice President</motion.h3>
      <motion.p whileInView={{opacity:1}} transition={{duration:2}} className='opacity-0'>Name Nabina Layek</motion.p>
      <p>Mob No. :-  xxxxxxxxxx</p>
      <p>E-Mail :-   abcd@gmail.com</p>
      </div>
    </div>
    </>
  )
}

export default Contact