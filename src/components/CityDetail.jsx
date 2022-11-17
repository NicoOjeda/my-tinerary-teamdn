import React from "react";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import "../styles/CityDetails.css";
import dataActivity from "../data/activity";
import axios from 'axios'

const CityDetail = () => {
  let { id } = useParams();
  console.log(id);
  let [mostrarOcultar, setMostrarOcultar] = useState(false);
  let [data, setData] = useState()

  let hide = () => {
    setMostrarOcultar(!mostrarOcultar);
    console.log(mostrarOcultar);
  };
  // console.log(dataCities);
  useEffect(()=>{
      axios.get(`http://localhost:8000/api/cities/${id}`)
      .then(res=> setData( [res.data.response]))
      .catch(error=> console.log(error))
    
      console.log(data)
  },[id])
  

 
  return (
    <div className="detail-container ContainerDetail">
      <div className="detail">
      <h2 className="Detail">City Detail :</h2>
        {data?.map((city) => {
      
            return (
              <>
                <div className="dcard-cont-city" key={city.name}>
                  <div className="d-header-city">
                    <div className="dcard-title">{city.name}</div>
                    <img className="dcard-imgs" src={city.photo} alt={city.name}>
                    
                    </img>
                    <div className="dcard-title2">{city.continent}</div>
                  </div>
                </div>
              </>
            );
          
        })}
      </div>
  
 

  
    <div className=".detail-container-Activity">
      <div className="d">
        {dataActivity?.map((e,index) => 
        { if (id === e.citiId) {
          console.log(e); 
            return (
    <>
                <div className="d-activity-card cityImageDetails  " key={index}>
                  <div className="container-activity-detailc">
                    <div className="activity-title ">{e.name}</div>
                    <img
                      className="activity-img detail-img1"
                      src={e.photo}
                      alt={e.name}
                    ></img>

                    <div className="activity-info">{e.description}</div>
                    <div className="activity-info">{e.price}</div>
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
