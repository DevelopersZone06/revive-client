import { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";


const TrainerProfile = () => {
    const {user} = useAuth()

    const [userDetails, setUserDetails] = useState({})
    const axiosPublic = useAxiosPublic()
  
    useEffect( () => {
      axiosPublic(`/users?email=${user?.email}`)
      .then(res => {
        setUserDetails(res.data)
        console.log(res.data)
      })
    }, [])
  
    const {name, email, photo, phone, experience} = userDetails


    const handleUpdate = e => {
      e.preventDefault()
      
      const form = e.target 
      const updateName = form.name.value 
      const updateEmail = form.email.value
      const updatePhone = form.phone.value
      const updateExperience = form.experience.value
  
      const updatedData = {updateName, updateEmail, updateExperience, updatePhone}
      console.log(updatedData)
  
      axiosPublic.put(`/updateProfile/${email}`, updatedData)
      .then(res => {
        console.log(res.data)
      })
    }


    return (
        <div>
            <div className="flex flex-row gap-8">
            {/* user information */}
               
                {/* right side */}
                <div className="lg:w-2/3 mx-auto">
                   <div className="flex flex-row justify-evenly   items-center">
                   <h1 className="lg:text-2xl py-4 w-full font-bold text-left from-sky-600  via-sky-200 to-blue-600 bg-gradient-to-r bg-clip-text md:text-lg text-sm  text-transparent">My Profile</h1>
                 
                 <label
                  htmlFor="my_modal_7"
                  className=" rounded-full px-4 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm ml-10 transition-all duration-150 ease-in-out" 
                >
                  Update
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my_modal_7"
                  className="modal-toggle"
                />
                <div className="modal" role="dialog"  style={{ padding: "100px"}}>
                  <div className="modal-box p-2 rounded-lg " >
                 <div className="flex flex-col py-5 rounded-lg   items-center justify-center"  style={{
                    background:
                      "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
                  }}>
                  <form onSubmit={handleUpdate}  className="max-w-[70%] mx-auto  ">
                  <div className="flex lg:flex-row my-5  md:flex-row flex-col gap-10 items-center">
                  <div className="relative z-0 w-full  group">
                  <input
                    type="text"
                    
                    name="name" defaultValue={name}
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-50 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    {name}
                  </label>
                </div>
                <div className="relative z-0 w-full  group">
                  <input
                    type="email"
                    readOnly
                    name="email" value={`${email}`}
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-50 peer"
                    placeholder=" " 
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Email
                  </label>
                </div>
                  </div>
                 <div className="flex lg:flex-row   md:flex-row flex-col gap-10 items-center py-10">
                 <div className="relative z-0 w-full mb-5 group">
                 <input
                   type="text"
                   name="phone" defaultValue={phone}
                   className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-50 peer"
                   placeholder=" "
                   required
                 />
                 <label className="peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                   Phone Number
                 </label>
               </div>
               <div className="relative z-0 w-full mb-5 group">
                 <input
                   type="text"
                   name="experience"  defaultValue={experience}
                   className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-50 peer"
                   placeholder=" "
                   required
                 />
                 <label className="peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Experience
                 </label>
               </div>
                 </div>
         
                  <div className="text-center">
                  <button  className="text-white border border-white hover:scale-125 transition-all ease-in-out my-3 bg-sky-50 hover:bg-sky-50focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
               style={{
                 background:
                   "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
               }}>Update</button>
                  </div>
                 
                  
                 </form>
               
                 </div>
                   
                  </div>
                  <label className="modal-backdrop" htmlFor="my_modal_7">
                    Close
                  </label>
                </div>
                   </div>
                    <div className="h-[1px]  w-full bg-gradient-to-tr from-teal-400 via-sky-100 to-sky-600"> </div>
                    <div className="text-sky-200 font-semibold">
                 {/*   <div className="flex lg:flex-row md:flex-row flex-col gap-12 ">
                   <label className="form-control w-full max-w-xs peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                   <div className="label">
                     <span className="label-text  text-sky-200 font-semibold">Full Name</span>
                    
                   </div>
                   <input type="text" name="name" placeholder="Full Name" className="input input-bordered w-full max-w-xs" />
                  
                 </label>
                   <label className="form-control w-full max-w-xs">
                   <div className="label">
                     <span className="label-text text-sky-200 font-semibold">Email</span>
                    
                   </div>
                   <input type="text" name="name" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                  
                 </label>
                   </div>
                   <div className="flex lg:flex-row md:flex-row flex-col gap-12 ">
                   <label className="form-control w-full max-w-xs">
                   <div className="label">
                     <span className="label-text text-sky-200 font-semibold">Role</span>
                    
                   </div>
                   <input type="text" name="name" placeholder="Role" className="input input-bordered w-full max-w-xs" />
                  
                 </label>
                   <label className="form-control w-full max-w-xs">
                   <div className="label">
                     <span className="label-text text-sky-200 font-semibold">Mobile Number</span>
                    
                   </div>
                   <input type="text" name="name" placeholder="Mobile Number" className="input input-bordered w-full max-w-xs" />
                  
                 </label>
                   </div> */}
                   <form  className="max-w-[70%] mx-auto">
         <div className="flex lg:flex-row my-5 md:flex-row flex-col gap-10 items-center">
         <div className="relative z-0 w-full  group my-5">
         <input
           type="text"
           name="title" value={`${name}`}
           className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-50 peer"
           placeholder=" "
           required
           readOnly
         />
         <label className="peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
           Full Name
         </label>
       </div>
       <div className="relative z-0 w-full  group my-5">
         <input
           type="text"
           readOnly
           name="title" value={`${email}`}
           className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-50 peer"
           placeholder=" " 
           required
         />
         <label className="peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
           Email
         </label>
       </div>
         </div>
        <div className="flex lg:flex-row  md:flex-row flex-col gap-10 items-center my-5">
        <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          readOnly
          name="title" value={phone}
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-50 peer"
          placeholder=" "
          required
        />
        <label className="peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Phone Number
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          readOnly
          name="title"  value={experience}
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-50 peer"
          placeholder=" "
          required
        />
        <label className="peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
         Experience
        </label>
      </div>
        </div>

         
        
         
        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerProfile;