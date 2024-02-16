import { useEffect, useState } from "react";

import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Shared/Loading/Loading";
import ServiceCard from "../../../Components/ServicesComponents/Cards/ServiceCard";
import Title from "../../../Shared/Title";
import BMIServicesTitle from "./BMIServicesTitle";

const BMIServices = () => {
  const [BMI, setBMI] = useState("");
  const [text, setText] = useState("");
  const [allServices, SetAllServices] = useState([]);
  const [BMIServices, setMBIService] = useState([]);
  const axiosPublic = useAxiosPublic();

  const { data, isPending } = useQuery({
    queryKey: ["BMIservices"],
    queryFn: async () => {
      const res = await axiosPublic.get("/servicesAll");
      return res.data;
    },
  });

  useEffect(() => {
    if (data) {
      SetAllServices(data); // Set the state outside the query function
    }
  }, [data]);
  if (isPending) return <Loading></Loading>;

  //Calculate BMI and state the data
  const handleBMI = (e) => {
    e.preventDefault();

    const feet = parseFloat(e.target.feet.value);
    const inches = parseFloat(e.target.inches.value);
    const weight = parseFloat(e.target.weight.value);

    const convertToInches = feet * 12 + inches;
    const convertToMeter = convertToInches * 0.0254;

    const calculatedBMI = (weight / (convertToMeter * convertToMeter)).toFixed(
      2
    );
    setBMI(calculatedBMI);
    //BMI related services
    if (calculatedBMI < 18.5) {
      setText("underweight");
      const BMIServices = allServices.filter(
        (service) => service.bmi === "underweight"
      );
      setMBIService(BMIServices);
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
      setText("normal");
      const BMIServices = allServices.filter(
        (service) => service.bmi === "normal"
      );
      setMBIService(BMIServices);
    } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
      setText("overweight");

      const BMIServices = allServices.filter(
        (service) => service.bmi === "overweight"
      );
      setMBIService(BMIServices);
    } else if (calculatedBMI >= 30 && calculatedBMI < 34.9) {
      setText("obesity Class 1");
      const BMIServices = allServices.filter(
        (service) => service.bmi === "obesity Class 1"
      );
      setMBIService(BMIServices);
    } else if (calculatedBMI >= 35 && calculatedBMI < 39.9) {
      setText("obesity Class 2");
      const BMIServices = allServices.filter(
        (service) => service.bmi === "obesity Class 2"
      );
      setMBIService(BMIServices);
    } else {
      setText("obesity Class 3");
      const BMIServices = allServices.filter(
        (service) => service.bmi === "obesity Class 3"
      );
      setMBIService(BMIServices);
    }
  };

  return (
    <>
      <BMIServicesTitle></BMIServicesTitle>
      <div className="px-[2%] sm:px-[5%] lg:px-[8%] py-28">
        <div className="flex items-center gap-10 md:flex-row flex-col">
          <div>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
              Find Your Exact{" "}
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-sky-700 relative inline-block">
                <span className="relative  text-white"> BMI</span>
              </span>
            </h2>
            <p className="my-5">
              BMI is a useful measure of overweight and obesity. It is
              calculated from your height and weight. BMI is an estimate of body
              fat and a good gauge of your risk for diseases that can occur with
              more body fat.
            </p>
          </div>

          <img
            src="https://i.ibb.co/cgyQMMB/BMI.jpg"
            alt=""
            className="md:w-1/2 w-full"
          />
        </div>
        <div className="mt-20">
          <Title subHeading={"Fill up with your height and weight "}></Title>
        </div>
        {/* Form and data */}
        <div className="flex gap-20  md:flex-row flex-col ">
          <form action="" onSubmit={handleBMI}>
            <div className="flex md:flex-row flex-col md:gap-4 gap-2 items-center justify-center ">
              <span className="text-sky-700 font-bold text-lg">
                Your Height:
              </span>
              <div className="flex gap-4">
                <input
                  type="number"
                  className="w-1/2 border-2  border-sky-700 rounded-md p-2 "
                  placeholder="Feet"
                  name="feet"
                />
                <input
                  type="number"
                  className="w-1/2 border-2  border-sky-700 rounded-md p-2"
                  placeholder="Inches"
                  name="inches"
                />
              </div>
            </div>
            <br />
            <div className="flex md:flex-row flex-col md:gap-4 gap-2 items-center justify-center ">
              <span className="text-sky-700 font-bold text-lg">
                Your Weight:
              </span>
              <div className="flex gap-4">
                <input
                  type="text"
                  id=""
                  placeholder="Weight"
                  name="weight"
                  className=" border-2 border-sky-700  rounded-md p-2"
                />
              </div>
            </div>

            <br />
            <div>
              <input
                type="submit"
                name=""
                id=""
                placeholder="Submit"
                className="rounded-md px-4 py-2 hover:bg-white hover:border hover:border-[#448c74] hover:text-sky-200 text-white capitalize  md:text-2xl text-base  transition-all duration-150 ease-in-out block mx-auto"   style={{
                  background:
                    "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
                }}
              />
            </div>
          </form>
          <h2 className="text-2xl">
            Your BMI is: <span className="font-bold mr-3">{BMI} </span> and you
            are <span className="font-bold capitalize"> {text} </span>
          </h2>
        </div>

        {BMIServices.length > 0 && (
          <div className="flex-1 p-5 my-20">
            <Title
              heading={"Our featured services"}
              subHeading={"According to your BMI"}
            ></Title>

            <div className="py-20 px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" style={{backgroundImage:`url('https://i.ibb.co/T1sWNkf/img1.webp')`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', }} >
              {BMIServices.map((service) => (
                <ServiceCard key={service._id} service={service}></ServiceCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BMIServices;
