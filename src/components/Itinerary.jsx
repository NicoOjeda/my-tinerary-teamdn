import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import activityReactionAction from "../redux/actions/activityReactionAction";
import Reaction from "./Reactions";
import '../styles/Reaction.css'
import '../styles/DetailsH.css'

const Itinerary = (props) => {
  let { data, mostrarOcultar, hide } = props;

  return (
    <div className="DetailsH-card" key={data._id}>
        <div className="activity-title ">{data.name}</div>
        <img  className="DetailsH-img" src={data.photo} alt={data.name}></img>
        <div className="DetailsH-title3">{data.description}</div>
        <div className="DetailsH-title3">${data.price}</div>
        <div className="DetailsH-user"> 
        <img width="100px" className="DetailsH-photo" src={data.userId.photo} alt={data.userId.name}></img>
        <p className="DetailsH-title3">{data.userId.name}</p>
        </div>
        <div className="img-like">
          <Reaction type={"itineraryId"} eventid={data._id} />
        </div>
        {!mostrarOcultar ? (
          <>
            <button className="d-btn2" onClick={hide}>
              Comments:{" "}
            </button>
          </>
        ) : (
          <>
            <button className="d-btn3" onClick={hide}>
              Cerrar❌
            </button>
            <p>Comment:</p>
            <div className="comments">
              <p>This events are Amazing</p>
            </div>
          </>
        )}
    </div>
  );
};

export default Itinerary;
