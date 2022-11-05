import React from "react";
import "../styles/navbar.css";
import "./Home1";
import { useState } from "react";
import{Link as LinkRouter} from "react-router-dom";
import Burguer from "./Burguer";
export default function Navbar() {
  let [viewHide, setViewHide] = useState(false);
  let hide = () => {
    setViewHide(!viewHide);//viewHide = mostrarOcultar
    console.log(viewHide)
  };
  return (
    <div className="nav-container1">
      <div className="nav-container">
      <Burguer></Burguer>
        {
         viewHide ?
          (<>
          <div className="icon-login">
         
            <img
              className="logo2"
              src="/img/user.svg"
              alt="accountIcon"
              onClick={hide}
            />
          
          <LinkRouter to="/index">
          <button className="btn-signin">
            SignIn
          </button>
          </LinkRouter>
          <LinkRouter to="/index">
          <button className="btn-Login">
            Login
          </button>
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



        </div>
    </div>
  );
        }

































































