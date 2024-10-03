import React, {useContext, useEffect, useState}from 'react'
import { AuthContext } from '../services/AuthContext'
import { useNavigate } from 'react-router-dom';
import CreatePostForm from './components/CreatePostForm';
import axios from 'axios';
import '../styles/Home.css';

function Home() {
    const {login, setLogin} =useContext(AuthContext);
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
    
    const logout = () => {
      localStorage.removeItem("AuthToken");
      navigate("/entry");
      setLogin(false);
    }
  
  return (
    <div className='Home'>
    <div className="Homepage" style={{color: "black"}}>
      <h1>Home</h1>
      <CreatePostForm />
          {posts.map((post) => {
            return (<div className='singlePost'>
              <h2 className='postTitle'>{post.title}</h2>
              <p className='postDescription'>{post.description}</p>
              <p className='postUsername'>{post.user.username}</p>
              </div>)
          })}

      <div className='loggedIn'>
      <button className='Bottone'
      type="button"
      onClick={logout}
      > Log Out</button>
      </div>

      <div>


      </div>
      </div>

</div>
    )}


export default Home

