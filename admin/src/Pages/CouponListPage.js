import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { getAllCoupons } from "../features/coupon/couponSlice";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const CouponListPage = () => {
  const dispatch = useDispatch();

  const { coupons } = useSelector((state) => {
    return state.coupon;
  });

  useEffect(() => {
    //dispatch(getAllCoupons());
  }, []);

  console.log(coupons);

  const columns = [
    {
      title: "Sr No",
      dataIndex: "key",
    },
    {
      title: "Coupon Name",
      dataIndex: "name",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.name.length - b.name.length,
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
  for (let i = 0; i < coupons.length; i++) {
    data1.push({
      key: i + 1,
      name: coupons[i].name,
      expiry: coupons[i].expiry,
      discount: `${coupons[i].discount} %`,
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

export default CouponListPage;
