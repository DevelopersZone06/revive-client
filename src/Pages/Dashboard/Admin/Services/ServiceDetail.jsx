import { useState } from "react";
import { IoCheckmarkDone } from "react-icons/io5";
import { Link } from "react-router-dom";


const ServiceDetail = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div>
            <div className="grid  lg:grid-cols-7 gap-5 pt-3">
                <div className="col-span-5">
                    <img src='https://i.ibb.co/1Ztv4LS/woman-eating-healthy.jpg' alt="" className="pb-3 rounded" />
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <h2 className="text-2xl font-bold py-3 text-sky-50">Healthy Habits Workshop</h2>
                        
                    </div>
                    <p className="py-3 text-sky-100">Learn and adopt healthy habits for a sustainable and balanced lifestyle.</p>
                    <p className="py-3 text-justify text-sky-100">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>
                    <div className="flex gap-4 justify-between md:gap-0 flex-row text-sky-100 py-7">
                            <p className=" font-semibold"> Price : $69.99</p>
                            <p className="font-semibold">Duration : 10</p>
                        </div>
                    <div className="flex flex-col md:flex-row justify-between gap-7 py-4 ">
                       
                        <div className="">
                            <img src='https://i.ibb.co/1sZ16Lj/gym39.webp' alt="" className="w-[400px] object-cover" />
                            <h3 className="text-2xl font-bold hover:text-sky-200 text-sky-50  py-3">Trainer Name : Olivia White</h3>
                            <h4 className="text-xl font-semibold text-sky-200  hover:text-sky-50">Certified Health Coach</h4>
                        </div>
                       

                    </div>
                    <div>
                            <h2 className="text-xl font-bold pb-4 text-sky-50 py-5">Benefit Of Traning_</h2>
                            <p className="max-w-sm text-justify py-3 text-sky-100">Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,</p>

                            

                                <li className="flex gap-4 py-2 text-slate-100">
                                    <IoCheckmarkDone className="w-[25px] text-sky-50" />Nutrition education

                                </li>
                                <li className="flex gap-4 py-2 text-slate-100">
                                    <IoCheckmarkDone className="w-[25px] text-sky-50" />Nutrition education

                                </li>
                                <li className="flex gap-4 py-2 text-slate-100">
                                    <IoCheckmarkDone className="w-[25px] text-sky-50" />Nutrition education

                                </li>
                            
                        </div>

                </div>
                <div className="col-span-2">
                <div
          className="block rounded-lg "  style={{
            background:
              "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
          }} >
         <div className="flex justify-center items-center  md:py-3 px-3">
                            <Link to={'https://pdf.ac/9cJh4v'}><button className='rounded-lg px-7 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all duration-150 ease-in-out'>Download The Pdf</button></Link>
                        </div>
                        <div className="flex justify-center items-center py-3 px-3">
                            <Link to={'https://www.youtube.com/watch?v=AnJ780kE_1Y'}><button className='rounded-lg px-8 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all duration-150 ease-in-out'>Watch The Video</button></Link>
                        </div>
                        <div className="flex justify-center items-center py-3 px-3">
                          {/*   <Link ><button className='rounded-lg px-7 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all duration-150 ease-in-out'>Book a trainer</button></Link> */}
                            <button onClick={() => setOpenModal(true)} className="rounded-sm px-4 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all hover:scale-105 duration-150 ease-in-out">Book a trainer</button>
                            <div className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} duration-300 inset-0 w-10/12 mx-auto md:w-full h-full`}>
                              <div onClick={(e_) => e_.stopPropagation()} className={`absolute overflow-x-hidden overflow-y-scroll flex justify-center bg-white drop-shadow-2xl rounded-lg ${openModal ? 'translate-y-0 opacity-1 duration-300' : 'translate-y-32 opacity-0 duration-1000'}`}>
                                <main className="px-4 sm:px-6 lg:px-8 py-8">
                                  <button onClick={() => { setOpenModal(false) }} className="md:mr-0 md:mx-auto md:flex bg-sky-800 text-white md:px-3 md:py-2 rounded-lg md:mb-6">Close</button>
                                  <div className="grid gap-8 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 text-black font-semibold">
                                    <div className="space-y-8 lg:mb-6">
                  
                                      <div className="rounded-lg border bg-card  shadow-sm ">
                                        <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
                                          <h3 className="text-2xl font-semibold whitespace-nowrap">Payment Information</h3>
                                        </div>
                                        <div className="lg:p-6 p-2">
                                          {/* Personal Information details form */}
                                          <form className="space-y-4">
                                            <div className="space-y-2">
                                              <label className="text-sm font-medium leading-none">Card Number</label>
                                              <input className="flex h-10 w-full rounded-md border px-3" placeholder="Enter your card number" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                              <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none">Expiry Date</label>
                                                <input className="flex h-10 w-full rounded-md border px-3" placeholder="MM/YY" />
                                              </div>
                                              <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none">CVC</label>
                                                <input className="flex h-10 w-full rounded-md border px-3" placeholder="Enter your CVV" />
                                              </div>
                                            </div>
                                           
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                  
                                    <div className="space-y-8 lg:mb-0 mb-6">
                                      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                                        <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
                                          <h3 className="text-2xl font-semibold whitespace-nowrap">Order Summary</h3>
                                        </div>
                                        {/* Checkout form */}
                                        <div className="lg:p-6 p-2">
                                          <div className="space-y-4">
                                            <div className="flex justify-between"><span>Product 1</span><span>$99.99</span></div>
                                            <div className="flex justify-between"><span>Product 2</span><span>$49.99</span></div>
                                            <div className="flex justify-between"><span>Product 3</span><span>$29.99</span></div>
                                            <div className="border-t border-gray-200  mt-4 pt-4 flex justify-between font-semibold"><span>Total</span><span>$179.97</span></div>
                                          </div>
                                        </div>
                                        <div className="flex items-center lg:p-6 p-2">
                                          <button className="inline-flex items-center bg-sky-800 text-sky-50 justify-center rounded-md text-xl  font-medium px-4 py-2 w-full">Complete Purchase</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </main>
                              </div>
                            </div>
                        </div>
          
        </div>
        <div className="mt-12">
                    <button className="rounded-full px-5 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all duration-150 ease-in-out ml-4">Accept</button>
                    <button className="rounded-full px-5 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-base text-sm  transition-all duration-150 ease-in-out ml-5">Reject</button>
                </div>

                  
                   

                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;