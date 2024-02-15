
import { useEffect, useState } from 'react';
import Title from '../../../Shared/Title';
import Trainer from './Trainer';

import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';

const Trainers = () => {
    const axiosPublic = useAxiosPublic()

    const [trainers, setTrainers] = useState([])

    useEffect( () => {
        axiosPublic('https://revive-server-dun.vercel.app/trainers')
        .then(res => {
          setTrainers(res.data.slice(0, 8))
        })
      }, [])

    //   some changes 

    return (
        <div className='primary-white py-28 px-[10%]'>
            <div>
                <Title heading={'Our Some Trainers'} subHeading={'Trainers'}fontColor={'sky-800'}></Title>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center'>
                {
                    trainers.map(trainer => <Trainer key={trainer._id} trainer={trainer}></Trainer>)
                }
            </div>
            <div className='text-center mt-16'>
                <Link to={'/trainers'}><button className='rounded-md px-8 py-2 mt-10 hover:bg-[#144479] border border-sky-700 hover:text-sky-100 text-sky-700 font-bold capitalize md:text-2xl text-base  transition-all duration-150 ease-in-out '>All Trainer</button></Link>
            </div>
           
        </div>
    );
};

export default Trainers;
