import axios from 'axios';
import { base_url } from '../../utils/base_url';

const getAllProducts = async() => {
    const response = await axios.get(`${base_url}/product/all-products`)
    return response.data;
}

const productService = {
    getAllProducts
}

export default productService;