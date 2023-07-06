import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { deleteCoupon, getAllCoupons, resetCouponState } from "../features/coupon/couponSlice";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import CustomModal from "../Components/ReusableComponents/CustomModal";
import {toast} from 'react-toastify';

const CouponListPage = () => {
  const [open, setOpen] = useState(false);
  const [couponId, setCouponId] = useState("");
  const [modalData, setModalData] = useState({});
  const hideModal = () => {
    setOpen(false);
  };
  const showModal = (data) => {
    setOpen(true);
    setCouponId(data._id);
    setModalData(data);
  };
  const dispatch = useDispatch();

  const { coupons, isSuccess, isError, res } = useSelector((state) => {
    return state.coupon;
  });
  const { Token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(resetCouponState());
    dispatch(getAllCoupons({Token:Token}));
  }, []);

  // console.log(coupons);

  const columns = [
    {
      title: "Sr No",
      dataIndex: "key",
    },
    {
      title: "Coupon Name",
      dataIndex: "name",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Discount",
      dataIndex: "discount",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.discount.length - b.discount.length,
    },
    {
      title: "Expiry",
      dataIndex: "expiry",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.expiry.length - b.expiry.length,
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
  for (let i = 0; i < coupons?.length; i++) {
    const date = new Date(coupons[i].expiry)
    data1.push({
      key: i + 1,
      name: coupons[i].name,
      expiry: date.toUTCString(),
      discount: `${coupons[i].discount} %`,
      actionEdit: (
        <Link
          to={`/admin/add-coupon/${coupons[i]._id}`}
          className="flex flex-row justify-start items-center"
        >
          <BiEdit className="text-2xl" />
        </Link>
      ),
      actionDelete: (
        <button
          onClick={() => showModal(coupons[i])}
          className="flex flex-row justify-start items-center"
        >
          <AiFillDelete className="text-2xl text-red-600" />
        </button>
      ),
    });
  }

  const handleDeleteCoupon = (id) => {
    setOpen(false);
    dispatch(deleteCoupon({id:id, Token : Token}));
    setTimeout(() => {
      dispatch(getAllCoupons({Token : Token}));
    }, 100);
    if (isSuccess && res.success) {
      toast.success("Occasion Deleted Successfully");
    }
    if (isError) {
      toast.error("Something went Wrong");
    }
  };
  return (
    <div className="my-4">
      <p className="font-bold text-2xl my-8 mx-4">Color List</p>
      <div className="m-4">
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        performAction={() => {
          return handleDeleteCoupon(couponId);
        }}
        open={open}
        title="Are you sure to delete the following "
        modalContent={`Coupon :- Coupon Name : ${modalData.name}`}
      />
    </div>
  );
};

export default CouponListPage;
