//import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
}from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Entry from './pages/Entry';
import axios from "axios";
import { PrivateRoute } from "./services/PrivateRoute";
import { AuthContext } from "./services/AuthContext";
import {useEffect, useState} from "react";
import UserProfile from "./pages/UserProfile";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
function App() {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    if(localStorage.getItem("AuthToken")) {
      checkAuth();
    } else {
      setLoading(false);
    }
  }, [])

  async function checkAuth() {
    console.log("Login", localStorage.getItem("AuthToken"))

    //Server -- E valid token
    let response = await axios.get("http://localhost:5555/users/auth",
    {
      headers: {
        authToken: localStorage.getItem("AuthToken")
      }
    }
    )
    if (response?.data?.error) {
      console.log(response.data.error);
    } else if(response?.data?.user){
      setLogin(response?.data?.user)
    }
        setLoading(false);
    }

  if(loading) {
    return <></>
  }

  return (
    <>
    <AuthContext.Provider value={{login, setLogin}}>
   <Router>
    <Routes>
      <Route path="/entry" element={<Entry/>}></Route>
      <Route path="/home" element={<PrivateRoute/>}>
        <Route path="/home" element={<Home/>}/>
      </Route>
      <Route path="/user/:username" element={<PrivateRoute />}>
        <Route path="/user/:username" element={<UserProfile />} />
      </Route>
      <Route path="*" element={<Navigate to={login ? "/Home" : "/Entry"}/>}/>
    </Routes>
   </Router>
   </AuthContext.Provider>
   <ToastContainer />
   </>
  );
}

export default App;
