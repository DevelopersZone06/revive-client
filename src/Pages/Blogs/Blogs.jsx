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
            authorTitle: 'Weight Loss Trainer'
        },
        {
            title: 'this is blog 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore impedit exercitationem aspernatur eius, nisi nam amet possimus iste deserunt modi nemo voluptates. Quaerat dolores, ipsum repudiandae deleniti numquam aliquid doloremque laudantium autem porro facere quasi distinctio cumque iste culpa optio itaque, quia et at deserunt, dolorum vel? Suscipit, eius excepturi!',
            image: 'https://www.lemongym.lt/wp-content/uploads/2023/02/MG_1741-243x240.jpg',
            category: 'Yoga',
            like: 23,
            comments: 20,
            author: 'Md Ibrahim khalil',
            authorTitle: 'Weight Loss Trainer'
        },
        {
            title: 'this is blog 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore impedit exercitationem aspernatur eius, nisi nam amet possimus iste deserunt modi nemo voluptates. Quaerat dolores, ipsum repudiandae deleniti numquam aliquid doloremque laudantium autem porro facere quasi distinctio cumque iste culpa optio itaque, quia et at deserunt, dolorum vel? Suscipit, eius excepturi!',
            image: 'https://www.lemongym.lt/wp-content/uploads/2023/02/MG_1741-243x240.jpg',
            category: 'Yoga',
            like: 23,
            comments: 20,
            author: 'Md Ibrahim khalil',
            authorTitle: 'Weight Loss Trainer'
        }
    ]
    return (
        <div>
            <h1>this is blogs</h1>
            <div className="flex px-[2%] sm:px-[5%] lg:px-[8%]">
                <div className="w-[200px] primary-bg">
                    <h1>sidebar</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-1">
                {
                    blogs.map(blog => <Blog blog={blog}></Blog>)
                }
                </div>
            </div>
        </div>
    );
};

export default Blogs;