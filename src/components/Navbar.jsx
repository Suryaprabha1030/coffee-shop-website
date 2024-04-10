import React, { useState } from 'react'
import logoimage from "../asset/logo gold.png"
import login from "../asset/user golden.png"
import cart from "../asset/carts golden.png"
import menu from "../asset/menu.png"
import close from "../asset/close.png"

const Navbar = () => {
  const[show,setShow]=useState(false)
  const open=()=>{
    setShow(!show)
  }
  return (
   
    <div className='w-full  flex flex-row items-center justify-center '>
     <div className='max-w-full container mx-auto flex flex-row md:flex-row  justify-between md:justify-around items-center    md:bg-primary bg-sub'>
      
       <img className="pb-2 pt-3 ps-2 md:pb-0 md:pt-1 md:ps-0" src={logoimage} alt='coffee' width="70" height="50"/>
       <img className="md:hidden absolute right-4 top-7  " src={show ? close : menu} alt='menu' width="40" height="40" onClick={open}/>
       <ul className={`w-full md:w-auto flex flex-col border-t-2 border-secondary md:border-t-0  md:flex-row items-center pl-9  md:mt-0 pb-5 md:pl-0 md:pb-0 md:justify-around gap-7 absolute  md:static bg-sub md:bg-primary md:z-auto z-[9]  ${show ? 'top-20':'top-[-490px]'}` }>
          <li className=' text-card md:text-secondary text-lg md:text-xl  font-bold'>Home</li>
          <li className='text-card md:text-secondary text-lg md:text-xl font-bold'>About</li>
          <li className='text-card md:text-secondary text-lg md:text-xl font-bold'>Services</li>
          {/* <li className='text-card md:text-secondary text-xl font-bold'>Reservation</li> */}
          <li className='text-card md:text-secondary text-lg md:text-xl font-bold'>Reviews</li>
          <li className='text-card md:text-secondary text-lg md:text-xl font-bold'>Order</li>
          
          
       </ul>
       <ul className='flex  gap-2 md:static absolute right-20 top-7  '>
       <img className="" src={login} alt='coffee' width="40" height="40"/>
          <img className="" src={cart} alt='coffee' width="40" height="40"/>
       </ul>
     </div>
    </div>
  )
}

export default Navbar
