import image1 from "../../assets/about/about_1.jpg";
import image2 from "../../assets/about/about_2.jpg";
import { IoCheckmarkDone } from "react-icons/io5";
import Title from "../../Shared/Title";
import { GrYoga } from "react-icons/gr";
import { GiRunningShoe } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { GiOvermind } from "react-icons/gi";
import { GiBoxingGlove } from "react-icons/gi";
import { FaNutritionix } from "react-icons/fa6";
import image3 from "../../assets/about/about_3.jpg";
import { VscDebugStart } from "react-icons/vsc";
import { Helmet, } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>
        Revive | About
        </title>
      </Helmet>
      {/* <AboutTitle /> */}
      {/* 1st section */}
      <div className="flex flex-col sm:flex-row md:flex-row px-[2%] sm:px-[5%] lg:px-[8%] mt-14 gap-10">
        <img
          src={image2}
          alt=""
          className="w-[410px] md:w-[300px] rounded-md object-cover border-t-8 border-l-8 border-[#448c74] transition delay-150 duration-300 ease-in-out hover:scale-90"
        />
        <div>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold">
            Join with best fitness coach
          </h2>
          <p className="max-w-xl py-7">
            Our personal trainers can help you meet your fitness goals. They can
            become your teacher, your motivator, your coach and your friend. Our
            personal trainers are degreed and certified by an accredited fitness
            organization.
          </p>
          <ul className="list-image">
            <li className="flex gap-4">
              <IoCheckmarkDone className="w-[25px] text-[#448c74]" />
              Teach you to exercise using proper form to prevent injury
            </li>
            <li className="flex gap-4 py-3">
              <IoCheckmarkDone className="w-[25px] text-[#448c74]" />
              Add diversity to your workout to get over a weight-loss plateau
            </li>
            <li className="flex gap-4">
              <IoCheckmarkDone className="w-[25px] text-[#448c74]" />
              Boost athletic performance with sport-specific training
            </li>
            <li className="flex gap-4 py-3">
              <IoCheckmarkDone className="w-[25px] text-[#448c74]" />
              Give you the accountability and motivation to get to the gym
            </li>
            <li className="flex gap-4">
              <IoCheckmarkDone className="w-[25px] text-[#448c74]" />
              Encourage you to try new fitness challenges and drive your health
              forward
            </li>
          </ul>
        </div>
      </div>
      {/* second section */}
      <div className="flex flex-col sm:flex-row md:flex-row justify-between px-[2%] sm:px-[5%] lg:px-[8%] mt-14 gap-10">
        <div>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold">
            Our{" "}
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#448c74] relative inline-block">
              <span className="relative text-white">misssion</span>
            </span>
          </h2>
          <p className="max-w-2xl py-7 text-lg text-justify indent-16">
            Our personal trainers can help you meet your fitness goals. They can
            become your teacher, your motivator, your coach and your friend. Our
            personal trainers are degreed and certified by an accredited fitness
            orga-nization.
          </p>
          <p className="max-w-2xl py-5 text-lg text-justify indent-16">
            Our personal trainers can help you meet your fitness goals. They can
            become your teacher, your motivator, your coach and your friend. Our
            personal trainers are degreed and certified by an accredited fitness
            orga-nization.
          </p>
        </div>
        <img
          src={image1}
          alt=""
          className="md:w-[500px] rounded-md object-cover transition delay-150 duration-300 ease-in-out hover:scale-90 border-b-8 border-r-8 border-[#448c74]"
        />
      </div>
      {/* third section */}

      <div>
        <div className="paralax-item  bg-fixed my-14 py-7">
          <Title
            subHeading={"Discover the Reasons"}
            heading={"Why People Chose Us"}
          />
          <div>
            <div className="px-[2%] sm:px-[5%] lg:px-[8%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="p-6 max-w-sm rounded-xl shadow-lg flex items-center space-x-4 transition delay-150 duration-300 ease-in-out hover:scale-110">
                <div className="shrink-0">
                  <GrYoga
                    className="h-12 w-12 text-[#448c74]"
                    src="/img/logo.svg"
                    alt="ChitChat Logo"
                  />
                </div>
                <div>
                  <div className="text-xl font-medium text-black hover:text-[#448c74]">
                    Experinced Coachers
                  </div>
                  <p className="text-slate-500">
                    We’re here to help you overcome the barriers in the way to a
                    ...
                  </p>
                </div>
              </div>
              <div className="p-6 max-w-sm rounded-xl shadow-lg flex items-center space-x-4">
                <div className="shrink-0">
                  <GiRunningShoe
                    className="h-12 w-12 text-[#448c74]"
                    src="/img/logo.svg"
                    alt="ChitChat Logo"
                  />
                </div>
                <div>
                  <div className="text-xl font-medium text-black hover:text-[#448c74]">
                    Workout routines
                  </div>
                  <p className="text-slate-500">
                    We’re here to help you overcome the barriers in the way to a
                    ...
                  </p>
                </div>
              </div>
              <div className="p-6 max-w-sm rounded-xl shadow-lg flex items-center space-x-4 transition delay-150 duration-300 ease-in-out hover:scale-110">
                <div className="shrink-0">
                  <FaHandshake
                    className="h-12 w-12 text-[#448c74]"
                    src="/img/logo.svg"
                    alt="ChitChat Logo"
                  />
                </div>
                <div>
                  <div className="text-xl font-medium text-black hover:text-[#448c74]">
                    Support & Motivation
                  </div>
                  <p className="text-slate-500">
                    We’re here to help you overcome the barriers in the way to a
                    ...
                  </p>
                </div>
              </div>
              <div className="p-6 max-w-sm rounded-xl shadow-lg flex items-center space-x-4">
                <div className="shrink-0">
                  <GiOvermind
                    className="h-12 w-12 text-[#448c74]"
                    src="/img/logo.svg"
                    alt="ChitChat Logo"
                  />
                </div>
                <div>
                  <div className="text-xl font-medium text-black hover:text-[#448c74]">
                    Balance Body And Mind
                  </div>
                  <p className="text-slate-500">
                    The relationship between the mind and body is complex...
                  </p>
                </div>
              </div>
              <div className="p-6 max-w-sm rounded-xl shadow-lg flex items-center space-x-4 transition delay-150 duration-300 ease-in-out hover:scale-110">
                <div className="shrink-0">
                  <GiBoxingGlove
                    className="h-12 w-12 text-[#448c74]"
                    src="/img/logo.svg"
                    alt="ChitChat Logo"
                  />
                </div>
                <div>
                  <div className="text-xl font-medium text-black hover:text-[#448c74]">
                    Physical Activity
                  </div>
                  <p className="text-slate-500">
                    Walking, running, dancing, swimming, yoga are a few physical
                    activity...
                  </p>
                </div>
              </div>
              <div className="p-6 max-w-sm rounded-xl shadow-lg flex items-center space-x-4">
                <div className="shrink-0">
                  <FaNutritionix
                    className="h-12 w-12 text-[#448c74]"
                    src="/img/logo.svg"
                    alt="ChitChat Logo"
                  />
                </div>
                <div>
                  <div className="text-xl font-medium text-black hover:text-[#448c74]">
                    Healthy nutrition
                  </div>
                  <p className="text-slate-500">
                    People are most productive when they wake up, and setting
                    ...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* fourth second */}
      <div className="flex flex-col sm:flex-row md:flex-row justify-between px-[2%] sm:px-[5%] lg:px-[8%] mt-14 gap-10 mb-14">
        <div className="relative">
          <img
            src={image3}
            alt=""
            className="md:w-[500px]  object-cover  border-[#448c74] rounded-t-md"
          />
          <button
            className=" absolute left-44 top-44"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <VscDebugStart className="w-[44px] h-[44px] text-pink-600 rounded-full bg-[#e9f0ec] animate-ping cursor-pointer" />
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <iframe
                className="w-full aspect-video h-[500]"
                src="https://www.youtube.com/embed/8ef7FhmMcLU"
              ></iframe>
            </div>
          </dialog>

          <p className="bg-[#448c74] text-white px-2 py-2 text-lg rounded-b-md">
            Watch our video to learn how you can be a part of the health
            revolution as a Health Coach!
          </p>
        </div>
        <div>
          <h2 className="text-2xl md:text-4xl  font-bold">
            We Have The Best Caretaker To Providing Best Services Purchase –{" "}
            <span className="text-[#448c74]">Revive</span>.
          </h2>
          <p className="max-w-2xl py-7 text-lg text-justify">
            Explain to you how all this mistaken idea of denouncing ut pleasure
            work praising pain was born and will give you can complete design
            account sed the system, and expound the actual teachngs interior of
            the great design explorer of the truth master-builders design of
            human happiness one seds rejects, dislikes, or avoids pleasures give
            of the master-builder of human itself.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
