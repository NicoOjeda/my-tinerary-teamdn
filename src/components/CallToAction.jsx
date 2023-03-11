import React from 'react'
import {Link as LinkRouter} from 'react-router-dom'


export default function CallToAction() {

  return (
    
  <>
    <LinkRouter to='/Cities'>
      <button className="home-btn">Cities</button>
    </LinkRouter>  
    <LinkRouter to='/hotels'>
      <button className="home-btn">Hotels</button>
    </LinkRouter> 
  </>
  )
}


