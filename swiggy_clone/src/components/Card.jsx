import React from 'react'

export default function Card(props) {
  return (
   <div className="w-[273px] shrink-0 grow">
    <div className='group h-[182px] rounded-[15px] overflow-hidden relative' >
      <img className='group-hover:scale-110 duration-100 object-cover w-full h-full' src={"https://picsum.photos/200/300"+props.image} alt="image" />
      <div className="image-overlay absolute w-full h-full top-0 flex items-end p-2 text-[25px] font bold text-white tracking-tighter">
        {props.offer}
      </div>
    </div>
      <div className='mt-3 text-xl font-bold' >
        {props.title}
      </div>
      <div>
        {props.rating}
        <span className='ml-2'> {props.minTime} - {props.maxTime} mins</span>
    <div className='text-slate-600'>
      {props.name}
      <br />
      {props.place}
    </div>
      </div>
   </div>
  )
}
