import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import myCitiesActions from "../redux/actions/myCitiesActions";
import "../styles/MyCities.css"
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function MyCitieslist() {
  
  const listCities = useSelector(
    (store) => store.myCitiesReducer.citiesAdmlist);
    
  const dispatch = useDispatch();
    
  const tokenList= useSelector(store => store.tokenReducer.tokenList)
      const userIdToken = tokenList._id
    // console.log(tokenList)
    let token = JSON.parse(localStorage.getItem('token'))
    useEffect(() => {
  axios.get()
    dispatch(myCitiesActions.citiesList(tokenList.id));
  }, []);

  // console.log(listCities);
  const navigate = useNavigate()
  const deleteCities = (e) => {
      
  let objeto = {
    idCities:e,
    newToken:token.user
  }
  dispatch(myCitiesActions.deleteCities(objeto));
    swal({
      tittle: "Excelent",
      text: "City Deleted",
      icon: "success",
      timer: "3000",
    });
    navigate('/cities')
  };

  const cityView = (myCity) => (
    <div className="mc-oneContainer">
      <div className="mc-container">
        <div className="mc-title">{myCity.name}</div>
        <img className="mc-img" src={myCity.photo} alt={myCity.photo}></img>
        <div className="mc-continent"> {myCity.continent}</div>
        <div className="containerbuttonscities">
          <Link to={`/editcity/${myCity._id}`}>
            <button className="mc-btn1">Edit City</button>
          </Link>
          <button className="mc-btn1" onClick={() => deleteCities(myCity._id)}>Delete</button>
        </div>
      </div>
    </div>
  );
  return (
    <div className="imagebckcities">
      <div>
      <h1>My Cities</h1>
        <Link to={`/NewCity` } style={{ textDecoration:'none' }}><div className='Newcity-btn2'>New City</div></Link>
      </div>  
      <div className="imagen-box">
        {listCities.map((myCity) => cityView(myCity))}
      </div>
  </div>
  );
}
