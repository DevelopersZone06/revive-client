// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet-async";
import EventCard from "./EventCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Events = () => {
  // const eventData = [
  //   {
  //     id: 1,
  //     title: "Fitness Fusion Workshop",
  //     date: "2024-02-15",
  //     image: "https://i.ibb.co/YBWZGqM/2150847945.jpg",
  //     time: "10:00 AM - 2:00 PM",
  //     location: "Wellness Center",
  //     description:
  //       "Join us for an energizing workshop that combines various fitness techniques, including yoga, cardio, and strength training. Suitable for all fitness levels!",
  //   },
  //   {
  //     id: 2,
  //     title: "Nutrition and Wellness Seminar",
  //     date: "2024-03-10",
  //     image: "https://i.ibb.co/VCRVvQW/72412-1.jpg",
  //     time: "3:00 PM - 5:00 PM",
  //     location: "Health Hub",
  //     description:
  //       "Learn about the importance of nutrition in achieving your fitness goals. Our expert nutritionist will provide valuable insights and answer your questions.",
  //   },
  //   {
  //     id: 3,
  //     title: "Mindful Meditation Retreat",
  //     date: "2024-04-20",
  //     image: "https://i.ibb.co/m8zxVGx/2150847963.jpg",
  //     time: "9:00 AM - 4:00 PM",
  //     location: "Serene Spa Retreat",
  //     description:
  //       "Take a day to relax and rejuvenate with our mindfulness meditation retreat. Experience inner peace and enhance your mental well-being.",
  //   },
  //   {
  //     id: 4,
  //     title: "5K Charity Run for Health",
  //     date: "2024-05-08",
  //     image:
  //       "https://i.ibb.co/yg10Mg5/portrait-smiling-young-male-athlete-standing-race-track.jpg",
  //     time: "8:00 AM - 11:00 AM",
  //     location: "City Park",
  //     description:
  //       "Participate in our annual charity run to support health initiatives. Lace up your sneakers, get active, and contribute to a healthier community.",
  //   },
  //   {
  //     id: 5,
  //     title: "Fitness Fusion Workshop",
  //     date: "2024-02-15",
  //     image: "https://i.ibb.co/YBWZGqM/2150847945.jpg",
  //     time: "10:00 AM - 2:00 PM",
  //     location: "Wellness Center",
  //     description:
  //       "Join us for an energizing workshop that combines various fitness techniques, including yoga, cardio, and strength training. Suitable for all fitness levels!",
  //   },
  //   {
  //     id: 4,
  //     title: "Mindful Meditation Retreat",
  //     date: "2024-04-20",
  //     image: "https://i.ibb.co/m8zxVGx/2150847963.jpg",
  //     time: "9:00 AM - 4:00 PM",
  //     location: "Serene Spa Retreat",
  //     description:
  //       "Take a day to relax and rejuvenate with our mindfulness meditation retreat. Experience inner peace and enhance your mental well-being.",
  //   },
  // ];
  const [eventData,setEventData] = useState([])

  useEffect( () => {
    axios('https://revive-server-dun.vercel.app/events')
    .then(res => {
      setEventData(res.data)
    })
  }, [])
  console.log(eventData);
  return (
    <div>
      <Helmet>
        <title>Revive | Events</title>
      </Helmet>
      {/* <EventsTitle /> */}
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  my-14 gap-5 px-[2%] sm:px-[5%] lg:px-[8%] ">
        {eventData?.map((event) => (
          <EventCard key={event.id} event={event}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default Events;
