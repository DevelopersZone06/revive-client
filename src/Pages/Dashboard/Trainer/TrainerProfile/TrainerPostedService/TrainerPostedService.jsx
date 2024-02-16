import { useState } from "react";
import { useForm } from "react-hook-form";
//import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";


//const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
//const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const TrainerPostedService = () => {
 // const axiosPublic = useAxiosPublic();
 const [openModal, setOpenModal] = useState(false);
    const { register,handleSubmit,formState: { errors },
      } = useForm()
      const onSubmit =(data) => {
        console.log(data);
        // const imageFile = { image: data.photo[1] };
        // const res = await useAxiosPublic.post(image_hosting_api, imageFile, {
        //   headers: {
        //     "content-type": "multipart/form-data",
        //   },
        // });
    // console.log(res.data);
      }
    return (
        <div>
            <h1 className="text-white" >Trainer posted service</h1>
            
            <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            
            </div>
            {/* chumki apur modal */}
            <div className="flex justify-around text-sky-50 mb-3  py-7" style={{
              background:
                "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
            }}>
             
              <button onClick={() => setOpenModal(true)} className="rounded-sm px-4 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all hover:scale-105 duration-150 ease-in-out">Post a Service</button>
              <div className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} duration-300 inset-0 w-full   my-10`}>
                  <div onClick={(e_) => e_.stopPropagation()} className={`absolute flex justify-center  drop-shadow-2xl bg-sky-800 rounded-lg ${openModal ? 'translate-y-0 opacity-1 duration-300' : 'translate-y-32 opacity-0  duration-1000'}`}>
                      <main className="px-4 sm:px-6 lg:px-8 py-8">
                          <button onClick={() => {setOpenModal(false)}} className="mr-0 mx-auto  my-10 flex bg-sky-950 text-white px-3 py-2 rounded-lg mb-6">Close</button>
                          <div className=" gap-8  text-black font-semibold">
                              <div className="space-y-8 lg:mb-6 ">
                                 
                              <form onSubmit={handleSubmit(onSubmit)} className="p-10">
                              <div className="flex flex-col lg:flex-row md:flex-row gap-6 ">
                                  {/* register your input into the hook by invoking the "register" function */}
                             
                              <label className="form-control w-full mb-4 max-w-xs">
                              <div className="label">
                                <span className="label-text text-sky-50">Trainer Name</span>
                            
                              </div>
                              <input  name="trainerName"  type="text"  {...register("trainerName", { required: true })}  className="input text-sm input-bordered w-full h-10 max-w-xs" />
                            
                            </label>
                            
                            <label className="form-control w-full mb-4 max-w-xs">
                            <div className="label">
                              <span className="label-text text-sky-50">Trainer Image</span>
                            
                            </div>
                            {/* include validation with required or other standard HTML validation rules */}
                            <input   name="trainerImage"  type="file" {...register("trainerImage", { required: true })} className="block w-full text-sm text-sky-50
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-sky-50 file:text-sky-700
                            hover:file:bg-sky-100" />
                            {/* errors will return when field validation fails  */}
                            
                            </label>
                            
                             
                              </div>
                              <div className="flex flex-col lg:flex-row md:flex-row gap-6 ">
                                  {/* register your input into the hook by invoking the "register" function */}
                             
                              <label className="form-control w-full mb-4 max-w-xs">
                              <div className="label">
                                <span className="label-text text-sky-50">Service Title</span>
                            
                              </div>
                              <input  name="trainerTitle"  type="text" {...register("trainerTitle", { required: true })} className="input text-sm input-bordered w-full h-10 max-w-xs" />
                            
                            </label>
                            
                            <label className="form-control w-full mb-4 max-w-xs">
                            <div className="label">
                              <span className="label-text text-sky-50">Service PDF </span>
                            
                            </div>
                            {/* include validation with required or other standard HTML validation rules */}
                            <input   name="pdf"  type="file" {...register("pdf", { required: true })} className="block w-full text-sm text-sky-50
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-sky-50 file:text-sky-700
                            hover:file:bg-sky-100"/>
                            {/* errors will return when field validation fails  */}
                            
                            
                            </label>
                            
                             
                              </div>
                              <div className="flex flex-col lg:flex-row md:flex-row gap-6 ">
                                  {/* register your input into the hook by invoking the "register" function */}
                             
                              <label className="form-control w-full mb-4 max-w-xs">
                              <div className="label">
                                <span className="label-text text-sky-50">Service Description </span>
                            
                              </div>
                              <textarea  name="description"  type="text" {...register("description", { required: true })} className="input text-sm input-bordered w-full  max-w-xs" />
                            
                            </label>
                            
                            <label className="form-control w-full mb-4 max-w-xs">
                            <div className="label">
                              <span className="label-text text-sky-50">Service Benefits</span>
                            
                            </div>
                            {/* include validation with required or other standard HTML validation rules */}
                            <textarea name="benefits"  type="text"  {...register("benefits", { required: true })} className="input text-sm input-bordered w-full  max-w-xs" />
                            
                            
                            </label>
                            
                             
                              </div>
                              <div className="flex flex-col lg:flex-row md:flex-row gap-6 ">
                                  {/* register your input into the hook by invoking the "register" function */}
                             
                              <label className="form-control w-full mb-4 max-w-xs">
                              <div className="label">
                                <span className="label-text text-sky-50">Service Category</span>
                            
                              </div>
                             
                              <select className="input text-sm input-bordered w-full h-10 max-w-xs" {...register("category" , { required: true })}>
                                <option value="" >Select Category</option>
                                <option  value="female">female</option>
                                <option  value="male">male</option>
                                <option value="other">other</option>
                              </select>
                            
                            </label>
                            
                            <label className="form-control w-full mb-4 max-w-xs">
                            <div className="label">
                              <span className="label-text text-sky-50">Service Video</span>
                            
                            </div>
                            {/* include validation with required or other standard HTML validation rules */}
                            <input  type="file" name="video"  {...register("video", { required: true })} className="block w-full text-sm text-sky-50
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-sky-50 file:text-sky-700
                            hover:file:bg-sky-100" />
                            {/* errors will return when field validation fails  */}
                            
                            
                            </label>
                            
                             
                              </div>
                             <div  className="flex flex-col lg:flex-row md:flex-row gap-6 ">
                             <label className="form-control w-full mb-4 max-w-xs">
                             <div className="label">
                               <span className="label-text text-sky-50">Service Image</span>
                            
                             </div>
                             <input  type="file" name="ServiceImage" {...register("ServiceImage", { required: true })} className="block w-full text-sm text-sky-50
                             file:mr-4 file:py-2 file:px-4
                             file:rounded-full file:border-0
                             file:text-sm file:font-semibold
                             file:bg-sky-50 file:text-sky-700
                             hover:file:bg-sky-100" />
                            
                            </label>
                             <label className="form-control w-full mb-4 max-w-xs">
                             <div className="label">
                               <span className="label-text text-sky-50">Service Price</span>
                            
                             </div>
                             <input  type="number" name="price" {...register("price", { required: true })} className="input text-sm input-bordered w-full h-10 max-w-xs" />
                            
                            </label>
                             </div>
                            
                            
                            <div className="form-element">
                            <span className="w-full lg:w-1/2 block ml-28 ">
                              <input
                                type="submit"
                                value="Post Service"
                                className="cursor-pointer border-2 font-bold  rounded-lg  mt-3  w-full p-1 normal text-sky-50 border-sky-900 bg-sky-950  transition-all"
                              />
                            </span>
                            </div>
                            </form>
                              </div>

                             
                          </div>
                      </main>
                  </div>
              </div>
          </div>
        </div>
    );
};

export default TrainerPostedService;