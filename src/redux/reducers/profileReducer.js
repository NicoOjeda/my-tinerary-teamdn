import { createReducer } from "@reduxjs/toolkit";
import profileAction from "../actions/profileAction";

const initialState={
    profileData:[]
}

const profileReducer = createReducer(initialState, (builder)=>{

    builder.addCase(profileAction.getProfile.fulfilled, (state,action)=>{
        // console.log(action.payload.profileData);
        return {...state, profileData : action.payload.profileData}
    })
})

export default profileReducer