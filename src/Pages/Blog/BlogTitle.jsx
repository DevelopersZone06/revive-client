import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const BlogTitle = () => {
  return (
    <>
      <div className="flex justify-between px-[2%] sm:px-[5%] lg:px-[8%]">
        <div className="flex items-center my-5 cursor-pointer">
          <Link to={"/"} className="text-xl font-semibold ">
            Blogs{" "}
          </Link>
          <IoMdArrowDropright className="w-[22px]" />
          <h1 className="text-xl font-semibold text-[#448c74]">Blog Details</h1>
        </div>
        {/* <div className="md:flex gap-5 items-center cursor-pointer hidden ">
          <IoFitnessOutline className="text-5xl" />
          <GrYoga />
          <GiBoxingGloveSurprise />
        </div> */}
      </div>
      <hr />
    </>
  );
};

export default BlogTitle;
