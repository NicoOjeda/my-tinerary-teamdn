import {Link} from 'react-router-dom'
import '../styles/hotelscards.css'
import {useEffect, useState, useRef} from 'react'
import React from 'react'
import '../styles/inputHotels.css'
import { useSelector, useDispatch } from 'react-redux';
import hotelsAction from '../redux/actions/hotelsAction';

export default function Hotelscards() {
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const [valueInput, setvalueInput] = useState('')
    const [valueInput2, setvalueInput2] = useState('')
    const hotels = useSelector(state => state.hotelsReducer.listHotels)
    let dispatch = useDispatch();
    
    const MakeThings = ()=>{
        setvalueInput(inputRef1.current.value)
        setvalueInput2(inputRef2.current.value)
    } 
    useEffect(()=>{
        
        if(valueInput === "" && valueInput2 === "" ){
            dispatch(hotelsAction.getHotels())
        } else {
            let search = {
                name: valueInput,
                order: valueInput2
            }
            // console.log(search);
            dispatch(hotelsAction.getHotelsNameOrder(search))
        }
        // console.log(hotels);
    },[valueInput,valueInput2]) 
    

const cardview = (card)=> (
    <div className="hotel-card" key={card._id}>
            <div className="hotelcard-title">{card.name}</div>
            <img className="hotelcard-img" src={card.photo} alt={card.photo}></img>
            <Link to={`/detailshotels/${card._id}`}>
            <button className="hotelcard-button">view more! </button>
            </Link>
    </div>
)

return (
    <div className='Hotelscards-box'>
    <h1>Hotels</h1>
        <div className='inputHotels-container'>
                <input className='inputHotels-input' type="text" ref={inputRef1} onChange={MakeThings} placeholder='Search Hotel' ></input>
                <div>
                <select id='order' ref={inputRef2} onChange={MakeThings} className='inputHotels-input'>
                    <option value="">Order</option>
                    <option value="asc">From A-Z</option>
                    <option value="desc">From Z-A</option>
                </select>
                </div>
        </div>
        <div className='Hotelscards-container'>
        {
            hotels.length === 0 ? 
                    (
                    <div className='Hotelscard-empty'>
                        <p>We didn't found this place. Try other!</p>
                    </div>
                    ): 
                    (
                    <>
                    {hotels.map(card=> cardview(card))} 
                    </>
                    ) 
                }
            </div>
    </div>
  )
}
