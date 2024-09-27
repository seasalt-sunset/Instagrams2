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
import { PrivateRoute } from "./services/PrivateRoute";
import { AuthContext } from "./services/AuthContext";
import {useEffect, useState} from "react";
function App() {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    setLogin(localStorage.getItem("login"));
    setLoading(false);
  },[])

  if(loading) {
    return <></>
  }

  return (
    <AuthContext.Provider value={{login, setLogin}}>
   <Router>
    <Routes>
      <Route path="/entry" element={<Entry/>}></Route>
      <Route path="/home" element={<PrivateRoute/>}>
        <Route path="/home" element={<Home/>}/>
      </Route>
      <Route path="*" element={<Navigate to={login ? "/Home" : "/Entry"}/>}/>
    </Routes>
   </Router>
   </AuthContext.Provider>
  );
}

export default App;
