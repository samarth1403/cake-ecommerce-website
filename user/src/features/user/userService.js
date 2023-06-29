import axios from 'axios';
import { base_url } from '../../utils/base_url';

const registerUser = async(data) => {
    const response = await axios.post(`${base_url}/user/register-user`,data);
    return response.data;
}

const userService = {
    registerUser
}

export default userService;