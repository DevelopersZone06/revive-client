import { useEffect } from "react";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import Client from "./Client";
import Title from "../../../Shared/Title";


const Clients = () => {
    const [client, setClient] = useState([]);
    useEffect(()=>{
        fetch('/client.json')
        .then(res=>res.json())
        .then(data=>setClient(data))
    },[])
    return (
        <div className="primary-bg py-28">
            <Title heading={'Our Happy Clients'} subHeading={'Clients Review'}></Title>
            <Marquee>
                
            <div className="flex mt-10 gap-10">
                
            {
                client.map(element=><Client key={element.id} client={element}></Client>)
            }
            </div>
            </Marquee>



        </div>
    );
};

export default Clients;