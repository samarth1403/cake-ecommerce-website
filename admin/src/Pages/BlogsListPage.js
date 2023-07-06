import React, { useEffect , useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

import { Table } from "antd";
import { deleteBlog, getAllBlogs, resetBlogState } from "../features/blog/blogSlice";
import { toast } from "react-toastify";
import CustomModal from "../Components/ReusableComponents/CustomModal";

const BlogsListPage = () => {

  const [open, setOpen] = useState(false);
  const [blogId, setBlogId] = useState("");
  const [modalData, setModalData] = useState({});
  const hideModal = () => {
    setOpen(false);
  };
  const showModal = (data) => {
    setOpen(true);
    setBlogId(data._id);
    setModalData(data);
  };

  const dispatch = useDispatch();

  const { blogs, isSuccess, isError, res } = useSelector((state) => {
    return state.blog;
  });
  const {Token} = useSelector((state)=>state.auth);

  useEffect(() => {
    dispatch(resetBlogState())
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
  for (let i = 0; i < blogs?.length; i++) {
    data1.push({
      key: i + 1,
      title: blogs[i].title,
      category: blogs[i].category,
      description: blogs[i].description,
      actionEdit: (
        <Link
          to={`/admin/add-blog/${blogs[i]._id}`}
          className="flex flex-row justify-start items-center"
        >
          <BiEdit className="text-2xl" />
        </Link>
      ),
      actionDelete: (
        <button
          onClick={() => showModal(blogs[i])}
          className="flex flex-row justify-start items-center"
        >
          <AiFillDelete className="text-2xl text-red-600" />
        </button>
      ),
    });
  }

  const handleDeleteBlog = (id) => {
    setOpen(false);
    dispatch(deleteBlog({id:id, Token:Token}));
    setTimeout(() => {
      dispatch(getAllBlogs());
    }, 100);
    if (isSuccess && res.success) {
      toast.success("Blog Deleted Successfully");
    }
    if (isError) {
      toast.error("Something went Wrong");
    }
  };

  return (
    <div className="my-4">
      <p className="font-bold text-2xl my-8 mx-4">Blog List</p>
      <div className="m-4">
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        title="Are you sure to delete the following : "
        modalContent={`Blog :- Blog Name : ${modalData.title}`}
        open={open}
        hideModal={hideModal}
        performAction={() => handleDeleteBlog(blogId)}
      />
    </div>
  );
};

export default BlogsListPage;
