/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Aleart from '../../assets/Alert Symbol.json'
import Error from '../../assets/Animation.json'
import { useRef } from "react";


const ErrorPage = () => {
  const container = useRef(null);

  return (
    <div className="  grid grid-cols-1 md:grid-cols-2 mx-[5%] my-[2%]">

      <div className=" mx-auto" >
        <Lottie animationData={Aleart} className="w-16 m-auto"></Lottie>
        <h2 className="text-4xl font-bold text-center">Error</h2>
        <Lottie animationData={Error} className="w-3/4 m-auto"></Lottie>
      </div>
      <div className="text-center items-center lg:mr-32 pt-8 ">
        <h1 className="text-8xl font-extrabold">404</h1>
        <h1 className="text-5xl font-bold text-[#448c74]">Opps page not found</h1>
        <h2 className="text-3xl my-4 ">Sorry, the page you are looking for <br /> does not exit.</h2>
       <Link to="/">
       <div className="text-center lg:text-center">
          <a
            data-aos="fade-up"
            href="#home"
            className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#448c74] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out btn-bg group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-[#448c74]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-[#448c74] font-bold transition-colors duration-200 ease-in-out group-hover:text-[#448c74]">
              Go to Home
            </span>
          </a>
        </div>
       </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
