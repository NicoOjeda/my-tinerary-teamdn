import React, { useState } from "react";
import axios from "axios";
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";

export default function NewCityInput() {
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
     let sendCity = await axios.post('http://localhost:8000/api/cities',data)
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
    <>
      <div className="New-box">
          <h1>New City</h1>
          <form id="form" className="New-form" onSubmit={sendData}>
            <label for="name">Name</label>
            <input
              className="New-input"
              id="name"
              name="name"
              type="text"
              placeholder=" Enter the Name City"
              onChange={handleInputChange}
              required
            />
            <label for="photo">Photo</label>
            <input
              className="New-input"
              id="photo"
              name="photo"
              type="text"
              placeholder="Enter the url"
              onChange={handleInputChange}
              required
            />
            <label for="continent">Continent</label>
            <input
              className="New-input"
              id="continent"
              name="continent"
              type="text"
              placeholder="Enter the continent"
              onChange={handleInputChange}
              required
            />

            <label for="population">Population</label>
            <input
              className="New-input"
              name="population"
              id="population"
              type="text"
              placeholder="Enter the user"
              onChange={handleInputChange}
              required
            />
            <label for="userId">User Id</label>
            <input
              className="New-input"
              name="userId"
              id="userId"
              type="text"
              placeholder="Enter the user id"
              onChange={handleInputChange} required/>
              
            <div className="New-button">
              <button className="New-button2" type="submit">
                Create
              </button>
            </div>
          </form>
        
      </div>
    </>
  )
}