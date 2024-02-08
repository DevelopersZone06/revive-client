import { Outlet } from "react-router-dom/dist";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import Chat from "../../Components/Chat/Chat";


const Root = () => {
    return (
        <div>
            
            <Navbar></Navbar>
            <Outlet>

            </Outlet>
            <Footer></Footer>
            <Chat/>
        </div>
    );
};

export default Root;