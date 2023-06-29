import React, { useEffect } from "react";

import Anniversary from "../../../images/Anniversary.jpeg";
import Birthday from "../../../images/Birthday.webp";
import Cake from "../../../images/cake.jpeg";
import  BlogListItem from './BlogListItem'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../features/product/productSlice";
import { getAllBlogs } from "../../../features/blog/blogSlice";


const BlogList = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => {
    return state.blog;
  });

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = () => {
    dispatch(getAllBlogs());
  };

  const renderedShoppingList = blogs?.map((blog) => {
    return (
      <div key={blog?._id}>
        <BlogListItem blog={blog} />
      </div>
    );
  });
  return (
    <>
      <p className="leading-snug ont-roboto font-bold text-center items-center text-[#FEE77A] f text-5xl m-4">
        All Blogs
      </p>
      <div className="bg-[#0D103C] flex flex-row flex-wrap justify-center items-center p-6">
        {renderedShoppingList}
      </div>
    </>
  );
};

export default BlogList;
