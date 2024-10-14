import React from 'react'

export default function TopRes() {
  return (
    <div className="max-w-[1200px] mx-auto  ">
    <div className="flex my-3 items-center justify-between">
      <div className="text-[25px] font-bold">What's on your mind?</div>
      <div className="flex">
        <div className=" cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 "
        onClick={prevSlide}
        >
          <FaArrowLeft />
        </div>
        <div className=" cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
        onClick={nextSlide}
        >
          <FaArrowRight  />
        </div>
      </div>
    </div>
    </div>
  )
}
