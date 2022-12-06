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
    const res = await axios.get(`http://localhost:8000/api/cities?name=${data.select}&continent=${data.checks.join("&continent=")}`);
    console.log(res);
    return  {cities:res.data.response,search:data.select}
   
  } catch (error) {
    console.log(error);
    return {

      payload: "Error",
      
    };
  }
});


const getChecks = createAsyncThunk("getChecks", async (data) => {
  try {
    const res = await axios.get(`http://localhost:8000/api/cities?continent=${data.checks.join("&continent=")}&name=${data.select}`);
    console.log(res)
    
    return {cities:res.data.response,check:data.checks}

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
