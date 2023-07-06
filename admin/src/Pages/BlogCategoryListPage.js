import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { deleteBlogCategory, getAllBlogCategories, resetBlogCategoryState } from "../features/blogCategory/blogCategorySlice";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import {toast} from 'react-toastify';
import CustomModal from "../Components/ReusableComponents/CustomModal";

const BlogCategoryListPage = () => {
  const [open, setOpen] = useState(false);
  const [blogCategoryId, setBlogCategoryId] = useState("");
  const [modalData, setModalData] = useState({});
  const { Token } = useSelector((state) => state.auth);

  const hideModal = () => {
    setOpen(false);
  };
  const showModal = (data) => {
    setOpen(true);
    setBlogCategoryId(data._id);
    setModalData(data);
  };
  const dispatch = useDispatch();

  const { blogCategories, isSuccess, isError, res } = useSelector((state) => {
    return state.blogCategory;
  });

  useEffect(() => {
    dispatch(resetBlogCategoryState())
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
  for (let i = 0; i < blogCategories?.length; i++) {
    data1.push({
      key: i + 1,
      category: blogCategories[i].categoryName,
      actionEdit: (
        <Link
          to={`/admin/add-blog-category/${blogCategories[i]._id}`}
          className="flex flex-row justify-start items-center"
        >
          <BiEdit className="text-2xl" />
        </Link>
      ),
      actionDelete: (
        <button
          onClick={() => showModal(blogCategories[i])}
          className="flex flex-row justify-start items-center"
        >
          <AiFillDelete className="text-2xl text-red-600" />
        </button>
      ),
    });
  }

  const handleDeleteBlogCategory = (id) => {
    setOpen(false);
    dispatch(deleteBlogCategory({id:id, Token : Token}));
    setTimeout(() => {
      dispatch(getAllBlogCategories());
    }, 100);
    if (isSuccess && res.success) {
      toast.success("Blog Category Deleted Successfully");
    }
    if (isError) {
      toast.error("Something went Wrong");
    }
  };

  return (
    <div className="my-4">
      <p className="font-bold text-2xl my-8 mx-4">Blog Category List</p>
      <div className="m-4">
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        title="Are you sure to delete the following : "
        modalContent={`Blog Category :- Category Name : ${modalData.categoryName}`}
        open={open}
        hideModal={hideModal}
        performAction={() => handleDeleteBlogCategory(blogCategoryId)}
      />
    </div>
  );
};

export default BlogCategoryListPage;
