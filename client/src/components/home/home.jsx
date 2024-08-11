import React from 'react';
import profile_img from "../../images/profile.jpg";
import "./home.css";

function Home(userDetails) {
    const user = userDetails.user;
    console.log(user)
    const logout = () => {
      window.open(
        `${process.env.REACT_APP_API_URL}/auth/logout`,
        "_self"
      );
    };

  return (
    <div className='container'>
      <h1 className='heading'>Home</h1>

      <div className='form_container'>
        <div className='left'>
          <img src={profile_img} alt='profile' />
        </div>

        <div className='right'>
          <h2 className='form_heading'>Profile</h2>
          <img className='home_img' src={user.picture} alt='profile' />
          <input className='input' type='text' defaultValue={user.name}></input>
          <input className='input' type='text' defaultValue={user.email}></input>
          <button className='btn'onClick={logout}>Log out</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
