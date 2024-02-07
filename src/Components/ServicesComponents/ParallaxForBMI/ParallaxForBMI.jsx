import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import img from '../../../assets/banner/dark.jpg'


const ParallaxForBMI = () => {
    return (
        <div>
             <div className="-my-16 rounded-lg bg-center">
        <Parallax
          blur={5}
          // bgImage={
          //   "https://i.ibb.co/jLWbY6P/ypga.jpg"
          // }
          bgImage={"https://i.ibb.co/MDmhv1m/dark.jpg"}
          bgImageAlt="the cat"
          strength={500}
          className="hero w-full rounded-lg bg-center bg-cover"
        >
          {/* Parallax added  */}
          <div className="hero-overlay bg-opacity-70 bg-white "></div>
          <div className="text-center p-20 w-full">
            <div className="max-w-md secondary-color ">
              <div>
                <h1 className="mb-5 text-5xl font-bold text-sky-100 ">Our new features</h1>
                <p className="mb-5 text-sky-200">
                  Get services by BMI (Body Mass Index)
                </p>
              </div>
              <Link to={"/BMIServices"}>
              <button className="text-sky-200 bg-sky-950  hover:bg-sky-200 hover:text-sky-900 rounded-sm  border border-sky-200 block font-semibold px-6 py-3  mx-auto ">
                FIND YOUR BMI
              </button></Link>
             
            </div>
          </div>
        </Parallax>
      </div> 
        </div>
    );
};

export default ParallaxForBMI;