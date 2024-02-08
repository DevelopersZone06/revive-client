import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import {GiMuscleUp } from "react-icons/gi";
import { GrGallery } from "react-icons/gr";
import { TbPackages } from "react-icons/tb";
import { RiServiceFill } from "react-icons/ri";
import logo from '../../assets/images/Logo2.png'

const Dashboard = () => {
    const {isAdmin}=useAdmin();
    return (
        <div className="flex flex-col md:flex-row  " style={{ background: 'radial-gradient(circle, rgba(0,51,111,1) 0%, rgba(0,0,0,1) 100%)' }}>
        <div className="md:w-64  md:min-h-screen ">
          <ul className="menu flex flex-row md:flex-col text-white space-y-4">
            <li>
              <Link to={"/"}>
                {" "}
               <img src={logo} alt="" className="w-32 h-10 object-cover  -ml-3" />
              </Link>
            </li>
            {isAdmin &&  (
              <>
                {/* Admin exits */}
                <li >
                 
                  <NavLink
                    to={"/dashboard/adminHome"}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-sky-200" : ""
                    }
                  >
                   <MdSpaceDashboard className="w-5"></MdSpaceDashboard>  Admin Home
                  </NavLink>
                </li>
  
                <li>
                  <NavLink
                    to={"/dashboard/allUsers"}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-sky-200" : ""
                    }
                  >
                    <FaUsers className="w-5"></FaUsers>
                  
                    All users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/toBeTrainers"}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-sky-200 " : ""
                    }
                  >
                    <GiMuscleUp className="w-5"></GiMuscleUp>
                   Applied Trainers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/postGallery"}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-sky-200" : ""
                    }
                  >
                 <GrGallery></GrGallery>
                   Post Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/"}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-sky-200  " : ""
                    }
                  >
                   <TbPackages></TbPackages>
                    Post Packages
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/servicesApproval"}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-sky-200" : ""
                    }
                  >
                 <RiServiceFill></RiServiceFill>
                    Services Approval
                  </NavLink>
                </li>
              </>
            ) }
            
  
           
          </ul>
        </div>
        {/* dashboard outlet */}
        <div className="flex-1 p-8 ">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Dashboard;