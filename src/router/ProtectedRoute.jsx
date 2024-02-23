import React, { useEffect } from "react";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuth = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);
  return children;
}
