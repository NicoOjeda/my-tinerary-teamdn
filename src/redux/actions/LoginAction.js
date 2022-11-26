// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { useDispatch } from "react-redux";



// const initialState = {
//     value: "",
//     name: "",
//     lastName: "",
//     photo: "",
//     age: '',
//     email:'',
//     password:'',
//     online: false,
//     token: "",
// }







// const ingresar = createAsyncThunk("ingresar", async (datos) => {// datos son el objeto q viene del formulario
//     let url = "http://localhost:8000/api/auth/signup"
// try{
//     let user = await axios.post(url,datos)
//     console.log(user.data.response);
//     return{
//         success: true,
//         response: user.data.response
//     }
// }catch(error){
//     console.log(error.message)
//     return{
//         success:false,
//         response: error.response.data.message //datos de valiciond e form,user registrado?verificado ?estos msjs estan en esta linea
//     }
// }

// })

// const salir = createAsyncThunk('salir', async(token) =>{

//     let url = "http://localhost:8000/api/auth/signout"
//     let headers = {headers: {'Authorization': `Bearer ${token}`}}
//     try   {
//         let user = await axios.put(url,null,headers)
//         console.log(user.data)
//         return{
//             success:true,
//             response: user.data.message
//         }

//         }catch (error){
//             console.log(error.response)
//             return{
//                 success: false,
//                 response: error.response.data.message
//             }
//         }
//     }

// ) 
































