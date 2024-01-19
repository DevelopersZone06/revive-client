import Banner from "../../Components/HomeComponents/Banner";
import Clients from "../../Components/HomeComponents/Client/Clients";
import Features from "../../Components/HomeComponents/Features";
import Packages from "../../Components/HomeComponents/Packages";
import Paralax from "../../Components/HomeComponents/Paralax";
import Trainers from "../../Components/HomeComponents/Trainers/Trainers";

import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
          <Banner></Banner> 
          <Features></Features> 
          <Packages></Packages>
          <Paralax/>
          <Trainers></Trainers>
          <Clients></Clients>
            <Footer/>
        </div>
    );
};

export default Home;