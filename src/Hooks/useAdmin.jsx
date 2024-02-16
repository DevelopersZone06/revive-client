import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useAdmin = () => {
    // const axiosPublic = useAxiosPublic();
    let isAdmin = false;
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
  
    const { data, isPending } = useQuery({
      queryKey: [user?.email, "isAdmin"],
      queryFn: async () => {
        const res = await axios.get(`https://revive-server-dun.vercel.app/admin`);
        return res.data;
      },
    });
    if (isPending) return <span className="loading loading-spinner loading-lg"></span>;
  
    if (data && data?.length > 0 && user) {
      const admin = data[0].email === userEmail;
      if (admin) {
        isAdmin = true;
      }
     
    }
    return { isAdmin, isPending };
};

export default useAdmin;