import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import "../styles/MyTynerariesSelect.css";
import { useSelector } from "react-redux";

const MyTynerariesSelect = () => {
  const listCities = useSelector(
    (store) => store.myCitiesReducer.citiesAdmlist
  );
  console.log(listCities);
  const [data, setData] = useState([]);
  const [cities, setCities] = useState([]);
  const [itineraryId , setItineraryId] = useState()
  const nav = useNavigate();
  const handleInputChange = (event) => {
    
    console.log(event.target.value);
    console.log(event.target.value);
    setItineraryId(event.target.value)
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  async function sendData(e) {
    e.preventDefault();
    try {
      let sendIti = await axios.patch(
        `http://localhost:8000/api/itineraries/${itineraryId}`,
        data
      );
      console.log(sendIti.data.id._id);
      if (sendIti.data.success) {
        nav("/myitineraries");
        swal({
          title: "Successfully edited!!",
          icon: "success",
          timer: "3000",
        });
        e.target.reset();
      }
    } catch (error) {
      console.log(error);
      swal("Error in created", error.response.data.message.join("\n"));
    }
  }
  let id = "636e7caaf4d7aa583b71eb6e";
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/itineraries?userId=${id}`)
      .then((e) => setCities(e.data.response));
  }, []);

  return (
    <div className="mts1-container">
      <h2 className="mts1-h2">New Itinerary</h2>

      <div className="mts1-box">
        <form id="form" className="mts1-form" onSubmit={sendData}>
          <label htmlFor="name">Choice the City</label>
          <select
            className="mts1-input"
            id="name"
            name="name"
            type="text"
            placeholder=" Enter the Name City"
            onChange={handleInputChange}
            required
          >
            {cities.map((e) => (
              <option value={e._id}> {e.citiId.name} </option>
            ))}
          </select>
          <label for="name">Name</label>
          <input
            className="mts1-input"
            id="name"
            name="name"
            type="text"
            placeholder=" Enter the Name City"
            onChange={handleInputChange}
            required
          />
          <label for="photo">photo</label>
          <input
            className="mts1-input"
            id="photo"
            name="photo"
            type="text"
            placeholder="Enter the Image"
            onChange={handleInputChange}
            required
          />
          <label for="continent">Description</label>
          <input
            className="mts1-input"
            id="continent"
            name="continent"
            type="text"
            placeholder="Enter the Continent"
            onChange={handleInputChange}
            required
          />

          <label for="population">Price</label>
          <input
            className="mts1-input"
            name="population"
            id="population"
            type="text"
            placeholder="Enter the Usser: "
            onChange={handleInputChange}
            required
          />
          <label for="userId">Duration</label>
          <input
            className="mts1-input"
            name="userId"
            id="userId"
            type="text"
            placeholder="Enter the Usser Id: "
            onChange={handleInputChange}
            required
          />

          <label for="userId">userID</label>
          <input
            className="mts1-input"
            name="userId"
            id="userId"
            type="text"
            placeholder="Enter the Usser Id: "
            onChange={handleInputChange}
            required
          />

          <div className="mts1-button">
            <button className="mts1-button2" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyTynerariesSelect;
