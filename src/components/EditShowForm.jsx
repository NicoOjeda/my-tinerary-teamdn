import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../api/url';
import swal from 'sweetalert'
import '../styles/EditShowForm.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function EditShowForm() {
    
    let {id} = useParams()
    let token = JSON.parse(localStorage.getItem('token'))
    const tokenList = useSelector(store => store.tokenReducer.tokenList)

    const [dataShow, setDataShow] = useState({
        hotelId:'',
        name: '',
        description:'',
        photo:'',
        price:'',
        date : '',
        userId : `${tokenList._id}`
    })
    
    const getInplut = (e) =>{
        setDataShow({
            ...dataShow,
            [e.target.name] : e.target.value
        })
    }
    console.log(dataShow);
    console.log(id);
    const navigate = useNavigate()

async function SendDataShow(e){
    let headers = {headers: {'Authorization': `Bearer ${token.token.user}`}}

    e.preventDefault()
    try{
        let res = await axios.patch(`${BASE_URL}/api/shows/${id}` , dataShow, headers )
        if(res.data.success){
        swal({
            title: "Excelent",
            text:  "Show edited",
            icon: "success",
            timer: "3000"
        })
    } 
}catch(err){
    console.log( err)
}
navigate('/myshows')
    e.target.reset()
}

return (
    <div className='EditShowFrom-container'>
        <h2 className='EditShowFrom-h2'>Edit Show</h2>
        <div className='EditShowFrom-box' >
        <form className='EditShowFrom-form' onSubmit={SendDataShow} >
            <label for='hotelId'>Hotel Id</label>
            <input 
                className='EditShowFrom-input' 
                id="hotelId" 
                name="hotelId" 
                type="text"
                placeholder='Enter Hotel id'
                onChange={getInplut}  
                required />
            <label for='name'>Name</label>
            <input 
                className='EditShowFrom-input' 
                id="name" 
                name="name" 
                type="text"
                placeholder='Enter name'
                onChange={getInplut}  
                required />
            <label for='description'>description</label>
            <input 
                className='EditShowFrom-input' 
                id="description" 
                name="description" 
                type="text"
                placeholder='Enter description'
                onChange={getInplut}  
                required />
            <label for='photo'>Photo</label>
            <input 
                className='EditShowFrom-input' 
                id="photo" 
                name="photo" 
                type="text"
                placeholder='Enter Url'
                onChange={getInplut}  
                required />
            <label for='price'>Price</label>
            <input 
                className='EditShowFrom-input' 
                id="price" 
                name="price" 
                type="number"
                placeholder='Enter price'
                onChange={getInplut}  
                required />
            <label for='date'>Date</label>
            <input 
                className='EditShowFrom-input' 
                id="date" 
                name="date" 
                type="date"
                placeholder='Enter date'
                onChange={getInplut}  
                required />
            {/* <label for='userId'>User Id</label>
            <input 
                className='EditShowFrom-input' 
                id="userId" 
                name="userId" 
                type="text"
                placeholder='Enter user id'
                onChange={getInplut}  
                required /> */}
            
            <div className='EditShowFrom-button'>
                <button className='EditShowFrom-button2' type='submit'>Edit</button>
            </div>
        </form>
        </div>
       
        </div>
  )
}
