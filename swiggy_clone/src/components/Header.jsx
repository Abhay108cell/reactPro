import React from 'react'

const Header = () => {
  return (
    <header className='p-2 shadow-xl'>
      <div className="max-w-[1200px] mx-auto border border-red-500 flex items-center">
       <div className='w-[100px]'>
        <img src="images/logo.png" className='w-full' alt="" />
       </div>
       <div className="">
        <span className='font-bold'> Meerut</span>
         Hapur, India
       </div>
      </div>
    </header>
    
  )
}

export default Header