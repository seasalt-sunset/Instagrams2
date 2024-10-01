import React,  {useContext} from 'react';
import '../../styles/SignUp.css';
import axios from "axios";
import Validation from "../../services/Validation";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../services/AuthContext';

function Login(props) {

  const navigate = useNavigate();
  const {setLogin} = useContext(AuthContext);

  async function onSignUp(e) {

    e.preventDefault();

    console.log("E", e.target[0].value, e.target[1].value);

    if(!e.target[0].value){
      return;
    } 

    if(!e.target[1].value){
      return;
    }

    let res=await axios.post("http://localhost:5555/users/login",
      {
            ...(Validation.isEmail(e.target[0].value) ? {email: e.target[0].value} :{username: e.target[0].value}),
            password: e.target[1].value

      }

    )

    if(res?.data?.error){
      console.log("error",res.data.error);
    }else if (res?.data?.status === true) {
      setLogin({
        email: res?.data?.email,
        status: res?.data?.status,
      });
      localStorage.setItem("AuthToken", res?.data?.authToken);
      navigate("/home");
    }
  }



  return (
    <form className="parent" onSubmit={onSignUp}>
      <h1> BENVENUTO COGLIONE!!!</h1>
     <img src = "Obama.gif" alt="Obamium"></img>
      <h5>Forza Bari e altre squadre</h5>   
      <input type="text" placeholder='username or email'/>  
      <input type="text"placeholder='password'/> 
  
      <button type="submit"> Login </button>
      <button
      type="button"
      onClick={() => props.changeToSignUp()}
      >SignUp</button>
      <div className="bottoni">
      <button> Cancel </button>
      </div>
    </form>
  )
}

export default Login