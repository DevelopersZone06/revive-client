import { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [openSearch, setOpenSearch] = useState(false);

  return (
    <div className="bg-[#448c74f5] px-[2%] sm:px-[5%] lg:px-[8%]">
      <nav className="flex justify-between items-center py-4 top-0">
        <Link to="/" className="title font-bold text-base flex">
          Revive
        </Link>
        <div
          className="menu absolute top-3 right-2 flex-col justify-between w-10 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="h-2 w-[100%] bg-white rounded"></span>
          <span className="h-2 w-[100%] bg-white rounded"></span>
          <span className="h-2 w-[100%] bg-white rounded"></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          {/* all nav items here */}
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
            <NavLink to="/pages">Pages</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          {openSearch ? (
            <li>
              <input type="text" placeholder="Type here" className="input w-full max-w-xs text-black" />
            </li>
          ) : (
            <li>
              <img
                className="w-12 cursor-pointer"
                onClick={() => setOpenSearch(true)}
                src="https://i.ibb.co/12BnwFJ/icons8-search-64.png"
                alt=""
              />
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
