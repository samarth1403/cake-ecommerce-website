import React,{useEffect} from "react";
import {useDispatch , useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Table } from "antd";
import { getAllOrders, updateOrderStatus } from "../features/order/orderSlice";
import {toast} from "react-toastify";

const OrdersPage = () => {
 
  const dispatch = useDispatch();
  const {Token} = useSelector((state)=>state.auth);

  const {orders,isError , isSuccess, res} = useSelector((state) => {
    return state.order;
  })

  useEffect(()=>{
    dispatch(getAllOrders({Token:Token}));
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
    {
      title: "Edit",
      dataIndex: "actionEdit",
    },
    {
      title: "Delete",
      dataIndex: "actionDelete",
    },
  ];

    const handleUpdateOrderStatus = (id, status) => {
      dispatch(
        updateOrderStatus({ id: id, body: { status: status }, Token: Token })
      );
      setTimeout(()=>{
        dispatch(getAllOrders({Token:Token}));
        if (isSuccess && res.success) {
          toast.success("Status of the Enquiry is Updated Successfully");
        }
        if (isError) {
          toast.error("Something went wrong");
        }
      },100)
    };

  const data1 = [];
  for (let i = 0; i < orders?.length; i++) {
    const date = new Date(orders[i]?.createdAt);
    data1.push({
      key: i + 1,
      name: orders[i].user?.firstName + " " + orders[i].user?.lastName,
      mobile: orders[i].user?.mobile,
      email: orders[i].user?.email,
      product: <Link to={`/admin/order/${orders[i]?._id}`}>View Products</Link>,
      amount: orders[i]?.totalPrice,
      date: date.toUTCString(),
      status: (
        <>
          <select
            defaultValue={orders[i]?.orderStatus}
            name=""
            id=""
            onChange={(e) => {
              handleUpdateOrderStatus(orders[i]._id, e.target.value);
            }}
          >
            <option value="Ordered" disabled selected>
              Ordered
            </option>
            <option value="Processed">Processed</option>
            <option value="Shipped">Shipped</option>
            <option value="Out for Delivery">Out for Delivery</option>
            <option value="Delivered">Delivered</option>
          </select>
        </>
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
