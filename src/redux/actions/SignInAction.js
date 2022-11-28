import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";


const signin = createAsyncThunk('signin', async(data)=>{
    let url = `${BASE_URL}/api/auth/signin`
    try{
        const res = await axios.post(url, data)
        // console.log(res.data.response);
    return{
        success: true,
        response: res.data.response
    }
   } catch(error){
    console.log(error.response);
    return{
        success: false,
        response: error.response.data.message
    }
   }
   
})

const relogin = createAsyncThunk('relogin', async(token)=>{
    let url = `${BASE_URL}/api/auth/token`
    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    try{
        const res = await axios.post(url, null, headers)
        // console.log(res.data.response);
    return{
        success: true,
        response: {
            user: res.data.response,
            token
        }
    }
   } catch(error){
    console.log(error.response);
    return{
        success: false,
        response: error.response.data.message
    }
   }
   
})

const signout = createAsyncThunk('signout', async(token) => {
    let url = `${BASE_URL}/api/auth/sign-out`

    let headers = {headers: {"Authorization": `Bearer ${token}`}}
    try {
        let user = await axios.put(url,null,headers)
        console.log(user.data);
        return{
            success: true,
            response: user.data.message
        } 
    }catch(error) {
        console.log(error.response);
        return{
            success: false,
            response: error.response.data.message
        }
    }
})



const userActions = {
    signin,
    relogin,
    signout
}

export default userActions