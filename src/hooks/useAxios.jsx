import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://cine-verse-server.vercel.app',
    
})
const useAxios = () => {
  return axiosInstance

}

export default useAxios