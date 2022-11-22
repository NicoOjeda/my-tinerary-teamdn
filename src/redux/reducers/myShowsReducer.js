import { createReducer } from "@reduxjs/toolkit";
import myShowsActions from "../actions/myShowsActions";

const initialState = {
    showList : []
}

const myShowsReducer = createReducer(initialState, (builder)=>{

    builder.addCase(myShowsActions.showsAction.fulfilled, (state, action)=>{
        // console.log(action);
        return {...state, showList : action.payload.showList}
    })

    builder.addCase(myShowsActions.showsDelete.fulfilled, (state, action)=>{
        // console.log(action);
        return {...state}
    })
})

export default myShowsReducer; 