import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaBars,
  FaRegEnvelope,
  FaSearch,
  FaRegEnvelopeOpen,
  FaUser,
} from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import useAxiosPublic from "../../Hooks/useAxiosPublic";
import moment from "moment";
import useAdmin from "../../Hooks/useAdmin";
import logo from "../../assets/images/logo2.png";
import LogOut from "../../Components/LogOut/LogOut";

const Navbar = () => {
  const { isAdmin } = useAdmin();
  console.log(isAdmin);
  // const user = true
  const [menu, setMenu] = useState(false);
  const [notification, setNotification] = useState(false);

  const { user } = useContext(AuthContext);
  console.log(user);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleNotification = () => {
    setNotification(!notification);
  };

  const axiosPublic = useAxiosPublic();
  const [notifications, setNotifications] = useState({});

  const location = useLocation();

  useEffect(() => {
    axiosPublic(`notification/${user?.email}`).then((res) => {
      setNotifications(res.data);
    });
  }, [user?.email, location.pathname]);

  return (
    <div className="bg-[#05111D] px-[2%] sm:px-[5%] lg:px-[8%]  text-sky-200 relative z-20">
      <nav className="flex justify-between items-center py-2">
        <div className="block lg:hidden">
          <span onClick={handleMenu}>
            <FaBars className="text-xl" />
          </span>
        </div>

        <div className=" md:block hidden">
          <img src={logo} className="md:w-44 md:h-10 h-8 w-32 object-cover " />
        </div>
        <div className="lg:block hidden"></div>

        <div
          className={
            menu
              ? "lg:flex-1 ease-in  duration-300  lg:relative lg:top-0 w-60 absolute top-0 left-0 bg-[#05111D] text-center  text-sky-200 lg:bg-[#0000] lg:text-white z-30 rounded-br-md"
              : "lg:flex-1 lg:relative lg:top-0 absolute -top-[550px] ease-in duration-300 left-0 z-30 primary-bg text-center w-60 lg:bg-[#0000] rounded-br-md"
          }
        >
          <ul className="lg:flex justify-center  gap-1 text-lg menu-item font-medium flex-wrap relative space-y-3 pb-4">
            {/* all nav items here */}
            <div className="h-10 block lg:hidden">
              <span
                className=" absolute left-0 top-0 secondary-bg px-3 rounded-bl-sm text-white"
                onClick={handleMenu}
              >
                X
              </span>
            </div>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/events">Events</NavLink>
            </li>

            <li>
              <NavLink to="/trainers">Trainers</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <LogOut />
            </li>
            {user && isAdmin && (
              <li>
                <NavLink to="/dashboard/adminHome">Dashboard</NavLink>
              </li>
            )}
            {user &&  !isAdmin &&  (
              <li>
                <NavLink to="/dashboard/updateProfile">Dashboard</NavLink>
              </li>
            )}
          </ul>
        </div>

        <div className="text-lg">
          {user ? (
            <div className="flex justify-end md:gap-2 gap-0">
              <span className=" md:bg-white rounded-full  md:text-sky-700 p-2 md:border   text-sky-400 border-white">
                <FaSearch className="w-5 h-5"></FaSearch>
              </span>
              <span
                onClick={handleNotification}
                className=" md:bg-white rounded-full  md:text-sky-700 p-2 cursor-pointer hover:bg-[#448c7400] md:border   text-sky-400 border-white"
              >
                <IoMdNotifications className="w-5 h-5 hover:text-sky-200"></IoMdNotifications>

                <div
                  className={
                    notification
                      ? "w-96 primary-bg max-h-screen absolute right-[165px] top-14 rounded-md py-4 ease-in duration-300 border-primary"
                      : "w-96 primary-bg overflow-hidden absolute right-0 -top-[500px] py-10 z-10 ease-in duration-300 max-h-80"
                  }
                >
                  <h1 className="border-b border-b-white px-4 pb-4">
                    Notification
                  </h1>
                  {notifications?.allNotification &&
                    notifications?.allNotification.map(
                      (notification, index) => (
                        <Link key={index} to={notification.redirect}>
                          <div className="px-4 py-2 border-b border-b-white hover:bg-white">
                            <p>{notification.title}</p>
                            <div className="flex justify-between items-center">
                              <p className="text-[10px]">
                                {moment(
                                  notification.date,
                                  "YYYYMMDDHHmm"
                                ).fromNow()}
                              </p>
                              {notification.isRead ? (
                                <p className="w-5 ">
                                  <FaRegEnvelopeOpen></FaRegEnvelopeOpen>
                                </p>
                              ) : (
                                <p className="w-5">
                                  <FaRegEnvelope></FaRegEnvelope>
                                </p>
                              )}
                            </div>
                          </div>
                        </Link>
                      )
                    )}
                </div>
              </span>
              {/* <img className="w- h-10  rounded-full" src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png" alt="" /> */}
              <span className="  md:bg-white rounded-full  md:text-sky-700 p-2 hover:bg-[#448c7400] hover:text-sky-200 md:border   text-sky-400 border-white">
                <FaUser className="w-5 h-5"></FaUser>
              </span>
            </div>
          ) : (
            <Link to={"/login"} className="login bg-white text-sky-700">
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
