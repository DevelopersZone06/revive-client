import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";





const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const PostGallery = () => {
  const axiosPublic = useAxiosPublic();
  const { register,handleSubmit, formState: { errors }, } = useForm()
  const onSubmit =async (data) => {

    const imageFile = { image: data.photo[0] };

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });


    const image = (res.data.data.url);
    const title = data.title
    const category = data.category
    const description = data.description

    const gallery = {image, title, category, description}
    console.log(gallery)

    axiosPublic.post('/gallery', gallery)
    .then(res => {
      console.log(res.data)
    })

  }

 

  return (
    <>
      <h2 className="text-center text-white font-semibold text-3xl my-5">
        Add a new memory
      </h2>
      <Helmet>
        <title>
          Revive | Post a gallery
        </title>
      </Helmet>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-[70%] mx-auto">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="title"
              {...register("title", { required: true })}
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-50 peer"

              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-sky-50  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-sky-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Title
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <select
                className="w-full p-2 rounded-md  text-white"
                name="category"
               
                {...register("category", { required: true })}
                style={{
                  background:
                    "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
                }}
              >
                <option value="yoga" className="text-sky-700 font-semibold">
                  Yoga
                </option>
                <option value="workouts" className="text-sky-700 font-semibold">
                  Workouts
                </option>
                <option value="fitness" className="text-sky-700 font-semibold">
                  Fitness
                </option>
                <option value="loss" className="text-sky-700 font-semibold">
                  Weight Loss
                </option>
                <option
                  value="nutrition"
                  className="text-sky-700 font-semibold"
                >
                  Nutrition
                </option>
              </select>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="file"
                name="photo"
                id="floating_last_name"
                {...register("photo", { required: true })}
                className="block w-full text-sm text-sky-50
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-sky-700 file:text-sky-50
      hover:file:bg-sky-600"
                placeholder=" "
                required
              />

            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <textarea
              rows="5"
              cols="5"
              name="description"
              {...register("description", { required: true })}
              className="block py-2.5 text-white px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-sky-50 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-sky-50  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-sky-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Description
            </label>
          </div>
          <span className="w-full lg:w-4/5 block mx-auto ">
          <input
            type="submit"
            value="Post Photos"
            className="text-white bg-sky-50 hover:bg-sky-50focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
            style={{
              background:
                "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
            }}
          />
        </span>
         
        </form>
      </div>
    </>
  );
};

export default PostGallery;
