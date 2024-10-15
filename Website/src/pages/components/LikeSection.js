import React, { useState } from 'react'
import NonLike from "../../assets/Nonlike.svg"
import Like from "../../assets/Like.svg"
import axios from 'axios'
import {toast} from "react-toastify"

function LikeSection(props) {
    const [like, setlike] = useState(false)
    const changeLike= async() => {
        let response = await axios.post("http://localhost:5555/postsLikes",
            {
                like:!like,
                postId: props.postId
            },
            {
                headers:  {
                    authToken: localStorage.getItem("AuthToken")
                }
            })
        toast.success(like ?" You have Unliked the Post":" You have Liked the Post")
        setlike(!like)
    }

    
  return (
    <div>
        <button onClick={changeLike}>
        <img src={like ?Like : NonLike} alt='cacca'/> 
        </button>
        <p>{0}</p>

    </div>
  )
}

export default LikeSection