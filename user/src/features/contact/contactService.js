import axios from 'axios'
import {base_url} from '../../utils/base_url'

const createEnquiry = async(data) => {
    const response = await axios.post(`${base_url}/enquiry/create`,data);
    return response.data;
}

const contactService = {
    createEnquiry
}

export default contactService;