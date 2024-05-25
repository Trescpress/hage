import React from "react";
import HeaderInfo from "../../components/navigation/HeaderInfo";
import Navbar from "../../components/navigation/Navbar";

import Hero from "./sections/Hero";
import WhyChooseHage from "./sections/WhyChooseHage";
import SuccessCount from "./sections/SuccessCount";
import Marketplacesection from "./sections/Marketplacesection";
import Pricing from "./sections/Pricing";
import AdvisoryBoard from "./sections/AdvisoryBoard";
import TeamHage from "./sections/TeamHage";
import Hiring from "./sections/Hiring";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
  return (
    <>
      <header className="z-50 fixed w-full">
        <HeaderInfo />
        <Navbar />
      </header>

      <Hero />
      <WhyChooseHage />
      <SuccessCount />
      <Marketplacesection />
      <Pricing />
      <AdvisoryBoard />
      <TeamHage />
      <Hiring />
      <Footer />
    </>
  );
};

export default Homepage;
