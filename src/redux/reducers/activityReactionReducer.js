// import { createReducer } from "@reduxjs/toolkit";
// import activityReactionAction from "../actions/activityReactionAction";
// const { getReaction } = activityReactionAction;

// const initialState = {
//   reaction: [],
// };

// const activityReactionReducer = createReducer(initialState, (builder) => {
//   builder.addCase(getReaction.fulfilled, (state, action) => {
//     if (action.payload.success) {
//       return {
//         ...state,
//         reaction: [...state.reaction, ...action.payload.response.data],
//       };
//     }
//   });
// });

// export default activityReactionReducer;
