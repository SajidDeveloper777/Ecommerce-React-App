import React from 'react'

import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='login-signup'>

      <div className="login-signup-container">
        <h1>Sign Up</h1>

        <div className="login-signup-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Your Email'/>
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account?<span>Login here</span></p>
        
      <div className="loginsignup-agree">
        <input type="checkbox" name='' id='' />
        <p>By continuing, I agree to the use of terms & privacy policy</p>
      </div>

      </div>
    </div>
  )
}

export default LoginSignup