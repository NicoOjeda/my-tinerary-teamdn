import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import profileAction from '../redux/actions/profileAction';
import "../styles/Profile.css";
import axios from 'axios';
import { BASE_URL } from '../api/url';
import swal from 'sweetalert'
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";

export default function Profile() {
    const profileUser = useSelector(store=> store.profileReducer.profileData)
    const tokenList = useSelector(store => store.tokenReducer.tokenList)
  
    const dispatch = useDispatch();

    // console.log(id);
    const [data, setData] = useState({
        name: "",
        lastName: "",
        email: "",
        photo:"",
        age:""
        
    });
    console.log(data);
        const handleInputChange = (e) => {
        // console.log(e.target.value);
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        
    };

    useEffect(()=>{
        dispatch(profileAction.getProfile(tokenList._id))
    },[profileUser])
console.log(profileUser);
    async function sendData(e){
    e.preventDefault()
    confirmAlert({
        title: "Edit",
        message: "Are you sure?",
        buttons: [{
            label: "Edit",
            onClick: async () => {
              try {
                let res = await axios.patch(`${BASE_URL}/api/auth/me/${tokenList._id}` , data)
                console.log(res);
                if (res.data.success) {
                  swal({
                    title:
                      "Profile edited",
                    icon: "success",
                    timer: "3000",
                  });
                  e.target.reset();
                }
              } catch (error) {
                console.log(error);
                swal("Error in created", error.response.data.message.join("\n"));
              }
            },
          },{
            label: "Back",
            onClick: () => console.log("Click No"),
          },],})
    }

    // async function sendData(e){
    //     swal({
    //         title: "Edit profile",
    //         text:  "Are you sure?",
    //         icon: "warning",
    //         buttons: ["no","yes"],
    //     })
    //     e.preventDefault()
    //     try{
    //         let res = await axios.patch(`${BASE_URL}/api/auth/me/${id}` , data)
    //         console.log(res);
    // }catch(err){
    //     console.log( err)
    // }
    // e.target.reset()
    // }

  return (
    <>
    
    <div className="Profile-container">
        <h2 className="Profile-h2">Profile</h2>
        <div className="Profile-box">
            <div className="Profile-form">
                <p>Name: {profileUser.name}</p>
                <p>Last Name: {profileUser.lastName}</p>
                <p>Photo: {profileUser.photo}</p>
                <p>Age: {profileUser.age}</p>
                <p>Email: {profileUser.email}</p>
                {/* <p>Password: {profileUser.password}</p> */}
            </div>
            <form action="/show_data.html" className="Profile-form" onSubmit={sendData} id="form">
                <label htmlFor="name">Name:</label>
                <input className="Profile-input" id="name" name="name" type="text" placeholder="Please Enter Your Name" onChange={handleInputChange} required/>

                <label htmlFor="name">LastName:</label>
                <input className="Profile-input" id="lastName" name="lastName" type="text" placeholder="Please Enter Your LastName"   onChange={handleInputChange} required/>

                <label htmlFor="photo">Photo:</label>
                <input className="Profile-input" id="photo" name="photo" type="url" placeholder="Please Enter url photo" onChange={handleInputChange} required/>

                <label htmlFor="age">Age:</label>
                <input className="Profile-input" id="age" name="age" type="text" placeholder="Please Enter your Age" onChange={handleInputChange} required/>

                <label htmlFor="email">Email:</label>
                <input className="Profile-input" id="email" name="email" type="email" placeholder="Please Enter Your Email" onChange={handleInputChange} required/>

  
            <div className="Profile-button">
            
                <button className="Profile-button2" type="submit" > Update</button>
            </div>
          </form>

          </div>
        </div>
    </>
  )
}
