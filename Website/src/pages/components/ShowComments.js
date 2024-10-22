import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Comment from './Comment'


function ShowComments(props) {
  const[comments, setComments] = useState([])
  useEffect(()=>{
    setComments(props?.comments)
  },[props])

  return (
    <div>
      <p>{comments?.length}</p>
      {comments?.map((value) => {
      return (
        <Comment comment={value} />
      )
    })}</div>
  )
}

export default ShowComments