import { Link } from "react-router-dom";


const EventCard = ({event}) => {
    const {_id} = event;

    return (
        <div className="mx-auto bg-white rounded-b-lg">
         <Link to={`/eventDetails/${_id}`}> <div className="text-center space-y-3 cursor-pointer ">
                <img src={event?.image} alt="" className="rounded transition delay-150 duration-300 ease-in-out hover:scale-95 hover:opacity-80 w-full  h-[243px] block mx-auto" />
              
               <div className="p-8 text-center ">
               <h2 className="text-xl font-semibold text-center text-black   hover:text-sky-800">{event?.title}</h2>
               <p className="text-wrap py-3 text-center">{event?.description}</p>
               </div>
                
              </div>  </Link>
        </div>
    );
};

export default EventCard;
