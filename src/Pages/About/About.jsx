import { IoMdArrowDropright } from "react-icons/io";
import { IoFitnessOutline } from "react-icons/io5";
import { GrYoga } from "react-icons/gr";
import { GiBoxingGloveSurprise } from "react-icons/gi";

const About = () => {
    return (
       <div>
         <div className="flex justify-around">
       <div className="flex items-center my-5">
       <h1 className="text-xl font-semibold cursor-pointer">Home </h1>
        <IoMdArrowDropright className="w-[22px]"/>
        <h1 className="text-xl font-semibold text-[#9ac339]">About Us</h1>
       </div>
       <div className="flex gap-5 items-center cursor-pointer">
       <IoFitnessOutline className="text-5xl"/>
       <GrYoga/>
<GiBoxingGloveSurprise/>
       </div>
       
        </div>
        <hr />
       </div>
    );
};

export default About;