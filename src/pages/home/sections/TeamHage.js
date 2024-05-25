import React from "react";

import image1 from "../../../assests/ola-omotosho.svg";
import image2 from "../../../assests/ola-omotosho2.svg";
import image3 from "../../../assests/mojisola-omotosho.svg";
import mail from "../../../assests/mail.svg";
import linkdein from "../../../assests/LinkedInfilled.svg";

const TeamHage = () => {
  return (
    <div className="bg-white-100 py-8 md:py-16">
      <div className="px-4 md:px-16">
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-base font-body font-normal mb-4">Meet</h4>
          <h1 className=" font-main font-normal text-2xl md:text-5xl leading-9 md:leading-tight">
            Our team
          </h1>
        </div>

        <div className="mt-8 md:mt-16 md:flex justify-center items-center">
          <div className="flex flex-col items-center justify-center my-6 md:my-0   px-8  md:w-[20%] md:mx-11">
            <div className=" ">
              <img src={image1} alt="Ola Omotosho" className="w-full" />
              <div className="mt-3 text-center">
                <h4 className="text-base font-body font-semibold">
                  Ola Omotosho
                </h4>
                <p className="text-sm font-main font-light leading-5 mt-2">
                  CEO / Founder
                </p>
              </div>
            </div>
            <div className="my-1 md:my-3">
              <p className="hidden md:flex text-center text-xs font-body leading-5">
                A visionary with a mechanical engineering background and over 15
                years of experience in the family trucking business and the
                automotive sector
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
              <img src={image2} alt="Ola Omotosho" className="w-full" />
              <div className="mt-3 text-center">
                <h4 className="text-base font-body font-semibold">
                  Ola Omotosho
                </h4>
                <p className="text-sm font-main font-light leading-5 mt-2">
                  CIO / Co-founder
                </p>
              </div>
            </div>
            <div className="my-1 md:my-3">
              <p className="hidden md:flex text-center text-xs font-body leading-5">
                An enterprise architect who excels in Digital Transformation and
                Consulting by driving growth in FMCG and logistics through
                scalable architectures.
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

          <div className="flex flex-col items-center justify-center my-6 md:my-0  px-8  md:w-[20%] md:mx-11">
            <div className=" ">
              <img src={image3} alt="Omojisola Omotosho" className="w-full" />
              <div className="mt-3 text-center">
                <h4 className="text-base font-body font-semibold">
                  Mojisola Omotosho
                </h4>
                <p className="text-sm font-main font-light leading-5 mt-2">
                  CIO/ Co-founder
                </p>
              </div>
            </div>
            <div className="my-1 md:my-3">
              <p className="hidden md:flex text-center text-xs font-body leading-5">
                A finance professional who seamlessly integrates finance
                expertise with logistics proficiency, drawing from a decade in
                the family trucking business and a successful banking tenure.
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

        {/* <div className="mt-20 grid gap-y-8  md:grid-cols-4  md:gap-x-28">
          <div className="col-start-2">
            <div className="flex flex-col justify-center items-center">
              <div className=" ">
                <img src={image1} alt="Babatunde Abimbola" className="w-full" />
                <div className="mt-3 text-center">
                  <h4 className="text-base font-body font-semibold">
                    Ola Omotosho
                  </h4>
                  <p className="text-sm font-main font-light leading-5 mt-2">
                    CEO / Founder
                  </p>
                </div>
              </div>
              <div className="my-3">
                <p className="text-center text-sm font-body leading-5">
                  A visionary with a mechanical engineering background and over
                  15 years of experience in the family trucking business and the
                  automotive sector
                </p>
              </div>

              <div className="flex justify-center items-center ">
                <button>
                  <img src={mail} className="px-2" alt="mail-box" />
                </button>
                <button>
                  <img src={linkdein} className="px-2" alt="linkedin" />
                </button>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col justify-center items-center">
              <div className=" ">
                <img src={image2} alt="Abiodun Ogunmodede" className="w-full" />
                <div className="mt-3 text-center">
                  <h4 className="text-base font-body font-semibold">
                    Ola Omotosho
                  </h4>
                  <p className="text-sm font-main font-light leading-5 mt-2">
                    CIO / Co-founder
                  </p>
                </div>
              </div>
              <div className="my-3">
                <p className="text-center text-sm font-body leading-5">
                  An enterprise architect who excels in Digital Transformation
                  and Consulting by driving growth in FMCG and logistics through
                  scalable architectures.
                </p>
              </div>

              <div className="flex justify-center items-center">
                <button>
                  <img src={mail} className="px-2" alt="mail-box" />
                </button>
                <button>
                  <img src={linkdein} className="px-2" alt="linkedin" />
                </button>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col justify-center items-center">
              <div className=" ">
                <img src={image2} alt="Abiodun Ogunmodede" className="w-full" />
                <div className="mt-3 text-center">
                  <h4 className="text-base font-body font-semibold">
                    Mojisola Omotosho
                  </h4>
                  <p className="text-sm font-main font-light leading-5 mt-2">
                    COO / Co-founder
                  </p>
                </div>
              </div>
              <div className="my-3">
                <p className="text-center text-sm font-body leading-5">
                  A finance professional who seamlessly integrates finance
                  expertise with logistics proficiency, drawing from a decade in
                  the family trucking business and a successful banking tenure.
                </p>
              </div>

              <div className="flex justify-center items-center">
                <button>
                  <img src={mail} className="px-2" alt="mail-box" />
                </button>
                <button>
                  <img src={linkdein} className="px-2" alt="linkedin" />
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TeamHage;
