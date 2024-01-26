import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Shared/Loading/Loading";
import Title from "../../../Shared/Title";

import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import ServiceCard from "../../ServicesComponents/Cards/ServiceCard";
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
    <div className="primary-bg px-[2%] sm:px-[5%] lg:px-[8%] py-28">
      <Title subHeading={"Services"} heading={"Our Some Services"}></Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.slice(0, 6).map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="my-10">
        <Link to={"/services"}>
          <div className="text-center ">
            <a
              data-aos="fade-up"
              href="#contact"
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#0D1322] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out secondary-bg group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-[#0D1322]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200 text-[#e5c466]">
                <svg
                  className="w-5 h-5 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-[#e5c466]">
                All Services
              </span>
            </a>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
