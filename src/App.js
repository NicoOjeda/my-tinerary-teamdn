import React, { useEffect } from "react";
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
import MyShows from "./pages/MyShows";
import EditShow from "./pages/EditShow";
import MyHotels from "./pages/MyHotels";
import EditHotel from "./pages/EditHotel"
import MyCitiesget from "./pages/MyCitiesget";
import EditCityForm from "./pages/EditCity";
import Myitinerariesget from "./pages/Myitinerariesget";
import EditItineraryForm from "./pages/EditItinerary";
import { useDispatch, useSelector } from "react-redux";
import userActions from "./redux/actions/SignInAction"; 
import Profile from "./pages/Profile";


function App() {

let dispatch = useDispatch()
let {relogin} = userActions

useEffect(()=>{
  let token = JSON.parse(localStorage.getItem('token'))
  console.log(token?.token.user);
  if(token){
    dispatch(relogin(token.token.user))
  }
})

const tokenList = useSelector(store => store.tokenReducer.tokenList)
console.log(tokenList);




  return (
    <WebSiteLayout>
      <Routes> 
      <Route path='/detailshotels/:id' element={<DetailsHotel/>} ></Route>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='*' element={<NotFound/>} ></Route>
      <Route path='/newhotel' element={tokenList.role === "admin"? <NewHotel/> : <Home/>}></Route>
      <Route path='/hotels' element={<Hotels/>}></Route>
      <Route path='/Cities' element={<Cities/>} ></Route>
      <Route path='/SignUp' element={<SignUp/>} ></Route>
      <Route path='/signin' element={<Signin/>} ></Route>
      <Route path='/myhotels' element={tokenList.role === "admin"? <MyHotels/> : <Home/>} ></Route>
      <Route path='/NewCity' element={tokenList.role === "admin"? <NewCity/> : <Home/>} ></Route>
      <Route path='/Details/:id' element={<Details/>} ></Route>
      <Route path='/editcity/:id' element={<EditCityForm/>} ></Route>
      <Route path='/edithotel/:id/' element={<EditHotel/>} ></Route>
      <Route path='/myshows' element={<MyShows/>} ></Route>
      <Route path='/editshow/:id/' element={<EditShow/>} ></Route>
      <Route path="/mycities" element={tokenList.role === "admin"? <MyCitiesget/> : <Home/>}></Route>
      <Route path="/myitineraries" element={<Myitinerariesget/>}></Route>
      <Route path="/edititinerary/:id" element={<EditItineraryForm/>}></Route>
      <Route path="/profile" element={<Profile/>}> </Route>
      </Routes>
    </WebSiteLayout>
  );
}
export default App;