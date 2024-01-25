
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { title, description, serviceImg,duration,price,_id,category,trainer } = service;
  return (
    <div className="relative rounded-[15px] mt-20 service-card shadow-gray-300 shadow-xl ">
    
      <img src={serviceImg} alt="" className="w-full h-[380px] rounded-[15px]" />
      <h2 className="text-center p-4 font-bold text-3xl my-4 secondary-color">{title}</h2>
     
     
      <div className="w-full h-full absolute top-0 bg-[#ababab00] rounded-[15px] pl-12 pt-10 service-content">
        
        <div className="pt-8 mt-28 service-des text-white space-y-4">
          <h2 className="hidden lg:text-4xl md:text-2xl text-lg headings font-bold ">{title}</h2>
          <p className="text-lg hidden">
          {description}
          </p>
          <p className="hidden capitalize"><span className="font-bold capitalize">Category: </span>{category} </p>
          <p className="hidden "><span className="font-bold">Trainer`s Name: </span>{trainer} </p>
          <p className="hidden"><span className="font-bold">Price: </span>{price} $</p>
          <p className="hidden"><span className="font-bold">Duration: </span>{duration} Days</p>
          
          <Link to={`/services/${_id}`}>
          <button className="text-xl hidden uppercase font-semibold tracking-widest mt-8 rounded-full border-[#e5c466] border px-10 py-5 ">
            More Details
          </button>
          </Link>
        </div>
      </div>
     
    </div>
  );
};

export default ServiceCard;
