import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import RevoCalendar from "revo-calendar";
import EventPopup from "./EventPopup";

const Contact = () => {
  const initialEvents = [
{
      name: "Reservation",
      date: '2024-02-14',
      extra: {
        icon: "M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09           4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z",
        text: "7 People",
      },
    },
    {
      name: "Reservation",
      date: '2024-02-18',
      extra: {
        icon: "M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09           4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z",
        text: "1 People",
      },
    },
  ];

  const [events, setEvents] = useState(() => {
    // Retrieve events from local storage if available, otherwise use initialEvents
    const storedEvents = localStorage.getItem("events");
    return storedEvents ? JSON.parse(storedEvents) : initialEvents;
  });

  useEffect(() => {
    // Save events to local storage whenever events change
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleAddEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <>
      <Helmet>
        <title>Doctor_Portal | Contact Us</title>
      </Helmet>
      <div>
      <EventPopup onAddEvent={handleAddEvent} />
        <RevoCalendar  events={events} />
        
       
      </div>
    </>
  );
};



export default Contact;