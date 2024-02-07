import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaRegEnvelope, FaSearch, FaRegEnvelopeOpen } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import useAxiosPublic from "../../Hooks/useAxiosPublic";
import moment from "moment";
import useAdmin from "../../Hooks/useAdmin";
import logo from '../../assets/images/Logo2.png'
import LogOut from "../../Components/LogOut/LogOut";





const Navbar = () => {
 
   const {isAdmin}=useAdmin();
   console.log(isAdmin);
  // const user = true
  const [menu, setMenu] = useState(false)
  const [notification, setNotification] = useState(false)

  const {user} = useContext(AuthContext)
  console.log(user)

  const handleMenu = () => {
    setMenu(!menu)
  }
  
  const handleNotification = () => {
    setNotification(!notification)
  }



  const axiosPublic = useAxiosPublic();
  const [notifications, setNotifications] = useState({})
 
  const location = useLocation()

  useEffect( () => {
    axiosPublic(`notification/${user?.email}`)
    .then(res => {
      setNotifications(res.data)
    })
  }, [user, location.pathname])




 

  return (
    <div className="bg-[#05111D] px-[2%] sm:px-[5%] lg:px-[8%] subheading text-sky-200 relative z-20">
      <nav className="flex justify-between items-center py-4">
      <div className="block lg:hidden">
          <span onClick={handleMenu}><FaBars className="text-xl" /></span>
        </div>

        <div  >
          {/* <h1 className="text-3xl subheading font-bold">Revive</h1> */}
          <img src={logo} className="w-32 h-10 object-cover "  />
        </div>

        <div className={menu ? "lg:flex-1 ease-in  duration-300  lg:relative lg:top-0 w-60 absolute top-0 left-0 bg-[#05111D] text-center  text-sky-200 lg:bg-[#0000] lg:text-white z-30 rounded-br-md" : "lg:flex-1 lg:relative lg:top-0 absolute -top-[500px] ease-in duration-300 left-0 z-30 primary-bg text-center w-60 lg:bg-[#0000] rounded-br-md"}>
          
          <ul className="lg:flex justify-center  gap-1 text-xl menu-item font-medium flex-wrap relative space-y-3 pb-4">
            {/* all nav items here */}
            <div className="h-10 block lg:hidden">
              <span className=" absolute left-0 top-0 secondary-bg px-3 rounded-bl-sm text-white" onClick={handleMenu}>X</span>
            </div>
            <li className="subheading">
              <NavLink to="/" className="subheading"  >Home</NavLink>
              
            </li>
            <li>
              <NavLink className="subheading" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className="subheading" to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink  className="subheading" to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink className="subheading" to="/events">Events</NavLink>
            </li>
            <li>
              <NavLink className="subheading" to="/trainers">Trainers</NavLink>
            </li>
            <li>
              <NavLink className="subheading" to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink className="subheading" to="/contact">Contact</NavLink>
            </li>
            <li>
             <LogOut/>
            </li>
             {
              (user && isAdmin) &&  (<li>
                <NavLink to="/dashboard/adminHome">Dashboard</NavLink>
              </li>)
             }
          </ul>
        </div>
        
        <div className="text-lg">
          {
            user ?
            <div className="flex justify-end gap-2">
              <span className="w-8 bg-white rounded-full  secondary-color p-1"><FaSearch></FaSearch></span>
              <span onClick={handleNotification} className="w-8 relative bg-white rounded-full secondary-color cursor-pointer p-1">
                <IoNotificationsOutline></IoNotificationsOutline>

                <div className={notification ? "w-96 primary-bg max-h-screen absolute right-0 top-10 rounded-md py-4 ease-in duration-300 border-primary" : "w-96 primary-bg overflow-hidden absolute right-0 -top-[500px] py-10 z-10 ease-in duration-300 max-h-80"}>
                  <h1 className="border-b border-b-white px-4 pb-4">Notification</h1>
                  {
                    notifications?.allNotification && notifications?.allNotification.map(notification => <Link to={notification.redirect}><div className="px-4 py-2 border-b border-b-white hover:bg-white">
                      <p>{notification.title}</p>
                      <div className="flex justify-between items-center">
                        <p className="text-[10px]">{moment(notification.date, "YYYYMMDDHHmm").fromNow()}</p>
                        {
                          notification.isRead ? <p className="w-5"><FaRegEnvelopeOpen ></FaRegEnvelopeOpen></p> : <p className="w-5"><FaRegEnvelope></FaRegEnvelope></p>  
                        }
                        
                      </div>
                    </div></Link>)
                  }
                </div>
              </span>
              <img className="w-8 h-8 rounded-full" src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png" alt="" />
            </div>
            :
            <Link to={'/login'} className="login bg-white secondary-color">Login</Link>
          }
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
