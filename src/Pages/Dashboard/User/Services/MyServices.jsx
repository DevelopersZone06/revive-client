
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const MyServices = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
    <div>
      <Helmet>
        <title>
          Revive | My Services
        </title>
      </Helmet>
     
      <div>
        <h1 className="text-sky-50 text-lg md:text-xl lg:text-3xl font-semibold mb-5">My Services </h1>
      </div>
      <div className="overflow-x-auto">
        <div className="flex flex-col space-y-3 lg:flex-row justify-around items-center text-sky-50 mb-3 py-7" style={{
          background:
            "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
        }}>
         
         <h2 className="text-2xl font-semibold">Total Services : 03 </h2>
          {/* <h2 className="text-2xl font-semibold">Total Price : $ 1234 </h2> */}

          <button onClick={() => setOpenModal(true)} className="rounded-sm px-4 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all hover:scale-105 duration-150 ease-in-out">Pay Now</button>
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

         <table className="table">
        {/* head */}
        <thead className="text-sm lg:text-lg font-semibold">
          <tr className="text-sky-50 text-center rounded" style={{
            background:
              "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
          }}>

            <th>Name</th>
            <th>Service Name</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="text-sky-100 text-xs text-center">

            <td> Olivia</td>
            <td>Healthy Habits Workshop</td>
            <td>Yoga</td>
            <td>
              <div>
                <Link to={'https://revive-health.netlify.app/services/65b356bb8209fff72f7ee5f4'}>
                  <button className="rounded lg:rounded-full px-2 md:px-4 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all hover:scale-105 duration-150 ease-in-out">View  Details</button></Link>
              </div>
            </td>
          </tr>
          {/* row 2 */}
          <tr className="text-sky-100 text-xs text-center">

            <td>White</td>
            <td>Core Strength Challenge</td>
            <td>Nutrition</td>
            <td>
              <div>
                <Link to={'https://revive-health.netlify.app/services/65b356bb8209fff72f7ee5f4'}>
                  <button className="rounded lg:rounded-full px-4 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all duration-150 ease-in-out">View  Details</button></Link>
              </div>
            </td>
          </tr>
          {/* row 3 */}
          <tr className="text-sky-100 text-xs text-center">

            <td> Olivia White</td>
            <td>Mood-Boosting Dance</td>
            <td>Workout</td>
            <td>
              <div>
                <Link to={'https://revive-health.netlify.app/services/65b356bb8209fff72f7ee5f4'}>
                  <button className="rounded lg:rounded-full px-4 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all duration-150 ease-in-out">View  Details</button></Link>
              </div>
            </td>
          </tr>

          <hr />
        </tbody>
        {/* foot */}
      </table>
        

      </div>
      


    </div>

    


    
    
    </>

  );
};

export default MyServices;




