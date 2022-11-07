import React from "react";
import "../styles/Cards.css"
import { Link as LinkRouter } from "react-router-dom";
export default function Cards({ dataCities }) {


    

  return (

    <>
    {dataCities.map((City, index) => 

    <>
        <div className="card-container" key={index}>
          <div  className="card">
            <div className="card-title">{City.name}</div>
            <img className="card-img" src={City.photo}  alt={City.name} ></img>
            <LinkRouter to={`/details/${City.id}`}>
            <button className="card-button">view more! </button>
            </LinkRouter>
        
          </div>
    
        </div>
        </>
    
    )}

   </>
   
  );
}


