import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import AllLoading from "../Shared/Loading/AllLoading";


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <>
        <AllLoading></AllLoading>
      </>
    );
  }
  if (user) {
    return children;
  }
    return (
        <Navigate to="/login" state={location.pathname} replace={true}></Navigate>
    );
};

export default PrivateRoute;