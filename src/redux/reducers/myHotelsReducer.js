import { createReducer } from "@reduxjs/toolkit";
import myHotelsAction from "../actions/myHotelsActions";


const initialState = {
    hotelAdm:[]
}

const myHotelsReducer = createReducer(initialState, (builder)=>{

    builder.addCase(myHotelsAction.hotelList.fulfilled, (state, action)=>{
        // console.log(action);
        return{...state, hotelAdm : action.payload.hotelAdm,}
    })

     builder.addCase(myHotelsAction.deleteHotel.fulfilled, (state, action)=>{
        console.log(action);
        return { ...state, 
             }
        
    })
})

export default myHotelsReducer;