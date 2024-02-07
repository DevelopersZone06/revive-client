import { HomeIcon, InboxIcon, PhoneIcon } from '@heroicons/react/solid';
import {  FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


var moment = require('moment');
const Footer = () => {
  return (
    <div   className=" mt-10 p-10" >
      <div className="grid grid-cols-1 lg:grid-cols-5 mx-10  ">

        <div className="col-lg-4  col-md-6 mb-4 mb-md-0">
         

          <ul style={{ marginLeft: "1.70em" }}>
            <li className="mb-3 justify-center flex text-start   list-unstyled">
              Revive
            </li>
            <li className="mb-3 flex text-start list-unstyled">
            Welcome to Revive Yoga, where the path to well-being begins. 
            </li>
           
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">



          <ul style={{ marginLeft: "1.70em" }}>
            <li className="mb-3 flex justify-center text-start   list-unstyled">
              Company
            </li>
          
            <li className="mb-3 flex justify-center text-start  list-unstyled">
              Service
            </li>
            <li className="mb-3 flex justify-center text-start list-unstyled">
              Login
            </li>
            <li className="mb-3 flex text-start justify-center list-unstyled">
              Register

            </li>
          </ul>
        </div>
        <div className="col-lg-4 justify-center col-md-6 mb-4 mb-md-0">
        


          <ul style={{ marginLeft: "1.70em" }}>
            <li className="mb-3 flex text-start justify-center list-unstyled">
              Website
            </li>
            <li className="mb-3 flex text-start justify-center list-unstyled">
              Home
            </li>
            <li className="mb-3 flex text-start justify-center list-unstyled">
              About Us
            </li>
            <li className="mb-3 flex text-start justify-center list-unstyled">
              Blog

            </li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">

          <ul style={{ marginLeft: "1.70em" }}>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4 pb-1 text-center"> Contact</h5>


        </div>
            <li className="mb-3 flex text-start justify-center list-unstyled">
              <span><HomeIcon style={{ width: "30px" }}></HomeIcon></span><span className="ms-2">Sector-03,  Dhaka-1230.</span>
            </li>
            <li className="mb-3 flex text-start justify-center list-unstyled">
              <span ><InboxIcon style={{ width: "30px" }}></InboxIcon></span><span className="ms-2">DevelopersZone06.com</span>
            </li>
            <li className="mb-3 flex text-start justify-center list-unstyled">
              <span ><PhoneIcon style={{ width: "30px" }}></PhoneIcon></span><span className="ms-2">+880 111 222 333 999 </span>
            </li>
          </ul>
        </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">

          <ul style={{ marginLeft: "1.70em" }}>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">


          <ul style={{ marginLeft: "1.70em" }}>
          
            <li className="mb-3 flex justify-center list-unstyled">
            Explore
            </li>
            <li className="mb-3 flex justify-center list-unstyled">
            Features
            </li>
            <li className="mb-3 flex  justify-center list-unstyled">
              Security
            </li>
            <li className="mb-3 flex  justify-center list-unstyled">
              Pricing
            </li>
          </ul>
        </div>
       
          </ul>
        </div>
   <div>
    
   </div>

      </div>
      <hr className="m-16" />
      <div className='flex m-auto justify-center gap-3 mt-5 text-white'>
        <a className=' rounded-full p-2 text-center cursor-pointer'><FaFacebook className='w-5 h-5' /></a>

        <a className=' rounded-full p-2 text-center cursor-pointer'><FaTwitter className='w-5 h-5' /></a>

        <a className=' rounded-full p-2 text-center cursor-pointer'><FaLinkedin className='w-5 h-5' /></a>

        <a className=' rounded-full p-2 text-center cursor-pointer'><FaInstagram className='w-5 h-5' /></a>


      </div>
      <div className='flex gap-2 items-center justify-center px-5'>
               
                <p><small>Copyright <span></span> {} - All right reserved by Revive</small></p>
            </div>



    </div>
  );
};

export default Footer;