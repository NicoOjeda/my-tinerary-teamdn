import { createReducer } from "@reduxjs/toolkit";
import commentActions from "../actions/commentActions";

const initialState = {
    commentList : []
}

const commentReducer = createReducer(initialState, (builder)=>{
    builder.addCase(commentActions.sendComment.fulfilled, (state,action)=>{
        // console.log(action)
        return {commentList: action.payload.commentList }
    })
})

export default commentReducer;