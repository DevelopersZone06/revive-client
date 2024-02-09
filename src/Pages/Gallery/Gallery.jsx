// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet-async";
import ButtonGallery from "./ButtonGallery";
import GalleryCard from "./GalleryCard";
import { useEffect, useState } from "react";

const Gallery = () => {
 
  const [galleryData, setGalleryData] = useState([]); 

  useEffect(() => {
      fetch('http://localhost:5000/gallery')
      .then(res => res.json())
      .then(data => setGalleryData(data))
  }, [])

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

          {/* this is a testing comment */}

{/* this is another commit for testitng j */}

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
