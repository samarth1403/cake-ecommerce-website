import React, { useEffect, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders, getMonthlyOrders, getYearlyOrders, updateOrderStatus } from "../features/order/orderSlice";
import {Link} from "react-router-dom";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const [monthlyDataIncome, setMonthlyDataIncome] = useState([]);
  const [monthlyDataSales, setMonthlyDataSales] = useState([]);
  useEffect(() => {
    dispatch(getMonthlyOrders());
    dispatch(getYearlyOrders());
    dispatch(getAllOrders())
  }, []);

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  const { orders } = useSelector((state) => {
    return state.order;
  });

  const { monthlyOrders, yearlyOrders } = useSelector((state) => {
    return state.order;
  });

  useEffect(() => {
    let data = [];
    let monthlyOrderCount = [];
    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    for (let index = 0; index < monthlyOrders?.length; index++) {
      const element = monthlyOrders[index];
      data.push({
        type: monthNames[element?._id?.month],
        income: element?.amount,
      });
      monthlyOrderCount.push({
        type: monthNames[element?._id?.month],
        sales: element?.count,
      });
    }
    setMonthlyDataIncome(data);
    setMonthlyDataSales(monthlyOrderCount)
  }, [monthlyOrders]);


  const config = {
    data: monthlyDataIncome,
    xField: "type",
    yField: "income",
    color: ({ type }) => {
      return "#ffd333";
    },
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "Income",
      },
    },
  };
  const config2 = {
    data: monthlyDataSales,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#ffd333";
    },
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "sales",
      },
    },
  };

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
        title: "Email",
        dataIndex: "email",
      },
      {
        title: "Mobile",
        dataIndex: "mobile",
      },
      {
        title: "Products",
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
    ];

    const handleUpdateOrderStatus = (id,status) => {
      dispatch(updateOrderStatus({id:id, status:status}))
    }

    const data1 = [];
    for (let i = 0; i < orders?.length; i++) {
      const date = new Date(orders[i]?.createdAt);
      data1.push({
        key: i + 1,
        name: orders[i].user?.firstName + " " + orders[i].user?.lastName,
        mobile: orders[i].user?.mobile,
        email: orders[i].user?.email,
        product: (
          <Link to={`/admin/order/${orders[i]?._id}`}>View Ordered Products</Link>
        ),
        amount: orders[i]?.totalPrice,
        date: date.toUTCString(),
        status: <>
          <select defaultValue={orders[i]?.orderStatus} name="" id="" onChange={(e)=>{handleUpdateOrderStatus(orders[i]._id,e.target.value)}}>
            <option value="Ordered" disabled selected>Ordered</option>
            <option value="Processed" >Processed</option>
            <option value="Shipped" >Shipped</option>
            <option value="Out for Delivery" >Out for Delivery</option>
            <option value="Delivered" >Delivered</option>
          </select>
        </>,
      });
    }


  return (
    <div>
      <div className="flex flex-col flex-no-wrap justify-center items-start">
        <p className="font-bold text-2xl m-4">Dashboard</p>
        <div className="flex flex-row flex-wrap justify-center items-center">
          <div className="w-[320px] bg-[#ffd333] rounded-[20px] m-4">
            <div className="flex flex-row flex-wrap justify-between items-center">
              <div className="flex flex-col flex-no-wrap justify-center">
                <p className="font-bold text-xl mt-4 mb-2 mx-4">Total Income</p>
                <p className="font-bold text-2xl mt-2 mb-4 mx-4">
                  Rs : {yearlyOrders && yearlyOrders[0]?.amount} /-
                </p>
              </div>
              <div className="flex flex-col flex-wrap justify-center items-center mx-2">
                <p className="font-medium text-lg m-2">
                  Total Income in Last Year till Today
                </p>
              </div>
            </div>
          </div>
          <div className="w-[320px] bg-[#ffd333] rounded-[20px] m-4">
            <div className="flex flex-row flex-wrap justify-between items-center">
              <div className="flex flex-col flex-no-wrap justify-center">
                <p className="font-bold text-xl mt-4 mb-2 mx-4">Total Sales</p>
                <p className="font-bold text-2xl mt-2 mb-4 mx-4">
                  {yearlyOrders && yearlyOrders[0]?.count}
                </p>
              </div>
            </div>
            <div className="flex flex-col flex-wrap justify-center items-center mx-2">
              <p className="font-medium text-lg m-2">
                Total Sales in Last Year till Today
              </p>
            </div>
          </div>
          {/* <div className="w-[320px] bg-[#ffd333] rounded-[20px] m-4">
            <div className="flex flex-row flex-wrap justify-between items-center">
              <div className="flex flex-col flex-no-wrap justify-center">
                <p className="font-bold text-xl mt-4 mb-2 mx-4">Total</p>
                <p className="font-bold text-2xl mt-2 mb-4 mx-4">$1000</p>
              </div>
              <div className="flex flex-col flex-wrap justify-center items-center mx-2">
                <p className="flex flex-row items-center font-medium text-lg m-2">
                  <BiUpArrowAlt className="mx-2 text-xl" />
                  32%
                </p>
                <p className="font-medium text-lg m-2">Compared to April</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between items-center">
        <div className="my-4 flex-grow w-48">
          <p className="font-bold text-2xl my-8 mx-4">Income Statics</p>
          <div className="m-4">
            <Column {...config} />
          </div>
        </div>
        <div className="my-4 flex-grow w-48">
          <p className="font-bold text-2xl my-8 mx-4">Sales Statics</p>
          <div className="m-4">
            <Column {...config2} />
          </div>
        </div>
      </div>
      <div className="my-4">
        <p className="font-bold text-2xl my-8 mx-4">Recent Orders</p>
        <div className="m-4">
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
