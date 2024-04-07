import React from 'react'
import '../Header/index.css'
import Line from '../../assets/Line 9.png'
import Alana from '../../assets/alana.png'
import Wohoo from '../../assets/wohoo.png'
import Pagee from '../../assets/pagee.png'
import Keikko from '../../assets/keikoko.png'
import Arrow from '../../assets/Vector.png'
function Work() {
  return (
    <div className='conainer w-5/6 mx-auto py-24'>
      <div className="recent-work flex flex-wrap items-center justify-between">
        <div className="projects-title">
          <span className='flex gap-4 items-center text-[#019211] text-xl font-medium'><img src={Line} alt="" />Recent Work</span>
        </div>
        <div className="view-all">
          <p className='p-4 text-white'><span>View All Project</span></p>
        </div>
      </div>
      <h1 className='text-white text-[46px] font-bold max-w-[28rem] mb-20'>Some of my favorite projects.</h1>
      <div className="card-wrapper flex flex-wrap gap-6">
        <div className="card w-[34rem]">
          <img src={Alana} alt="" />
          <h3 className='text-white font-semibold mt-4 mb-2 text-2xl'>Alana - live data app</h3>
          <p className='flex items-center gap-2 cursor-pointer hover:text-white'><span className='text-[#019211] hover:text-white transform duration-300'>See project</span><img src={Arrow} alt="" /></p>
        </div>
        <div className="card w-[34rem]">
          <img src={Wohoo} alt="" />
          <h3 className='text-white font-semibold mt-4 mb-2 text-2xl'>Alana - live data app</h3>
          <p  className='flex items-center gap-2 cursor-pointer hover:text-white'><span className='text-[#019211] hover:text-white transform duration-300'>See project</span><img src={Arrow} alt="" /></p>
        </div>
        <div className="card w-[34rem]">
          <img src={Pagee} alt="" />
          <h3 className='text-white font-semibold mt-4 mb-2 text-2xl'>Alana - live data app</h3>
          <p className='flex items-center gap-2 cursor-pointer hover:text-white'><span className='text-[#019211] hover:text-white transform duration-300'>See project</span><img src={Arrow} alt="" /></p>
        </div>
        <div className="card w-[34rem]">
          <img src={Keikko} alt="" />
          <h3 className='text-white font-semibold mt-4 mb-2 text-2xl '>Alana - live data app</h3>
          <p className='flex items-center gap-2  cursor-pointer '><span className='text-[#019211]  hover:text-white transform duration-300'>See project</span><img src={Arrow} alt="" /></p>
        </div>
      </div>
    </div>
  )
}

export default Work

