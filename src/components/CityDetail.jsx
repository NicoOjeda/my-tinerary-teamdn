import React from 'react'
import {useParams} from 'react-router-dom'
import  { useState } from 'react'
import { Link as LinkRouter } from "react-router-dom";
import dataCities from "../data1/datosCities"
import dataActivity from "../data/activity"

const CityDetail = () => {

  let {id} = useParams()
  console.log(id);

  let [mostrarOcultar, setMostrarOcultar] = useState(false)
  
  let hide = ()=>{
    setMostrarOcultar(!mostrarOcultar)
    console.log(mostrarOcultar);
    
    
  }
  console.log(dataCities)
  console.log(dataActivity)

  return (
      

        <div className="detail-container">
          <div  className="detail">
        
            {dataCities.map((City ) => {if (id === City.id){

              return(
                <>
                <div className="card-container">
          <div  className="card">
            <div className="card-title">{City.name}</div>
            <img className="card-img" src={City.photo}  alt={City.name} ></img>
            <div className="card-title">{City.continent}</div>
          </div>
        </div>
          
           
           
      
              </>
              )

  }})}

    
           
        
          </div>
          </div>
    )}

export default CityDetail