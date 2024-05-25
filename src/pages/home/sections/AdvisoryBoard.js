import React from "react";

import image1 from "../../../assests/babatundeabimbola.svg";
import image2 from "../../../assests/abiodunogunmodede.svg";
import mail from "../../../assests/mail.svg";
import linkdein from "../../../assests/LinkedInfilled.svg";

const AdvisoryBoard = () => {
  return (
    <div className="bg-white-100 py-8 md:py-16">
      <div className="px-4 md:px-16">
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-base font-body font-normal mb-4">Meet</h4>
          <h1 className=" font-main font-normal text-2xl md:text-5xl leading-9 md:leading-tight">
            Our advisory board
          </h1>
        </div>

        <div className="mt-8 md:mt-16 md:flex justify-center items-center">
          <div className="flex flex-col items-center justify-center my-6 md:my-0   px-8  md:w-[20%] md:mx-11">
            <div className=" ">
              <img src={image1} alt="Babatunde Abimbola" className="w-full" />
              <div className="mt-3 text-center">
                <h4 className="text-base font-body font-semibold">
                  Babatunde Abimbola
                </h4>
                <p className="text-sm font-main font-light leading-5 mt-2">
                  Risk & Compliance Advisor
                </p>
              </div>
            </div>
            <div className="my-1 md:my-3">
              <p className="hidden md:flex text-center text-xs font-body leading-5">
                Experienced Chartered Accountant with a robust auditing
                background across financial, manufacturing, logistics, and oil &
                gas sectors. He offers invaluable expertise in mitigating risks
                and optimising insurance strategies to safeguard business
                interests and ensure operational resilience.
              </p>
            </div>

            <div className=" ">
              <button>
                <img src={mail} className="px-2" alt="mail-box" />
              </button>
              <button>
                <img src={linkdein} className="px-2" alt="linkedin" />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center my-6 md:my-0 px-8  md:w-[20%] md:mx-11">
            <div className=" ">
              <img src={image2} alt="Abiodun Ogunmodede" className="w-full" />
              <div className="mt-3 text-center">
                <h4 className="text-base font-body font-semibold">
                  Abiodun Ogunmodede
                </h4>
                <p className="text-sm font-main font-light leading-5 mt-2">
                  Strategic Planning & Compliance Advisor
                </p>
              </div>
            </div>
            <div className="my-1 md:my-3">
              <p className="hidden md:flex text-center text-xs font-body leading-5">
                Over 20 years' experience in banking and regulatory compliance,
                as well as expertise spanning business administration, labour
                relations, business analytics, and risk management.
              </p>
            </div>

            <div className=" ">
              <button>
                <img src={mail} className="px-2" alt="mail-box" />
              </button>
              <button>
                <img src={linkdein} className="px-2" alt="linkedin" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryBoard;
