// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet-async";
import ButtonGallery from "./ButtonGallery";
import GalleryCard from "./GalleryCard";
import { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';

const Gallery = () => {
 
  const [galleryData, setGalleryData] = useState([]); 
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);


  useEffect(() => {
    fetchGalleryData();
  }, [page]);

  const fetchGalleryData = () => {
    fetch(`http://localhost:5000/gallery?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          setHasMore(false);
        }
        setGalleryData([...galleryData, ...data]);
      })
      .catch((error) => console.error("Error fetching gallery data:", error));
  };

  return (
    <div className="mb-10">
      <Helmet>
        <title>Revive | Galley</title>
      </Helmet>
      {/* <GalleryTitle/> */}

      <ButtonGallery />

      <InfiniteScroll
        dataLength={galleryData.length}
        next={() => setPage(page + 1)}
        hasMore={hasMore}
        loader={<h4 className="text-3xl text-center font-semibold">Loading...</h4>}
      >

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-[2%] sm:px-[5%] lg:px-[8%] gap-10">
        {galleryData?.map((data) => (
          <GalleryCard data={data} key={data.id}></GalleryCard>
        ))}
      </div>
      </InfiniteScroll>
    </div>
  );
};

export default Gallery;
