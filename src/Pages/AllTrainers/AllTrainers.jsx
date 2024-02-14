import { FaSearch } from "react-icons/fa";
import Trainer from "../../Components/HomeComponents/Trainers/Trainer";
import { Helmet } from "react-helmet-async";


import PageTitle from "../../Shared/PageTitle/PageTitle";
import { useEffect, useState } from "react";
import axios from "axios";
import Title from "../../Shared/Title";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const AllTrainers = () => {
  const axiosPublic = useAxiosPublic()
  const [trainers, setTrainers] = useState([])

  useEffect(() => {
    axiosPublic('/trainers')
      .then(res => {
        setTrainers(res.data)
      })
  }, [])


  return (
    <div className="px-[2%] sm:px-[5%] lg:px-[8%] py-20">

      <Helmet>
        <title>Revive | Trainers</title>
      </Helmet>

      <PageTitle title={'Trainers'}></PageTitle>
      <Title heading={'Ours Trainers'} subHeading={'Our Experienced Trainers '}></Title>
      <div className="pt-16 border-b mb-10 border-b-gray-400 flex justify-between items-center">

        <div className="flex pb-2  w-1/2 mx-auto">
          <input
            type="search"
            className="border border-sky-800 rounded-l-md h-8 outline-0 pl-1 mb-10 w-full p-4 "
            placeholder="Search..."
          />
          <button className="bg-sky-700 text-white text-xl px-2 mb-10 rounded-r-md">
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
