import axios from 'axios';
import { base_url } from '../../utils/base_url';

const loginAdmin = async(adminData) => {
    const response = await axios.post(`${base_url}/user/admin-login`, adminData);
    if (response.data.res.success !== false) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
}

const authService = {
    loginAdmin,
}

export default authService;