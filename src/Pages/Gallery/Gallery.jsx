
import ButtonGallery from "./ButtonGallery";
import GalleryTitle from "./GalleryTitle";


const Gallery = () => {
    return (
        <div>
            <GalleryTitle/>
            
           <ButtonGallery/>

           {/* pagination system*/}
           
           <div className="flex justify-center items-center my-14">
            <button className="border-secondary px-10 py-2 uppercase text-xl font-semibold secondary-color hover:bg-[#448c74] hover:text-white">1</button>
           
            <button className="border-secondary px-10 py-2 uppercase text-xl font-semibold secondary-color hover:bg-[#448c74] hover:text-white">2</button>
            <button className="border-secondary px-10 py-2 uppercase text-xl font-semibold secondary-color hover:bg-[#448c74] hover:text-white">...</button>
            <button className="border-secondary px-10 py-2 uppercase text-xl font-semibold secondary-color hover:bg-[#448c74] hover:text-white">10</button>
            </div>
        </div>
    );
};

export default Gallery;