import AboutTitle from "./AboutTitle";
import image2 from '../../assets/about/about_2.jpg'

const About = () => {
    return (
       <div>
        <AboutTitle/>

        <div className="flex flex-col sm:flex-row md:flex-row mx-6 mt-14 gap-7">
            <img src={image2} alt="" className="w-[410px] md:w-[350px] rounded-md object-cover transition delay-150 duration-300 ease-in-out hover:scale-90"/>
            <div>
                <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold">Join with best fitness coach</h2>
            </div>
        </div>
       </div>
    );
};

export default About;