import React from "react";
import Home from "./pages/Home";
import {Routes, Route } from 'react-router-dom'
import WebSiteLayout from './layouts/WebSiteLayout'
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp"
import Signin from "./pages/Signin"
import NewHotel from "./components/NewHotelForm";
import Hotels from "./pages/Hotels";
import DetailsHotel from "./pages/DetailsHotel";
import NewCity from "./pages/NewCity"
import Cities from './pages/Cities';
import Details from "./pages/Details";
import MyHotels from "./pages/MyHotels";
import EditHotel from "./pages/EditHotel";



function App() {
  return (
    <WebSiteLayout>
      <Routes> 
      <Route path='/detailshotels/:id' element={<DetailsHotel/>} ></Route>


      <Route path='/' element={<Home/>} ></Route>
      <Route path='*' element={<NotFound/>} ></Route>
      <Route path='/newhotel' element={<NewHotel/>}></Route>
      <Route path='/hotels' element={<Hotels/>}></Route>
      <Route path='/Cities' element={<Cities/>} ></Route>
      <Route path='/SignUp' element={<SignUp/>} ></Route>
      <Route path='/signin' element={<Signin/>} ></Route>
      <Route path='/myhotels' element={<MyHotels/>} ></Route>
      <Route path='/NewCity' element={<NewCity/>} ></Route>
      <Route path='/Details/:id' element={<Details/>} ></Route>
      <Route path='/edithotel/:id/' element={<EditHotel/>} ></Route>
      
      


      
      </Routes>
    </WebSiteLayout>
  );
}
export default App;



