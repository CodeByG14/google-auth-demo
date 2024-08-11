import { useState, useEffect } from "react";
import profile_img from "../../images/profile.jpg";
import "./home.css";
import PacmanLoader from "react-spinners/PacmanLoader";

function Home(userDetails) {
  const user = userDetails.user;
  const [loading, setLoading] = useState(true);
  console.log(user)
  const logout = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/logout`,
      "_self"
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false when data is ready
    }, 2000);

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []);

  return (
    <>
      {loading ? (
      <PacmanLoader color="#ffc801" />
      ) :(
      <div className='container'>
        <h1 className='heading'>Home</h1>

        <div className='form_container'>
          <div className='left'>
            <img src={profile_img} alt='profile' />
          </div>

          <div className='right'>
            <h2 className='form_heading'>Profile</h2>
            <img className='home_img' src={user.picture} alt='profile' />
            <div className="details">
              <h2>{user.name}</h2>
              <h2>{user.email}</h2>
            </div>
            <button className='btn' onClick={logout}>Log out</button>
          </div>
        </div>
      </div>
      )}

    </>
  );
}

export default Home;
