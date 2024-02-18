import { useForm } from "react-hook-form"
import { AuthContext } from "../../../../Provider/AuthProvider";
import { useContext } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const PostBlog = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const defaultSelection = user?.selectedOption || "yoga";

    const onSubmit = async(data) => {    
        console.log(data.photo);
        console.log(data);   
        const imageFile = { image: data.photo[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
    
    
        const photo = (res.data.data.url);
        console.log(photo);
    }
       

    

    return (
        <>
            <div style={{
                     background:
                       "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(29,155,179,1) 15%, rgba(10,60,106,1) 88%, rgba(6,43,93,1) 98%)",
                   }} className=" py-6 text-white w-2/3 mx-auto rounded-md">

                <h2 className="text-4xl w-full text-white font-semibold text-center mt-20">Post a new blog</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="max-w-md my-20 mx-auto">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text"  {...register("title", { required: true })} name="title"  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none          focus:outline-none focus:ring-0 focus:border-blue-200 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-blue-200    duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-200  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                    </div>
                    <div className="">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text"  {...register("blog", { required: true })} name="blog" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none          focus:outline-none focus:ring-0 focus:border-blue-200 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-blue-200    duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-200       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">What's on your mind? </label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="file"  {...register("photo", { required: true })} name="photo"
                                className="block py-2.5 WWpx-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-200 peer" placeholder=" " />
                            <label className="peer-focus:font-medium absolute text-sm text-blue-200    duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-200       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <select {...register("selection")} defaultValue={defaultSelection} className="w-full bg-transparent border-b-2 pb-3 p-2 rounded-sm " name="selection" id="">
                                <option value="yoga " className="bg-sky-700 text-white">Yoga</option>
                                <option value="workout" className="bg-sky-700 text-white">Workout</option>
                                <option value="fitness" className="bg-sky-700 text-white">Fitness</option>
                                <option value="weight" className="bg-sky-700 text-white">Weight less</option>
                                <option value="nutrition" className="bg-sky-700 text-white">Nutrition</option>
                            </select>
                        </div>
                    </div>
                   
                    <div className="form-element">
                    <span className="w-full  flex justify-center ">
                      <input
                        type="submit"
                        value="Post Blog"
                        className="text-white bg-sky-900 hover:bg-sky-800 focus:ring-4 focus:outline-none font-semibold focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                      />
                    </span>
                    </div>
                </form>

            </div>
        </>
    );
};

export default PostBlog;