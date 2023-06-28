import React ,{useEffect} from 'react'
import { useDispatch , useSelector} from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getEnquiry, resetEnquiryState, updateEnquiry } from '../features/enquiry/enquirySlice';
import {AiOutlineArrowLeft} from "react-icons/ai"
import {toast} from "react-toastify"

const ViewEnquiryPage = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const enquiryId = location.pathname.split("/")[3];
    const { isSuccess, isError, isLoading, gotEnquiry, updatedEnquiry , res} =
      useSelector((state) => {
        return state.enquiry;
      });

      useEffect(() => {
        dispatch(getEnquiry(enquiryId))
      }, [enquiryId]);

      const handleGoBack = () => {
        navigate("/admin/enquiries")
      }

      const setEnquiryStatus = (e, id) => {
        // console.log(e);
        const data = { id: id, enquiryData: { status: e } };
        dispatch(updateEnquiry(data));
        dispatch(resetEnquiryState());
        setTimeout(()=>{
            dispatch(getEnquiry(enquiryId))
        },5);
        if (isSuccess && res.success) {
          toast.success("Status of the Enquiry is Updated Successfully");
        }
        if (isError) {
          toast.error("Something went wrong");
        }
      };
    
  return (
    <>
      <div className="flex flex-row flex-wrap justify-between items-center">
        <p className="font-roboto font-bold text-4xl m-8 text-center">
          View Enquiry
        </p>
        <button
          onClick={handleGoBack}
          style={{ boxShadow: "8px 8px 4px #0D103C" }}
          className="bg-[#fff] w-[250px] h-[75px] text-[#0D103C] rounded-[20px] font-roboto font-bold text-2xl px-4 mx-4 mt-4 mb-8 flex flex-row justify-evenly items-center"
        >
          <AiOutlineArrowLeft className="text-2xl text-center" />
          Go back
        </button>
      </div>
      <div className=" flex flex-col flex-wrap justify-center items-start mx-4">
        <p className="font-roboto font-bold text-2xl mx-4 my-2">
          Name : {gotEnquiry?.name}
        </p>
        <p className="font-roboto font-bold text-2xl mx-4 my-2">
          Mobile No :{" "}
          <a href={`tel:${gotEnquiry?.mobile}`}>{gotEnquiry?.mobile}</a>
        </p>
        <p className="font-roboto font-bold text-2xl mx-4 my-2">
          Email :{" "}
          <a href={`mailto:${gotEnquiry?.email}`}>{gotEnquiry?.email}</a>
        </p>
        <p className="font-roboto font-bold text-2xl mx-4 my-2">
          Comment : {gotEnquiry?.comment}
        </p>
        <p className="font-roboto font-bold text-2xl mx-4 my-2">
          Status : {gotEnquiry?.status}
        </p>
        <p className="font-roboto font-bold text-2xl mx-4 my-2">
          Change Status :
          <select
            name=""
            defaultValue={gotEnquiry?.status ? gotEnquiry?.status : "Submitted"}
            className="form-control form-select bg-gray-500 mx-2 p-2"
            id=""
            onChange={(e) => setEnquiryStatus(e.target.value, enquiryId)}
          >
            <option value="Submitted">Submitted</option>
            <option value="Contacted">Contacted</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        </p>
      </div>
    </>
  );
}

export default ViewEnquiryPage