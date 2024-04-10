import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'


const Home = () => {
  return (
    <div className='w-full h-full bg-primary flex flex-col gap-20'>
      <Navbar/>
      <Banner/>
      
     
    </div>
  )
}

export default Home
