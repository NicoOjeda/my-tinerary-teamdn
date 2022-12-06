import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const getHotels = createAsyncThunk('getHotels', async ()=>{
    const response = await axios.get('http://localhost:8000/api/hotels')
    // console.log(response.data.response)
    return {
        listHotels : response.data.response
    }
})


const getHotelsNameOrder = createAsyncThunk('getHotelsNameOrder', async (data)=>{
    try{
        const response = await axios.get(`http://localhost:8000/api/hotels?order=${data.order}&name=${data.name}`)
        return {
            listHotels : response.data.response
        }
    } catch (error){
        return {
            listHotels : error.response.data.response
        }
    }
})


const hotelsAction = {
    getHotels,
    getHotelsNameOrder,
}

export default hotelsAction