import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import useAxiosPublic from "./useAxiosPublic";


const useAdmin = () => 
   
{
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const [adminLoading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
      setLoading(true); // Set loading to true when starting query
      const fetchData = async () => {
          try {
              const res = await axiosPublic.get(`/admin`);
              const isTrainerExist = res.data.find(admin => admin.email === user?.email);
              setIsAdmin(isTrainerExist?.role === "admin");
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

  return { isAdmin, adminLoading };
};


export default useAdmin;