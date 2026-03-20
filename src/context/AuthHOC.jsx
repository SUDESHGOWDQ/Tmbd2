import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { useLocation } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { isAuthenticated } = useContext(MovieContext);
    const navigate = useNavigate();
    const location = useLocation();

    if (!isAuthenticated) {
      if (location.pathname !== "/login") {
        navigate("/login");
      }
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;