import React from "react";

import port from "../../assests/port.svg";
import portMobile from "../../assests/portMobile.svg";
import ServiceFeatures from "./sections/ServiceFeatures";
import WhyChooseUs from "./sections/WhyChooseUs";
import Marketplacesection from "../home/sections/Marketplacesection";
import BookDemo from "../../components/Bookdemo/BookDemo";

const Service3 = () => {
  return (
    <>
      <ServiceFeatures
        titleA="Powerful and efficient"
        spanTitle="rail transportation"
        subTitle="Move large volumes of cargo cost-effectively across long distances with our rail solutions."
        image={port}
        imageMobile={portMobile}
        buttonText="Coming soon"
      />
      <WhyChooseUs />
      <Marketplacesection />
      <BookDemo signUpButtonText="Sign up today" demoButtonText="Book a demo" />
    </>
  );
};

export default Service3;
