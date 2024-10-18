import React from 'react'
import CommentInput from './CommentInput'
import ShowComments from './ShowComments';

function CommentSection(props) {
  return (
    <div>
        <CommentInput postId={props?.postId} />
        <ShowComments postId={props?.postId}/>
    </div>
  )
}

export default CommentSection;