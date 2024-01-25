import { FaRegHeart } from "react-icons/fa";
import { MdOutlineTextsms } from "react-icons/md";
import { Link } from 'react-router-dom';

const Blog = ({blog}) => {
    const {title, description, image, category, like, comments, author, authorTitle, date, authorImage} = blog
    return (
        <div className='shadow-gray-300 shadow-md rounded-md sm:h-[400px]  relative h-[470px]'>
            <img src={image} alt="" className='h-[150px] w-full rounded-t-lg' />
            <div className='p-3'>
                <div className='flex justify-between'>
                    <span className='secondary-bg text-white px-3 rounded-lg text-sm'>{category}</span>
                    <p className='text-sm'>{date}</p>
                </div>
                <h1 className='capitalize font-medium text-xl mt-2'>{title}</h1>
                <p className='text-sm'>{description.slice(0, 200)} <Link to={`/blog/3`} className='secondary-color font-bold'>Read More...</Link></p>
                <div className='absolute bottom-3 flex justify-between w-full left-0 px-3'>
                   <div className='flex gap-3 items-center'>
                        <img src={authorImage} alt="" className='w-9 h-9 rounded-full' />
                        <div>
                            <h4 className='text-sm font-semibold'>{author}</h4>
                            <h6 className='text-sm'>{authorTitle}</h6>
                        </div>
                   </div>
                   <div className="flex gap-3">
                        <div>
                            <span>{like}</span>
                            <FaRegHeart className="h-4" />
                        </div>
                        <div>
                            <span>{comments}</span>
                            <MdOutlineTextsms className="h-4"></MdOutlineTextsms>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;