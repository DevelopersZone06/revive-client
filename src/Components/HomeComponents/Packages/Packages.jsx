
import Title from "../../../Shared/Title";
import "../../../Styles/features.css";

const Packages = () => {
  return (
    <div className="py-28 px-[2%] sm:px-[5%] lg:px-[8%]">
      <Title heading={"Our awesome Packages"} subHeading={"Join us to enhance your fitness journey."}></Title>
      <div className="">
        <div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {/* Basic Plan */}
            <div>
              <div className=" pricingTable shadow-2xl  transition-all duration-150 ease-in-out hover:mt-7 ">
                <div className="pricingTable-header">
                  <h3 className=" text-sky-700 title">Basic</h3>
                </div>
                <div className="price-value ">$19.99</div>
                <ul className=" text-black space-y-6 mb-10 text-sm md:text-base  capitalize">
                  <li>Personalized Guidance</li>
                  <li>Become a Trainer</li>
                  <li>Community Insights</li>

                  <li>Stay Informed</li>
                  <li>Stay Informed</li>
                </ul>
                <div className="pricingTable-signup ">
                  <a
                    href="#"
                    className="rounded-full px-8 py-3 hover:bg-[#144479] border border-sky-700 hover:text-sky-100 text-sky-700 font-bold capitalize md:text-2xl text-base  transition-all duration-150 ease-in-out "
                  >
                    Join now
                  </a>
           
                </div>
              </div>
            </div>
            {/* Premium Plan */}
            <div>
              <div className="pricingTable purple shadow-2xl  transition-all duration-150 ease-in-out hover:mt-7">
                <div className="pricingTable-header">
                  <h3 className="title text-sky-700">Premium</h3>
                </div>
                <div className="price-value ">$39.99</div>
                <ul className="text-black space-y-6 mb-10 text-sm md:text-base   capitalize">
                  <li>Elevated Experience</li>
                  <li>Engage and Share</li>
                  <li>Personalized Alerts</li>
                  <li>Premium Guidance</li>
                  <li>Unlock Premium Resources</li>
                </ul>
                <div className="pricingTable-signup">
                  <a
                    href="#"
                    className="rounded-full px-8 py-3 hover:bg-[#144479] border border-sky-700 hover:text-sky-100 text-sky-700 font-bold capitalize md:text-2xl text-base  transition-all duration-150 ease-in-out"
                  >
                    Join now
                  </a>
                </div>
              </div>
            </div>
            {/* Advanced Plan */}
            <div className="">
              <div className="pricingTable purple shadow-2xl  transition-all duration-150 ease-in-out hover:mt-7">
                <div className="pricingTable-header">
                  <h3 className="title text-sky-700">Advanced</h3>
                </div>
                <div className="price-value">$99.99</div>
                <ul className="text-black space-y-6 mb-10 text-sm md:text-base   capitalize">
                  <li>VIP Assistance</li>
                  <li>Exclusive Trainer Access</li>
                  <li>Comprehensive Resources</li>
                  <li>Tailored Fitness Goals</li>
                  <li>Elite Learning Experience</li>
                </ul>
                <div className="pricingTable-signup">
                  <a
                    href="#"
                    className="rounded-full px-8 py-3 hover:bg-[#144479] border border-sky-700 hover:text-sky-100 text-sky-700 font-bold capitalize md:text-2xl text-base  transition-all duration-150 ease-in-out "
                  >
                    Join now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
