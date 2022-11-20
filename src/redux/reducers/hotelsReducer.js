import { createReducer} from "@reduxjs/toolkit";
import hotelsAction from "../actions/hotelsAction";

const {getHotels, getHotelsName, getHotelsNameOrder } = hotelsAction
const initialState = {
    listHotels:[]
}

const hotelsReducer = createReducer( initialState, (builder)=>{
    builder.addCase(getHotels.fulfilled, (state, action) =>{
        // console.log(action.payload);

        return { ...state, listHotels : action.payload.listHotels }
    } )

    builder.addCase(getHotelsName.fulfilled, (state, action)=>{
        return { ...state, listHotels : action.payload.listHotels }
        
    })

    
    builder.addCase(getHotelsNameOrder.fulfilled, (state, action)=>{
        return { ...state, listHotels : action.payload.listHotels }
        
    })
   
})


export default hotelsReducer;

