import React from 'react';

const trial = () => {
    return (
        <div>
        <div >
          

        {/* The button to open modal */}
        <label
          htmlFor="my_modal_7"
          className=" rounded-full px-4 py-2  hover:bg-sky-100 border bg-sky-50 hover:text-sky-700 text-sky-700 font-bold capitalize md:text-sm text-sm ml-10 transition-all duration-150 ease-in-out"
        >
         Post A Service
        </label>

        {/* Put this part before </body> tag */}
        <input
          type="checkbox"
          id="my_modal_7"
          className="modal-toggle"
        />
        <div className="modal" role="dialog">
          <div className="modal-box" >
          <div className=" gap-8  text-black font-semibold">
          <div className="space-y-8 lg:mb-6 ">
             
          <form onSubmit={handleSubmit} className="p-10">
          <div className="flex flex-col lg:flex-row md:flex-row gap-6 ">
              {/* register your input into the hook by invoking the "register" function */}
         
          <label className="form-control w-full mb-4 max-w-xs">
          <div className="label">
            <span className="label-text text-sky-50">Trainer Name</span>
        
          </div>
          <input defaultValue={user?.displayName} name="trainerName"  type="text"  {...register("trainerName", { required: true })}  className="input text-sm input-bordered w-full h-10 max-w-xs" />
        
        </label>
         
          <label className="form-control w-full mb-4 max-w-xs">
          <div className="label">
            <span className="label-text text-sky-50">Duration</span>
        
          </div>
          <input  name="duration"  type="text"  {...register("duration", { required: true })}  className="input text-sm input-bordered w-full h-10 max-w-xs" />
        
        </label>
        
       
        
         
          </div>
          <div className="flex flex-col lg:flex-row md:flex-row gap-6 ">
              {/* register your input into the hook by invoking the "register" function */}
         
          <label className="form-control w-full mb-4 max-w-xs">
          <div className="label">
            <span className="label-text text-sky-50">Trainer Image</span>
        
          </div>
          <input defaultValue={user?.photo} name="trainerImage"  type="file"  {...register("trainerImage", { required: true })}  className="input text-sm input-bordered w-full h-10 max-w-xs" />
        
        </label>
         
          <label className="form-control w-full mb-4 max-w-xs">
          <div className="label">
            <span className="label-text text-sky-50">Trainer Title</span>
        
          </div>
          <input  name="trainerTitle"  type="text"  {...register("trainerTitle", { required: true })}  className="input text-sm input-bordered w-full h-10 max-w-xs" />
        
        </label>
        
       
        
         
          </div>
          <div className="flex flex-col lg:flex-row md:flex-row gap-6 ">
              {/* register your input into the hook by invoking the "register" function */}
         
          <label className="form-control w-full mb-4 max-w-xs">
          <div className="label">
            <span className="label-text text-sky-50">Service Title</span>
        
          </div>
          <input  name="trainerTitle"  type="text" {...register("trainerTitle", { required: true })} className="input  text-sm input-bordered w-full h-10 max-w-xs" />
        
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
            <option  value="female">Yoga</option>
            <option  value="male">Cardio</option>
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
         <input  type="file" name="photo" {...register("photo", { required: true })} className="block w-full text-sm text-sky-50
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

          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7">
            Close
          </label>
        </div>
     
        </div>
        </div>
    );
};

export default trial;