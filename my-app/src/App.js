import Menu from './Component/menu/Menu';
import logo from './logo.svg';
import {  BrowserRouter as Router,Route, Routes, Navigate } from "react-router-dom";
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Friendbio from './Component/Friend/Friendbio';
import Home1 from './Component/Hom2/Home1';
import Header from './Component/Header/Header';
import Shipment from './Component/shipment/Shipment';
import { createContext,  useState } from 'react';
export const categorycontext=createContext();

function App() {

  const [count,setcount]=useState('laptop');

  return (
    <categorycontext.Provider value={[count,setcount]}>

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
       
     {/* <Header  setcount={setcount}></Header> */}
     <Header></Header>
     <Home1 ></Home1>
     <Shipment></Shipment>
    </categorycontext.Provider>
   
  );
}

export default App;
