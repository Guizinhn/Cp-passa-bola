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
    // se não tem usuário logado, redireciona pro login e guarda a rota
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // se estiver logado, renderiza normalmente
  return children;
};
