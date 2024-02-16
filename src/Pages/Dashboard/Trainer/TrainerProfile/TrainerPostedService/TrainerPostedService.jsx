import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
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
        <div className="flex  flex-col gap-10  ">
           
            
            <div>
            <div className=" text-sky-50 mx-auto mb-10 w-1/4 py-5 rounded-full" style={{
              background:
                "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
            }}>
             
              <button onClick={() => setOpenModal(true)} className="ml-16 py-3 px-2 rounded-full  hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm  transition-all hover:scale-105 duration-150 ease-in-out">Post a Service</button>
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

            {/* Cards */}

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
              {/* 1ST CARD */}
            <div className="h-fit  group rounded-b-lg"  style={{
              background:
                "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)"}} >
            <div className="relative  overflow-hidden w-full rounded-md">
              <img className="h-52 w-full object-cover" src={'https://i.ibb.co/rtZJqNq/athletic-man-with-face-mask-having-weight-training-lunge-position-gym.jpg'} alt="" />
              <div className="absolute h-full w-full bg-black/60 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 space-y-1 text-center">
                <p className=" text-sky-200">
                  <span className="font-bold">Trainer`s Name:Md. Ibrahim Khalil </span>
                 
                </p>
                <p className=" text-sky-200">
                  <span className="font-bold">Price: $69 </span>
                  
                </p>
                <p className=" text-sky-200">
                  <span className="font-bold">Duration:6 Months </span>
                  
                </p>
    
                <Link to={"https://revive-health.netlify.app/services/65b356bb8209fff72f7ee5f4"}>
                  <button className="  capitalize font-semibold  mt-4 rounded-md border-sky-200 border  px-4 py-2 hover:bg-sky-900  text-white ">
                    More Details
                  </button>
                </Link>
              </div>
            </div>
            <div className="">
            <h2 className="mt-3 text-lg capitalize text-center text-sky-100 font-bold">
            Cardio Blast
          </h2>
  
          <p className="capitalize text-center p-2 mb-5 text-sky-100">
            <span className="font-bold capitalize lg:text-lg text-normal">
              Category:{" "}
            </span>
            Cardio
          </p>
          <div className="flex flex-row  justify-between mr-10  items-center text-sky-50 mb-10">
          
          {/* Update Modal*/}
          <div >
          

          {/* The button to open modal */}
          <label
            htmlFor="my_modal_7"
            className=" rounded-full px-4 py-2  hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm ml-10 transition-all duration-150 ease-in-out"
          >
            Update
          </label>

          {/* Put this part before </body> tag */}
          <input
            type="checkbox"
            id="my_modal_7"
            className="modal-toggle"
          />
          <div className="modal" role="dialog">
            <div className="modal-box" >
              <div className="flex flex-col  items-center justify-center" style={{
                background:
                  "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
              }}>
                <label className="form-control w-full my-4 max-w-xs">
                  <div className="label">
                    <span className="label-text text-sky-50">Trainer Name</span>

                  </div>
                  <input type="text" name="trainerName" placeholder="Trainer Name" className="input text-sm input-bordered w-full h-10 max-w-xs" />

                </label>
                <label className="form-control w-full mb-4 max-w-xs">
                  <div className="label">
                    <span className="label-text text-sky-50">Price</span>

                  </div>
                  <input type="text" name="price" placeholder="Price" className="input text-sm input-bordered w-full h-10 max-w-xs" />

                </label>
                <label className="form-control w-full mb-4 max-w-xs">
                  <div className="label">
                    <span className="label-text text-sky-50">Duration</span>

                  </div>
                  <input type="text" name="duration" placeholder="Duration" className="input text-sm input-bordered w-full h-10 max-w-xs" />

                </label>
                <label className="form-control w-full mb-4 max-w-xs">
                  <div className="label">
                    <span className="label-text text-sky-50">Category</span>

                  </div>
                  <input type="text" name="category" placeholder="Category" className="input text-sm input-bordered w-full h-10 max-w-xs" />

                </label>
                <label className="form-control w-full mb-4 max-w-xs">
                  <div className="label">
                    <span className="label-text text-sky-50">Service Image</span>

                  </div>
                  <input type="file" name="serviceImage" placeholder="Service Image"  className="block w-full text-sm text-sky-50
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-sky-50 file:text-sky-700
                  hover:file:bg-sky-100" />

                </label>
                
                <button className="bg-sky-100 hover:bg-sky-200  w-1/2 my-5   py-2 px-3 flex justify-center  rounded-xl text-sky-900 hover:text-blue-950 hover:font-bold ease-in-out">Update</button>
              </div>

            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">
              Close
            </label>
          </div>
       
          </div>
          <button type="submit"  className=" rounded-full px-4 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm ml-10 transition-all duration-150 ease-in-out">Delete</button>
        </div>
        </div>
            </div>
          {/* 2ND card */}
          
          <div className="h-fit  group rounded-b-lg"  style={{
            background:
              "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)"}} >
          <div className="relative overflow-hidden w-full rounded-md">
            <img className="h-52 w-full object-cover" src={'https://i.ibb.co/3mxMCJ3/fitness-man.jpg'} alt="" />
            <div className="absolute h-full w-full bg-black/60 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 space-y-1 text-center">
              <p className=" text-sky-200">
                <span className="font-bold">Trainer`s Name:Md. Ibrahim Khalil </span>
               
              </p>
              <p className=" text-sky-200">
                <span className="font-bold">Price: $69 </span>
                
              </p>
              <p className=" text-sky-200">
                <span className="font-bold">Duration:6 Months </span>
                
              </p>
  
              <Link to={"https://revive-health.netlify.app/services/65b356bb8209fff72f7ee5f4"}>
                <button className="  capitalize font-semibold  mt-4 rounded-md border-sky-200 border  px-4 py-2 hover:bg-sky-900  text-white ">
                  More Details
                </button>
              </Link>
            </div>
          </div>
          <h2 className="mt-3 text-lg capitalize text-center text-sky-100 font-bold">
          High-Intensity Workout
          </h2>
  
          <p className="capitalize text-center p-2 mb-5 text-sky-100">
            <span className="font-bold capitalize lg:text-lg text-normal">
              Category:{" "}
            </span>
            Workout
          </p>
          <div className="flex flex-row  justify-between items-center text-sky-50 mb-10 mr-10">
            
            {/* Update Modal*/}
            <div >
            

            {/* The button to open modal */}
            <label
              htmlFor="my_modal_7 "
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
            <div className="modal" role="dialog">
              <div className="modal-box" >
                <div className="flex flex-col  items-center justify-center" style={{
                  background:
                    "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
                }}>
                  <label className="form-control w-full my-4 max-w-xs">
                    <div className="label">
                      <span className="label-text text-sky-50">Trainer Name</span>

                    </div>
                    <input type="text" name="trainerName" placeholder="Trainer Name" className="input text-sm input-bordered w-full h-10 max-w-xs" />

                  </label>
                  <label className="form-control w-full mb-4 max-w-xs">
                    <div className="label">
                      <span className="label-text text-sky-50">Price</span>

                    </div>
                    <input type="text" name="price" placeholder="Price" className="input text-sm input-bordered w-full h-10 max-w-xs" />

                  </label>
                  <label className="form-control w-full mb-4 max-w-xs">
                    <div className="label">
                      <span className="label-text text-sky-50">Duration</span>

                    </div>
                    <input type="text" name="duration" placeholder="Duration" className="input text-sm input-bordered w-full h-10 max-w-xs" />

                  </label>
                  <label className="form-control w-full mb-4 max-w-xs">
                    <div className="label">
                      <span className="label-text text-sky-50">Category</span>

                    </div>
                    <input type="text" name="category" placeholder="Category" className="input text-sm input-bordered w-full h-10 max-w-xs" />

                  </label>
                  <label className="form-control w-full mb-4 max-w-xs">
                    <div className="label">
                      <span className="label-text text-sky-50">Service Image</span>

                    </div>
                    <input type="file" name="serviceImage" placeholder="Service Image"  className="block w-full text-sm text-sky-50
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-sky-50 file:text-sky-700
                    hover:file:bg-sky-100" />

                  </label>
                  
                  <button className="bg-sky-100 hover:bg-sky-200  w-1/2 my-5   py-2 px-3 flex justify-center  rounded-xl text-sky-900 hover:text-blue-950 hover:font-bold ease-in-out">Update</button>
                </div>

              </div>
              <label className="modal-backdrop" htmlFor="my_modal_7">
                Close
              </label>
            </div>
         
            </div>
            <button type="submit"  className=" rounded-full px-4 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm ml-10 transition-all duration-150 ease-in-out">Delete</button>
          </div>
        </div>
{/* 3rd card */}

