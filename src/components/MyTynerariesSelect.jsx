import React, { useState } from "react";
import axios from "axios";
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";
import '../styles/MyTynerariesSelect.css'

const MyTynerariesSelect = () => {

  const [data, setData] = useState([])
  const nav = useNavigate()
  const handleInputChange = (event) => {

    console.log(event.target.value);
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  async function sendData  (event){
     event.preventDefault();
    try{
     let sendCity = await axios.post('http://localhost:8000/api/itineraries',data)
      console.log(sendCity.data.id._id)
      if(sendCity.data.success){
      nav('/cities')
        swal({
          title: "Successfully Created!!",
          icon: "success",
          timer: "3000"
        });
        event.target.reset()
      }
    }catch(error){
      console.log(error)
      swal( "Error in created",error.response.data.message.join("\n"))
      
    }
      
  }



  return (
    <div className="mts1-container">
        <h2 className="mts1-h2">New Itinerary</h2>
        




        <div className="mts1-box">
          <form id="form" className="mts1-form" onSubmit={sendData}>
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
              onChange={handleInputChange} required/>
              
              <label for="userId">userID</label>
            <input
              className="mts1-input"
              name="userId"
              id="userId"
              type="text"
              placeholder="Enter the Usser Id: "
              onChange={handleInputChange} required/>

            <div className="mts1-button">
              <button className="mts1-button2" type="submit">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    
    
    
    
    
    
    
    
    
    
    // </div>



  )
}

export default MyTynerariesSelect