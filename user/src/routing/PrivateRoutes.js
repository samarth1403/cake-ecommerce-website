import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {
    const getTokenFromLocalStorage = JSON.parse(localStorage.getItem("customer"));
    return getTokenFromLocalStorage?.Token !== undefined ? children : <Navigate to="/sign-in-page" replace={true}/>
}