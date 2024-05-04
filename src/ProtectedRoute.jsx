import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Loader from "./components/Loader";

function ProtectedRoute() {
  const { isAutenticated, loading } = useAuth();
  if (loading) return <Loader />;
  if (!isAutenticated && !loading) return <Navigate to="/login" replace />;
  return <Outlet />;
}

export default ProtectedRoute;
