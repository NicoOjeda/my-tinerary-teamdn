import React from "react";
import Home from "./pages/Home";
import {Routes, Route } from 'react-router-dom'
import WebSiteLayout from './layouts/WebSiteLayout'
import NotFound from "./components/NotFound";
import SignUp from "./pages/SignUp"
import Signin from "./pages/Signin";
import NotFound from "./pages/NotFound";
import SignUp from "./components/SignUp"
import Signin from "./components/SignInForm";
import NewHotel from "./components/NewHotelForm";
import Hotels from "./pages/Hotels";

import Cities from './pages/Cities';



function App() {
  return (
    <WebSiteLayout>
      <Routes> 
      <Route path='/' element={<Home/>} ></Route>
      <Route path='*' element={<NotFound/>} ></Route>
      
      <Route path='/SignUp' element={<SignUp/>} ></Route>
      <Route path='/signin' element={<Signin/>} ></Route>
      <Route path='/Cities' element={<Cities/>} ></Route>
     





      <Route path='/newhotel' element={<NewHotel/>}></Route>
      <Route path='/hotels' element={<Hotels/>}></Route>

      <Route path='/SignUp' element={<SignUp/>} ></Route>
      <Route path='/signin' element={<Signin/>} ></Route>


      
      </Routes>
    </WebSiteLayout>
  );
}
export default App;


