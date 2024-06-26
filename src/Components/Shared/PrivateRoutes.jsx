import React from "react";
import UseAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ form: location }} replace></Navigate>;
};

export default PrivateRoutes;
