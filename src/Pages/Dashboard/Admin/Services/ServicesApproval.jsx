import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Title from "../../../../Shared/Title";
import { Link } from "react-router-dom";

const ServicesApproval = () => {
    return (
      <>
       <Title subHeading={"Applied for services"} fontColor={'sky-50'}></Title>
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
        {/* row 1 */}
            <tr className="text-sky-100 text-center">
        <td className="flex justify-center items-center">
              <img className="w-[80px] h-[80px] bg-slate-500 object-cover rounded-full hover:blur-[2px] duration-500" src="https://i.ibb.co/W34N2YD/tainer4.jpg" alt="" />
              </td>
              <td> Olivia White</td>
              <td>Healthy Habits Workshop</td>
              <td>Yoga</td>
              <td>
             <div>
             <Link to={'/dashboard/servicesApproval/serviceDetail'}>
             <button className="rounded-full px-4 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all duration-150 ease-in-out">View  Details</button></Link>
             </div>
              </td>
             </tr>
        {/* row 1 */}
            <tr className="text-sky-100 text-center">
        <td className="flex justify-center items-center">
              <img className="w-[80px] h-[80px] bg-slate-500 object-cover rounded-full hover:blur-[2px] duration-500" src="https://i.ibb.co/GRsmKyJ/portrait-beautiful-young-adult-white-happy-woman-white-wall.jpg" alt="" />
              </td>
              <td> Olivia White</td>
              <td>Healthy Habits Workshop</td>
              <td>Yoga</td>
              <td>
             <div>
             <Link to={'/dashboard/servicesApproval/serviceDetail'}>
             <button className="rounded-full px-4 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all duration-150 ease-in-out">View  Details</button></Link>
             </div>
              </td>
             </tr>
        {/* row 1 */}
            <tr className="text-sky-100 text-center">
        <td className="flex justify-center items-center">
              <img className="w-[80px] h-[80px] bg-slate-500 object-cover rounded-full hover:blur-[2px] duration-500" src="https://i.ibb.co/BVTvjn6/fashion-portrait-attractive-smiling-man-white-shirt-poses-wall-with-contrast-shadows.jpg" alt="" />
              </td>
              <td> Olivia White</td>
              <td>Healthy Habits Workshop</td>
              <td>Yoga</td>
              <td>
             <div>
             <Link to={'/dashboard/servicesApproval/serviceDetail'}>
             <button className="rounded-full px-4 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all duration-150 ease-in-out">View  Details</button></Link>
             </div>
              </td>
             </tr>
            
          <hr />
          </tbody>
          {/* foot */}
        </table>
        <div className="flex justify-around">
          <div>
            
          </div>
        <div className="flex gap-2 items-center text-sky-100 mt-5">
                  <h2 className="text-sky-100">Rows Per Page</h2>
                  <p className="flex items-center">5 <IoMdArrowDropdown className="w-[22px]"/></p>
                  <h1 className="text-lg">1-3 of 9</h1>
                  <IoIosArrowBack className="w-[25px]"/>
                  <IoIosArrowForward className="w-[25px]"/>
                </div>
        </div>
      </div></>
        
    );
};

export default ServicesApproval;