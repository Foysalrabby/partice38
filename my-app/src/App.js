import Menu from './Component/menu/Menu';
import logo from './logo.svg';
import {  BrowserRouter as Router,Route, Routes, Navigate } from "react-router-dom";
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Friendbio from './Component/Friend/Friendbio';

function App() {
  return (
    <div className="App">
     <Menu></Menu>
     <Routes>
      <Route exact path="/" element={<Home></Home>} /> 
      </Routes>

      <Routes>
      <Route  path="/friend" element={<Friendbio></Friendbio>}/>
      </Routes>

      <Routes>
      <Route  path="/about/:friendID" element={<About></About>} /> 
      </Routes>
    

    </div>
   
  );
}

export default App;
