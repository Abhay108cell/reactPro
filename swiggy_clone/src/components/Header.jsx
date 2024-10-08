import React, { useState } from 'react'
import { RxCaretDown } from 'react-icons/rx'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  return (
   <>
    <header className='p-2 shadow-xl'>
      <div className="max-w-[1200px] mx-auto border border-red-500 flex items-center">
       <div className='w-[100px]'>
        <img src="images/logo.png" className='w-full' alt="" />
       </div>
       <div className="">
        <span className='font-bold border-b-[3px] border-[black] '> Meerut</span>
         Hapur, India <RxCaretDown fontSize={25} className='font-bold inline  text-[#fc8019]'  />
       </div>
      </div>
    </header>
   </>
    
  )
}

export default Header