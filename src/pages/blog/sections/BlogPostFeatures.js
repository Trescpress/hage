import React from "react";

import blogImage from "../../../assests/blogImage.png";
import noBlogImage from "../../../assests/noBlogImage.png";
import { Link } from "react-router-dom";

const BlogPostFeatures = () => {
  return (
    <div className="bg-white-100">
      <div className="px-4 md:px-16 md:py-4">
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-base font-body font-normal mb-4">Blog</h4>
          <h1 className=" md:w-1/2 text-center font-main font-normal text-2xl md:text-5xl leading-9 md:leading-tight">
            Explore industry insights and practical advice
          </h1>
        </div>

        <div className="my-12 md:my-20 grid md:grid-cols-3 gap-x-8 gap-y-16">
          <Link to="/blogcontent">
            <div className=" rounded-t-sm overflow-hidden mb-6">
              <img src={blogImage} alt="blog" />
            </div>

            <div className="mb-6">
              <h1 className="mb-2 text-xl font-bold font-main">
                The Rise of E-Commerce Fulfillment: How Smart Warehousing is
                Revolutionizing Delivery Speeds
              </h1>

              <p className="font-light font-body">
                The e-commerce landscape is booming, with online shopping
                becoming the norm for many consumers.
              </p>
            </div>

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
          </Link>

          <div>
            <div className=" rounded-t-sm overflow-hidden mb-6">
              <img src={noBlogImage} alt="blog" />
            </div>

            <div className="mb-6">
              <h1 className="mb-2 text-xl font-bold font-main">
                Blog title heading will go here
              </h1>

              <p className="font-light font-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-1">Full name</h4>

              <div className="flex items-center text-sm font-light">
                <span>11 Jan 2022</span>

                <div className="w-1 h-1 bg-black rounded-full mx-2"></div>

                <span>5 min read</span>
              </div>
            </div>
          </div>

          <div>
            <div className=" rounded-t-sm overflow-hidden mb-6">
              <img src={noBlogImage} alt="blog" />
            </div>

            <div className="mb-6">
              <h1 className="mb-2 text-xl font-bold font-main">
                Blog title heading will go here
              </h1>

              <p className="font-light font-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-1">Full name</h4>

              <div className="flex items-center text-sm font-light">
                <span>11 Jan 2022</span>

                <div className="w-1 h-1 bg-black rounded-full mx-2"></div>

                <span>5 min read</span>
              </div>
            </div>
          </div>

          <div>
            <div className=" rounded-t-sm overflow-hidden mb-6">
              <img src={noBlogImage} alt="blog" />
            </div>

            <div className="mb-6">
              <h1 className="mb-2 text-xl font-bold font-main">
                Blog title heading will go here
              </h1>

              <p className="font-light font-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-1">Full name</h4>

              <div className="flex items-center text-sm font-light">
                <span>11 Jan 2022</span>

                <div className="w-1 h-1 bg-black rounded-full mx-2"></div>

                <span>5 min read</span>
              </div>
            </div>
          </div>

          <div>
            <div className=" rounded-t-sm overflow-hidden mb-6">
              <img src={noBlogImage} alt="blog" />
            </div>

            <div className="mb-6">
              <h1 className="mb-2 text-xl font-bold font-main">
                Blog title heading will go here
              </h1>

              <p className="font-light font-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-1">Full name</h4>

              <div className="flex items-center text-sm font-light">
                <span>11 Jan 2022</span>

                <div className="w-1 h-1 bg-black rounded-full mx-2"></div>

                <span>5 min read</span>
              </div>
            </div>
          </div>

          <div>
            <div className=" rounded-t-sm overflow-hidden mb-6">
              <img src={noBlogImage} alt="blog" />
            </div>

            <div className="mb-6">
              <h1 className="mb-2 text-xl font-bold font-main">
                Blog title heading will go here
              </h1>

              <p className="font-light font-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-1">Full name</h4>

              <div className="flex items-center text-sm font-light">
                <span>11 Jan 2022</span>

                <div className="w-1 h-1 bg-black rounded-full mx-2"></div>

                <span>5 min read</span>
              </div>
            </div>
          </div>

          <div>
            <div className=" rounded-t-sm overflow-hidden mb-6">
              <img src={noBlogImage} alt="blog" />
            </div>

            <div className="mb-6">
              <h1 className="mb-2 text-xl font-bold font-main">
                Blog title heading will go here
              </h1>

              <p className="font-light font-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-1">Full name</h4>

              <div className="flex items-center text-sm font-light">
                <span>11 Jan 2022</span>

                <div className="w-1 h-1 bg-black rounded-full mx-2"></div>

                <span>5 min read</span>
              </div>
            </div>
          </div>

          <div>
            <div className=" rounded-t-sm overflow-hidden mb-6">
              <img src={noBlogImage} alt="blog" />
            </div>

            <div className="mb-6">
              <h1 className="mb-2 text-xl font-bold font-main">
                Blog title heading will go here
              </h1>

              <p className="font-light font-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-1">Full name</h4>

              <div className="flex items-center text-sm font-light">
                <span>11 Jan 2022</span>

                <div className="w-1 h-1 bg-black rounded-full mx-2"></div>

                <span>5 min read</span>
              </div>
            </div>
          </div>

          <div>
            <div className=" rounded-t-sm overflow-hidden mb-6">
              <img src={noBlogImage} alt="blog" />
            </div>

            <div className="mb-6">
              <h1 className="mb-2 text-xl font-bold font-main">
                Blog title heading will go here
              </h1>

              <p className="font-light font-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-1">Full name</h4>

              <div className="flex items-center text-sm font-light">
                <span>11 Jan 2022</span>

                <div className="w-1 h-1 bg-black rounded-full mx-2"></div>

                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostFeatures;
