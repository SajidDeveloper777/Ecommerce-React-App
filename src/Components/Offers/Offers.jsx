import React from 'react'
import './Offers.css'
import exclusive_image from '../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers' >
      <div className="offers-left line">
        <h1>exclusive</h1>
        <h1> offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>check now</button>

      </div>

      <div className="offers-right">
        <img src={exclusive_image} alt="error loading" />
      </div>

    </div>
  )
}

export default Offers