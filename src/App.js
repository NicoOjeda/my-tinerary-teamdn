import React, { useEffect } from "react";
import Home from "./pages/Home";
import { Routes, Route } from 'react-router-dom'
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
import ProtectedRoute from "./components/ProtectedRoutes";
import MyTynerariesCreate from './pages/MyTynerariesCreate'

function App() {
  let dispatch = useDispatch()
  let { relogin } = userActions
  const user = useSelector(store => store.users)
  // const [logueado, setLogueado] = (null)
  // const userLogin = user.logged
console.log(user);


  useEffect(() => {
    let token = JSON.parse(localStorage.getItem('token'))
    // console.log(token?.token.user);
    if (token) {
      dispatch(relogin(token.token.user))
    }
  }, [])



  return (
    <WebSiteLayout>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/hotels' element={<Hotels />}></Route>
        <Route path='/Cities' element={<Cities />} ></Route>
        <Route path='*' element={<NotFound />} ></Route>
        <Route path='/Details/:id' element={<Details />} />
        <Route path='/detailshotels/:id' element={<DetailsHotel />} />
        <Route element={<ProtectedRoute isAllowed={user.logged === true && user.role === "user" } reDirect={"/"} />}>
          <Route path='/newhotel' element={<NewHotel />} />
          <Route path='/NewCity' element={<NewCity />} />
          <Route path='/myhotels' element={<MyHotels />} />
          <Route path='/editcity/:id' element={<EditCityForm />} />
          <Route path="/mycities" element={<MyCitiesget />} />
          <Route path='/edithotel/:id/' element={<EditHotel />} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={user.logged === true && user.role === "admin" } reDirect={"/"} />}>
          <Route path="/edititinerary/:id" element={<EditItineraryForm />} />
          <Route path='/myshows' element={<MyShows />} />
          <Route path="/myitineraries" element={<Myitinerariesget />} />
          <Route path="/mytynerariescreate" element={<MyTynerariesCreate/>}></Route>
          
          <Route path='/editshow/:id/' element={<EditShow />} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={user.logged === true} reDirect={"/"} />}>
          <Route path='/signin' element={<Signin />} />
          <Route path='/SignUp' element={<SignUp />} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={user.logged === false} reDirect={"/"} />}>
          <Route path="/profile" element={<Profile />} />

        </Route>
        {/* <Route path="/mycities/:id" element={<MyCitiesget />}></Route> */}
        {/* <Route path="/myitineraries/:id" element={<Myitinerariesget />}></Route> */}
      </Routes>
    </WebSiteLayout>
  );
  
  
}
export default App;