const getTokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage?.Token !== null ? getTokenFromLocalStorage?.Token : ""}`,
    Accept: "application/json",
  },
};

