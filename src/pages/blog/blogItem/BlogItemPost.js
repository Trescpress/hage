import React from "react";
import { Link } from "react-router-dom";

import noImage from "../../../assests/noBlogImage.png";

const BlogItemPost = ({ post }) => {
  const imageUrl =
    post.attributes &&
    post.attributes.coverImage &&
    post.attributes.coverImage.data
      ? `http://localhost:1337${post.attributes.coverImage.data.attributes.url}`
      : noImage; // If cover image data is not available, use noImage as the source

  return (
    <Link to={`/blogpost/${post.id}`}>
      <img
        src={imageUrl}
        alt="Blog"
        className="mb-6 h-[16rem] md:h-[18.75rem] w-full"
      />

      <div className="mb-6">
        <h1 className="mb-2 text-xl font-bold font-main">
          {post.attributes && post.attributes.blogTitle}
        </h1>

        <p className="font-light font-body">
          {post.attributes && post.attributes.blogSummary}
        </p>
      </div>

      <div>
        <h4 className="text-sm font-semibold mb-1.5">
          {post.attributes && post.attributes.author}
        </h4>

        <div className="flex items-center text-sm font-light">
          <span>{post.attributes && post.attributes.publishedDate}</span>
          <div className="w-1 h-1 bg-black rounded-full mx-2"></div>
          <span>{post.attributes && post.attributes.readTime}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogItemPost;
