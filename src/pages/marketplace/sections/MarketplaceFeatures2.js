import React from "react";

import marketplace2image1 from "../../../assests/marketplace2image1.svg";
import marketplace2image2 from "../../../assests/marketplace2image2.svg";
import marketplace3image3 from "../../../assests/marketplace3image3.svg";

import checkgold from "../../../assests/check-gold.svg";

const MarketplaceFeatures2 = () => {
  return (
    <div className="bg-white-100 md:py-12">
      <div className="px-4 md:px-24">
        <div className="grid  md:grid-cols-2 ">
          <div className=" flex justify-center items-center order-2 md:order-1 mt-8 md:mt-0 mb-12 md:mb-0">
            <div>
              <h1 className="  md:px-0 pb-4  text-[2rem] md:text-[3.8rem]  font-normal font-main text-left text-primary-200  md:leading-normal">
                Transform your shipments with Hage's{" "}
                <span className="text-secondary-100">
                  manufacturers platform
                </span>
              </h1>

              <p className="w-[90%] md:w-[80%] text-base text-primary-100 leading-7 pb-4 md:pb-0 font-sub">
                With just a few clicks, you can manage all your local freight
                operations with the help of our dashboard.
              </p>

              <div className="flex items-center mt-8 md:w-[80%]">
                <button className="py-3 bg-secondary-200 text-white-100 w-full rounded-md">
                  Sign up
                </button>
              </div>
            </div>
          </div>

          <img
            src={marketplace2image1}
            alt="HagePhones"
            className="w-[100%] order-1 md:order-2"
          />
        </div>

        <div className=" py-8 md:py-16">
          <div className="flex justify-center items-center">
            <h1 className=" font-main font-normal text-2xl md:text-5xl leading-9 md:leading-tight">
              Top features
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <img src={marketplace2image2} alt="marketplaceimage1" />
            </div>
            <div className=" flex  items-center">
              <div>
                <h4 className=" font-body font-semibold text-sm md:text-base my-2">
                  For manufacturers
                </h4>
                <p className=" text-sm md:text-base font-body font-light leading-7">
                  Our desktop application simplifies the process of finding and
                  managing transporters for your shipments. Search for qualified
                  transporters based on their experience, ratings, and
                  availability. Get quotes, compare options, and book shipments
                  directly through the platform.
                </p>

                <ul className="text-sm md:text-base font-light my-2 md:my-8">
                  <li className="flex  items-center py-2">
                    <span>
                      <img src={checkgold} alt="check-gold" />
                    </span>{" "}
                    <p className="px-4">
                      Advanced transporter search with filters
                    </p>
                  </li>

                  <li className="flex  items-center py-2">
                    <span>
                      <img src={checkgold} alt="check-gold" />
                    </span>{" "}
                    <p className="px-4">Secure quote generation tool</p>
                  </li>

                  <li className="flex  items-center py-2">
                    <span>
                      <img src={checkgold} alt="check-gold" />
                    </span>{" "}
                    <p className="px-4">
                      Online booking and shipment management
                    </p>
                  </li>
                </ul>

                <div className="flex items-center mt-8">
                  <button className="rounded-md border border-primary-100 text-primary-100 text-center py-3 w-full md:w-[50%] ">
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 py-8 md:py-10 ">
            <div className=" md:order-2">
              <img src={marketplace3image3} alt="marketplaceimage2" />
            </div>
            <div className=" flex  items-center">
              <div>
                <h4 className=" font-body font-semibold text-sm md:text-base my-2">
                  For manufacturers
                </h4>
                <p className=" text-sm md:text-base font-body font-light leading-7">
                  Track your shipments in real-time with our comprehensive
                  tracking system. Monitor the location of your goods and
                  estimated delivery times. Stay informed of any delays or
                  unforeseen circumstances.
                </p>

                <ul className="text-sm md:text-base font-light my-2 md:my-8">
                  <li className="flex  items-center py-2">
                    <span>
                      <img src={checkgold} alt="check-gold" />
                    </span>{" "}
                    <p className="px-4">Real-time shipment tracking on a map</p>
                  </li>

                  <li className="flex  items-center py-2">
                    <span>
                      <img src={checkgold} alt="check-gold" />
                    </span>{" "}
                    <p className="px-4">Estimated delivery time updates</p>
                  </li>

                  <li className="flex  items-center py-2">
                    <span>
                      <img src={checkgold} alt="check-gold" />
                    </span>{" "}
                    <p className="px-4">Automated shipment notifications</p>
                  </li>
                </ul>

                <div className="flex items-center mt-8">
                  <button className="rounded-md border border-primary-100 text-primary-100 text-center py-3 w-full md:w-[50%] ">
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" py-8 md:py-28 bg-[#F8FCF9]">
          <div className="grid md:grid-cols-2 gap-y-6 md:gap-y-0  ">
            <div className="flex flex-col justify-center text-primary-300">
              <h1 className="text-2xl md:text-4xl font-normal font-main leading-8 pb-3 md:pb-6 ">
                Check out our marketplace today!
              </h1>
              <p className=" text-sm md:text-base leading-6 md:leading-8 font-body font-normal md:pr-24 ">
                Our multi-faceted products meet the needs of manufacturers,
                transporters and distributors
              </p>
            </div>
            <div className="md:flex  justify-center items-center">
              <button className="my-2 md:my-0 md:mx-2 py-3 md:py-4 px-auto w-full rounded-lg text-base border border-secondary-200 text-secondary-200">
                Sign up today
              </button>
              <button className="my-2 md:my-0 md:mx-2 py-3 md:py-4 px-auto w-full rounded-lg text-base text-white-100 bg-secondary-200">
                Book a demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceFeatures2;
