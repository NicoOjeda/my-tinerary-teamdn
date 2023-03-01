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
  let [viewHide, setViewHide] = useState(false);
  let hide = () => {
    setViewHide(!viewHide); //viewHide = mostrarOcultar

  };

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
        {logged ? (<>

          {viewHide ? (
            <>
              <div className="icon-login">
                <img
                  className="logo2"
                  src={photo}
                  alt="accountIcon"
                  onClick={hide}
                />
                <LinkRouter to={'/profile'}>
                  <button className="btn-signin">Profile</button>
                </LinkRouter>
                  <button onClick={()=>SignOut(token)} className="btn-signin">Log Out</button>
              </div>
            </>
          ) : (
            <>
              <img
                className="logo2"
                src={photo}
                alt="accountIcon"
                onClick={hide}
              />
            </>
          )}
        </>) : (
          <>
            {viewHide ? (
              <>
                <div className="icon-login">
                  <img
                    className="logo2"
                    src="/img/user.svg"
                    alt="accountIcon"
                    onClick={hide}
                  />

                  <LinkRouter to="/SignUp">
                    <button className="btn-signin">SignUp</button>
                  </LinkRouter>
                  <LinkRouter to="/signin">
                    <button className="btn-Login">Login</button>
                  </LinkRouter>
                </div>
              </>
            ) : (
              <>
                <img
                  className="logo2"
                  src="/img/user.svg"
                  alt="accountIcon"
                  onClick={hide}
                />
              </>
            )}
          </>
        )}
        <div className="nameContainer">
        <h2>{name}</h2>
        </div>
      </div>
    </div>

    
  );
}