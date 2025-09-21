import React from 'react'

import './Hero.css'

import hand_icon from '../Assets/hand_icon.png'
import hero_image from '../Assets/hero_image.png'




const Hero = () => {
  return (

    <div className='hero'>

      <div className="hero-left line">
        <h4>NEW ARRIVALS ONLY</h4>

        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="error loading" />
          </div>
          <p>collections</p>
          <p>for everyone</p>

        </div>

        <div className="hero-latest-btn">
          <div>latest collection</div>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
          
      </div>

      <div className="hero-right">

        <img src={hero_image} alt="error loading" />
      </div>


    </div>
  )
}

export default Hero
