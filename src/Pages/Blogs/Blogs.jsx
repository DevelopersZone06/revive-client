import Blog from "./Blog";

const Blogs = () => {

    const blogs = [
        {
            title: 'this is blog 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore impedit exercitationem aspernatur eius, nisi nam amet possimus iste deserunt modi nemo voluptates. Quaerat dolores, ipsum repudiandae deleniti numquam aliquid doloremque laudantium autem porro facere quasi distinctio cumque iste culpa optio itaque, quia et at deserunt, dolorum vel? Suscipit, eius excepturi!',
            image: 'https://www.lemongym.lt/wp-content/uploads/2023/02/MG_1741-243x240.jpg',
            category: 'Yoga',
            like: 23,
            comments: 20,
            author: 'Md Ibrahim khalil',
            authorTitle: 'Weight Loss Trainer',
            date: "01 - 01 - 2024",
            authorImage: 'https://lh3.googleusercontent.com/ogw/ANLem4bOxtOHcxrUUzUJvFeR2LDgwMMZEEDjAmc05xlPEA=s32-c-mo'
        },
        {
            title: 'this is blog 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore impedit exercitationem aspernatur eius, nisi nam amet possimus iste deserunt modi nemo voluptates. Quaerat dolores, ipsum repudiandae deleniti numquam aliquid doloremque laudantium autem porro facere quasi distinctio cumque iste culpa optio itaque, quia et at deserunt, dolorum vel? Suscipit, eius excepturi!',
            image: 'https://www.lemongym.lt/wp-content/uploads/2023/02/MG_1741-243x240.jpg',
            category: 'Yoga',
            like: 23,
            comments: 20,
            author: 'Md Ibrahim khalil',
            authorTitle: 'Weight Loss Trainer',
            date: "01 - 01 - 2024",
            authorImage: 'https://lh3.googleusercontent.com/ogw/ANLem4bOxtOHcxrUUzUJvFeR2LDgwMMZEEDjAmc05xlPEA=s32-c-mo'
        },
        {
            title: 'this is blog 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore impedit exercitationem aspernatur eius, nisi nam amet possimus iste deserunt modi nemo voluptates. Quaerat dolores, ipsum repudiandae deleniti numquam aliquid doloremque laudantium autem porro facere quasi distinctio cumque iste culpa optio itaque, quia et at deserunt, dolorum vel? Suscipit, eius excepturi!',
            image: 'https://www.lemongym.lt/wp-content/uploads/2023/02/MG_1741-243x240.jpg',
            category: 'Yoga',
            like: 23,
            comments: 20,
            author: 'Md Ibrahim khalil',
            authorTitle: 'Weight Loss Trainer',
            date: "01 - 01 - 2024",
            authorImage: 'https://lh3.googleusercontent.com/ogw/ANLem4bOxtOHcxrUUzUJvFeR2LDgwMMZEEDjAmc05xlPEA=s32-c-mo'
        }
    ]


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
                            <select onChange={trainer} name="trainer" id="trainer" className="w-full primary-bg text-center py-1 rounded-md outline-0">
                                <option selected disabled value="disable">Select</option>
                                <option value="john doe">Jhon doe</option>
                            </select>
                        </div>

                        <div className="bg-white text-center mt-8 p-5 space-y-2 rounded-md">
                            <h1 className="font-semibold">Filter By Category</h1>
                            <select name="trainer" id="trainer" className="w-full primary-bg text-center py-1 rounded-md outline-0">
                                <option selected disabled value="">Select</option>
                                <option value="john doe">Jhon doe</option>
                            </select>
                        </div>

                        <div className="bg-white text-center mt-8 p-5 space-y-2 rounded-md">
                            <h1 className="font-semibold">Filter By Date</h1>
                            <input type="date" className="w-full primary-bg text-center py-1 rounded-md outline-0"/>
                        </div>

                        <div className="bg-white text-center mt-8 p-5 space-y-2 rounded-md">
                            <h1 className="font-semibold">Sort By</h1>
                            <select name="trainer" id="trainer" className="w-full primary-bg text-center py-1 rounded-md outline-0">
                                <option disabled selected value="">Select</option>
                                <option value="most comment">Most Comment</option>
                                <option value="most like">Most Like</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* all blogs section  */}
                <div className="flex-1 border-primary rounded-r-md p-5">
                    <h1 className="text-2xl font-semibold mb-9">All Blogs</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {
                            blogs.map(blog => <Blog blog={blog}></Blog>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;