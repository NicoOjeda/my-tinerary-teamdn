import React from "react";
import "../styles/navbar.css";
import "./Home1";
import { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import Burguer from "./Burguer";
// import LoginActions from '../redux/actions/LoginAction'


// const pages = [
//   { name: 'Home', to: '/'},
//   { name: 'Ingresar', to: 'signup'}
// ]
// const onlinePages = [
//   ...pages, 
//   { name: 'NewPerfil', to: '/nuevo-perfil'},
//   { name: 'Ingresar', to: '/ingresar'}

// ]


export default function Navbar() {
  let [viewHide, setViewHide] = useState(false);
  let hide = () => {
    setViewHide(!viewHide); //viewHide = mostrarOcultar
    // console.log(viewHide);
  };







//   let { online,token} = useSelector(store => store.usuario)
//   let dispatch = useDispatch()
//   let { salir } = LoginAction 

//   async function cerrarSesion(event) {
//     let res = await dispatch(salir(token))
//     console.log(res)

//   }

// const link = (page) => <LinkRouter className="'NavBar-link "  to={page.to} key={page.name}>{page.name}</LinkRouter>






  return (
    <div className="nav-container1">
      <div className="nav-container">
        <Burguer></Burguer>
        {viewHide ? (
          <>
            <div className="icon-login">
              <img
                className="logo2"
                src="/img/user.svg"
                alt="accountIcon"
                onClick={hide}
              />
              
              <LinkRouter to="/SignUp">
                <button className="btn-signin">SignUp</button>
              </LinkRouter>
              <LinkRouter to="/signin">
                <button className="btn-Login">Login</button>
              </LinkRouter>
            </div>
          </>
        ) : (
          <>
            <img
              className="logo2"
              src="/img/user.svg"
              alt="accountIcon"
              onClick={hide}
            />
          </>
        )}
      </div>
    </div>
  );
}
