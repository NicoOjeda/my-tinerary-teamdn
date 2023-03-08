import React, {useEffect,useState } from 'react'
import '../styles/MyShowList.css'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import swal from 'sweetalert'
import myShowsActions from '../redux/actions/myShowsActions'
import axios from 'axios'
import { BASE_URL } from '../api/url'
import { useNavigate } from 'react-router-dom'

export default function MyShowsList() {

    const listShow = useSelector(store => store.myShowsReducer.showList)
    const dispatch = useDispatch()
    const tokenList = useSelector(store => store.tokenReducer.tokenList)
    const navigate= useNavigate()
    let token = JSON.parse(localStorage.getItem('token'))

  useEffect(()=>{
    dispatch(myShowsActions.showsAction(tokenList._id))
  },[listShow])


    const deleteShow = (e)=>{
        
      let objeto={
        idShow: e,
        newToken: token.token.user
      }
        dispatch(myShowsActions.showsDelete(objeto))
    swal({
      title: "Excelent",
      text:  "Show deleted",
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
  userId : `${tokenList._id}`
})

const getInplut = (e) =>{
  setDataShow({
      ...dataShow,
      [e.target.name] : e.target.value
  })
}

async function SendDataShow(e){

  e.preventDefault()
  try{
     let res = await axios.post(`${BASE_URL}/api/shows/` , dataShow )
     if(res.data.success){
      swal({
          title: "Excelent",
          text:  "Show created",
          icon: "success",
          timer: "3000"
      })
     } else {
      swal({
          text: res.data.message.join(" | "),
          icon: "warning",
          dangerMode: true,
          timer: "5000" 
      })
      navigate('/myshows')
     }
  } catch(err){
      console.log( err)
  }
 
  // e.target.reset()
}

const hotelView = (myShow)=> (
    <div className="MyShows-card" key={myShow._id}>
                <div className="MyShows-title">Show: {myShow.name}</div>
                <img className="MyShows-img" src={myShow.photo} alt={myShow.name}></img>
                    <div className="MyShows-title3">Price: USD {myShow.price}</div>
                    <div className="MyShows-title2">Date: {myShow.date}</div>
                    <div className="MyShows-title2">{myShow.description}</div>
                <div className="MyShows-containerbuttons">
                  <Link to={`/editshow/${myShow._id}`} className="myshows-link"><button className='NewShow-button2'>Edit Show</button></Link>
                  <button className='NewShow-button2' onClick={()=>deleteShow(myShow._id)}>Delete</button>
                </div>
            </div>
)

    return (
      <>
      <div className='newShowFrom-box' >
      <h2 className="my-price">My Shows</h2>
        <form className='NewShow-form' onSubmit={SendDataShow} >
        <label  for='hotelId'>Select a Hotel:</label>
          <select  id='hotelId' className='NewShow-select' name='hotelId' onChange={getInplut}>
            <option value="636d6fe9fe85fb66a3614788">Select</option>
            <option value="636d6fe9fe85fb66a3614789">Andronis Luxury Suites</option>
            <option value="636d6fe9fe85fb66a361478a">Holland Casino Amsterdam Centrum</option>
            <option value="636d6fe9fe85fb66a361478b">Park Hotel Tokyo</option>
            <option value="636d6fe9fe85fb66a3614786">Hilton Garden Inn</option>
            <option value="636d6fe9fe85fb66a3614787">Hotel Artemide</option>
            <option value="636d6fe9fe85fb66a361478e">Ibis Bangkok Riverside</option>
            <option value="636d6fe9fe85fb66a361478f">Kempinski Seychelles Resort</option>
            <option value="636d6fe9fe85fb66a3614790">Jupiter Lisboa Hotel</option>
            <option value="636d6fe9fe85fb66a3614791">Citybox Oslo</option>
            <option value="636d6fe9fe85fb66a361478d">Hippodrome Casino</option>
            <option value="636d6fe9fe85fb66a361478d">Hippodrome Casino</option>
            <option value="636d6fe9fe85fb66a361478c">Dear Hotel Madrid</option>
          </select> 
            <label for='name'>Name</label>
            <input 
                className='NewShow-input' 
                id="name" 
                name="name" 
                type="text"
                placeholder='Enter name'
                onChange={getInplut}  
                required />
            <label for='description'>description</label>
            <input 
                className='NewShow-input' 
                id="description" 
                name="description" 
                type="text"
                placeholder='Enter description'
                onChange={getInplut}  
                required />
            <label for='photo'>Photo</label>
            <input 
                className='NewShow-input' 
                id="photo" 
                name="photo" 
                type="text"
                placeholder='Enter Url'
                onChange={getInplut}  
                required />
            <label for='price'>Price</label>
            <input 
                className='NewShow-input' 
                id="price" 
                name="price" 
                type="number"
                placeholder='Enter price'
                onChange={getInplut}  
                required />
            <label for='date'>Date</label>
            <input 
                className='NewShow-input' 
                id="date" 
                name="date" 
                type="date"
                placeholder='Enter date'
                onChange={getInplut}  
                required />
            
            <div className='NewShow-button'>
                <button className='NewShow-button2' type='submit'>Create</button>
            </div>
        </form>
        {listShow.map((myShow)=> hotelView(myShow))}
      </div>
    </>
  )
}
 
