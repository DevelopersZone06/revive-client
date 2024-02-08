// -------icons from react-icons-------

import { MdLocationOn } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { Helmet } from "react-helmet-async";


const Contact = () => {
  return (
    <>
      <div>

<Helmet>
  <title>
    Revive | Contacts
  </title>
</Helmet>

  <div className="px-[2%] sm:px-[5%] lg:px-[8%]">
    <h2 className="text-2xl md:text-4xl font-bold text-sky-800 mt-12">
      Get in touch with us
    </h2>
    {/* from and lottie */}
    <div className="flex justify-between items-center flex-col sm:flex-col md:flex-col lg:flex-row mb-14">
      <div className=" flex-1 my-3">
        <form className={`w-full duration-500 space-y-3`}>
          <div className="flex flex-col sm:flex-col md:flex-row gap-2 w-full">
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
            />

            <input
              id="_email"
              type="email"
              placeholder="example@gmail.com"
              min={5}
              className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
            />
          </div>
          <input
            id="subject"
            type="text"
            placeholder="Your Subject"
            className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
          />
          <textarea
            id="_email"
            type="email"
            placeholder="Your Massage"
            rows={8}
            className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
          />
          {/* button type will be submit for handling form submission*/}
          <button className="border-secondary px-10 py-2 rounded-md uppercase text-xl font-semibold text-sky-800 hover:bg-sky-800 hover:text-sky-100">
            Submit
          </button>
        </form>
      </div>
      
    </div>
    <div className="shadow-md border-b-4 border-sky-800 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 py-10 gap-5">
        <div className="text-center">
          <div className="flex justify-center items-center">
            <MdLocationOn className="w-[35px] animate-bounce text-sky-800" />
          </div>
          <h2 className="font-semibold text-2xl">Visit our location</h2>
          <p>Sector-03, Dhaka-1230.</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center items-center">
            <FaPhoneVolume className="w-[35px] animate-ping text-sky-800" />
          </div>
          <h2 className="font-semibold text-2xl">Contact us now</h2>
          <p>+880-01233-456789</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center items-center">
            <MdMarkEmailRead className="w-[35px] text-sky-800" />
          </div>
          <h2 className="font-semibold text-2xl">Contact us now</h2>
          <p>DevelopersZone06.com</p>
        </div>
       
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Contact;
