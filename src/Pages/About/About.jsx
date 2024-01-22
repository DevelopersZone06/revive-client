import AboutTitle from "./AboutTitle";
import image1 from '../../assets/about/about_1.jpg'

const About = () => {
    return (
       <div>
        <AboutTitle/>

        <div className="flex mx-6 mt-14 gap-5">
            <img src={image1} alt="" className="w-[500px] h-[350px] rounded-md"/>
            <div>
                <h2>We Have The Best Caretaker To Providing Best Services Purchase – Revive</h2>
            </div>
        </div>
       </div>
    );
};

export default About;