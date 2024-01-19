import React from 'react';
import Title from '../../../Shared/Title';
import Trainer from './Trainer';

const Trainers = () => {

    const trainers = [
        {
            name: "Md. Emran",
            skill: "Boxing Trainer",
            img: "https://i.ibb.co/hKdkXpz/tainer1.jpg"
        },
        {
            name: "Jona Martha",
            skill: "Yoga Trainer",
            img: "https://i.ibb.co/3z6SX00/gym36a.webp"
        },
        {
            name: "Md Ibrahim",
            skill: "Weight Loss Trainer",
            img: "https://i.ibb.co/K0gwVkN/fitness-465202-1280.jpg"
        },
        {
            name: "Jarin Tasnim",
            skill: "Boxing Trainer",
            img: "https://i.ibb.co/1sZ16Lj/gym39.webp"
        }
    ]
    return (
        <div className='primary-bg py-20 px-[10%]'>
            <div>
                <Title heading={'Our Some Trainers'} subHeading={'Trainers'}></Title>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-center'>
                {
                    trainers.map(trainer => <Trainer trainer={trainer}></Trainer>)
                }
            </div>
            <div className='text-center pt-8'>
                <button className='border-secondary px-10 py-2 rounded-md uppercase text-xl font-semibold secondary-color hover:bg-white'>All Trainer</button>
            </div>
        </div>
    );
};

export default Trainers;
