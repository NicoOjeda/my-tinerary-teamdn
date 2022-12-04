import React, { useEffect } from "react";
import "../styles/burguer.css";
import "../styles/navbar.css";
import { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import tokenAction from "../redux/actions/tokenAction";

export default function Burguer() {
  const btn = "Home";
  const btn2 = "Cities";
  const btn3 = "Hotels";
  const btn4 = "MyItineraries"
  const btn5 = "myshows"
  const btn6 = "MyTynerariesCreate"
  const btn7 = "My Hotels"
  const user = useSelector(store => store.users)
  


  let [viewHide, setViewHide] = useState(false);
  let hide = () => {
    setViewHide(!viewHide);//viewHide = mostrarOcultar

    console.log(viewHide)

  };
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

      <img className="logo1" src="https://i.imgur.com/lGiu6NV.png" alt="" />
      <div className="nav-container1">
        <div className="nav-container">

          {(user.logged && user.role === "admin") ?(<>
            <div className="nav-0">
            <LinkRouter to="/">
              <button className="nav-2">{btn}</button>
            </LinkRouter>
            <LinkRouter to="/Cities">
              <button className="nav-2"> {btn2}</button>
            </LinkRouter>
            <LinkRouter to="/hotels">
              <button className="nav-2"> {btn3}</button>
            </LinkRouter>
            <LinkRouter to="/myhotels">
              <button className="nav-2"> {btn7}</button>
            </LinkRouter>
            <LinkRouter to="/mycities">
              <button className="nav-2"> My cities</button>
            </LinkRouter>
            <LinkRouter to="/NewCity">
              <button className="nav-2"> New City</button>
            </LinkRouter>
            <LinkRouter to="/myreactions">
              <button className="nav-2"> My Reactions</button>
            </LinkRouter>
            <LinkRouter to="/newreaction">
              <button className="nav-2"> New Reaction</button>
            </LinkRouter>


          </div>
          </>) : (user.logged && user.role === "user") ? (<>
            <div className="nav-0">
            <LinkRouter to="/">
              <button className="nav-1">{btn}</button>
            </LinkRouter>
            <LinkRouter to="/Cities">
              <button className="nav-2"> {btn2}</button>
            </LinkRouter>
            <LinkRouter to="/hotels">
              <button className="nav-2"> {btn3}</button>
            </LinkRouter>
            <LinkRouter to="/myitineraries">
              <button className="nav-2"> {btn4}</button>
            </LinkRouter>
            <LinkRouter to="/myshows">
              <button className="nav-2"> {btn5}</button>
            </LinkRouter>
            <LinkRouter to="/MyTynerariesCreate">
              <button className="nav-2"> {btn6}</button>
            </LinkRouter>
            <LinkRouter  to="/myreactions">
            
                    <button className="btn-burguer-3">
                    My Reaction
                    </button>
                  </LinkRouter>
                  <LinkRouter to="/mycities">
              <button className="nav-2"> My cities</button>
            </LinkRouter>
                  <LinkRouter  to="/NewReaction">
                    <button className="btn-burguer-3">
                    New Reaction
                    </button>
                  </LinkRouter>

          </div>
          </>) : (
            <div className="nav-0">
            <LinkRouter to="/">
              <button className="nav-1">{btn}</button>
            </LinkRouter>
            <LinkRouter to="/Cities">
              <button className="nav-2"> {btn2}</button>
            </LinkRouter>
            <LinkRouter to="/hotels">
              <button className="nav-2"> {btn3}</button>
            </LinkRouter>
            {/* <LinkRouter to="/mycities">
              <button className="nav-2"> My cities</button>
            </LinkRouter>
             */}
          </div>
          )}

          {
            user.logged?(<>

              {user.role === "admin"? (<>
            {viewHide ?
              (<>
                <div className="burguer-container">
                  <img
                    className="burguer-img"
                    src="https://cdn-icons-png.flaticon.com/512/7134/7134106.png"
                    alt="burguer foto"
                    onClick={hide}
                  />
                  <LinkRouter to="/">
                    <button className="btn-burguer-1">
                      Home
                    </button>
                  </LinkRouter>
                  <LinkRouter to="/Cities">
                    <button className="btn-burguer-2">
                      Cities
                    </button>
                  </LinkRouter>
                  <LinkRouter to="/Hotels">
                    <button className="btn-burguer-3">
                      Hotels
                    </button>
                  </LinkRouter>
                  <LinkRouter to="/myhotels">
                    <button className="btn-burguer-3">
                    {btn7}
                    </button>
                  </LinkRouter>
                  <LinkRouter  to="/mycities">
                    <button className="btn-burguer-3">
                    My cities
                    </button>
                  </LinkRouter>
                  <LinkRouter  to="/NewCity">
                    <button className="btn-burguer-3">
                    New City
                    </button>
                  </LinkRouter>
                
                </div>
              </>

              ) : (
                <>
                  <img
                    className="burguer-img "
                    src="https://cdn-icons-png.flaticon.com/512/7134/7134106.png"
                    alt="burguerIcon"
                    onClick={hide}
                  />
                </>
              )}
          </>) :  (<>
           {viewHide ?

              (<>
                <div className="burguer-container">
                  <img
                    className="burguer-img"
                    src="https://cdn-icons-png.flaticon.com/512/7134/7134106.png"
                    alt="burguer foto"
                    onClick={hide}
                  />
                  <LinkRouter to="/">
                    <button className="btn-burguer-1">
                      Home
                    </button>
                  </LinkRouter>
                  <LinkRouter to="/Cities">
                    <button className="btn-burguer-2">
                      Cities
                    </button>
                  </LinkRouter>
                  <LinkRouter to="/Hotels">
                    <button className="btn-burguer-3">
                      Hotels
                    </button>
                  </LinkRouter>
                  <LinkRouter to="/myitineraries">
                    <button className="btn-burguer-1"> {btn4}</button>
                  </LinkRouter>
                  <LinkRouter to="/myshows">
                    <button className="btn-burguer-1"> {btn5}</button>
                  </LinkRouter>
                  <LinkRouter to="/MyTynerariesCreate">
                    <button className="btn-burguer-1"> {btn6}</button>
                  </LinkRouter>

                </div>
              </>

              ) : (
                <>
                  <img
                    className="burguer-img "
                    src="https://cdn-icons-png.flaticon.com/512/7134/7134106.png"
                    alt="burguerIcon"
                    onClick={hide}
                  />
                </>
              )}
          
          </>)}




            </>):(<>
              {viewHide ?
              (<>
                <div className="burguer-container">
                  <img
                    className="burguer-img"
                    src="https://cdn-icons-png.flaticon.com/512/7134/7134106.png"
                    alt="burguer foto"
                    onClick={hide}
                  />
                  <LinkRouter to="/">
                    <button className="btn-burguer-1">
                      Home
                    </button>
                  </LinkRouter>
                  <LinkRouter to="/Cities">
                    <button className="btn-burguer-2">
                      Cities
                    </button>
                  </LinkRouter>
                  <LinkRouter to="/Hotels">
                    <button className="btn-burguer-3">
                      Hotels
                    </button>
                  </LinkRouter>

                </div>
              </>

              ) : (
                <>
                  <img
                    className="burguer-img "
                    src="https://cdn-icons-png.flaticon.com/512/7134/7134106.png"
                    alt="burguerIcon"
                    onClick={hide}
                  />
                </>
              )}


            </>)
          }


          


        </div>
      </div>

    </>
  );
}




