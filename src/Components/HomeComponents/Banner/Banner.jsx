
import img3 from "../../../assets/banner/img3.jpg";
import '../../../Styles/banner.css'

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen secondary-bg w-full box">
        <div className="hero-content flex-col lg:flex-row justify-between  w-full">
          <div className="lg:w-1/2 w-full text-white">
            <span className="border border-white rounded-full p-2 text-xl md:text-2xl lg:text-2xl">
              Inspiration for Healthy Living
            </span>
            <div className="lg:text-6xl md:text-6xl text-xl ">
              <svg>
                <text x="45%" y="50%" dy=".50em" textAnchor="middle">
                  Transform Your Life
                </text>
              </svg>
            </div>
            <hr className="-mt-10 md:-mt-0" />
            <p className="py-6 text-center lg:text-left">
              Transform Your Life with Our Transformative Workouts Revitalize
              your energy, renew your vitality, and redefine your well-being
              with Revive Fitness.
            </p>

            <div className="text-center lg:text-left"> 
              <a
                data-aos="fade-up"
                href="#contact"
                className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#0D1322] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out btn-bg group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-[#0D1322]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-[#000000]">
                  Contact
                </span>
              </a>
            </div>
          </div>
          <div className="image-container h-96 lg:w-5/12 w-full">
            <img
              src={img3}
              alt="Image"
              className="image rounded-4xl bannerImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
