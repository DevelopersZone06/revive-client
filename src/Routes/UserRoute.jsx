import { Navigate } from "react-router-dom";
import useUser from "../Hooks/useUser";
import AllLoading from "../Shared/Loading/AllLoading";


const UserRoute = ({children}) => {
    const {isUser,loading}=useUser()
    
    if (loading) {
      return (
        <>
          <AllLoading></AllLoading>
        </>
      );
    }
    if (isUser) {
      return children;
    }
      return (
          <Navigate to="/dashboard" ></Navigate>
      );
};

export default UserRoute;
