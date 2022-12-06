import { createReducer} from "@reduxjs/toolkit";
import tokenAction from "../actions/tokenAction";

const initialState = {
    tokenList: []
}

const tokenReducer = createReducer(initialState, (builder)=>{
     builder.addCase(tokenAction.getToken.fulfilled, (state, action)=>{
        // console.log(action);
        return {...state, ...action.payload}
    })
})

export default tokenReducer