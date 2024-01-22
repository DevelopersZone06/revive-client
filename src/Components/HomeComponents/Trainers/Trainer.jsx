import React from 'react';

const Trainer = ({trainer}) => {
    return (
        <div className='secondary-bg text-white border-secondary rounded-t-md'>
            <div>
                <img src={trainer.img} alt="" className='w-full h-[380px] rounded-t-md' />
            </div>
            <div className='py-3'>
                <h1 className='text-xl font-bold uppercase'>{trainer.name}</h1>
                <h2>{trainer.skill}</h2>
            </div> 
        </div>
    );
};

export default Trainer;