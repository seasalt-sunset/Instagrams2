import React from 'react'
import axios from 'axios';
import '../../styles/CommentInput.css'
function commentInput(props) {
    const createComment = async (e) =>{
        e.preventDefault();
        console.log(e.target[0].value) 

        if(!e.target[0].value)
            return

        let response = await axios.post("http://localhost:5555/postsComments", 
            {
            comment : e.target[0].value,
            postId : props?.postId,
            },{
                
                headers: {
                    authToken: localStorage.getItem("AuthToken")
                }
            })
        console.log(response.data)
        
    }
    
    return (
    <form onSubmit={createComment}>
        <input type="text" className='inputComment'></input>
        <button type="submit">Commenta</button>
    </form>
  )
}

export default commentInput