// -------icons from react-icons-------
import Lottie from 'lottie-react';
import contactAnimation from '../../../public/Animation - 1706002574502 (2).json'
import ContactTitle from "./ContactTitle";
const Contact = () => {
    return (
        <>
        <div>
            <ContactTitle/>
            <div className="flex justify-between flex-col sm:flex-row md:flex-row  gap-2 px-[2%] sm:px-[5%] lg:px-[8%] my-14">
                <div>
                    <h2 className='text-2xl md:text-4xl font-bold secondary-color'>Get in touch with us</h2>
                </div>
            <Lottie animationData={contactAnimation} loop={true} className='w-[500px] h-[500px]' />
            </div>
        
        </div>
       
        </>
    );
};

export default Contact;