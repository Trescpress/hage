import React, { useState } from "react";

import logo from "../../assests/hage_logo_1.svg";
import dropdown from "../../assests/down-button-icon.svg";
import menu from "../../assests/menu.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMarketplaceDropdown, setShowMarketplaceDropdown] = useState(false);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);

  return (
    <nav>
      <div className="flex justify-between items-center px-4 py-4 md:px-16 md:py-6 w-full bg-primary-100  text-white-100 font-body">
        <Link to="/">
          <img src={logo} alt="hage_logo" className="w-16 md:w-24" />
        </Link>

        <ul className="hidden md:flex justify-between items-center text-sm font-light">
          <li
            className="relative mr-6"
            onMouseEnter={() => setShowServiceDropdown(true)}
            onMouseLeave={() => setShowServiceDropdown(false)}
          >
            <div className="flex justify-center items-center cursor-pointer">
              <p className="pr-2">Our Services</p>
              <span>
                <img
                  src={dropdown}
                  alt="drop-down"
                  className={`h-4 w-4 transition-transform ${
                    showServiceDropdown ? "rotate-180" : ""
                  }`}
                />
              </span>
            </div>
            {showServiceDropdown && (
              <div
                className="absolute bg-white-100 text-primary-100 top-full left-0 rounded shadow-md py-2 w-[230%]"
                onMouseEnter={() => setShowServiceDropdown(true)}
                onMouseLeave={() => setShowServiceDropdown(false)}
                style={{ zIndex: 10 }} // Ensure the dropdown is above other elements
              >
                <div className="font-body font-normal text-xs">
                  <Link
                    to="/service/1"
                    className="block p-3 hover:bg-secondary-100"
                  >
                    <span>Inland Services</span>
                  </Link>
                  <Link
                    to="/service/2"
                    className="block p-3 hover:bg-secondary-100"
                  >
                    <div className="flex justify-between items-center">
                      <span>Shipping/air freight</span>
                      <button className="text-[0.5rem] border border-[#64AB80] text-[#64AB80] rounded-full px-1">
                        Coming soon
                      </button>
                    </div>
                  </Link>
                  <Link
                    to="/service/3"
                    className="block p-3 hover:bg-secondary-100"
                  >
                    <div className="flex justify-between items-center">
                      <span>Rail cargo transport</span>
                      <button className="text-[0.5rem] border border-[#64AB80] text-[#64AB80] rounded-full px-1">
                        Coming soon
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </li>

          <li
            className="relative mr-6"
            onMouseEnter={() => setShowMarketplaceDropdown(true)}
            onMouseLeave={() => setShowMarketplaceDropdown(false)}
          >
            <div className="flex justify-center items-center cursor-pointer">
              <p className="pr-2">Marketplace</p>
              <span>
                <img
                  src={dropdown}
                  alt="drop-down"
                  className={`h-4 w-4 transition-transform ${
                    showMarketplaceDropdown ? "rotate-180" : ""
                  }`}
                />
              </span>
            </div>
            {showMarketplaceDropdown && (
              <div
                className="absolute bg-white-100 text-primary-100 top-full left-0 rounded shadow-md py-2 w-[230%]"
                onMouseEnter={() => setShowMarketplaceDropdown(true)}
                onMouseLeave={() => setShowMarketplaceDropdown(false)}
                style={{ zIndex: 10 }} // Ensure the dropdown is above other elements
              >
                <div className="font-body font-normal text-xs">
                  <Link
                    to="/marketplace/1"
                    className="block p-3 hover:bg-secondary-100"
                  >
                    <span>For manufacturers</span>
                  </Link>
                  <Link
                    to="/marketplace/2"
                    className="block p-3 hover:bg-secondary-100"
                  >
                    <span>For transporters</span>
                  </Link>
                  <Link
                    to="/marketplace/2"
                    className="block p-3 hover:bg-secondary-100"
                  >
                    <span>For distributors</span>
                  </Link>
                </div>
              </div>
            )}
          </li>

          <li
            className="relative mr-6"
            onMouseEnter={() => setShowCompanyDropdown(true)}
            onMouseLeave={() => setShowCompanyDropdown(false)}
          >
            <div className="flex justify-center items-center cursor-pointer">
              <p className="pr-2">Company</p>
              <span>
                <img
                  src={dropdown}
                  alt="drop-down"
                  className={`h-4 w-4 transition-transform ${
                    showCompanyDropdown ? "rotate-180" : ""
                  }`}
                />
              </span>
            </div>
            {showCompanyDropdown && (
              <div
                className="absolute bg-white-100 text-primary-100 top-full left-0 rounded shadow-md py-2 w-[230%]"
                onMouseEnter={() => setShowCompanyDropdown(true)}
                onMouseLeave={() => setShowCompanyDropdown(false)}
                style={{ zIndex: 10 }} // Ensure the dropdown is above other elements
              >
                <div className="font-body font-normal text-xs">
                  <Link
                    to="/about"
                    className="block p-3 hover:bg-secondary-100"
                  >
                    <span>About us</span>
                  </Link>
                  <Link
                    to="/vision"
                    className="block p-3 hover:bg-secondary-100"
                  >
                    <span>Our team & advisory board</span>
                  </Link>
                  <Link
                    to="/goals"
                    className="block p-3 hover:bg-secondary-100"
                  >
                    <span>FAQ</span>
                  </Link>
                  <Link
                    to="/teams"
                    className="block p-3 hover:bg-secondary-100"
                  >
                    <div className="flex justify-between items-center">
                      <span>Hiring</span>
                      <button className="text-[0.5rem] border border-[#64AB80] text-[#64AB80] rounded-full px-1">
                        Coming soon
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </li>

          <li>
            <Link to="/blogpostcontent" className="cursor-pointer">
              <p>Blog</p>
            </Link>
          </li>
        </ul>

        {/* <ul className="hidden md:flex justify-between items-center text-sm font-light">
          <li
            className="relative mr-6"
            onMouseEnter={() => setShowServiceDropdown(true)}
            onMouseLeave={() => setShowServiceDropdown(false)}
          >
            <div className="flex justify-center items-center cursor-pointer">
              <p className="pr-2"> Our service</p>
              <span>
                <img src={dropdown} alt="drop-down" />
              </span>
            </div>
            {showServiceDropdown && (
              <div
                className="absolute bg-white-100 text-primary-100 top-full left-0  rounded shadow-md py-2 w-[150%]"
                onMouseEnter={() => setShowServiceDropdown(true)}
                onMouseLeave={() => setShowServiceDropdown(false)}
                style={{ zIndex: 10 }} // Ensure the dropdown is above other elements
              >
                <ul className="font-body font-normal">
                  <li className="p-3 hover:bg-secondary-100">
                    <Link to="/service/1">Service1</Link>
                  </li>
                  <li className="p-3 hover:bg-secondary-100">
                    <Link to="/service/2">Service2</Link>
                  </li>

                  <li className="p-3 hover:bg-secondary-100">
                    <Link to="/service/3">Service3</Link>
                  </li>
                </ul>
              </div>
            )}
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
            to="/company"
            className="flex justify-center items-center mr-6 cursor-pointer"
          >
            <p className="pr-2"> Company</p>
            <span>
              <img src={dropdown} alt="drop-down" />
            </span>
          </Link>
          <Link to="/blogpostcontent" className="cursor-pointer">
            <p>Blog</p>
          </Link>
        </ul> */}
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
