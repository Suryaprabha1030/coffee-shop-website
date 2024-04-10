import React from 'react'
import Home from './Home'
import About from './About'
import Services from './Services'
import Reserve from './Reserve'
import Footer from './Footer'


const Page = () => {
  return (
    <div className='max-w-screen  '>
      <Home/> 
       <About/> 
      <Services/>
      <Reserve/>
      <Footer/> 
      
    </div>
  )
}

export default Page
