import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const TrainerDetailTitle = () => {
  return (
    <>
      <div className="flex justify-between px-[2%] sm:px-[5%] lg:px-[8%]">
        <div className="flex items-center my-5 cursor-pointer">
          <Link to={"/"} className="text-xl font-semibold ">
            Trainers{" "}
          </Link>
          <IoMdArrowDropright className="w-[22px]" />
          <h1 className="text-xl font-semibold text-[#448c74]">About trainer</h1>
        </div>
      </div>
      <hr />
    </>
  );
};

export default TrainerDetailTitle;
