import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const citiesList = createAsyncThunk ('citieslist', async(id)=>{
    const res = await axios.get(`http://localhost:8000/api/cities?userId=${id}`)
    // console.log(res);
    return {
        citiesAdmlist: res.data.response
    }
})

const deleteCities = createAsyncThunk('deleteCities', async (objeto)=>{
    let headers= {headers: {'Authorization':`Bearer ${objeto.newToken}`}}
    try{
        const res = await axios.delete(`http://localhost:8000/api/cities/${objeto.idCities}`, headers)
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

const myCitiesActions = {
    deleteCities,
    citiesList
}

export default myCitiesActions
