import React from 'react'
import about from "../asset/wp2.jpg"

const About = () => {
  return (
  
   <div className='relative w-full  bg-primary pt-20 pb-10 flex flex-col justify-start '>
     
     <section className='relative w-1/2 sm:w-full lg:w-4/5 container mx-auto  flex flex-col sm:flex-row items-center justify-center border-4 border-sub bg-sub rounded-lg '>
     <h1 className=' absolute z-40 -top-9 sm:-top-8  lg:-top-12 right-2 text-logo text-5xl lg:text-7xl font-logo font-bold'>About Us</h1>
     <img className='w-abt lg:w-abt2 object-cover border-2 border-secondary'  src={about} alt="cofee" width="" height=""/>
     <p className='w-auto md:w-4/5  px-4 text-card text-justify text-md lg:text-lg font-default mt-5 mb-5 sm:mb-0 sm:mt-0 '>Dark Cafe is a hidden gem nestled in the heart of the city, exuding an intimate and mysterious ambiance. The dimly lit interior creates an atmosphere of intrigue, perfect for those seeking refuge from the bustling outside world. Its specialty lies in its rich, bold brews, tantalizing the taste buds with deep flavors and robust aromas. Patrons often find themselves immersed in conversation or lost in thought amidst the comforting embrace of Dark Cafe's enigmatic setting</p>
     </section>
      <ul className='flex flex-row gap-5 mt-8 justify-center' >
        <li className='w-2 h-2 border-8 border-sub rounded-xl'></li>
        <li className='w-6 h-4 border-8 border-card  rounded-xl'></li>
        <li className='w-2 h-2 border-8 border-sub  rounded-xl'></li>
      </ul>
    
   </div>
    

  
     

 
  )
}

export default About
