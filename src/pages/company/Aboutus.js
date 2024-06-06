import React from "react";

import AboutusFeatures from "./sections/AboutusFeatures";
import BookDemo from "../../components/Bookdemo/BookDemo";
import AdvisoryBoard from "../home/sections/AdvisoryBoard";
import TeamHage from "../home/sections/TeamHage";
import Faqs from "../../components/FAQs/Faqs";
import SuccessCount from "../home/sections/SuccessCount";

const Aboutus = () => {
  return (
    <div>
      <AboutusFeatures />
      <BookDemo demoButtonText="Check it out" />
      <AdvisoryBoard />
      <TeamHage />
      <BookDemo signUpButtonText="Sign up today" demoButtonText="Book a demo" />
      <Faqs />
      <SuccessCount />
    </div>
  );
};

export default Aboutus;
