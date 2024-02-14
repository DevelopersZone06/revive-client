import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineTextsms } from "react-icons/md";
import { Link } from 'react-router-dom';
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import axios from "axios";

const Blog = ({blog}) => {
    const {title, description, image, category, like, author, authorTitle, date, authorImage, _id} = blog

    const [comments, setComments] = useState(0)
    const [likes, setLikes] = useState(0)
    const axiosPublic = useAxiosPublic()

    useEffect( () => {
        // axiosPublic(`/comment/${res.data._id}`)
        axios(`http://localhost:5000/comment/${_id}`)
        .then(res => {
            console.log(res.data)
            setComments(res.data.allComment.length)
            setLikes(res.data.likes.length)

        })
    }, [])


    return (
        <div className='shadow-gray-300 shadow-md rounded-md relative '  style={{
            background:
              "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
          }}>
            <img src={image} alt="" className='h-[200px] w-full rounded-t-lg' />
            <div className='p-3'>
                <div className='flex justify-between'>
                    <span className='bg-sky-50 py-2 text-sky-700 font-semibold px-3 rounded-lg text-sm '>{category}</span>
                    <p className='text-sm text-sky-50'>{date}</p>
                </div>
                <h1 className='capitalize font-semibold text-xl mt-2 text-sky-50'>{title}</h1>

                <p className='text-sm mb-20 text-sky-50'>{description.slice(0, 200)} <Link to={`/blog/${_id}`} className='text-sky-100 font-bold'>Read More...</Link></p>
                <div className='absolute bottom-3 flex justify-between w-full left-0 px-3'>
                   <div className='flex gap-3 items-center'>
                        <img src={authorImage} alt="" className='w-9 h-9 rounded-full' />
                        <div className="text-sky-50">
                            <h4 className='text-sm font-semibold'>{author}</h4>
                            <h6 className='text-sm'>{authorTitle}</h6>
                        </div>
                   </div>
                   <div className="flex gap-3 text-sky-50">
                        <div>
                            <span>{likes}</span>
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