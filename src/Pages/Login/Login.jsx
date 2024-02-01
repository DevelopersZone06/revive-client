import Lottie from "lottie-react";
import LoginAni from "../../assets/loginAni.json";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../../Styles/banner.css";

import '../../Styles/banner.css'

import useAuth from '../../Hooks/useAuth';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

// import { Helmet } from "react-helmet-async";
import PageTitle from "../../Shared/PageTitle/PageTitle";
// import { HelmetData } from "react-helmet-async";
const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { signIn } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  return (
    <div className="primary-bg overflow-x-hidden lg:overflow-x-auto lg:overflow-hidden flex items-center justify-center lg:h-screen">
      <div className="login-container container w-full lg:w-4/5 lg:bg-white h-screen lg:h-screen-75 lg:border border-gray-300 rounded-lg flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group">
        <PageTitle title={"Login"}>

        </PageTitle>

        {/*product Side*/}
        <div className="w-full lg:w-1/2 h-28 lg:h-full mt-32 lg:mt-0 lg:bg-theme-yellow-dark flex relative order-2 lg:order-1">
          <div className="text-center hidden lg:flex items-center justify-start h-full w-full select-none">
            <span className="transform block whitespace-nowrap h-full -rotate-90 text-[55px] 2xl:text-[70px] font-black uppercase text-md secondary-color  opacity-0 transition-all group-hover:opacity-100 ml-10 2xl:ml-12 group-hover:-ml-20 2xl:group-hover:ml-26 lg:group-hover:ml-20 duration-1000 lg:duration-700 ease-in-out">
              Revive{" "}
            </span>
          </div>
          {/*product text*/}

          <div className="product absolute right-0 bottom-0 flex items-center lg:justify-center w-full opacity-50 lg:opacity-100">
            <Lottie
              animationData={LoginAni}
              loop={true}
              className="-mb-5 lg:mb-0 -ml-12 lg:ml-0 product h-[500px] xl:h-[700px] 2xl:h-[900px] w-auto object-cover transform group-hover:translate-x-26 2xl:group-hover:translate-x-48 transition-all duration-1000 lg:duration-700 ease-in-out"
            />

            {/*product shadow*/}
          </div>

          <div className="hidden lg:block w-1/3 bg-white ml-auto"></div>
        </div>
        {/*Product Side End*/}

        {/*Login Form*/}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="form-wrapper flex items-center lg:h-full px-10 relative z-10 pt-16 lg:pt-0">
            <div className="w-full space-y-5">
              <div className="form-caption flex items-end justify-center text-center space-x-3 mb-20">
                {/*  <span className="text-3xl secondary-color font-bold headingFont ">Login</span> */}
                <div className="lg:text-6xl md:text-6xl text-xl">
                  <svg id="animation-heading">
                    <text x="45%" y="50%" dy=".50em" textAnchor="middle">
                      Login
                    </text>
                  </svg>
                </div>
              </div>
              {/*form caption*/}

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-element">
                  <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                    <span className="block text-md secondary-color normal font-semibold tracking-wide ">
                      Email
                    </span>
                    <span className="block">
                      <input
                        type="text"
                        name="email"
                        {...register("email", { required: true })}
                        className="bg-teal-50   lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-1 rounded focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400"
                      />
                    </span>
                  </label>
                </div>
                {/* form element*/}

                <div className="form-element">
                  <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                    <span className="block text-md text-md normal secondary-color font-semibold  tracking-wide">
                      Password
                    </span>
                    <span className="block">
                      <input
                        type="password"
                        name="password"
                        {...register("password", { required: true })}
                        className="bg-teal-50 p-1 rounded lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400"
                      />
                    </span>
                  </label>
                </div>
                {/* form element */}

                <div className="form-element py-5">
                  <div className="w-full lg:w-4/5  mx-auto flex items-center justify-between">
                    <label className=" text-gray-800 tracking-wide flex items-center space-x-2 select-none">
                      <input type="checkbox" name="" id="" />
                      <span className="block text-md secondary-color font-semibold tracking-wide">
                        Remember me
                      </span>
                    </label>
                    <a
                      href="#"
                      className=" text-md secondary-color font-semibold tracking-wide inline-block border-b border-gray-300"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>
                {/*form element */}

                <div className="form-element">
                  <span className="w-full lg:w-4/5 block mx-auto ">
                    <input
                      type="submit"
                      value="Login"
                      className="cursor-pointer border-2 font-bold text-teal-50 border-[#448c74] w-full p-1 normal rounded-xl hover:secondary-bg bg-[#448c74]    transition-all"
                    />
                  </span>
                </div>
                
              </form>
              {/* Social Login */}

            <div className='px-12'>
            <SocialLogin/>
            </div>
              <p className='pl-9 text-md secondary-color  pb-10  '>Don't have an account? <Link to='/signUp' className='underline'>Sign Up </Link> </p>
              {/* form element*/}
              <p className="pl-9 text-md secondary-color  pb-10  ">
                Don't have an account?{" "}
                <Link to="/signUp" className="underline">
                  Sign Up{" "}
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

export default Login;
