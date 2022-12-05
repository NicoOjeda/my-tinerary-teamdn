import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import '../styles/DetailsH.css'
// import itineraryHotel from '../data/itineraryHotel'
// import dataHotelCasino from '../data/dataHotelCasino'
import axios from 'axios'
import { BASE_URL } from '../api/url';


export default function DetailsH() {


    let [mostrarOcultar, setMostrarOcultar] = useState(false)
    let [data, setData] = useState([])
    let [data2, setData2] = useState([])

    let hide = ()=>{
        setMostrarOcultar(!mostrarOcultar)
        // console.log(mostrarOcultar);
    }

    let {id} = useParams()
    useEffect(()=>{
        axios.get(`${BASE_URL}/api/hotels/${id}`)
        .then(res=> setData( res.data.response))
        .catch(err=> console.log( err))

        axios.get(`${BASE_URL}/api/shows?&hotelId=${id}`)
        .then(res=> setData2( res.data.response))
        .catch(err=> console.log( err))
    },[id])
   
return (
    <div className='DetailsH-container'>
        <h2 className='DetailsH-h2'>Hotel's Details</h2>
            {
                data.map((datah)=>{ 
        return(
            <>
            <div className="DetailsH-card  ">
                <div className="DetailsH-title">{datah.name}</div>
                <img className="DetailsH-img" src={datah.photo} alt="nada"></img>
                <div className="DetailsH-title2">Capacity: {datah.capacity}</div>
            </div>
            </>
        )  
    })
            }
            {
                data2.map(show=>{ 
            return(
            <>
            <div className="DetailsH-card">
                <div className="DetailsH-title ">Show: {show.name}</div>
                <img className="DetailsH-img" src={show.photo} alt="nada"></img>
                <div className="DetailsH-title2">
                    <div>Description: {show.description}</div>
                    <div>Price: USD {show.price}</div>
                    <div>Date: {show.date}</div>
                </div>
                <div className="DetailsH-user">
                    <img img className="DetailsH-photo" src={show.userId.photo} alt="userphoto"></img>
                    <div>{show.userId.name}</div>
                </div>
                {
                   mostrarOcultar? 
                   (
                    <>
                        <button className='Btn-detailsH' onClick={hide}>View Less</button>
                        <p>Comments</p>
                        <div className='comments'>
                            <p>This is a comment</p>
                        </div>
                    </>
                   ): 
                   (<button className='Btn-detailsH' onClick={hide}>View More</button>) 
                }
            </div> 
            </>
        )
        
         })

            }
            
    </div>
  )
}
