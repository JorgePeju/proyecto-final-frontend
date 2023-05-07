
import { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { UserContext } from "../../context";

export const ProtectedRoute = ({ children }) => {

  const { user } = useContext(UserContext);
  const { id } = useParams();
  
  if (user && user.role === "user" || !user ) return <Navigate to="/" />;
  // if (!user || user.id !== id) return <Navigate to="/" />;

  return <>{children}</>;
};
