import Banner from "../../Components/HomeComponents/Banner";
import Clients from "../../Components/HomeComponents/Client/Clients";
import Features from "../../Components/HomeComponents/Features";
import Packages from "../../Components/HomeComponents/Packages";
import Services from "../../Components/HomeComponents/Services/Services";
import Trainers from "../../Components/HomeComponents/Trainers/Trainers";

import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
          <Banner></Banner> 
          <Features></Features> 
          <Services></Services>
          <Packages></Packages>
          <Trainers></Trainers>
          <Clients></Clients>
            <Footer/>
        </div>
    );
};

export default Home;