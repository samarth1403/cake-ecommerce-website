import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

import { Table } from "antd";
import { getAllBlogs } from "../features/blog/blogSlice";

const BlogsListPage = () => {
  const dispatch = useDispatch();

  const { blogs } = useSelector((state) => {
    return state.blog;
  });

  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);

  const columns = [
    {
      title: "Sr No",
      dataIndex: "key",
    },
    {
      title: "Title",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.title.length - b.title.length,
    },
    {
      title: "Category",
      dataIndex: "category",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title: "Description",
      dataIndex: "description",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.description.length - b.description.length,
    },
    {
      title: "Edit",
      dataIndex: "actionEdit",
    },
    {
      title: "Delete",
      dataIndex: "actionDelete",
    },
  ];
  const data1 = [];
  for (let i = 0; i < blogs.length; i++) {
    data1.push({
      key: i + 1,
      title: blogs[i].title,
      category: blogs[i].category,
      description: blogs[i].description,
      actionEdit: (
        <Link to="/" className="flex flex-row justify-start items-center">
          <BiEdit className="text-2xl" />
        </Link>
      ),
      actionDelete: (
        <Link to="/" className="flex flex-row justify-start items-center">
          <AiFillDelete className="text-2xl text-red-600" />
        </Link>
      ),
    });
  }
  return (
    <div className="my-4">
      <p className="font-bold text-2xl my-8 mx-4">Blog List</p>
      <div className="m-4">
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default BlogsListPage;
