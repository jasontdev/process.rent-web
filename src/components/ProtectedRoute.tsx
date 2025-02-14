import {Navigate, Outlet} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const ProtectedRoute = () => {
    const { clientPrincipal, isAuthenticating } = useContext(AuthContext);

    if (!clientPrincipal && !isAuthenticating) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};