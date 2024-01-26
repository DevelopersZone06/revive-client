import { IoMdArrowDropright } from "react-icons/io";
import { IoFitnessOutline } from "react-icons/io5";
import { GrYoga } from "react-icons/gr";
import { MdOutlineMedicalServices } from "react-icons/md";
import { Link } from "react-router-dom";

const BMIServicesTitle = () => {
  return (
    <>
      <div className="flex justify-between px-[2%] sm:px-[5%] lg:px-[8%]">
        <div className="flex items-center my-5 cursor-pointer">
          <Link to={"/"} className="text-xl font-semibold ">
            Home{" "}
          </Link>
          <IoMdArrowDropright className="w-[22px]" />
          <h1 className="text-xl font-semibold text-[#448c74]">
            BMI Related Services
          </h1>
        </div>
        <div className="md:flex gap-5 items-center cursor-pointer hidden ">
          <MdOutlineMedicalServices></MdOutlineMedicalServices>
          <IoFitnessOutline className="text-5xl" />
          <GrYoga />
        </div>
      </div>
      <hr />
    </>
  );
};

export default BMIServicesTitle;
