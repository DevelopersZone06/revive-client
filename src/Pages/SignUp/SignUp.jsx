import Lottie from "lottie-react";
import LoginAni from "../../assets/loginAni.json";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import moment from "moment";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const SignUp = () => {
  const navigate = useNavigate();

  const date = moment().format("YYYY MM DD HH mm");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = useAuth();
  const onSubmit = async (data) => {
    // console.log(data);
    // console.log(data.email);
    //image upload to imagebb and get an url
    const imageFile = { image: data.photo[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoUrl);
      })
      .then(() => {
        const userInfo = {
          name: data.name,
          email: data.email,
          photoUrl: data.photoUrl,
          role: "user",
        };
        console.log(userInfo);

        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            //
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Congratulation ! Your Registration successfully complete",
              showConfirmButton: false,
              timer: 1500,
            });

            const notificationIs = {
              title: "Congratulation ! Your Registration successfully complete",
              redirect: "/",
              isRead: false,
              date,
            };

            const newNotification = {
              notificationIs,
            };

            axiosPublic
              .patch(`/notification/${data.email}`, newNotification)
              .then((res) => {
                console.log(res.data);
                navigate("/");
              });
          }
        });
      });
  };

  return (
    <div className="primary-bg overflow-x-hidden lg:overflow-x-auto lg:overflow-hidden flex items-center justify-center lg:h-screen">
      <div className="login-container  container w-full lg:w-4/5 lg:bg-white h-screen lg:h-screen-75 lg:border border-gray-300 rounded-lg flex gap-4  flex-wrap lg:flex-nowrap flex-col lg:flex-row  justify-between group">
        <Helmet>
          <title>Revive | Register</title>
        </Helmet>

        {/*product Side*/}
        <div className="w-full lg:w-1/2 h-28 lg:h-full mt-32 lg:mt-0 lg:bg-theme-blue-dark flex relative order-2 lg:order-1">
          <div className="text-center hidden lg:flex items-center justify-start h-full w-full select-none">
            <span className="transform block whitespace-nowrap h-full -rotate-90 text-[55px] 2xl:text-[70px] font-black uppercase text-sky-800 opacity-0 transition-all group-hover:opacity-100 ml-10 2xl:ml-12 group-hover:-ml-24 2xl:group-hover:ml-32 lg:group-hover:ml-20 duration-1000 lg:duration-700 ease-in-out">
              Revive{" "}
            </span>
          </div>
          {/*product text*/}

          <div className="product absolute right-0 bottom-0 flex items-center lg:justify-center w-full opacity-50 lg:opacity-100">
            <Lottie
              animationData={LoginAni}
              loop={true}
              className="-mb-5 lg:mb-0 md:mb-0  -ml-8 lg:ml-0 md:ml-0 product h-[500px] xl:h-[700px] 2xl:h-[900px] w-auto object-cover transform group-hover:translate-x-26 2xl:group-hover:translate-x-48 transition-all duration-1000 lg:duration-700 ease-in-out"
            />

            {/*product shadow*/}
          </div>

          <div className="hidden lg:block md:block w-1/3 bg-white ml-auto"></div>
        </div>
        {/*Product Side End*/}

        {/*Login Form*/}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="form-wrapper flex items-center lg:h-full px-10 relative z-10 pt-16 lg:pt-0">
            <div className="w-full space-y-5">
              <div className="form-caption  flex items-end justify-center text-center space-x-3 mb-20">
                <span className="text-4xl font-semibold text-sky-700  headingFont">Sign Up</span>
                {/* <div className="lg:text-6xl px-10 rounded-lg   md:text-6xl text-xl">
                  <svg id="animation-heading">
                    <text x="45%" y="50%" dy=".50em" textAnchor="middle">
                      Sign Up
                    </text>
                  </svg>
                </div> */}
              </div>
              {/*form caption*/}

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-element">
                  <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                    <span className="block text-sm text-sky-800  normal font-semibold  tracking-wide">
                      Name*
                    </span>
                    <span className="block">
                      <input
                        type="text"
                        name="name"
                        {...register("name", { required: true })}
                        className="bg-teal-50 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-1 rounded focus:outline-none text-sm active:outline-none focus:border-gray-400 active:border-gray-400"
                      />
                    </span>
                  </label>
                </div>

                <div className="form-element">
                  <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                    <span className="block text-sm text-sky-800  normal font-semibold tracking-wide">
                      Email*
                    </span>
                    <span className="block">
                      <input
                        type="text"
                        name="email"
                        {...register("email", { required: true })}
                        className="bg-teal-50 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-1 rounded focus:outline-none text-sm active:outline-none focus:border-gray-400 active:border-gray-400"
                      />
                    </span>
                  </label>
                </div>
                {/* form element*/}

                <div className="form-element pb-5">
                  <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                    <span className="block   text-sky-800 normal font-semibold text-sm tracking-wide">
                      Password*
                    </span>
                    <span className="block">
                      <input
                        type="password"
                        name="password"
                        {...register("password", { required: true })}
                        className="bg-teal-50 lg:bg-white border lg:border-2 text-sm border-gray-400 lg:border-gray-200 w-full p-1 rounded focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400"
                      />
                    </span>
                  </label>
                </div>
                {/* form element */}
                <div className="form-element">
                  <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                    <span className="block text-sm text-md text-sky-800 normal font-semibold tracking-wide">
                      Photo
                    </span>
                    <span className="block">
                      <input
                        {...register("photo", { required: true })}
                        type="file"
                        className="file-input  max-w-xs bg-sky-50 lg:bg-white text-sky-800   rounded file-input-bordered file-input-sm  w-full  "
                        placeholder="Choose photo"
                      />
                    </span>
                  </label>
                </div>

                {/*form element */}

                <div className="form-element">
                  <span className="w-full lg:w-4/5 block mx-auto ">
                    <input
                      style={{
                        background:
                          "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
                      }}
                      className="cursor-pointer border-2 mt-5 font-bold  text-sky-50 border-sky-900  w-2/3 py-2 normal rounded-xl hover:secondary-bg   items-center justify-center  transition-all flex mx-auto text-center"
                      type="submit"
                      value="SignUp"
                    />
                  </span>
                </div>
              </form>
              <div className="px-12">
                <SocialLogin />
              </div>
              {/* form element*/}
              <p className="pl-12 text-md text-sky-800 font-semibold  pb-10  ">
                Already have an account?{" "}
                <Link to="/login" className="underline">
                  Login{" "}
                </Link>{" "}
              </p>
            </div>
          </div>
          {/*form wrapper*/}
        </div>
        {/*Login Form End*/}
      </div>
    </div>
  );
};

export default SignUp;
