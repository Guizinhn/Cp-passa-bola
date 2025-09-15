import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Se não estiver logado, vai pro login e guarda a rota atual
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Se estiver logado, renderiza o componente normalmente
  return children;
};
