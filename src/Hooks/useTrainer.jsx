import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../Provider/AuthProvider";



const useTrainer = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [isTrainer, setIsTrainer] = useState(false);
  
  useEffect(() => {
      setLoading(true); // Set loading to true when starting query
      const fetchData = async () => {
          try {
              const res = await axiosPublic.get(`/users`);
              const isTrainerExist = res.data.find(trainer => trainer.email === user?.email);
              setIsTrainer(isTrainerExist?.role === "trainer");
          } catch (error) {
              console.error("Error fetching data:", error);
          } finally {
              setLoading(false); // Set loading to false when query completes
          }
      };

      if (user) {
          fetchData();
      } else {
          setLoading(false); // If no user, no need to load, set loading to false
      }
  }, [axiosPublic, user]);

  return { isTrainer, loading };
};

 

export default useTrainer;