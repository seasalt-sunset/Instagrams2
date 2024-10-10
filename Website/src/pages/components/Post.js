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
        }else if(props?.user?.username) {
                setUsername(props?.post?.username);
            }
            toast.success("logijn", login)
        
    },[props])
    const onDelete = async () => {
        let response = await axios.delete("http://localhost:5555/posts/" + props?.post?.id,
            {
                headers: {
                    authToken: localStorage.getItem("authToken")
                }
            }
        )
        props.deletePost(props?.post?.id)
        toast.success("you have delete your post")
    }
  return (
    ( <div className='Post'>
        <h1 className='PostTitle'>{props.post.title}</h1>
        <div>{props?.username ? props?.username : props?.post?.user.username} </div>
        <p>{props.post.description}</p>
        {
            login.username === username ?
            <button onClick={onDelete}>Delete</button>
            :<></>

        }
    

      </div>)
  )
}

export default Post