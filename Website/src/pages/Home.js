import React, {useContext, useEffect, useState}from 'react'
import { AuthContext } from '../services/AuthContext'
import { useNavigate } from 'react-router-dom';
import CreatePostForm from './components/CreatePostForm';
import axios from 'axios';
import '../styles/Home.css';
import Menu from './components/Menu';
import Post from './components/Post';
import { toast } from 'react-toastify';
import Sorting from '../services/Sorting';



function Home() {
    const {login, setLogin} =useContext(AuthContext);
    const navigate = useNavigate();
    const[posts, setPosts] = useState([]);
    const[order, setOrder] = useState("oldest");
    
    useEffect ( ()=> {
       getAllPosts();

    },[])
    const getAllPosts = async () => {
      let response = await axios.get (
        "http://localhost:5555/posts",
        {headers: {authToken: localStorage.getItem("AuthToken")}}
      )
      if(response?.data?.error) {
        console.log("Error", response.data.error)
      } else if(response?.data) {
        console.log("lilliccu", response.data)
        setPosts(Sorting.sortPosts(order, response.data))
    }
  }
    const [menu, setMenu] = useState("show");


  const onLogout = () => {
    localStorage.removeItem("AuthToken")
    navigate("/entry")
    setLogin(false)
  }
    const deletePost=(id) => {
      setPosts(
        posts.filter((post) => post.id !==id)
      )
    }

  return (
    <div className='Home'>
    <div className="Homepage" style={{color: "black"}}>
      <Menu
      setMenu={(value) => setMenu(value)}
      menu={menu}
      onLogout={onLogout}
      />

    <div className='Contents'>
      <h1>Home</h1>
      <div>
        <button onClick = {() => {
          let orderedPosts = Sorting.sortPosts("newest", [...posts])
          setPosts(orderedPosts)}}
        className="newest">
        Newest
        </button>
        <button onClick={() => {
          let orderedPosts = Sorting.sortPosts("oldest", [...posts])
          setPosts(orderedPosts)}}>oldest</button>
      </div>
      {
        menu === "show"
        ?
        posts.map((value) => {
          return (
            <Post post={value} deletePost={deletePost} />
            )
        })
        
        :
        <CreatePostForm onCreate={(post) => {
          setPosts([{
            ...post,
            user: {
              username: login.username
            }
          }, ...posts])
          setMenu("show")
        }}/>
        
      }

      </div>


      </div>

</div>
    )}


export default Home

