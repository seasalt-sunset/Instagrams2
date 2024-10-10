import React, {useContext, useState, useEffect} from 'react'
import { AuthContext } from '../../services/AuthContext'
import"../../styles/Post.css"
import axios from 'axios'
import {toast} from "react-toastify"

function Post(props){
    const {login} = useContext(AuthContext);
    const [username,setUsername] = useState("");
    useEffect(() =>{
        if(props?.username) {
            setUsername (props?.username)
        }else if(props?.post?.user?.username) {
                setUsername(props?.post?.user?.username);
            }
            console.log("LOGIN!!!!!!!", login)
        
    },[props])
    const onDelete = async () => {
        console.log(props.post.id)
        let response = await axios.delete("http://localhost:5555/posts/" + props?.post?.id,
            {
                headers: {
                    authToken: localStorage.getItem("AuthToken")
                }
            }
        )
        props.deletePost(props?.post?.id)
        toast.success("you have deleted your post")
    }
      return (
        <div className='singlePost'>            
            <h2 className='postTitle'>{props?.post?.title}</h2>
            <div>{props?.post?.createdAt}</div>
            <p className='postDescription'>{props?.post?.description}</p>
            <p className='postUsername'>{props?.username ? props?.username : props?.post?.user?.username}</p>
            <button className='delete' onClick={onDelete}>Delete</button>
        </div>
      )
    }

export default Post