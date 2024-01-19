import Banner from "../../Components/HomeComponents/Banner/Banner";
import Clients from "../../Components/HomeComponents/Client/Clients";
import Features from "../../Components/HomeComponents/Features";

import Paralax from "../../Components/HomeComponents/Paralax";
import Services from "../../Components/HomeComponents/Services/Services";
import Packages from "../../Components/HomeComponents/Packages/Packages";

import Trainers from "../../Components/HomeComponents/Trainers/Trainers";

import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
          <Banner></Banner> 
          <Features></Features> 
          <Services></Services>
          <Packages></Packages>
          <Paralax/>
          <Trainers></Trainers>
          <Clients></Clients>
            <Footer/>
        </div>
    );
};

export default Home;