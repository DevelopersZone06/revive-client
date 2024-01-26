import EventCard from "./EventCard";
import EventsTitle from "./EventsTitle";


const Events = () => {
  const eventData = [
    {
      id: 1,
      image: 'https://i.ibb.co/m6d1mrf/people-fitness-class-gym.jpg',
      title: 'Fitness Fusion Workshop',
      description: 'Join us for a dynamic workshop that combines various fitness disciplines, from high-intensity interval training to yoga. Experience a fusion of workouts to elevate your fitness routine and achieve holistic well-being.'

    },
    {
      id: 2,
      image: 'https://i.ibb.co/dKbvStQ/woman-doing-sport-with-stats-side-view.jpg',
      title: 'Mindful Marathon Challenge',
      description: 'Embark on a mindful journey with our virtual marathon challenge. Run or walk at your own pace, focusing on mental and physical wellness. Connect with the global fitness community and celebrate your achievements together.'

    },
    {
      id: 3,
      image: 'https://i.ibb.co/cbDKbX1/teenager-shaking-hair-while-performing-splitsr.jpg',
      title: 'Strength and Stretch Retreat',
      description: 'Escape to a weekend retreat focused on building strength and enhancing flexibility. Engage in empowering workouts, yoga sessions, and mindfulness activities surrounded by nature. Rediscover your body potential.'

    },
    {
      id: 4,
      image: 'https://i.ibb.co/4Z7zcXR/cheerful-people-with-yoga-mats-chatting-laughing.jpg',
      title: 'Wellness Warriors Bootcamp',
      description: 'Join our intensive bootcamp designed to transform you into a wellness warrior. Push your limits with high-energy workouts, nutritional guidance, and motivational coaching. Unleash the best version of yourself.'

    },
    {
      id: 5,
      image: 'https://i.ibb.co/QCN7qgL/fitness-body-builder-challenge.jpg',
      title: 'Healthy Habits Challenge',
      description: 'Kickstart a healthier lifestyle with our month-long challenge. Develop sustainable habits through fitness routines, nutritional tips, and lifestyle changes. Achieve small victories that lead to long-term well-being.'

    },
    {
      id: 6,
      image: 'https://i.ibb.co/yWx2WPt/full-shot-fit-people-training-outdoors.jpg',
      title: 'Fitness Fiesta Social',
      description: 'Get ready to dance, sweat, and socialize at our Fitness Fiesta! Enjoy a lively atmosphere with dance workouts, fitness challenges, and healthy refreshments. Bring your friends and make fitness a celebration.'

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