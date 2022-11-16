import axios from 'axios'
import React, {useState } from 'react'
import '../styles/newhotelform.css' 
import { BASE_URL } from '../api/url';
import { useNavigate } from 'react-router-dom';


export default function NewHotelForm() {

    console.log(BASE_URL);

    const [dataHotel, setDataHotel] = useState({
        name: '',
        photo:'',
        capacity:'',
        citiId : '',
        userId : ''
    })

    const handleInplut = (e) =>{
        // console.log(e.target.value);
        setDataHotel({
            ...dataHotel,
            // propiedad computada de em6
            [e.target.name] : e.target.value
            
        })
}

const navigate = useNavigate()

const SendDataHotel = (e) =>{
    console.log(dataHotel);
    e.preventDefault()
    e.target.reset()
    localStorage.setItem("data", JSON.stringify(dataHotel))
    
        axios.post(`${BASE_URL}/api/hotels/` , dataHotel )
        .then(response => console.log(response.data)) 
        .catch(err=> console.log( err))
        navigate('/')
 }



    return (
        <div className='NewHotel-container'>
        <h2 className='NewHotel-h2'>New Hotel</h2>
        <div className='NewHotel-box' >
        <form className='NewHotel-form' onSubmit={SendDataHotel} >
            <label for='name'>Name</label>
            <input 
                className='NewHotel-input' 
                id="name" 
                name="name" 
                type="text"
                placeholder='Enter name'
                onChange={handleInplut}  
                required />
            <label for='photo'>Photo</label>
            <input 
                className='NewHotel-input' 
                id="photo" 
                name="photo" 
                type="text"
                placeholder='Enter Url'
                onChange={handleInplut}  
                required />
            <label for='capacity'>Capacity</label>
            <input 
                className='NewHotel-input' 
                id="capacity" 
                name="capacity" 
                type="number"
                placeholder='Enter capacity'
                onChange={handleInplut}  
                required />
            <label for='citiId'>City Id</label>
            <input 
                className='NewHotel-input' 
                id="citiId" 
                name="citiId" 
                type="text"
                placeholder='Enter city id'
                onChange={handleInplut}  
                required />
            <label for='userId'>User Id</label>
            <input 
                className='NewHotel-input' 
                id="userId" 
                name="userId" 
                type="text"
                placeholder='Enter user id'
                onChange={handleInplut}  
                required />
            
            <div className='NewHotel-button'>
                <button className='NewHotel-button2' type='submit'>Enter</button>
            </div>
        </form>
        </div>
        </div>
      )
    }
