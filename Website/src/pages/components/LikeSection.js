import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../services/AuthContext'
import NonLike from "../../assets/Nonlike.svg"
import Like from "../../assets/Like.svg"
import axios from 'axios'
import {toast} from "react-toastify"

function LikeSection(props) {
    const [like, setlike] = useState(false)
    const {login} =useContext(AuthContext);
    const [numLikes, setnumLikes] = useState(0)
    useEffect(() => {
        console.log(props?.likes)
        if(props?.likes?.length >= 1) {

            let filtered = props?.likes?.filter((value) => login?.id==value?.userId)[0]?.like
            setlike(filtered)
            let num = props.likes.filter((value) => {return value?.like==true})?.length
            setnumLikes(num)
        }
            //console.log(props?.likes, filtered)
    }, [])



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
        setnumLikes(like==true ? numLikes-1 : numLikes+1)
        setlike(!like)
    }

    
  return (
    <div>
        <button onClick={changeLike}>
        <img src={like ?Like : NonLike} alt='cacca'/> 
        </button>
        <p>{numLikes}</p>

    </div>
  )
}

export default LikeSection