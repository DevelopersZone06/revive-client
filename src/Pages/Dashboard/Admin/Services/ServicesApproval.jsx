import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Title from "../../../../Shared/Title";
import { Link } from "react-router-dom";

const ServicesApproval = () => {
    return (
      <>
       <Title subHeading={"Applied for services"} fontColor={'sky-800'}></Title>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-lg font-semibold">
            <tr className="text-sky-700">
              
              <th>Trainer Image</th>
              <th>Trainer Name</th>
              <th>Service Name</th>
              <th>Category</th>
              <th>Action</th>
              
              
            </tr>
          </thead>
          <tbody>
           
            
            {/* row 1 */}
            <tr>
            
            
              
              <td>
              <img className="w-[80px] h-[80px] bg-slate-500 object-cover rounded-full hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?profile" alt="" />
              
              
                 
                  
                
              </td>
              <td>
              
             
              Olivia White
                  
                
              </td>
              <td>
              Healthy Habits Workshop
              
                
              </td>
              <td>Yoga</td>
              <td>
             <div>
             <Link to={'/dashboard/servicesApproval/serviceDetail'}>
             <button
                 
                 className="rounded-full px-4 py-2 hover:bg-[#144479] border border-sky-700 hover:text-sky-100 text-sky-700 font-bold capitalize md:text-sm text-sm transition-all duration-150 ease-in-out "
               >
                View  Details
               </button>
             </Link>
             </div>
              </td>
             
            </tr>
            {/* row 1 */}
            <tr>
              
              <td>
              
              <img className="w-[80px] h-[80px] bg-slate-500 object-cover rounded-full hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?profile" alt="" />
                 
                  
                
              </td>
              <td>
              
             
              Olivia White
                  
                
              </td>
              <td>
              Healthy Habits Workshop
              
                
              </td>
              <td>Yoga</td>
              <td>
              <button
                 
                    className="rounded-full px-4 py-2 hover:bg-[#144479] border border-sky-700 hover:text-sky-100 text-sky-700 font-bold capitalize md:text-sm text-sm transition-all duration-150 ease-in-out "
                  >
                   View  Details
                  </button>
              </td>
             
            </tr>
            {/* row 1 */}
            <tr>
              
              <td>
              
              <img className="w-[80px] h-[80px] bg-slate-500 object-cover rounded-full hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?profile" alt="" />
                 
                  
                
              </td>
              <td>
              
             
              Olivia White
                  
                
              </td>
              <td>
              Healthy Habits Workshop
              
                
              </td>
              <td>Yoga</td>
              <td>
              <button
                 
                    className="rounded-full px-4 py-2 hover:bg-[#144479] border border-sky-700 hover:text-sky-100 text-sky-700 font-bold capitalize md:text-sm text-sm transition-all duration-150 ease-in-out "
                  >
                   View  Details
                  </button>
              </td>
             
            </tr>
            
            
           
           
            <hr />
          </tbody>
          {/* foot */}
          
          
        </table>
        <div className="flex justify-around">
          <div>
            
          </div>
        <div className="flex gap-2 items-center">
                  <h2 className="text-sky-700">Rows Per Page</h2>
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