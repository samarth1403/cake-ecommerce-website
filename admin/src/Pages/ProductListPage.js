import React,{useEffect} from "react";
import {useDispatch , useSelector} from 'react-redux';
import { Table } from "antd";
import { getAllProducts } from "../features/product/productSlice";
import {Link} from 'react-router-dom';
import {BiEdit} from 'react-icons/bi';
import {AiFillDelete} from 'react-icons/ai';

const ProductListPage = () => {

  const dispatch = useDispatch();

  const {products} = useSelector((state) => {
    return state.product;
  })

  console.log(products);

  useEffect(()=>{
    dispatch(getAllProducts());
  },[])

   const columns = [
     {
       title: "Sr No",
       dataIndex: "key",
     },
     {
       title: "Title",
       dataIndex: "title",
       defaultSortOrder: "descend",
       sorter: (a, b) => a.title.length - b.title.length,
     },
     {
       title: "Price",
       dataIndex: "price",
       defaultSortOrder: "descend",
       sorter: (a, b) => a.price.length - b.price.length,
     },
     {
       title: "Category",
       dataIndex: "category",
     },
     {
       title: "SubCategory",
       dataIndex: "subCategory",
     },
     {
       title: "Tags",
       dataIndex: "tags",
     },
     {
       title: "Sold Quantity",
       dataIndex: "sold",
       defaultSortOrder: "descend",
       sorter: (a, b) => a.sold.length - b.sold.length,
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
  for (let i = 0; i < products.length; i++) {
    data1.push({
      key: i + 1,
      title: products[i].title,
      price: `Rs.  ${products[i].price} /-`,
      category: products[i].category,
      subCategory: products[i].subCategory,
      tags: products[i].tags,
      sold: products[i].sold,
      actionEdit: (
        <Link to="/" className="flex justify-center items-center">
          <BiEdit className="text-2xl" />
        </Link>
      ),
      actionDelete: (
        <Link to="/" className="flex justify-center items-center">
          <AiFillDelete className="text-2xl text-red-600" />
        </Link>
      ),
    });
  }
  return (
    <div className="my-4">
      <p className="font-bold text-2xl my-8 mx-4">Product List</p>
      <div className="m-4">
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default ProductListPage;
