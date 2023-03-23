import React from "react";
import { useRef, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { BASE_URL } from "../api/url";
import { useSelector, useDispatch } from "react-redux";
import myItinerariesActions from "../redux/actions/myItineriesActions";
import '../styles/NewReaction.css'
export default function NewReaction() {
  const { itinerariesList } = myItinerariesActions;
  const [token, setToken] = useState();
  const [jWTToken, setJWTToken] = useState();
  const dispatch = useDispatch();
  const form = useRef();
  const eventId = useRef();
  const nameRef = useRef();
  const iconRef = useRef();
  const iconBackBack = useRef();
  const { itinerariesAdmlist } = useSelector(
    (store) => store.myItinerariesReducer
  );

  useEffect(() => {
    dispatch(itinerariesList());
    let token = JSON.parse(localStorage.getItem("token"))

    setJWTToken(token.token.user);
    // console.log(setJWTToken)
  }, []);

  let events = [...itinerariesAdmlist];

  async function createReaction(event) {
    event.preventDefault();

    let itineraires = itinerariesAdmlist.find(
      (itinerary) => itinerary._id === eventId.current.value
    );

    let newtinerary = {
      name: nameRef.current.value,
      icon: iconRef.current.value,
      iconBack: iconBackBack.current.value,
      userId: [],
    };

    if (itineraires) {
      newtinerary.itineraryId = eventId.current.value;
    }

    try {
      await axios({
        method: "POST",
        url: `${BASE_URL}/api/reactions/`,
        data: newtinerary,
        headers: { Authorization: `Bearer ${jWTToken}` },
      }).then((response) => {
        console.log(response);
        if (response.data.success) {
          Swal.fire({
            icon: "success",
            title: `${response.data.message}`,
            showConfirmButton: true,
          }).then((make) => {
            if (make.isConfirmed) {
              form.current.reset();
            }
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.data.message,
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  return ( 
    <div className='NewReaction-box'>
        <h1>New Reaction</h1>
        <form className="NewReaction-form" ref={form}>
          <input className="NewReaction-input" type="text" placeholder=" Name" ref={nameRef}/>
          <select ref={eventId} className="NewReaction-input" id="eventId">
            <option>Select the event</option>
            {events.map((event) => (
              <option key={event._id} value={event._id}>
                {" "}
                {event.name}
              </option>
            ))}
          </select>
          <input className="NewReaction-input" type="text" placeholder=" Icon" ref={iconRef}/>
          <input className="NewReaction-input" type="text" placeholder=" IconBack" ref={iconBackBack}/>
          <div className='NewReaction-button'>
            <input className="NewReaction-button2" type="submit" value="Create Reaction" onClick={(e) => createReaction(e)}/>
          </div>
        </form>
    </div>
  );
}
