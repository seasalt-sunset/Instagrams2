import React from 'react'
import axios from "axios";
import '../styles/Login.css';
function Login() {

  async function onSignUp(e) {
    e.preventDefault();

    console.log("E", e.target[0].value, e.target[1].value, e.target[2].value);

    let response = await axios.post(
      "http://localhost:5555/users",
      {
        username: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value
      } 
    )
    console.log(response.data)
  }
  return (

<body>
    <form className="parent" onSubmit={onSignUp}>
      <h1> BENVENUTO COGLIONE!!!</h1>
     <img src = "Prima pagina Fede.png"></img>
      <h5>Dario Mereu ma poitta no ri coddasa </h5>   
      <input type="text" placeholder= 'username'></input> 
      <input type="text" placeholder= 'email'></input>
      <input type="text" placeholder='password'></input>
      <button type="submit"> SignUp </button>
    </form>
    </body>
  )
}

export default Login