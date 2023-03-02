import React from 'react';
import axios from 'axios';
import {useState } from 'react';
import '../styles/newhotelform.css' 
import { BASE_URL } from '../api/url';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert'
import { useSelector } from 'react-redux';


export default function NewHotelForm() {
    const tokenList = useSelector(store => store.tokenReducer.tokenList)
    const [dataHotel, setDataHotel] = useState({
        name: '',
        photo:'',
        capacity:'',
        citiId : '',
        userId : `${tokenList._id}`
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

async function SendDataHotel(e){
    // console.log(dataHotel);
    e.preventDefault()
    localStorage.setItem("data", JSON.stringify(dataHotel))
    
    try{
       let res = await axios.post(`${BASE_URL}/api/hotels/` , dataHotel )
        // console.log(res.data) 
       if(res.data.success){
        swal({
            title: "Excelent",
            text:  "Hotel created",
            icon: "success",
            timer: "3000"
        })
        navigate(`/detailshotels/${res.data.id}`)
       } else {
        swal({
            text: res.data.message.join(" | "),
            icon: "warning",
            dangerMode: true,
            timer: "5000" 
        })
       }
    } catch(err){
        console.log( err)
    }
   
    // e.target.reset()
 }



    return (
        <>
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
                <div className='NewHotel-button'>
                    <button className='NewHotel-button2' type='submit'>Create</button>
                </div>
            </form>
            </div>
        </div>
        </>
      )
    }



