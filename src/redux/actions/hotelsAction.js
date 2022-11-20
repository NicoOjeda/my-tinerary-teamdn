import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const getHotels = createAsyncThunk('getHotels', async ()=>{
    const response = await axios.get('http://localhost:8000/api/hotels')
    // console.log(response.data.response)
    return {
        listHotels : response.data.response
    }

})

const getHotelsName = createAsyncThunk('getHotelsName', async (data)=>{
    
    const response = await axios.get(`http://localhost:8000/api/hotels?name=${data}`)
    // console.log(response.data.response)
    return {
        listHotels : response.data.response
    }

})

const getHotelsNameOrder = createAsyncThunk('getHotelsNameOrder', async (data)=>{
    const response = await axios.get(`http://localhost:8000/api/hotels?order=${data.order}&name=${data.name}`)
    // console.log(response.data.response)
    return {
        listHotels : response.data.response
    }

})


const hotelsAction = {
    getHotels,
    getHotelsName,
    getHotelsNameOrder
}

export default hotelsAction