import { useEffect, useState } from "react";
import Blog from "./Blog";
import axios from "axios";
import { Helmet } from "react-helmet-async";
// import { Helmet } from "react-helmet";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    const [trainer, setTrainer] = useState("")
    const [category, setCategory] = useState("")
    const [date, setDate] = useState("")
    const [sort, setSort] = useState("")
    

    useEffect(() => {
        fetch(`http://localhost:5000/blogs?trainer=${trainer}&category=${category}&date=${date}&sort=${sort}`)
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, [trainer, category, date, sort]);


    const handleTrainer = (e) => {
        const selectedTrainer = e.target.value
        setTrainer(selectedTrainer)
    }

    const handleCategory = (e) => {
        const selectedCategory = e.target.value
        setCategory(selectedCategory)
    }
    const handleDate = (e) => {

        const selectedDate = e.target.value
      // Convert input date to a Date object
        var dateObject = new Date(selectedDate);

        // Extract day, month, and year
        var day = dateObject.getDate();
        var month = dateObject.getMonth() + 1; // Months are zero-based
        var year = dateObject.getFullYear();

        // Format the date as DD-MM-YYYY with leading zeros for day and month
        var formattedDay = (day < 10 ? '0' : '') + day;
        var formattedMonth = (month < 10 ? '0' : '') + month;
        var formattedDate = formattedDay + '-' + formattedMonth + '-' + year;

        setDate(formattedDate);

    }

    const handleSort = (e) => {
        const selectedSort = e.target.value
        setSort(selectedSort)
    }
    

    useEffect( () => {
        console.log(trainer, date, category, sort)
    }, [trainer, date, category, sort])
  






    return (
        <div>
            <Helmet>
                <title>
                    Revive | blogs
                </title>
            </Helmet>
            <div className="sm:flex px-[2%] sm:px-[5%] lg:px-[8%] py-10" style={{ background: 'radial-gradient(circle, rgba(0,51,111,1) 0%, rgba(0,0,0,1) 100%)' }}>

                {/* sidebar for filter blogs  */}
                <div className="sm:w-[250px]  p-5 border-primary rounded-l-md">
                    <h1 className="text-2xl font-semibold border-b border-b-white pb-1 text-sky-100">Filter Blogs</h1>

                    <div className="grid grid-cols-2 gap-5 sm:block">
                        <div className=" text-center mt-8 p-5 space-y-2 rounded-md" style={{
                            background:
                                "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
                        }}>
                            <h1 className="font-semibold text-sky-100">Filter By Trainer</h1>
                            <select onChange={handleTrainer} defaultValue="" name="trainer" id="trainer" className="w-full primary-bg text-center py-1 rounded-md outline-0">
                                <option value="">Select</option>
                                <option value="john doe">Jhon doe</option>
                                <option value="Md Ibrahim khalil">Md Ibrahim khalil</option>
                            </select>
                        </div>

                        <div className="text-center mt-8 p-5 space-y-2 rounded-md" style={{
                            background:
                                "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
                        }}>
                            <h1 className="font-semibold text-sky-100">Filter By Category</h1>
                            <select onChange={handleCategory} defaultValue="" name="category" id="category" className="w-full primary-bg text-center py-1 rounded-md outline-0">
                                <option value="">Select</option>
                                <option value="cardio">Cardio</option>
                                <option value="nutrition">Nutrition</option>
                                <option value="yoga">Yoga</option>
                            </select>
                        </div>

                        <div className="bg-white text-center mt-8 p-5 space-y-2 rounded-md" style={{
                            background:
                                "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
                        }}>
                            <h1 className="font-semibold">Filter By Date</h1>
                            <input onChange={handleDate} type="date"id="date" name="date" className="w-full primary-bg text-center py-1 rounded-md outline-0" />
                        </div>

                        <div className="bg-white text-center mt-8 p-5 space-y-2 rounded-md" style={{
                            background:
                                "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
                        }}>
                            <h1 className="font-semibold text-sky-100">Sort By</h1>
                            <select onChange={handleSort} defaultValue="" name="sort" id="sort" className="w-full primary-bg text-center py-1 rounded-md outline-0">
                                <option value="">Select</option>
                                <option value="most comment">Most Comment</option>
                                <option value="most like">Most Like</option>
                            </select>
                        </div>

                    </div>
                </div>

                {/* all blogs section  */}
                <div className="flex-1 border-primary rounded-r-md p-5" >
                    <h1 className="text-2xl font-semibold mb-9 text-sky-100">All Blogs</h1>
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
