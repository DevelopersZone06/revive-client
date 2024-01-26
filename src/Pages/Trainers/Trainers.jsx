
// import ButtonGallery from "./ButtonGallery";
// import GalleryCard from "./GalleryCard";
// import GalleryTitle from "./GalleryTitle";

import ButtonGallery from "../Gallery/ButtonGallery";
import GalleryCard from "../Gallery/GalleryCard";
import GalleryTitle from "../Gallery/GalleryTitle";


const Gallery = () => {
    const galleryData=[
        {
            id:1,
            image:'https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-1.jpg',
            name: 'Workouts for fitness'

        },
        {
            id:2,
            image:'https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-2.jpg',
            name: 'Weight Loss'

        },
        {
            id:3,
            image:'https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-6.jpg',
            name: 'Balance Diet'

        },
        {
            id:4,
            image:'https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-4.jpg',
            name: 'Yoga & meditation'

        },
        {
            id:5,
            image:'https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-1.jpg',
            name: 'Workouts for fitness'

        },
        {
            id:6,
            image:'https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-9.jpg',
            name: 'Gym & fitness'

        },
        {
            id:7,
            image:'https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-5.jpg',
            name: 'Nutrition'

        },
        {
            id:8,
            image:'https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-4.jpg',
            name: 'Yoga & meditation'

        },
        {
            id:9,
            image:'https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-2.jpg',
            name: 'Weight Loss'

        },
        {
            id:10,
            image:'https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-8.jpg',
            name: 'Yoga & meditation'

        },
        {
            id:11,
            image:'https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-6.jpg',
            name: 'Balance Diet'

        },
        {
            id:12,
            image:'https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-5.jpg',
            name: 'Nutrition'

        },
        {
            id:13,
            image:'https://tk.commonsupport.com/healthcoach/wp-content/uploads/2016/11/15.jpg',
            name: 'Yoga & meditation'

        },
        {
            id:14,
            image:'https://tk.commonsupport.com/healthcoach/wp-content/uploads/2016/11/3.jpg',
            name: 'Nutrition'

        },
        {
            id:15,
            image:'https://tk.commonsupport.com/healthcoach/wp-content/uploads/2016/11/11.jpg',
            name: 'Workouts for fitness'

        },
        {
            id:16,
            image:'https://designarc.biz/demos/fitzeous/theme/images/gallery/gallery-col-three-2.jpg',
            name: 'Weight Loss'

        },
    ]
    return (
        <div>
            <GalleryTitle/>
            
           <ButtonGallery/>

           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-[2%] sm:px-[5%] lg:px-[8%] gap-5">
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