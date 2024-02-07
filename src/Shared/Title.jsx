import { TbRibbonHealth } from "react-icons/tb";

const Title = ({ heading, subHeading,fontColor}) => {
  return (
    <div className="pb-12 text-center space-y-3 corner-border capitalize">
      <h1 className={`heading text-3xl subheading text-${fontColor}`} >{subHeading}</h1>
      <div className="flex gap-5 justify-center items-center">
        <span className={`w-[70px] h-[1px] bg-[#e5c466]`} ></span>
        <TbRibbonHealth className={`h-6 w-6  font-bold text-[#e5c466]`}></TbRibbonHealth>
        <span className={`w-[70px] h-[1px] bg-[#e5c466]`} ></span>
      </div>
      <h1 className={`headingFont text-6xl font-bold text-${fontColor}`}>{heading}</h1>
    </div>
  );
};


export default Title;
