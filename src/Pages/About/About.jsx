import AboutTitle from "./AboutTitle";
import image1 from '../../assets/about/about_1.jpg'
import image2 from '../../assets/about/about_2.jpg'
import { IoCheckmarkDone } from "react-icons/io5";
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
        </div>
    );
};

export default About;