import React from "react";
import { useEffect, useState } from "react";
import reactionActions from "../redux/actions/reactionAction";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import Reaction from "../components/Reactions";
import '../styles/MyReaction.css'
export default function MyReactions() {
  const store = useSelector((store) => store.tokenReducer.tokenList);
  const id = store._id;

  const { getUserReactions, deleteReaction } = reactionActions;
  const [reactions, setReaction] = useState([]);
  const [change, setChange] = useState(true);
  const dispatch = useDispatch();
  const [token, setToken] = useState();
  useEffect(() => {
    reactioness();
    if (localStorage.getItem("token")) {
      let localToken = JSON.parse(localStorage.getItem("token")).token.user;
      setToken(localToken);
    }
  }, [change]);
  async function reactioness() {
    let data = { id: id, token: token };
    console.log(data)
    let res = await dispatch(getUserReactions(data));
    setReaction(res.payload.response);
  }

  async function pullReaction(e, h) {
    console.log(h);
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
          dispatch(deleteReaction({ id: h._id, token: token })).then(() => setChange(!change));
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="mr-container">
      <h2 className="mr-h2">My Reactions</h2>
      <div className="mr-box">
        <div className="Cities-card-container">
          {reactions?.map((e) => (
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
                    <Reaction type="itineraryId" eventid={e.itineraryId?._id} changed={change}  />
                  </div>
                  <button className="btn-mr" onClick={(h) => pullReaction(h, e)}>
                    Delete Reaction
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
