import React from "react";

import image1 from "../../../assests/ola-omotosho.svg";
import image2 from "../../../assests/ola-omotosho2.svg";
import image3 from "../../../assests/mojisola-omotosho.svg";
import mail from "../../../assests/mail.svg";
import linkdein from "../../../assests/LinkedInfilled.svg";

// Define team member data
const teamMembers = [
  {
    name: "Ola Omotosho",
    position: "CEO / Founder",
    description:
      "A visionary with a mechanical engineering background and over 15 years of experience in the family trucking business and the automotive sector",
    email: "oomotosho@naijawaysglobal.com",
    linkedin: "https://www.linkedin.com/in/olamilekan-omotosho-2b5085b2/",
    image: image1,
  },
  {
    name: "Oladipupo Sulaiman",
    position: "CIO / Co-founder",
    description:
      "An enterprise architect who excels in Digital Transformation and Consulting by driving growth in FMCG and logistics through scalable architectures.",
    email: "tech@naijawaysglobal.com",
    linkedin: "https://www.linkedin.com/in/oladipupo-sulaiman-397395119/",
    image: image2,
  },
  {
    name: "Mojisola Omotosho",
    position: "CIO/ Co-founder",
    description:
      "A finance professional who seamlessly integrates finance expertise with logistics proficiency, drawing from a decade in the family trucking business and a successful banking tenure.",
    email: "momotosho@naijawaysglobal.com",
    linkedin: "linkedin.com/in/kofi-achampong-jd-mba-candidate-a144b4153",
    image: image3,
  },
];

const TeamHage = () => {
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleLinkedInClick = (linkedin) => {
    window.open(linkedin, "_blank");
  };

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
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center my-6 md:my-0   px-8  md:w-[20%] md:mx-11"
            >
              <div>
                <img src={member.image} alt={member.name} className="w-full" />
                <div className="mt-3 text-center">
                  <h4 className="text-base font-body font-semibold">
                    {member.name}
                  </h4>
                  <p className="text-sm font-main font-light leading-5 mt-2">
                    {member.position}
                  </p>
                </div>
              </div>
              <div className="my-1 md:my-3">
                <p className="hidden md:flex text-center text-xs font-body leading-5">
                  {member.description}
                </p>
              </div>
              <div className="flex">
                <button onClick={() => handleEmailClick(member.email)}>
                  <img src={mail} className="px-2" alt="mail-box" />
                </button>
                <button onClick={() => handleLinkedInClick(member.linkedin)}>
                  <img src={linkdein} className="px-2" alt="linkedin" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamHage;
