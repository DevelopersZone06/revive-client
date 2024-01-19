import Banner from "../../Components/HomeComponents/Banner/Banner";
import Clients from "../../Components/HomeComponents/Client/Clients";
import Features from "../../Components/HomeComponents/Features";
import Packages from "../../Components/HomeComponents/Packages/Packages";

import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
          <Banner></Banner> 
          <Features></Features> 
          <Packages></Packages>
          <Clients></Clients>
            <Footer/>
        </div>
    );
};

export default Home;