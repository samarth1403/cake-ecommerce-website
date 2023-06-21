import React from 'react'
import { BiUpArrowAlt } from "react-icons/bi";
import { Column } from "@ant-design/plots";
import { Table } from "antd";

const DashboardPage = () => {
  const columns = [
    {
      title: "SNo",
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
      title: "Status",
      dataIndex: "staus",
    },
  ];
  const data1 = [];
  for (let i = 0; i < 46; i++) {
    data1.push({
      key: i,
      name: `Edward King ${i}`,
      product: 32,
      staus: `London, Park Lane no. ${i}`,
    });
  }

  const data = [
    {
      type: "Jan",
      sales: 38,
    },
    {
      type: "Feb",
      sales: 52,
    },
    {
      type: "Mar",
      sales: 61,
    },
    {
      type: "Apr",
      sales: 145,
    },
    {
      type: "May",
      sales: 48,
    },
    {
      type: "Jun",
      sales: 38,
    },
    {
      type: "July",
      sales: 38,
    },
    {
      type: "Aug",
      sales: 38,
    },
    {
      type: "Sept",
      sales: 38,
    },
    {
      type: "Oct",
      sales: 38,
    },
    {
      type: "Nov",
      sales: 38,
    },
    {
      type: "Dec",
      sales: 38,
    },
  ];
  const config = {
    data,
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
        alias: "Income",
      },
    },
  };

  return (
    <div>
      <div className="flex flex-col flex-no-wrap justify-center items-start">
        <p className="font-bold text-2xl m-4">Dashboard</p>
        <div className="flex flex-row flex-wrap justify-center items-center">
          <div className="w-[320px] bg-[#ffd333] rounded-[20px] m-4">
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
          </div>
          <div className="w-[320px] bg-[#ffd333] rounded-[20px] m-4">
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
          </div>
          <div className="w-[320px] bg-[#ffd333] rounded-[20px] m-4">
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
          </div>
        </div>
      </div>
      <div className="my-4">
        <p className="font-bold text-2xl my-8 mx-4">Income Statics</p>
        <div className="m-4">
          <Column {...config} />
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
}

export default DashboardPage