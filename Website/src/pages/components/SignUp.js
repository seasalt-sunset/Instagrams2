import React from 'react';
import '../../styles/SignUp.css';
import axios from "axios";
import { toast } from 'react-toastify';
function SignUp(props) {

 

  async function onSignUp(e) {

    e.preventDefault();

    console.log("E", e.target[0].value, e.target[1].value, e.target[2].value);

    let respose = await 
    axios.post("http://localhost:5555/users",
    {
      email: e.target[0].value,
      password: e.target[1].value,
      username: e.target[2].value
})
  
  toast.success (respose.data)
  }



  return (
    <form className="parent" onSubmit={onSignUp}>
      <h1>BENVENUTO COGLIONE!!!</h1>
      <img src = "Obama.gif"></img>
      <h5>Forza Bari e altre squadre</h5>     
      <input type="text" placeholder='email'/>  

      <input type="text"placeholder='password'/> 
      <input type="text" placeholder='username'/>  
  
      <button type="submit"> Sign Up </button>
      <button
      type="button"
      onClick={() => props.changeToLogin()}
      >Login </button>
      <div className="bottoni">
      <button> Cancel </button>
      </div>
    </form>
  )
}

export default SignUp