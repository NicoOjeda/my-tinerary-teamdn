import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import myItinerariesActions from "../redux/actions/myItineriesActions";
import swal from "sweetalert";
import "../styles/Mytineraries.css"
import "../styles/CityDetails.css";
import { useNavigate } from "react-router-dom";

export default function MyitineraryList () {
    const listItinerary = useSelector(store => store.myItinerariesReducer.itinerariesAdmlist)
    const dispatch = useDispatch()
    let user = useSelector(store => store.users)
    
    let token = localStorage.getItem('token')

    useEffect(()=>{
        dispatch(myItinerariesActions.itinerariesList(user.id))
    },[])

    // console.log(JSON.parse(token));
    const navigate = useNavigate()

    const deleteItineraries = (e) =>{
        let newToken = JSON.parse(token)
        let objeto = {
            id:e,
            newToken
        }
        dispatch(myItinerariesActions.deleteItineraries(objeto))
        swal({
            tittle:"Excelent",
            text: "Itinerary Deleted",
            icon:"success",
            timer: "3000"
        })
        navigate('/cities')
    }  
    const itineraryView = (myItinerary) =>(
            <div className="container-activity-detailc" key={myItinerary._id}>
                <div className="activity-title">
                {myItinerary.name}
                </div>
                <img  className="activity-img" src={myItinerary.photo} alt={myItinerary.name}></img>
                <div className="my-price2">
                    Price: ${myItinerary.price}
                </div>
                <div className="my-text">
                    Duration: ⌚{myItinerary.duration}
                </div>
                <div className="my-text">{myItinerary.description}</div>
                <div className="containerbuttonscities">
                    <Link to={`/edititinerary/${myItinerary._id}`} className="mytinerary-link">
                        <button className="my-btn">Edit Itinerary</button>
                    </Link>
                    <button className="my-btn" onClick={()=>deleteItineraries(myItinerary._id)}>Delete</button>
                </div>
            </div>
    )

    return(
        <div className="imagebckcities">
            <h2 className="my-price">
                MyItineraries
            </h2>  
                <Link to={'/MyTynerariesCreate'} className="mytinerary-link">
                <button className="my-btn">New Itinerary</button>
                </Link>
            <div className='MyTinerary-container'>
                {listItinerary.map((myItinerary,) => itineraryView(myItinerary))}
            </div>
        </div>
    )
}