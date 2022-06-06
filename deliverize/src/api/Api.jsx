import axios from "axios";

const token = window.localStorage.getItem("token");

const api = axios.create({
    baseURL: `${process.env.REACT_APP_DELIVERIZE_API_URL}/api`,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
});

export const findUsersByRole = (role) => api.get("/users", {params: {role: role}});

export const getUserDetails = (id) => api.get(`/users/${id}`);

export const changeCompanyStatus = (data) => api.post("/users/change-company-status", data);

export const getDeliveries = (params) => api.get("/deliveries", {params: params});
