import { Link } from 'react-router-dom';

const Trainer = ({trainer}) => {
    return (
        <div className='text-white border-md rounded-lg trainer shadow-xl before:block before:-left-1 before:-top-1 shadow-blue-300 before:bg-sky-700 before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-sky-700 after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block  hover:shadow-xl'>
            <div className='relative'>
                <img src={trainer?.img} alt="" className='w-full h-[350px] rounded-t-lg' />
                <div className='absolute bg-[#111111cc] w-full h-full top-0 hidden place-items-center rounded-t-lg'>
                    <Link className='bg-white hover:bg-[#448c7400] hover:text-white text-sky-700 border border-white rounded-md px-4 py-2 font-bold uppercase ' to={`/trainersdetails/${trainer._id}`}>About Trainer</Link>
                </div>
            </div>
            <div className='py-3 bg-[#0b3a69] text-center rounded-b-lg'>
                <h1 className='text-xl font-bold uppercase'>{trainer.name}</h1>
                <h6>{trainer.skill}</h6>
            </div> 
        </div>
    );
};

export default Trainer;