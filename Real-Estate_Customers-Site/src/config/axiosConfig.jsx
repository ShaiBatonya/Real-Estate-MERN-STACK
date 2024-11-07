import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL || 'http://localhost:4000',
    headers: {
        "Content-Type" : "application/json",
    },
    // params : {} // optional
});


export default axiosInstance