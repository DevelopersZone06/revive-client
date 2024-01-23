import { Outlet } from "react-router-dom/dist";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";


const Root = () => {
    return (
        <div>
            
            <Navbar></Navbar>
            <Outlet>

            </Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;