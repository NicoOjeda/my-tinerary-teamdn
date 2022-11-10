import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "../styles/CityDetails.css";
import dataCities from "../data1/datosCities";
import dataActivity from "../data/activity";
import { Link as LinkRouter } from "react-router-dom";
import Cities from "../pages/Cities";

const CityDetail = () => {
  let { id } = useParams();
  console.log(id);
  let [mostrarOcultar, setMostrarOcultar] = useState(false);
  let hide = () => {
    setMostrarOcultar(!mostrarOcultar);
    console.log(mostrarOcultar);
  };
  // console.log(dataCities);
 
  return (
    <div className="detail-container ContainerDetail">
      <div className="detail">
      <h2 className="Detail">City Detail :</h2>
        {dataCities.map((City,index) => {
          if (id === City.id) {
            return (
              <>
                <div className="dcard-cont-city" key={index}>
                  <div className="d-header-city">
                    <div className="dcard-title">{City.name}</div>
                    <img className="dcard-imgs" src={City.photo} alt={City.name}>
                    
                    </img>
                    <div className="dcard-title2">{City.continent}</div>
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
  
 

  
    <div className=".detail-container-Activity">
      <div className="d">
        {dataActivity.map((dataActivity,index) => 
        { if (id === dataActivity.citiId) {
          console.log(dataActivity); 
            return (
    <>
                <div className="d-activity-card cityImageDetails  " key={index}>
                  <div className="container-activity-detailc">
                    <div className="activity-title ">{dataActivity.name}</div>
                    <img
                      className="activity-img detail-img1"
                      src={dataActivity.photo}
                      alt={dataActivity.name}
                    ></img>

                    <div className="activity-info">{dataActivity.description}</div>
                    <div className="activity-info">{dataActivity.price}</div>
                    {
        mostrarOcultar?  
                        (
                          <>
                               <button className='d-btn2' onClick={hide}>Comments: </button>
                          
                           </>
                         ): 
                           (
                           <>
                           <button className='d-btn3' onClick={hide}>Cerrar❌</button>
                               <p>Comment:</p>
                               <div className='comments'>
                               <p>This events are Amazing</p>
                               </div> 
                          </>
                              )
                              }
                    </div>
                </div>
              </>
            );
          }
        })}
</div>

    </div>
    </div>)


          }; 

      
    
                   
  
                  

export default CityDetail;
