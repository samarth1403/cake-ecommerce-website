import React,{useEffect} from "react";
import {useDispatch , useSelector} from "react-redux";

import { Table } from "antd";
import { getAllUsers } from "../features/user/userSlice";

const CustomersPage = () => {
  const dispatch = useDispatch();
  const {Token} = useSelector((state)=>state.auth)

  useEffect(() => {
    dispatch(getAllUsers({Token : Token}));
  }, []);

  const {users} = useSelector((state) => {
    return state.user;
  })

  const columns = [
    {
      title: "Sr No",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Email",
      dataIndex: "email"
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
    },
  ];

  const data1 = [];
  for (let i = 0; i < users.length; i++) {
    if(users[i].role !== "admin"){
      data1.push({
        key: i,
        name: users[i].firstName + " " + users[i].lastName,
        email: users[i].email,
        mobile: users[i].mobile,
      });
    }
  }
  return (
    <div className="my-4">
      <p className="font-bold text-2xl my-8 mx-4">Customers</p>
      <div className="m-4">
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default CustomersPage;
