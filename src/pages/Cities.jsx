import React from "react";
import "../styles/Cities.css";
import { useState, useRef, useEffect } from "react";
import "../styles/Cards.css";
import { Link as LinkRouter } from "react-router-dom";
import cardsActions from "../redux/actions/cardsActions";
import { useDispatch, useSelector } from "react-redux";

export default function Cities (){ 
  const dispatch = useDispatch();
  const { getCards } = cardsActions;
  const { getSelect } = cardsActions;
  const { getChecks } = cardsActions;
  const { cities, search,initial,check } = useSelector((state) => state.card);
  const inputRef = useRef(null);
  const [valueInput, setvalueInput] = useState("");
  const [dataCity, setdataCity] = useState([]);
  
  useEffect(() => { 
    if (initial)
    {
      dispatch(getCards());
    }
  }, []);
  const handleInputChange = () => {
    setvalueInput(inputRef.current.value);
    dispatch(getSelect({select:inputRef.current.value,checks:check}));
  };

  const handleCheckboxChange = (event) => {
    if(check.length<1){
      dispatch(getChecks({select:inputRef.current.value,checks:[event.target.value]}))
    }else{
    if (event.target.checked) {
      dispatch(getChecks({select:inputRef.current.value,checks:check.concat(event.target.value)}));
    } else {
      let newCheck = check.filter((continent) => {
        return continent !=  event.target.value;
      });
      dispatch(getChecks({select:inputRef.current.value,checks:newCheck}));
    }
  }
  
};
// console.log(check)
// useEffect(()  => {
//   dispatch(getChecks(check));

// },[check])
  return (
    <div className="Cities-container">
      <h1>Cities</h1>
      <div className="check-container">
        <label>
          <input
            type="checkbox"
            name="Europa"
            value="Europa"
            onChange={handleCheckboxChange}
            defaultChecked={check.includes("Europa")}
          />
          Europa
        </label>
        <label>
          <input
            type="checkbox"
            name="Asia"
            value="Asia"
            onChange={handleCheckboxChange}
            defaultChecked={check.includes("Asia")}
          />
          Asia
        </label>
        <label>
          <input
            type="checkbox"
            name="America"
            value="America"
            onChange={handleCheckboxChange}
            defaultChecked={check.includes("America")}
          />
          America del Norte
        </label>
        <label>
          <input
            type="checkbox"
            name="Africa"
            value="Africa"
            onChange={handleCheckboxChange}
            defaultChecked={check.includes("Africa")}
          />
          Africa
        </label>
        <label>
          <input
            type="checkbox"
            name="Oceania"
            value="Oceania"
            onChange={handleCheckboxChange}
            defaultChecked={check.includes("Oceania")}
          />
          Oceania
        </label>
        <label>
          <input
            type="checkbox"
            name="America del sur"
            value="America del sur"
            onChange={handleCheckboxChange}
            defaultChecked={check.includes("America del sur")}
          />
          America del sur
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
          defaultValue={search}
        />
      </div>
      {cities.length === 0 ? (
        <div className="cities-nofound">
          <p>We didn't found this city. Try other!</p>
        </div>
      ) : (
        <>
          <div className="Cit-Container">
            {cities.map((City) => (
                <div className="card" key={City._id}>
                  <div className="card-title">{City.name}</div>
                  <img
                    className="card-img"
                    src={City.photo}
                    alt={City.name}
                  ></img>
                  <LinkRouter to={`/details/${City._id}`}>
                    <button className="card-button">view more! </button>
                  </LinkRouter>
                </div>
            ))}
            <div></div>
          </div>
        </>
      )}
    </div>
  );
};
