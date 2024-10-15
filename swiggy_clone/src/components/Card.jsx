import React from 'react'

export default function Card() {
  return (
   <div className="w-[273px]">
    <div className='h-[182px] rounded-[15px] overflow-hidden relative' >
      <img className='object-cover w-full h-full' src="https://picsum.photos/200/300" alt="image" />
      <div className="image-overlay absolute w-full h-full"></div>
    </div>
   </div>
  )
}
