import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getBlog } from '../../../features/blog/blogSlice';

const Blog = () => {
  const location = useLocation();
  const blogId = location.pathname.split("/")[2]

  const dispatch = useDispatch();
  useEffect(()=>{
     loadBlog();
  },[]);

  const loadBlog = () => {
    dispatch(getBlog(blogId))
  }

  const {gotBlog} = useSelector((state)=>{return state.blog})

  return (
    <div className="flex flex-col justify-center items-">
      <p className="leading-snug ont-roboto font-bold text-center items-center text-[#FEE77A] f text-5xl ">
        {gotBlog?.title}
      </p>
      <div className="flex flex-row flex-wrap justify-center items-start m-4">
        <img
          src={gotBlog?.images[0]?.url}
          alt="blog"
          className="w-[350px] h-[350px] rounded-[25px] m-4"
        />
        <div
          style={{
            background: "linear-gradient(90deg, #53FFB8 0%, #ACE7FF 100%)",
          }}
          className="flex flex-col flex-wrap justify-center items-center w-[360px] sm:w-[500px] h-auto rounded-[30px] m-8"
        >
          <p className="font-roboto font-bold text-[#0D103C] text-justify text-lg sm:text-xl m-8 sm:m-12">
            {gotBlog?.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog