import { Helmet } from "react-helmet-async";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from '../../assets/images/logo2.png'
import useAuth from "../../Hooks/useAuth";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import { GrGallery } from "react-icons/gr";
import { TbDetails, TbPackages } from "react-icons/tb";
import { FcCalendar } from "react-icons/fc";
import LogOut from "../../Components/LogOut/LogOut";
import { RiServiceFill } from "react-icons/ri";
import Profile from "../../Shared/Profile/Profile";
import { IoLogOut } from "react-icons/io5";

const UserDashboard = () => {

    const {user}=useAuth()

    return (
        <>
            <div className="flex flex-col md:flex-row py-20 px-[2%] sm:px-[5%] lg:px-[5%] " style={{ background: 'radial-gradient(circle, rgba(0,51,111,1) 0%, rgba(0,0,0,1) 100%)' }}>
                <div className="md:w-64  md:min-h-screen ">
                    <ul className="menu flex flex-row md:flex-col text-white space-y-4">
                        <li>
                            <Helmet>
                                <title>
                                    Revive | User Dashboard
                                </title>
                            </Helmet>
                            <Link to={"/"}>
                                {" "}
                                <img src={logo} alt="" className="w-32 h-10 object-cover  -ml-3" />
                            </Link>
                        </li>
                        {user ? (
                            <>
                                {/* Admin exits */}
                                <li >

                                    <NavLink
                                        to={"/dashboard/adminHome"}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-sky-200" : ""
                                        }
                                    >
                                        <MdSpaceDashboard className="w-5"></MdSpaceDashboard> Home
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
                                        to={"/dashboard/postPackages"}
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
                                {/* user route */}

                            </>

                        ) :
                            <>
                                {/* User info */}
                                <Profile></Profile>
                                <li>
                                    <NavLink
                                        to={"/dashboard/userProfile"}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-sky-200" : ""
                                        }
                                    >
                                        <FcCalendar />
                                        My Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/dashboard/calender"}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-sky-200" : ""
                                        }
                                    >
                                        <FcCalendar />
                                        Calendar
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/dashboard/myServices"}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-sky-200" : ""
                                        }
                                    >
                                        <TbDetails />
                                        My Services
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
                            </>



                        }


                    </ul>
                </div>
                {/* dashboard outlet */}
                <div className="flex-1 p-8 ">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default UserDashboard;