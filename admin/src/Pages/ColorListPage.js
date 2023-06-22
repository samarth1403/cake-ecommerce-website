import React from "react";

import { Table } from "antd";

const ColorListPage = () => {
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
  return (
    <div className="my-4">
      <p className="font-bold text-2xl my-8 mx-4">Color List</p>
      <div className="m-4">
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default ColorListPage;