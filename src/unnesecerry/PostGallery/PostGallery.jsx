import { Helmet } from "react-helmet-async";
import Title from "../../../../Shared/Title";

const PostGallery = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Helmet>
        <title>Revive | Admin Dashboard</title>
      </Helmet>
      <Title></Title>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4 md:flex-row flex-col">
          {/* Profile name */}
          <div className="relative h-32 w-full items-center  flex md:flex-row flex-col  gap-2 ">
            <label className="label">
              <span className=" text-[#194a63] font-bold">Email:</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full border border-[#c3bd2e]"
              name="email"
              readOnly
            />
          </div>
          {/* Email */}
          <div className="relative h-32 w-full   items-center flex md:flex-row flex-col  gap-2 ">
            <label className="label">
              <span className="text-[#194a63] font-bold">Image Url:</span>
            </label>
            <input
              type="url"
              className="input input-bordered w-full  border border-[#c3bd2e]"
              name="image"
            />
          </div>
        </div>
        <div className="relative h-32 w-full   items-center flex md:flex-row flex-col  gap-2 ">
          <label className="label">
            <span className="text-[#194a63] font-bold">Display Name:</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full  border border-[#c3bd2e]"
            name="name"
          />
        </div>

        <button
          type="submit"
          className="block md:w-1/4  w-11/12 rounded text-[#fcf540] bg-gradient-to-r from-[#193e51] to-[#146666]  px-7 pb-2.5 pt-3 text-sm font-medium uppercase  mx-auto"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default PostGallery;
