import React, { useState } from "react";
import axios from "axios";

export default function NewCityInput() {
  const [data, setData] = useState([])
  const handleInputChange = (event) => {

    console.log(event.target.value);
    setData({
      ...data,

      [event.target.name]: event.target.value,
    });
  };
  const sendData = (event) => {
    event.preventDefault();
    console.log(data);

    axios.post('http://localhost:8000/api/cities',data)
    .then(response => { console.log(response.data)
    })
    .catch(err => {
      console.log(err)
    });
    // localStorage.setItem("data", JSON.stringify(data));
  }
  return (
    <>
      <div className="New-container">
        <h2 className="New-h2">New City</h2>
        <div className="New-box">
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
            <label for="photo">photo</label>
            <input
              className="New-input"
              id="photo"
              name="photo"
              type="text"
              placeholder="Enter the Image"
              onChange={handleInputChange}
              required
            />
            <label for="continent">continent</label>
            <input
              className="New-input"
              id="continent"
              name="continent"
              type="text"
              placeholder="Enter the Continent"
              onChange={handleInputChange}
              required
            />

            <label for="population">population</label>
            <input
              className="New-input"
              name="population"
              id="population"
              type="text"
              placeholder="Enter the Usser: "
              onChange={handleInputChange}
              required
            />
            <label for="userId">userId</label>
            <input
              className="New-input"
              name="userId"
              id="userId"
              type="text"
              placeholder="Enter the Usser Id: "
              onChange={handleInputChange} required/>
              
            <div className="New-button">
              <button className="New-button2" type="submit">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
