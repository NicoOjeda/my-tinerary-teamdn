import { createReducer } from "@reduxjs/toolkit";
import myCitiesActions from "../actions/myCitiesActions";

const initialState = {
    citiesAdmlist:[]
}

const myCitiesReducer = createReducer(initialState, (builder) =>{
    builder.addCase(myCitiesActions.citiesList.fulfilled, (state, action)=>{
        return {
            ...state, citiesAdmlist : action.payload.citiesAdmlist,}
    })
    builder.addCase(myCitiesActions.deleteCities.fulfilled,(state, action) =>{
        console.log(action);
        return{
            ...state
        }
    })
}) 
export default myCitiesReducer