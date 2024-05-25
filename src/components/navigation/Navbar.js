import React, { useState } from "react";

import logo from "../../assests/hage_logo_1.svg";
import dropdown from "../../assests/down-button-icon.svg";
import menu from "../../assests/menu.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMarketplaceDropdown, setShowMarketplaceDropdown] = useState(false);

  return (
    <nav>
      <div className="flex justify-between items-center px-4 py-4 md:px-16 md:py-6 w-full bg-primary-100  text-white-100 font-body">
        <Link to="/">
          <img src={logo} alt="hage_logo" className="w-16 md:w-24" />
        </Link>
        <ul className="hidden md:flex justify-between items-center text-sm font-light">
          <li className="flex justify-center items-center mr-6 cursor-pointer">
            <p className="pr-2"> Our services</p>
            <span>
              <img src={dropdown} alt="drop-down" />
            </span>
          </li>

          <li
            className="relative mr-6"
            onMouseEnter={() => setShowMarketplaceDropdown(true)}
            onMouseLeave={() => setShowMarketplaceDropdown(false)}
          >
            <div className="flex justify-center items-center cursor-pointer">
              <p className="pr-2"> Marketplace</p>
              <span>
                <img src={dropdown} alt="drop-down" />
              </span>
            </div>
            {showMarketplaceDropdown && (
              <div
                className="absolute bg-white-100 text-primary-100 top-full left-0  rounded shadow-md py-2 w-[150%]"
                onMouseEnter={() => setShowMarketplaceDropdown(true)}
                onMouseLeave={() => setShowMarketplaceDropdown(false)}
                style={{ zIndex: 10 }} // Ensure the dropdown is above other elements
              >
                <ul className="font-body font-normal">
                  <li className="p-3 hover:bg-secondary-100">
                    <Link to="/marketplace/1">Marketplace1</Link>
                  </li>
                  <li className="p-3 hover:bg-secondary-100">
                    <Link to="/marketplace/2">Marketplace2</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <Link
            to="/marketplace/2"
            className="flex justify-center items-center mr-6 cursor-pointer"
          >
            <p className="pr-2"> Company</p>
            <span>
              <img src={dropdown} alt="drop-down" />
            </span>
          </Link>
          <li className="cursor-pointer">
            <p>Blog</p>
          </li>
        </ul>
        <button className="hidden md:flex justify-center items-center px-4 py-2.5  bg-secondary-200 rounded-lg text-sm font-light">
          Sign up for Marketplace
        </button>

        <div className="md:hidden ">
          <img src={menu} alt="menu" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
