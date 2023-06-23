import React,{useEffect} from "react";
import { useDispatch , useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "antd";
import {AiFillDelete} from 'react-icons/ai';
import { getAllEnquiries } from "../features/enquiry/enquirySlice";

const EnquiriesPage = () => {

  const dispatch = useDispatch();

  const {enquiries} = useSelector((state)=>{
    return state.enquiry;
  })

  useEffect(()=>{
    dispatch(getAllEnquiries());
  },[])
  
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
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Delete",
      dataIndex: "actionDelete",
    },
  ];
    const data1 = [];
    for (let i = 0; i < enquiries.length; i++) {
      data1.push({
        key: i + 1,
        name: enquiries[i].name,
        email: enquiries[i].email,
        mobile: enquiries[i].mobile,
        status:<select name="" className="font-control form-select">
          <option value="">Set Status</option>
        </select>,
        actionDelete: (
        <Link to="/" className="flex flex-row justify-start items-center">
          <AiFillDelete className="text-2xl text-red-600" />
        </Link>
      ),
      });
    }

  return (
    <div className="my-4">
        <p className="font-bold text-2xl my-8 mx-4">Enquiries</p>
        <div className="m-4">
          <Table columns={columns} dataSource={data1} />
        </div>
    </div>
  );
}

export default EnquiriesPage