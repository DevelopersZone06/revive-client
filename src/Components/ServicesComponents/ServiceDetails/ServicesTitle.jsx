import { IoMdArrowDropright } from "react-icons/io";
import { GrServices } from "react-icons/gr";
import { Link } from "react-router-dom";
const ServicesTitle = () => {
    return (
        <>
            <div className="flex justify-between px-[2%] sm:px-[5%] lg:px-[8%]">
        <div className="flex items-center my-5 cursor-pointer">

        <Link to={'/services'}><h1 className="text-xl font-semibold ">Services</h1></Link>
         <IoMdArrowDropright className="w-[22px]"/>
         <h1 className="text-xl font-semibold text-[#448c74]">Service_Details</h1>
        </div>
        <div className="md:flex gap-5 items-center cursor-pointer hidden ">
        <GrServices className="text-3xl animate-spin"/>
       
        </div>
        
         </div>
         <hr className="text-[#448c74]"/>  
        </>
    );
};

export default ServicesTitle;