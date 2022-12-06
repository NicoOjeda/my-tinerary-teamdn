import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getProfile = createAsyncThunk('getProfile', async (id)=>{
    let res = await axios.get(`${BASE_URL}/api/auth/me/${id}`)
    // console.log(res);
    return {
        profileData: res.data.response
    }
})

// const updateProfile = createAsyncThunk('updateProfile', async(id)=>{
//     let resp = await axios.patch(`${BASE_URL}/api/auth/me/${id}`)
//     console.log(resp);
//     return {
//         profileData: resp.data.response
//     }
// })

const profileAction = {
    getProfile
    // updateProfile
}

export default profileAction