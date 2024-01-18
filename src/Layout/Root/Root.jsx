import { Outlet } from "react-router-dom/dist";
import Navbar from "../../Shared/Navbar/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet>

            </Outlet>
            
        </div>
    );
};

export default Root;