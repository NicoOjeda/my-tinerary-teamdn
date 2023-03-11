import React from 'react'
import '../styles/home1.css';
import CallToAction from './CallToAction';


export default function Home1() {
  const tittle = "Mytinerary";
  const slogan = "To travel is to live"
return(

<>      
  <div className="home-container">
              <h1 className="tittle-home">{tittle}</h1>
              <p className='slogan-home'> {slogan}</p>
        <div className="call-container">
            <CallToAction/>
        </div>
  </div>
</>
)
}




















