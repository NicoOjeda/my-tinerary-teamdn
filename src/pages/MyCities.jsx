// import React from 'react'
// import "../styles/Mycities.css"
// import Mycity from "../components/Mycity"
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// export default function MyCities() {
//   let { id } = useParams();
//   // console.log(id);
//   let [mostrarOcultar, setMostrarOcultar] = useState(false);
//   let [data, setData] = useState([]);
//   let [dataItinerary, setDataItinerary] = useState([]);

//   let hide = () => {
//     setMostrarOcultar(!mostrarOcultar);
//     // console.log(mostrarOcultar);
//   };
//   // console.log(dataCities); change
//   useEffect(() => {
//     axios
//       .get(`http://localhost:8000/api/cities/${id}`)
//       .then((res) => setData([res.data.response]))
//       .catch((error) => console.log(error));



//   console.log(dataItinerary);

//   return (
//     <div className="detail-container ContainerDetail">
//       <div className="detail">
//         <h2 className="Detail">City Detail :</h2>
//         {data?.map((city) => {
//           {
//             console.log(city.userId);
//           }
//           return (
//             <>
//               <div className="dcard-cont-city" key={city.name}>
//                 <div className="d-header-city">
//                   <div className="dcard-title">{city.name}</div>
//                   <img
//                     className="dcard-imgs"
//                     src={city.photo}
//                     alt={city.name}
//                   ></img>
//                   <div className="dcard-title2">{city.continent}</div>
//                 </div>
//               </div>
//             </>
//           );
//         })}
//       </div>

//       <div className=".detail-container-Activity">
//         <div className="d">
//           {dataItinerary.map((e) => {
//             console.log(e.userId);
//             return (
//               <>
//                 <div className="d-activity-card cityImageDetails  ">
//                   <div className="container-activity-detailc">
//                     <div className="activity-title ">{e.name}</div>
//                     <img
//                       className="activity-img detail-img1"
//                       src={e.photo}
//                       alt={e.name}
//                     ></img>

//                     <div className="activity-info">{e.description}</div>
//                     <div className="activity-info">${e.price}</div>
//                     <div> {e.userId.name}</div>
//                     <img
//                       className="DetailsH-photo"
//                       src={e.userId.photo}
//                       alt={e.userId.name}
//                     ></img>
//                     {!mostrarOcultar ? (
//                       <>
//                         <button className="d-btn2" onClick={hide}>
//                           Comments:{" "}
//                         </button>
//                       </>
//                     ) : (
//                       <>
//                         <button className="d-btn3" onClick={hide}>
//                           Cerrar❌
//                         </button>
//                         <p>Comment:</p>
//                         <div className="comments">
//                           <p>This events are Amazing</p>
//                         </div>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   )}
//   )

