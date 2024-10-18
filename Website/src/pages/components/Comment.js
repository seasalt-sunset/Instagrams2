import React from 'react'
import '../../styles/Comment.css'
function Comment(props) {
  return (
    <div  className='commenti'>{props?.comment?.commenti}</div>
  )
}

export default Comment