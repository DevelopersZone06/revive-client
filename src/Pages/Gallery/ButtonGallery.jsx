const ButtonGallery = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-8 my-14">
        <div>
          <button className="text-xl font-bold hover:text-[#448c74]  text-[#448c74] underline  hover:underline cursor-pointer">
            Show All{" "}
          </button>
        </div>
        <div>
          <button className="text-xl font-bold hover:text-[#448c74]    hover:underline cursor-pointer">
            Yoga{" "}
          </button>
        </div>
        <div>
          <button className="text-xl font-bold hover:text-[#448c74]    hover:underline cursor-pointer">
            {" "}
            Workouts{" "}
          </button>
        </div>
        <div>
          <button className="text-xl font-bold hover:text-[#448c74]    hover:underline cursor-pointer">
            {" "}
            Fitness{" "}
          </button>
        </div>
        <div>
          <button className="text-xl font-bold hover:text-[#448c74]    hover:underline cursor-pointer">
            {" "}
            Weight Loss{" "}
          </button>
        </div>
        <div>
          <button className="text-xl font-bold hover:text-[#448c74]    hover:underline cursor-pointer">
            {" "}
            Nutrition{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonGallery;
