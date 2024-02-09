import { useEffect, useState } from "react";
import Blog from "./Blog";
import axios from "axios";
import { Helmet } from "react-helmet-async";
// import { Helmet } from "react-helmet";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://revive-server-dun.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

    useEffect( () => {
        fetch('https://revive-server-dun.vercel.app/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])



    const trainer = e => {
        const val = e.target.value
        console.log(val)
    }

 




    return (
        <div>
            <div className="sm:flex px-[2%] sm:px-[5%] lg:px-[8%] py-10">

                {/* sidebar for filter blogs  */}
                <div className="sm:w-[250px] primary-bg p-5 border-primary rounded-l-md">
                    <h1 className="text-2xl font-semibold border-b border-b-white pb-1">Filter Blogs</h1>
                    <div className="grid grid-cols-2 gap-5 sm:block">
                        <div className="bg-white text-center mt-8 p-5 space-y-2 rounded-md">
                            <h1 className="font-semibold">Filter By Trainer</h1>
                            <select defaultValue="null" onChange={trainer} name="trainer" id="trainer" className="w-full primary-bg text-center py-1 rounded-md outline-0">
                                <option value="null">Select</option>
                                <option value="john doe">Jhon doe</option>
                            </select>
                        </div>

                        <div className="bg-white text-center mt-8 p-5 space-y-2 rounded-md">
                            <h1 className="font-semibold">Filter By Category</h1>
                            <select defaultValue="null" name="trainer" id="trainer" className="w-full primary-bg text-center py-1 rounded-md outline-0">
                                <option value="null">Select</option>
                                <option value="john doe">Jhon doe</option>
                            </select>
                        </div>

                        <div className="bg-white text-center mt-8 p-5 space-y-2 rounded-md">
                            <h1 className="font-semibold">Filter By Date</h1>
                            <input type="date" className="w-full primary-bg text-center py-1 rounded-md outline-0"/>
                        </div>

                        <div className="bg-white text-center mt-8 p-5 space-y-2 rounded-md">
                            <h1 className="font-semibold">Sort By</h1>
                            <select defaultValue="null" name="trainer" id="trainer" className="w-full primary-bg text-center py-1 rounded-md outline-0">
                                <option value="null">Select</option>
                                <option value="most comment">Most Comment</option>
                                <option value="most like">Most Like</option>
                            </select>
                        </div>

                    </div>
                </div>

                {/* all blogs section  */}
                <div className="flex-1 border-primary rounded-r-md p-5">
                    <h1 className="text-2xl font-semibold mb-9">All Blogs</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
                        {
                            blogs.map((blog, i) => <Blog key={i} blog={blog}></Blog>)
                        }
                    </div>
                </div>
            </div>
    </div>
  );
};

export default Blogs;
