import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import myCitiesActions from "../redux/actions/myCitiesActions";
import "../styles/MyCities.css"
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
export default function MyCitieslist() {
  const listCities = useSelector(
    (store) => store.myCitiesReducer.citiesAdmlist
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let id = "636d24d7ea4ed429429463a6";
    dispatch(myCitiesActions.citiesList(id));
  }, [listCities]);

  console.log(listCities);
  const navigate = useNavigate()
  const deleteCities = (e) => {
    dispatch(myCitiesActions.deleteCities(e));
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
      <img className="mc-img" src={myCity.photo}></img>
      <div className="mc-continent"> {myCity.continent}</div>
      <div className="containerbuttonscities">

      <Link to={`/editcity/${myCity._id}`}>
        <button className="mc-btn2">Edit City</button>
      </Link>
      <button className="mc-btn1" onClick={() => deleteCities(myCity._id)}>Delete</button>
      </div>
    </div>
    </div>
  );
  return (<div className="imagebckcities">
  {listCities.map((myCity) => cityView(myCity))}</div>);
}
