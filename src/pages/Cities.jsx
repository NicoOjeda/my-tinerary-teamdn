import React from "react";
import "../styles/Cities.css";
import { useState, useRef } from "react";
import "../styles/Cards.css";
import Cards from "../components/Cards";
import dataCity from "../data1/datosCities";
import "../styles/Cities.css"

let arrayCards = dataCity;
const Cities = (props) => {


  const [data, setData] = useState({
    name: "",
  });
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const sendData = (e) => {
    e.preventDefault();

    localStorage.setItem("data", JSON.stringify(data));
  };


  return (
    

      <div className="Cities-container">
        <h1>Cities</h1>
        <div className="check-container">
          <div>
            <input type="checkbox" name="Europa" value="Europa"  onChange={handleInputChange} />
            Europa
          </div>
          <div>
            <input type="checkbox" name="Asia"  value="Asia"  onChange={handleInputChange} />
            Asia
          </div>
          <div>
            <input type="checkbox" name="America del Norte" value="America del Norte"  onChange={handleInputChange} />
            America del Norte
          </div>
          <div>
            <input type="checkbox" name="Africa" value="Africa"  onChange={handleInputChange}/>
            Africa
          </div>
          <div>
            <input type="checkbox" name="Oceania" value="Oceania" onChange={handleInputChange}/>
            Oceania
          </div>
          <div>
            <input type="checkbox" name="America del sur"  value="America Del Sur" onChange={handleInputChange}/>
            America del Sur
          </div>
        </div>
        <div
         
          className="Cities-form"
          onSubmit={sendData}
          id="form"
        >
          <label for="name">Start your adventure</label>
          <input
            className="Cities-input"
            id="name"
            name="name"
            type="text"
            placeholder="Please Choice the City"
            onChange={handleInputChange}
            required
          />
          <div className="Contain-button">
            <button className="Cities-button" type="submit" >
              Search
            </button>
          </div>
        </div>
        <div className="Cit-Container">
          <Cards dataCities={arrayCards} />
        </div>
      </div>
    
  );
};
export default Cities;