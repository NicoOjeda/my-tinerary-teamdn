import React from "react";
import "../styles/Cities.css";
import { useState, useRef, useEffect} from "react";
import "../styles/Cards.css";
// import Cards from "../components/Cards";
// import dataCity from "../data1/datosCities";
import { Link as LinkRouter } from "react-router-dom";
// let arrayCards = dataCity;
import axios from 'axios'



const Cities = () => {

  const [data, setData] = useState({});
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value, 
    });
  };

  const inputRef = useRef(null)
  const [valueInput, setvalueInput] = useState('')
  
  const sendData = (e) => {
    e.preventDefault();
    setvalueInput(inputRef.current.value)
  };
  
  // console.log(data)
  // console.log(valueInput);
  const [dataCity, setdataCity] = useState([])

useEffect(()=>{
  axios.get(`http://localhost:8000/api/cities/?name=${valueInput}`)
  .then(res=> setdataCity(res.data.response))
},[valueInput,data])

console.log(dataCity);

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
          <label>
            <input type="checkbox" name="America del sur"  value="America Del Sur" onChange={handleInputChange}/>
            America del Sur
          </label>
        </div>
        <div className="Cities-form" id="form">
          <label for="name">Start your adventure</label>
          <input
            className="Cities-input"
            id="name"
            name="name"
            type="text"
            placeholder="Please Choice the City"
            ref={inputRef}
            required
          />
          <div className="Contain-button">
            <button className="Cities-button" onClick={sendData}>
              Search
            </button>
          </div>
        </div>
        <div className="Cit-Container">
            {dataCity.map((City) =>
                <div className="card-container">
                  <div  className="card">
                    <div className="card-title">{City.name}</div>
                    <img className="card-img" src={City.photo}  alt={City.name} ></img>
                    <LinkRouter to={`/details/${City._id}`}>
                    <button className="card-button">view more! </button>
                    </LinkRouter>
                  </div>
                </div>
            )}
        </div>
      </div>
    
  );
};
export default Cities;