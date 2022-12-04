import React from "react";
import { useEffect, useState } from "react";
import reactionActions from "../redux/actions/reactionAction";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import Reaction from "../components/Reactions";

export default function MyReactions() {
  const store = useSelector((store) => store.tokenReducer.tokenList);
  const id = store._id
  
  const { getUserReactions, deleteReaction } = reactionActions;
  const [reactions, setReaction] = useState([]);
  const [change, setChange] = useState(false);
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    reactioness();
    // if (JSON.parse(localStorage.getItem("token"))) {
    // }
  },
   []);
  async function reactioness() {

  let data = {id:id, token:token.token.user}
    let res = await dispatch(getUserReactions(data));
    setReaction(res.payload.response);
   
  }

 
  async function pullReaction(e) {
    try {
      Swal.fire({
        title: "Sure?",
        text: "Just do it!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your reaction has been deleted.", "success");
          dispatch(deleteReaction({ id: e.target.name,token:token.token.user }));
        }
      });
    } catch (error) {
      // console.log(error);
    }
  }

  return (
    <div className="cont-h2">
      <h2>My Reactions</h2>
      <div className="cont-cities">
        <div className="Cities-card-container">
          {reactions.map((e) => (
          
            <>
            
              <div className="d-activity-card cityImageDetails  ">
                <div className="container-activity-detailc">
                  <div className="activity-title ">{e.name}</div>
                  <img
                      className="activity-img detail-img1"
                      src={e.itineraryId?.photo}
                      alt={e.itineraryId?.name}
                    ></img>
                  <div className="activity-info">{e.itineraryId?.name}</div>
                  <div className="reaction-emoji">
                  <Reaction type="itinerary" eventid={e.itineraryId?._id} />
                  </div>
                </div>
              </div>
            </>
          )   
          
          
          )}
        </div>
      </div>
    </div>
  );
}
