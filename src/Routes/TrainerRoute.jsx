
import AllLoading from '../Shared/Loading/AllLoading';
import useTrainer from '../Hooks/useTrainer';
import { Navigate } from 'react-router-dom';

const TrainerRoute = ({children}) => {
    const {isTrainer,loading}=useTrainer()
    
    if (loading) {
      return (
        <>
          <AllLoading></AllLoading>
        </>
      );
    }
    if (isTrainer) {
      return children;
    }
      return (
          <Navigate to="/dashboard" ></Navigate>
      );
};

export default TrainerRoute;