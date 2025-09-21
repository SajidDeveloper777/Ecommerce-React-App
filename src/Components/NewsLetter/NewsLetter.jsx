import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter line'>
       <h1>get exclusive offers on your email</h1>
        <p>subscribe to our newsletter and stay updated</p>
        <div className="input-container">
            <input type="email" placeholder='enter your email id'/>
            <button>subscribe</button>
        </div>
      
    </div>
  )
}

export default NewsLetter