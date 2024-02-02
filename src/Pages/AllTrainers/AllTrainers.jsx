import { FaSearch } from "react-icons/fa";
import Trainer from "../../Components/HomeComponents/Trainers/Trainer";


import PageTitle from "../../Shared/PageTitle/PageTitle";
import { useEffect, useState } from "react";
import axios from "axios";


const AllTrainers = () => {
  const [trainers, setTrainers] = useState([])

  useEffect( () => {
    axios('https://revive-server-dun.vercel.app/trainers')
    .then(res => {
      setTrainers(res.data)
    })
  }, [])


  return (
    <div className="px-[2%] sm:px-[5%] lg:px-[8%]">
      <PageTitle title={'Trainers'}></PageTitle>
      <div className="pt-16 border-b mb-10 border-b-gray-400 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Our All Trainers</h1>
        <div className="flex pb-2">
          <input
            type="search"
            className="primary-bg rounded-l-md h-8 outline-0 pl-1"
            placeholder="Search..."
          />
          <button className="secondary-bg text-white text-xl px-2 rounded-r-md">
            <FaSearch></FaSearch>
          </button>
        </div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-16">
        {trainers.map((trainer, index) => (
          <Trainer key={index} trainer={trainer}></Trainer>
        ))}
      </div>
    </div>
  );
};

export default AllTrainers;
