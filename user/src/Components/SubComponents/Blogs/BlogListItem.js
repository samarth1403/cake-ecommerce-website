import React from "react";
import ButtonRYG from "../../ReusableComponents/ButtonRYG";
import ReactStars from "react-rating-stars-component";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../../features/product/productSlice";
import moment from 'moment';
import { ScrollToTop } from "../../ReusableComponents/ScrollToTop";

const BlogListItem = ({ blog }) => {
  const dispatch = useDispatch();
  
  return (
    <div>
      <div
        style={{
          background: "linear-gradient(180deg, #FFEFEF 0%, #E5FE49 100%)",
        }}
        className="flex flex-col flex-no-wrap flex-shrink-0 justify-start items-start w-[310px] h-auto rounded-[33px] mx-8 mb-16 mt-4"
      >
        <Link to={`/blog-page/${blog._id}`} onClick={()=>ScrollToTop()}>
          <img
            src={blog?.images[0]?.url}
            alt="blog Item"
            className="w-[310px] h-[310px] rounded-t-[33px] mb-2"
          />
        </Link>

        <div className="flex flex-col flex-no-wrap justify-center items-start m-4">
          <p className="font-roboto font-bold text-[#0D103C] text-lg px-2 mt-3 m-1">
            {moment(blog?.createdAt).format("MMMM Do YYYY, h:mm a")}
          </p>
          <p className="font-roboto font-bold text-[#0D103C] text-2xl px-2 mt-3 m-1">
            {blog.title}
          </p>
          <p className="font-roboto font-bold text-[#0D103C] text-lg px-2 mt-3 m-1">
            {blog.description?.substr(0, 70) + "...."}
          </p>

          {/* <div className="flex flex-row flex-no-wrap justify-between items-center">
          <p className="font-roboto font-bold px-2 mt-3 m-1">Author :</p>
          <p className="font-roboto font-bold text-[#0D103C] text-lg px-2 mt-3 m-1">
            {blog.author}
          </p>
        </div>
        <div className="flex flex-row flex-no-wrap justify-between items-center">
          <p className="font-roboto font-bold px-2 mt-3 m-1">Views :</p>
          <p className="font-roboto font-bold text-[#0D103C] text-lg px-2 mt-3 m-1">
            {blog.numOfViews ? blog.numOfViews : 0}
          </p>
        </div> */}
        </div>
        <div className="mx-20">
          <Link onClick={()=>ScrollToTop()} to={`/blog-page/${blog._id}`} className="bg-[#0D103C] align-center font-roboto font-bold leading-normal text-[#fff] text-center text-sm rounded-[10px] m-4 px-4 py-2">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogListItem;
