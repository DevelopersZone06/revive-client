import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Title from "../../../../Shared/Title";
import { Link } from "react-router-dom";
const ToBeTrainers = () => {
    return (
       <>
       <Title subHeading={"Applied for trainers"} fontColor={'sky-800'}></Title>
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-lg font-semibold">
            <tr className="text-sky-700">
              <th>Trainer Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              
              <td>
              
                <img className="w-[80px] h-[80px] bg-slate-500 object-cover rounded-lg duration-500" src="https://source.unsplash.com/300x300/?profile" alt="" />
                 
                  
                
              </td>
              <td>
               Daniel
                
              </td>
              <td>Yoga</td>
              <th>
              
             <div>
             <Link to={"/dashboard/toBeTrainers/trainerDetail"}>
             <button
                 
                 className="rounded-full px-4 py-2 hover:bg-[#144479] border border-sky-700 hover:text-sky-100 text-sky-700 font-bold capitalize md:text-sm text-sm transition-all duration-150 ease-in-out "
               >
                 Details
               </button>
             </Link>
             </div>
              
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              
              <td>
              
                <img className="w-[80px] h-[80px] bg-slate-500 object-cover rounded-lg duration-500" src="https://source.unsplash.com/300x300/?profile" alt="" />
                 
                  
                
              </td>
              <td>
                Zemlak
                
              </td>
              <td>Gym</td>
              <th>
              <button
                 
                 className="rounded-full px-4 py-2 hover:bg-[#144479] border border-sky-700 hover:text-sky-100 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all duration-150 ease-in-out "
               >
                 Details
               </button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              
              <td>
              
                <img className="w-[80px] h-[80px] bg-slate-500 object-cover rounded-lg duration-500" src="https://source.unsplash.com/300x300/?profile" alt="" />
                 
                  
                
              </td>
              <td>
                Leannon
                
              </td>
              <td>Yoga</td>
              <th>
              <button
                 
                 className="rounded-full px-4 py-2 hover:bg-[#144479] border border-sky-700 hover:text-sky-100 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all duration-150 ease-in-out "
               >
                 Details
               </button>
              </th>
            </tr>
            <hr />
          </tbody>
          {/* foot */}
          
          
        </table>
        <div className="flex justify-around">
          <div>
            
          </div>
        <div className="flex gap-2 items-center">
                  <h2>Rows Per Page</h2>
                  <p className="flex items-center">5 <IoMdArrowDropdown className="w-[22px]"/></p>
                  <h1 className="text-lg">1-3 of 9</h1>
                  <IoIosArrowBack className="w-[25px]"/>
                  <IoIosArrowForward className="w-[25px]"/>
                </div>
        </div>
      </div>
      
       </>
    );
};

export default ToBeTrainers;