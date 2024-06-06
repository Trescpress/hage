import React from "react";

import busImage from "../../assests/bus-Image.svg";
import busImageMobile from "../../assests/bus-Imagemobile.svg";
import ServiceFeatures from "./sections/ServiceFeatures";
import WhyChooseUs from "./sections/WhyChooseUs";
import Marketplacesection from "../home/sections/Marketplacesection";
import Faqs from "../../components/FAQs/Faqs";
import BookDemo from "../../components/Bookdemo/BookDemo";

const Service1 = () => {
  return (
    <div>
      <ServiceFeatures
        titleA="Efficient"
        titleB="made easy"
        spanTitle="domestic transportation"
        subTitle="Connect with reliable carriers for your road freight needs across the country."
        image={busImage}
        imageMobile={busImageMobile}
      />
      <WhyChooseUs />
      <Marketplacesection />
      <Faqs />
      <BookDemo signUpButtonText="Sign up today" demoButtonText="Book a demo" />
    </div>
  );
};

export default Service1;
