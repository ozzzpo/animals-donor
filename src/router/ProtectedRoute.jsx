import React, { useEffect } from "react";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (Object.keys(user).length === 0) {
      navigate("/");
    }
  }, [user, navigate]);
  return children;
}
