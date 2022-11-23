import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import myItinerariesActions from "../redux/actions/myItineriesActions";
import swal from "sweetalert";
import "../styles/Mytineraries.css"

export default function MyitineraryList () {
    const listItinerary = useSelector(store => store.myItinerariesReducer.itinerariesAdmlist)
    const dispatch = useDispatch()

    useEffect(()=>{
        let id = "636e7bb6f4d7aa583b71eb6a"
        dispatch(myItinerariesActions.itinerariesList(id))
    },[listItinerary])

    console.log(listItinerary);

    const deleteItineraries = (e) =>{
        dispatch(myItinerariesActions.deleteItineraries(e))
        swal({
            tittle:"Excelent",
            text: "Itinerary Deleted",
            icon:"success",
            timer: "3000"
        })
    }  
    const itineraryView = (myItinerary) =>(
        <div className="my-container">
            <div className="my-title">
            Nombre{myItinerary.name}
            </div>
            <img  className="my-img" src={myItinerary.photo}></img>
            <div className="my-price">
                Price:{myItinerary.price}
            </div>
            <div className="my-duration">
                Duration:{myItinerary.duration}
            </div>
            <div className="my-description">description :{myItinerary.description}</div>
            <Link to={`/edititinerary/${myItinerary._id}`}>
                <button className="my-btn">Edit City</button>
            </Link>
            <button className="my-btn2" onClick={()=>deleteItineraries(myItinerary._id)}>Delete</button>
        </div>
    )
    return(
        <div>
            {listItinerary.map((myItinerary) => itineraryView(myItinerary))}
        </div>
    )
}