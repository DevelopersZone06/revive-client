// -------icons from react-icons-------
import Lottie from 'lottie-react';
import contactAnimation from '../../../public/Animation - 1706002574502 (2).json'
import ContactTitle from "./ContactTitle";
const Contact = () => {
    return (
        <>
        <div>
            <ContactTitle/>
           <div className='px-[2%] sm:px-[5%] lg:px-[8%]'>
           <h2 className='text-2xl md:text-4xl font-bold secondary-color mt-12'>Get in touch with us</h2>
           <div className="flex justify-between items-center flex-col sm:flex-row md:flex-row mb-14">
                <div className=' flex-1 my-3'>
                    
                    <form className={`w-full duration-500 space-y-3`}>
                   
                    <div className="flex flex-col sm:flex-row md:flex-row gap-2">
                        
                        <input id="name" type="text" placeholder="Your Name" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                       
                        <input id="_email" type="email" placeholder="example@gmail.com" min={5} className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"/>
                    </div>
                    <input id="subject" type="text" placeholder="Your Subject" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                    <textarea id="_email" type="email" placeholder="Your Massage" rows={8} className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                    {/* button type will be submit for handling form submission*/}
                    <button className='border-secondary px-10 py-2 rounded-md uppercase text-xl font-semibold secondary-color hover:bg-[#448c74] hover:text-white'>Submit</button>
                    
                </form>
                </div>
           <div className=''>
           <Lottie animationData={contactAnimation} loop={true} className='w-[500px] h-[500px]' />
           </div>
            </div>
           </div>
        
        </div>
       
        </>
    );
};

export default Contact;