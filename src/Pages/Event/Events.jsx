// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet-async";
import EventCard from "./EventCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Title from "../../Shared/Title";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Events = () => {
  
  const [eventData,setEventData] = useState([])
  const axiosPublic = useAxiosPublic()

  useEffect( () => {
    axiosPublic('/events')
    .then(res => {
      setEventData(res.data)
    })
  }, [])
  console.log(eventData);
  return (
    <div className="py-20 px-[2%] sm:px-[5%] lg:px-[8%]">
      <Helmet>
        <title>Revive | Events</title>
      </Helmet>
      {/* <EventsTitle /> */}
      <Title subHeading={'Our Events'} heading={'Watch Our Exclusive Events'}   ></Title>
      <div   className="grid bg-gradient-to-r from-cyan-900 to-cyan-600 lg:grid-cols-3 grid-cols-1 md:grid-cols-2 py-20  my-14 gap-5 px-[2%] sm:px-[5%] lg:px-[8%] ">
        {eventData?.map((event) => (
          <EventCard key={event.id} event={event}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default Events;
