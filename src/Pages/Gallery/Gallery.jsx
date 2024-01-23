
import ButtonGallery from "./ButtonGallery";
import GalleryCard from "./GalleryCard";
import GalleryTitle from "./GalleryTitle";


const Gallery = () => {
    const galleryData=[
        {
            id:1,
            image:'https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-1.jpg',
            title: 'Workouts for fitness'

        },
        {
            id:2,
            image:'https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-2.jpg',
            title: 'Weight Loss'

        },
        {
            id:3,
            image:'https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-6.jpg',
            title: 'Balance Diet'

        }
        
    ]
    return (
        <div>
            <GalleryTitle/>
            
           <ButtonGallery/>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[2%] sm:px-[5%] lg:px-[8%] gap-5">
            {
                galleryData?.map(data => <GalleryCard data={data} key={data.id}></GalleryCard>)
            }
           </div>

           {/* pagination system*/}
           
           <div className="flex justify-center items-center my-14 gap-1">
            <button className="border-secondary px-10 py-2 uppercase text-xl font-semibold  bg-[#448c74] text-white hover:bg-[#448c74] hover:text-white">1</button>
           
            <button className="border-secondary px-10 py-2 uppercase text-xl font-semibold  hover:bg-[#448c74] hover:text-white">2</button>
            <button className="border-secondary px-10 py-2 uppercase text-xl font-semibold  hover:bg-[#448c74] hover:text-white">...</button>
            <button className="border-secondary px-10 py-2 uppercase text-xl font-semibold  hover:bg-[#448c74] hover:text-white">10</button>
            </div>
        </div>
    );
};

export default Gallery;