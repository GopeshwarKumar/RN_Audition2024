import React from 'react'
import Register from './Components/Register'
import LandingPage from './Components/LandingPage'
import Contact from './Components/Contact'
import About from './Components/About'

function App() {
  return (
    <>
    <LandingPage/>
    <About/>
    <Register/>
    <Contact/>
    <h1 className='text-black text-center font-bold'>@RN Team</h1>
    </>
  )
}

export default App