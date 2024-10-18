import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Comment from './Comment'


function ShowComments(props) {
  const[comments, setComments] = useState([])
  useEffect(()=>{
getAllComents();
  },[])
  const getAllComents = async() =>{
    let response = await axios.get ("http://localhost:5555/PostsComments/"+props?.postId,
      {headers:{authToken: localStorage.getItem("AuthToken")}}
    )
    console.log(response.data)
    setComments(response?.data)
  }


  return (
    <div>{comments?.map((value) => {
      return (
        <Comment comment={value} />
      )
    })}</div>
  )
}

export default ShowComments