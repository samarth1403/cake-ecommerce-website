import axios from "axios";
import { base_url } from "../../utils/base_url";

const getAllUsers = async(data) => {
    const response = await axios.get(`${base_url}/user/all-users`, {
      headers: {
        Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
        Accept: "application/json",
      },
    });
    return response.data;
}

const userService = {
  getAllUsers,
};

export default userService;