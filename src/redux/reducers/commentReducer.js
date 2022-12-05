import { createReducer } from "@reduxjs/toolkit";
import commentActions from "../actions/commentActions";

const initialState = {
    commentList : []
}

const commentReducer = createReducer(initialState, (builder)=>{
    builder.addCase(commentActions.sendComment.fulfilled, (state,action)=>{
        // console.log(action)
        return {...state, commentList: action.payload.commentList }
    })

    builder.addCase(commentActions.deleteComent.fulfilled, (state, action)=>{
        console.log(action);
        return {...state}
    })

    // builder.addCase(commentActions.editComent.fulfilled, (state, action)=>{
    //     return {...state, commentList: (builder=>builder._id !== action.payload._id)}
        
    // })
})


export default commentReducer;