import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Table } from "antd";
import { getAllOrders, getOrderByOrderId, getOrderByUserId } from "../features/order/orderSlice";

const ViewProducts = () => {
  const location = useLocation();
  const orderId = location.pathname.split("/")[3];
  const dispatch = useDispatch();
  const {Token} = useSelector((state)=>state.auth)


  useEffect(() => {
    dispatch(getOrderByOrderId({ id: orderId , Token : Token}));
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
      title: "Qty",
      dataIndex: "qauntity",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.quantity?.length - b.quantity?.length,
    },
    {
      title: "Price",
      dataIndex: "price",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.price?.length - b.price?.length,
    },
    {
      title: "Shape",
      dataIndex: "shape",
    },
    {
      title: "Weight",
      dataIndex: "weight",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.weight?.length - b.weight?.length,
    },
    {
      title: "Eggless",
      dataIndex: "veg",
    },
    // {
    //   title: "Date",
    //   dataIndex: "date",
    // },

    // {
    //   title: "Edit",
    //   dataIndex: "actionEdit",
    // },
    // {
    //   title: "Delete",
    //   dataIndex: "actionDelete",
    // },
  ];
  
const { gotOrderByOrderId } = useSelector((state) => {
  return state.order;
});

  let data1 = [];
  // for (let i = 0; i < userOrders?.length; i++) {
  //   let order = userOrders[i];
    
    
  // }
  for (let j = 0; j < gotOrderByOrderId?.orderItems?.length; j++) {
    let item = gotOrderByOrderId?.orderItems[j];

    // const date = new Date(userOrders?.products[i]?.product?.createdAt);
    data1.push({
      key: j + 1,
      name: item?.product?.title,
      qauntity: item?.quantity,
      color: item?.color?.colorName,
      price: item?.product?.price,
      category: item?.product?.category,
      subCategory: item?.product?.subCategory,
      shape: item?.shape,
      veg: item?.veg === true ? "True" : "False",
      weight: item?.weight,
      // date: date.toUTCString(),
      // actionEdit: (
      //   <Link to="/" className="flex justify-start items-center">
      //     <BiEdit className="text-2xl" />
      //   </Link>
      // ),
      // actionDelete: (
      //   <Link to="/" className="flex justify-start items-center">
      //     <AiFillDelete className="text-2xl text-red-600" />
      //   </Link>
      // ),
    });
  }
  return (
    <div className="my-4">
      <p className="font-bold text-2xl my-8 mx-4">Viewing Ordered Products</p>
      <div className="m-4">
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default ViewProducts;
