import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../styles/Comments.css' 
import { BASE_URL } from '../api/url';
import NewComment from './NewComment';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert'
import commentActions from '../redux/actions/commentActions';
import { confirmAlert } from "react-confirm-alert";

export default function Comment(props) {
  
let [mostrarOcultar, setMostrarOcultar] = useState(false)  
const tokenList = useSelector(store => store.tokenReducer.tokenList)
const [data2, setData2]= useState([])
let token = JSON.parse(localStorage.getItem('token'))
let data = props.data
const dispatch = useDispatch()
let [modify, setModify] = useState("")
let hide = ()=>{
  setMostrarOcultar(!mostrarOcultar)
}
    // console.log(modify);
// console.log(token.token.user);
// console.log(tokenList._id);
// console.log(data)
// console.log(valueInput);

useEffect(()=>{
axios.get(`${BASE_URL}/api/comments?showId=${data}`)
.then(res=>setData2(res.data.response))
// console.log(data2);
},[data2])

const deleteComment = (e)=>{
  let objeto = {
    idComment: e,
    newToken: token.token.user
  } 
  
  confirmAlert({
    title: "Confirm",
    message: "Are your sure ?",
    buttons: [{
      label: "yes",
      onClick: () => {
        dispatch(commentActions.deleteComent(objeto))
      }
    },{
      label: "No",
      onClick: () => console.log("Click no")
    }]
  })
}

const editComment = (e)=>{
  let objeto = {
    idComment: e,
    newToken: token.token.user,
    info : modify
  } 
  
  confirmAlert({
    title: "Confirm",
    message: "Are your sure ?",
    buttons: [{
      label: "yes",
      onClick: () => {
        dispatch(commentActions.editComent(objeto))
      }
    },{
      label: "No",
      onClick: () => console.log("Click no")
    }]
  })
}





  return (
    <div>
      {
        mostrarOcultar? 
        ( 
          <div className='Comments-box'>
                        <button className='Btn-comments' onClick={hide}>View Less</button>
                        <p>Comments</p>
                        <div className='comments'>
                            <div className='comments-profile'>
                              <img img className="comments-photo" src={tokenList.photo} alt="userphoto"></img>
                              <p>{tokenList.name}</p>
                            </div>
                            <NewComment data={data}/>
                            
                            {
                              data2.map((comments=>{
                                
                                return (<>
                                {
                                  (tokenList._id === comments.userId._id)?
                                (
                                  <div className='comments-allcomments'>
                                    <div className='comments-profile2'>
                                      <img img className="comments-photo" src={comments.userId.photo} alt="userphoto"></img>
                                      <p>{comments.userId.name}</p>
                                      <p>{comments.date}</p>
                                    </div>
                                    <div>
                                      <div onInput={(e)=>setModify(e.currentTarget.textContent)} contentEditable>{comments.comment}</div>
                                    </div>
                                    <div className='Comments-buttonbox'>
                                      <button className='Comments-button2' onClick={()=>editComment(comments._id)}>Edit</button>
                                      <button className='Comments-button2' onClick={()=>deleteComment(comments._id)} >Delete</button>
                                    </div>
                                  </div> 
                                ):
                                (
                                  <div className='comments-allcomments'>
                                    <div className='comments-profile2'>
                                      <img img className="comments-photo" src={comments.userId.photo} alt="userphoto"></img>
                                      <p>{comments.userId.name}</p>
                                      <p>{comments.date}</p>
                                    </div>
                                    <div>
                                      <p>{comments.comment}</p>
                                    </div>
                                  </div> 
                                )} 


                              
                            </>)
                              }))
                            }
                            
                        </div>
                        <div>
                        </div>
                    </div>
                    
          ): 
          (<button className='Btn-comments' onClick={hide}>View More</button>) 
        }        
    </div>
  )
}

