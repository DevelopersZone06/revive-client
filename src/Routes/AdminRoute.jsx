
import { Navigate } from 'react-router-dom';

import AllLoading from '../Shared/Loading/AllLoading';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({children}) => {
    // const { user, loading } = useContext(AuthContext);
    const {isAdmin,isPending}=useAdmin()
    
    if (isPending) {
      return (
        <>
          <AllLoading></AllLoading>
        </>
      );
    }
    if (isAdmin) {
      return children;
    }
      return (
          <Navigate to="/dashboard" ></Navigate>
      );
};

export default AdminRoute;