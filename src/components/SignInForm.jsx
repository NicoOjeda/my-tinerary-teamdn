import React, { useState } from 'react'
import '../styles/Signin.css'
// import { useState } from "react";

export default function SignInForm() {

    const [data,setData] = useState({
        email:'',
        password: ''
    })

    const handleInplutChange = (e)=>{
        // console.log(e.target.value);
        setData({
            ...data,
            [e.target.name] : e.target.value
            
        })
    }

    const sendData = (e) =>{
        e.preventDefault();
        console.log(data);

        localStorage.setItem("data", JSON.stringify(data))
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







// export default function Signin() {

//     const inputRef1 = useRef(null);
//     const inputRef2 = useRef(null);
//     const handleClick = ()=>{
//     alert(inputRef1.current.value)
//     alert(inputRef2.current.value)
// }

// const 



//   return (
//     <div className='Signin-container'>
//     <h2 className='Signin-h2'>Sign in</h2>
//     <div className='Signin-box' >
//     <form className='Signin-form'>
//         <label for='email'>Email:</label>
//         <input className='Signin-input' id="email" name="Email" type="email" ref={inputRef1} required></input>
//         <label>Password</label>
//         <input className='Signin-input' name="Password" type="password" ref={inputRef2} required></input>
//         <div className='Signin-button'>
//             <button onClick={handleClick} className='Signin-button2' type='submit'>Enter</button>
//         </div>
//     </form>
//     <button className='Signin-google2'>
//         <img className='Signin-google' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/240px-Google_%22G%22_Logo.svg.png' alt='google'/>
//         <p>Sign in with google</p>
//     </button>
//     </div>
//     </div>
//   )
// }
