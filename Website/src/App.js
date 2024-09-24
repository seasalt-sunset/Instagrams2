//import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from"react-router-dom";
import './App.css';
import {useState} from "react";
import Entry from './pages/Entry';
import Home from "./pages/Home";

function App() {

  const [login, setLogin] = useState(false);

  return (
  <Router>
    <Routes>
      <Route path="entry" element={<Entry />}></Route>
      <Route path="/home" element={<Home />} />
      <Route path="*" element= {<Navigate to={login ? "/Home" : "/Entry"} />} />

    
    </Routes>
  </Router>
    
  );
}

export default App;
