
import { useEffect, useState } from 'react';
import Title from '../../../Shared/Title';
import Trainer from './Trainer';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Trainers = () => {

    const [trainers, setTrainers] = useState([])

    useEffect( () => {
        axios('https://revive-server-dun.vercel.app/trainers')
        .then(res => {
          setTrainers(res.data.slice(0, 8))
        })
      }, [])

    return (
        <div className='primary-white py-28 px-[10%]'>
            <div>
                <Title heading={'Our Some Trainers'} subHeading={'Trainers'}></Title>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center'>
                {
                    trainers.map(trainer => <Trainer key={trainer._id} trainer={trainer}></Trainer>)
                }
            </div>
            <div className='text-center pt-8'>
                <Link to={'/trainers'}><button className='rounded-sm px-8 py-3 hover:bg-[#144479] border border-sky-700 hover:text-sky-100 text-sky-700 font-bold capitalize md:text-2xl text-base  transition-all duration-150 ease-in-out'>All Trainer</button></Link>
            </div>
        </div>
    );
};

export default Trainers;
