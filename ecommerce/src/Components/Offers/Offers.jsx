import React from 'react'
import "./Offers.css"
import exclusive_img from "../Assets/exclusive_image.png"
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>EXCLUSIVE</h1>
        <h1>OFFERS</h1>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button>Check Now</button>

      </div>
      <div className="offersright"></div>
    <img src={exclusive_img} alt=""></img>
    </div>
  )
}

export default Offers
