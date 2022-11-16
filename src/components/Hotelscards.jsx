import {Link} from 'react-router-dom'
import '../styles/hotelscards.css'
// import dataHotelCasino from '../data/dataHotelCasino'
// import InputHotels from './InputHotels'
import {useEffect, useState, useRef} from 'react'
import { BASE_URL } from '../api/url';
import axios from 'axios'
import React from 'react'
import '../styles/inputHotels.css'


export default function Hotelscards() {
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const [valueInput, setvalueInput] = useState('')
    const [valueInput2, setvalueInput2] = useState('')

    // console.log(valueInput) 
    // console.log(valueInput2)
    
    const [dataHotel, setDatahotel] = useState([])


    const MakeThings = ()=>{
        setvalueInput(inputRef1.current.value)
        setvalueInput2(inputRef2.current.value)
    } 
    
    useEffect(()=>{
        axios.get(`${BASE_URL}/api/hotels/?name=${valueInput}&order=${valueInput2}`)
        .then(res=> setDatahotel(res.data.response))
    },[valueInput,valueInput2])
    

    // console.log(dataHotel);

const cardview = (card)=> (
    <div className="hotel-card">
            <div className="hotelcard-title">{card.name}</div>
            <img className="hotelcard-img" src={card.photo} alt={card.photo}></img>
            <Link to={`/detailshotels/${card._id}`}>
            <button className="hotelcard-button">view more! </button>
            </Link>
    </div>
)




return (
    <div className='Hotelscards-box'>
    <h2 className='Hotels-h2'>Hotels</h2>
        <div className='inputHotels-container'>
                <input className='inputHotels-input' type="text" ref={inputRef1} onChange={MakeThings} placeholder='Search Hotel' ></input>
                <div>
                <select id='order' ref={inputRef2} onChange={MakeThings} className='inputHotels-input'>
                    <option value="">Order</option>
                    <option value="asc">From A-Z</option>
                    <option value="desc">From Z-A</option>
                </select>
                </div>
        </div>
        <div className='Hotelscards-container'>
                {
                    dataHotel.map(card=> cardview(card))   
                }
            </div>
    </div>
  )
}
