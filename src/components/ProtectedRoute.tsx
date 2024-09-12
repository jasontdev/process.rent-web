import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { clientPrincipal, isAuthenticating } = useContext(AuthContext);

    if (!clientPrincipal && !isAuthenticating) {
        return <Navigate to="/login" />;
    }

    return children;
};