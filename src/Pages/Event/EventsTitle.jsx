import { MdOutlineEventRepeat } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
const EventsTitle = () => {
    return (
        <>
            <div className="flex justify-between px-[2%] sm:px-[5%] lg:px-[8%]">
        <div className="flex items-center my-5 cursor-pointer">
        <h1 className="text-xl font-semibold ">Home </h1>
         <IoMdArrowDropright className="w-[22px]"/>
         <h1 className="text-xl font-semibold text-[#448c74]">Events</h1>
        </div>
        <div className="md:flex gap-5 items-center cursor-pointer hidden ">
        <MdOutlineEventRepeat className="text-3xl"/>
       
        </div>
        
         </div>
         <hr className="text-[#448c74]"/> 
        </>
    );
};

export default EventsTitle;