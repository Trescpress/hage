import React from "react";
import BlogPostContentFeatures from "./sections/BlogPostContentFeatures";
import BookDemo from "../../components/Bookdemo/BookDemo";
import RelatedBlogPost from "./sections/RelatedBlogPost";

const BlogPostContent = () => {
  return (
    <>
      <BlogPostContentFeatures />
      <BookDemo signUpButtonText="Sign up today" demoButtonText="Book demo" />
      <RelatedBlogPost />
    </>
  );
};

export default BlogPostContent;
