import Banner from "../../Components/HomeComponents/Banner/Banner";
import Clients from "../../Components/HomeComponents/Client/Clients";
import Features from "../../Components/HomeComponents/Features";

import Paralax from "../../Components/HomeComponents/Paralax";
import Services from "../../Components/HomeComponents/Services/Services";
import Packages from "../../Components/HomeComponents/Packages/Packages";

import Trainers from "../../Components/HomeComponents/Trainers/Trainers";
import { Helmet } from "react-helmet-async";
import MessengerCustomerChat from 'react-messenger-customer-chat';

// import { Helmet } from "react-helmet";



const Home = () => {
    return (
        <div>
          <Helmet>
            <title>
              Revive || Home
            </title>
          </Helmet>
          <Banner></Banner> 
          <Features></Features> 
          <Services></Services>
          <Packages></Packages>
          <Paralax/>
          <Trainers></Trainers>
          <Clients></Clients>
          
          <MessengerCustomerChat
          pageId="192045557334552"
          appId="766194558744896"
          
        />
        </div>
    );
};

export default Home;