import { createReducer } from "@reduxjs/toolkit";
import userActions from '../actions/SignInAction'


const { signin, relogin,signout } = userActions

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
                id: user.id
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
            let { token} = response
            let {name,photo,_id,role} = response.user.user
            let newState={
                ...state,
                name: name,
                photo: photo,
                logged: true,
                role:role,
                token: token,
                id:_id,

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
             
                name:"",
                photo:"",
                logged:false,
                role: "",
                token:"",
                id: ""
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