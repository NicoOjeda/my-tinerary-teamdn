import React from "react";
import "../styles/burguer.css";
import "../styles/navbar.css";
import { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";


  
export default function Burguer() {
    const btn = "Home";
    const btn2 = "Cities";
    const btn3 = "Hotels";



  let [viewHide, setViewHide] = useState(false);
  let hide = () => {
    setViewHide(!viewHide);//viewHide = mostrarOcultar

    console.log(viewHide)
    
    
};
    return (
     <>

      <img className="logo1" src="https://i.imgur.com/lGiu6NV.png" alt="" />
      <div className="nav-container1">
      <div className="nav-container">
        <div className="nav-0">
          <LinkRouter to="/">
            <button className="nav-1">{btn}</button>
          </LinkRouter>
          <LinkRouter to="/Cities">
            <button className="nav-2"> {btn2}</button>
          </LinkRouter>
          <LinkRouter to="/hotels">
            <button className="nav-2"> {btn3}</button>
          </LinkRouter>
        </div>
        




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
          <LinkRouter to="/">
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