<div className="h-fit  group rounded-b-lg"  style={{
  background:
    "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)"}} >
<div className="relative overflow-hidden w-full rounded-md">
  <img className="h-52 w-full object-cover" src={'https://i.ibb.co/MDHczVd/male-athlete-with-bare-torso-doing-abdominal-exercises.jpg'} alt="" />
  <div className="absolute h-full w-full bg-black/60 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 space-y-1 text-center">
    <p className=" text-sky-200">
      <span className="font-bold">Trainer`s Name: Md. Faysal </span>
     
    </p>
    <p className=" text-sky-200">
      <span className="font-bold">Price: $79 </span>
      
    </p>
    <p className=" text-sky-200">
      <span className="font-bold">Duration:6 Months </span>
      
    </p>

    <Link to={"https://revive-health.netlify.app/services/65b356bb8209fff72f7ee5f4"}>
      <button className="  capitalize font-semibold  mt-4 rounded-md border-sky-200 border  px-4 py-2 hover:bg-sky-900  text-white ">
        More Details
      </button>
    </Link>
  </div>
</div>
<h2 className="mt-3 text-lg capitalize text-center text-sky-100 font-bold">
Strength Fusion
</h2>

<p className="capitalize text-center p-2 mb-5 text-sky-100">
  <span className="font-bold capitalize lg:text-lg text-normal">
    Category:{" "}
  </span>
  Workout
</p>
<div className="flex flex-row  justify-between mr-10 items-center text-sky-50 mb-10">
            
{/* Update Modal*/}
<div>


{/* The button to open modal */}
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
<div className="modal" role="dialog">
  <div className="modal-box" >
    <div className="flex flex-col  items-center justify-center" style={{
      background:
        "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
    }}>
      <label className="form-control w-full my-4 max-w-xs">
        <div className="label">
          <span className="label-text text-sky-50">Trainer Name</span>

        </div>
        <input type="text" name="trainerName" placeholder="Trainer Name" className="input text-sm input-bordered w-full h-10 max-w-xs" />

      </label>
      <label className="form-control w-full mb-4 max-w-xs">
        <div className="label">
          <span className="label-text text-sky-50">Price</span>

        </div>
        <input type="text" name="price" placeholder="Price" className="input text-sm input-bordered w-full h-10 max-w-xs" />

      </label>
      <label className="form-control w-full mb-4 max-w-xs">
        <div className="label">
          <span className="label-text text-sky-50">Duration</span>

        </div>
        <input type="text" name="duration" placeholder="Duration" className="input text-sm input-bordered w-full h-10 max-w-xs" />

      </label>
      <label className="form-control w-full mb-4 max-w-xs">
        <div className="label">
          <span className="label-text text-sky-50">Category</span>

        </div>
        <input type="text" name="category" placeholder="Category" className="input text-sm input-bordered w-full h-10 max-w-xs" />

      </label>
      <label className="form-control w-full mb-4 max-w-xs">
        <div className="label">
          <span className="label-text text-sky-50">Service Image</span>

        </div>
        <input type="file" name="serviceImage" placeholder="Service Image"  className="block w-full text-sm text-sky-50
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-sky-50 file:text-sky-700
        hover:file:bg-sky-100" />

      </label>
      
      <button className="bg-sky-100 hover:bg-sky-200  w-1/2 my-5   py-2 px-3 flex justify-center  rounded-xl text-sky-900 hover:text-blue-950 hover:font-bold ease-in-out">Update</button>
    </div>

  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7">
    Close
  </label>
</div>

</div>
<button type="submit"  className=" rounded-full px-4 py-2 hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm ml-10 transition-all duration-150 ease-in-out">Delete</button>
</div>
</div>
            </div>
          
            {/* modal */}
            </div>
           {/* Post  service modal */}
            
        </div>
    );
};

export default TrainerPostedService;