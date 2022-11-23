import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import AutoToTop from "../components/AutoToTop";


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