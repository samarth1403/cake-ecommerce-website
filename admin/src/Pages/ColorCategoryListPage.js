import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { deleteColorCategory, getAllColorCategories, resetColorCategoryState } from "../features/colorCategory/colorCategorySlice";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import {toast} from "react-toastify"
import CustomModal from "../Components/ReusableComponents/CustomModal";

const ColorCategoryListPage = () => {

  const [open, setOpen] = useState(false);
  const [colorCategoryId, setColorCategoryId] = useState("");
  const [modalData, setModalData] = useState({});
  const {Token} = useSelector((state)=>state.auth);
  const hideModal = () => {
    setOpen(false);
  };
  const showModal = (data) => {
    setOpen(true);
    setColorCategoryId(data._id);
    setModalData(data);
  };
  const dispatch = useDispatch();

  const { colorCategories, isSuccess, isError, res } = useSelector((state) => {
    return state.colorCategory;
  });

  useEffect(() => {
    dispatch(resetColorCategoryState());
    dispatch(getAllColorCategories());
  }, []);

  const columns = [
    {
      title: "Sr No",
      dataIndex: "key",
    },
    {
      title: "Color Name",
      dataIndex: "color",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.color.length - b.color.length,
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
  for (let i = 0; i < colorCategories.length; i++) {
    data1.push({
      key: i + 1,
      color: colorCategories[i].colorName,
      actionEdit: (
        <Link
          to={`/admin/add-color/${colorCategories[i]._id}`}
          className="flex flex-row justify-start items-center"
        >
          <BiEdit className="text-2xl" />
        </Link>
      ),
      actionDelete: (
        <button onClick={() => showModal(colorCategories[i])} className="flex flex-row justify-start items-center">
          <AiFillDelete className="text-2xl text-red-600" />
        </button>
      ),
    });
  }

  const handleDeleteColorCategory = (id) => {
    setOpen(false);
    dispatch(deleteColorCategory({id:id , Token : Token}));
    setTimeout(() => {
      dispatch(getAllColorCategories());
    }, 100);
    if (isSuccess && res.success) {
      toast.success("Color Category Deleted Successfully");
    }
    if (isError) {
      toast.error("Something went Wrong");
    }
  };
  
  return (
    <div className="my-4">
      <p className="font-bold text-2xl my-8 mx-4">Color List</p>
      <div className="m-4">
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        title="Are you sure to delete the following : "
        modalContent={`Color :- Color Name : ${modalData.colorName}`}
        open={open}
        hideModal={hideModal}
        performAction={() => handleDeleteColorCategory(colorCategoryId)}
      />
    </div>
  );
};

export default ColorCategoryListPage;
