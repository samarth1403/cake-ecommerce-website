import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { getAllBlogCategories } from "../features/blogCategory/blogCategorySlice";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const BlogCategoryListPage = () => {
  const dispatch = useDispatch();

  const { blogCategories } = useSelector((state) => {
    return state.blogCategory;
  });
console.log(blogCategories);
  useEffect(() => {
    dispatch(getAllBlogCategories());
  }, []);

  const columns = [
    {
      title: "Sr No",
      dataIndex: "key",
    },
    {
      title: "Category",
      dataIndex: "category",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.category.length - b.category.length,
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
  for (let i = 0; i < blogCategories.length; i++) {
    data1.push({
      key: i + 1,
      category: blogCategories[i].categoryName,
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
      <p className="font-bold text-2xl my-8 mx-4">Blog Category List</p>
      <div className="m-4">
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default BlogCategoryListPage;
