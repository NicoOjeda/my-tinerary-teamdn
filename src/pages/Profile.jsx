import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import profileAction from '../redux/actions/profileAction';
import "../styles/Profile.css";
import axios from 'axios';
import { BASE_URL } from '../api/url';
import swal from 'sweetalert'
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const profileUser = useSelector(store=> store.profileReducer.profileData)
    const tokenList = useSelector(store => store.tokenReducer.tokenList)
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [data, setData] = useState({
        name: "",
        lastName: "",
        email: "",
        photo:"",
        age:""
        
    });
    // console.log(data);
        const handleInputChange = (e) => {
       
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        
    };

    useEffect(()=>{
        dispatch(profileAction.getProfile(tokenList._id))
    },[profileUser])

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
                  navigate('/')
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

  

  return (
    <>
    
    <div className="Profile-container">
        <h2 className="Profile-h2">Profile</h2>
        <div className="Profile-box">
            <div className="Profile-form2">
            <div>
                <p className="Profile-text d-inline">Name: </p>
                <p className="Profile-res">{profileUser.name}</p>
            </div>
            <div>
                <p className="Profile-text d-inline">Last Name: </p>
                <p className="Profile-res">{profileUser.lastName}</p>
            </div>
            <div>
                <p className='Profile-text d-inline'>Photo: </p>
                <p className="Profile-res">{profileUser.photo}</p>
            </div>
            <div>
                <p className="Profile-text d-inline">Age: </p>
                <p className="Profile-res">{profileUser.age}</p>
            </div>
            <div>
                <p className="Profile-text d-inline">Email: </p>
                <p className="Profile-res">{profileUser.email}</p>
            </div>
                {/* <p>Password: {profileUser.password}</p> */}
            </div>
            <form className="Profile-form" onSubmit={sendData} >
                <label htmlFor="name">Name:</label>
                  <input className="Profile-input" id="name" name="name" type="text" placeholder="Please enter your name" onChange={handleInputChange} required/>
                <label htmlFor="name">LastName:</label>
                  <input className="Profile-input" id="lastName" name="lastName" type="text" placeholder="Please enter your lastname"   onChange={handleInputChange} required/>
                <label htmlFor="photo">Photo:</label>
                  <input className="Profile-input" id="photo" name="photo" type="url" placeholder="Please enter url photo" onChange={handleInputChange} required/>
                <label htmlFor="age">Age:</label>
                  <input className="Profile-input" id="age" name="age" type="text" placeholder="Please enter your age" onChange={handleInputChange} required/>
                <label htmlFor="email">Email:</label>
                  <input className="Profile-input" id="email" name="email" type="email" placeholder="Please enter your email" onChange={handleInputChange} required/>
            <div className="Profile-button">           
                <button className="Profile-button2" type="submit" > Update</button>
            </div>
          </form>
          </div>
        </div>
    </>
  )
}
