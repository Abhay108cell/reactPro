import React, { useState } from 'react'
import { CiDiscount1 } from 'react-icons/ci'
import { FaCartArrowDown } from 'react-icons/fa'
import { IoMdHelpCircle, IoMdSearch } from 'react-icons/io'
import { RxCaretDown } from 'react-icons/rx'

const Header = () => {
  const [toggle, setToggle] = useState(false)

  const showSideMenu = () =>{
    setToggle(true)
  }

  const hideSideMenu = () =>{
    setToggle(false)
  }

  const links = [
    {
      icon: <IoMdSearch />,
      text: 'Search',
    },
    {
      icon: <CiDiscount1 />,
      text: 'Offers',
      sup: "New"
    },
    {
      icon: <IoMdHelpCircle />,
      text: 'Help',
    },
    {
      icon: "",
      text: 'Sign in',
    },
    {
      icon: <FaCartArrowDown />,
      text: 'Cart',
    },

  ]

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
    <header className='p-2 shadow-xl sticky top-0 text-[#686bt8] bg-white z-[9999]'>
      <div className="max-w-[1200px] mx-auto  flex items-center">
       <div className='w-[100px] '>
        <img src="images/logo.png" className='w-full' alt="" />
       </div>
       <div className="">
        <span className='font-bold border-b-[3px]  '> Meerut</span>
         Hapur, India <RxCaretDown onClick={showSideMenu} fontSize={25} className='font-bold inline  text-[#fc8019] cursor-pointer'  />
       </div>
       <nav className='hidden md:flex list-none gap-10 ml-auto font-semibold text-[18px]'>

      {
        links.map((links, index) => {
          return (
          <li key={index} className='flex cursor-pointer hover:text-[#fc8019] items-center gap-2'>
                   {links.icon}
                   {links.text}
                  <sup>{links.sup}</sup>
                   
                  </li>)
      }
    )
  }

      
       </nav>
      </div>
    </header>
   </>
    
  )
}

export default Header