import axios from "axios";
import { base_url } from "../../utils/base_url";

const getAllUsers = async() => {
    const response = await axios.get(`${base_url}/user/all-users`);
    return response.data;
}

const userService = {
  getAllUsers,
};

export default userService;