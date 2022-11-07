import {Link} from 'react-router-dom'
import '../styles/hotelscards.css'
import dataHotelCasino from '../data/dataHotelCasino'
import InputHotels from './InputHotels'


export default function Hotelscards() {

const cardview = (card)=> (
    <div className="card">
            <div className="card-title">{card.name}</div>
            <img className="card-img" src={card.photo} alt={card.photo}></img>
            <Link to={`/detailshotels/${card.id}`}>
            <button className="card-button">view more! </button>
            </Link>
    </div>
)


return (
    <div className='Hotelscards-box'>
    <h2 className='Hotels-h2'>Hotels</h2>
        <InputHotels/>
        <div className='Hotelscards-container'>
                {
                    dataHotelCasino.map(card=> cardview(card))   
                }
            </div>
    </div>
  )
}
