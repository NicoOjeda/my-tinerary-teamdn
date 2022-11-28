import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const showsAction = createAsyncThunk('getShows', async (id)=>{
    const res = await axios.get(`http://localhost:8000/api/shows?`)
    // console.log(res);
    return {
        showList : res.data.response
    }
});

const showsDelete = createAsyncThunk('deleteShows', async (id)=>{
    const res = await axios.delete(`http://localhost:8000/api/shows/${id}`)
    // console.log(res);
    return {
        success: true,
        res: res.data.message
    }
})


const myShowsActions = {
    showsAction,
    showsDelete
}

export default myShowsActions 