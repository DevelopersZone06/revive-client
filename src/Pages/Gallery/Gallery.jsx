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
    <div className="mb-10">
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
    </div>
  );
};

export default Gallery;
