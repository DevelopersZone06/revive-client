/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Error from '../../assets/Animation.json'
import { useRef } from "react";


const ErrorPage = () => {
  const container = useRef(null);

  return (
    <div>
      
      <div className="container max-w-xl mx-auto " >
      
         <Lottie animationData={Error}></Lottie>
      </div>
      <div className="flex justify-center">
        <Link
          to="/"
          className=" text-center bg-[#448c74]  text-white p-3 rounded "
        >
          Go Back To Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
