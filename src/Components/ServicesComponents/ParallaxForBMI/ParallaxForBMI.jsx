import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";


const ParallaxForBMI = () => {
    return (
        <div>
             <div className="-my-16 rounded-lg">
        <Parallax
          blur={4}
          bgImage={
            "https://i.ibb.co/WvnTkMJ/top-view-sneakers-with-copy-space-weights.jpg"
          }
          bgImageAlt="the cat"
          strength={300}
          className="hero w-full rounded-lg"
        >
          {/* Parallax added  */}
          <div className="hero-overlay bg-opacity-60 bg-[#448c74] "></div>
          <div className="text-center p-10 w-full">
            <div className="max-w-md secondary-color ">
              <div>
                <h1 className="mb-5 text-5xl font-bold ">Our new features</h1>
                <p className="mb-5 text-black">
                  Get services by BMI (Body Mass Index)
                </p>
              </div>
              <Link to={"/BMIServices"}>
              <button className="btn secondary-bg  text-white  hover:text-[#448c74] ">
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