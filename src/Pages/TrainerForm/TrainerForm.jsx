import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form"

const TrainerForm = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

    const {user} = useContext(AuthContext);

    const onSubmit = (data) => console.log(data) 

    // console.log(user)

    return (
        <>
            <div className=" bg-[#05234d] py-20 text-white">

                <h2 className="text-4xl w-full text-white font-semibold text-center mt-20">Apply as a trainer</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="max-w-md my-20 mx-auto">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" name="email" value={user?.email} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none          focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500     duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="first_name" value={user?.displayName} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none          focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500     duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="number" {...register("phone")} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none          focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500     duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <select style={{
                  background:
                    "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
                }} className="w-full p-2 rounded-sm " name="" id="">
                                <option value="yoga">Yoga</option>
                                <option value="workout">Workout</option>
                                <option value="fitness">Fitness</option>
                                <option value="weight">Weight less</option>
                                <option value="nutrition">Nutrition</option>
                            </select>
                        </div>
                    </div>
                    <div>
                    <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="first_name" {...register("experience")} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500     duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Experience</label>
                        </div>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                </form>

            </div>

        </>
    );
};

export default TrainerForm;