import axios from 'axios';
import { config } from '../../utils/axiosConfig';
import {base_url} from '../../utils/base_url';

const uploadImg = async (data) => {
    const response = await axios.post(`${base_url}/upload/uploadImg`,data , config);
    return response.data;
}

const deleteImg = async(id) => {
    const response = await axios.delete(`${base_url}/upload/deleteImg/${id}`,config)
    console.log(response.data);
    return response.data;
}

const uploadService = {
    uploadImg,
    deleteImg,
}

export default uploadService;