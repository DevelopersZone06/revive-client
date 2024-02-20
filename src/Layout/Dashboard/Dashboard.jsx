import { Link, NavLink, Outlet } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import useAdmin from "../../Hooks/useAdmin";
import { MdSpaceDashboard } from "react-icons/md";
import { FaNewspaper, FaUsers } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import { GrGallery } from "react-icons/gr";
import { TbPackages } from "react-icons/tb";
import { RiServiceFill } from "react-icons/ri";
import logo from '../../assets/images/logo2.png'
import { IoLogOut } from "react-icons/io5";
import LogOut from "../../Components/LogOut/LogOut";
// user route icon
import { FaArrowsToDot } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { TbDetails } from "react-icons/tb";
import { Helmet } from "react-helmet-async";
import Profile from "../../Shared/Profile/Profile";
import useTrainer from "../../Hooks/useTrainer";
import { } from "react-icons/ri";
// import { IoIosPeople } from "react-icons/fa6";
const Dashboard = () => {
  const { isAdmin } = useAdmin();
  const { isTrainer } = useTrainer()
  // const { user } = useAuth()
  return (
    <div className="flex flex-col md:flex-row py-20 px-[2%] sm:px-[5%] lg:px-[5%] " style={{ background: 'radial-gradient(circle, rgba(0,51,111,1) 0%, rgba(0,0,0,1) 100%)' }}>
      <div className="md:w-64  md:min-h-screen ">
        <ul className="menu flex flex-row md:flex-col text-white space-y-4">
          <li>
            <Helmet>
              <title>
                Revive | Admin Dashboard
              </title>
            </Helmet>
            <Link to={"/"}>
              {" "}
              <img src={logo} alt="" className="w-32 h-10 object-cover  -ml-3" />
            </Link>
          </li>
          {isAdmin ? (
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
                  <GrGallery className="text-2xl"></GrGallery>
                  Post Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/postPackages"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-sky-200  " : ""
                  }
                >
                  <TbPackages className="text-2xl"></TbPackages>
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
                  <RiServiceFill className="text-2xl"></RiServiceFill>
                  Services Approval
                </NavLink>
              </li>



            </>

          ) :
            //trainer exist 
            isTrainer ? (
              <>

                <li><Profile img={'https://i.ibb.co/W2680FV/images.jpg'}></Profile></li>
                <li>
                  <NavLink
                    to={"/dashboard/trainerProfile"}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-sky-200" : ""
                    }
                  >
                    <CgProfile className="text-2xl"/>
                    <span className="xl:flex lg:flex md:flex hidden">
                      My Profile
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/trainerPostedService"}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-sky-200" : ""
                    }
                  >
                    <RiServiceFill className="text-2xl"/>
                    <span className="xl:flex lg:flex md:flex hidden">

                      My Services
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/trainerProfile"}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-sky-200" : ""
                    }
                  >
                    <FaNewspaper className="text-2xl"/>
                    <span className="xl:flex lg:flex md:flex hidden">

                      My Blogs
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/trainerProfile"}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-sky-200" : ""
                    }
                  >
                    {/* <IoIosPeople></IoIosPeople> */}
                    <span className="xl:flex lg:flex md:flex hidden">

                      My Customers
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/todo"}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-sky-200" : ""
                    }
                  >
                    <CgProfile className="text-2xl"/>
                    <span className="xl:flex lg:flex md:flex hidden">
                      To-Do

                    </span>
                  </NavLink>
                </li>
                <li>
                  <IoLogOut className="w-5 -mr-4 " />
                  <LogOut></LogOut>
                </li>
              </>
            )

              :
              (<>
                <li>
                  <Profile img={'https://i.ibb.co/gM3rG8G/beautiful-woman-park-last-sunny-days.jpg'}></Profile>

                  <Link to={'applyTrainerForm'}><button className="btn btn-sm mt-3">Apply to be a trainer</button></Link>
                  </li>

                <div className="flex flex-row md:flex-col">
                  <li>
                    <NavLink
                      to={"/dashboard/userProfile"}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-sky-200" : ""
                      }
                    >
                      <CgProfile className="text-2xl"/>
                      <span className="xl:flex lg:flex md:flex hidden">My Profile</span>
                    </NavLink>
                  </li>


                  <li>
                    <NavLink
                      to={"/dashboard/myServices"}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-sky-200" : ""
                      }
                    >
                      <TbDetails className="text-2xl"/>
                      <span className="xl:flex lg:flex md:flex hidden">
                        My Services
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/dashboard/todo"}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-sky-200" : ""
                      }
                    >
                      <FaArrowsToDot className="text-2xl"/>
                      <span className="xl:flex lg:flex md:flex hidden">

                        Todo
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/dashboard/servicesApproval"}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-sky-200 flex items-center" : "flex items-center"
                      }
                    >
                      <div className="flex items-center text-sm ">
                        <IoLogOut className="w-5 -mr-4 " />
                        <LogOut />
                      </div>
                    </NavLink>
                  </li>
                </div>
              </>)

          }


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