import { Link } from "react-router-dom";


const EventCard = ({event}) => {
    const {_id} = event;

    return (
        <div className="mx-auto px-6">
         <Link to={`/eventDetails/${_id}`}> <div className="text-center space-y-3 cursor-pointer ">
                <img src={event?.image} alt="" className="rounded transition delay-150 duration-300 ease-in-out hover:scale-95 hover:opacity-80 w-[364px] h-[243px] block mx-auto" />
              
                <h2 className="text-xl font-semibold text-[#448c74] hover:text-black">{event?.title}</h2>
                <p className="text-wrap py-3">{event?.description}</p>
                
              </div>  </Link>
        </div>
    );
};

export default EventCard;
