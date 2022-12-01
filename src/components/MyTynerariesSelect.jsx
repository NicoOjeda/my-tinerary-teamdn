import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import "../styles/MyTynerariesSelect.css";
import { useSelector,useDispatch } from "react-redux";
// import myCitiesActions from "../redux/actions/myCitiesActions";
const MyTynerariesSelect = () => {
  const user = useSelector(store => store.users)
  const tokenList = useSelector(store => store.tokenReducer.tokenList)
  const [data, setData] = useState({
    citiId : "",
    name: "",
    photo:"",
    description:"",
    price:"",
    duration:"",
    userId: `${tokenList._id}`

  });
  const [citiesData,setCitiesData] = useState([])
  const nav = useNavigate();

  // console.log(user);
  useEffect(()=>{
    axios.get("http://localhost:8000/api/cities?")
    .then((res) => setCitiesData(res.data.response))
  },[])
  
// console.log(citiesData);
  const handleInputChange = (event) => {
    console.log(event.target.value);
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  
  async function sendData(e) {
    e.preventDefault();
    try {
      let sendIti = await axios.post(
        `http://localhost:8000/api/itineraries`,data);
      console.log(sendIti);
      if (sendIti.data.success) {
        nav("/myitineraries");
        swal({
          title: "Successfully created!!",
          icon: "success",
          timer: "3000",
        });
        e.target.reset();
      }
    } catch (error) {
      console.log(error);
      swal( "Error in created",error.response.data.message.join("\n"))
    }
  }



// citiesData.map((e) =>console.log(e));




  return (
    <div className="mts1-container">
      <h2 className="mts1-h2">New Itinerary</h2>

      <div className="mts1-box">
        <form id="form" className="mts1-form" onSubmit={sendData}>
          <label htmlFor="citiId">Choice the City</label>
          <select
            className="mts1-input"
            id="citiId"
            name="citiId"
            type="text"
            placeholder=" Enter the Name City"
            onChange={handleInputChange}
            required
          >
          <option>Select City</option>
            {citiesData.map((e,index) => (
              <option value={e._id} key={index}> {e.name} </option>
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
          <label for="description">Description</label>
          <input
            className="mts1-input"
            id="description"
            name="description"
            type="text"
            placeholder="Enter the description"
            onChange={handleInputChange}
            required
          />

          <label for="price">Price</label>
          <input
            className="mts1-input"
            name="price"
            id="price"
            type="text"
            placeholder="Enter the price: "
            onChange={handleInputChange}
            required
          />
          <label for="duration">Duration</label>
          <input
            className="mts1-input"
            name="duration"
            id="duration"
            type="text"
            placeholder="Enter the Usser Id: "
            onChange={handleInputChange}
            required
          />
           <label for="userId">userId</label>
            <input
              className="New-input"
              name="userId"
              id="userId"
              defaultValue={user.id}
              type="text"
              placeholder={user.id}
              onChange={handleInputChange} required/>
{/* <label htmlFor="userId">Choice the City</label>
 <select
            className="mts1-input"
            id="userId"
            name="userId"
            type="text"
            placeholder=" Enter the Name City"
            onChange={handleInputChange}
            required
          >
              <option value={user.id} > {user.name} </option>
          
          </select> */}
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