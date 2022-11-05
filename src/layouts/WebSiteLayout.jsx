import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import AutoToTop from "../components/AutoToTop";
import { useEffect } from "react";

function WebSiteLayout(props) {
    return (
        <>
        
            <Navbar />
            {props.children}
            <Footer/>
            <AutoToTop/>


        </>
    )
}
export default WebSiteLayout