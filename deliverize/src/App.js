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

function App() {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const theme = React.useMemo(() => createTheme({
        palette: {
            mode: prefersDarkMode ? "dark" : "light",
        },
    }), [prefersDarkMode],);

    useEffect(() => {
        document.title = "Deliverize Management";
    })

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
        </Routes>
    );
};

(function () {
    let token = window.localStorage.getItem("token");
    if (token) axios.defaults.headers.common["Authorization"] = token; else axios.defaults.headers.common["Authorization"] = null;
})();

export default App;
