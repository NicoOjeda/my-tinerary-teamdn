import React, { useEffect } from "react";
import "../styles/burguer.css";
import "../styles/navbar.css";
// import { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import tokenAction from "../redux/actions/tokenAction";

export default function Burguer() {
  const user = useSelector(store => store.users)
  
  const tokenList = useSelector(store => store.tokenReducer.tokenList)
  // console.log(user.role);
   let dispatch = useDispatch()
  
  let token=""
  
  if(JSON.parse(localStorage.getItem('token'))){
    token = JSON.parse(localStorage.getItem('token'))
    token = token.token.user
  }
  
  useEffect(()=>{
    dispatch(tokenAction.getToken(token))
  },[token])


  return (
    <>
      <div className="nav burger-desktop">
                  {(user.logged && user.role === "admin") ?(
                  <>
                    <LinkRouter to="/" className="nav-link">Home</LinkRouter>
                    <LinkRouter to="/Cities" className="nav-link">Cities</LinkRouter>
                    <LinkRouter to="/hotels" className="nav-link">Hotels</LinkRouter>
                    <LinkRouter to="/myhotels" className="nav-link">My Hotels</LinkRouter>
                    <LinkRouter to="/mycities" className="nav-link">My Cities</LinkRouter>
                    <LinkRouter to="/newreaction" className="nav-link">New Reaction</LinkRouter>
                  </>
                  ) : (user.logged && user.role === "user") ? (
                  <>           
                    <LinkRouter to="/" className="nav-link">Home</LinkRouter>
                    <LinkRouter to="/Cities" className="nav-link">Cities</LinkRouter>
                    <LinkRouter to="/hotels" className="nav-link">Hotels</LinkRouter>
                    <LinkRouter to="/myitineraries" className="nav-link">My Itineraries</LinkRouter>
                    <LinkRouter to="/myshows" className="nav-link">My Shows</LinkRouter>
                    <LinkRouter  to="/myreactions" className="nav-link">My Reaction</LinkRouter>
                  </>
                  ) : (
                    <>
                    <LinkRouter to="/" className="nav-link">Home</LinkRouter>
                    <LinkRouter to="/Cities" className="nav-link">Cities</LinkRouter>
                    <LinkRouter to="/hotels" className="nav-link">Hotels</LinkRouter>
                    </>
                  )}
      </div>       
      <div className="dropdown burger-menu icon-login">
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {(user.logged && user.role === "admin") ?(
                  <>
                    <li><LinkRouter to="/" className="dropdown-item">Home</LinkRouter></li>
                    <li><LinkRouter to="/Cities" className="dropdown-item">Cities</LinkRouter></li>
                    <li><LinkRouter to="/hotels" className="dropdown-item">Hotels</LinkRouter></li>
                    <li><LinkRouter to="/myhotels" className="dropdown-item">My Hotels</LinkRouter></li>
                    <li><LinkRouter to="/mycities" className="dropdown-item">My Cities</LinkRouter></li>
                    <li><LinkRouter to="/newreaction" className="dropdown-item">New Reaction</LinkRouter></li>
                  </>
                  ) : (user.logged && user.role === "user") ? (
                  <>           
                  <li><LinkRouter to="/" className="dropdown-item">Home</LinkRouter></li>
                  <li><LinkRouter to="/Cities" className="dropdown-item">Cities</LinkRouter></li>
                  <li><LinkRouter to="/hotels" className="dropdown-item">Hotels</LinkRouter></li>
                  <li><LinkRouter to="/myitineraries" className="dropdown-item">My Itineraries</LinkRouter></li>
                  <li><LinkRouter to="/myshows" className="dropdown-item">My Shows</LinkRouter></li>
                  <li><LinkRouter  to="/myreactions" className="dropdown-item">My Reaction</LinkRouter></li>
                  </>
                  ) : (
                    <>
                    <li><LinkRouter to="/" className="dropdown-item">Home</LinkRouter></li>
                    <li><LinkRouter to="/Cities" className="dropdown-item">Cities</LinkRouter></li>
                    <li><LinkRouter to="/hotels" className="dropdown-item">Hotels</LinkRouter></li>
                    </>
                  )}
            </ul>
      </div> 
    </>
  );
}

