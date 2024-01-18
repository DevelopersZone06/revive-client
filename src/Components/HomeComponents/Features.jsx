import { GrYoga } from "react-icons/gr";
import { IoFitnessSharp } from "react-icons/io5";
import { MdSportsGymnastics } from "react-icons/md";

const Features = () => {
    return (
        <div className="my-16">
           
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-14'>
            {/* card-1 */}
            <div className='shadow-2xl before:block before:-left-1 before:-top-1 before:bg-[#448C74] before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-[#448C74] after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block rounded-md hover:shadow-2xl'>
                <div className='py-6 text-center'>
                    <div className='flex justify-center py-3 pb-4 rounded-md '><div className=" border rounded-full border-[#448C74] p-4">
                    <GrYoga className='text-6xl text-[#E5C466]' /></div></div>
                    <h2 className='text-[#3A4256] text-2xl font-semibold uppercase'>Yoga</h2>
                    <p className="px-3 py-3">Yoga is a holistic discipline that originated in ancient India, encompassing physical, mental, and spiritual practices.</p>
                </div>
            </div>
             {/* card-2 */}
            <div className='shadow-2xl before:block before:-left-1 before:-top-1 before:bg-[#448C74] before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-[#448C74] after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block rounded-md hover:shadow-2xl'>
                <div className='py-6 text-center'>
                    <div className='flex justify-center py-3 pb-4 rounded-md '><div className=" border rounded-full border-[#448C74] p-4">
                    <IoFitnessSharp  className='text-6xl text-[#E5C466]' /></div></div>
                    <h2 className='text-[#3A4256] text-2xl font-semibold uppercase'>Cross Fit</h2>
                    <p className="px-3 py-3">"Fit" generally refers to a state of good physical health and well-being achieved through regular exercise, proper nutrition, and an active lifestyle.</p>
                </div>
            </div>
             {/* card-2 */}
            <div className='shadow-2xl before:block before:-left-1 before:-top-1 before:bg-[#448C74] before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-[#448C74] after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block rounded-md hover:shadow-2xl'>
                <div className='py-6 text-center'>
                    <div className='flex justify-center py-3 pb-4 rounded-md '><div className=" border rounded-full border-[#448C74] p-4">
                    <MdSportsGymnastics  className='text-6xl text-[#E5C466]' /></div></div>
                    <h2 className='text-[#3A4256] text-2xl font-semibold uppercase'>gym nastic</h2>
                    <p className="px-3 py-3">Gymnastics is a sport that combines strength, flexibility, balance, and coordination through a series of dynamic and graceful movements.</p>
                </div>
            </div>
           
           





        </div>
    </div>
    );
};

export default Features;
