import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import '../styles/DetailsH.css'
import axios from 'axios'
import { BASE_URL } from '../api/url';
import Comments from "../components/Comments"


export default function DetailsH() {

    let [data, setData] = useState([])
    let [data2, setData2] = useState([])

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
            <div className="DetailsH-card2" key={datah._id}>
                <div className="DetailsH-title">{datah.name}</div>
                <img className="DetailsH-img2" src={datah.photo} alt="nada"></img>
                <p className="DetailsH-title2">Capacity: {datah.capacity}</p>
            </div>
            </>
        )  
    })
            }
            {
                data2.map(show=>{ 
            return(
            <>
            <div className="DetailsH-card" key={show._id} >
                <div className="DetailsH-title ">Show: {show.name}</div>
                <img className="DetailsH-img" src={show.photo} alt="nada"></img>
                <div className="DetailsH-title3">
                    <p>Description: {show.description}</p>
                    <p>Price: USD {show.price}</p>
                    <p>Date: {show.date}</p>
                </div>
                <div className="DetailsH-user">
                    <img className="DetailsH-photo" src={show.userId.photo} alt="userphoto"></img>
                    <p className="DetailsH-title3">{show.userId.name}</p>
                </div>
                <div className="DetailsH-commentBox">
                    <Comments data={show._id}/> 
                </div>
            </div> 
            </>
        )
        
         })

            }
            
    </div>
  )
}
