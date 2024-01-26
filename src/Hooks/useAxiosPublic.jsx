import axios from "axios";

const axiosPublic=axios.create({
    baseURL:'https://revive-server-dun.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;