import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://real-estate-mern-stack-production.up.railway.app",
    headers: {
        "Content-Type" : "application/json",
    },
    // params : {} // optional
});


export default axiosInstance