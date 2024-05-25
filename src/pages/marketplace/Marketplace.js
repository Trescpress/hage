import React from "react";

import HeaderInfo from "../../components/navigation/HeaderInfo";
import Navbar from "../../components/navigation/Navbar";
import MarketplaceFeatures from "./sections/MarketplaceFeatures";
import Footer from "../../components/Footer/Footer";

const Marketplace = () => {
  return (
    <>
      <HeaderInfo />
      <Navbar />
      <MarketplaceFeatures />
      <Footer />
    </>
  );
};

export default Marketplace;
