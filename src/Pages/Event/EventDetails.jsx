import { MdOutlineEventRepeat } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const EventDetails = () => {
    const {id} = useParams()
 const [event,setEvent] = useState({})
  useEffect( () => {
    useAxiosPublic(`/events?id=${id}`)
    .then(res => {
        setEvent(res.data)
    })
  }, [id])
  const {date} = event;
  const calculateTimeLeft = () => {
    const difference = new Date(date) - new Date();
    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
};

const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

useEffect(() => {
    const intervalId = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
}, [timeLeft]); // Add timeLeft as a dependency

  console.log(event)
    return (
        <>
            <div className="flex  justify-between px-[2%] sm:px-[5%] lg:px-[8%]">
                <div className="flex items-center my-5 cursor-pointer">
                    <h1 className="text-xl font-semibold ">Home </h1>
                    <IoMdArrowDropright className="w-[22px]" />
                    <h1 className="text-xl font-semibold text-[#448c74]">Event_Details</h1>
                </div>
                <div className="md:flex gap-5 items-center cursor-pointer hidden ">
                    <MdOutlineEventRepeat className="text-3xl" />

                </div>

            </div>
            <hr className="text-[#448c74]" />

            <div className="grid md:grid-cols-6 grid-col-1 gap-5 px-[2%] sm:px-[5%] lg:px-[8%] mt-14">
                <div className="col-span-4">
                    <h2 className="text-4xl font-bold">{event.title}</h2>
                    <p className="flex items-center text-[#448c74] pt-3"> <MdLocationOn className="w-[20px]" />{event.location}</p>
                    <img src={event.image} alt="" className="py-5 rounded" />
                    <p className="font-medium text-justify">{event.description}</p>
                    <h2 className="text-2xl font-bold py-5">A SHORT DESCRIPTION ABOUT THE EVENT SUMMERY.</h2>
                    <p className="font-medium text-justify py-4">Immerse yourself in a holistic approach to well-being as our expert instructors guide you through a series of energizing exercises designed to enhance flexibility, build strength, and promote overall balance. Whether you're a seasoned fitness enthusiast or just starting your wellness journey, our Fitness Fusion Workshop offers a diverse range of activities that cater to every individual's needs.</p>
                    <p className="font-medium text-justify py-4">Discover the joy of movement and the benefits of a well-rounded fitness routine, all while connecting with like-minded individuals in a supportive and uplifting environment. This workshop is not just about breaking a sweat; it's about cultivating a healthier lifestyle that encompasses both physical and mental well-being.</p>
                    <p className="font-medium text-justify py-4">Don't miss the opportunity to revitalize your fitness routine and explore the fusion of different exercise modalities. Secure your spot now for a day of inspiration, motivation, and a holistic approach to health at our Fitness Fusion Workshop. Let's redefine fitness together!"</p>
                </div>
                <div className="col-span-2 primary-bg text-center h-[500px] space-y-2 rounded-md my-10 md:my-0 ">
                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max px-7 py-7">
                        <div className="flex flex-col p-2 secondary-color rounded-box text-neutral-content">
                       
                            <span className="countdown font-mono text-4xl">
                               
                                {timeLeft.days}
                            </span>
                            
                            days
                        </div>
                        <div className="flex flex-col p-2 secondary-color rounded-box text-neutral-content">
                        <span className="countdown font-mono text-4xl">
                               
                        {timeLeft.hours}
                           </span>
                            
                            hours
                        </div>
                        <div className="flex flex-col p-2 secondary-color rounded-box text-neutral-content">
                        <span className="countdown font-mono text-4xl">
                               
                        {timeLeft.minutes}
                                  </span>
                           
                            min
                        </div>
                        <div className="flex flex-col p-2 secondary-color rounded-box text-neutral-content">
                            <span className="countdown font-mono text-4xl">
                                
                                {timeLeft.seconds}
                            </span>
                            
                            sec
                        </div>
                    </div>
                    <h2 className="font-semibold">WE ARE GOING TO OPEN OUR EVENT</h2>
                    <p className="font-medium py-4 text-justify px-5" >Welcome to our Fitness Fusion Workshop – an exhilarating event that combines various fitness disciplines to create a holistic and dynamic approach to well-being.</p>
                    <p className="flex px-5 gap-4 text-[#448c74]"><MdMarkEmailRead className="w-[25px]" />DevelopersZone06.com</p>
                    <p className="flex px-5 gap-4 text-[#448c74]"><MdPhoneInTalk className="w-[25px]" />+880 111 222 333 999</p>
                    <div className="py-5 ">
                       <Link to='https://meet.google.com/jsz-qmex-cpr'> <button className='border-secondary px-10 py-2 rounded-md uppercase text-xl font-semibold secondary-color hover:bg-[#448c74] hover:text-white cursor-not-allowed'>Join Now</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventDetails;