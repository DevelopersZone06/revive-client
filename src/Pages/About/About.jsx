import AboutTitle from "./AboutTitle";
import image1 from '../../assets/about/about_1.jpg'
import image2 from '../../assets/about/about_2.jpg'
import { IoCheckmarkDone } from "react-icons/io5";
import Title from "../../Shared/Title";
import { GrYoga } from "react-icons/gr";
import { GiRunningShoe } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
const About = () => {
    return (
        <div>
            <AboutTitle />
            {/* 1st section */}
            <div className="flex flex-col sm:flex-row md:flex-row mx-6 mt-14 gap-10">
                <img src={image2} alt="" className="w-[410px] md:w-[300px] rounded-md object-cover border-t-8 border-l-8 border-[#448c74] transition delay-150 duration-300 ease-in-out hover:scale-90" />
                <div>
                    <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold">Join with best fitness coach</h2>
                    <p className="max-w-xl py-7">Our personal trainers can help you meet your fitness goals. They can become your teacher, your motivator, your coach and your friend. Our personal trainers are degreed and certified by an accredited fitness organization.</p>
                    <ul className="list-image">
                        <li className="flex gap-4">
                            <IoCheckmarkDone className="w-[25px] text-[#448c74]" />Teach you to exercise using proper form to prevent injury
                        </li>
                        <li className="flex gap-4 py-3">
                            <IoCheckmarkDone className="w-[25px] text-[#448c74]" />Add diversity to your workout to get over a weight-loss plateau
                        </li>
                        <li className="flex gap-4">
                            <IoCheckmarkDone className="w-[25px] text-[#448c74]" />Boost athletic performance with sport-specific training
                        </li>
                        <li className="flex gap-4 py-3">
                            <IoCheckmarkDone className="w-[25px] text-[#448c74]" />Give you the accountability and motivation to get to the gym
                        </li>
                        <li className="flex gap-4">
                            <IoCheckmarkDone className="w-[25px] text-[#448c74]" />Encourage you to try new fitness challenges and drive your health forward
                        </li>
                    </ul>
                </div>
            </div>
            {/* second section */}
            <div className="flex flex-col sm:flex-row md:flex-row justify-between mx-6 mt-14 gap-10">

                <div>
                    <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold">Our <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#448c74] relative inline-block"><span className="relative text-white">misssion</span></span></h2>
                    <p className="max-w-2xl py-7 text-lg text-justify indent-16">Our personal trainers can help you meet your fitness goals. They can become your teacher, your motivator, your coach and your friend. Our personal trainers are degreed and certified by an accredited fitness orga-nization.</p>
                    <p className="max-w-2xl py-5 text-lg text-justify indent-16">Our personal trainers can help you meet your fitness goals. They can become your teacher, your motivator, your coach and your friend. Our personal trainers are degreed and certified by an accredited fitness orga-nization.</p>

                </div>
                <img src={image1} alt="" className="md:w-[500px] rounded-md object-cover transition delay-150 duration-300 ease-in-out hover:scale-90" />
            </div>
            {/* third section */}

            <div>
                <div className="paralax-item  bg-fixed my-14 py-7">
                    <Title subHeading={'Discover the Reasons'} heading={'Why People Chose Us'} />
                    <div>
                        <div className="mx-6 grid grid-cols-3 gap-5">
                          
                            
                            <div className="p-6 max-w-sm rounded-xl shadow-lg flex items-center space-x-4">
                                <div className="shrink-0">
                                    <GrYoga className="h-12 w-12 text-[#448c74]" src="/img/logo.svg" alt="ChitChat Logo"/>
                                </div>
                                <div>
                                    <div className="text-xl font-medium text-black hover:text-[#448c74]">Experinced Coachers</div>
                                    <p className="text-slate-500">We’re here to help you overcome the barriers in the way to a ...</p>
                                </div>
                            </div>
                            <div className="p-6 max-w-sm rounded-xl shadow-lg flex items-center space-x-4">
                                <div className="shrink-0">
                                    <GiRunningShoe className="h-12 w-12 text-[#448c74]" src="/img/logo.svg" alt="ChitChat Logo"/>
                                </div>
                                <div>
                                    <div className="text-xl font-medium text-black hover:text-[#448c74]">Workout routines</div>
                                    <p className="text-slate-500">We’re here to help you overcome the barriers in the way to a ...</p>
                                </div>
                            </div>
                            <div className="p-6 max-w-sm rounded-xl shadow-lg flex items-center space-x-4">
                                <div className="shrink-0">
                                    <FaHandshake className="h-12 w-12 text-[#448c74]" src="/img/logo.svg" alt="ChitChat Logo"/>
                                </div>
                                <div>
                                    <div className="text-xl font-medium text-black hover:text-[#448c74]">Support & Motivation</div>
                                    <p className="text-slate-500">We’re here to help you overcome the barriers in the way to a ...</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;