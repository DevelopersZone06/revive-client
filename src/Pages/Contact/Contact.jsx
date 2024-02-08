// -------icons from react-icons-------
// react icons
import { FaPhoneVolume, FaUserCog } from "react-icons/fa";
import { MdLocationOn, MdMarkEmailRead, MdOutlineMailLock } from "react-icons/md";
import { BsTextareaT } from "react-icons/bs";

import { Helmet } from "react-helmet-async";


const Contact = () => {
  return (
 
      <div>

<Helmet>
  <title>
    Revive | Contacts
  </title>
</Helmet>
<div className="mt-12">
            <div className="px-[2%] sm:px-[5%] lg:px-[8%]">
                {/* contact header */}
            <h1 className="text-3xl font-semibold text-center text-sky-700">Contact Us</h1>
                        <p className="max-w-lg mx-auto text-center text-gray-400">Alternatively, you can contact us directly via email or phone using the information provided below. Our dedicated team is ready to assist you with any questions or concerns you may have.</p>
                <div className="flex flex-col lg:flex-row mt-14 justify-between">
                    <div className="mb-10">
                        
                       <form action="">
                         {/* name input */}
                         <label className="relative block my-3">
                            <span className="sr-only">Name</span>
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <FaUserCog className="dark:text-black w-[20px]"/>
                                </span>
                            <input className="placeholder:italic w-full md:w-[500px] placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-600 focus:ring-sky-700 focus:ring-1 sm:text-sm" placeholder="Write your name..." type="text" name="name" />
                        </label>
                        {/* email input */}
                        <label className="relative block my-3">
                            <span className="sr-only">Name</span>
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <MdOutlineMailLock className="dark:text-black w-[20px]"/>
                                </span>
                            <input className="placeholder:italic w-full md:w-[500px] placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-600 focus:ring-sky-700 focus:ring-1 sm:text-sm" placeholder="Write your email..." type="email" name="email" />
                        </label>
                        {/* textarea */}
                        <label className="relative block my-3">
                            <span className="sr-only">Name</span>
                            <span className="absolute left-0 flex pl-2">
                            
                            <BsTextareaT className="dark:text-black mt-3 w-[20px]"/>
                                </span>
                            
                            <textarea  className="placeholder:italic w-full md:w-[500px] placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-600 focus:ring-sky-700 focus:ring-1 sm:text-sm" placeholder="Write your email..." name="" id="" cols="30" rows="7"></textarea>
                        </label>
                        <button
                 
                 className="rounded-xl px-8 py-3 hover:bg-[#144479] border border-sky-700 hover:text-sky-100 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all duration-150 ease-in-out "
               >
               Submit
               </button>
                       </form>
                    </div>
                    {/* google map */}
                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.462637538703!2d90.39441833345147!3d23.778895394663838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77094eace8b%3A0x1cd8c2d9239b6cb7!2sMohakhali%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1707363299554!5m2!1sen!2sbd" height="450"  allowFullScreen loading="lazy" className="w-full md:w-[600px]" referrerPolicy="no-referrer-when-downgrade"/>
               
                
                </div>
                   
               
                </div>
               

  <div className="px-[2%] sm:px-[5%] lg:px-[8%]">
    
    {/* from and lottie */}
    <div className="flex justify-between items-center flex-col sm:flex-col md:flex-col lg:flex-row mb-14">
     
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
</div>
</div>
    
  );
};

export default Contact;
