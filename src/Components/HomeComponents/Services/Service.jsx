

const Service = ({service}) => {
    const {title, description, image, svg} = service
    return (
        <div className='relative rounded-[15px] mt-20 service-card'>
            <div className='absolute secondary-bg p-4 rounded-full w-24 h-24 -top-12 left-12 z-10'>
                <img src={svg} alt="" />
            </div>
            <img src={image} alt="" className='w-full h-[380px] rounded-[15px]' />
            <div className='w-full h-full absolute top-0 bg-[#0000003b] rounded-[15px] pl-12 pt-20 service-content'>
                <h1 className='text-white text-4xl font-bold service-title'>{title}</h1>
                <div className='pt-8 mt-28 service-des'>
                    <p className='text-lg hidden'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit modi aliquam porro esse voluptatem ducimus, debitis perspiciatis nobis at sint.</p>
                    <button className='text-xl hidden uppercase font-semibold tracking-widest mt-8'>More Details</button>
                </div> 
            </div>

        </div>
    );
};

export default Service;