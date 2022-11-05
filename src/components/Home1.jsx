import React from 'react'

import '../styles/home1.css';
import{Link as LinkRouter} from "react-router-dom"
import Navbar from './Navbar';


export default function Home1() {

  const tittle = "Mytinerary";
  const slogan = "To travel is to live"




return(


<>

            {/* <Navbar/> */}
<div className="home-container">
{/* <div className="title-slogan"> */}
            <h1 className="tittle-home"><span className='my-style'> {tittle}</span></h1>
            <p className='slogan-home'> {slogan}</p>
          {/* </div> */}
          <div className='btn-container'>
          <LinkRouter to="/Navbar">
          <button className='btn-1'>Cities</button>
          </LinkRouter>
          <LinkRouter to="/Cities">
          <button className='btn-1'>Hotels</button> 
          </LinkRouter>
       
</div>
</div>

</>


)
}




















