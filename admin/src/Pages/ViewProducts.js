import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Table } from "antd";
import { getAllOrders, getOrderByUserId } from "../features/order/orderSlice";

const ViewProducts = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[3];
  const dispatch = useDispatch();

  const { userOrders } = useSelector((state) => {
    return state.order;
  });

  useEffect(() => {
    dispatch(getOrderByUserId(userId));
  }, []);

  const columns = [
    {
      title: "Sr No",
      dataIndex: "key",
    },
    {
      title: "Product Name",
      dataIndex: "name",
    },
    {
      title: "Color",
      dataIndex: "color",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "subCategory",
      dataIndex: "subCategory",
    },
    {
      title: "Count",
      dataIndex: "count",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    // {
    //   title: "Date",
    //   dataIndex: "date",
    // },

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
  for (let i = 0; i < userOrders?.products?.length; i++) {
    const date = new Date(userOrders?.products[i]?.product?.createdAt);
    data1.push({
      key: i + 1,
      name: userOrders?.products[i]?.product?.title,
      count: userOrders?.products[i]?.count,
      color: userOrders?.products[i]?.color,
      amount: userOrders?.products[i]?.product?.price,
      category: userOrders?.products[i]?.product?.category,
      subCategory: userOrders?.products[i]?.product?.subCategory,
      date: date.toUTCString(),
      actionEdit: (
        <Link to="/" className="flex justify-start items-center">
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
      <p className="font-bold text-2xl my-8 mx-4">View Products</p>
      <div className="m-4">
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default ViewProducts;
