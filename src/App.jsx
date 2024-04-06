import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  return (
    <div className='bg-[#101017] h-[100%] pb-4 '>
      <Header></Header>
      <div className="conainer w-5/6 mx-auto">
        <Hero></Hero>
        <About></About>
      </div>
    </div>
  )
}

export default App
