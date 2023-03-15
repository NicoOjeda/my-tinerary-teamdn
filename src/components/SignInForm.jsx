import React, { useState } from 'react'
import '../styles/Signin.css'
import { useDispatch} from 'react-redux'
import userActionsLog from '../redux/actions/SignInAction' 
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";


export default function SignInForm() {

    const navigate = useNavigate();
    let dispatch = useDispatch()
    let {signin} = userActionsLog
    // let lista = useSelector(store=>store.SignInReducer)
    const handleInplutChange = (e)=>{
        setData({
            ...data,
            [e.target.name] : e.target.value
            
        })
    }
    const [data,setData] = useState({
        email:'',
        password: ''
    })
    // console.log(lista);
    async function sendData(e) {
        
        e.preventDefault();
        try {
            let res = await dispatch(signin(data));
            // console.log(res.payload);
            // console.log(res.payload.response.user.name);
            if(res.payload.success){
                swal({
                    title: "Welcome "+ res.payload.response.user.name,
                    text:  "You are logged!!",
                    icon: "success",
                    timer: "3000"
                })
                navigate("/")
                e.target.reset()
            } else {
                swal({
                    text: res.payload.response,
                    icon: "warning",
                    dangerMode: true,
                    timer: "5000" 
                })
            }
        } catch(error){
            console.log(error.message)
        }
    }



  return (
    <div className='Signin-box' >
        <h1>Sign in</h1>
        <form className='Signin-form' onSubmit={sendData}>
            <label for='email'>Email:</label>
            <input 
                className='Signin-input' 
                id="email" 
                name="email" 
                type="email"
                onChange={handleInplutChange}  
                required />
            <label>Password</label>
            <input 
                className='Signin-input' 
                name="password" 
                type="password" 
                onChange={handleInplutChange} 
                required/>
            <div className='Signin-button'>
                <button className='Signin-button2' type='submit'>Enter</button>
            </div>
        </form>
    {/* <h3>{data.email} + {data.password} </h3> */}
    </div>
  )
}
