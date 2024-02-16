import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { title, serviceImg, duration, price, _id, category, trainer } =
    service;
  return (
    
    <section className="mx-auto w-full  rounded-md shadow-md shadow-white bg-white">
      <div className="h-fit group" >
        <div className="relative overflow-hidden w-full rounded-md">
          <img className="h-52 w-full object-cover" src={serviceImg} alt="" />
          <div className="absolute h-full w-full bg-black/60 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 space-y-1 text-center">
            <p className=" text-sky-200">
              <span className="font-bold">Trainer`s Name: </span>
              {trainer}{" "}
            </p>
            <p className=" text-sky-200">
              <span className="font-bold">Price: </span>
              {price} $
            </p>
            <p className=" text-sky-200">
              <span className="font-bold">Duration: </span>
              {duration} Days
            </p>

            <Link to={`/services/${_id}`}>
              <button className="  capitalize font-semibold  mt-4 rounded-md border-sky-200 border  px-4 py-2 hover:bg-sky-900  text-white ">
                More Details
              </button>
            </Link>
          </div>
        </div>
        <h2 className="mt-3 text-lg capitalize text-center text-sky-600 font-bold">
          {title}
        </h2>

        <p className="capitalize text-center p-2 mb-5 text-sky-600">
          <span className="font-bold capitalize lg:text-lg text-normal">
            Category:{" "}
          </span>
          {category}{" "}
        </p>
      </div>
    </section>
  );
};

export default ServiceCard;
