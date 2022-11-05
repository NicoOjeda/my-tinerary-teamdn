import React from 'react'
import '../styles/home1.css';
import CallToAction from './CallToAction';


export default function Home1() {
  const tittle = "Mytinerary";
  const slogan = "To travel is to live"
return(

<>
        
<div className="home-container">

            <h1 className="tittle-home"><span className='my-style'> {tittle}</span></h1>
            <p className='slogan-home'> {slogan}</p>
       
          <CallToAction/>

 </div>

</>


)
}




















