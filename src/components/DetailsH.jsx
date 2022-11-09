import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import '../styles/DetailsH.css'
import itineraryHotel from '../data/itineraryHotel'
import dataHotelCasino from '../data/dataHotelCasino'


export default function DetailsH() {


    let [mostrarOcultar, setMostrarOcultar] = useState(false)

    let hide = ()=>{
        setMostrarOcultar(!mostrarOcultar)
        console.log(mostrarOcultar);
    }

    let {id} = useParams()
    // console.log(id);
    // console.log(itineraryHotel);

return (
    <div className='DetailsH-container'>
        <h2 className='DetailsH-h2'>Hotel's Details</h2>
            {
                dataHotelCasino.map((datah)=>{ if(id=== datah.id){
        return(
            <>
            <div className="DetailsH-card  ">
                <div className="DetailsH-title">{datah.name}</div>
                <img className="DetailsH-img" src={datah.photo} alt="nada"></img>
                <div className="DetailsH-title2">Capacity: {datah.capacity}</div>
            </div>
            </>
        )
    }
    })
            }
            {
                itineraryHotel.map(itiner=>{ if(id === itiner.hotelId){
            return(
            <>
            <div className="DetailsH-card">
                <div className="DetailsH-title ">Show: {itiner.name}</div>
                <img className="DetailsH-img" src={itiner.photo} alt="nada"></img>
                <div className="DetailsH-title2">
                    <div>Description: {itiner.description}</div>
                    <div>Price: USD {itiner.price}</div>
                    <div>Date: {itiner.date}</div>
                </div>
                
                {
                   mostrarOcultar? 
                   (
                    <>
                        <button className='Btn-detailsH' onClick={hide}>ocultar</button>
                        <p>Comentarios</p>
                        <div className='comments'>
                            <p>Esto es un comentario</p>
                        </div>
                    </>
                   ): 
                   (<button className='Btn-detailsH' onClick={hide}>mostrar</button>) 
                }
            </div> 
            </>
        )
        }
         })

            }
            
    </div>
  )
}
