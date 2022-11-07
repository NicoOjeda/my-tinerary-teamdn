import React from 'react'
import { useState } from 'react'
import "../styles/SignUp.css"

export default function SignUp() {
  
  const [data,setData] = useState({
    name:'',
    lastname:'',
    email:'',
    password: ''
  })
 
  const handleInputChange = (e)=>{
      console.log(e.target.value);
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
        <>
       <div className='Signup-container'>
        <h2 className='Signup-h2'>SignUp</h2>
        <div className='Signup-box' >
        <form action='/show_data.html' className='Signup-form' onSubmit={sendData} id="form">

        <label for='name'>Name:</label>
            <input 
                className='Signup-input'
                id="name" 
                name="name" 
                type="text"
                placeholder='Please Enter Your Name'
                onChange={handleInputChange}  
                required />
         <label for='name'>LastName:</label>
            <input 
                className='Signup-input' 
                id="lastname" 
                name="lastName" 
                type="text"
                placeholder='Please Enter Your LastName'
                onChange={handleInputChange}  
                required />
         <label for='email'>Email:</label>
            <input 
                className='Signup-input' 
                id="email" 
                name="email" 
                type="email"
                placeholder='Please Enter Your Email'
                onChange={handleInputChange}  
                required />
            <label>Password</label>
            <input 
                className='Signup-input' 
                name="password" 
                type="password" 
                placeholder='Please Enter Your Password'
                onChange={handleInputChange} 
                required/>
            <div className='Signup-button'>
                <button className='Signup-button2' type='submit' >Enter</button>
                
            </div>
        </form>
       
        <button className='Signup-google2'>
            <img className='Signup-google' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/240px-Google_%22G%22_Logo.svg.png' alt='google'/>
            <p>Sign in with google</p>
        </button>
        </div>
        </div>
        </>
  )
}




