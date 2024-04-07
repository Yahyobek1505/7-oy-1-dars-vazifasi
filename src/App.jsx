import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'

function App() {
  return (
    <div className='bg-[#101017] h-[100%] pb-4 '>
      <Header></Header>
      <div className="conainer w-5/6 mx-auto">
        <Hero></Hero>
        <About></About>
      </div>
      <div className="work w-[100%] my-24 bg-[#313131]">
        <Work></Work>
      </div>
    </div>
  )
}

export default App
