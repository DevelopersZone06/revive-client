import { TbRibbonHealth } from "react-icons/tb";

const Title = ({ heading, subHeading }) => {
  return (
    <div className="my-20 text-center space-y-3 corner-border capitalize">
      <h1 className="heading text-3xl subheading ">{subHeading}</h1>
      <div className="flex gap-5 justify-center items-center">
        <span className="w-[70px] h-[1px] btn-bg " ></span>
        <TbRibbonHealth className="h-6 w-6 headings font-bold"></TbRibbonHealth>
        <span className="w-[70px] h-[1px] btn-bg"></span>
      </div>
      <h1 className="headingFont text-6xl font-bold">{heading}</h1>
    </div>
  );
};

export default Title;
