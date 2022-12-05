import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import activityReactionAction from '../redux/actions/activityReactionAction';
import Reaction from './Reaction';

const Itinerary = (props) => {

    let {data,mostrarOcultar,hide} = props
    let { getReaction } = activityReactionAction
    const dispatch = useDispatch();
   let reactions = useSelector(store => store.activityReactionReducer.reaction)
   
    
    useEffect(() => {
        dispatch(getReaction({itineraryId:data._id}))


      },
       []);



  return (


 
                <div className="d-activity-card cityImageDetails  ">
                  <div className="container-activity-detailc">
                    <div className="activity-title ">{data.name}</div>
                    <img
                      className="activity-img detail-img1"
                      src={data.photo}
                      alt={data.name}
                    ></img>

                    <div className="activity-info">{data.description}</div>
                    <div className="activity-info">${data.price}</div>
                    <div> {data.userId.name}</div>
                    <img
                    width="100px"
                      className="activity-photo"
                      src={data.userId.photo}
                      alt={data.userId.name}
                    ></img>
                    <div className='img-like'>
                     {reactions.filter(reaction => reaction.itineraryId === data._id).map(reaction => {
                    return <Reaction reaction={reaction}/>})} 
                    </div>


                    {/* {console.log(user)} */}
                    {!mostrarOcultar ? (
                      <>
                        <button className="d-btn2" onClick={hide}>
                          Comments:{" "}
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="d-btn3" onClick={hide}>
                          Cerrar❌
                        </button>
                        <p>Comment:</p>
                        <div className="comments">
                          <p>This events are Amazing</p>
                        </div>
                      </>
                    )}
                  </div>
                
                </div>
             


  )
}

export default Itinerary