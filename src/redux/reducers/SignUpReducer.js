import { createReducer } from "@reduxjs/toolkit";
import LoginAction from "../actions/LoginAction";
const { join } = userActions;
const initialState = {
  value: "",
  name: "",
  lastName: "",
  photo: "",
  age: '',
  email:'',
  password:'',
  online: false,
  token: "",

}

.addCase(join.fulfilled, (state, action) => {
  console.log(action.payload.response);
  const { success, response } = action.payload;
  if (success) {
    let { user, token } = response; // este token es el codigo q viene del backend
    localStorage.setItem("token", JSON.stringify({ token: { user: token } })); // este objeto token va a guardar la propiedad con el nombre del tipo de token y el  token q guarda
    let newState = {
      ...state,
      name: user.name,
      photo: user.photo,
      online: true,
      token: token,
    };
    return newState;
  } else {
    let newState = {
      ...state,
      message: response,
    };
    return newState;
  }


})

// const SignupReducer = createReducer(initialState,(builder)=> {     }     )
.addCase(salir.fulfilled, (state, action) => {
    const { success, response } = action.payload
    if(success) {

        localStorage.removeItem('token')
        let newState = { 
            ...state,
            name: '',
            lastName: '',
            photo: '',
            age: '',
            email:'',
            password:'',
            online: false,
            token : ''


        }
        return newState

    

    }else{
        let newState = {
            ...state,
            message: response


    }
    return newState

    }
})














