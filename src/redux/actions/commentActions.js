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

const commentActions = {
    sendComment
}

export default commentActions;