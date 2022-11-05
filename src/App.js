import React from "react";
import Home from "./pages/Home";
import {Routes, Route } from 'react-router-dom'
import WebSiteLayout from './layouts/WebSiteLayout'
import NotFound from "./components/NotFound";

import Signin from "./components/Signin";



function App() {
  return (
    <WebSiteLayout>
      <Routes> 
        <Route path='/' element={<Home/>} ></Route>
        <Route path='*' element={<NotFound/>} ></Route>
      

        
        <Route path='/signin' element={<Signin/>} ></Route>
      </Routes>
    </WebSiteLayout>
  );
}
export default App;


