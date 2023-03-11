import React from "react";
import "../styles/navbar.css";
import "./Home1";
import { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import Burguer from "./Burguer";
import { useSelector, useDispatch } from 'react-redux'
import userActions from "../redux/actions/SignInAction";
import { confirmAlert } from "react-confirm-alert";


export default function Navbar() {
  // let [viewHide, setViewHide] = useState(false);
  // let hide = () => {
  //   setViewHide(!viewHide); //viewHide = mostrarOcultar
  // };

  let { logged, token, photo, name} = useSelector(store => store.users)
  let dispatch = useDispatch()
  let { signout } = userActions
 
  async function signOut(event){
    let res = await dispatch(signout(token))
  }
  
  async function SignOut(event) {
    confirmAlert({
      title: "Confirm",
      message: "Are your sure ?",
      buttons: [{
        label: "Log Out",
        onClick: async () => {
          signOut(token)
        }
      },{
        label: "Back",
        onClick: () => console.log("Click no")
      }]
    })}


  let user= useSelector(store => store.users)

  return (
    <div className="nav-container1">
      <div className="nav-container">
        <Burguer></Burguer>
        <div className="d-flex justify-content-center align-items-center g-1">
        {logged ? (<>
          
              <div className="dropdown icon-login">
                  <button className="btn dropdown-toggle p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img className="logo2" src={photo} alt="accountIcon" />
                  </button>
                  <ul className="dropdown-menu">
                    <li><LinkRouter to={'/profile'} className="dropdown-item">Profile</LinkRouter></li>
                    <li><LinkRouter to="/SignUp" className="dropdown-item"><button onClick={()=>SignOut(token)} className="btn">Log Out</button></LinkRouter></li>
                  </ul>
                  </div>
            </>
          ):(
              <>
                <div className="dropdown icon-login">
                  <button className="btn dropdown-toggle p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img className="logo2" src="/img/user.svg" alt="accountIcon"/>
                  </button>
                  <ul className="dropdown-menu">
                    <li><LinkRouter to="/SignUp" className="dropdown-item">SignUp</LinkRouter></li>
                    <li><LinkRouter to="/signin" className="dropdown-item">Login</LinkRouter></li>
                  </ul>
                </div>
              </>
            )}
          <div >
          <h2 className="nameContainer p-2">{name}</h2>
          </div>
        </div>
      </div>
    </div>

    
  );
}