import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../styles/Comments.css' 
import { BASE_URL } from '../api/url';
import NewComment from './NewComment';

export default function Comment(props) {
  
  let [mostrarOcultar, setMostrarOcultar] = useState(false)
  let hide = ()=>{
    setMostrarOcultar(!mostrarOcultar)
}

const [data2, setData2]= useState([])

let data = props.data
// console.log(data)
// console.log(valueInput);

useEffect(()=>{
axios.get(`${BASE_URL}/api/comments?showId=${data}`)
.then(res=>setData2(res.data.response))
// console.log(data2);
},[data2])



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
                              <img img className="comments-photo" src="https://wl-genial.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg" alt="userphoto"></img>
                              <p>Name</p>
                            </div>
                            <NewComment data={data}/>
                            <div className='Comments-buttonbox'>
                                <button className='Comments-button2'>Edit</button>
                                <button className='Comments-button2'>Delete</button>
                            </div>
                            {
                              data2.map((comments=>{
                                return (<>
                                <div className='comments-allcomments'>
                              <div className='comments-profile2'>
                                <img img className="comments-photo" src={comments.userId.photo} alt="userphoto"></img>
                                <p>{comments.userId.name}</p>
                                <p>{comments.date}</p>
                              </div>
                              <div>
                              <p>{comments.comment}</p>
                              </div>
                            </div> </>)
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

