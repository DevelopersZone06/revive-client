import { Link, useLoaderData } from "react-router-dom";
import ServicesTitle from "./ServicesTitle";
import Frequently from "./Frequently";
import { IoCheckmarkDone } from "react-icons/io5";


const ServiceDetails = () => {
    const serviceData = useLoaderData();


    return (
        <>
            <ServicesTitle />
            <div className="grid  lg:grid-cols-6 px-[2%] gap-5 sm:px-[5%] lg:px-[8%] pt-3">
                <div className="col-span-4">
                    <img src={serviceData?.serviceImg} alt="" className="py-3 rounded" />
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <h2 className="text-4xl font-bold py-3 text-sky-800">{serviceData?.title}</h2>
                        <div className="flex gap-4 md:gap-0 flex-row md:flex-col">
                            <p className="md:text-lg text-[#05111D] font-semibold"> Price : ${serviceData?.price}</p>
                            <p className="md:text-lg text-[#05111D] font-semibold">Duration : {serviceData?.duration}</p>
                        </div>
                    </div>
                    <p className="py-3">{serviceData.description
                    }</p>
                    <p className="py-3 text-justify max-w-4xl">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>
                    <div className="flex flex-col md:flex-row justify-between gap-7 py-4 ">
                        <div>
                            <h2 className="text-xl font-bold pb-4 text-sky-800">Benefit Of Traning_</h2>
                            <p className="max-w-sm text-justify py-3">Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,</p>

                            {serviceData?.benefit?.map(data => <>

                                <li className="flex gap-4 py-2">
                                    <IoCheckmarkDone className="w-[25px] text-sky-800" />{data}
                                </li>
                            </>)}
                        </div>
                        <div className="">
                            <img src={serviceData?.trainerImg} alt="" className="w-[400px] h-[330px]" />
                            <h3 className="text-2xl font-bold hover:text-sky-800 py-3">Trainer Name : {serviceData?.trainer}</h3>
                            <h4 className="text-xl font-semibold text-sky-700 hover:text-black">{serviceData?.trainerTitle}</h4>
                        </div>

                    </div>

                </div>
                <div className="col-span-2">

                    <div className="bg-[#05111D] md:py-5 py-7 mx-7 w-full">
                        <div className="flex justify-center items-center  md:py-3 px-3">
                            <Link to={serviceData?.pdf}><button className='rounded-lg px-7 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all duration-150 ease-in-out'>Download Pdf</button></Link>
                        </div>
                        <div className="flex justify-center items-center py-3 px-3">
                            <Link to={serviceData?.video}><button className='rounded-lg px-8 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all duration-150 ease-in-out'>watch video</button></Link>
                        </div>
                        <div className="flex justify-center items-center py-3 px-3">
                            <Link><button className='rounded-lg px-7 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all duration-150 ease-in-out'>talk to trainer</button></Link>
                        </div>

                    </div>
                    <Frequently />

                </div>
            </div>
        </>
    );
};

export default ServiceDetails;