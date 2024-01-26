const EventCard = ({ event }) => {
  return (
    <>
      <div className="relative rounded-[15px] mt-20 service-card">
        <img
          src={event?.image}
          alt=""
          className="w-full h-[380px] rounded-[15px]"
        />
        <div className="w-full h-full absolute top-0 bg-[#0000008e] rounded-[15px] pl-12 pt-20 service-content">
          <h1 className="text-white text-4xl font-bold service-title">
            {event?.title}
          </h1>
          <div className="pt-8 mt-28 service-des">
            <p className="text-lg hidden">{event?.description}</p>
            <button className="text-xl hidden uppercase font-semibold tracking-widest mt-8">
              More Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
