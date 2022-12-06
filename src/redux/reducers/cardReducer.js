import { createReducer } from "@reduxjs/toolkit";
import cardsActions from "../actions/cardsActions";

const { getCards } = cardsActions;
const { getSelect } = cardsActions;
const { getChecks } = cardsActions;

const initialState = {
  cities: [],
   search: "",
   initial: true,
   check: []

};

const cardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getCards.fulfilled, (state, action) => {
      return { ...state, cities: action.payload,initial:false };
    })
    .addCase(getSelect.fulfilled, (state, action) => {
      return { ...state, cities: action.payload.cities,search:action.payload.search };
    })
     
    .addCase(getChecks.fulfilled, (state, action) => {
        return { ...state, cities: action.payload.cities,check:action.payload.check };
      });


});

export default cardReducer;
