import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { base_url } from "../../utils/base_url";

const getAllEnquiries = async() => {
    const response = await axios.get(`${base_url}/enquiry/all-enquiries`);
    return response.data;
}

const getEnquiry = async(id) => {
  const response = await axios.get(`${base_url}/enquiry/get/${id}`);
  return response.data;
}

const updateEnquiry = async (data) => {
  const response = await axios.put(
    `${base_url}/enquiry/update/${data?.id}`,
    { status: data.enquiryData.status },
    {
      headers: {
        Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
        Accept: "application/json",
      },
    }
  );
  return response.data;
};

const deleteEnquiry = async (data) => {
  const response = await axios.delete(`${base_url}/enquiry/delete/${data?.id}`, {
    headers: {
      Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
      Accept: "application/json",
    },
  });
  return response.data;
};


const enquiryService = {
  getAllEnquiries,
  deleteEnquiry,
  getEnquiry,
  updateEnquiry
};

export default enquiryService;