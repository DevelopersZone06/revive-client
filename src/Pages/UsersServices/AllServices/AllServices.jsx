import { useQuery } from "@tanstack/react-query";
import ServiceCard from "../../../Components/ServicesComponents/Cards/ServiceCard";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loading from "../../../Shared/Loading/Loading";
import Title from "../../../Shared/Title";
import { IoMdSearch } from "react-icons/io";

import ParallaxForBMI from "../../../Components/ServicesComponents/ParallaxForBMI/ParallaxForBMI";

const AllServices = () => {
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
    <div className="px-[2%] sm:px-[5%] lg:px-[8%] py-28">
      {/* Special BMI */}

      <ParallaxForBMI></ParallaxForBMI>
      <div className="mt-36">
        <Title subHeading={"Find Your Fitness Goal With Us"}></Title>
      </div>

      {/* Search and filter  */}
      <div className="flex  items-center md:flex-row flex-col">
        <div className="md:w-3/4 w-full">
          <form
            action="
        "
          >
            <div className="flex items-center  gap-10  ">
              <input
                type="search"
                placeholder="Search In Revive"
                className="rounded-md px-10 py-2 border-2 border-[#448c74] w-full"
              />
              <div className="text-2xl absolute left-280 ">
                <IoMdSearch className=""></IoMdSearch>
              </div>
            </div>
          </form>
        </div>
        <div className="bg-white text-center  p-5 space-y-2 rounded-md flex gap-2">
          <h1 className="font-semibold">Sort By Price</h1>
          <select
            name="trainer"
            id="trainer"
            className="w-full primary-bg text-center py-1 rounded-md outline-0"
          >
            <option disabled selected value="">
              Select
            </option>
            <option value="low">Low To High</option>
            <option value="high">High To Low</option>
          </select>
        </div>
      </div>
      {/* All services */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
