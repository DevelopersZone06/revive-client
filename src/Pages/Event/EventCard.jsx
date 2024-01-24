

const EventCard = ({event}) => {
    return (
        <>
          <div className="text-center space-y-3 cursor-pointer ">
                <img src={event?.image} alt="" className="rounded transition delay-150 duration-300 ease-in-out hover:scale-95 hover:opacity-80" />
              
                <h2 className="text-xl font-semibold text-[#448c74] hover:text-black">{event?.title}</h2>
                <p className="text-wrap py-3">{event?.description}</p>
                
              </div>  
        </>
    );
};

export default EventCard;