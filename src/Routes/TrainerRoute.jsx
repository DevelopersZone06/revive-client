
import AllLoading from '../Shared/Loading/AllLoading';
import useTrainer from '../Hooks/useTrainer';
import { Navigate } from 'react-router-dom';

const TrainerRoute = ({children}) => {
    const {isTrainer,trainerLoading}=useTrainer()
    
    if (trainerLoading) {
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
          <Navigate to="/" ></Navigate>
      );
};

export default TrainerRoute;