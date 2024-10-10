import React from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

function CreatePostForm(props) {
    const onsubmit = async (e) => {
        e.preventDefault();
        console.log(e.target[0].value, e.target[1].value)
            
        let response = await axios.post("http://localhost:5555/posts",
            {
                title: e.target[0].value,
                description: e.target[1].value
            },
            {
                headers: {
                    authToken: localStorage.getItem("AuthToken")
                }
            }
        )
            props.onCreate(response?.data);
            toast.success("Post has been created");
    }
    return (
        <form onSubmit={onsubmit}>
            <h1>Post</h1>
            <div className='poster'>
            <input className='posting' type="text" placeholder='titolo' />
            <input className='posting' type="text" placeholder='descrizione' />

            <button id="createPost" type="submit">Create Post</button>
            </div>
        </form>
    )
}

export default CreatePostForm;