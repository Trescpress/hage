import React from "react";

import logo from "../../assests/hage_logo_1.svg";
import facebook from "../../assests/Facebook.svg";
import twitter from "../../assests/Twitter.svg";
import instagram from "../../assests/Instagram.svg";
import linkedin from "../../assests/LinkedIn.svg";

const Footer = () => {
  return (
    <div className="bg-primary-300 py-8 md:py-16 font-body">
      <div className="px-4 md:px-16">
        <div className="text-white-100 grid md:grid-cols-5 gap-y-10 md:gap-x-10 ">
          <div>
            <img src={logo} alt="hage_logo" className="w-16 md:w-24" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-base font-body">Our services</h2>

            <ul className="mt-2.5 md:mt-6 text-sm font-body">
              <li className="py-2">Inland services</li>

              <li className="py-2 flex justify-between items-center">
                Shipping/air freight
                <button className="px-1 border text-secondary-200 border-secondary-200 rounded-xl text-[0.625rem] md:text-[0.5rem]">
                  Coming soon
                </button>
              </li>

              <li className="py-2 flex justify-between items-center">
                Railway cargo services
                <button className="px-1 border text-secondary-200 border-secondary-200 rounded-xl text-[0.625rem] md:text-[0.5rem]">
                  Coming soon
                </button>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h2 className="text-base font-body">Marketplace</h2>

            <ul className="mt-2.5 md:mt-6 text-sm font-body">
              <li className="py-2">For manufacturers</li>

              <li className="py-2">For transporters</li>

              <li className="py-2">For distributors</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h2 className="text-base font-body">Company</h2>

            <ul className="mt-2.5 md:mt-6 text-sm font-body">
              <li className="py-2">About us</li>

              <li className="py-2">Our team</li>

              <li className="py-2">Our advisory board</li>

              <li className="py-2">FAQ</li>

              <li className="py-2">Hiring</li>
            </ul>
          </div>

          <div>
            <div>
              <ul className="flex justify-between items-center pr-10 md:pr-0">
                <li>
                  <img src={facebook} alt="facebook" />
                </li>

                <li>
                  <img src={instagram} alt="instagram" />
                </li>

                <li>
                  <img src={twitter} alt="twitter" />
                </li>

                <li>
                  <img src={linkedin} alt="linkedIn" />
                </li>
              </ul>
            </div>

            <div className="mt-6 md:mt-6 text-sm font-body">
              <div className="py-2">
                <p>Palm Avenue, Mushin, 102215, Lagos</p>
              </div>
              <div className="py-2 italic">
                <p>contact@hage.com</p>
              </div>
              <div className="py-2">
                <p>+234 0000000000</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white-100 mt-10 md:mt-28  border-t border-white-100">
          <div className="pt-6 md:pt-8 md:flex justify-between items-center">
            <div className="text-sm pb-4 md:pb-0">
              © 2024 Hage. All rights reserved.
            </div>

            <div className=" pt-3">
              <ul className="flex md:justify-between items-center text-xs md:text-sm">
                <li className="underline">Privacy Policy</li>

                <li className="px-4 underline">Terms of Service</li>

                <li className="underline">Cookies Settings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
