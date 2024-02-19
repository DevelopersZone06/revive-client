import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useUser = () => {
    const axiosPublic = useAxiosPublic();
    const { user,loading } = useContext(AuthContext);
  
    let isUser = false;
    const { data, isPending } = useQuery({
      queryKey: [user?.email, "user"],
    // enabled: !loading,
      queryFn: async () => {
        const res = await axiosPublic.get(`/users`);
        return res.data;
      },
    });
    if (isPending) return  <span className="loading loading-spinner loading-lg"></span>
  
    const isUserExist = data?.find((user) => user.email === user?.email);
  
    const role = isUserExist?.role === "user";
  
    if (role) {
      isUser = true;
    }
  
    return { isUser, isPending };
};

export default useUser;