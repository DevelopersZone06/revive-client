
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { title, description, serviceImg,duration,price,_id,category,trainer } = service;
  return (
    <div className="relative rounded-[15px] mt-20 service-card shadow-gray-300 shadow-xl  ">
    
      <img src={serviceImg} alt="" className="w-full h-[280px]  rounded-[15px]" />
      <h2 className="text-center p-4 font-bold text-3xl mt-4 secondary-color">{title}</h2>
      <p className="capitalize text-center p-4 mb-5 secondary-color"><span className="font-bold capitalize lg:text-xl text-normal">Category: </span>{category} </p>
     
      <div className="w-full h-full absolute top-0 bg-[#ababab00] rounded-[15px] pt-14 px-10 service-content  ">
        
        <div className="mt-28 service-des text-white lg:space-y-4 md:space-y-2  ">
          <h2 className="hidden lg:text-4xl text-2xl  headings font-bold ">{title}</h2>
          <div className="lg:text-base text-xm space-y-4 ">
         
          <p className="hidden capitalize"><span className="font-bold capitalize">Category: </span>{category} </p>
          <p className="hidden "><span className="font-bold">Trainer`s Name: </span>{trainer} </p>
          <p className="hidden"><span className="font-bold">Price: </span>{price} $</p>
          <p className="hidden"><span className="font-bold">Duration: </span>{duration} Days</p>
          
          <Link to={`/services/${_id}`}>
          <button className="text-xl hidden uppercase font-semibold tracking-widest mt-4 rounded-full border-[#e5c466] border lg:px-4 mt-6 lg:py-3 px-6 py-3 ">
            More Details
          </button>
          </Link>
          </div>
          
        </div>
      </div>
     
    </div>
  );
};

export default ServiceCard;
