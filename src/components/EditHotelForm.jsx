import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../api/url';
import swal from 'sweetalert'
import '../styles/EditHotelForm.css'
import { useNavigate, useParams } from 'react-router-dom';

export default function EditHotelForm() {
    
    let {id} = useParams()

    const [dataHotel, setDataHotel] = useState({
        name: '',
        photo:'',
        capacity:'',
        citiId : '',
        userId : ''
    })
    
    const getInplut = (e) =>{
        setDataHotel({
            ...dataHotel,
            [e.target.name] : e.target.value
        })
    }
    console.log(dataHotel);
    console.log(id);
    const navigate = useNavigate()

async function SendData(e){
    e.preventDefault()
    try{
        let res = await axios.patch(`${BASE_URL}/api/hotels/${id}` , dataHotel )
        if(res.data.success){
        swal({
            title: "Excelent",
            text:  "Hotel edited",
            icon: "success",
            timer: "3000"
        })
    } 
}catch(err){
    console.log( err)
}
navigate('/myhotels')
    e.target.reset()
}

return (
    <div className='EditHotelFrom-container'>
        <h2 className='EditHotelFrom-h2'>Edit Hotel</h2>
        <div className='EditHotelFrom-box' >
        <form className='EditHotelFrom-form' onSubmit={SendData} >
            <label for='name'>Name</label>
            <input 
                className='EditHotelFrom-input' 
                id="name" 
                name="name" 
                type="text"
                placeholder='Enter name'
                onChange={getInplut}  
                required />
            <label for='photo'>Photo</label>
            <input 
                className='EditHotelFrom-input' 
                id="photo" 
                name="photo" 
                type="text"
                placeholder='Enter Url'
                onChange={getInplut}  
                required />
            <label for='capacity'>Capacity</label>
            <input 
                className='EditHotelFrom-input' 
                id="capacity" 
                name="capacity" 
                type="number"
                placeholder='Enter capacity'
                onChange={getInplut}  
                required />
            <label for='citiId'>City Id</label>
            <input 
                className='EditHotelFrom-input' 
                id="citiId" 
                name="citiId" 
                type="text"
                placeholder='Enter city id'
                onChange={getInplut}  
                required />
            <label for='userId'>User Id</label>
            <input 
                className='EditHotelFrom-input' 
                id="userId" 
                name="userId" 
                type="text"
                placeholder='Enter user id'
                onChange={getInplut}  
                required />
            
            <div className='EditHotelFrom-button'>
                <button className='EditHotelFrom-button2' type='submit'>Edit</button>
            </div>
        </form>
        </div>
       
        </div>
  )
}
