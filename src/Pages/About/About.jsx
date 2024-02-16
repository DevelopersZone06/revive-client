import image1 from "../../assets/about/about_1.jpg";
import image2 from "../../assets/about/about_2.jpg";
import { IoCheckmarkDone } from "react-icons/io5";

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
     
      {/* 1st section */}
      <div className="flex flex-col sm:flex-row md:flex-row px-[2%] sm:px-[5%] lg:px-[8%] mt-28 gap-10">
        <img
          src={image2}
          alt=""
          className="w-[410px] md:w-[300px] rounded-md object-cover border-t-8 border-l-8 border-sky-900 transition delay-150 duration-300 ease-in-out hover:scale-90"
        />
        <div>
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold  text-sky-800">
            Join with best fitness coach
          </h2>
          <p className="max-w-xl py-7 text-sm">
            Our personal trainers can help you meet your fitness goals. They can
            become your teacher, your motivator, your coach and your friend. Our
            personal trainers are degreed and certified by an accredited fitness
            organization.
          </p>
          <ul className="list-image text-sm">
            <li className="flex gap-4">
              <IoCheckmarkDone className="w-[20px] text-sky-700 " />
              Teach you to exercise using proper form to prevent injury
            </li>
            <li className="flex gap-4 py-3">
              <IoCheckmarkDone className="w-[20px] text-sky-700 " />
              Add diversity to your workout to get over a weight-loss plateau
            </li>
            <li className="flex gap-4">
              <IoCheckmarkDone className="w-[20px] text-sky-700  " />
              Boost athletic performance with sport-specific training
            </li>
            <li className="flex gap-4 py-3">
              <IoCheckmarkDone className="w-[20px] text-sky-700  " />
              Give you the accountability and motivation to get to the gym
            </li>
            <li className="flex gap-4">
              <IoCheckmarkDone className="w-[20px] text-sky-700 " />
              Encourage you to try new fitness challenges and drive your health
              forward
            </li>
          </ul>
        </div>
      </div>
      {/* second section */}
      <div className="flex flex-col sm:flex-row md:flex-row justify-between px-[2%] sm:px-[5%] lg:px-[8%] mt-28 gap-10">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-sky-800">
            Our{" "}
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-sky-700 text-sky-300 relative inline-block">
              <span className="relative text-white subheading">misssion</span>
            </span>
          </h2>
          <p className="max-w-2xl py-7 text-sm text-justify indent-16 ">
            Our personal trainers can help you meet your fitness goals. They can
            become your teacher, your motivator, your coach and your friend. Our
            personal trainers are degreed and certified by an accredited fitness
            orga-nization.
          </p>
          <p className="max-w-2xl py-5 text-sm text-justify indent-16">
          Through our evidence-based approach, we strive to educate and inspire our clients to make sustainable lifestyle changes that go beyond mere physical appearance, focusing instead on overall health and happiness. We understand that each individual's journey is unique, and we are dedicated to providing personalized support and guidance every step of the way.
          </p>
        </div>
        <img
          src={image1}
          alt=""
          className="md:w-[500px] rounded-md object-cover transition delay-150 duration-300 ease-in-out hover:scale-90 border-b-8 border-r-8 border-sky-800"
        />
      </div>
      {/* third section */}

     
      {/* fourth second */}
      <div className="flex flex-col sm:flex-row md:flex-row justify-between px-[2%] sm:px-[5%] lg:px-[8%] mt-32 gap-10 mb-14">
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
            <VscDebugStart className="w-[44px] h-[44px] text-sky-700 rounded-full bg-[#e9f0ec] animate-ping cursor-pointer" />
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box ">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <iframe
                className="w-full aspect-video h-[500] "
                src="https://www.youtube.com/embed/8ef7FhmMcLU"
              ></iframe>
            </div>
          </dialog>

          <p className="bg-sky-800 text-white px-4  py-2 text-sm rounded-b-md w-12/13">
            Watch our video to learn how you can be a part of the health
            revolution as a Health Coach!
          </p>
        </div>
        <div>
          <h2 className="text-xl md:text-3xl  font-bold text-sky-700">
            We Have The Best Caretaker To Providing Best Services Purchase –{" "}
            <span className="text-sky-900">Revive</span>.
          </h2>
          <p className="max-w-2xl py-7 text-sm text-justify">
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
