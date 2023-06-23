import axios from "axios";
import { base_url } from "../../utils/base_url";

const getAllEnquiries = async() => {
    const response = await axios.get(`${base_url}/enquiry/all-enquiries`);
    return response.data;
}

const enquiryService = {
    getAllEnquiries
}

export default enquiryService;