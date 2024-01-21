import { GrYoga } from "react-icons/gr";
import { IoFitnessSharp } from "react-icons/io5";
import { MdSportsGymnastics } from "react-icons/md";
import { GiWeightLiftingUp } from "react-icons/gi";
import { BsEmojiSmile } from "react-icons/bs";
import { MdDirectionsBike } from "react-icons/md";
import FeatureCard from "./Card/FeatureCard";
import Title from "../../Shared/Title";
const Features = () => {
    return (
        <div className="py-28 px-[2%] sm:px-[5%] lg:px-[8%]">
            <Title heading={'Let`s Explore Our Features'} subHeading={'Our Features'} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {/* card-1 */}
                <FeatureCard title="Yoga" icon={GrYoga} description="Yoga is a holistic discipline that originated in ancient India, encompassing physical, mental, and spiritual practices." />
                {/* card-2 */}
                <FeatureCard title="Cross Fit" icon={IoFitnessSharp} description='"Fit" generally refers to a state of good physical health and well-being achieved through regular exercise, proper nutrition, and an active lifestyle' />

                {/* card-3 */}
                <FeatureCard title="gym nastic" icon={MdSportsGymnastics} description='Gymnastics is a sport that combines strength, flexibility, balance, and coordination through a series of dynamic and graceful movements.' />


                {/* Weightlifting Card */}
                <FeatureCard title="Weightlifting" icon={GiWeightLiftingUp} description='Weightlifting is a strength training activity that builds muscle mass and increases strength. Grab those weights and sculpt your body!' />

                {/* Mental Health Card */}
                <FeatureCard title="Mental Health" icon={BsEmojiSmile} description='Prioritize your mental well-being. Learn about stress management, mindfulness, and techniques to promote a positive and resilient mindset' />

                {/* Cycling Card */}
                <FeatureCard title="Cycling" icon={MdDirectionsBike} description='Cycling is a low-impact exercise that improves cardiovascular health and leg strength. Get on your bike and enjoy the ride!' />

            </div>
        </div>
    );
};

export default Features;
