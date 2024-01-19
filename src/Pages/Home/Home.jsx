import Banner from "../../Components/HomeComponents/Banner/Banner";
import Clients from "../../Components/HomeComponents/Client/Clients";
import Features from "../../Components/HomeComponents/Features";
<<<<<<< HEAD
import Packages from "../../Components/HomeComponents/Packages";
import Paralax from "../../Components/HomeComponents/Paralax";
=======
import Services from "../../Components/HomeComponents/Services/Services";
import Packages from "../../Components/HomeComponents/Packages/Packages";

>>>>>>> 4d548ccdfc11de5875437a6c184c5ad630998a73
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