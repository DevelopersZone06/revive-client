import { TbRibbonHealth } from "react-icons/tb";

const Headings = ({ heading, subHeading }) => {
  return (
    <div className="text-center space-y-3 corner-border capitalize">
      <h1 className="heading lg:text-3xl md:text-2xl text-xl subheading ">
        {subHeading}
      </h1>
      <div className="flex gap-5 justify-center items-center text-[#448c74]">
        <span className="w-[70px] h-[1px] bg-[#448c74] "></span>
        <TbRibbonHealth className="h-6 w-6  font-bold"></TbRibbonHealth>
        <span className="w-[70px] h-[1px] bg-[#448c74]"></span>
      </div>
      <h1 className="headingFont lg:text-6xl md:text-4xl text-2xl font-bold">
        {heading}
      </h1>
    </div>
  );
};

export default Headings;
