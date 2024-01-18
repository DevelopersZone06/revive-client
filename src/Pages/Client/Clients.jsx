import { useEffect } from "react";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import Client from "../Client/Client";


const Clients = () => {
    const [client, setClient] = useState([]);
    useEffect(()=>{
        fetch('/client.json')
        .then(res=>res.json())
        .then(data=>setClient(data))
    },[])
    return (
        <div>
            <p className="mt-10 text-4xl font-semibold text-center">Our Happy Clients</p>
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