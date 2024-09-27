import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const PrivateRoute = () => {
    const {login} = useContext(AuthContext);

    return login ? <Outlet /> : <Navigate to="/entry" />
}