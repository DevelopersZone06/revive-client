import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Title from "../../../Shared/Title";
import ServiceCard from "../../ServicesComponents/Cards/ServiceCard";

import Loading from "../../../Shared/Loading/Loading";
import { Link } from "react-router-dom";


const Services = () => {
  const axiosPublic = useAxiosPublic();
  const { data: services, isPending } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axiosPublic.get("/services");
      return res.data;
    },
  });
  if (isPending) return <Loading></Loading>;

 
  return (
    <div className=" px-[2%] sm:px-[5%] lg:px-[8%] py-28"  style={{ background: 'radial-gradient(circle, rgba(0,51,111,1) 0%, rgba(0,0,0,1) 100%)' }} >
      <Title subHeading={"Services"} heading={"Our Some Services"} fontColor={'sky-100'}></Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {services.slice(0,8).map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
        {/**All services btn, /services */}
      </div>
      <div className=" flex items-center justify-center   pt-8">
        <Link to="/services">
          <button className="border border-sky-700 px-10 py-2 rounded-md uppercase text-xl font-semibold secondary-color hover:bg-sky-700 hover:text-white">
            All Services
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};
export default Services;
