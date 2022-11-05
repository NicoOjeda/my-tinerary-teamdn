import React from 'react'
import {Link as LinkRouter} from 'react-router-dom'


export default function CallToAction() {



  return (
    
<>
 <LinkRouter to='/Cities' className="cities-button" >
  <button className="btn-1">Cities</button>
  </LinkRouter>  


  <LinkRouter to='/hotels' className="cities-button" >
  <button className="btn-1">Hotels</button>

    </LinkRouter> 

</>


  )
}


