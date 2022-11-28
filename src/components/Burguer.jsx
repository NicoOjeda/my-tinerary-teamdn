import React from "react";
import "../styles/burguer.css";
import "../styles/navbar.css";
import { useState, useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import tokenAction from "../redux/actions/tokenAction";


  
export default function Burguer() {

  let [viewHide, setViewHide] = useState(false);
  let hide = () => {
    setViewHide(!viewHide);//viewHide = mostrarOcultar
    console.log(viewHide) 
};
 const tokenList = useSelector(store => store.tokenReducer.tokenList)
//  console.log(tokenList);
 let dispatch = useDispatch()

let token=""

if(JSON.parse(localStorage.getItem('token'))){
  token = JSON.parse(localStorage.getItem('token'))
  token = token.token.user
}

useEffect(()=>{
  dispatch(tokenAction.getToken(token))
},[token])



    return (
     <>

      <img className="logo1" src="https://i.imgur.com/lGiu6NV.png" alt="" />
      <div className="nav-container1">
      <div className="nav-container">
      
      {
        tokenList.role === "user" && tokenList.logged === true?
      (
        <div className="nav-0">
          <LinkRouter to="/">
            <button className="nav-1">Home</button>
          </LinkRouter>
          <LinkRouter to="/Cities">
            <button className="nav-1">Cities</button>
          </LinkRouter>
          <LinkRouter to="/hotels">
            <button className="nav-1">Hotels</button>
          </LinkRouter>
          <LinkRouter to="/myitineraries">
            <button className="nav-1">My itineraries</button>
          </LinkRouter>
          <LinkRouter to="/myshows">
            <button className="nav-1">My Shows</button>
          </LinkRouter>
          <LinkRouter to={`/mytynerariescreate`}>
                <button className="nav-1">New Itinerary</button>
            </LinkRouter>
        </div>
      ): tokenList.role === "admin" && tokenList.logged === true ?
      (
        <div className="nav-0">
          <LinkRouter to="/newhotel">
            <button className="nav-1">New Hotel</button>
          </LinkRouter>
          <LinkRouter to="/NewCity">
            <button className="nav-1">New City </button>
          </LinkRouter>
          <LinkRouter to="/myhotels">
            <button className="nav-1">My Hotels </button>
          </LinkRouter>
          <LinkRouter to="/mycities">
            <button className="nav-1">My Cities</button>
          </LinkRouter>
        </div>
      ) : (
        <div className="nav-0">
        <LinkRouter to="/">
            <button className="nav-1">Home</button>
          </LinkRouter>
          <LinkRouter to="/Cities">
            <button className="nav-1">Cities</button>
          </LinkRouter>
          <LinkRouter to="/hotels">
            <button className="nav-1">Hotels</button>
          </LinkRouter>
        </div>
      )

      }

        {
         viewHide ?
          
          (<>
          <div className="burguer-container">
            <img
              className="burguer-img"
              src="https://cdn-icons-png.flaticon.com/512/7134/7134106.png"
              alt="burguer foto"
              onClick={hide}
            />
            <>
              {tokenList.role === "user" && tokenList.logged === true?
      (
        <div className="nav-0">
          <LinkRouter to="/">
            <button className="nav-1">Home</button>
          </LinkRouter>
          <LinkRouter to="/Cities">
            <button className="nav-1">Cities</button>
          </LinkRouter>
          <LinkRouter to="/hotels">
            <button className="nav-1">Hotels</button>
          </LinkRouter>
          <LinkRouter to="/myitineraries">
            <button className="nav-1">My itineraries</button>
          </LinkRouter>
          <LinkRouter to="/myhotels">
            <button className="nav-1">My Hotels </button>
          </LinkRouter>
        </div>
      ): tokenList.role === "admin" && tokenList.logged === true ?
      (
        <div className="nav-0">
          <LinkRouter to="/newhotel">
            <button className="nav-1">New Hotel</button>
          </LinkRouter>
          <LinkRouter to="/NewCity">
            <button className="nav-1">New City </button>
          </LinkRouter>
          <LinkRouter to="/myhotels">
            <button className="nav-1">My Hotels </button>
          </LinkRouter>
          <LinkRouter to="/mycities">
            <button className="nav-1">My Cities</button>
          </LinkRouter>
          <LinkRouter to='/profile'>
            <button className="nav-1">Profile</button>
          </LinkRouter>
        </div>
      ) : (
        <div className="nav-0">
        <LinkRouter to="/">
            <button className="nav-1">Home</button>
          </LinkRouter>
          <LinkRouter to="/Cities">
            <button className="nav-1">Cities</button>
          </LinkRouter>
          <LinkRouter to="/hotels">
            <button className="nav-1">Hotels</button>
          </LinkRouter>
        </div>
      )
}
            </>
          {/* <LinkRouter to="/">
          <button className="btn-burguer-1">
            Home
          </button>
          </LinkRouter>
          <LinkRouter to="/Cities">
          <button className="btn-burguer-2">
            Cities
          </button>
          </LinkRouter>
          <LinkRouter to="/Hotels">
          <button className="btn-burguer-3">
            Hotels
          </button>
          </LinkRouter>
          <LinkRouter to="/profile">
            <button className="btn-burguer-3">Profile</button>
          </LinkRouter> */}
          </div>
            </>

        ) : (
          <>
            <img
              className="burguer-img "
              src="https://cdn-icons-png.flaticon.com/512/7134/7134106.png"
              alt="burguerIcon"
              onClick={hide}
            />
          </>
        )}


</div>
</div>

     </> 
        );
        }


        

