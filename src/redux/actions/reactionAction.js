import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert";
import { BASE_URL } from "../../api/url";
const getReaction = createAsyncThunk("getReaction", async (data) => {
    try{
    const response = await axios.get(`${BASE_URL}/api/reactions?${data.type}=${data.eventid}`);
    return {
        success: true,
        response: response.data,
        reqId: response.data.id
    };
    } catch(error){ 
        return {
        success: false,
        response: error.response.data.data,
        }
    }
});
const getUserReactions = createAsyncThunk("getUserReactions", async ({token,id}) => {
    console.log(token ,id)
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    try{
    const response = await axios.get(`${BASE_URL}/api/reactions?userId=${id}`, headers);
    return {
        success: true,
        response: response.data.data,
    };
    } catch(error){
        return {
        success: false,
        response: error.response.data.data,
        }
    }
});
const updateReaction = createAsyncThunk("updateReaction", async ( datos ) => {
    let headers = { headers: { Authorization: `Bearer ${datos.token}` } };    try {
        const response = await axios.put(`${BASE_URL}/api/reactions?${datos.type}=${datos.id}&name=${datos.name}`,null, headers);
        return response.data.response;
    }
    catch (error) {
        
        swal({
            title: "Sign in/up for do this",
            text:  "This is just for login user, please create a account o login for reaction",
            icon: "warning",
            timer: "3000"
        })
        return {
            payload: 'An error has ocurred'
        }
    }
});
const deleteReaction = createAsyncThunk("deleteReaction", async ( {id, token }) => {
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    console.log(id);
    try {
        const response = await axios.put(`${BASE_URL}/api/reactions/${id}`, null, headers);
        return response.data.response;
    }
    catch (error) {
        console.log(error)
        return {    
            payload: 'An error has ocurred'
        }
    }
});

const reactionActions = {
    getReaction,
    getUserReactions,
    updateReaction,
    deleteReaction
}

export default reactionActions;