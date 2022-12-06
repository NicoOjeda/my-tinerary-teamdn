import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/**/
const itinerariesList = createAsyncThunk ('itinerariesList', async(id)=>{
    const res = await axios.get(`http://localhost:8000/api/itineraries?`)
    // console.log(res);
    return {
        itinerariesAdmlist: res.data.response
    }
})

const deleteItineraries = createAsyncThunk('deleteItineraries', async (objeto)=>{
    console.log(objeto)
    let headers= {headers: {'Authorization':`Bearer ${objeto.newToken.token.user}`}}
    try{
        const res = await axios.delete(`http://localhost:8000/api/itineraries/${objeto.id}`,headers)
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
