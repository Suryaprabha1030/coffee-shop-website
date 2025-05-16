import React from 'react'
import Home from './Home'
import About from './About'
import Services from './Services'
import Reserve from './Reserve'
import Footer from './Footer'
import Navbar from './Navbar'
import Banner from './Banner'


const Page = () => {
  return (
    // <div className='max-w-screen  '>
    //   <Home/> 
    //    <About/> 
    //   <Services/>
    //   <Reserve/>
    //   <Footer/> 
      
    // </div>
    <div className="w-screen h-screen overflow-x-hidden overflow-auto scrollbar-hide bg-primary ">
    {/* Navbar stays fixed */}
    <Navbar />

    {/* Sections with IDs for scrolling */}
    <div id="home" className="w-full flex flex-col items-center justify-center  pt-40 mt-5">
   <Banner/>
    </div>

    <div id="about" className="w-[100%]  flex flex-col  pt-20 ">
    <About/> 
    </div>
    <div id="services" className="w-[100%] flex flex-col pt-10">
    <Services/>
    </div> 
    <div id="reserve" className="w-[100%]  flex flex-col pt-20 mb-10">
    <Reserve/>
    </div>
    <Footer/>
    {/* <div id="venue" className="w-full h-screen flex flex-col bg-white mt-20">
      <ShowCase/>
    </div> */}
    

   
  </div>
  )
}

export default Page
