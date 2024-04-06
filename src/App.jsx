import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <div className='bg-[#101017] h-screen '>
      <Header></Header>
      <div className="conainer w-5/6 mx-auto">
        <Hero></Hero>
      </div>
    </div>
  )
}

export default App
