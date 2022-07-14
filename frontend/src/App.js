import './App.css';
import { Routes, Route } from "react-router-dom";
import NavbarVisit from "../src/components/views/NavbarVisit/NavbarVisit.js"
import Home from"../src/components/views/Home/Home"
import Login from "../src/components/views/Login"
import Register from "../src/components/views/Register/Register"
import Tatuadores from "../src/components/views/Tatuadores/Tatuadores"

function App() {
  return (
    
	<div className="App">
	<NavbarVisit/>
	<Routes>
	  <Route path="/" exact element={<Home/>}/>
	  <Route path="/login" exact element={<Login/>}/>
	  <Route path="/register" exact element={<Register/>}/>
	  <Route path="/tatuadores" exact element={<Tatuadores/>}/>
	</Routes>
  </div>
      
		
  );
}

export default App;
