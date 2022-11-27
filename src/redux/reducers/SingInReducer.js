import { createReducer } from "@reduxjs/toolkit";
import userActions from '../actions/SignInAction'


const { signin, relogin } = userActions

const initialState= {
    name: "",
    photo:"",
    logged: false,
    role:"",
    token:"",
    idUser:""
}

const userReducer = createReducer( initialState, (builder)=>{
    builder
    .addCase(signin.fulfilled,(state, action)=>{
        // console.log(action.payload.response)
        const {success, response} = action.payload
        if(success){
            let { user ,token} = response
            localStorage.setItem('token', JSON.stringify({ token : {user: token}}))
            let newState={
                ...state,
                name: user.name,
                photo: user.photo,
                logged: true,
                role: user.role,
                token: token,
                idUser: user.id
            } 
            // console.log(newState);
            return newState
        } else{
            let newState={
                ...state,
                messagge: response
            }
            return newState
        }
    } )

   .addCase(relogin.fulfilled,(state, action)=>{
        const {success, response} = action.payload
        if(success){
            let { user ,token} = response
            let newState={
                ...state,
                name: user.name,
                photo: user.photo,
                logged: true,
                role: user.role,
                token: token,
                idUser: user.id
            } 
            // console.log(newState);
            return newState
        } else{
            let newState={
                ...state,
                messagge: response
            }
            return newState
        }
    } )

    .addCase(signout.fulfilled, (state,action) => {
        const { success,response} = action.payload
        if(success){
            localStorage.removeItem('token')
            let newState = {
                ...state,
                name:"",
                photo:"",
                logged:false,
                role: "",
                token:"",
                idUser: ""
            }
            return newState
        } else{
            let newState ={
                ...state,
                message: response
            }
            return newState
        }
    })


})

export default userReducer