// <>
//       <img className="logo1" src="https://i.imgur.com/lGiu6NV.png" alt="" />
//         <div className="nav-container">
//           {(user.logged && user.role === "admin") ?(
//           <>
//             <LinkRouter to="/">
//               <button className="nav-2">Home</button>
//             </LinkRouter>
//             <LinkRouter to="/Cities">
//               <button className="nav-2">Cities</button>
//             </LinkRouter>
//             <LinkRouter to="/hotels">
//               <button className="nav-2">Hotels</button>
//             </LinkRouter>
//             <LinkRouter to="/myhotels">
//               <button className="nav-2">My Hotels</button>
//             </LinkRouter>
//             <LinkRouter to="/mycities">
//               <button className="nav-2">My Cities</button>
//             </LinkRouter>
//             <LinkRouter to="/newreaction">
//               <button className="nav-2">New Reaction</button>
//             </LinkRouter>
//           </>
//           ) : (user.logged && user.role === "user") ? (
//           <>           
//             <LinkRouter to="/">
//               <button className="nav-1">Home</button>
//             </LinkRouter>
//             <LinkRouter to="/Cities">
//               <button className="nav-2">Cities</button>
//             </LinkRouter>
//             <LinkRouter to="/hotels">
//               <button className="nav-2">Hotels</button>
//             </LinkRouter>
//             <LinkRouter to="/myitineraries">
//               <button className="nav-2">My Itineraries</button>
//             </LinkRouter>
//             <LinkRouter to="/myshows">
//               <button className="nav-2">My Shows</button>
//             </LinkRouter>
//             <LinkRouter  to="/myreactions">
//               <button className="nav-2">My Reaction</button>
//             </LinkRouter>
//           </>
//           ) : (
//             <>
//               <LinkRouter to="/">
//                 <button className="nav-1">Home</button>
//               </LinkRouter>
//               <LinkRouter to="/Cities">
//                 <button className="nav-2">Cities</button>
//               </LinkRouter>
//               <LinkRouter to="/hotels">
//                 <button className="nav-2">Hotels</button>
//               </LinkRouter>
//             </>
//           )}

//           {
//             user.logged?(<>

//               {user.role === "admin"? (<>
//             {viewHide ?
//               (<>
//                 <div className="burguer-container">
//                   <img
//                     className="burguer-img"
//                     src="https://cdn-icons-png.flaticon.com/512/7134/7134106.png"
//                     alt="burguer foto"
//                     onClick={hide}
//                   />
//                   <LinkRouter to="/">
//                     <button className="btn-burguer">Home</button>
//                   </LinkRouter>
//                   <LinkRouter to="/Cities">
//                     <button className="btn-burguer">Cities</button>
//                   </LinkRouter>
//                   <LinkRouter to="/Hotels">
//                     <button className="btn-burguer">Hotels</button>
//                   </LinkRouter>
//                   <LinkRouter to="/myhotels">
//                     <button className="btn-burguer">My Hotels</button>
//                   </LinkRouter>
//                   <LinkRouter  to="/mycities">
//                     <button className="btn-burguer">My Cities</button>
//                   </LinkRouter>
//                   <LinkRouter  to="/NewCity">
//                     <button className="btn-burguer">New City</button>
//                   </LinkRouter>        
//                 </div>
//               </>

//               ) : (
//                 <>
//                   <img
//                     className="burguer-img "
//                     src="https://cdn-icons-png.flaticon.com/512/7134/7134106.png"
//                     alt="burguerIcon"
//                     onClick={hide}
//                   />
//                 </>
//               )}
//           </>) :  (<>
//            {viewHide ?

//               (<>
//                 <div className="burguer-container">
//                   <img
//                     className="burguer-img"
//                     src="https://cdn-icons-png.flaticon.com/512/7134/7134106.png"
//                     alt="burguer foto"
//                     onClick={hide}
//                   />
//                   <LinkRouter to="/">
//                     <button className="btn-burguer">Home</button>
//                   </LinkRouter>
//                   <LinkRouter to="/Cities">
//                     <button className="btn-burguer">Cities</button>
//                   </LinkRouter>
//                   <LinkRouter to="/Hotels">
//                     <button className="btn-burguer">Hotels</button>
//                   </LinkRouter>
//                   <LinkRouter to="/myitineraries">
//                     <button className="btn-burguer">My Itineraries</button>
//                   </LinkRouter>
//                   <LinkRouter to="/myshows">
//                     <button className="btn-burguer">My Shows</button>
//                   </LinkRouter>
//                   <LinkRouter  to="/myreactions">
//                     <button className="btn-burguer">My Reaction</button>
//                   </LinkRouter>
//                 </div>
//               </>
//               ) : (
//                 <>
//                   <img
//                     className="burguer-img "
//                     src="https://cdn-icons-png.flaticon.com/512/7134/7134106.png"
//                     alt="burguerIcon"
//                     onClick={hide}
//                   />
//                 </>
//               )}
//           </>)}

//             </>):(<>
//               {viewHide ?
//               (<>
//                 <div className="burguer-container">
//                   <img
//                     className="burguer-img"
//                     src="https://cdn-icons-png.flaticon.com/512/7134/7134106.png"
//                     alt="burguer foto"
//                     onClick={hide}
//                   />
//                   <LinkRouter to="/">
//                     <button className="btn-burguer">Home</button>
//                   </LinkRouter>
//                   <LinkRouter to="/Cities">
//                     <button className="btn-burguer">Cities</button>
//                   </LinkRouter>
//                   <LinkRouter to="/Hotels">
//                     <button className="btn-burguer">Hotels</button>
//                   </LinkRouter>
//                 </div>
//               </>

//               ) : (
//                 <>
//                   <img
//                     className="burguer-img "
//                     src="https://cdn-icons-png.flaticon.com/512/7134/7134106.png"
//                     alt="burguerIcon"
//                     onClick={hide}
//                   />
//                 </>
//               )}
//             </>)
//           }
//         </div>
//     </>


