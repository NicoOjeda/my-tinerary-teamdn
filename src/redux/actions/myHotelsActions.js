import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const hotelList = createAsyncThunk ('hotelList', async(id)=>{
    const res = await axios.get(`http://localhost:8000/api/hotels?userId=${id}`)
    // console.log(res);
    return {
        hotelAdm: res.data.response
    }
})


const deleteHotel = createAsyncThunk('deleteHotel', async (objeto)=>{

    let headers = {headers: {'Authorization': `Bearer ${objeto.newToken}`}}
    try{
        const res = await axios.delete(`http://localhost:8000/api/hotels/${objeto.idHotel}`, headers)
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

const myHotelsAction = {
    deleteHotel,
    hotelList
}

export default myHotelsAction