import React from 'react'

const Nike=()=> {
  return (
   <main className="nike container">
    <div className="nike-content">
      <h1>YOUR FEET DESERVE THE BEST</h1>
      <p>
      YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
      </p>
      <div className="nike-btn">
        <button>SHOP NOW</button>
        <button className='secondry-btn' >Category</button>
      </div>
      <div className="shopping">
        <p>Also Available On</p>
        <div className="brand-icons">
          <img src="/images/amazon.png" alt="amazon" />
          <img src="/images/flipkart.png" alt="flipkart" />
        </div>
      </div>
    </div>
    <div className="nike-image">
      <img src="/images/shoe_image.png" alt="nike" />
    </div>
   </main>
  )
}

export default Nike;
