import { Link } from 'react-router-dom';

const Trainer = ({trainer}) => {
    return (
        <div className='text-white border-secondary rounded-t-md trainer'>
            <div className='relative'>
                <img src={trainer.img} alt="" className='w-full h-[350px] rounded-t-md' />
                <div className='absolute bg-[#000000cc] w-full h-full top-0 hidden place-items-center'>
                    <Link className='bg-white hover:bg-[#448c7400] hover:text-white secondary-color border border-white rounded-md px-4 py-2 font-bold uppercase' to={'/'}>About Trainer</Link>
                </div>
            </div>
            <div className='py-3 secondary-bg text-center'>
                <h1 className='text-xl font-bold uppercase'>{trainer.name}</h1>
                <h6>{trainer.skill}</h6>
            </div> 
        </div>
    );
};

export default Trainer;