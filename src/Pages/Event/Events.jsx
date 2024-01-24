import EventCard from "./EventCard";
import EventsTitle from "./EventsTitle";


const Events = () => {
  const eventData = [
    {
      id: 1,
      image: 'https://template.unicoderbd.com/unifit/images/event/event1.jpg',
      title: 'Reunion With Our X Student',
      description: 'Vulputate vitae eget vehicula nam ullamcorper nascetur lacus cubilia urna.'

    },
    {
      id: 2,
      image: 'https://template.unicoderbd.com/unifit/images/event/event2.jpg',
      title: 'Reunion With Our X Student',
      description: 'Vulputate vitae eget vehicula nam ullamcorper nascetur lacus cubilia urna.'

    },
    {
      id: 3,
      image: 'https://template.unicoderbd.com/unifit/images/event/event3.jpg',
      title: 'compitition for resling',
      description: 'Vulputate vitae eget vehicula nam ullamcorper nascetur lacus cubilia urna.'

    },
    {
      id: 4,
      image: 'https://template.unicoderbd.com/unifit/images/event/event4.jpg',
      title: 'compitition for resling',
      description: 'Vulputate vitae eget vehicula nam ullamcorper nascetur lacus cubilia urna.'

    },
    {
      id: 5,
      image: 'https://template.unicoderbd.com/unifit/images/event/event1.jpg',
      title: 'Reunion With Our X Student',
      description: 'Vulputate vitae eget vehicula nam ullamcorper nascetur lacus cubilia urna.'

    },
    {
      id: 2,
      image: 'https://template.unicoderbd.com/unifit/images/event/event2.jpg',
      title: 'Reunion With Our X Student',
      description: 'Vulputate vitae eget vehicula nam ullamcorper nascetur lacus cubilia urna.'

    }
  ]
  return (
    <div>
      <EventsTitle />
      <div className="grid grid-cols-3 my-14 gap-5 px-[2%] sm:px-[5%] lg:px-[8%]">
        {
          eventData?.map(event => <EventCard key={event.id} event={event}></EventCard>)
        }

      </div>
    </div>
  );
};

export default Events;