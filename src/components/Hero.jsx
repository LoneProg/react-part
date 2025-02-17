import React from 'react'
import HeroImage from '../assets/Profile-mask.jpg'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16 '>
        <img src={HeroImage} alt="ProfileImage" className='mx-auto mb-8 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' />
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400'>Haze Crypt</span>
            , a full stack web developer 
        </h1>
        <p className='mt-4 text-gray-300 text-lg'>
            I specialize in building fast, responsive, and easily accessible websites
        </p>
        <div className='mt-8 space-x-4'>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact me</button>
            <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>View Resume</button>
        </div>
    </div>
  )
}

export default Hero