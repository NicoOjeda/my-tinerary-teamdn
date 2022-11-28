import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




const itinerariesList = createAsyncThunk ('itinerariesList', async()=>{
    const res = await axios.get(`http://localhost:8000/api/itineraries?`)
    // console.log(res);
    // http://localhost:8000/api/itineraries?userId=${id}`)
    return {

        itinerariesAdmlist: res.data.response
    }
})

const deleteItineraries = createAsyncThunk('deleteItineraries', async (id)=>{
    try{
        const res = await axios.delete(`http://localhost:8000/api/itineraries/${id}`)
        console.log(res);
        return{
            success: true,
            res: res.data.message
        }
    } catch(error){
        console.log(error);
        return{
            payload: "error",
        }
    }
})

const myItinerariesActions = {
    itinerariesList,
    deleteItineraries
}

export default myItinerariesActions
