import './App.css';
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import React, {useEffect} from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import TopBar from "./components/TopBar";
import HomePage from "./containers/HomePage";
import LoginForm from "./components/LoginForm";
import URI from "./constants/URI";
import CompaniesPage from "./containers/CompaniesPage";
import RidersManagementPage from "./containers/RidersManagementPage";
import RiderDetailsPage from "./containers/RiderDetailsPage";

function App() {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const theme = React.useMemo(() => createTheme({
        palette: {
            mode: prefersDarkMode ? "dark" : "light",
        },
    }), [prefersDarkMode],);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <TopBar/>
            {getRoutes()}
        </ThemeProvider>
    );
}

const getRoutes = () => {
    return getPublicRoutes();
}


const getPublicRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<HomePage/>}/>
            <Route path={URI.LOGIN} element={<LoginForm/>}/>
            <Route path={URI.COMPANIES} element={<CompaniesPage/>}/>
            <Route path={URI.RIDERS} element={<RidersManagementPage/>}/>
            <Route path={`${URI.RIDERS}/:id`} element={<RiderDetailsPage/>}/>
        </Routes>
    );
};

(function () {
    let token = window.localStorage.getItem("token");
    if (token) axios.defaults.headers.common["Authorization"] = token; else axios.defaults.headers.common["Authorization"] = null;
})();

export default App;
