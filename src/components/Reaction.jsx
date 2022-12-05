import React from 'react'
import '../styles/Reaction.css'



const Reaction = (props) => {
  let { reaction } = props
    // console.log(reaction)
  // let likes =  reaction.userId.finIn
  // console.log(reaction.lenght)
  return (
    <div className='icon-01'> 
    
      <img className='img-reaction' src={reaction.icon}></img>
      <p>{reaction.userId.lenght}</p>
    </div>
    
  )
}

export default Reaction