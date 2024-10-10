import React, {useContext, useEffect, useState}from 'react'
import { AuthContext } from '../services/AuthContext'
import { useNavigate } from 'react-router-dom';
import CreatePostForm from './components/CreatePostForm';
import axios from 'axios';
import '../styles/Home.css';
import Menu from './components/Menu';
import Post from './components/Post';

function Home() {
    const {setLogin} =useContext(AuthContext);
    const navigate = useNavigate();
    const[posts, setPosts] = useState([]);
    
    useEffect ( ()=> {
;   getAllPosts();

    },[])
    const getAllPosts = async () => {
      let response = await axios.get (
        "http://localhost:5555/posts",
        {headers: {authToken: localStorage.getItem("AuthToken")}}
      )
      console.log("yoo", response);
      if (response?.data?.error) {
        console.log(response.data.error)
      }else {
        setPosts(response.data)
        console.log(response.data)
      }
    }
    
    const [menu, setMenu] = useState("show");


  const onLogout = () => {
    localStorage.removeItem("AuthToken")
    navigate("/entry")
    setLogin(false)
  }

  return (
    <div className='Home'>
    <div className="Homepage" style={{color: "black"}}>
      <Menu
      cambiaMenu={(value) => setMenu(value)}
      onLogout={onLogout}
      />

    <div className='Contents'>
      <h1>Home</h1>
      {
        menu === "show"
        ?
        posts.map((post) => {
          return (
            <Post post = {post} />
            )
        })
        
        :
        <CreatePostForm />
        
      }

      </div>


      </div>

</div>
    )}


export default Home

