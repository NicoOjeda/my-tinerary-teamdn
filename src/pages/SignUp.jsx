import React from "react";
import { useState } from "react";
import "../styles/SignUp.css";
import { Link as LinkRouter } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export default function SignUp() {
  const nav = useNavigate();
  const btn4 = "Signup";
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  async function sendData(event) {
    event.preventDefault();

    confirmAlert({
      title: "Confirm",
      message: "Are your info correct?.",
      buttons: [{
          label: "Create",
          onClick: async () => {
            try {
              let sendUser = await axios.post(
                "http://localhost:8000/api/auth/signup",
                data
              );
              console.log(sendUser);
              if (sendUser.data.success) {
                swal({
                  title:
                    "Successfully Created!! please check your email for verify account",
                  icon: "success",
                  timer: "3000",
                });
                event.target.reset();
              }
            } catch (error) {
              console.log(error);
              swal("Error in created", error.response.data.message.join("\n"));
            }

          },
        },{
          label: "Back",
          onClick: () => console.log("Click No"),
        },],});
   
  }

  // }

  <LinkRouter to="/signup">
    <button className="nav-2"> {btn4}</button>
  </LinkRouter>;

  async function createdUser(event) {
   
  }
  return (
    <>
      <div className="Signup-box">
        <h1>SignUp</h1>
          <form action="/show_data.html" className="Signup-form" onSubmit={sendData} id="form">
            <label htmlFor="name">Name:</label>
              <input className="Signup-input" id="name" name="name" type="text" placeholder="Please enter your name" onChange={handleInputChange} required/>
            <label htmlFor="name">LastName:</label>
              <input className="Signup-input" id="lastName" name="lastName" type="text" placeholder="Please enter your Lastname" onChange={handleInputChange} required/>
            <label htmlFor="photo">Photo:</label>
              <input className="Signup-input" id="photo" name="photo" type="url" placeholder="Please enter url photo" onChange={handleInputChange} required/>
            <label htmlFor="age">Age:</label>
              <input className="Signup-input" id="age" name="age" type="text" placeholder="Please enter your age" onChange={handleInputChange} required/>
            <label htmlFor="email">Email:</label>
              <input className="Signup-input" id="email" name="email" type="email" placeholder="Please enter your email" onChange={handleInputChange} required/>
            <label>Password</label>
              <input className="Signup-input" name="password" type="password" placeholder="Please enter your password" onChange={handleInputChange} required/>
            <div className="Signup-button">
              <button className="Signup-button2" type="submit">
                Enter
              </button>
            </div>
          </form>
      </div>
    </>
  );
}
