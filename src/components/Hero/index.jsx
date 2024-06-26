import React from 'react'
import cv from '../../assets/download.png'
function Hero() {
  return (
    <div className='mt-16 mb-24'>
      <div className="about-me">
      <h3 className='text-[#079211] text-4xl font-medium '>Hello, I'm Alif Reza</h3>
      <div className="rows flex flex-wrap items-center mt-[-30px]">
      <h1 className='text-8xl text-white font-medium mb-1'>Product Designer
      </h1>
      <span className='text-[10rem] font-extralight text-white '>I</span>
      </div>
      <p className='w-[600px] h-[82px] text-[#808080] text-xl font-normal mt-[-30px] leading-8 mb-8'>I'm from Singapore and I have been working as a Product Designer for more than 7 years. I've worked for a Hanziree company Pabloo as a Product Designer and Front-end Developer for 3 years.</p>
      </div>
        <div className="resume flex flex-wrap gap-24 mt-16">
          <span className='capitalize bg-[#019711] px-8 py-3.5 cursor-pointer hover:text-[#079211] hover:bg-white transform duration-300 text-white font-medium'>email me</span>
          <span className='flex flex-wrap items-center gap-4 hover:text-[#079211] transform duration-300 cursor-pointer text-xl text-white'><img src= {cv} alt="" className='w-10 h-8'/> Download CV</span>
        </div>
    </div>
  )
}

export default Hero
