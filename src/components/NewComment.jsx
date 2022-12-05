import React, {useRef, useState } from 'react'
import { useDispatch} from 'react-redux'
import commentActions from '../redux/actions/commentActions'
import swal from 'sweetalert'
import '../styles/Comments.css' 

export default function NewComment(props) {

let dispatch = useDispatch()
const inputRef = useRef(null)
const [valueInput, setvalueInput] = useState('')
let token = JSON.parse(localStorage.getItem('token'))

const MakeThings = (e)=>{
    
    setvalueInput(inputRef.current.value)
} 
let data = props.data

const sendInfo = (e)=>{
    e.preventDefault();
    e.target.reset();
    let objeto = {
        info : {
        showId :  data ,
        comment : valueInput,
        date: Date.now()
        },
        newToken : token.token.user
    }
    dispatch(commentActions.sendComment(objeto))
    swal({
        title: "Thanks for your comment!!",
        icon: "success",
        timer: "5000"
    })
}

  return (
    <>
        <form  className='Comments-send' onSubmit={sendInfo}>
            <input className='Comments-input' onChange={MakeThings} type="text" ref={inputRef} placeholder='Comments' ></input>
            <button className='Comments-button'>Send</button>
        </form>
    </>
  )
}
