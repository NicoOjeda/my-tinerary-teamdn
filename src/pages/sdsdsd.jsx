import React from "react";
import "../styles/Cities.css";
import { useState, useRef } from "react";
import "../styles/Cards.css";
import Cards from "../components/Cards";
import dataCity from "../data1/datosCities";
import "../styles/Cities.css"

const Cities = (props) => {
  // let {data1} = props
  let arrayCards = dataCity;


  const inputRef = useRef(null);
  const resultRef = useRef(null);

  const [data, setData] = useState({
    name: "",
  });

  const makeThings = () => {
    alert(inputRef.current.value);
    resultRef.current.innerHTML = inputRef.current.value
  };

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
    <>

      <div className="Cities-container">
        <h1>Cities</h1>
        <div className="check-container">
          <div>
            <input type="checkbox" value="europa" onClick={makeThings} />
            Europa
          </div>
          <div>
            <input type="checkbox" value="Asia" onClick={makeThings} />
            Asia
          </div>
          <div>
            <input type="checkbox"  value="america del norte" onClick={makeThings} />
            America del Norte
          </div>
          <div>
            <input type="checkbox"  value="Africa" onClick={makeThings}/>
            Africa
          </div>
          <div>
            <input type="checkbox"  value="Oceania" onClick={makeThings}/>
            Oceania
          </div>
          <div>
            <input type="checkbox"  value="America Del Sur" onClick={makeThings}  ref={inputRef}/>
            America del Sur
          </div>
        </div>

        <form
          action="/show_data.html"
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
            ref={inputRef}
            onChange={handleInputChange}
            required
          />
          {console.log()}
          <div className="Contain-button">
            <button className="Cities-button" type="submit" onClick={makeThings}>
              Search
            </button>
          </div>
        </form>
        <div className="Cit-Container">
          <Cards dataCities={arrayCards} />
        </div>
      </div>
    </>
  );
};
export default Cities;
