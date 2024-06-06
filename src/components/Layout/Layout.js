import React from "react";
import HeaderInfo from "../navigation/HeaderInfo";
import Navbar from "../navigation/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="">
      <header className="z-50 fixed w-full">
        <HeaderInfo />
        <Navbar />
      </header>
      <main className="min-h-[75vh] pt-32 md:pt-48">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
