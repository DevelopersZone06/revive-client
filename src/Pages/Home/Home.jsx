import Banner from "../../Components/HomeComponents/Banner";
import Features from "../../Components/HomeComponents/Features";
import Packages from "../../Components/HomeComponents/Packages";

import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
          <Banner></Banner> 
          <Features/> 
          <Packages></Packages>

            <h1>this is home</h1>
            <Footer/>
        </div>
    );
};

export default Home;