import { createReducer } from "@reduxjs/toolkit";
import myItinerariesActions from "../actions/myItineriesActions";

const initialState = {
    itinerariesAdmlist:[]
}

const myItinerariesReducer = createReducer(initialState, (builder) =>{
    builder.addCase(myItinerariesActions.itinerariesList.fulfilled, (state, action)=>{
        return {
            ...state, itinerariesAdmlist : action.payload.itinerariesAdmlist,}
    })
    builder.addCase(myItinerariesActions.deleteItineraries.fulfilled,(state, action) =>{
        console.log(action);
        return{
            ...state
        }
    })
}) 
export default myItinerariesReducer