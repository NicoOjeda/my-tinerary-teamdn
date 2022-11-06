import React, { useState } from 'react'
import '../styles/newhotelform.css' 

export default function NewHotelForm() {

    const [dataHotel, setDataHotel] = useState({
        name: '',
        photo:'',
        capacity:''
    })

    const handleInplut = (e) =>{
        // console.log(e.target.value);
        setDataHotel({
            ...dataHotel,
            // propiedad computada de em6
            [e.target.name] : e.target.value
            
        })
}
 const SendDataHotel = (e) =>{
    console.log(dataHotel);
    
    localStorage.setItem("data", JSON.stringify(dataHotel))
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
                onChange={handleInplut}  
                required />
            <label for='photo'>Photo</label>
            <input 
                className='NewHotel-input' 
                id="photo" 
                name="photo" 
                type="text"
                onChange={handleInplut}  
                required />
            <label for='capacity'>Capacity</label>
            <input 
                className='NewHotel-input' 
                id="capacity" 
                name="capacity" 
                type="number"
                onChange={handleInplut}  
                required />
            
            <div className='NewHotel-button'>
                <button className='NewHotel-button2' type='submit'>Enter</button>
            </div>
        </form>
        {/* <h3>{dataHotel.name} + {dataHotel.photo} </h3> */}
        <button className='NewHotel-google2'>
            <img className='NewHotel-google' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/240px-Google_%22G%22_Logo.svg.png' alt='google'/>
            <p>Sign in with google</p>
        </button>
        </div>
        </div>
      )
    }
