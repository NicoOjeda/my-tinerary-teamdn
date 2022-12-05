import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import reactionActions from "../redux/actions/reactionAction";

export default function Reaction(props) {
  let { eventid, type , changed } = props;
  const dispatch = useDispatch();
  let id = useSelector((store) => store.tokenReducer.tokenList)._id;
  const { getReaction, updateReaction } = reactionActions;
  const [reactions, setReaction] = useState([]);
  const [change, setChange] = useState(false);
  let [jWTToken, setJWTToken] = useState();

  useEffect(() => {
    reactioness();
    if (JSON.parse(localStorage.getItem("token"))) {
      let token = JSON.parse(localStorage.getItem("token"));
      setJWTToken(token?.token.user);
    }
  }, [change , changed]);

  async function reactioness() {
    let res = await dispatch(getReaction({ type, eventid }));
    setReaction(res.payload.response);
  }

  async function likeEvent(e) {
    let name;
    let icon;
    let iconBack;
    reactions.data.map((react) => {
      if (react.name === e.target.name) {
        name = react.name;
        icon = react.icon;
        iconBack = react.iconBack;
      }
    });
    let data = {
      name,
      type,
      id: eventid,
      token: jWTToken,
    };
    try {
      await dispatch(updateReaction(data));
      setChange(!change);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {reactions?.success &&
        reactions?.data.map((reaction) => {
          let res = reaction.userId.find((user) => user._id === id);
          return res ? (
            <>
              <img
                src={reaction.icon}
                name={reaction.name}
                alt={reaction.name}
                key={reaction._id}
                width="25px"
                onClick={likeEvent}
              />
              <div className="number-reaction">
              <div id="number-reaction" >{reaction.userId?.length}</div>
              </div>
            </>
          ) : (
            <>
              <img
                src={reaction.iconBack}
                name={reaction.name}
                alt={reaction.name}
                key={reaction._id}
                width="25px"
                onClick={likeEvent}
              />
              <div className="number-reaction">
              <div id="number-reaction">{reaction.userId?.length}</div>
              </div>
            </>
          );
        })}
    </> 
  );
}
