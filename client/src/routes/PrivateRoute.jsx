import { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return <Loading></Loading>;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default PrivateRoute;
