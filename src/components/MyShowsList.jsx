import React, {useEffect,useState } from 'react'
import '../styles/MyShowList.css'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
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

const [dataShow, setDataShow] = useState({
  hotelId:'',
  name: '',
  description:'',
  photo:'',
  price:'',
  date : '',
  userId : ''
})

const getInplut = (e) =>{
  setDataShow({
      ...dataShow,
      [e.target.name] : e.target.value
  })
}
function SendDataShow(e){
  e.preventDefault()
  console.log(dataShow);
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
      <label for="city">Choose a City: </label>
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
    <div className='newShowFrom-box' >
        <form className='newShowFrom-form' onSubmit={SendDataShow} >
            <label for='hotelId'>Hotel Id</label>
            <input 
                className='newShowFrom-input' 
                id="hotelId" 
                name="hotelId" 
                type="text"
                placeholder='Enter Hotel id'
                onChange={getInplut}  
                required />
            <label for='name'>Name</label>
            <input 
                className='newShowFrom-input' 
                id="name" 
                name="name" 
                type="text"
                placeholder='Enter name'
                onChange={getInplut}  
                required />
            <label for='description'>description</label>
            <input 
                className='newShowFrom-input' 
                id="description" 
                name="description" 
                type="text"
                placeholder='Enter description'
                onChange={getInplut}  
                required />
            <label for='photo'>Photo</label>
            <input 
                className='newShowFrom-input' 
                id="photo" 
                name="photo" 
                type="text"
                placeholder='Enter Url'
                onChange={getInplut}  
                required />
            <label for='price'>Price</label>
            <input 
                className='newShowFrom-input' 
                id="price" 
                name="price" 
                type="number"
                placeholder='Enter price'
                onChange={getInplut}  
                required />
            <label for='date'>Date</label>
            <input 
                className='newShowFrom-input' 
                id="date" 
                name="date" 
                type="date"
                placeholder='Enter date'
                onChange={getInplut}  
                required />
            <label for='userId'>User Id</label>
            <input 
                className='newShowFrom-input' 
                id="userId" 
                name="userId" 
                type="text"
                placeholder='Enter user id'
                onChange={getInplut}  
                required />
            
            <div className='newShowFrom-button'>
                <button className='newShowFrom-button2' type='submit'>Create</button>
            </div>
        </form>
        </div>
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