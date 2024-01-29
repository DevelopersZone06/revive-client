
import Title from '../../../Shared/Title';
import Trainer from './Trainer';

const Trainers = () => {

    const trainers = [
        {
            name: "Md. Emran",
            skill: "Boxing Trainer",
            img: "https://template.unicoderbd.com/unifit/images/trainer/trainer4.jpg"
        },
        {
            name: "Jona Martha",
            skill: "Yoga Trainer",
            img: "https://template.unicoderbd.com/unifit/images/trainer/trainer2.jpg"
        },
        {
            name: "Md Ibrahim",
            skill: "Weight Loss Trainer",
            img: "https://template.unicoderbd.com/unifit/images/trainer/trainer4.jpg"
        },
        {
            name: "Jarin Tasnim",
            skill: "Boxing Trainer",
            img: "https://www.lemongym.lt/wp-content/uploads/2023/02/MG_1741-243x240.jpg"
        }
    ]
    return (
        <div className='primary-white py-28 px-[10%]'>
            <div>
                <Title heading={'Our Some Trainers'} subHeading={'Trainers'}></Title>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 text-center'>
                {
                    trainers.map(trainer => <Trainer trainer={trainer}></Trainer>)
                }
            </div>
            <div className='text-center pt-8'>
                <button className='border-secondary px-10 py-2 rounded-md uppercase text-xl font-semibold secondary-color hover:bg-[#448c74] hover:text-white'>All Trainer</button>
            </div>
        </div>
    );
};

export default Trainers;
