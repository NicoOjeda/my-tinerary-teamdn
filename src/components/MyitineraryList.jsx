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
    
    useEffect(()=>{
        dispatch(myItinerariesActions.itinerariesList(user.id))
    },[listItinerary])

    console.log(listItinerary);
    const navigate = useNavigate()
    const deleteItineraries = (e) =>{
        dispatch(myItinerariesActions.deleteItineraries(e))
        swal({
            tittle:"Excelent",
            text: "Itinerary Deleted",
            icon:"success",
            timer: "3000"
        })
        navigate('/cities')
    }  
    const itineraryView = (myItinerary) =>(
        <div className="d-activity-card cityImageDetails">
         <div className="container-activity-detailc">

            <div className="activity-title">
            {myItinerary.name}
            </div>
            <img  className="activity-img detail-img1" src={myItinerary.photo}></img>
            <div className="my-price">
                Price: ${myItinerary.price}
            </div>
            <div className="my-duration">
                Duration: ⌚{myItinerary.duration}
            </div>
            <div className="my-description">{myItinerary.description}</div>
            <div className="containerbuttonscities">
            <Link to={`/edititinerary/${myItinerary._id}`}>
                <button className="my-btn">Edit Itinerary</button>
            </Link>
            <button className="my-btn2" onClick={()=>deleteItineraries(myItinerary._id)}>Delete</button>
            </div>
         </div>
        </div>
    )

    
        

    return(
        <div className="imagebckcities">
            <div className="my-price">
                MyItineraries
            </div>  
            <div>

            <div className="createItineraries">
               {/* <h3>
                 Crea Itinerarios !!
                </h3> */}
                {/* <Link className="containerCreateItinerary">
                <button className="my-btn createButton">Create Itinerary</button>
                </Link> */}
            </div>
            <div>
         
             {listItinerary.map((myItinerary,) => itineraryView(myItinerary))}
            </div>
            </div>
        </div>
    )
}