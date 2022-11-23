import React, {useState} from "react"
import axios from "axios"
import { BASE_URL } from "../api/url"
import swal from "sweetalert"
import { useNavigate, useParams } from "react-router-dom"
import "../styles/EditCity.css"
export default function EditCityForm () {
    let {id} = useParams()

    const [dataCity, setDataCity] = useState({
        name : "",
        photo: "",
        population: "",
        continent: "",
        userId: ""
    })

    const getInplutCity = (e)=>{
        setDataCity({
            ...dataCity,
            [e.target.name] : e.target.value
        })
    }
    console.log(dataCity);
    console.log(id);
    const navigate = useNavigate()

    async function SendDataCity (e){
        e.preventDefault()
    try{
         await axios.patch(`${BASE_URL}/api/cities/${id}` , dataCity )
            swal({
                title:"Excelent",
                text: "City edited",
                icon: "success",
                timer:"3000"
            })
    }catch(err){
        console.log(err);
    }
    navigate(`/mycities`)
    e.target.reset()
}

return(
    <div className=" ed-container">
        <h2 className="ed-h2">Edit City</h2>
        <div className="ed-box">
        <form className="ed-form" onSubmit={SendDataCity}>
    <label for="name">Name</label>
    <input 
     className="ed-input"
    type="text"
    id="name"
    name="name"
    placeholder="Enter Name"
    onChange={getInplutCity}
    required
    />
      <label for="photo">Photo</label>
    <input 
    className="ed-input"
    type="text"
    id="photo"
    name="photo"
    placeholder="Enter Url"
    onChange={getInplutCity}
    required
    />
    <label for="population">Population</label>
    <input 
    className="ed-input"
    type="text"
    id="population"
    name="population"
    placeholder="Enter Population"
    onChange={getInplutCity}
    required
    />
      <label for="continent">Continent</label>
    <input 
    className="ed-input"
    type="text"
    id="continent"
    name="continent"
    placeholder="Enter Continent"
    onChange={getInplutCity}
    required
    />
     <label for="userId">User Id</label>
    <input 
    className="ed-input"
    type="text"
    id="userId"
    name="userId"
    placeholder="Enter user id"
    onChange={getInplutCity}
    required
    />
         
         <div className='EditHotelFrom-button'>
                <button className='EditHotelFrom-button2' type='submit'>Edit</button>
            </div>
        </form>
        </div>
    </div>
)
}