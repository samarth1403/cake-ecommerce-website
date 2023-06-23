import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { getAllColorCategories } from "../features/colorCategory/colorCategorySlice";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ColorCategoryListPage = () => {
  const dispatch = useDispatch();

  const { colorCategories } = useSelector((state) => {
    return state.colorCategory;
  });

  useEffect(() => {
    dispatch(getAllColorCategories());
  }, []);

  console.log(colorCategories);

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
      <p className="font-bold text-2xl my-8 mx-4">Color List</p>
      <div className="m-4">
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default ColorCategoryListPage;
