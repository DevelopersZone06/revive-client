import { IoMdArrowDropright } from "react-icons/io";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { GrContact } from "react-icons/gr";
const ContactTitle = () => {
    return (
        <>
           <div className="flex justify-between px-[2%] sm:px-[5%] lg:px-[8%]">
        <div className="flex items-center my-5 cursor-pointer">
        <h1 className="text-xl font-semibold ">Home </h1>
         <IoMdArrowDropright className="w-[22px]"/>
         <h1 className="text-xl font-semibold text-[#448c74]">Contact Us</h1>
        </div>
        <div className="md:flex gap-5 items-center cursor-pointer hidden ">
        <MdOutlineConnectWithoutContact className="text-3xl"/>
       <GrContact/>
        </div>
        
         </div>
         <hr className="text-[#448c74]"/>   
        </>
    );
};

export default ContactTitle;