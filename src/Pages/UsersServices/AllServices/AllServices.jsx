import ServiceCard from "../../../Components/ServicesComponents/Cards/ServiceCard";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

import Title from "../../../Shared/Title";

import ParallaxForBMI from "../../../Components/ServicesComponents/ParallaxForBMI/ParallaxForBMI";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import useAdmin from "../../../Hooks/useAdmin";
import { SearchIcon } from "@heroicons/react/solid";
import { IoMdSearch } from "react-icons/io";

// import { Helmet } from "react-helmet";

const AllServices = () => {
  const {isAdmin}=useAdmin();
  console.log(isAdmin);
  const axiosPublic = useAxiosPublic();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const categories = [
    { label: "All", value: "" },
    { label: "Yoga", value: "Yoga" },
    { label: "Weight Loss", value: "Weight Loss" },
    { label: "Nutrition", value: "Nutrition" },
    { label: "Workout", value: "Workout" },
    { label: "Cardio", value: "Cardio" },
  ];
  const handleSearchChange = async (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchQuery(value);
  };

  const handleSortChange = async (e) => {
    setSortOrder(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleDurationChange = async (duration) => {
    setSelectedDuration(duration);
  };
 
  //use
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get(
          `/servicesAll?sort=${sortOrder}&search=${searchQuery}&category=${selectedCategory}`
        );
        setSearchResults(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch data initially without search or category
    fetchData();
  }, [sortOrder, searchQuery, selectedCategory, axiosPublic]);

  return (
    <>
      <Helmet>
        <title>Revive | Services</title>
      </Helmet>

      <div className="px-[2%] sm:px-[5%] lg:px-[4%] py-28">
        {/* Special feature BMI */}

        <ParallaxForBMI></ParallaxForBMI>
        <div className="mt-36 -mb-5">
          <Title subHeading={"Find Your Fitness Goal With Us"} fontColor={'sky-700'}></Title>
        </div>

        {/* Search and filter  */}
        <div className="flex justify-around  items-center md:flex-row flex-col ">
         {/*  <div className="md:w-3/4 w-full">
            <div className="flex items-center   ">
              <input
                type="search"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search In Revive (Course Name and Trainer'name)"
                className="rounded-md pl-5 py-2 border-2 border-sky-900 w-2/3"
              />  <IoMdSearch className="w-10 bg-sky-800 text-sky-100 p-2"></IoMdSearch>
            
            </div>
          </div> */}
        
         <div className="flex   w-1/2 ">
         <input
           type="search"
           className="border border-sky-800 rounded-l-md h-8 outline-0 pl-1 mb-10 w-full p-4 "
           value={searchQuery}
           onChange={handleSearchChange}
           placeholder="Search In Revive (Course Name and Trainer'name)"
         />
         <button className="bg-sky-700 text-white text-xl px-2 mb-10 rounded-r-md">
           <IoMdSearch/>
         </button>
       </div>

         <div className="bg-white text-center mb-10 p-5 space-y-2    rounded-md flex gap-2">
           <h1 className="font-semibold">Sort By Price</h1>
           <select
             value={sortOrder}
             onChange={handleSortChange}
             name="sort"
             id="sort"
             className="w-full primary-bg text-center py-1 rounded-md outline-0"
           >
             <option disabled selected value="">
               Select
             </option>
             <option value="asc">Low To High</option>
             <option value="desc">High To Low</option>
           </select>
         </div>
        
        </div>
        {/* All services with side ber */}
        <div className="sm:flex gap-5">
          <div className="sm:w-[250px] bg-[#05111D] p-5 border-primary rounded-l-md">
            <h1 className="text-sm font-semibold text-center text-sky-200 border-b border-b-white pb-1">
              Filter By Services
            </h1>
            <div className="grid lg:grid-cols-2 text-sky-200 grid-cols-1 gap-5 sm:block">
              {/*Categodgry  */}
              <h1 className="text-sm font-semibold border-b border-b-white pb-1 mt-8  ">
                Filter By Category
              </h1>
              <div className="gap-2 lg:grid-cols-2 grid-cols-3 grid pt-5">
                {categories.map(({ label, value }) => (
                  <button
                    key={value}
                    className="text-sky-200  hover:bg-sky-200 hover:text-sky-900 rounded-sm  border border-sky-200 block font-semibold py-1 hover:scale-110 transition-all ease-in-out "
                    onClick={() => handleCategoryClick(value)}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div>
                <div>
                  <h3 className="text-sm font-semibold border-b border-b-white pb-1 mt-8 ">
                    Filter Course Duration
                  </h3>
                  <div className="p-5">
                   <div className="flex md:flex-row  lg:flex-row flex-col  gap-4">
                   <div>
                   <input
                     type="radio"
                     name="price"
                     id="regular"
                     value="5-10"
                     onChange={() => handleDurationChange("5-10")}
                   />
                   <label htmlFor="regular"  className="pr-2">5-10</label>
                 </div>
                 <div>
                   <input
                     type="radio"
                     name="price"
                     value="10-20"
                     id="medium"
                    
                     onChange={() => handleDurationChange("10-20")}
                   />
                   <label htmlFor="medium"  >10-20</label>
                 </div>
                   </div>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-4 pt-4">
                    <div>
                    <input
                      type="radio"
                      name="price"
                      value="20-30"
                      id="large"
                      onChange={() => handleDurationChange("20-30")}
                    />
                    <label htmlFor="large">20-30</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="price"
                      value="30-40"
                      id="extra-large"
                      onChange={() => handleDurationChange("30-40")}
                    />
                    <label htmlFor="extra-large">30-40</label>
                  </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* end of category */}
            </div>
          </div>
          <div className="flex-1 p-5 " style={{backgroundImage:`url('https://i.ibb.co/GpYsZ4Z/img2.jpg')`}}>
          {/* All services  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 p-10">
              {/* services card */}
              {searchResults.map((service) => (
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
