

const GalleryCard = ({data}) => {
    return (
        <div className="hover:border-b-4 rounded-b border-[#448c74] hover:shadow-md  shadow transition delay-150 duration-300 ease-in-out hover:scale-105">
            <img src={data.image} alt="" />
            <h2 className="text-center text-2xl font-semibold py-3 hover:text-[#448c74]">{data.title}</h2>
        </div>
    );
};

export default GalleryCard;