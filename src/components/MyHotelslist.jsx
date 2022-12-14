import React, {useEffect } from 'react'
import '../styles/myhotelslist.css'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import myHotelsAction from '../redux/actions/myHotelsActions'
import swal from 'sweetalert'

export default function MyHotelslist() {
    
  const listHotel = useSelector(store => store.myHotelsReducer.hotelAdm) 
  const dispatch = useDispatch()
  const tokenList = useSelector(store => store.tokenReducer.tokenList)
  let token = JSON.parse(localStorage.getItem('token'))
// console.log(token);
  useEffect(()=>{
   
    dispatch(myHotelsAction.hotelList(tokenList._id))
  },[listHotel])
   
  // console.log(listHotel);

    const deleteHotel = (e)=>{
      let objeto = {
        idHotel: e,
        newToken: token.token.user
      } 
      
    dispatch(myHotelsAction.deleteHotel(objeto))
    swal({
      title: "Excelent",
      text:  "Hotel deleted",
      icon: "success",
      timer: "3000"
  })
}


const hotelView = (myHotel)=> (
    <div className="MyHotels-card  ">
                <div className="MyHotels-title">{myHotel.name}</div>
                <img className="MyHotels-img" src={myHotel.photo} alt="nada"></img>
                <div className="MyHotels-title2">Capacity: {myHotel.capacity}</div>
                <Link to={`/edithotel/${myHotel._id}`} style={{ textDecoration:'none' }}><button className='MyHotels-btn'>Edit Hotel</button></Link>
                <button className='MyHotels-btn' onClick={()=>deleteHotel(myHotel._id)}>Delete</button>
            </div>
)

    return (
    <div className='MyHotels-container'>
    <Link to={`/newhotel` } style={{ textDecoration:'none' }}><div className='MyHotels-btn2'>New Hotel</div></Link>
        {listHotel.map((myHotel)=> hotelView(myHotel))}
    </div>
  )
}
