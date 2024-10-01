import React, {useContext}from 'react'
import { AuthContext } from '../services/AuthContext'
import { useNavigate } from 'react-router-dom';
import CreatePostForm from './components/CreatePostForm';
import axios from 'axios';
import '../styles/Home.css';

function Home() {
    const {login, setLogin} =useContext(AuthContext);
    const navigate = useNavigate();
    
    const logout = () => {
      localStorage.removeItem("AuthToken");
      navigate("/entry");
      setLogin(false);
    }
  
  return (
<div className='Home'>
    <div className="Homepage" style={{color: "black"}}>
      <h1>Home</h1>
      <div className='loggedIn'>
      <button className='Bottone'
      type="button"
      onClick={logout}
      > Log Out</button>
      </div>

      <div>

    <CreatePostForm />

      </div>
      </div>

</div>
    )}


export default Home

