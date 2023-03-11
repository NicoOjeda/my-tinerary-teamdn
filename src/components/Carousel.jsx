import React, { useEffect } from 'react';
import '../styles/Carousel.css';
import Arrow from './carousel/Arrow';
import { useState } from 'react';


export default function Carousel(props) {

  const range = props.range;
  const [start,setStart] = useState(0);
  const [end,setEnd] = useState (start + range);
  const items = props.data;
  const [intervalId, setIntervalId] = useState(null)




useEffect(()=>{
  let id = setInterval(() => {
      next()
  }, 5000);

        setIntervalId(id)

        return () => clearInterval(intervalId)

},[start])



function previous() {
  if(start>=range){
    setStart(start-range)
    setEnd(end- range)
  } 
  else {
    setStart(8)
    setEnd(12)
  }
  clearInterval(intervalId)
}

function next() {
  if(end<items.length){

    setStart(start+range)
    setEnd(end+range)
  }
  else {
    setStart(0)
    setEnd(range)
}
  clearInterval(intervalId)
}

// console.log("start:" + start);
// console.log("end:" + end);

const itemview = (item)=> (
  <div className='Carousel-card' key={item.title}>
    <div className='Carousel-box'>
      <img className='Carousel-img' src={item.url} alt={item.title} />
    </div>
      <p className='Carousel-text'>{item.title}</p> 
  </div>
)

return (
    <div className='Carousel-container'>
        <Arrow icon={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16">
                    <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
                </svg>} click={previous}/>
        <div className='Carousel-container2'>
          {items.slice(start,end).map(item=> itemview(item))}
        </div>
        <Arrow icon={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                </svg>} click={next}/>
    </div>
  )
}

