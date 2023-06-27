import React, { useEffect, useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { deleteProdCategory, getAllprodCategories, resetProdCategoryState } from "../features/prodCategory/prodCategorySlice";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import CustomModal from "../Components/ReusableComponents/CustomModal";
import { toast } from "react-toastify";

const ProdCategoryListPage = () => {

  const [open , setOpen] = useState(false);
  const [prodCategoryId , setProdCategoryId] = useState("");
  const [modalData , setModalData] = useState({});
  const hideModal = () => {
    setOpen(false);
  }
  const showModal = (data) => {
    setOpen(true);
    setProdCategoryId(data._id);
    setModalData(data);
  }

  const dispatch = useDispatch();

  const { prodCategories, isSuccess, isError, res } = useSelector((state) => {
    return state.prodCategory;
  });

  useEffect(() => {
    dispatch(resetProdCategoryState())
    dispatch(getAllprodCategories())
  }, []);


  const columns = [
    {
      title: "Sr No",
      dataIndex: "key",
    },
    {
      title: "Category",
      dataIndex: "category",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title: "SubCategory",
      dataIndex: "subCategory",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.subCategory.length - b.subCategory.length,
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
  for (let i = 0; i < prodCategories.length; i++) {
    data1.push({
      key: i + 1,
      category: prodCategories[i].categoryName,
      subCategory: prodCategories[i].subCategoryName,
      actionEdit: (
        <Link to={`/admin/add-product-category/${prodCategories[i]._id}`} className="flex flex-row justify-start items-center">
          <BiEdit className="text-2xl" />
        </Link>
      ),
      actionDelete: (
        <button onClick={() => showModal(prodCategories[i])} className="flex flex-row justify-start items-center">
          <AiFillDelete className="text-2xl text-red-600" />
        </button>
      ),
    });
  }

  const handleDeleteProdCategory = (id) => {
    setOpen(false);
    dispatch(deleteProdCategory(id));
    setTimeout(() => {
      dispatch(getAllprodCategories());
    }, 100);
    if (isSuccess && res.success) {
      toast.success("Product Category Deleted Successfully");
    }
    if (isError) {
      toast.error("Something went Wrong");
    }
  }

  return (
    <div className="my-4">
      <p className="font-bold text-2xl my-8 mx-4">Category List</p>
      <div className="m-4">
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        title="Are you sure to delete the following : "
        modalContent={`Category :- CategoryName : ${modalData.categoryName}  , Sub CategoryName : ${modalData.subCategoryName}`}
        open={open}
        hideModal={hideModal}
        performAction={()=>handleDeleteProdCategory(prodCategoryId)}
      />
    </div>
  );
};

export default ProdCategoryListPage;
