import React from 'react'
import '../styles/NotFound.css'
import {Link as LinkRouter} from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='NotFound-container'>
        <img className='NotFound-img' src='https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg?w=2000' alt='404'/>
        <LinkRouter to="/">
            <button className='NotFound-button'>Home</button> 
        </LinkRouter>
    </div>
  )
}
