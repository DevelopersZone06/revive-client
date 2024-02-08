// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet-async";
import ButtonGallery from "./ButtonGallery";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  const galleryData = [
    {
      id: 1,
      image:
        "https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-1.jpg",
      title: "Workouts for fitness",
    },
    {
      id: 2,
      image:
        "https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-2.jpg",
      title: "Weight Loss",
    },
    {
      id: 3,
      image:
        "https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-6.jpg",
      title: "Balance Diet",
    },
    {
      id: 4,
      image:
        "https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-4.jpg",
      title: "Yoga & meditation",
    },
    {
      id: 5,
      image:
        "https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-1.jpg",
      title: "Workouts for fitness",
    },
    {
      id: 6,
      image:
        "https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-9.jpg",
      title: "Gym & fitness",
    },
    {
      id: 7,
      image:
        "https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-5.jpg",
      title: "Nutrition",
    },
    {
      id: 8,
      image:
        "https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-4.jpg",
      title: "Yoga & meditation",
    },
    {
      id: 9,
      image:
        "https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-2.jpg",
      title: "Weight Loss",
    },
    {
      id: 10,
      image:
        "https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-8.jpg",
      title: "Yoga & meditation",
    },
    {
      id: 11,
      image:
        "https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-6.jpg",
      title: "Balance Diet",
    },
    {
      id: 12,
      image:
        "https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-5.jpg",
      title: "Nutrition",
    },
    {
      id: 13,
      image:
        "https://tk.commonsupport.com/healthcoach/wp-content/uploads/2016/11/15.jpg",
      title: "Yoga & meditation",
    },
    {
      id: 14,
      image:
        "https://tk.commonsupport.com/healthcoach/wp-content/uploads/2016/11/3.jpg",
      title: "Nutrition",
    },
    {
      id: 15,
      image:
        "https://tk.commonsupport.com/healthcoach/wp-content/uploads/2016/11/11.jpg",
      title: "Workouts for fitness",
    },
    {
      id: 16,
      image:
        "https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-2.jpg",
      title: "Weight Loss",
    },
  ];
  return (
    <div>
      <Helmet>
        <title>Revive | Galley</title>
      </Helmet>
      {/* <GalleryTitle/> */}

      <ButtonGallery />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-[2%] sm:px-[5%] lg:px-[8%] gap-10">
        {galleryData?.map((data) => (
          <GalleryCard data={data} key={data.id}></GalleryCard>
        ))}
      </div>

      {/* pagination system*/}

      <div className="flex justify-center items-center my-14 gap-1">
        <button className="border-secondary px-10 py-2 uppercase text-xl font-semibold  bg-sky-700 text-white  hover:text-sky-100">
          1
        </button>

        <button className="border-secondary px-10 py-2 uppercase text-xl font-semibold  bg-sky-700 text-white  hover:text-sky-100">
          2
        </button>
        <button className="border-secondary px-10 py-2 uppercase text-xl font-semibold  bg-sky-700 text-white  hover:text-sky-100">
          ...
        </button>
        <button className="border-secondary px-10 py-2 uppercase text-xl font-semibold  bg-sky-700 text-white  hover:text-sky-100">
          10
        </button>
      </div>
    </div>
  );
};

export default Gallery;
