import React from 'react'
import { Link } from "react-router-dom"
import login_img from "../../images/login.jpg"
import google_img from "../../images/google.png"
import "./login.css"

function Login() {
  const googleAuth = ()=>{
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    )
  }
  console.log(googleAuth)

  return (
    <div className='container'>
      <h1 className='heading'>Log in Form</h1>

      <div className='form_container'>
        <div className='left'>
            <img src={login_img} alt='login'/>
        </div>
            
        <div className='right'>
            <h2 className='from_heading'>Members Log in</h2>
            <input type='email' className='input' placeholder='Email'/>
            <input type='password' className='input' placeholder='Password'/> 
            <button className='btn'>Log in</button>
            <p className='text'>or</p>
            <button className='google_btn' onClick={googleAuth}>
              <img src={google_img} alt='google_icon'/>
              <span>Sign in with Google</span>
            </button>
            <p className='text'>
              New here ? <Link to="/signup">Sign Up</Link>
            </p>
        </div>
      </div>
    </div>
  );
}

export default Login