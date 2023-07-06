import React,{useEffect, useState} from "react";
import { useDispatch , useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { deleteEnquiry, getAllEnquiries, resetEnquiryState, updateEnquiry } from "../features/enquiry/enquirySlice";
import CustomModal from "../Components/ReusableComponents/CustomModal";
import { toast } from "react-toastify";

const EnquiriesPage = () => {

    const dispatch = useDispatch();

  const { enquiries, isSuccess, isError, res } = useSelector((state) => {
    return state.enquiry;
  });
  const {Token} = useSelector((state)=>state.auth);

  const [open, setOpen] = useState(false);
  const [enquiryId, setEnquiryId] = useState("");
  const [modalData, setModalData] = useState({});
  const hideModal = () => {
    setOpen(false);
  };
  const showModal = (data) => {
    setOpen(true);
    setEnquiryId(data._id);
    setModalData(data);
  };

  useEffect(()=>{
    dispatch(resetEnquiryState())
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
      title: "View",
      dataIndex: "actionView",
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
        status: (
          <select
            name=""
            defaultValue={
              enquiries[i]?.status ? enquiries[i]?.status : "Submitted"
            }
            className="form-control form-select bg-gray-500 mx-2 p-2"
            id=""
            onChange={(e) => setEnquiryStatus(e.target.value, enquiries[i]._id)}
          >
            <option value="Submitted">Submitted</option>
            <option value="Contacted">Contacted</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        ),
        actionView: (
          <Link
            to={`/admin/enquiries/${enquiries[i]._id}`}
            className="flex flex-row justify-start items-center"
          >
            <AiFillEye className="text-2xl" />
          </Link>
        ),
        actionDelete: (
          <button
            onClick={() => showModal(enquiries[i])}
            className="flex flex-row justify-start items-center"
          >
            <AiFillDelete className="text-2xl text-red-600" />
          </button>
        ),
      });
    }

    const setEnquiryStatus = (e,id) => {

      const data = {id : id , enquiryData : { status : e },Token : Token}
      dispatch(updateEnquiry(data));
      if (isSuccess && res.success) {
        toast.success("Status of the Enquiry is Updated Successfully");
      }
      if (isError) {
        toast.error("Something went wrong");
      }
    }

    const handleDeleteColorCategory = (id) => {
      setOpen(false);
      dispatch(deleteEnquiry({id:id , Token : Token}));
      setTimeout(() => {
        dispatch(getAllEnquiries());
      }, 100);
      if (isSuccess && res.success) {
        toast.success("Enquiry Deleted Successfully");
      }
      if (isError) {
        toast.error("Something went Wrong");
      }
    };

  return (
    <div className="my-4">
      <p className="font-bold text-2xl my-8 mx-4">Enquiries</p>
      <div className="m-4">
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        title="Are you sure to delete the following : "
        modalContent={`Color :- Name : ${modalData.name}`}
        open={open}
        hideModal={hideModal}
        performAction={() => handleDeleteColorCategory(enquiryId)}
      />
    </div>
  );
}

export default EnquiriesPage