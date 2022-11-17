import React from "react";
import "../styles/Cities.css";
import { useState, useRef, useEffect } from "react";
import "../styles/Cards.css";
// import Cards from "../components/Cards";
// import dataCity from "../data1/datosCities";
import { Link as LinkRouter } from "react-router-dom";
// let arrayCards = dataCity;
import axios from "axios";
import { BASE_URL } from "../api/url";


const Cities = () => {
  const [check, setCheck] = useState([]);
  const inputRef = useRef(null);
  const [valueInput, setvalueInput] = useState("");
  const [dataCity, setdataCity] = useState([]);

  const handleInputChange = () => {

    setvalueInput(inputRef.current.value);
    console.log(inputRef)

  };


const handleCheckboxChange = (event) => {

  console.log(event.target.value)
  if (event.target.checked){
    let newCheck = [...check,event.target.value ]
    setCheck(newCheck)
    console.log(newCheck)
  }else{
    let newCheck = check.filter((continent) =>{
        return  continent != event.target.value
        
     })
     console.log(newCheck)
 
     setCheck(newCheck)
    }



}


  // const sendData = (e) => {
  //   e.preventDefault();
  //   setvalueInput(inputRef.current.value)
  // };

  // console.log(data)
  // console.log(valueInput);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/cities/`, {params:{name:valueInput,continent:check}} )
      .then((res) => setdataCity(res.data.response));
  }, [valueInput,check]);

  console.log(dataCity);

  return (
    <div className="Cities-container">
      <h1>Cities</h1>
      <div className="check-container">
        <div>
          <input
            type="checkbox"
            name="Europa"
            value="Europa"
            onChange={handleCheckboxChange}
          />
          Europa
        </div>
        <div>
          <input
            type="checkbox"
            name="Asia"
            value="Asia"
            onChange={handleCheckboxChange}
          />
          Asia
        </div>
        <div>
          <input
            type="checkbox"
            name="America"
            value="America"
            onChange={handleCheckboxChange}
          />
          America del Norte
        </div>
        <div>
          <input
            type="checkbox"
            name="Africa"
            value="Africa"
            onChange={handleCheckboxChange}
          />
          Africa
        </div>
        <div>
          <input
            type="checkbox"
            name="Oceania"
            value="Oceania"
            onChange={handleCheckboxChange}
          />
          Oceania
        </div>
        <label>
          <input
            type="checkbox"
            name="America del sur"
            value="America Del Sur"
            onChange={handleCheckboxChange}
          />
          America del Sur
        </label>
      </div>
      <div className="Cities-form" id="form">
      
        <label for="name">Start your adventure</label>
        <input
          className="Cities-input"
          onChange={handleInputChange}
          type="text"
          placeholder="Please Choice the City"
          ref={inputRef}
          required
        />
        <div className="Contain-button">
        
        </div>
      </div>
      <div className="Cit-Container">
        {dataCity.map((City) => (
          <div className="card-container">
            <div className="card">
              <div className="card-title">{City.name}</div>
              <img className="card-img" src={City.photo} alt={City.name}></img>
              <LinkRouter to={`/details/${City._id}`}>
                <button className="card-button">view more! </button>
              </LinkRouter>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cities;
