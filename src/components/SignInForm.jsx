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
    <div className='Signin-container'>
    <h2 className='Signin-h2'>Sign in</h2>
    <div className='Signin-box' >
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
    <button className='Signin-google2'>
        <img className='Signin-google' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/240px-Google_%22G%22_Logo.svg.png' alt='google'/>
        <p>Sign in with google</p>
    </button>
    </div>
    </div>
  )
}
