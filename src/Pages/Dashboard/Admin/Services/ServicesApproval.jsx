
import Title from "../../../../Shared/Title";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";

const ServicesApproval = () => {

  const axiosPublic = useAxiosPublic()
  const [applied, setApplied] = useState([])

  useEffect( () => {
    axiosPublic('/pendingServices')
    .then(res => {
      setApplied(res.data)
    })
  }, [])


  return (
    <>
      <Title subHeading={"Applied for services"} fontColor={'sky-50'}></Title>
      <Helmet>
        <title>
        Revive | Approve services
        </title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-lg font-semibold">
            <tr className="text-sky-50 text-center">
              <th>Trainer Image</th>
              <th>Trainer Name</th>
              <th>Service Name</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
            {
              applied.map(service => <tr key={service._id} className="text-sky-100 text-center">
              <td className="flex justify-center items-center">
                <img className="w-[80px] h-[80px] bg-slate-500 object-cover rounded-full hover:blur-[2px] duration-500" src={service.trainerImage} alt="" />
              </td>
              <td> {service.trainerName}</td>
              <td>{service.serviceTitle}</td>
              <td>{service.category}</td>
              <td>
                <div>
                  <Link to={'/dashboard/servicesApproval/serviceDetail'}>
                    <button className="rounded-full px-4 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all duration-150 ease-in-out">View  Details</button></Link>
                </div>
              </td>
            </tr>)
            }

            <hr />
          </tbody>
          {/* foot */}
        </table>
        
      </div></>

  );
};

export default ServicesApproval;