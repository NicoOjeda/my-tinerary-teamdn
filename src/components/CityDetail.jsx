import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/CityDetails.css";
import axios from "axios";
import "../styles/hotelscards.css";
import "../styles/inputHotels.css";
import "../styles/Comments.css";
import Itinerary from "./Itinerary";

const CityDetail = () => {
  let { id } = useParams();
  // console.log(id);
  let [mostrarOcultar, setMostrarOcultar] = useState(false);
  let [data, setData] = useState([]);
  let [dataItinerary, setDataItinerary] = useState([]);

  let hide = () => {
    setMostrarOcultar(!mostrarOcultar);
    // console.log(mostrarOcultar);
  };
  // console.log(dataCities);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cities/${id}`)
      .then((res) => setData([res.data.response]))
      .catch((error) => console.log(error));

    axios
      .get(`http://localhost:8000/api/itineraries?citiId=${id}`)
      .then((res) => setDataItinerary(res.data.response))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="detail-container ContainerDetail" key={data?._id}>
        <div className="detail">
          <h2 className="Detail">City's Details</h2>
          {data?.map((city) => {
            return (
              <>
                <div className="dcard-cont-city2" key={city.name}>
                    <div className="dcard-title">{city.name}</div>
                    <img className="dcard-imgs2" src={city.photo} alt={city.name}></img>
                    <div className="dcard-title2">{city.continent}</div>
                </div>
              </>
            );
          })}
        </div>
          {dataItinerary.map((data) => {
            return (
              <Itinerary data={data} mostrarOcultar={mostrarOcultar} hide={hide}/>
            );
          })}
      </div>
  );
};

export default CityDetail;
