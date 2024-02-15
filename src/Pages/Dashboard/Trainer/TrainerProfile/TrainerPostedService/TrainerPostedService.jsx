import { useForm } from "react-hook-form";

const TrainerPostedService = () => {
    const { register,handleSubmit,formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)
    return (
        <div>
            <h1 className="text-white" >Trainer posted service</h1>
            
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
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
          <input   name="trainerImage"  type="file" {...register("trainerImage", { required: true })} className="input text-sm input-bordered pb-1 w-full h-10 max-w-xs" />
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
          <input   name="pdf"  type="file" {...register("pdf", { required: true })} className="input text-sm input-bordered w-full h-10 max-w-xs" />
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
          <input  type="file" name="video"  {...register("video", { required: true })} className="input text-sm input-bordered w-full h-10 max-w-xs" />
          {/* errors will return when field validation fails  */}
          

        </label>
    
           
            </div>
           <div  className="flex flex-col lg:flex-row md:flex-row gap-6 ">
           <label className="form-control w-full mb-4 max-w-xs">
           <div className="label">
             <span className="label-text text-sky-50">Service Image</span>

           </div>
           <input  type="file" name="ServiceImage" {...register("ServiceImage", { required: true })} className="input text-sm input-bordered w-full h-10 max-w-xs" />

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
              className="cursor-pointer border-2 font-bold  rounded-lg  mt-3  w-full p-1 normal text-sky-50 border-sky-900 bg-sky-800  transition-all"
            />
          </span>
        </div>
          </form>
            </div>
        </div>
    );
};

export default TrainerPostedService;