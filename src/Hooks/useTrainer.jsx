import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useTrainer = () => {
    const axiosPublic = useAxiosPublic();
    const { user,loading } = useContext(AuthContext);
  
    let isTrainer = false;
    const { data, isPending } = useQuery({
      queryKey: [user?.email, "trainers"],
    // enabled: !loading,
      queryFn: async () => {
        const res = await axiosPublic.get(`/users`);
        return res.data;
      },
    });
    if (isPending) return  <span className="loading loading-spinner loading-lg"></span>
  
    const isTrainerExist = data?.find((trainer) => trainer.email === user?.email);
  
    const role = isTrainerExist?.role === "trainer";
  
    if (role) {
      isTrainer = true;
    }
  
    return { isTrainer, isPending };
  
};

export default useTrainer;