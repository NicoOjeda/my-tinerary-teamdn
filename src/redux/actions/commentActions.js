import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";


const sendComment = createAsyncThunk('sendComment', async(objeto)=>{
    
    let headers = {headers: {'Authorization': `Bearer ${objeto.newToken}`}}
    const res = await axios.post(`${BASE_URL}/api/comments/`,objeto.info,headers)
    // console.log(res);
        return {
            success: true,
            res: res.data.message
        }
})

const deleteComent = createAsyncThunk('deleteShows', async (objeto)=>{
    
    let headers = {headers: {'Authorization': `Bearer ${objeto.newToken}`}}
    const res = await axios.delete(`${BASE_URL}/api/comments/${objeto.idComment}`, headers)
    // console.log(res);
    return {
        success: true,
        res: res.data.message
    }
})

const editComent = createAsyncThunk('deleteShows', async (objeto)=>{
    
    let headers = {headers: {'Authorization': `Bearer ${objeto.newToken}`}}
    const resp = await axios.put(`${BASE_URL}/api/comments/${objeto.idComment}`,objeto.info, headers)
    // console.log(resp);
    return {
        success: true,
        res: resp.data.message
    }
})




const commentActions = {
    sendComment,
    deleteComent,
    editComent
}

export default commentActions;