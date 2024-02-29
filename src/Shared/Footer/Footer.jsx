import { HomeIcon, InboxIcon, PhoneIcon } from "@heroicons/react/solid";
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import moment from 'moment'
import footerImg from '../../assets/images/footer.jpg'
import logo from '../../assets/images/logo2.png'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ backgroundImage: `url(${footerImg})` }} className=" text-white px-[2%] sm:px-[5%] lg:px-[8%] pt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
        <div>
          <img src={logo} className="w-32 h-10 object-cover " />
          <p>Welcome to Revive Yoga, where the path to well-being begins.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-center mb-5">Explore</h2>
          <div className="flex justify-between">
            <ul>
              <Link to='/'><li>Home</li></Link>
              <Link to='/about'><li>About</li></Link>
              <Link to='/contact'><li>Contact Us</li></Link>
              <Link to='/trainers'><li>Trainers</li></Link>
            </ul>
            <ul className="text-right">
              <Link to='/'><li>Home</li></Link>
              <Link to='/about'><li>About</li></Link>
              <Link to='/contact'><li>Contact Us</li></Link>
              <Link to='/trainers'><li>Trainers</li></Link>
            </ul>

          </div>
        </div>

        <div>
          <ul>
            <div>
              <h5 className="text-center text-2xl font-semibold mb-5"> Contact</h5>
            </div>
            <li className="mb-3 flex text-start justify-center list-unstyled">
              <span>
                <HomeIcon style={{ width: "30px" }}></HomeIcon>
              </span>
              <span className="ms-2">Sector-03, Dhaka-1230.</span>
            </li>
            <li className="mb-3 flex text-start justify-center list-unstyled">
              <span>
                <InboxIcon style={{ width: "30px" }}></InboxIcon>
              </span>
              <span className="ms-2">DevelopersZone06.com</span>
            </li>
            <li className="mb-3 flex text-start justify-center list-unstyled">
              <span>
                <PhoneIcon style={{ width: "30px" }}></PhoneIcon>
              </span>
              <span className="ms-2">+880 111 222 333 999 </span>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-right">
          <h2 className="text-2xl font-semibold mb-5">Connect With</h2>
          <div className="flex gap-3 text-white justify-center md:justify-end">

            <a className=" rounded-full cursor-pointer border border-white p-2 bg-white secondary-color hover:bg-[#448c7400] hover:text-white">
              <FaFacebookF className="w-5 h-5" />
            </a>

            <a className=" rounded-full cursor-pointer border border-white p-2 bg-white secondary-color hover:bg-[#448c7400] hover:text-white">
              <FaTwitter className="w-5 h-5" />
            </a>

            <a className=" rounded-full cursor-pointer border border-white p-2 bg-white secondary-color hover:bg-[#448c7400] hover:text-white">
              <FaLinkedinIn className="w-5 h-5" />
            </a>

            <a className=" rounded-full cursor-pointer border border-white p-2 bg-white secondary-color hover:bg-[#448c7400] hover:text-white">
              <FaInstagram className="w-5 h-5" />
            </a>

            <a className=" rounded-full cursor-pointer border border-white p-2 bg-white secondary-color hover:bg-[#448c7400] hover:text-white">
              <FaWhatsapp className="w-5 h-5" />
            </a>

          </div>
        </div>

      </div>
      <hr />


      <p className="text-center">
        <small>
          Copyright {moment().format('YYYY')} - All right reserved by Revive
        </small>
      </p>


    </div>
  );
};

export default Footer;
