import axios from "axios";

const api = axios.create({
    baseURL: `${process.env.REACT_APP_DELIVERIZE_API_URL}/api`,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    },
});

export const login = (username, password) => axios.post(`${process.env.REACT_APP_DELIVERIZE_API_URL}/api/users/login`,
    {username, password});

export const signup = (username, password, name, role) =>
    axios.post(`${process.env.REACT_APP_DELIVERIZE_API_URL}/api/users/signup`,
        {username, password, name, role});