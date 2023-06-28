import React,{useEffect,useState} from "react";
import {useDispatch , useSelector} from 'react-redux';
import { Table } from "antd";
import { deleteProduct, getAllProducts, resetProductState } from "../features/product/productSlice";
import {Link} from 'react-router-dom';
import {BiEdit} from 'react-icons/bi';
import {AiFillDelete} from 'react-icons/ai';
import {toast} from 'react-toastify'
import CustomModal from "../Components/ReusableComponents/CustomModal";

const ProductListPage = () => {

  const [open, setOpen] = useState(false);
  const [productId, setProductId] = useState("");
  const [modalData, setModalData] = useState({});
  const hideModal = () => {
    setOpen(false);
  };
  const showModal = (data) => {
    setOpen(true);
    setProductId(data._id);
    setModalData(data);
  };

  const dispatch = useDispatch();

  const { products, isSuccess, isError, res } = useSelector((state) => {
    return state.product;
  });

  console.log(products);

  useEffect(()=>{
    dispatch(resetProductState());
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
        <Link
          to={`/admin/add-product/${products[i]._id}`}
          className="flex justify-center items-center"
        >
          <BiEdit className="text-2xl" />
        </Link>
      ),
      actionDelete: (
        <button
          onClick={() => showModal(products[i])}
          className="flex flex-row justify-start items-center"
        >
          <AiFillDelete className="text-2xl text-red-600" />
        </button>
      ),
    });
  }

  const handleDeleteProduct = (id) => {
    setOpen(false);
    dispatch(deleteProduct(id));
    setTimeout(() => {
      dispatch(getAllProducts());
    }, 100);
    if (isSuccess && res.success) {
      toast.success("Product Deleted Successfully");
    }
    if (isError) {
      toast.error("Something went Wrong");
    }
  };
  return (
    <div className="my-4">
      <p className="font-bold text-2xl my-8 mx-4">Product List</p>
      <div className="m-4">
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        title="Are you sure to delete the following : "
        modalContent={`Product :- Product Name : ${modalData.title}`}
        open={open}
        hideModal={hideModal}
        performAction={() => handleDeleteProduct(productId)}
      />
    </div>
  );
};

export default ProductListPage;
