import React, { useState } from 'react'
import { RxCaretDown } from 'react-icons/rx'

const Header = () => {
  const [toggle, setToggle] = useState(false)

  const showSideMenu = () =>{
    setToggle(true)
  }

  const hideSideMenu = () =>{
    setToggle(false)
  }

  return (
   <>
   <div className="black-overlay w-full h-full fixed duration-500" onClick={hideSideMenu}
    style={{
    opacity: toggle ?  1 : 0,
    visibility: toggle ? "visible" : "hidden"
   }}></div>
   <div onClick={(e)=>{
    e.stopPropagation()
   }} className="w-[400px] bg-white h-full absolute duration-[400px]"
   style={{
    left: toggle ? "0%": "-100%",
   }}
   ></div>
    <header className='p-2 shadow-xl'>
      <div className="max-w-[1200px] mx-auto border border-red-500 flex items-center">
       <div className='w-[100px]'>
        <img src="images/logo.png" className='w-full' alt="" />
       </div>
       <div className="">
        <span className='font-bold border-b-[3px] border-[black] '> Meerut</span>
         Hapur, India <RxCaretDown onClick={showSideMenu} fontSize={25} className='font-bold inline  text-[#fc8019] cursor-pointer'  />
       </div>
       <nav>
        <li>
          Search
        </li>
        <li>
          offers
        </li>
       </nav>
      </div>
    </header>
   </>
    
  )
}

export default Header