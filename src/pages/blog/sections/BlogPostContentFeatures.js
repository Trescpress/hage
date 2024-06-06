import React from "react";

import { Link } from "react-router-dom";
import backIcon from "../../../assests/backIcon.svg";
import facebook from "../../../assests/blackFacebook.svg";
import copyLink from "../../../assests/copyLink.svg";
import twitter from "../../../assests/blackTwitter.svg";
import linkedin from "../../../assests/blackLinkedIn.svg";
import blogImage from "../../../assests/blogImage.png";
import blogContentImage from "../../../assests/blogContentImage.png";

const BlogPostContentFeatures = () => {
  return (
    <div className="bg-white-100">
      <div className="px-4 md:px-16 md:py-4">
        <div className="flex flex-col items-center w-full">
          <div className="md:w-[70%]">
            <Link className="flex items-center font-light mb-6">
              <img src={backIcon} alt="back" />
              <span className="px-2">Back</span>
            </Link>
            <h1 className="font-main font-normal text-2xl md:text-5xl leading-9 md:leading-tight">
              The Rise of E-Commerce Fulfillment: How Smart Warehousing is
              Revolutionizing Delivery Speeds
            </h1>
            <div className="md:flex justify-between my-8 md:my-12">
              <div>
                <h4 className="text-sm font-semibold mb-1.5">
                  Oluwatosin Adentan
                </h4>

                <div className="flex items-center text-sm font-light">
                  <span>11 May 2024</span>

                  <div className="w-1 h-1 bg-black rounded-full mx-2"></div>

                  <span>5 min read</span>
                </div>
              </div>
              <ul className="flex md:justify-between items-center mt-6 md:mt-0">
                <Link className="p-1 bg-[#F4F4F4] rounded-full mx-2">
                  <img src={copyLink} alt="copy" />
                </Link>
                <Link className="p-1 bg-[#F4F4F4] rounded-full mx-2">
                  <img src={linkedin} alt="linkedin" />
                </Link>

                <Link className="p-1 bg-[#F4F4F4] rounded-full mx-2">
                  <img src={twitter} alt="twitter" />
                </Link>

                <Link className="p-1 bg-[#F4F4F4] rounded-full mx-2">
                  <img src={facebook} alt="facebook" />
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <img src={blogImage} alt="blog" className="w-full  md:h-[37.5rem]" />

        <div className="flex justify-center items-center my-12">
          <div className="md:w-[65%]">
            <div>
              <h1 className="text-2xl md:text-4xl font-semibold font-body my-3 md:my-6">
                Introduction
              </h1>
              <p className="font-body font-light">
                The e-commerce landscape is booming, with online shopping
                becoming the norm for many consumers. However, with faster
                delivery expectations comes a significant challenge for
                businesses: ensuring efficient and timely order fulfillment.
                This is where smart warehousing comes in – a game-changer in the
                world of logistics.
              </p>
            </div>
            <div className="my-6">
              <img src={blogContentImage} alt="blog" className="py-4" />
              <div className="flex">
                <div className=" border border-solid border-black"></div>
                <p className="px-2 font-body font-light text-sm">
                  Image caption goes here
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-body md:text-xl font-semibold mb-6">
                Smart warehousing utilizes automation, data analytics, and
                advanced technologies to optimize storage space, streamline
                picking and packing processes, and expedite order fulfillment.
              </h3>
              <p className="font-body font-light">
                Warehouse Management Systems (WMS): These software platforms
                manage inventory levels, optimize picking routes, and track
                order progress in real-time, ensuring accuracy and efficiency.
                Data Analytics: By analyzing historical data and customer
                behavior, businesses can anticipate demand fluctuations and
                optimize inventory levels accordingly.
              </p>
              <div className="flex my-8">
                <div className=" border border-solid border-black"></div>
                <p className="md:text-xl italic font-body  pl-4 md:pl-8">
                  “The Internet of Things (IoT): Sensors and connected devices
                  can track goods in real-time, providing valuable insights into
                  inventory location and movement.”
                </p>
              </div>

              <div className="my-6">
                <span className="my-2 font-light">
                  Benefits of Smart Warehousing:
                </span>

                <ul>
                  <li className="my-2 font-light flex items-baseline ">
                    <p className="w-1 h-1 bg-black rounded-full mx-2 md:mx-4"></p>
                    <p>
                      Increased Efficiency: Automated processes and data-driven
                      workflows significantly reduce fulfillment times and order
                      fulfillment errors.
                    </p>
                  </li>

                  <li className="my-2 font-light flex items-baseline ">
                    <p className="w-1 h-1 bg-black rounded-full mx-2 md:mx-4"></p>
                    <p>
                      Reduced Costs: Efficient space utilization and optimized
                      picking routes translate to lower operational costs.
                    </p>
                  </li>

                  <li className="my-2 font-light flex items-baseline ">
                    <p className="w-1 h-1 bg-black rounded-full mx-2 md:mx-4"></p>
                    <p>
                      Improved Customer Satisfaction: Faster delivery speeds and
                      improved order accuracy lead to happier customers and a
                      competitive edge.
                    </p>
                  </li>

                  <li className="my-2 font-light flex items-baseline ">
                    <p className="w-1 h-1 bg-black rounded-full mx-2 md:mx-4"></p>
                    <p>
                      Scalability: Smart warehouses can easily adapt to changing
                      business needs and growing order volumes.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h1 className="text-2xl md:text-4xl font-semibold font-body my-3 md:mt-16">
                Conclusions
              </h1>

              <p className="font-body font-light md:mt-8">
                The rise of e-commerce has pushed the boundaries of logistics.
                Smart warehousing provides a solution by leveraging technology
                and automation to ensure efficient order fulfillment and meet
                the ever-increasing demands of online shoppers. As technology
                continues to evolve, we can expect even more innovative
                solutions to emerge, further revolutionizing the world of
                e-commerce fulfillment.
              </p>
            </div>

            <div className="mt-12 md:mt-20">
              <h3>Share this post</h3>

              <ul className="flex items-center mt-6">
                <Link className="p-1 bg-[#F4F4F4] rounded-full mx-2">
                  <img src={copyLink} alt="copy" />
                </Link>
                <Link className="p-1 bg-[#F4F4F4] rounded-full mx-2">
                  <img src={linkedin} alt="linkedin" />
                </Link>

                <Link className="p-1 bg-[#F4F4F4] rounded-full mx-2">
                  <img src={twitter} alt="twitter" />
                </Link>

                <Link className="p-1 bg-[#F4F4F4] rounded-full mx-2">
                  <img src={facebook} alt="facebook" />
                </Link>
              </ul>
            </div>

            <div className="border-t border-black my-12 md:my-16"></div>

            <div>
              <div>
                <h4 className="text-sm font-semibold mb-1.5">Full Name</h4>

                <div className="flex items-center text-sm font-light">
                  <span>Job title, Company name</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostContentFeatures;
