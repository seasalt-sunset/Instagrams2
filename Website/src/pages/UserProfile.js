import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Post from './components/Post';
import '../styles/UserProfile.css';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
    const {username} = useParams();
    const [posts, setPosts] = useState([])
    const navigate = useNavigate;

useEffect(() => {
    fetchData();
}, [username])

    const fetchData = async () => {
    let response = await axios.get("http://localhost:5555/posts/" + username,
        {
            headers: {
                authToken: localStorage.getItem("AuthToken")
            }
        }
    )    
    console.log("RESPONSE",  response?.data)

    setPosts(response?.data)

    }
  return (
    
    <div>
        <h1>Bakeka</h1>
        <h2 id='Username'>Username: {username}</h2>
        <h1>Posts</h1>
        <div className='Posts'>
            {
            posts.length >= 1 && posts?.map((value) => {
                return <Post
                post = {value}
                username = {username}/>
            })
            }
        </div>
    
    <button onClick={() => navigate(-1)}>Home</button>
    </div>
  )
}

export default UserProfile;