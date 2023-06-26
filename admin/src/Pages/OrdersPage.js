import React,{useEffect} from "react";
import {useDispatch , useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Table } from "antd";
import { getAllOrders } from "../features/order/orderSlice";

const OrdersPage = () => {
 
  const dispatch = useDispatch();

  const {orders} = useSelector((state) => {
    return state.order;
  })

  useEffect(()=>{
    dispatch(getAllOrders());
  },[])

  const columns = [
    {
      title: "Sr No",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Product",
      dataIndex: "product",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
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
  for (let i = 0; i < orders?.length; i++) {
    const date = new Date(orders[i].createdAt);
    data1.push({
      key: i + 1,
      name: orders[i].orderBy.firstName + " " + orders[i].orderBy.lastName,
      product: orders[i].products?.map((i, j) => {
        return (
          <ul key={j}>
            <li>{i.product?.title}</li>
          </ul>
        );
      }),
      amount: orders[i].paymentIntent.amount,
      date: date.toUTCString(),
      status: orders[i].orderStatus,
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
      <p className="font-bold text-2xl my-8 mx-4">Orders</p>
      <div className="m-4">
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default OrdersPage;
