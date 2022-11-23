import React, {useState} from "react"
import axios from "axios"
import { BASE_URL } from "../api/url"
import swal from "sweetalert"
import { useNavigate, useParams } from "react-router-dom"
import "../styles/Edititinerary.css"

export default function EditItineraryForm () {
    let {id} = useParams()

    const [dataCity, setDataCity] = useState({
        citiId: "",
        name : "",
        photo: "",
        description: "",
        price: "",
        duration: "",
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
         await axios.patch(`${BASE_URL}/api/itineraries/${id}` , dataCity )
            swal({
                title:"Excelent",
                text: "City edited",
                icon: "success",
                timer:"3000"
            })
    }catch(err){
        console.log(err);
    }
    navigate(`/myitineraries`)
    e.target.reset()
}

return(
    <div className="tin-container">
        <h2 className="tin-h2">Edit Itineraries</h2>
        <div className="tin-box">
        <form className="tin-form" onSubmit={SendDataCity}>
        <label for="name">citiId</label>
    <input 
     className="tin-input"
    type="text"
    id="citiId"
    name="citiId"
    placeholder="Enter the citiId"
    onChange={getInplutCity}
    required
    />
    <label for="name">Name</label>
    <input 
     className="tin-input"
    type="text"
    id="name"
    name="name"
    placeholder="Enter the Name"
    onChange={getInplutCity}
    required
    />
      <label for="photo">Photo</label>
    <input 
     className="tin-input"
    type="text"
    id="photo"
    name="photo"
    placeholder="Enter Url"
    onChange={getInplutCity}
    required
    />
    <label for="description">description</label>
    <input 
     className="tin-input"
    type="text"
    id="description"
    name="description"
    placeholder="Enter description"
    onChange={getInplutCity}
    required
    />
      <label for="price">Price</label>
    <input 
     className="tin-input"
    type="text"
    id="price"
    name="price"
    placeholder="Enter price"
    onChange={getInplutCity}
    required
    />
     <label for="Duration">Duration</label>
    <input 
     className="tin-input"
    type="text"
    id="Duration"
    name="Duration"
    placeholder="Enter Duration"
    onChange={getInplutCity}
    required
    />
     <label for="userId">userId</label>
    <input 
     className="tin-input"
    type="text"
    id="userId"
    name="userId"
    placeholder="Enter User Id"
    onChange={getInplutCity}
    required
    />
         
         <div className='tin-btn'>
                <button className='tin-btn2' type='submit'>Edit</button>
            </div>
        </form>
        </div>
    </div>
)
}