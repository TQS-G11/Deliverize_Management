import axios from "axios";

const token = window.localStorage.getItem("token");

const api = axios.create({
    baseURL: `${process.env.REACT_APP_DELIVERIZE_API_URL}/api`,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
});

export const findUsersByRole = (role) => api.get("/users", {params: {role: role}});