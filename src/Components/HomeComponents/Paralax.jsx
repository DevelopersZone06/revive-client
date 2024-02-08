import { Parallax } from "react-parallax";
import Title from "../../Shared/Title";
import "../../Styles/paralax.css";

const Paralax = () => {
  return (

    <div className=" py-28 px-[2%] sm:px-[5%] lg:px-[8%]">
        <Title subHeading={"Discover the Reasons"} heading={"Why Chose Us"} fontColor={'sky-800'} />
       <div className="">
       <Parallax
          blur={1}
        
          bgImage={"https://i.ibb.co/0t842nT/silhouette-stylish-female-cut-out-brown-hair.jpg"}
          bgImageAlt="the cat"
          strength={200}
          className="hero w-full rounded-lg bg-center "
        >
    
    
      <div className="py-28 px-36">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-16">
              <div className="text-xl font-bold text-[#e5c466] ">
                Balance Body And Mind
              </div>
              <p className="font-semibold text-sky-200">
                {" "}
                The relationship between the mind and body is complex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, deleniti?
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-16">
              <div className="text-lg font-semibold text-[#e5c466]">
                Physical Activity
              </div>
              <p className="font-semibold text-sky-200">
                {" "}
                Walking, running, dancing, swimming, yoga are a few physical
                activity. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, deleniti?
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-16">
              <div className="text-lg font-semibold text-[#e5c466]">
                Fitness & Performance
              </div>
              <p className="font-semibold text-sky-200">
                {" "}
                We’re here to help you overcome the barriers in the Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, deleniti?
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-16">
              <div className="text-lg font-semibold text-[#e5c466]">
                Exercise Program
              </div>
              <p className="font-semibold text-sky-200">
                {" "}
                You have to know which exercises are useful for which Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, deleniti?
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end">
              <div className="text-lg font-semibold text-[#e5c466]">
                Healthy Daily Life
              </div>
              <p className="font-semibold text-sky-200">
                {" "}
                People are most productive when they wake up, and setting Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptate?
              </p>
            </div>
          </li>
        </ul>
      </div>
      </Parallax>
       </div>
    </div>
  
  );
};

export default Paralax;
