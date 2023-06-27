import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Table } from "antd";
import { getAllOccasions } from "../features/occasion/occasionSlice";

const OccasionListPage = () => {
  const dispatch = useDispatch();

  const { occasions } = useSelector((state) => {
    return state.occasion;
  });

  useEffect(() => {
    dispatch(getAllOccasions());
  }, []);

  const columns = [
    {
      title: "Sr. No",
      dataIndex: "key",
    },
    {
      title: "Occasion Name",
      dataIndex: "occasion",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.occasion.length - b.occasion.length,
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
  for (let i = 0; i < occasions?.length; i++) {
    data1.push({
      key: i + 1,
      occasion: occasions[i].occasionName,
      actionEdit: (
        <Link to={`/admin/add-occasion/${occasions[i]._id}`} className="flex justify-start items-center">
          <BiEdit className="text-2xl" />
        </Link>
      ),
      actionDelete: (
        <Link to="/" className="flex justify-start items-center">
          <AiFillDelete className="text-2xl text-red-600" />
        </Link>
      ),
    });
  }
  return (
    <div className="my-4">
      <p className="font-bold text-2xl my-8 mx-4">Occasion List</p>
      <div className="m-4">
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default OccasionListPage;
