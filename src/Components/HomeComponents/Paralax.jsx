import { Parallax } from "react-parallax";
import Title from "../../Shared/Title";
// import "../../Styles/paralax.css";
import { RiTimeLine } from "react-icons/ri";

const Paralax = () => {
  return (

    <div>
        <Title subHeading={"Discover the Reasons"} heading={"Why Chose Us"} fontColor={'sky-800'} />
       <div className="">
       <Parallax
          blur={1}
        
          bgImage={"https://i.ibb.co/tbHZyP1/fitness-course-bg.webp"}
          bgImageAlt="fitness-course-bg"
          strength={200}
          className="hero w-full rounded-sm bg-center "
        >
    
    
      <div className="py-10 px-[2%] sm:px-[5%] lg:px-[8%]">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
            <RiTimeLine className="text-2xl text-sky-100 animate-spin"/>
            </div>
            <div className="timeline-start  hover:shadow-2xl duration-300 transition hover:scale-95 px-2 py-3 space-y-2 md:text-end mb-9">
              <div className="text-2xl font-bold text-[#e5c466] ">
                Balance Body And Mind
              </div>
              <p className="font-semibold max-w-sm text-sky-200">
                
                The relationship between the mind and body is complex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, deleniti?
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
            <RiTimeLine className="text-2xl text-sky-100 animate-spin"/>
            </div>
            <div className="timeline-end hover:shadow-2xl duration-300 transition hover:scale-95 mb-9 px-2 py-3 space-y-2">
              <div className="text-2xl font-semibold text-[#e5c466]">
                Physical Activity
              </div>
              <p className="font-semibold max-w-sm text-sky-200">
                
                Walking, running, dancing, swimming, yoga are a few physical
                activity. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, deleniti?
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
            <RiTimeLine className="text-2xl text-sky-100 animate-spin"/>
            </div>
            <div className="timeline-start hover:shadow-2xl duration-300 transition hover:scale-95 mb-9 px-2 py-3 space-y-2 md:text-end">
              <div className="text-2xl font-semibold text-[#e5c466]">
                Fitness & Performance
              </div>
              <p className="font-semibold max-w-sm text-sky-200">
               
                We’re here to help you overcome the barriers in the Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, deleniti?
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
            <RiTimeLine className="text-2xl text-sky-100 animate-spin"/>
            </div>
            <div className="timeline-end hover:shadow-2xl duration-300 transition hover:scale-95 mb-9 px-2 py-3 space-y-2">
              <div className="text-2xl font-semibold text-[#e5c466]">
                Exercise Program
              </div>
              <p className="font-semibold max-w-sm text-sky-200">
                
                You have to know which exercises are useful for which Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, deleniti?
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
            <RiTimeLine className="text-2xl text-sky-100 animate-spin"/>
            </div>
            <div className="timeline-start hover:shadow-2xl duration-300 transition hover:scale-95 py-3 px-3 md:text-end">
              <div className="text-2xl font-semibold text-[#e5c466]">
                Healthy Daily Life
              </div>
              <p className="font-semibold text-sky-200">
               
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
