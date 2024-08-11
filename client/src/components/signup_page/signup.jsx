import React from 'react';
import { Link } from "react-router-dom";
import signup_img from "../../images/signup.jpg";
import google_img from "../../images/google.png";
import "./signup.css";

function Signup() {
  const googleAuth = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    );
  };

  return (
    <div className='container'>
      <h1 className='heading'>Sign up Form</h1>

      <div className='form_container'>
        <div className='left'>
          <img src={signup_img} alt='Sign up illustration' />
        </div>

        <div className='right'>
          <h2 className='form_heading'>Create Account</h2>
          <input type='text' className='input' placeholder='Username' />
          <input type='email' className='input' placeholder='Email' />
          <input type='password' className='input' placeholder='Password' />
          <button className='btn'>Sign up</button>
          <p className='text'>or</p>
          <button className='google_btn' onClick={googleAuth}>
            <img src={google_img} alt='Google logo' />
            <span>Sign up with Google</span>
          </button>
          <p className='text'>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
