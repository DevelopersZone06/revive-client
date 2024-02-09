const PostGallery = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const description = form.description.value;
    const galleryPost = { title, category, description };
    console.log(galleryPost);
  };

  return (
    <>
      <h2 className="text-center text-white font-semibold text-3xl my-5">
        Add a new memory
      </h2>
      <div className="">
        <form onSubmit={handleForm} className="max-w-[70%] mx-auto">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="title"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-50 peer"
              placeholder=" "
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
                id=""
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
              rows="10"
              cols="10"
              name="description"
              className="block py-2.5 text-white px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-sky-50 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-sky-50  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-sky-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Description
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-sky-50 hover:bg-sky-50focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
            style={{
              background:
                "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default PostGallery;
