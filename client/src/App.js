import './App.css';
import {Routes, Route, Navigate} from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from "axios"
import Login from './components/login_page/login';
import Signup from './components/signup_page/signup';
import Home from './components/home/home';

function App() {
  const[user, setUser] = useState(null);

  const getUser = async ()=>{
    try{
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const {data} = await axios.get(url, {withCredentials: true});
      console.log(`Apple${data}`)
      setUser(data.user._json);
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getUser();
  },[]);

  return (
    <div className="container"> 
      <Routes>
        <Route path="/" element={user ? <Home user={user}/> : <Navigate to="/login"/>} />
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>} />
        <Route path="/signup" element={user ? <Navigate to="/"/> : <Signup/>} />
      </Routes>
    </div>
  );
  
}

export default App;
