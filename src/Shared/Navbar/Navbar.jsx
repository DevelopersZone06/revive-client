import { Link, NavLink } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { useState } from "react";


const Navbar = () => {
  const user = true
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }

  return (
    <div className="bg-[#599983] px-[2%] sm:px-[5%] lg:px-[8%] text-white">
      <nav className="flex justify-between items-center py-4">
      <div className="block lg:hidden">
          <span onClick={handleMenu}><FaBars className="text-xl" /></span>
        </div>

        <div>
          <h1 className="text-3xl font-bold">Revive</h1>
        </div>

        <div className={menu ? "lg:flex-1 ease-in duration-300 lg:relative lg:top-0 w-60 absolute top-0 left-0 primary-bg text-center secondary-color lg:bg-[#0000] lg:text-white z-10 rounded-br-md" : "lg:flex-1 lg:relative lg:top-0 absolute -top-[500px] ease-in duration-300 left-0 z-10 primary-bg text-center w-60 lg:bg-[#0000] rounded-br-md"}>
          
          <ul className="lg:flex justify-center gap-1 text-lg menu-item font-medium flex-wrap relative space-y-3 pb-4">
            {/* all nav items here */}
            <div className="h-10 block lg:hidden">
              <span className=" absolute left-0 top-0 secondary-bg px-3 rounded-bl-sm text-white" onClick={handleMenu}>X</span>
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
          </ul>
        </div>
        
        <div className="text-lg">
          {
            user ?
            <div className="flex justify-end gap-2">
              <span className="w-8 bg-white rounded-full secondary-color p-1"><FaSearch></FaSearch></span>
              <span className="w-8 bg-white rounded-full secondary-color p-1"><IoNotificationsOutline></IoNotificationsOutline></span>
              <img className="w-8 h-8 rounded-full" src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png" alt="" />
            </div>
            :
            <Link className="login bg-white secondary-color">Login</Link>
          }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
