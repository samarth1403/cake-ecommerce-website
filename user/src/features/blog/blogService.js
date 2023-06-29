import axios from 'axios'
import { config } from '../../utils/axiosConfig'
import { base_url } from '../../utils/base_url'

const getAllBlogs = async() => {
    const response = await axios.get(`${base_url}/blog/all-blogs`)
    return response.data;
}

const getBlog = async(id) => {
    const response = await axios.get(`${base_url}/blog/get/${id}`)
    return response.data;
}

const blogService = {
    getAllBlogs,
    getBlog
}

export default blogService;