import { useQuery } from "@tanstack/react-query";
import ServiceCard from "../../../Components/ServicesComponents/Cards/ServiceCard";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loading from "../../../Shared/Loading/Loading";
import Title from "../../../Shared/Title";

import ParallaxForBMI from "../../../Components/ServicesComponents/ParallaxForBMI/ParallaxForBMI";
import AllServiceTitle from "./AllServiceTitle";

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
  const trainer = (e) => {
    const val = e.target.value;
    console.log(val);
  };
  return (
    <>
      {/* <AllServiceTitle></AllServiceTitle> */}
      <div className="px-[2%] sm:px-[5%] lg:px-[8%] py-28">
        {/* Special BMI */}

        <ParallaxForBMI></ParallaxForBMI>
        <div className="mt-36 -mb-5">
          <Title subHeading={"Find Your Fitness Goal With Us"}></Title>
        </div>

        {/* Search and filter  */}
        <div className="flex  items-center md:flex-row flex-col mb-6">
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
                {/* <div className="text-2xl  ">
                <IoMdSearch className=""></IoMdSearch>
              </div> */}
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
        {/* All services with side ber */}
        <div className="sm:flex gap-5">
          <div className="sm:w-[250px] primary-bg p-5 border-primary rounded-l-md">
            <h1 className="text-2xl font-semibold border-b border-b-white pb-1">
              Filter Services
            </h1>
            <div className="grid grid-cols-2 gap-5 sm:block">
              <div className="bg-white text-center mt-8 p-5 space-y-2 rounded-md">
                <h1 className="font-semibold">Filter By Trainer</h1>
                <select
                  onChange={trainer}
                  name="trainer"
                  id="trainer"
                  className="w-full primary-bg text-center py-1 rounded-md outline-0"
                >
                  <option selected disabled value="disable">
                    Select
                  </option>
                  {services.map((service) => (
                    <option key={service._id} value={service.trainer}>
                      Jhon doe
                    </option>
                  ))}
                </select>
              </div>

              {/*Category  */}
              <h1 className="text-2xl font-semibold border-b border-b-white pb-1 mt-8  ">
                Filter Category
              </h1>
              <div className="gap-2 grid-cols-2 grid  p-5">
                <button
                  className="text-white hover:bg-[#448c74] hover:text-[#e5c466] secondary-bg block btn  font-semibold w-20"
                  // onClick={() => handleCategory("All")}
                >
                  All
                </button>
                <button
                  className="text-white hover:bg-[#448c74] hover:text-[#e5c466] secondary-bg block btn  font-semibold w-20"
                  // onClick={() => handleCategory("All")}
                >
                  Yoga
                </button>
                <button
                  className="text-white hover:bg-[#448c74] hover:text-[#e5c466] secondary-bg block btn  font-semibold w-20"
                  // onClick={() => handleCategory("Kitchen")}
                >
                  Weight Loss
                </button>
                <button
                  className="text-white hover:bg-[#448c74] hover:text-[#e5c466] secondary-bg block btn  font-semibold w-20"
                  // onClick={() => handleCategory("Bedroom")}
                >
                  Nutrition
                </button>
                <button
                  className="text-white hover:bg-[#448c74] hover:text-[#e5c466] secondary-bg block btn  font-semibold w-20"
                  // onClick={() => handleCategory("Living Room")}
                >
                  Fitness
                </button>
              </div>
              <div>
                <div>
                  <h3 className="text-2xl font-semibold border-b border-b-white pb-1 mt-8 ">
                    Filter Course Duration
                  </h3>
                  <div className="p-5">
                    <div>
                      <input
                        type="radio"
                        name="price"
                        value="15-30"
                        id="regular"

                        // onChange={onOptionChange}
                      />
                      <label htmlFor="regular">15-30</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="price"
                        value="30-50"
                        id="medium"

                        // onChange={onOptionChange}
                      />
                      <label htmlFor="medium">30-50</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="price"
                        value="50-80"
                        id="large"

                        // onChange={onOptionChange}
                      />
                      <label htmlFor="large">50-80</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="price"
                        value="80-100"
                        id="extra-large"

                        // onChange={onOptionChange}
                      />
                      <label htmlFor="extra-large">80-100</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* end of category */}
            </div>
          </div>
          <div className="flex-1 p-5">
            <h1 className="text-2xl font-semibold border-b border-b-white ">
              All Services
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service._id} service={service}></ServiceCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllServices;
