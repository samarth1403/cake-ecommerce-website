import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Table } from "antd";
import { deleteOccasion, getAllOccasions, resetOccasionState } from "../features/occasion/occasionSlice";
import CustomModal from "../Components/ReusableComponents/CustomModal";
import { toast } from "react-toastify";

const OccasionListPage = () => {

  const [open , setOpen] = useState(false);
  const [occasionId , setOccasionId] = useState("");
  const [modalData, setModalData] = useState({});
  const hideModal = () => {
    setOpen(false);
  }
  const showModal = (data) => {
    setOpen(true);
    setOccasionId(data._id);
    setModalData(data);
  }
  const dispatch = useDispatch();
  const { Token } = useSelector((state) => state.auth);

  const { occasions, isSuccess, isError, res } = useSelector((state) => {
    return state.occasion;
  });


  useEffect(() => {
    dispatch(resetOccasionState())
    dispatch(getAllOccasions());
  }, []);

  const columns = [
    {
      title: "Sr. No",
      dataIndex: "key",
    },
    {
      title: "Occasion Name",
      dataIndex: "occasion",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.occasion.length - b.occasion.length,
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
  for (let i = 0; i < occasions?.length; i++) {
    data1.push({
      key: i + 1,
      occasion: occasions[i].occasionName,
      actionEdit: (
        <Link
          to={`/admin/add-occasion/${occasions[i]._id}`}
          className="flex justify-start items-center"
        >
          <BiEdit className="text-2xl" />
        </Link>
      ),
      actionDelete: (
        <button
          onClick={() => showModal(occasions[i])}
          className="flex justify-start items-center bg-transparent border-0 modalButton"
        >
          <AiFillDelete className="text-2xl text-red-600" />
        </button>
      ),
    });
  }

  const handleDeleteOccasion = (id) => {
    setOpen(false);
    dispatch(deleteOccasion({id:id, Token:Token}));
    setTimeout(()=>{
      dispatch(getAllOccasions());
    },100)
    if (isSuccess && res.success) {
      toast.success("Occasion Deleted Successfully");
    }
    if (isError) {
      toast.error("Something went Wrong");
    }
  }
  return (
    <div className="my-4">
      <p className="font-bold text-2xl my-8 mx-4">Occasion List</p>
      <div className="m-4">
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        performAction={() => {
          return handleDeleteOccasion(occasionId);
        }}
        open={open}
        title="Are you sure to delete the following "
        modalContent={`Occasion :- Occasion Name : ${modalData.occasionName}`}
      />
    </div>
  );
};

export default OccasionListPage;
