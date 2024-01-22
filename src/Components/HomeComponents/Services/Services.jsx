import React from 'react';
import Title from '../../../Shared/Title';
import Service from './Service';

const Services = () => {

    const services = [
        {
            title: 'Boxing Training',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ex, autem ipsa commodi nulla perferendis.",
            image: "https://www.lemongym.lt/wp-content/uploads/2023/02/MG_1741-243x240.jpg",
            svg: "https://i.ibb.co/DQJL9zr/boxing.png"
        },
        {
            title: 'Boxing Training',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ex, autem ipsa commodi nulla perferendis.",
            image: "https://www.lemongym.lt/wp-content/uploads/2023/02/MG_1741-243x240.jpg",
            svg: "https://i.ibb.co/DQJL9zr/boxing.png"
        },
        {
            title: 'Boxing Training',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ex, autem ipsa commodi nulla perferendis.",
            image: "https://www.lemongym.lt/wp-content/uploads/2023/02/MG_1741-243x240.jpg",
            svg: "https://i.ibb.co/DQJL9zr/boxing.png"
        },
        {
            title: 'Boxing Training',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ex, autem ipsa commodi nulla perferendis.",
            image: "https://www.lemongym.lt/wp-content/uploads/2023/02/MG_1741-243x240.jpg",
            svg: "https://i.ibb.co/DQJL9zr/boxing.png"
        },
        {
            title: 'Boxing Training',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ex, autem ipsa commodi nulla perferendis.",
            image: "https://www.lemongym.lt/wp-content/uploads/2023/02/MG_1741-243x240.jpg",
            svg: "https://i.ibb.co/DQJL9zr/boxing.png"
        },
        {
            title: 'Boxing Training',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ex, autem ipsa commodi nulla perferendis.",
            image: "https://www.lemongym.lt/wp-content/uploads/2023/02/MG_1741-243x240.jpg",
            svg: "https://i.ibb.co/DQJL9zr/boxing.png"
        }
    ]
    return (
        <div className='primary-bg px-[2%] sm:px-[5%] lg:px-[8%] py-28'>
            <Title subHeading={"Services"} heading={"Our Some Services"}></Title>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;