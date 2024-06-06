import React from "react";

const Faqs = () => {
  return (
    <div className="bg-white-100 py-8 md:py-28">
      <div className="px-4 md:px-16">
        <div className="flex justify-center items-center pb-8 md:pb-16">
          <h1 className=" font-main font-normal text-2xl md:text-5xl leading-9 md:leading-tight">
            FAQs
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-x-12 md:gap-y-20 gap-12">
          <div className="grid grid-row-4 gap-4 text-primary-300">
            <div>
              <h3 className="font-body text-base font-semibold text-center leading-6 ">
                What types of goods can I ship using Inland Services?
              </h3>
            </div>

            <div>
              <p className=" font-body font-light text-sm md:text-base leading-7">
                Our Inland Services can handle a wide range of goods for
                domestic transportation. Some include:  Machinery, building
                materials, furniture, appliances, electronics, clothing,
                packaged food, beverages.
              </p>
            </div>
          </div>

          <div className="grid grid-row-4 gap-4 text-primary-300">
            <div>
              <h3 className="font-body text-base font-semibold text-center leading-6 ">
                How do I get a quote for my shipment?
              </h3>
            </div>

            <div>
              <p className=" font-body font-light text-sm md:text-base leading-7">
                To get a quick and accurate quote for your Inland shipment, we
                recommend signing up for a free account on our manufacturer
                platform.
              </p>
            </div>
          </div>

          <div className="grid grid-row-4 gap-4 text-primary-300">
            <div>
              <h3 className="font-body text-base font-semibold text-center leading-6 ">
                What is the estimated delivery time for my shipment?
              </h3>
            </div>

            <div>
              <p className=" font-body font-light text-sm md:text-base leading-7">
                The estimated delivery time for your Inland shipment depends on
                several factors, like origin and destination, type of service,
                shipment size and weight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
