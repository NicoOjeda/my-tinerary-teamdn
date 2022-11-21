import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getCards = createAsyncThunk("getCards", async (data) => {

  try {
    const res = await axios.get("http://localhost:8000/api/cities");
    return res.data.response;
  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});
      
const getSelect = createAsyncThunk("getSelect", async (data) => {
  try {
    const res = await axios.get(`http://localhost:8000/api/cities?name=${data}`);
    console.log(res);
    return  {cities:res.data.response,search:data}
   
  } catch (error) {
    console.log(error);
    return {

      payload: "Error",
      
    };
  }
});


const getChecks = createAsyncThunk("getChecks", async (data) => {
  try {
    const res = await axios.get(`http://localhost:8000/api/cities?continent=${data.join("&continent=")}`);
    console.log(res)
    
    return {cities:res.data.response,check:data}

  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});


const cardsActions = {
  getCards,getSelect,getChecks
};






export default cardsActions;
