import React, {useEffect } from 'react'
import '../styles/MyShowList.css'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import swal from 'sweetalert'
import myShowsActions from '../redux/actions/myShowsActions'

export default function MyShowsList() {
    

    const listShow = useSelector(store => store.myShowsReducer.showList)
    const dispatch = useDispatch()

  
  useEffect(()=>{
    let id = "636e7b53f4d7aa583b71eb68";
    dispatch(myShowsActions.showsAction(id))
  },[listShow])
   
//   console.log(listShow);

    const deleteHotel = (e)=>{
        dispatch(myShowsActions.showsDelete(e))
    swal({
      title: "Excelent",
      text:  "Hotel deleted",
      icon: "success",
      timer: "3000"
  })
}

const hotelView = (myShow)=> (
    <div className="MyShows-card  ">
                <div className="MyShows-title">Show: {myShow.name}</div>
                <img className="MyShows-img" src={myShow.photo} alt="nada"></img>
                <div className="MyShows-title2">
                    <div>Description: {myShow.description}</div>
                    <div>Price: USD {myShow.price}</div>
                    <div>Date: {myShow.date}</div>
                </div>
                <Link to={`/editshow/${myShow._id}`}><button className='MyShows-btn'>Edit Hotel</button></Link>
                <button className='MyShows-btn' onClick={()=>deleteHotel(myShow._id)}>Delete</button>
            </div>
)

    return (
    <div className='MyHotels-container'>
      <div>
      <label for="cars">Choose a City: </label>
    <select name="city" id="city" >
        <option value="berlin">Berlin</option>
        <option value="tokyo">Tokyo</option>
        <option value="rome">Rome</option>
        <option value="new york">New York</option>
        <option value="bangkok">Bangkok</option>
        <option value="seychelles">Seychelles</option>
        <option value="oslo">Oslo</option>
        <option value="madrid">Madrid</option>
        <option value="wellington">Wellington</option>
        <option value="orlando">orlando</option>
    </select> 
      </div>
        {listShow.map((myShow)=> hotelView(myShow))}
    </div>
  )
}
 

// import React, {useEffect } from 'react'
// import '../styles/myhotelslist.css'
// import {Link} from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import myHotelsAction from '../redux/actions/myHotelsActions'
// import swal from 'sweetalert'

// export default function MyShowsList() {
    
// //   const listHotel = useSelector(store => store.myHotelsReducer.hotelAdm) 
// //   const dispatch = useDispatch()
  
// //   useEffect(()=>{
// //     let id = "636d24d7ea4ed429429463a8";
// //     dispatch(myHotelsAction.hotelList(id))
// //   },[listHotel])
   
// //   console.log(listHotel);

// //     const deleteHotel = (e)=>{
// //     dispatch(myHotelsAction.deleteHotel(e))
// //     swal({
// //       title: "Excelent",
// //       text:  "Hotel deleted",
// //       icon: "success",
// //       timer: "3000"
// //   })
// // }


// const hotelView = (myHotel)=> (
//     <div className="MyShows-card  ">
//                 <div className="MyShows-title">{myHotel.name}</div>
//                 <img className="MyShows-img" src={myHotel.photo} alt="nada"></img>
//                 <div className="MyShows-title2">Capacity: {myHotel.capacity}</div>
//                 <Link to={`/edithotel/${myHotel._id}`}><button className='MyHotels-btn'>Edit Hotel</button></Link>
//                 <button className='MyShows-btn' onClick={()=>deleteHotel(myHotel._id)}>Delete</button>
//             </div>
// )

//     return (
//     <div className='MyHotels-container'>
//         {listHotel.map((myHotel)=> hotelView(myHotel))}
//     </div>
//   )
// }