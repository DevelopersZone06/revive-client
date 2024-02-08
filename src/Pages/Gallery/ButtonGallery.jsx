const ButtonGallery = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center  normal items-center gap-8 my-14 w-1/2 mx-auto py-2 px-5">
        <div className="normal">
          <button className="text-xl  font-bold   text-sky-800 underline  hover:underline cursor-pointer">
            Show All{" "}
          </button>
        </div>
        <div>
          <button className="text-xl font-bold text-sky-800    hover:underline cursor-pointer">
            Yoga{" "}
          </button>
        </div>
        <div>
          <button className="text-xl font-bold text-sky-800    hover:underline cursor-pointer">
            {" "}
            Workouts{" "}
          </button>
        </div>
        <div>
          <button className="text-xl font-bold text-sky-800  hover:underline cursor-pointer">
            {" "}
            Fitness{" "}
          </button>
        </div>
        <div>
          <button className="text-xl font-bold text-sky-800    hover:underline cursor-pointer">
            {" "}
            Weight Loss{" "}
          </button>
        </div>
        <div>
          <button className="text-xl font-bold text-sky-800   hover:underline cursor-pointer">
            {" "}
            Nutrition{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonGallery;
